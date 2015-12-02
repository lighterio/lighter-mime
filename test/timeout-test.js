'use strict'
/* global describe it */
var is = global.is || require('exam/lib/is')

describe('mime.timeout', function () {
  it('delays loading', function (done) {
    require.cache = {}
    var mime = require('../mime').timeout(20)
    setTimeout(function () {
      is(mime['123'], 'application/vnd.lotus-1-2-3')
      done()
    }, 30)
  })
})
