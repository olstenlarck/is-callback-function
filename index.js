/*!
 * is-callback-function <https://github.com/tunnckoCore/is-callback-function>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var fnName = require('get-fn-name')
var names = require('common-callback-names')
var inArray = require('in-array')

module.exports = function isCallbackFunction (fn) {
  return inArray(names, fnName(fn))
}
