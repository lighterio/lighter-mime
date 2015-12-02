var https = require('https')
var fs = require('fs')

console.log('Downloading types.json')
https.get('https://raw.githubusercontent.com/broofa/node-mime/master/types.json', function (response) {
  var json = ''
  response.on('data', function (chunk) {
    json += chunk
  })
  response.on('end', function () {
    write(json)
  })
})

function write (json) {
  console.log('Writing types.js')
  var mime = JSON.parse(json)
  var js = "var m=require('./mime')\nvar "
  var p = ''
  for (var value in mime) {
    var parts = value.split('/')
    var prefix = parts.shift() + '/'
    var rest = parts.join('/')
    if (p !== prefix) {
      p = prefix
      js += "p='" + p + "'\n"
    }
    var list = mime[value]
    js += 'm.' + list.join('=m.') + "=p+'" + rest + "'\n"
  }
  js = js.replace(/m\.(\d[^=]*)/g, "m['$1']")
  fs.writeFile('types.js', js, function () {
    console.log('Finished')
  })
}
