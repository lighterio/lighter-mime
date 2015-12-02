'use strict'
/* global describe it */
var is = global.is || require('exam/lib/is')

describe('mime.set', function () {
  require.cache = {}
  var mime = require('../mime')

  it('sets new types', function () {
    mime.set('ltl', 'application/ltl')
    is(mime.ltl, 'application/ltl')
  })

  it('resets existing types', function () {
    mime.set('js', 'text/javascript')
    is(mime.js, 'text/javascript')
  })
})
