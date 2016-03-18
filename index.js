/*!
 * is-callback-function <https://github.com/tunnckoCore/is-callback-function>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var fnName = require('get-fn-name')
var common = require('common-callback-names')
var inArray = require('in-array')

/**
 * > Check if given `fn` is callback function or not.
 * Notice that "async" functions are not `is-callback-function`,
 * they are [is-async-function][] - it may be consfusing, but they are different.
 *
 * **Example**
 *
 * ```js
 * var fs = require('fs')
 * var isCallback = require('is-callback-function')
 * var isAsync = require('is-callback-function')
 *
 * console.log(isCallback(fs.readFile)) // => false
 * console.log(isAsync(fs.readFile)) // => true
 *
 * console.log(isCallback(function (foo, bar, cb) {})) // => false
 * console.log(isAsync(function (foo, bar, cb) {})) // => true
 *
 * console.log(isCallback(function callback (foo, bar) {})) // => true
 * console.log(isAsync(function callback (foo, bar) {})) // => false
 *
 * console.log(isCallback(function named (foo, cb) {})) // => false
 * console.log(isAsync(function named (foo, cb) {})) // => true
 *
 * console.log(isCallback(function named (foo) {})) // => false
 * console.log(isAsync(function named (foo) {})) // => false
 *
 * console.log(isCallback(function foo (bar) {}, ['baz', 'foo', 'qux'])) // => true
 * console.log(isAsync(function foo (bar, qux) {}, ['baz', 'qux', 'aaa'])) // => true
 * console.log(isAsync(function foo (bar, qux) {}, ['baz', 'aaa'])) // => false
 * ```
 *
 * @param  {Function} `fn`
 * @param  {Array} `names`
 * @return {Boolean}
 * @api public
 */

module.exports = function isCallbackFunction (fn, names) {
  return inArray(names || common, fnName(fn))
}
