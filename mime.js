'use strict'

// Load basic MIME types.
var mime = module.exports = {
  css: 'text/css',
  gif: 'image/gif',
  html: 'text/html',
  ico: 'image/x-icon',
  jpg: 'image/jpg',
  js: 'application/javascript',
  json: 'application/json',
  png: 'image/png',
  svg: 'image/svg+xml',
  txt: 'text/plain',
  xml: 'application/xml'
}

// Allow types to be set.
hide(function set (ext, type) {
  mime[ext] = type
  return type
})

// Load all the types.
hide(function load () {
  require('./types')
  return mime
})

// Lazily load a comprehensive list.
hide(function timeout (ms) {
  clearTimeout(mime.timeout.timer)
  mime.timeout.timer = setTimeout(mime.load, ms)
  return mime
})

// Wait a tick.
mime.timeout(1)

// Define a hidden method.
function hide (fn) {
  Object.defineProperty(mime, fn.name, {
    enumerable: false,
    value: fn
  })
}
