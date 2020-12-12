const dir = '../static/plates/'
const fs = require('fs')

fs.readdir(dir, (err, files) => {
  files.forEach(file => {

    fs.readFile('../data.json', function (err, data) {
          var json = JSON.parse(data)
          json.push(file)
          fs.writeFile("data.json", JSON.stringify(json))
    })
    console.log(file)
  })

})
