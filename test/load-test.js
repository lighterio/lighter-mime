'use strict'
/* global describe it */
var is = global.is || require('exam/lib/is')

describe('mime.load', function () {
  it('loads everything', function () {
    require.cache = {}
    var mime = require('../mime').load()
    is(mime.docx, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
  })
})
