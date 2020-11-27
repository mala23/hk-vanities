const fs = require("fs").promises;
const path = require("path");
const events = require("events");
const cp = require("child_process");
const util = require("util");
const uuid = require('uuid').v4

const spawn = util.promisify(cp.spawn);

const tmpDir = process.env.TMP_DIR
const outDir = process.env.OUT_DIR
const platesDir = './static/plates'
const plateToPath = (plate) => path.join(platesDir, `${plate}.jpg`)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const res = await fn(req)
    res.status(200).json(res)
  }
}

const fn = async (req) => {
  const plates = req.body && req.body.plates
  if (!(plates instanceof Array)) throw new Error("Invalid input")
  const imgs = []
  for (const plate of plates) {
    const path = plateToPath(plate)
    await fs.stat(path)
    imgs.push(path)
  }
  const [outPath, clean] = await jpgsToMp4(imgs)
  try {
    const publicName = `${plates.map((x) => x.replace(/\W/g, '-')).join('+')}.mp4`
    const publicPath = path.join(outDir, publicName)
    await fs.cp(outPath, publicPath)
    return { url: publicName }
  } finally {
    await clean()
  }
}

const jpgsToMp4 = async (imgs, opts) => {
  const fps = opts && opts.fps ? opts.fps : 1;
  const outDir = path.join(tmpDir, uuid())
  const outFile = path.join(outDir, "out.mp4");
  try {
    await fs.mkdir(outDir);
  } catch (err) {
    if (!err || err.code != "EEXIST") {
      throw err;
    }
  }
  try {
    let i = 1;
    for (const img of imgs) {
      await fs.copyFile(img, path.join(outDir, `${i}.jpg`));
      i++;
    }
    console.log('starting')
    await spawn(
      "ffmpeg",
      [
        "-y",
        "-framerate",
        fps.toString(),
        "-pattern_type",
        "glob",
        "-i",
        path.join(outDir, "*.jpg"),
        "-c:v",
        "libx264",
        "-pix_fmt",
        "yuv420p",
        outFile,
      ],
      {
        stdio: 'inherit',
      }
    );
    console.log('done')
    const clean = async () => {
      await fs.unlink(outFile)
      await fs.unlink(outDir)
    }
    return [outFile, clean];
  } finally {
    let i = 1;
    for (const img of imgs) {
      await fs.unlink(path.join(outDir, `${i}.jpg`));
      i++;
    }
  }
};
