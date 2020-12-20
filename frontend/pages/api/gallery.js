const fs = require('fs').promises
const path = require('path')

const outDir = process.env.OUT_DIR

export default async function gallery(req, res) {
  const poems = await fs.readdir(outDir)
  res.json({
    poems: poems
      .filter((g) => g.endsWith('.mp4'))
      .map((g) => ({
        video: `/static/out/${g}`,
        text: g.split('.')[1].replace('+', ' '),
      })),
  })
}
