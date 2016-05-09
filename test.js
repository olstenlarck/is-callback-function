/*!
 * is-callback-function <https://github.com/tunnckoCore/is-callback-function>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var isCallbackFunction = require('./index')
var isAsyncFunction = require('is-async-function')

test('should throw Error if not a function', function (done) {
  function fixture () {
    isCallbackFunction(123)
  }
  test.throws(fixture, TypeError)
  test.throws(fixture, /Expected a function/)
  done()
})

test('should return false if function is async function (fs.readFile is not callback)', function (done) {
  var fs = require('fs')
  test.strictEqual(isCallbackFunction(fs.readFile), false)
  test.strictEqual(isAsyncFunction(fs.readFile), true)
  done()
})

test('should return true if function looks like callback (e.g. named `callback`)', function (done) {
  /* istanbul ignore next */
  function cb () {}
  test.strictEqual(isCallbackFunction(cb), true)
  test.strictEqual(isAsyncFunction(cb), false)
  done()
})

test('should allow passing custom names to be treated as `callback`', function (done) {
  /* istanbul ignore next */
  function foo () {}
  test.strictEqual(isCallbackFunction(foo, ['baz', 'foo', 'qux']), true)
  test.strictEqual(isCallbackFunction(function foo (bar) {}, ['baz', 'foo', 'qux']), true)
  test.strictEqual(isCallbackFunction(function (bar) {}, ['baz', null, 'foo', 'qux']), true)
  test.strictEqual(isAsyncFunction(function foo (bar, qux) {}, ['baz', 'qux', 'aaa']), true)
  test.strictEqual(isAsyncFunction(function foo (bar, qux) {}, ['baz', 'aaa']), false)
  done()
})
