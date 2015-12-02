'use strict'
/* global describe it */
var is = global.is || require('exam/lib/is')

describe('mime', function () {
  require.cache = {}
  var mime = require('../mime')
  it('is an object', function () {
    is.object(mime)
  })

  it('has a "css" MIME type', function () {
    is(mime.css, 'text/css')
  })
})
