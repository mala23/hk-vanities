const dir = '../static/thumbnails';
const fs = require('fs');

const data = []

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.jpg')) {
    var obj = {
      "text": file.replace(/\.[^/.]+$/, ""),
      "image": "/static/thumbnails/" + file
    }
    data.push(obj)
  }

});

fs.writeFileSync("../data/platesData.json", JSON.stringify(data, null, '  '))

console.log(data)
