/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 9292:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parent = __webpack_require__(1646);

module.exports = parent;

/***/ }),

/***/ 8469:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(9101);

__webpack_require__(8938);

var entryUnbind = __webpack_require__(7592);

module.exports = entryUnbind('Array', 'flat');

/***/ }),

/***/ 2580:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* unused reexport */ __webpack_require__(9791);

/***/ }),

/***/ 9791:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parent = __webpack_require__(9292);

module.exports = parent;

/***/ }),

/***/ 5618:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(1438);

var tryToString = __webpack_require__(1881);

var $TypeError = TypeError; // `Assert: IsCallable(argument) is true`

module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};

/***/ }),

/***/ 7331:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(7457);

var create = __webpack_require__(5131);

var defineProperty = (__webpack_require__(811).f);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
} // add a key to Array.prototype[@@unscopables]


module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

/***/ }),

/***/ 3739:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(2949);

var $String = String;
var $TypeError = TypeError; // `Assert: Type(argument) is Object`

module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};

/***/ }),

/***/ 477:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIndexedObject = __webpack_require__(6211);

var toAbsoluteIndex = __webpack_require__(8786);

var lengthOfArrayLike = __webpack_require__(1563); // `Array.prototype.{ indexOf, includes }` methods implementation


var createMethod = function createMethod(IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

/***/ }),

/***/ 5350:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(1746);

var isConstructor = __webpack_require__(3579);

var isObject = __webpack_require__(2949);

var wellKnownSymbol = __webpack_require__(7457);

var SPECIES = wellKnownSymbol('species');
var $Array = Array; // a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

module.exports = function (originalArray) {
  var C;

  if (isArray(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? $Array : C;
};

/***/ }),

/***/ 586:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arraySpeciesConstructor = __webpack_require__(5350); // `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate


module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

/***/ }),

/***/ 6202:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(1824);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};

/***/ }),

/***/ 5830:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var TO_STRING_TAG_SUPPORT = __webpack_require__(4657);

var isCallable = __webpack_require__(1438);

var classofRaw = __webpack_require__(6202);

var wellKnownSymbol = __webpack_require__(7457);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object; // ES3 wrong here

var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};

/***/ }),

/***/ 3780:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hasOwn = __webpack_require__(6957);

var ownKeys = __webpack_require__(6813);

var getOwnPropertyDescriptorModule = __webpack_require__(9609);

var definePropertyModule = __webpack_require__(811);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

/***/ }),

/***/ 4059:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var definePropertyModule = __webpack_require__(811);

var createPropertyDescriptor = __webpack_require__(3300);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ 3300:
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ 812:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toPropertyKey = __webpack_require__(1247);

var definePropertyModule = __webpack_require__(811);

var createPropertyDescriptor = __webpack_require__(3300);

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
};

/***/ }),

/***/ 6899:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(1438);

var definePropertyModule = __webpack_require__(811);

var makeBuiltIn = __webpack_require__(1221);

var defineGlobalProperty = __webpack_require__(9443);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);

  if (options.global) {
    if (simple) O[key] = value;else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];else if (O[key]) simple = true;
    } catch (error) {
      /* empty */
    }

    if (simple) O[key] = value;else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  }

  return O;
};

/***/ }),

/***/ 9443:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328); // eslint-disable-next-line es/no-object-defineproperty -- safe


var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    global[key] = value;
  }

  return value;
};

/***/ }),

/***/ 2171:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(8901); // Detect IE8's incomplete defineProperty implementation


module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function get() {
      return 7;
    }
  })[1] != 7;
});

/***/ }),

/***/ 8192:
/***/ ((module) => {

var documentAll = typeof document == 'object' && document.all; // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing

var IS_HTMLDDA = typeof documentAll == 'undefined' && documentAll !== undefined;
module.exports = {
  all: documentAll,
  IS_HTMLDDA: IS_HTMLDDA
};

/***/ }),

/***/ 4603:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var isObject = __webpack_require__(2949);

var document = global.document; // typeof document.createElement is 'object' in old IE

var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

/***/ }),

/***/ 4879:
/***/ ((module) => {

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};

/***/ }),

/***/ 5096:
/***/ ((module) => {

module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

/***/ }),

/***/ 2912:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var userAgent = __webpack_require__(5096);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.'); // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us

  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
} // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0


if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);

  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;

/***/ }),

/***/ 7592:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var uncurryThis = __webpack_require__(1824);

module.exports = function (CONSTRUCTOR, METHOD) {
  return uncurryThis(global[CONSTRUCTOR].prototype[METHOD]);
};

/***/ }),

/***/ 393:
/***/ ((module) => {

// IE8- don't enum bug keys
module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

/***/ }),

/***/ 9004:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var getOwnPropertyDescriptor = (__webpack_require__(9609).f);

var createNonEnumerableProperty = __webpack_require__(4059);

var defineBuiltIn = __webpack_require__(6899);

var defineGlobalProperty = __webpack_require__(9443);

var copyConstructorProperties = __webpack_require__(3780);

var isForced = __webpack_require__(2612);
/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/


module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }

    defineBuiltIn(target, key, sourceProperty, options);
  }
};

/***/ }),

/***/ 8901:
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

/***/ }),

/***/ 8529:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isArray = __webpack_require__(1746);

var lengthOfArrayLike = __webpack_require__(1563);

var doesNotExceedSafeInteger = __webpack_require__(4879);

var bind = __webpack_require__(1871); // `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray


var flattenIntoArray = function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg) : false;
  var element, elementLen;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        elementLen = lengthOfArrayLike(element);
        targetIndex = flattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1) - 1;
      } else {
        doesNotExceedSafeInteger(targetIndex + 1);
        target[targetIndex] = element;
      }

      targetIndex++;
    }

    sourceIndex++;
  }

  return targetIndex;
};

module.exports = flattenIntoArray;

/***/ }),

/***/ 1871:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(5529);

var aCallable = __webpack_require__(5618);

var NATIVE_BIND = __webpack_require__(708);

var bind = uncurryThis(uncurryThis.bind); // optional / simple context binding

module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function () {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ 708:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(8901);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = function () {
    /* empty */
  }.bind(); // eslint-disable-next-line no-prototype-builtins -- safe


  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

/***/ }),

/***/ 8435:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_BIND = __webpack_require__(708);

var call = Function.prototype.call;
module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};

/***/ }),

/***/ 9411:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var hasOwn = __webpack_require__(6957);

var FunctionPrototype = Function.prototype; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, 'name'); // additional protection from minified / mangled / dropped function names

var PROPER = EXISTS && function something() {
  /* empty */
}.name === 'something';

var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable);
module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

/***/ }),

/***/ 5529:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classofRaw = __webpack_require__(6202);

var uncurryThis = __webpack_require__(1824);

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};

/***/ }),

/***/ 1824:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_BIND = __webpack_require__(708);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};

/***/ }),

/***/ 1575:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var isCallable = __webpack_require__(1438);

var aFunction = function aFunction(argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

/***/ }),

/***/ 1072:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(5830);

var getMethod = __webpack_require__(2670);

var isNullOrUndefined = __webpack_require__(2294);

var Iterators = __webpack_require__(9759);

var wellKnownSymbol = __webpack_require__(7457);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR) || getMethod(it, '@@iterator') || Iterators[classof(it)];
};

/***/ }),

/***/ 8134:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(8435);

var aCallable = __webpack_require__(5618);

var anObject = __webpack_require__(3739);

var tryToString = __webpack_require__(1881);

var getIteratorMethod = __webpack_require__(1072);

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw $TypeError(tryToString(argument) + ' is not iterable');
};

/***/ }),

/***/ 2670:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aCallable = __webpack_require__(5618);

var isNullOrUndefined = __webpack_require__(2294); // `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod


module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};

/***/ }),

/***/ 2328:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var check = function check(it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

/***/ }),

/***/ 6957:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(1824);

var toObject = __webpack_require__(6068);

var hasOwnProperty = uncurryThis({}.hasOwnProperty); // `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};

/***/ }),

/***/ 1055:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 4861:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(1575);

module.exports = getBuiltIn('document', 'documentElement');

/***/ }),

/***/ 2674:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var fails = __webpack_require__(8901);

var createElement = __webpack_require__(4603); // Thanks to IE8 for its funny defineProperty


module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ 8483:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(1824);

var fails = __webpack_require__(8901);

var classof = __webpack_require__(6202);

var $Object = Object;
var split = uncurryThis(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings

module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;

/***/ }),

/***/ 7599:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(1824);

var isCallable = __webpack_require__(1438);

var store = __webpack_require__(5153);

var functionToString = uncurryThis(Function.toString); // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;

/***/ }),

/***/ 4081:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_WEAK_MAP = __webpack_require__(1520);

var global = __webpack_require__(2328);

var isObject = __webpack_require__(2949);

var createNonEnumerableProperty = __webpack_require__(4059);

var hasOwn = __webpack_require__(6957);

var shared = __webpack_require__(5153);

var sharedKey = __webpack_require__(1449);

var hiddenKeys = __webpack_require__(1055);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function enforce(it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function getterFor(TYPE) {
  return function (it) {
    var state;

    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */

  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */

  set = function set(it, metadata) {
    if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };

  get = function get(it) {
    return store.get(it) || {};
  };

  has = function has(it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;

  set = function set(it, metadata) {
    if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };

  get = function get(it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };

  has = function has(it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

/***/ }),

/***/ 8110:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(7457);

var Iterators = __webpack_require__(9759);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype; // check on default Array iterator

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

/***/ }),

/***/ 1746:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(6202); // `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe


module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};

/***/ }),

/***/ 1438:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $documentAll = __webpack_require__(8192);

var documentAll = $documentAll.all; // `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable

module.exports = $documentAll.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};

/***/ }),

/***/ 3579:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(1824);

var fails = __webpack_require__(8901);

var isCallable = __webpack_require__(1438);

var classof = __webpack_require__(5830);

var getBuiltIn = __webpack_require__(1575);

var inspectSource = __webpack_require__(7599);

var noop = function noop() {
  /* empty */
};

var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;

  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;

  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction':
      return false;
  }

  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true; // `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor

module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;

/***/ }),

/***/ 2612:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(8901);

var isCallable = __webpack_require__(1438);

var replacement = /#|\.prototype\./;

var isForced = function isForced(feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;

/***/ }),

/***/ 2294:
/***/ ((module) => {

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};

/***/ }),

/***/ 2949:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(1438);

var $documentAll = __webpack_require__(8192);

var documentAll = $documentAll.all;
module.exports = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};

/***/ }),

/***/ 6719:
/***/ ((module) => {

module.exports = false;

/***/ }),

/***/ 5634:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(1575);

var isCallable = __webpack_require__(1438);

var isPrototypeOf = __webpack_require__(3547);

var USE_SYMBOL_AS_UID = __webpack_require__(4719);

var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

/***/ }),

/***/ 6449:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var bind = __webpack_require__(1871);

var call = __webpack_require__(8435);

var anObject = __webpack_require__(3739);

var tryToString = __webpack_require__(1881);

var isArrayIteratorMethod = __webpack_require__(8110);

var lengthOfArrayLike = __webpack_require__(1563);

var isPrototypeOf = __webpack_require__(3547);

var getIterator = __webpack_require__(8134);

var getIteratorMethod = __webpack_require__(1072);

var iteratorClose = __webpack_require__(6535);

var $TypeError = TypeError;

var Result = function Result(stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function stop(condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function callFn(value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    }

    return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw $TypeError(tryToString(iterable) + ' is not iterable'); // optimisation for array iterators

    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      }

      return new Result(false);
    }

    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;

  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }

    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  }

  return new Result(false);
};

/***/ }),

/***/ 6535:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(8435);

var anObject = __webpack_require__(3739);

var getMethod = __webpack_require__(2670);

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);

  try {
    innerResult = getMethod(iterator, 'return');

    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }

    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }

  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};

/***/ }),

/***/ 9759:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 1563:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toLength = __webpack_require__(588); // `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike


module.exports = function (obj) {
  return toLength(obj.length);
};

/***/ }),

/***/ 1221:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(1824);

var fails = __webpack_require__(8901);

var isCallable = __webpack_require__(1438);

var hasOwn = __webpack_require__(6957);

var DESCRIPTORS = __webpack_require__(2171);

var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(9411).CONFIGURABLE);

var inspectSource = __webpack_require__(7599);

var InternalStateModule = __webpack_require__(4081);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String; // eslint-disable-next-line es/no-object-defineproperty -- safe

var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () {
    /* empty */
  }, 'length', {
    value: 8
  }).length !== 8;
});
var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }

  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;

  if (!hasOwn(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
    if (DESCRIPTORS) defineProperty(value, 'name', {
      value: name,
      configurable: true
    });else value.name = name;
  }

  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', {
      value: options.arity
    });
  }

  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', {
        writable: false
      }); // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) {
    /* empty */
  }

  var state = enforceInternalState(value);

  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  }

  return value;
}; // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required


Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');

/***/ }),

/***/ 988:
/***/ ((module) => {

var ceil = Math.ceil;
var floor = Math.floor; // `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe

module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};

/***/ }),

/***/ 5131:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(3739);

var definePropertiesModule = __webpack_require__(422);

var enumBugKeys = __webpack_require__(393);

var hiddenKeys = __webpack_require__(1055);

var html = __webpack_require__(4861);

var documentCreateElement = __webpack_require__(4603);

var sharedKey = __webpack_require__(1449);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function EmptyConstructor() {
  /* empty */
};

var scriptTag = function scriptTag(content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
}; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak

  return temp;
}; // Create object with fake `null` prototype: use iframe Object with cleared prototype


var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
}; // Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug


var activeXDocument;

var _NullProtoObject = function NullProtoObject() {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) {
    /* ignore */
  }

  _NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
  : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH

  var length = enumBugKeys.length;

  while (length--) {
    delete _NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  }

  return _NullProtoObject();
};

hiddenKeys[IE_PROTO] = true; // `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe

module.exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = _NullProtoObject();

  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

/***/ }),

/***/ 422:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(882);

var definePropertyModule = __webpack_require__(811);

var anObject = __webpack_require__(3739);

var toIndexedObject = __webpack_require__(6211);

var objectKeys = __webpack_require__(669); // `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe


exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;

  while (length > index) {
    definePropertyModule.f(O, key = keys[index++], props[key]);
  }

  return O;
};

/***/ }),

/***/ 811:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var IE8_DOM_DEFINE = __webpack_require__(2674);

var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(882);

var anObject = __webpack_require__(3739);

var toPropertyKey = __webpack_require__(1247);

var $TypeError = TypeError; // eslint-disable-next-line es/no-object-defineproperty -- safe

var $defineProperty = Object.defineProperty; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable'; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);

  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);

    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  }

  return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ 9609:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var call = __webpack_require__(8435);

var propertyIsEnumerableModule = __webpack_require__(7395);

var createPropertyDescriptor = __webpack_require__(3300);

var toIndexedObject = __webpack_require__(6211);

var toPropertyKey = __webpack_require__(1247);

var hasOwn = __webpack_require__(6957);

var IE8_DOM_DEFINE = __webpack_require__(2674); // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe


var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) {
    /* empty */
  }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

/***/ }),

/***/ 5166:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(4085);

var enumBugKeys = __webpack_require__(393);

var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

/***/ }),

/***/ 5863:
/***/ ((__unused_webpack_module, exports) => {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ 3547:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(1824);

module.exports = uncurryThis({}.isPrototypeOf);

/***/ }),

/***/ 4085:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(1824);

var hasOwn = __webpack_require__(6957);

var toIndexedObject = __webpack_require__(6211);

var indexOf = (__webpack_require__(477).indexOf);

var hiddenKeys = __webpack_require__(1055);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) {
    !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  } // Don't enum bug & hidden keys


  while (names.length > i) {
    if (hasOwn(O, key = names[i++])) {
      ~indexOf(result, key) || push(result, key);
    }
  }

  return result;
};

/***/ }),

/***/ 669:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(4085);

var enumBugKeys = __webpack_require__(393); // `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe


module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

/***/ }),

/***/ 7395:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


var $propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

/***/ }),

/***/ 8256:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var uncurryThis = __webpack_require__(1824);

var objectKeys = __webpack_require__(669);

var toIndexedObject = __webpack_require__(6211);

var $propertyIsEnumerable = (__webpack_require__(7395).f);

var propertyIsEnumerable = uncurryThis($propertyIsEnumerable);
var push = uncurryThis([].push); // `Object.{ entries, values }` methods implementation

var createMethod = function createMethod(TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;

    while (length > i) {
      key = keys[i++];

      if (!DESCRIPTORS || propertyIsEnumerable(O, key)) {
        push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }

    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};

/***/ }),

/***/ 6482:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(8435);

var isCallable = __webpack_require__(1438);

var isObject = __webpack_require__(2949);

var $TypeError = TypeError; // `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive

module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ 6813:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(1575);

var uncurryThis = __webpack_require__(1824);

var getOwnPropertyNamesModule = __webpack_require__(5166);

var getOwnPropertySymbolsModule = __webpack_require__(5863);

var anObject = __webpack_require__(3739);

var concat = uncurryThis([].concat); // all object keys, includes non-enumerable and symbols

module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

/***/ }),

/***/ 4682:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isNullOrUndefined = __webpack_require__(2294);

var $TypeError = TypeError; // `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible

module.exports = function (it) {
  if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
  return it;
};

/***/ }),

/***/ 1449:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(8849);

var uid = __webpack_require__(858);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

/***/ }),

/***/ 5153:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var defineGlobalProperty = __webpack_require__(9443);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});
module.exports = store;

/***/ }),

/***/ 8849:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_PURE = __webpack_require__(6719);

var store = __webpack_require__(5153);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.27.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.27.2/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

/***/ }),

/***/ 7825:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(2912);

var fails = __webpack_require__(8901); // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing


module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/***/ }),

/***/ 8786:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIntegerOrInfinity = __webpack_require__(7278);

var max = Math.max;
var min = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

/***/ }),

/***/ 6211:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(8483);

var requireObjectCoercible = __webpack_require__(4682);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

/***/ }),

/***/ 7278:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trunc = __webpack_require__(988); // `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity


module.exports = function (argument) {
  var number = +argument; // eslint-disable-next-line no-self-compare -- NaN check

  return number !== number || number === 0 ? 0 : trunc(number);
};

/***/ }),

/***/ 588:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIntegerOrInfinity = __webpack_require__(7278);

var min = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

/***/ }),

/***/ 6068:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(4682);

var $Object = Object; // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject

module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};

/***/ }),

/***/ 4375:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(8435);

var isObject = __webpack_require__(2949);

var isSymbol = __webpack_require__(5634);

var getMethod = __webpack_require__(2670);

var ordinaryToPrimitive = __webpack_require__(6482);

var wellKnownSymbol = __webpack_require__(7457);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive'); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive

module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;

  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }

  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

/***/ }),

/***/ 1247:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPrimitive = __webpack_require__(4375);

var isSymbol = __webpack_require__(5634); // `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey


module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

/***/ }),

/***/ 4657:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(7457);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
test[TO_STRING_TAG] = 'z';
module.exports = String(test) === '[object z]';

/***/ }),

/***/ 1881:
/***/ ((module) => {

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};

/***/ }),

/***/ 858:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(1824);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};

/***/ }),

/***/ 4719:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(7825);

module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';

/***/ }),

/***/ 882:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var fails = __webpack_require__(8901); // V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334


module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () {
    /* empty */
  }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

/***/ }),

/***/ 1520:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var isCallable = __webpack_require__(1438);

var WeakMap = global.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

/***/ }),

/***/ 7457:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var shared = __webpack_require__(8849);

var hasOwn = __webpack_require__(6957);

var uid = __webpack_require__(858);

var NATIVE_SYMBOL = __webpack_require__(7825);

var USE_SYMBOL_AS_UID = __webpack_require__(4719);

var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol('Symbol.' + name);
  }

  return WellKnownSymbolsStore[name];
};

/***/ }),

/***/ 9101:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(9004);

var flattenIntoArray = __webpack_require__(8529);

var toObject = __webpack_require__(6068);

var lengthOfArrayLike = __webpack_require__(1563);

var toIntegerOrInfinity = __webpack_require__(7278);

var arraySpeciesCreate = __webpack_require__(586); // `Array.prototype.flat` method
// https://tc39.es/ecma262/#sec-array.prototype.flat


$({
  target: 'Array',
  proto: true
}, {
  flat: function flat() {
    var depthArg = arguments.length ? arguments[0] : undefined;
    var O = toObject(this);
    var sourceLen = lengthOfArrayLike(O);
    var A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toIntegerOrInfinity(depthArg));
    return A;
  }
});

/***/ }),

/***/ 8938:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__(7331); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables


addToUnscopables('flat');

/***/ }),

/***/ 4875:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(9004);

var $entries = (__webpack_require__(8256).entries); // `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries


$({
  target: 'Object',
  stat: true
}, {
  entries: function entries(O) {
    return $entries(O);
  }
});

/***/ }),

/***/ 8819:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(9004);

var iterate = __webpack_require__(6449);

var createProperty = __webpack_require__(812); // `Object.fromEntries` method
// https://github.com/tc39/proposal-object-from-entries


$({
  target: 'Object',
  stat: true
}, {
  fromEntries: function fromEntries(iterable) {
    var obj = {};
    iterate(iterable, function (k, v) {
      createProperty(obj, k, v);
    }, {
      AS_ENTRIES: true
    });
    return obj;
  }
});

/***/ }),

/***/ 2231:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(9004);

var $values = (__webpack_require__(8256).values); // `Object.values` method
// https://tc39.es/ecma262/#sec-object.values


$({
  target: 'Object',
  stat: true
}, {
  values: function values(O) {
    return $values(O);
  }
});

/***/ }),

/***/ 1646:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parent = __webpack_require__(8469);

module.exports = parent;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "args": () => (/* binding */ args),
  "main": () => (/* binding */ main_main)
});

;// CONCATENATED MODULE: external "kolmafia"
const external_kolmafia_namespaceObject = require("kolmafia");
// EXTERNAL MODULE: ./node_modules/libram/node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__(4875);
// EXTERNAL MODULE: ./node_modules/libram/node_modules/core-js/features/array/flat.js
var flat = __webpack_require__(2580);
// EXTERNAL MODULE: ./node_modules/libram/node_modules/core-js/modules/es.object.from-entries.js
var es_object_from_entries = __webpack_require__(8819);
;// CONCATENATED MODULE: ./node_modules/libram/dist/propertyTypes.js
/** THIS FILE IS AUTOMATICALLY GENERATED. See tools/parseDefaultProperties.ts for more information */
var booleanProperties = ["abortOnChoiceWhenNotInChoice", "addChatCommandLine", "addCreationQueue", "addStatusBarToFrames", "allowCloseableDesktopTabs", "allowNegativeTally", "allowNonMoodBurning", "allowSummonBurning", "autoHighlightOnFocus", "broadcastEvents", "cacheMallSearches", "chatBeep", "chatLinksUseRelay", "compactChessboard", "copyAsHTML", "customizedTabs", "debugBuy", "debugConsequences", "debugFoxtrotRemoval", "debugPathnames", "gapProtection", "gitInstallDependencies", "gitShowCommitMessages", "gitUpdateOnLogin", "greenScreenProtection", "guiUsesOneWindow", "hideServerDebugText", "logAcquiredItems", "logBattleAction", "logBrowserInteractions", "logChatMessages", "logChatRequests", "logCleanedHTML", "logDecoratedResponses", "logFamiliarActions", "logGainMessages", "logReadableHTML", "logPreferenceChange", "logMonsterHealth", "logReverseOrder", "logStatGains", "logStatusEffects", "logStatusOnLogin", "macroDebug", "macroLens", "mementoListActive", "mergeHobopolisChat", "printStackOnAbort", "proxySet", "relayAddSounds", "relayAddsCustomCombat", "relayAddsDiscoHelper", "relayAddsGraphicalCLI", "relayAddsQuickScripts", "relayAddsRestoreLinks", "relayAddsUpArrowLinks", "relayAddsUseLinks", "relayAddsWikiLinks", "relayAllowRemoteAccess", "relayBrowserOnly", "relayCacheUncacheable", "relayFormatsChatText", "relayHidesJunkMallItems", "relayMaintainsEffects", "relayMaintainsHealth", "relayMaintainsMana", "relayOverridesImages", "relayRunsAfterAdventureScript", "relayRunsBeforeBattleScript", "relayRunsBeforePVPScript", "relayScriptButtonFirst", "relayTextualizesEffects", "relayTrimsZapList", "relayUsesInlineLinks", "relayUsesIntegratedChat", "relayWarnOnRecoverFailure", "removeMalignantEffects", "saveSettingsOnSet", "sharePriceData", "showAllRequests", "showExceptionalRequests", "stealthLogin", "svnInstallDependencies", "svnShowCommitMessages", "svnUpdateOnLogin", "switchEquipmentForBuffs", "syncAfterSvnUpdate", "useChatToolbar", "useContactsFrame", "useDevProxyServer", "useDockIconBadge", "useHugglerChannel", "useImageCache", "useLastUserAgent", "useSystemTrayIcon", "useTabbedChatFrame", "useToolbars", "useCachedVolcanoMaps", "useZoneComboBox", "verboseSpeakeasy", "verboseFloundry", "wrapLongLines", "_gitUpdated", "_svnRepoFileFetched", "_svnUpdated", "antagonisticSnowmanKitAvailable", "arcadeGameHints", "armoryUnlocked", "autoForbidIgnoringStores", "autoCraft", "autoQuest", "autoEntangle", "autoGarish", "autoManaRestore", "autoFillMayoMinder", "autoPinkyRing", "autoPlantHardcore", "autoPlantSoftcore", "autoPotionID", "autoRepairBoxServants", "autoSatisfyWithCloset", "autoSatisfyWithCoinmasters", "autoSatisfyWithMall", "autoSatisfyWithNPCs", "autoSatisfyWithStash", "autoSatisfyWithStorage", "autoSetConditions", "autoSteal", "autoTuxedo", "backupCameraReverserEnabled", "badMoonEncounter01", "badMoonEncounter02", "badMoonEncounter03", "badMoonEncounter04", "badMoonEncounter05", "badMoonEncounter06", "badMoonEncounter07", "badMoonEncounter08", "badMoonEncounter09", "badMoonEncounter10", "badMoonEncounter11", "badMoonEncounter12", "badMoonEncounter13", "badMoonEncounter14", "badMoonEncounter15", "badMoonEncounter16", "badMoonEncounter17", "badMoonEncounter18", "badMoonEncounter19", "badMoonEncounter20", "badMoonEncounter21", "badMoonEncounter22", "badMoonEncounter23", "badMoonEncounter24", "badMoonEncounter25", "badMoonEncounter26", "badMoonEncounter27", "badMoonEncounter28", "badMoonEncounter29", "badMoonEncounter30", "badMoonEncounter31", "badMoonEncounter32", "badMoonEncounter33", "badMoonEncounter34", "badMoonEncounter35", "badMoonEncounter36", "badMoonEncounter37", "badMoonEncounter38", "badMoonEncounter39", "badMoonEncounter40", "badMoonEncounter41", "badMoonEncounter42", "badMoonEncounter43", "badMoonEncounter44", "badMoonEncounter45", "badMoonEncounter46", "badMoonEncounter47", "badMoonEncounter48", "barrelShrineUnlocked", "bigBrotherRescued", "blackBartsBootyAvailable", "bondAdv", "bondBeach", "bondBeat", "bondBooze", "bondBridge", "bondDesert", "bondDR", "bondDrunk1", "bondDrunk2", "bondHoney", "bondHP", "bondInit", "bondItem1", "bondItem2", "bondItem3", "bondJetpack", "bondMartiniDelivery", "bondMartiniPlus", "bondMartiniTurn", "bondMeat", "bondMox1", "bondMox2", "bondMPregen", "bondMus1", "bondMus2", "bondMys1", "bondMys2", "bondSpleen", "bondStat", "bondStat2", "bondStealth", "bondStealth2", "bondSymbols", "bondWar", "bondWeapon2", "bondWpn", "booPeakLit", "bootsCharged", "breakfastCompleted", "burrowgrubHiveUsed", "calzoneOfLegendEaten", "canteenUnlocked", "chaosButterflyThrown", "chatbotScriptExecuted", "chateauAvailable", "chatLiterate", "chatServesUpdates", "checkJackassHardcore", "checkJackassSoftcore", "clanAttacksEnabled", "coldAirportAlways", "considerShadowNoodles", "controlRoomUnlock", "concertVisited", "controlPanel1", "controlPanel2", "controlPanel3", "controlPanel4", "controlPanel5", "controlPanel6", "controlPanel7", "controlPanel8", "controlPanel9", "corralUnlocked", "dailyDungeonDone", "dampOldBootPurchased", "daycareOpen", "deepDishOfLegendEaten", "demonSummoned", "dinseyAudienceEngagement", "dinseyGarbagePirate", "dinseyRapidPassEnabled", "dinseyRollercoasterNext", "dinseySafetyProtocolsLoose", "doghouseBoarded", "dontStopForCounters", "drippingHallUnlocked", "drippyShieldUnlocked", "edUsedLash", "eldritchFissureAvailable", "eldritchHorrorAvailable", "essenceOfAnnoyanceAvailable", "essenceOfBearAvailable", "expressCardUsed", "falloutShelterChronoUsed", "falloutShelterCoolingTankUsed", "fireExtinguisherBatHoleUsed", "fireExtinguisherChasmUsed", "fireExtinguisherCyrptUsed", "fireExtinguisherDesertUsed", "fireExtinguisherHaremUsed", "fistTeachingsHaikuDungeon", "fistTeachingsPokerRoom", "fistTeachingsBarroomBrawl", "fistTeachingsConservatory", "fistTeachingsBatHole", "fistTeachingsFunHouse", "fistTeachingsMenagerie", "fistTeachingsSlums", "fistTeachingsFratHouse", "fistTeachingsRoad", "fistTeachingsNinjaSnowmen", "flickeringPixel1", "flickeringPixel2", "flickeringPixel3", "flickeringPixel4", "flickeringPixel5", "flickeringPixel6", "flickeringPixel7", "flickeringPixel8", "frAlways", "frCemetaryUnlocked", "friarsBlessingReceived", "frMountainsUnlocked", "frSwampUnlocked", "frVillageUnlocked", "frWoodUnlocked", "getawayCampsiteUnlocked", "ghostPencil1", "ghostPencil2", "ghostPencil3", "ghostPencil4", "ghostPencil5", "ghostPencil6", "ghostPencil7", "ghostPencil8", "ghostPencil9", "gingerAdvanceClockUnlocked", "gingerBlackmailAccomplished", "gingerbreadCityAvailable", "gingerExtraAdventures", "gingerNegativesDropped", "gingerSewersUnlocked", "gingerSubwayLineUnlocked", "gingerRetailUnlocked", "glitchItemAvailable", "grabCloversHardcore", "grabCloversSoftcore", "guideToSafariAvailable", "guyMadeOfBeesDefeated", "hallowienerDefiledNook", "hallowienerGuanoJunction", "hallowienerKnollGym", "hallowienerMadnessBakery", "hallowienerMiddleChamber", "hallowienerOvergrownLot", "hallowienerSkeletonStore", "hallowienerSmutOrcs", "hallowienerSonofaBeach", "hallowienerVolcoino", "hardcorePVPWarning", "harvestBatteriesHardcore", "harvestBatteriesSoftcore", "hasAutumnaton", "hasBartender", "hasChef", "hasCocktailKit", "hasCosmicBowlingBall", "hasDetectiveSchool", "hasMaydayContract", "hasOven", "hasRange", "hasShaker", "hasSushiMat", "haveBoxingDaydreamHardcore", "haveBoxingDaydreamSoftcore", "hermitHax0red", "holidayHalsBookAvailable", "horseryAvailable", "hotAirportAlways", "implementGlitchItem", "intenseCurrents", "itemBoughtPerAscension637", "itemBoughtPerAscension8266", "itemBoughtPerAscension10790", "itemBoughtPerAscension10794", "itemBoughtPerAscension10795", "itemBoughtPerCharacter6423", "itemBoughtPerCharacter6428", "itemBoughtPerCharacter6429", "kingLiberated", "lastPirateInsult1", "lastPirateInsult2", "lastPirateInsult3", "lastPirateInsult4", "lastPirateInsult5", "lastPirateInsult6", "lastPirateInsult7", "lastPirateInsult8", "lawOfAveragesAvailable", "leafletCompleted", "libraryCardUsed", "lockPicked", "logBastilleBattalionBattles", "loginRecoveryHardcore", "loginRecoverySoftcore", "lovebugsUnlocked", "loveTunnelAvailable", "lowerChamberUnlock", "madnessBakeryAvailable", "makePocketWishesHardcore", "makePocketWishesSoftcore", "manualOfNumberologyAvailable", "mappingMonsters", "mapToAnemoneMinePurchased", "mapToKokomoAvailable", "mapToMadnessReefPurchased", "mapToTheDiveBarPurchased", "mapToTheMarinaraTrenchPurchased", "mapToTheSkateParkPurchased", "maraisBeaverUnlock", "maraisCorpseUnlock", "maraisDarkUnlock", "maraisVillageUnlock", "maraisWildlifeUnlock", "maraisWizardUnlock", "maximizerAlwaysCurrent", "maximizerCreateOnHand", "maximizerCurrentMallPrices", "maximizerFoldables", "maximizerIncludeAll", "maximizerNoAdventures", "middleChamberUnlock", "milkOfMagnesiumActive", "moonTuned", "neverendingPartyAlways", "oasisAvailable", "odeBuffbotCheck", "oilPeakLit", "oscusSodaUsed", "outrageousSombreroUsed", "overgrownLotAvailable", "ownsSpeakeasy", "pathedSummonsHardcore", "pathedSummonsSoftcore", "pizzaOfLegendEaten", "popularTartUnlocked", "potatoAlarmClockUsed", "prAlways", "prayedForGlamour", "prayedForProtection", "prayedForVigor", "primaryLabCheerCoreGrabbed", "pyramidBombUsed", "ROMOfOptimalityAvailable", "rageGlandVented", "readManualHardcore", "readManualSoftcore", "relayShowSpoilers", "relayShowWarnings", "rememberDesktopSize", "restUsingChateau", "restUsingCampAwayTent", "requireBoxServants", "requireSewerTestItems", "safePickpocket", "schoolOfHardKnocksDiplomaAvailable", "scriptCascadingMenus", "serverAddsCustomCombat", "SHAWARMAInitiativeUnlocked", "showForbiddenStores", "showGainsPerUnit", "showIgnoringStorePrices", "showNoSummonOnly", "showTurnFreeOnly", "skeletonStoreAvailable", "sleazeAirportAlways", "snojoAvailable", "sortByEffect", "sortByRoom", "spacegateAlways", "spacegateVaccine1", "spacegateVaccine2", "spacegateVaccine3", "spaceInvaderDefeated", "spelunkyHints", "spiceMelangeUsed", "spookyAirportAlways", "stenchAirportAlways", "stopForFixedWanderer", "stopForUltraRare", "styxPixieVisited", "superconductorDefeated", "suppressInappropriateNags", "suppressPowerPixellation", "suppressMallPriceCacheMessages", "telegraphOfficeAvailable", "telescopeLookedHigh", "timeTowerAvailable", "trackLightsOut", "uneffectWithHotTub", "universalSeasoningActive", "universalSeasoningAvailable", "useBookOfEverySkillHardcore", "useBookOfEverySkillSoftcore", "useCrimboToysHardcore", "useCrimboToysSoftcore", "verboseMaximizer", "visitLoungeHardcore", "visitLoungeSoftcore", "visitRumpusHardcore", "visitRumpusSoftcore", "voteAlways", "wildfireBarrelCaulked", "wildfireDusted", "wildfireFracked", "wildfirePumpGreased", "wildfireSprinkled", "yearbookCameraPending", "youRobotScavenged", "_affirmationCookieEaten", "_affirmationHateUsed", "_airFryerUsed", "_akgyxothUsed", "_alienAnimalMilkUsed", "_alienPlantPodUsed", "_allYearSucker", "_aprilShower", "_armyToddlerCast", "_authorsInkUsed", "_baconMachineUsed", "_bagOfCandy", "_bagOfCandyUsed", "_bagOTricksUsed", "_ballastTurtleUsed", "_ballInACupUsed", "_ballpit", "_barrelPrayer", "_bastilleLastBattleWon", "_beachCombing", "_bendHellUsed", "_blankoutUsed", "_bonersSummoned", "_bookOfEverySkillUsed", "_borrowedTimeUsed", "_bowleggedSwaggerUsed", "_bowlFullOfJellyUsed", "_boxOfHammersUsed", "_brainPreservationFluidUsed", "_brassDreadFlaskUsed", "_cameraUsed", "_canSeekBirds", "_carboLoaded", "_cargoPocketEmptied", "_ceciHatUsed", "_chateauDeskHarvested", "_chateauMonsterFought", "_chronerCrossUsed", "_chronerTriggerUsed", "_chubbyAndPlumpUsed", "_circleDrumUsed", "_clanFortuneBuffUsed", "_claraBellUsed", "_coalPaperweightUsed", "_cocoaDispenserUsed", "_cocktailShakerUsed", "_coldAirportToday", "_coldOne", "_communismUsed", "_confusingLEDClockUsed", "_controlPanelUsed", "_cookbookbatRecipeDrops", "_corruptedStardustUsed", "_cosmicSixPackConjured", "_crappyCameraUsed", "_creepyVoodooDollUsed", "_crimboTraining", "_crimboTree", "_cursedKegUsed", "_cursedMicrowaveUsed", "_dailyDungeonMalwareUsed", "_darkChocolateHeart", "_daycareFights", "_daycareNap", "_daycareSpa", "_daycareToday", "_defectiveTokenChecked", "_defectiveTokenUsed", "_dinseyGarbageDisposed", "_discoKnife", "_distentionPillUsed", "_dnaHybrid", "_docClocksThymeCocktailDrunk", "_drippingHallDoor1", "_drippingHallDoor2", "_drippingHallDoor3", "_drippingHallDoor4", "_drippyCaviarUsed", "_drippyNuggetUsed", "_drippyPilsnerUsed", "_drippyPlumUsed", "_drippyWineUsed", "_eldritchHorrorEvoked", "_eldritchTentacleFought", "_entauntaunedToday", "_envyfishEggUsed", "_essentialTofuUsed", "_etchedHourglassUsed", "_eternalCarBatteryUsed", "_everfullGlassUsed", "_eyeAndATwistUsed", "_fancyChessSetUsed", "_falloutShelterSpaUsed", "_fancyHotDogEaten", "_farmerItemsCollected", "_favoriteBirdVisited", "_firedJokestersGun", "_fireExtinguisherRefilled", "_fireStartingKitUsed", "_fireworksShop", "_fireworksShopHatBought", "_fireworksShopEquipmentBought", "_fireworkUsed", "_fishyPipeUsed", "_floundryItemCreated", "_floundryItemUsed", "_freePillKeeperUsed", "_frToday", "_fudgeSporkUsed", "_garbageItemChanged", "_gingerBiggerAlligators", "_gingerbreadCityToday", "_gingerbreadClockAdvanced", "_gingerbreadClockVisited", "_gingerbreadColumnDestroyed", "_gingerbreadMobHitUsed", "_glennGoldenDiceUsed", "_glitchItemImplemented", "_gnollEyeUsed", "_governmentPerDiemUsed", "_grimBuff", "_guildManualUsed", "_guzzlrQuestAbandoned", "_hardKnocksDiplomaUsed", "_hippyMeatCollected", "_hobbyHorseUsed", "_holidayFunUsed", "_holoWristCrystal", "_hotAirportToday", "_hungerSauceUsed", "_hyperinflatedSealLungUsed", "_iceHotelRoomsRaided", "_iceSculptureUsed", "_incredibleSelfEsteemCast", "_infernoDiscoVisited", "_internetDailyDungeonMalwareBought", "_internetGallonOfMilkBought", "_internetPlusOneBought", "_internetPrintScreenButtonBought", "_internetViralVideoBought", "_interviewIsabella", "_interviewMasquerade", "_interviewVlad", "_inquisitorsUnidentifiableObjectUsed", "_ironicMoustache", "_jackassPlumberGame", "_jarlsCheeseSummoned", "_jarlsCreamSummoned", "_jarlsDoughSummoned", "_jarlsEggsSummoned", "_jarlsFruitSummoned", "_jarlsMeatSummoned", "_jarlsPotatoSummoned", "_jarlsVeggiesSummoned", "_jingleBellUsed", "_jukebox", "_kgbFlywheelCharged", "_kgbLeftDrawerUsed", "_kgbOpened", "_kgbRightDrawerUsed", "_kolConSixPackUsed", "_kolhsCutButNotDried", "_kolhsIsskayLikeAnAshtray", "_kolhsPoeticallyLicenced", "_kolhsSchoolSpirited", "_kudzuSaladEaten", "_lastCombatWon", "_latteBanishUsed", "_latteCopyUsed", "_latteDrinkUsed", "_legendaryBeat", "_licenseToChillUsed", "_lodestoneUsed", "_lookingGlass", "_loveTunnelToday", "_loveTunnelUsed", "_luckyGoldRingVolcoino", "_lunchBreak", "_lupineHormonesUsed", "_lyleFavored", "_madLiquorDrunk", "_madTeaParty", "_mafiaMiddleFingerRingUsed", "_managerialManipulationUsed", "_mansquitoSerumUsed", "_maydayDropped", "_mayoDeviceRented", "_mayoTankSoaked", "_meatballMachineUsed", "_meatifyMatterUsed", "_milkOfMagnesiumUsed", "_mimeArmyShotglassUsed", "_missGravesVermouthDrunk", "_missileLauncherUsed", "_molehillMountainUsed", "_momFoodReceived", "_mrBurnsgerEaten", "_muffinOrderedToday", "_mushroomGardenVisited", "_neverendingPartyToday", "_newYouQuestCompleted", "_olympicSwimmingPool", "_olympicSwimmingPoolItemFound", "_overflowingGiftBasketUsed", "_partyHard", "_pastaAdditive", "_perfectFreezeUsed", "_perfectlyFairCoinUsed", "_petePartyThrown", "_peteRiotIncited", "_photocopyUsed", "_pickyTweezersUsed", "_pingPongGame", "_pirateBellowUsed", "_pirateForkUsed", "_pixelOrbUsed", "_plumbersMushroomStewEaten", "_pneumaticityPotionUsed", "_portableSteamUnitUsed", "_pottedTeaTreeUsed", "_prToday", "_psychoJarFilled", "_psychoJarUsed", "_psychokineticHugUsed", "_rainStickUsed", "_redwoodRainStickUsed", "_requestSandwichSucceeded", "_rhinestonesAcquired", "_seaJellyHarvested", "_setOfJacksUsed", "_sewingKitUsed", "_sexChanged", "_shrubDecorated", "_silverDreadFlaskUsed", "_sitCourseCompleted", "_skateBuff1", "_skateBuff2", "_skateBuff3", "_skateBuff4", "_skateBuff5", "_sleazeAirportToday", "_sobrieTeaUsed", "_softwareGlitchTurnReceived", "_spacegateMurderbot", "_spacegateRuins", "_spacegateSpant", "_spacegateToday", "_spacegateVaccine", "_spaghettiBreakfast", "_spaghettiBreakfastEaten", "_spinmasterLatheVisited", "_spinningWheel", "_spookyAirportToday", "_stabonicScrollUsed", "_steelyEyedSquintUsed", "_stenchAirportToday", "_stinkyCheeseBanisherUsed", "_strangeStalagmiteUsed", "_streamsCrossed", "_stuffedPocketwatchUsed", "_styxSprayUsed", "_summonAnnoyanceUsed", "_summonCarrotUsed", "_summonResortPassUsed", "_sweetToothUsed", "_syntheticDogHairPillUsed", "_tacoFlierUsed", "_telegraphOfficeToday", "_templeHiddenPower", "_tempuraAirUsed", "_thesisDelivered", "_timeSpinnerReplicatorUsed", "_toastSummoned", "_tonicDjinn", "_treasuryEliteMeatCollected", "_treasuryHaremMeatCollected", "_trivialAvocationsGame", "_tryptophanDartUsed", "_turtlePowerCast", "_twelveNightEnergyUsed", "_ultraMegaSourBallUsed", "_victorSpoilsUsed", "_villainLairCanLidUsed", "_villainLairColorChoiceUsed", "_villainLairDoorChoiceUsed", "_villainLairFirecrackerUsed", "_villainLairSymbologyChoiceUsed", "_villainLairWebUsed", "_vmaskBanisherUsed", "_voraciTeaUsed", "_volcanoItemRedeemed", "_volcanoSuperduperheatedMetal", "_voteToday", "_VYKEACafeteriaRaided", "_VYKEALoungeRaided", "_walfordQuestStartedToday", "_warbearBankUsed", "_warbearBreakfastMachineUsed", "_warbearGyrocopterUsed", "_warbearSodaMachineUsed", "_wildfireBarrelHarvested", "_witchessBuff", "_workshedItemUsed", "_zombieClover", "_preventScurvy", "lockedItem4637", "lockedItem4638", "lockedItem4639", "lockedItem4646", "lockedItem4647", "unknownRecipe3542", "unknownRecipe3543", "unknownRecipe3544", "unknownRecipe3545", "unknownRecipe3546", "unknownRecipe3547", "unknownRecipe3548", "unknownRecipe3749", "unknownRecipe3751", "unknownRecipe4172", "unknownRecipe4173", "unknownRecipe4174", "unknownRecipe5060", "unknownRecipe5061", "unknownRecipe5062", "unknownRecipe5063", "unknownRecipe5064", "unknownRecipe5066", "unknownRecipe5067", "unknownRecipe5069", "unknownRecipe5070", "unknownRecipe5072", "unknownRecipe5073", "unknownRecipe5670", "unknownRecipe5671", "unknownRecipe6501", "unknownRecipe6564", "unknownRecipe6565", "unknownRecipe6566", "unknownRecipe6567", "unknownRecipe6568", "unknownRecipe6569", "unknownRecipe6570", "unknownRecipe6571", "unknownRecipe6572", "unknownRecipe6573", "unknownRecipe6574", "unknownRecipe6575", "unknownRecipe6576", "unknownRecipe6577", "unknownRecipe6578", "unknownRecipe7752", "unknownRecipe7753", "unknownRecipe7754", "unknownRecipe7755", "unknownRecipe7756", "unknownRecipe7757", "unknownRecipe7758", "unknownRecipe10970", "unknownRecipe10971", "unknownRecipe10972", "unknownRecipe10973", "unknownRecipe10974", "unknownRecipe10975", "unknownRecipe10976", "unknownRecipe10977", "unknownRecipe10978", "unknownRecipe10988", "unknownRecipe10989", "unknownRecipe10990", "unknownRecipe10991", "unknownRecipe10992", "unknownRecipe11000"];
var numericProperties = ["coinMasterIndex", "dailyDeedsVersion", "defaultDropdown1", "defaultDropdown2", "defaultDropdownSplit", "defaultLimit", "fixedThreadPoolSize", "itemManagerIndex", "lastBuffRequestType", "lastGlobalCounterDay", "lastImageCacheClear", "previousUpdateRevision", "relayDelayForSVN", "relaySkillButtonCount", "scriptButtonPosition", "statusDropdown", "svnThreadPoolSize", "toolbarPosition", "_g9Effect", "8BitScore", "addingScrolls", "affirmationCookiesEaten", "aminoAcidsUsed", "antagonisticSnowmanKitCost", "ascensionsToday", "autoAbortThreshold", "autoAntidote", "autoBuyPriceLimit", "autumnatonQuestTurn", "availableCandyCredits", "availableDimes", "availableFunPoints", "availableQuarters", "availableStoreCredits", "availableSwagger", "averageSwagger", "awolMedicine", "awolPointsBeanslinger", "awolPointsCowpuncher", "awolPointsSnakeoiler", "awolDeferredPointsBeanslinger", "awolDeferredPointsCowpuncher", "awolDeferredPointsSnakeoiler", "awolVenom", "bagOTricksCharges", "ballpitBonus", "bankedKarma", "bartenderTurnsUsed", "basementMallPrices", "basementSafetyMargin", "batmanFundsAvailable", "batmanBonusInitialFunds", "batmanTimeLeft", "bearSwagger", "beeCounter", "beGregariousCharges", "beGregariousFightsLeft", "birdformCold", "birdformHot", "birdformRoc", "birdformSleaze", "birdformSpooky", "birdformStench", "blackBartsBootyCost", "blackPuddingsDefeated", "blackForestProgress", "blankOutUsed", "bloodweiserDrunk", "bondPoints", "bondVillainsDefeated", "boneAbacusVictories", "booPeakProgress", "borisPoints", "breakableHandling", "breakableHandling1964", "breakableHandling9691", "breakableHandling9692", "breakableHandling9699", "breathitinCharges", "brodenBacteria", "brodenSprinkles", "buffBotMessageDisposal", "buffBotPhilanthropyType", "buffJimmyIngredients", "burnoutsDefeated", "burrowgrubSummonsRemaining", "camelSpit", "camerasUsed", "campAwayDecoration", "candyWitchTurnsUsed", "candyWitchCandyTotal", "carboLoading", "catBurglarBankHeists", "cellarLayout", "charitableDonations", "chasmBridgeProgress", "chefTurnsUsed", "chessboardsCleared", "chilledToTheBone", "cinderellaMinutesToMidnight", "cinderellaScore", "cocktailSummons", "commerceGhostCombats", "controlPanelOmega", "cornucopiasOpened", "cosmicBowlingBallReturnCombats", "cozyCounter6332", "cozyCounter6333", "cozyCounter6334", "craftingClay", "craftingLeather", "craftingStraw", "crimbo16BeardChakraCleanliness", "crimbo16BootsChakraCleanliness", "crimbo16BungChakraCleanliness", "crimbo16CrimboHatChakraCleanliness", "crimbo16GutsChakraCleanliness", "crimbo16HatChakraCleanliness", "crimbo16JellyChakraCleanliness", "crimbo16LiverChakraCleanliness", "crimbo16NippleChakraCleanliness", "crimbo16NoseChakraCleanliness", "crimbo16ReindeerChakraCleanliness", "crimbo16SackChakraCleanliness", "crimboTrainingSkill", "crimboTreeDays", "cubelingProgress", "currentExtremity", "currentHedgeMazeRoom", "currentMojoFilters", "currentNunneryMeat", "currentPortalEnergy", "cursedMagnifyingGlassCount", "cyrptAlcoveEvilness", "cyrptCrannyEvilness", "cyrptNicheEvilness", "cyrptNookEvilness", "cyrptTotalEvilness", "darkGyfftePoints", "daycareEquipment", "daycareInstructors", "daycareLastScavenge", "daycareToddlers", "dbNemesisSkill1", "dbNemesisSkill2", "dbNemesisSkill3", "desertExploration", "desktopHeight", "desktopWidth", "dinseyFilthLevel", "dinseyFunProgress", "dinseyNastyBearsDefeated", "dinseySocialJusticeIProgress", "dinseySocialJusticeIIProgress", "dinseyTouristsFed", "dinseyToxicMultiplier", "doctorBagQuestLights", "doctorBagUpgrades", "dreadScroll1", "dreadScroll2", "dreadScroll3", "dreadScroll4", "dreadScroll5", "dreadScroll6", "dreadScroll7", "dreadScroll8", "dripAdventuresSinceAscension", "drippingHallAdventuresSinceAscension", "drippingTreesAdventuresSinceAscension", "drippyBatsUnlocked", "drippyJuice", "drippyOrbsClaimed", "drunkenSwagger", "edDefeatAbort", "edPoints", "eldritchTentaclesFought", "electricKoolAidEaten", "elfGratitude", "encountersUntilDMTChoice", "encountersUntilNEPChoice", "ensorceleeLevel", "entauntaunedColdRes", "essenceOfAnnoyanceCost", "essenceOfBearCost", "extraRolloverAdventures", "falloutShelterLevel", "familiarSweat", "fingernailsClipped", "fistSkillsKnown", "flyeredML", "fossilB", "fossilD", "fossilN", "fossilP", "fossilS", "fossilW", "fratboysDefeated", "frenchGuardTurtlesFreed", "funGuyMansionKills", "garbageChampagneCharge", "garbageFireProgress", "garbageShirtCharge", "garbageTreeCharge", "garlandUpgrades", "gingerDigCount", "gingerLawChoice", "gingerMuscleChoice", "gingerTrainScheduleStudies", "gladiatorBallMovesKnown", "gladiatorBladeMovesKnown", "gladiatorNetMovesKnown", "glitchItemCost", "glitchItemImplementationCount", "glitchItemImplementationLevel", "glitchSwagger", "gloverPoints", "gnasirProgress", "goldenMrAccessories", "gongPath", "gooseDronesRemaining", "goreCollected", "gourdItemCount", "greyYouPoints", "grimoire1Summons", "grimoire2Summons", "grimoire3Summons", "grimstoneCharge", "guardTurtlesFreed", "guideToSafariCost", "guyMadeOfBeesCount", "guzzlrBronzeDeliveries", "guzzlrDeliveryProgress", "guzzlrGoldDeliveries", "guzzlrPlatinumDeliveries", "haciendaLayout", "hallowiener8BitRealm", "hallowienerCoinspiracy", "hareMillisecondsSaved", "hareTurnsUsed", "heavyRainsStartingThunder", "heavyRainsStartingRain", "heavyRainsStartingLightning", "heroDonationBoris", "heroDonationJarlsberg", "heroDonationSneakyPete", "hiddenApartmentProgress", "hiddenBowlingAlleyProgress", "hiddenHospitalProgress", "hiddenOfficeProgress", "hiddenTavernUnlock", "highTopPumped", "hippiesDefeated", "holidayHalsBookCost", "holidaySwagger", "homemadeRobotUpgrades", "homebodylCharges", "hpAutoRecovery", "hpAutoRecoveryTarget", "iceSwagger", "jarlsbergPoints", "jungCharge", "junglePuns", "knownAscensions", "kolhsTotalSchoolSpirited", "lastAnticheeseDay", "lastArcadeAscension", "lastBadMoonReset", "lastBangPotionReset", "lastBattlefieldReset", "lastBeardBuff", "lastBreakfast", "lastCartographyBooPeak", "lastCartographyCastleTop", "lastCartographyDarkNeck", "lastCartographyDefiledNook", "lastCartographyFratHouse", "lastCartographyFratHouseVerge", "lastCartographyGuanoJunction", "lastCartographyHauntedBilliards", "lastCartographyHippyCampVerge", "lastCartographyZeppelinProtesters", "lastCastleGroundUnlock", "lastCastleTopUnlock", "lastCellarReset", "lastChanceThreshold", "lastChasmReset", "lastColosseumRoundWon", "lastCouncilVisit", "lastCounterDay", "lastDesertUnlock", "lastDispensaryOpen", "lastDMTDuplication", "lastDwarfFactoryReset", "lastEVHelmetValue", "lastEVHelmetReset", "lastEmptiedStorage", "lastFilthClearance", "lastGoofballBuy", "lastGuildStoreOpen", "lastGuyMadeOfBeesReset", "lastFratboyCall", "lastFriarCeremonyAscension", "lastFriarElbowNC", "lastFriarHeartNC", "lastFriarNeckNC", "lastHippyCall", "lastIslandUnlock", "lastKeyotronUse", "lastKingLiberation", "lastLightsOutTurn", "lastMushroomPlot", "lastMiningReset", "lastNemesisReset", "lastPaperStripReset", "lastPirateEphemeraReset", "lastPirateInsultReset", "lastPlusSignUnlock", "lastQuartetAscension", "lastQuartetRequest", "lastSecondFloorUnlock", "lastSkateParkReset", "lastStillBeatingSpleen", "lastTavernAscension", "lastTavernSquare", "lastTelescopeReset", "lastTempleAdventures", "lastTempleButtonsUnlock", "lastTempleUnlock", "lastThingWithNoNameDefeated", "lastTowelAscension", "lastTr4pz0rQuest", "lastTrainsetConfiguration", "lastVioletFogMap", "lastVoteMonsterTurn", "lastWartDinseyDefeated", "lastWuTangDefeated", "lastYearbookCameraAscension", "lastZapperWand", "lastZapperWandExplosionDay", "lawOfAveragesCost", "libramSummons", "lightsOutAutomation", "louvreDesiredGoal", "louvreGoal", "lovebugsAridDesert", "lovebugsBeachBuck", "lovebugsBooze", "lovebugsChroner", "lovebugsCoinspiracy", "lovebugsCyrpt", "lovebugsFreddy", "lovebugsFunFunds", "lovebugsHoboNickel", "lovebugsItemDrop", "lovebugsMeat", "lovebugsMeatDrop", "lovebugsMoxie", "lovebugsMuscle", "lovebugsMysticality", "lovebugsOilPeak", "lovebugsOrcChasm", "lovebugsPowder", "lovebugsWalmart", "lttQuestDifficulty", "lttQuestStageCount", "manaBurnSummonThreshold", "manaBurningThreshold", "manaBurningTrigger", "manorDrawerCount", "manualOfNumberologyCost", "mapToKokomoCost", "masksUnlocked", "maximizerMRUSize", "maximizerCombinationLimit", "maximizerEquipmentLevel", "maximizerEquipmentScope", "maximizerMaxPrice", "maximizerPriceLevel", "maxManaBurn", "mayflyExperience", "mayoLevel", "meansuckerPrice", "merkinVocabularyMastery", "miniAdvClass", "miniMartinisDrunk", "moleTunnelLevel", "mothershipProgress", "mpAutoRecovery", "mpAutoRecoveryTarget", "munchiesPillsUsed", "mushroomGardenCropLevel", "nextParanormalActivity", "nextQuantumFamiliarOwnerId", "nextQuantumFamiliarTurn", "noobPoints", "noobDeferredPoints", "noodleSummons", "nsContestants1", "nsContestants2", "nsContestants3", "nuclearAutumnPoints", "numericSwagger", "nunsVisits", "oilPeakProgress", "optimalSwagger", "optimisticCandleProgress", "palindomeDudesDefeated", "parasolUsed", "pendingMapReflections", "pingpongSkill", "pirateSwagger", "plantingDay", "plumberBadgeCost", "plumberCostumeCost", "plumberPoints", "poolSharkCount", "poolSkill", "primaryLabGooIntensity", "prismaticSummons", "procrastinatorLanguageFluency", "promptAboutCrafting", "puzzleChampBonus", "pyramidPosition", "rockinRobinProgress", "ROMOfOptimalityCost", "quantumPoints", "reagentSummons", "reanimatorArms", "reanimatorLegs", "reanimatorSkulls", "reanimatorWeirdParts", "reanimatorWings", "recentLocations", "redSnapperProgress", "relayPort", "relocatePygmyJanitor", "relocatePygmyLawyer", "rumpelstiltskinTurnsUsed", "rumpelstiltskinKidsRescued", "safariSwagger", "sausageGrinderUnits", "schoolOfHardKnocksDiplomaCost", "schoolSwagger", "scrapbookCharges", "scriptMRULength", "seaodesFound", "SeasoningSwagger", "sexChanges", "shenInitiationDay", "shockingLickCharges", "singleFamiliarRun", "skillBurn3", "skillBurn90", "skillBurn153", "skillBurn154", "skillBurn155", "skillBurn1019", "skillBurn5017", "skillBurn6014", "skillBurn6015", "skillBurn6016", "skillBurn6020", "skillBurn6021", "skillBurn6022", "skillBurn6023", "skillBurn6024", "skillBurn6026", "skillBurn6028", "skillBurn7323", "skillBurn14008", "skillBurn14028", "skillBurn14038", "skillBurn15011", "skillBurn15028", "skillBurn17005", "skillBurn22034", "skillBurn22035", "skillBurn23301", "skillBurn23302", "skillBurn23303", "skillBurn23304", "skillBurn23305", "skillBurn23306", "skillLevel46", "skillLevel47", "skillLevel48", "skillLevel117", "skillLevel118", "skillLevel121", "skillLevel128", "skillLevel134", "skillLevel144", "skillLevel180", "skillLevel188", "skillLevel7254", "slimelingFullness", "slimelingStacksDropped", "slimelingStacksDue", "smoresEaten", "smutOrcNoncombatProgress", "sneakyPetePoints", "snojoMoxieWins", "snojoMuscleWins", "snojoMysticalityWins", "sourceAgentsDefeated", "sourceEnlightenment", "sourceInterval", "sourcePoints", "sourceTerminalGram", "sourceTerminalPram", "sourceTerminalSpam", "spaceBabyLanguageFluency", "spacePirateLanguageFluency", "spelunkyNextNoncombat", "spelunkySacrifices", "spelunkyWinCount", "spookyPuttyCopiesMade", "statbotUses", "sugarCounter4178", "sugarCounter4179", "sugarCounter4180", "sugarCounter4181", "sugarCounter4182", "sugarCounter4183", "sugarCounter4191", "summonAnnoyanceCost", "sweat", "tacoDanCocktailSauce", "tacoDanFishMeat", "tavernLayout", "telescopeUpgrades", "tempuraSummons", "timeSpinnerMedals", "timesRested", "tomeSummons", "totalCharitableDonations", "trainsetPosition", "turtleBlessingTurns", "twinPeakProgress", "twoCRSPoints", "unicornHornInflation", "universalSeasoningCost", "usable1HWeapons", "usable1xAccs", "usable2HWeapons", "usable3HWeapons", "usableAccessories", "usableHats", "usableOffhands", "usableOther", "usablePants", "usableShirts", "valueOfAdventure", "valueOfInventory", "valueOfStill", "valueOfTome", "vintnerCharge", "vintnerWineLevel", "violetFogGoal", "walfordBucketProgress", "warehouseProgress", "welcomeBackAdv", "whetstonesUsed", "wolfPigsEvicted", "wolfTurnsUsed", "writingDesksDefeated", "xoSkeleltonXProgress", "xoSkeleltonOProgress", "yearbookCameraAscensions", "yearbookCameraUpgrades", "youRobotBody", "youRobotBottom", "youRobotLeft", "youRobotPoints", "youRobotRight", "youRobotTop", "zeppelinProtestors", "zigguratLianas", "zombiePoints", "_absintheDrops", "_abstractionDropsCrown", "_aguaDrops", "_xenomorphCharge", "_ancestralRecallCasts", "_antihangoverBonus", "_astralDrops", "_autumnatonQuests", "_backUpUses", "_badlyRomanticArrows", "_badgerCharge", "_balefulHowlUses", "_banderRunaways", "_bastilleCheese", "_bastilleGames", "_bastilleGameTurn", "_bastilleLastCheese", "_beanCannonUses", "_bearHugs", "_beerLensDrops", "_bellydancerPickpockets", "_benettonsCasts", "_birdsSoughtToday", "_boomBoxFights", "_boomBoxSongsLeft", "_bootStomps", "_boxingGloveArrows", "_brickoEyeSummons", "_brickoFights", "_campAwayCloudBuffs", "_campAwaySmileBuffs", "_candySummons", "_captainHagnkUsed", "_carnieCandyDrops", "_carrotNoseDrops", "_catBurglarCharge", "_catBurglarHeistsComplete", "_cheerleaderSteam", "_chestXRayUsed", "_chipBags", "_chocolateCigarsUsed", "_chocolateSculpturesUsed", "_chocolatesUsed", "_chronolithActivations", "_chronolithNextCost", "_clanFortuneConsultUses", "_clipartSummons", "_cloversPurchased", "_coldMedicineConsults", "_coldMedicineEquipmentTaken", "_companionshipCasts", "_cookbookbatCrafting", "_cosmicBowlingSkillsUsed", "_crimbo21ColdResistance", "_dailySpecialPrice", "_daycareGymScavenges", "_daycareRecruits", "_deckCardsDrawn", "_deluxeKlawSummons", "_demandSandwich", "_detectiveCasesCompleted", "_disavowed", "_dnaPotionsMade", "_donhosCasts", "_dreamJarDrops", "_drunkPygmyBanishes", "_edDefeats", "_edLashCount", "_elronsCasts", "_enamorangs", "_energyCollected", "_expertCornerCutterUsed", "_favorRareSummons", "_feastUsed", "_feelinTheRhythm", "_feelPrideUsed", "_feelExcitementUsed", "_feelHatredUsed", "_feelLonelyUsed", "_feelNervousUsed", "_feelEnvyUsed", "_feelDisappointedUsed", "_feelSuperiorUsed", "_feelLostUsed", "_feelNostalgicUsed", "_feelPeacefulUsed", "_fingertrapArrows", "_fireExtinguisherCharge", "_fragrantHerbsUsed", "_freeBeachWalksUsed", "_frButtonsPressed", "_fudgeWaspFights", "_gapBuffs", "_garbageFireDrops", "_garbageFireDropsCrown", "_genieFightsUsed", "_genieWishesUsed", "_gibbererAdv", "_gibbererCharge", "_gingerbreadCityTurns", "_glarkCableUses", "_glitchMonsterFights", "_gnomeAdv", "_godLobsterFights", "_goldenMoneyCharge", "_gongDrops", "_gothKidCharge", "_gothKidFights", "_grimBrotherCharge", "_grimFairyTaleDrops", "_grimFairyTaleDropsCrown", "_grimoireConfiscatorSummons", "_grimoireGeekySummons", "_grimstoneMaskDrops", "_grimstoneMaskDropsCrown", "_grooseCharge", "_grooseDrops", "_grubbyWoolDrops", "_guzzlrDeliveries", "_guzzlrGoldDeliveries", "_guzzlrPlatinumDeliveries", "_hareAdv", "_hareCharge", "_highTopPumps", "_hipsterAdv", "_hoardedCandyDropsCrown", "_hoboUnderlingSummons", "_holoWristDrops", "_holoWristProgress", "_hotAshesDrops", "_hotJellyUses", "_hotTubSoaks", "_humanMuskUses", "_iceballUses", "_inigosCasts", "_jerksHealthMagazinesUsed", "_jiggleCheese", "_jiggleCream", "_jiggleLife", "_jiggleSteak", "_jitbCharge", "_juneCleaverFightsLeft", "_juneCleaverEncounters", "_juneCleaverStench", "_juneCleaverSpooky", "_juneCleaverSleaze", "_juneCleaverHot", "_juneCleaverCold", "_juneCleaverSkips", "_jungDrops", "_kgbClicksUsed", "_kgbDispenserUses", "_kgbTranquilizerDartUses", "_klawSummons", "_kloopCharge", "_kloopDrops", "_kolhsAdventures", "_kolhsSavedByTheBell", "_lastDailyDungeonRoom", "_lastSausageMonsterTurn", "_lastZomboEye", "_latteRefillsUsed", "_leafblowerML", "_legionJackhammerCrafting", "_llamaCharge", "_longConUsed", "_lovebugsBeachBuck", "_lovebugsChroner", "_lovebugsCoinspiracy", "_lovebugsFreddy", "_lovebugsFunFunds", "_lovebugsHoboNickel", "_lovebugsWalmart", "_loveChocolatesUsed", "_lynyrdSnareUses", "_machineTunnelsAdv", "_macrometeoriteUses", "_mafiaThumbRingAdvs", "_mayflowerDrops", "_mayflySummons", "_mediumSiphons", "_meteoriteAdesUsed", "_meteorShowerUses", "_micrometeoriteUses", "_miniMartiniDrops", "_monstersMapped", "_mushroomGardenFights", "_nanorhinoCharge", "_navelRunaways", "_neverendingPartyFreeTurns", "_newYouQuestSharpensDone", "_newYouQuestSharpensToDo", "_nextColdMedicineConsult", "_nextQuantumAlignment", "_nightmareFuelCharges", "_noobSkillCount", "_nuclearStockpileUsed", "_oilExtracted", "_olfactionsUsed", "_speakeasyFreeFights", "_optimisticCandleDropsCrown", "_oreDropsCrown", "_otoscopeUsed", "_oysterEggsFound", "_pantsgivingBanish", "_pantsgivingCount", "_pantsgivingCrumbs", "_pantsgivingFullness", "_pasteDrops", "_peteJukeboxFixed", "_peteJumpedShark", "_petePeeledOut", "_pieDrops", "_piePartsCount", "_pixieCharge", "_pocketProfessorLectures", "_poisonArrows", "_pokeGrowFertilizerDrops", "_poolGames", "_powderedGoldDrops", "_powderedMadnessUses", "_powerfulGloveBatteryPowerUsed", "_powerPillDrops", "_powerPillUses", "_precisionCasts", "_radlibSummons", "_raindohCopiesMade", "_rapidPrototypingUsed", "_raveStealCount", "_reflexHammerUsed", "_resolutionAdv", "_resolutionRareSummons", "_riftletAdv", "_robinEggDrops", "_roboDrops", "_rogueProgramCharge", "_romanticFightsLeft", "_saberForceMonsterCount", "_saberForceUses", "_saberMod", "_saltGrainsConsumed", "_sandwormCharge", "_saplingsPlanted", "_sausageFights", "_sausagesEaten", "_sausagesMade", "_sealFigurineUses", "_sealScreeches", "_sealsSummoned", "_shatteringPunchUsed", "_shortOrderCookCharge", "_shrubCharge", "_sloppyDinerBeachBucks", "_smilesOfMrA", "_smithsnessSummons", "_snojoFreeFights", "_snojoParts", "_snokebombUsed", "_snowconeSummons", "_snowglobeDrops", "_snowSuitCount", "_sourceTerminalDigitizeMonsterCount", "_sourceTerminalDigitizeUses", "_sourceTerminalDuplicateUses", "_sourceTerminalEnhanceUses", "_sourceTerminalExtrudes", "_sourceTerminalPortscanUses", "_spaceFurDropsCrown", "_spacegatePlanetIndex", "_spacegateTurnsLeft", "_spaceJellyfishDrops", "_speakeasyDrinksDrunk", "_spelunkerCharges", "_spelunkingTalesDrops", "_spikolodonSpikeUses", "_spookyJellyUses", "_stackLumpsUses", "_steamCardDrops", "_stickerSummons", "_stinkyCheeseCount", "_stressBallSqueezes", "_sugarSummons", "_sweatOutSomeBoozeUsed", "_taffyRareSummons", "_taffyYellowSummons", "_thanksgettingFoodsEaten", "_thingfinderCasts", "_thinknerdPackageDrops", "_thorsPliersCrafting", "_timeHelmetAdv", "_timeSpinnerMinutesUsed", "_tokenDrops", "_transponderDrops", "_turkeyBlastersUsed", "_turkeyBooze", "_turkeyMuscle", "_turkeyMyst", "_turkeyMoxie", "_unaccompaniedMinerUsed", "_unconsciousCollectiveCharge", "_universalSeasoningsUsed", "_universeCalculated", "_universeImploded", "_usedReplicaBatoomerang", "_vampyreCloakeFormUses", "_villainLairProgress", "_vitachocCapsulesUsed", "_vmaskAdv", "_voidFreeFights", "_volcanoItem1", "_volcanoItem2", "_volcanoItem3", "_volcanoItemCount1", "_volcanoItemCount2", "_volcanoItemCount3", "_voteFreeFights", "_VYKEACompanionLevel", "_warbearAutoAnvilCrafting", "_waxGlobDrops", "_whiteRiceDrops", "_witchessFights", "_xoHugsUsed", "_yellowPixelDropsCrown", "_zapCount", "_zombieSmashPocketsUsed"];
var monsterProperties = ["beGregariousMonster", "cameraMonster", "chateauMonster", "clumsinessGroveBoss", "crappyCameraMonster", "crudeMonster", "enamorangMonster", "envyfishMonster", "glacierOfJerksBoss", "iceSculptureMonster", "lastCopyableMonster", "longConMonster", "maelstromOfLoversBoss", "makeFriendsMonster", "merkinLockkeyMonster", "nosyNoseMonster", "olfactedMonster", "photocopyMonster", "rainDohMonster", "romanticTarget", "screencappedMonster", "spookyPuttyMonster", "stenchCursedMonster", "superficiallyInterestedMonster", "waxMonster", "yearbookCameraTarget", "_gallapagosMonster", "_jiggleCreamedMonster", "_latteMonster", "_nanorhinoBanishedMonster", "_newYouQuestMonster", "_relativityMonster", "_saberForceMonster", "_sourceTerminalDigitizeMonster", "_voteMonster"];
var locationProperties = ["autumnatonQuestLocation", "currentJunkyardLocation", "doctorBagQuestLocation", "ghostLocation", "guzzlrQuestLocation", "nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "sourceOracleTarget", "_floundryBassLocation", "_floundryCarpLocation", "_floundryCodLocation", "_floundryHatchetfishLocation", "_floundryTroutLocation", "_floundryTunaLocation"];
var stringProperties = ["autoLogin", "browserBookmarks", "chatFontSize", "combatHotkey0", "combatHotkey1", "combatHotkey2", "combatHotkey3", "combatHotkey4", "combatHotkey5", "combatHotkey6", "combatHotkey7", "combatHotkey8", "combatHotkey9", "commandLineNamespace", "dailyDeedsOptions", "defaultBorderColor", "displayName", "externalEditor", "getBreakfast", "headerStates", "highlightList", "http.proxyHost", "http.proxyPassword", "http.proxyPort", "http.proxyUser", "https.proxyHost", "https.proxyPassword", "https.proxyPort", "https.proxyUser", "initialDesktop", "initialFrames", "lastRelayUpdate", "lastUserAgent", "lastUsername", "logPreferenceChangeFilter", "loginScript", "loginServerName", "loginWindowLogo", "logoutScript", "previousNotifyList", "previousUpdateVersion", "saveState", "saveStateActive", "scriptList", "swingLookAndFeel", "userAgent", "8BitColor", "afterAdventureScript", "autoOlfact", "autoPutty", "autumnatonUpgrades", "backupCameraMode", "banishedMonsters", "banishingShoutMonsters", "batmanStats", "batmanZone", "batmanUpgrades", "battleAction", "beachHeadsUnlocked", "beforePVPScript", "betweenBattleScript", "boomBoxSong", "breakfastAlways", "breakfastHardcore", "breakfastSoftcore", "buffBotCasting", "buyScript", "cargoPocketsEmptied", "cargoPocketScraps", "chatbotScript", "chatPlayerScript", "choiceAdventureScript", "chosenTrip", "clanFortuneReply1", "clanFortuneReply2", "clanFortuneReply3", "clanFortuneWord1", "clanFortuneWord2", "clanFortuneWord3", "commerceGhostItem", "counterScript", "copperheadClubHazard", "crimbotChassis", "crimbotArm", "crimbotPropulsion", "crystalBallPredictions", "csServicesPerformed", "currentAstralTrip", "currentDistillateMods", "currentEasyBountyItem", "currentHardBountyItem", "currentHippyStore", "currentJunkyardTool", "currentLlamaForm", "currentMood", "currentPVPSeason", "currentPvpVictories", "currentSpecialBountyItem", "currentSITSkill", "customCombatScript", "cyrusAdjectives", "defaultFlowerLossMessage", "defaultFlowerWinMessage", "demonName1", "demonName2", "demonName3", "demonName4", "demonName5", "demonName6", "demonName7", "demonName8", "demonName9", "demonName10", "demonName11", "demonName12", "demonName13", "dinseyGatorStenchDamage", "dinseyRollercoasterStats", "doctorBagQuestItem", "dolphinItem", "duckAreasCleared", "duckAreasSelected", "edPiece", "enamorangMonsterTurn", "ensorcelee", "EVEDirections", "extraCosmeticModifiers", "familiarScript", "forbiddenStores", "gameProBossSpecialPower", "gooseReprocessed", "grimoireSkillsHardcore", "grimoireSkillsSoftcore", "grimstoneMaskPath", "guzzlrQuestClient", "guzzlrQuestBooze", "guzzlrQuestTier", "harvestGardenHardcore", "harvestGardenSoftcore", "hpAutoRecoveryItems", "invalidBuffMessage", "jickSwordModifier", "juneCleaverQueue", "kingLiberatedScript", "lassoTraining", "lastAdventure", "lastBangPotion819", "lastBangPotion820", "lastBangPotion821", "lastBangPotion822", "lastBangPotion823", "lastBangPotion824", "lastBangPotion825", "lastBangPotion826", "lastBangPotion827", "lastChanceBurn", "lastChessboard", "lastCombatEnvironments", "lastDwarfDiceRolls", "lastDwarfDigitRunes", "lastDwarfEquipmentRunes", "lastDwarfFactoryItem118", "lastDwarfFactoryItem119", "lastDwarfFactoryItem120", "lastDwarfFactoryItem360", "lastDwarfFactoryItem361", "lastDwarfFactoryItem362", "lastDwarfFactoryItem363", "lastDwarfFactoryItem364", "lastDwarfFactoryItem365", "lastDwarfFactoryItem910", "lastDwarfFactoryItem3199", "lastDwarfOfficeItem3208", "lastDwarfOfficeItem3209", "lastDwarfOfficeItem3210", "lastDwarfOfficeItem3211", "lastDwarfOfficeItem3212", "lastDwarfOfficeItem3213", "lastDwarfOfficeItem3214", "lastDwarfOreRunes", "lastDwarfHopper1", "lastDwarfHopper2", "lastDwarfHopper3", "lastDwarfHopper4", "lastEncounter", "lastMacroError", "lastMessageId", "lastPaperStrip3144", "lastPaperStrip4138", "lastPaperStrip4139", "lastPaperStrip4140", "lastPaperStrip4141", "lastPaperStrip4142", "lastPaperStrip4143", "lastPaperStrip4144", "lastPirateEphemera", "lastPorkoBoard", "lastPorkoPayouts", "lastPorkoExpected", "lastSlimeVial3885", "lastSlimeVial3886", "lastSlimeVial3887", "lastSlimeVial3888", "lastSlimeVial3889", "lastSlimeVial3890", "lastSlimeVial3891", "lastSlimeVial3892", "lastSlimeVial3893", "lastSlimeVial3894", "lastSlimeVial3895", "lastSlimeVial3896", "latteModifier", "latteUnlocks", "libramSkillsHardcore", "libramSkillsSoftcore", "louvreOverride", "lovePotion", "lttQuestName", "maximizerList", "maximizerMRUList", "mayoInMouth", "mayoMinderSetting", "merkinQuestPath", "mineLayout1", "mineLayout2", "mineLayout3", "mineLayout4", "mineLayout5", "mineLayout6", "mpAutoRecoveryItems", "muffinOnOrder", "nextAdventure", "nextDistillateMods", "nextQuantumFamiliarName", "nextQuantumFamiliarOwner", "nsChallenge2", "nsChallenge3", "nsChallenge4", "nsChallenge5", "nsTowerDoorKeysUsed", "oceanAction", "oceanDestination", "parkaMode", "pastaThrall1", "pastaThrall2", "pastaThrall3", "pastaThrall4", "pastaThrall5", "pastaThrall6", "pastaThrall7", "pastaThrall8", "peteMotorbikeTires", "peteMotorbikeGasTank", "peteMotorbikeHeadlight", "peteMotorbikeCowling", "peteMotorbikeMuffler", "peteMotorbikeSeat", "pieStuffing", "plantingDate", "plantingLength", "plantingScript", "plumberCostumeWorn", "pokefamBoosts", "postAscensionScript", "preAscensionScript", "retroCapeSuperhero", "retroCapeWashingInstructions", "questClumsinessGrove", "questDoctorBag", "questECoBucket", "questESlAudit", "questESlBacteria", "questESlCheeseburger", "questESlCocktail", "questESlDebt", "questESlFish", "questESlMushStash", "questESlSalt", "questESlSprinkles", "questESpEVE", "questESpJunglePun", "questESpGore", "questESpClipper", "questESpFakeMedium", "questESpSerum", "questESpSmokes", "questESpOutOfOrder", "questEStFishTrash", "questEStGiveMeFuel", "questEStNastyBears", "questEStSocialJusticeI", "questEStSocialJusticeII", "questEStSuperLuber", "questEStWorkWithFood", "questEStZippityDooDah", "questEUNewYou", "questF01Primordial", "questF02Hyboria", "questF03Future", "questF04Elves", "questF05Clancy", "questG01Meatcar", "questG02Whitecastle", "questG03Ego", "questG04Nemesis", "questG05Dark", "questG06Delivery", "questG07Myst", "questG08Moxie", "questG09Muscle", "questGlacierOfJerks", "questGuzzlr", "questI01Scapegoat", "questI02Beat", "questL02Larva", "questL03Rat", "questL04Bat", "questL05Goblin", "questL06Friar", "questL07Cyrptic", "questL08Trapper", "questL09Topping", "questL10Garbage", "questL11MacGuffin", "questL11Black", "questL11Business", "questL11Curses", "questL11Desert", "questL11Doctor", "questL11Manor", "questL11Palindome", "questL11Pyramid", "questL11Ron", "questL11Shen", "questL11Spare", "questL11Worship", "questL12War", "questL12HippyFrat", "questL13Final", "questL13Warehouse", "questLTTQuestByWire", "questM01Untinker", "questM02Artist", "questM03Bugbear", "questM05Toot", "questM06Gourd", "questM07Hammer", "questM08Baker", "questM09Rocks", "questM10Azazel", "questM11Postal", "questM12Pirate", "questM13Escape", "questM14Bounty", "questM15Lol", "questM16Temple", "questM17Babies", "questM18Swamp", "questM19Hippy", "questM20Necklace", "questM21Dance", "questM22Shirt", "questM23Meatsmith", "questM24Doc", "questM25Armorer", "questM26Oracle", "questMaelstromOfLovers", "questPAGhost", "questS01OldGuy", "questS02Monkees", "raveCombo1", "raveCombo2", "raveCombo3", "raveCombo4", "raveCombo5", "raveCombo6", "recoveryScript", "relayCounters", "royalty", "scriptMRUList", "seahorseName", "shenQuestItem", "shrubGarland", "shrubGifts", "shrubLights", "shrubTopper", "sideDefeated", "sidequestArenaCompleted", "sidequestFarmCompleted", "sidequestJunkyardCompleted", "sidequestLighthouseCompleted", "sidequestNunsCompleted", "sidequestOrchardCompleted", "skateParkStatus", "snowsuit", "sourceTerminalChips", "sourceTerminalEducate1", "sourceTerminalEducate2", "sourceTerminalEnquiry", "sourceTerminalEducateKnown", "sourceTerminalEnhanceKnown", "sourceTerminalEnquiryKnown", "sourceTerminalExtrudeKnown", "spadingData", "spadingScript", "speakeasyName", "spelunkyStatus", "spelunkyUpgrades", "spookyravenRecipeUsed", "stationaryButton1", "stationaryButton2", "stationaryButton3", "stationaryButton4", "stationaryButton5", "streamCrossDefaultTarget", "sweetSynthesisBlacklist", "telescope1", "telescope2", "telescope3", "telescope4", "telescope5", "testudinalTeachings", "textColors", "thanksMessage", "tomeSkillsHardcore", "tomeSkillsSoftcore", "trackVoteMonster", "trainsetConfiguration", "trapperOre", "umbrellaState", "umdLastObtained", "vintnerWineEffect", "vintnerWineName", "vintnerWineType", "violetFogLayout", "volcanoMaze1", "volcanoMaze2", "volcanoMaze3", "volcanoMaze4", "volcanoMaze5", "walfordBucketItem", "warProgress", "watchedPreferences", "workteaClue", "yourFavoriteBird", "yourFavoriteBirdMods", "youRobotCPUUpgrades", "_bastilleBoosts", "_bastilleChoice1", "_bastilleChoice2", "_bastilleChoice3", "_bastilleCurrentStyles", "_bastilleEnemyCastle", "_bastilleEnemyName", "_bastilleLastBattleResults", "_bastilleLastEncounter", "_bastilleStats", "_beachHeadsUsed", "_beachLayout", "_beachMinutes", "_birdOfTheDay", "_birdOfTheDayMods", "_bittycar", "_campAwaySmileBuffSign", "_cloudTalkMessage", "_cloudTalkSmoker", "_coatOfPaintModifier", "_dailySpecial", "_deckCardsSeen", "_feastedFamiliars", "_floristPlantsUsed", "_frAreasUnlocked", "_frHoursLeft", "_frMonstersKilled", "_horsery", "_horseryCrazyMox", "_horseryCrazyMus", "_horseryCrazyMys", "_horseryCrazyName", "_horseryCurrentName", "_horseryDarkName", "_horseryNormalName", "_horseryPaleName", "_jickJarAvailable", "_jiggleCheesedMonsters", "_lastCombatStarted", "_LastPirateRealmIsland", "_locketMonstersFought", "_mummeryMods", "_mummeryUses", "_newYouQuestSkill", "_noHatModifier", "_pantogramModifier", "_pottedPowerPlant", "_questESp", "_questPartyFair", "_questPartyFairProgress", "_questPartyFairQuest", "_roboDrinks", "_roninStoragePulls", "_spacegateAnimalLife", "_spacegateCoordinates", "_spacegateGear", "_spacegateHazards", "_spacegateIntelligentLife", "_spacegatePlanetName", "_spacegatePlantLife", "_stolenAccordions", "_tempRelayCounters", "_timeSpinnerFoodAvailable", "_unknownEasyBountyItem", "_unknownHardBountyItem", "_unknownSpecialBountyItem", "_untakenEasyBountyItem", "_untakenHardBountyItem", "_untakenSpecialBountyItem", "_userMods", "_villainLairColor", "_villainLairKey", "_voteLocal1", "_voteLocal2", "_voteLocal3", "_voteLocal4", "_voteMonster1", "_voteMonster2", "_voteModifier", "_VYKEACompanionType", "_VYKEACompanionRune", "_VYKEACompanionName"];
var numericOrStringProperties = ["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing", "choiceAdventure2", "choiceAdventure3", "choiceAdventure4", "choiceAdventure5", "choiceAdventure6", "choiceAdventure7", "choiceAdventure8", "choiceAdventure9", "choiceAdventure10", "choiceAdventure11", "choiceAdventure12", "choiceAdventure14", "choiceAdventure15", "choiceAdventure16", "choiceAdventure17", "choiceAdventure18", "choiceAdventure19", "choiceAdventure20", "choiceAdventure21", "choiceAdventure22", "choiceAdventure23", "choiceAdventure24", "choiceAdventure25", "choiceAdventure26", "choiceAdventure27", "choiceAdventure28", "choiceAdventure29", "choiceAdventure40", "choiceAdventure41", "choiceAdventure42", "choiceAdventure45", "choiceAdventure46", "choiceAdventure47", "choiceAdventure71", "choiceAdventure72", "choiceAdventure73", "choiceAdventure74", "choiceAdventure75", "choiceAdventure76", "choiceAdventure77", "choiceAdventure86", "choiceAdventure87", "choiceAdventure88", "choiceAdventure89", "choiceAdventure90", "choiceAdventure91", "choiceAdventure105", "choiceAdventure106", "choiceAdventure107", "choiceAdventure108", "choiceAdventure109", "choiceAdventure110", "choiceAdventure111", "choiceAdventure112", "choiceAdventure113", "choiceAdventure114", "choiceAdventure115", "choiceAdventure116", "choiceAdventure117", "choiceAdventure118", "choiceAdventure120", "choiceAdventure123", "choiceAdventure125", "choiceAdventure126", "choiceAdventure127", "choiceAdventure129", "choiceAdventure131", "choiceAdventure132", "choiceAdventure135", "choiceAdventure136", "choiceAdventure137", "choiceAdventure138", "choiceAdventure139", "choiceAdventure140", "choiceAdventure141", "choiceAdventure142", "choiceAdventure143", "choiceAdventure144", "choiceAdventure145", "choiceAdventure146", "choiceAdventure147", "choiceAdventure148", "choiceAdventure149", "choiceAdventure151", "choiceAdventure152", "choiceAdventure153", "choiceAdventure154", "choiceAdventure155", "choiceAdventure156", "choiceAdventure157", "choiceAdventure158", "choiceAdventure159", "choiceAdventure160", "choiceAdventure161", "choiceAdventure162", "choiceAdventure163", "choiceAdventure164", "choiceAdventure165", "choiceAdventure166", "choiceAdventure167", "choiceAdventure168", "choiceAdventure169", "choiceAdventure170", "choiceAdventure171", "choiceAdventure172", "choiceAdventure177", "choiceAdventure178", "choiceAdventure180", "choiceAdventure181", "choiceAdventure182", "choiceAdventure184", "choiceAdventure185", "choiceAdventure186", "choiceAdventure187", "choiceAdventure188", "choiceAdventure189", "choiceAdventure191", "choiceAdventure197", "choiceAdventure198", "choiceAdventure199", "choiceAdventure200", "choiceAdventure201", "choiceAdventure202", "choiceAdventure203", "choiceAdventure204", "choiceAdventure205", "choiceAdventure206", "choiceAdventure207", "choiceAdventure208", "choiceAdventure211", "choiceAdventure212", "choiceAdventure213", "choiceAdventure214", "choiceAdventure215", "choiceAdventure216", "choiceAdventure217", "choiceAdventure218", "choiceAdventure219", "choiceAdventure220", "choiceAdventure221", "choiceAdventure222", "choiceAdventure223", "choiceAdventure224", "choiceAdventure225", "choiceAdventure230", "choiceAdventure272", "choiceAdventure273", "choiceAdventure276", "choiceAdventure277", "choiceAdventure278", "choiceAdventure279", "choiceAdventure280", "choiceAdventure281", "choiceAdventure282", "choiceAdventure283", "choiceAdventure284", "choiceAdventure285", "choiceAdventure286", "choiceAdventure287", "choiceAdventure288", "choiceAdventure289", "choiceAdventure290", "choiceAdventure291", "choiceAdventure292", "choiceAdventure293", "choiceAdventure294", "choiceAdventure295", "choiceAdventure296", "choiceAdventure297", "choiceAdventure298", "choiceAdventure299", "choiceAdventure302", "choiceAdventure303", "choiceAdventure304", "choiceAdventure305", "choiceAdventure306", "choiceAdventure307", "choiceAdventure308", "choiceAdventure309", "choiceAdventure310", "choiceAdventure311", "choiceAdventure317", "choiceAdventure318", "choiceAdventure319", "choiceAdventure320", "choiceAdventure321", "choiceAdventure322", "choiceAdventure326", "choiceAdventure327", "choiceAdventure328", "choiceAdventure329", "choiceAdventure330", "choiceAdventure331", "choiceAdventure332", "choiceAdventure333", "choiceAdventure334", "choiceAdventure335", "choiceAdventure336", "choiceAdventure337", "choiceAdventure338", "choiceAdventure339", "choiceAdventure340", "choiceAdventure341", "choiceAdventure342", "choiceAdventure343", "choiceAdventure344", "choiceAdventure345", "choiceAdventure346", "choiceAdventure347", "choiceAdventure348", "choiceAdventure349", "choiceAdventure350", "choiceAdventure351", "choiceAdventure352", "choiceAdventure353", "choiceAdventure354", "choiceAdventure355", "choiceAdventure356", "choiceAdventure357", "choiceAdventure358", "choiceAdventure360", "choiceAdventure361", "choiceAdventure362", "choiceAdventure363", "choiceAdventure364", "choiceAdventure365", "choiceAdventure366", "choiceAdventure367", "choiceAdventure372", "choiceAdventure376", "choiceAdventure387", "choiceAdventure388", "choiceAdventure389", "choiceAdventure390", "choiceAdventure391", "choiceAdventure392", "choiceAdventure393", "choiceAdventure395", "choiceAdventure396", "choiceAdventure397", "choiceAdventure398", "choiceAdventure399", "choiceAdventure400", "choiceAdventure401", "choiceAdventure402", "choiceAdventure403", "choiceAdventure423", "choiceAdventure424", "choiceAdventure425", "choiceAdventure426", "choiceAdventure427", "choiceAdventure428", "choiceAdventure429", "choiceAdventure430", "choiceAdventure431", "choiceAdventure432", "choiceAdventure433", "choiceAdventure435", "choiceAdventure438", "choiceAdventure439", "choiceAdventure442", "choiceAdventure444", "choiceAdventure445", "choiceAdventure446", "choiceAdventure447", "choiceAdventure448", "choiceAdventure449", "choiceAdventure451", "choiceAdventure452", "choiceAdventure453", "choiceAdventure454", "choiceAdventure455", "choiceAdventure456", "choiceAdventure457", "choiceAdventure458", "choiceAdventure460", "choiceAdventure461", "choiceAdventure462", "choiceAdventure463", "choiceAdventure464", "choiceAdventure465", "choiceAdventure467", "choiceAdventure468", "choiceAdventure469", "choiceAdventure470", "choiceAdventure471", "choiceAdventure472", "choiceAdventure473", "choiceAdventure474", "choiceAdventure475", "choiceAdventure477", "choiceAdventure478", "choiceAdventure480", "choiceAdventure483", "choiceAdventure484", "choiceAdventure485", "choiceAdventure486", "choiceAdventure488", "choiceAdventure489", "choiceAdventure490", "choiceAdventure491", "choiceAdventure496", "choiceAdventure497", "choiceAdventure502", "choiceAdventure503", "choiceAdventure504", "choiceAdventure505", "choiceAdventure506", "choiceAdventure507", "choiceAdventure509", "choiceAdventure510", "choiceAdventure511", "choiceAdventure512", "choiceAdventure513", "choiceAdventure514", "choiceAdventure515", "choiceAdventure517", "choiceAdventure518", "choiceAdventure519", "choiceAdventure521", "choiceAdventure522", "choiceAdventure523", "choiceAdventure527", "choiceAdventure528", "choiceAdventure529", "choiceAdventure530", "choiceAdventure531", "choiceAdventure532", "choiceAdventure533", "choiceAdventure534", "choiceAdventure535", "choiceAdventure536", "choiceAdventure538", "choiceAdventure539", "choiceAdventure542", "choiceAdventure543", "choiceAdventure544", "choiceAdventure546", "choiceAdventure548", "choiceAdventure549", "choiceAdventure550", "choiceAdventure551", "choiceAdventure552", "choiceAdventure553", "choiceAdventure554", "choiceAdventure556", "choiceAdventure557", "choiceAdventure558", "choiceAdventure559", "choiceAdventure560", "choiceAdventure561", "choiceAdventure562", "choiceAdventure563", "choiceAdventure564", "choiceAdventure565", "choiceAdventure566", "choiceAdventure567", "choiceAdventure568", "choiceAdventure569", "choiceAdventure571", "choiceAdventure572", "choiceAdventure573", "choiceAdventure574", "choiceAdventure575", "choiceAdventure576", "choiceAdventure577", "choiceAdventure578", "choiceAdventure579", "choiceAdventure581", "choiceAdventure582", "choiceAdventure583", "choiceAdventure584", "choiceAdventure594", "choiceAdventure595", "choiceAdventure596", "choiceAdventure597", "choiceAdventure598", "choiceAdventure599", "choiceAdventure600", "choiceAdventure603", "choiceAdventure604", "choiceAdventure616", "choiceAdventure634", "choiceAdventure640", "choiceAdventure654", "choiceAdventure655", "choiceAdventure656", "choiceAdventure657", "choiceAdventure658", "choiceAdventure664", "choiceAdventure669", "choiceAdventure670", "choiceAdventure671", "choiceAdventure672", "choiceAdventure673", "choiceAdventure674", "choiceAdventure675", "choiceAdventure676", "choiceAdventure677", "choiceAdventure678", "choiceAdventure679", "choiceAdventure681", "choiceAdventure683", "choiceAdventure684", "choiceAdventure685", "choiceAdventure686", "choiceAdventure687", "choiceAdventure688", "choiceAdventure689", "choiceAdventure690", "choiceAdventure691", "choiceAdventure692", "choiceAdventure693", "choiceAdventure694", "choiceAdventure695", "choiceAdventure696", "choiceAdventure697", "choiceAdventure698", "choiceAdventure700", "choiceAdventure701", "choiceAdventure705", "choiceAdventure706", "choiceAdventure707", "choiceAdventure708", "choiceAdventure709", "choiceAdventure710", "choiceAdventure711", "choiceAdventure712", "choiceAdventure713", "choiceAdventure714", "choiceAdventure715", "choiceAdventure716", "choiceAdventure717", "choiceAdventure721", "choiceAdventure725", "choiceAdventure729", "choiceAdventure733", "choiceAdventure737", "choiceAdventure741", "choiceAdventure745", "choiceAdventure749", "choiceAdventure753", "choiceAdventure771", "choiceAdventure778", "choiceAdventure780", "choiceAdventure781", "choiceAdventure783", "choiceAdventure784", "choiceAdventure785", "choiceAdventure786", "choiceAdventure787", "choiceAdventure788", "choiceAdventure789", "choiceAdventure791", "choiceAdventure793", "choiceAdventure794", "choiceAdventure795", "choiceAdventure796", "choiceAdventure797", "choiceAdventure803", "choiceAdventure805", "choiceAdventure808", "choiceAdventure809", "choiceAdventure813", "choiceAdventure815", "choiceAdventure830", "choiceAdventure832", "choiceAdventure833", "choiceAdventure834", "choiceAdventure835", "choiceAdventure837", "choiceAdventure838", "choiceAdventure839", "choiceAdventure840", "choiceAdventure841", "choiceAdventure842", "choiceAdventure851", "choiceAdventure852", "choiceAdventure853", "choiceAdventure854", "choiceAdventure855", "choiceAdventure856", "choiceAdventure857", "choiceAdventure858", "choiceAdventure866", "choiceAdventure873", "choiceAdventure875", "choiceAdventure876", "choiceAdventure877", "choiceAdventure878", "choiceAdventure879", "choiceAdventure880", "choiceAdventure881", "choiceAdventure882", "choiceAdventure888", "choiceAdventure889", "choiceAdventure918", "choiceAdventure919", "choiceAdventure920", "choiceAdventure921", "choiceAdventure923", "choiceAdventure924", "choiceAdventure925", "choiceAdventure926", "choiceAdventure927", "choiceAdventure928", "choiceAdventure929", "choiceAdventure930", "choiceAdventure931", "choiceAdventure932", "choiceAdventure940", "choiceAdventure941", "choiceAdventure942", "choiceAdventure943", "choiceAdventure944", "choiceAdventure945", "choiceAdventure946", "choiceAdventure950", "choiceAdventure955", "choiceAdventure957", "choiceAdventure958", "choiceAdventure959", "choiceAdventure960", "choiceAdventure961", "choiceAdventure962", "choiceAdventure963", "choiceAdventure964", "choiceAdventure965", "choiceAdventure966", "choiceAdventure970", "choiceAdventure973", "choiceAdventure974", "choiceAdventure975", "choiceAdventure976", "choiceAdventure977", "choiceAdventure979", "choiceAdventure980", "choiceAdventure981", "choiceAdventure982", "choiceAdventure983", "choiceAdventure988", "choiceAdventure989", "choiceAdventure993", "choiceAdventure998", "choiceAdventure1000", "choiceAdventure1003", "choiceAdventure1005", "choiceAdventure1006", "choiceAdventure1007", "choiceAdventure1008", "choiceAdventure1009", "choiceAdventure1010", "choiceAdventure1011", "choiceAdventure1012", "choiceAdventure1013", "choiceAdventure1015", "choiceAdventure1016", "choiceAdventure1017", "choiceAdventure1018", "choiceAdventure1019", "choiceAdventure1020", "choiceAdventure1021", "choiceAdventure1022", "choiceAdventure1023", "choiceAdventure1026", "choiceAdventure1027", "choiceAdventure1028", "choiceAdventure1029", "choiceAdventure1030", "choiceAdventure1031", "choiceAdventure1032", "choiceAdventure1033", "choiceAdventure1034", "choiceAdventure1035", "choiceAdventure1036", "choiceAdventure1037", "choiceAdventure1038", "choiceAdventure1039", "choiceAdventure1040", "choiceAdventure1041", "choiceAdventure1042", "choiceAdventure1044", "choiceAdventure1045", "choiceAdventure1046", "choiceAdventure1048", "choiceAdventure1051", "choiceAdventure1052", "choiceAdventure1053", "choiceAdventure1054", "choiceAdventure1055", "choiceAdventure1056", "choiceAdventure1057", "choiceAdventure1059", "choiceAdventure1060", "choiceAdventure1061", "choiceAdventure1062", "choiceAdventure1065", "choiceAdventure1067", "choiceAdventure1068", "choiceAdventure1069", "choiceAdventure1070", "choiceAdventure1071", "choiceAdventure1073", "choiceAdventure1077", "choiceAdventure1080", "choiceAdventure1081", "choiceAdventure1082", "choiceAdventure1083", "choiceAdventure1084", "choiceAdventure1085", "choiceAdventure1091", "choiceAdventure1094", "choiceAdventure1095", "choiceAdventure1096", "choiceAdventure1097", "choiceAdventure1102", "choiceAdventure1106", "choiceAdventure1107", "choiceAdventure1108", "choiceAdventure1110", "choiceAdventure1114", "choiceAdventure1115", "choiceAdventure1116", "choiceAdventure1118", "choiceAdventure1119", "choiceAdventure1120", "choiceAdventure1121", "choiceAdventure1122", "choiceAdventure1123", "choiceAdventure1171", "choiceAdventure1172", "choiceAdventure1173", "choiceAdventure1174", "choiceAdventure1175", "choiceAdventure1193", "choiceAdventure1195", "choiceAdventure1196", "choiceAdventure1197", "choiceAdventure1198", "choiceAdventure1199", "choiceAdventure1202", "choiceAdventure1203", "choiceAdventure1204", "choiceAdventure1205", "choiceAdventure1206", "choiceAdventure1207", "choiceAdventure1208", "choiceAdventure1209", "choiceAdventure1210", "choiceAdventure1211", "choiceAdventure1212", "choiceAdventure1213", "choiceAdventure1214", "choiceAdventure1215", "choiceAdventure1219", "choiceAdventure1222", "choiceAdventure1223", "choiceAdventure1224", "choiceAdventure1225", "choiceAdventure1226", "choiceAdventure1227", "choiceAdventure1228", "choiceAdventure1229", "choiceAdventure1236", "choiceAdventure1237", "choiceAdventure1238", "choiceAdventure1239", "choiceAdventure1240", "choiceAdventure1241", "choiceAdventure1242", "choiceAdventure1243", "choiceAdventure1244", "choiceAdventure1245", "choiceAdventure1246", "choiceAdventure1247", "choiceAdventure1248", "choiceAdventure1249", "choiceAdventure1250", "choiceAdventure1251", "choiceAdventure1252", "choiceAdventure1253", "choiceAdventure1254", "choiceAdventure1255", "choiceAdventure1256", "choiceAdventure1266", "choiceAdventure1280", "choiceAdventure1281", "choiceAdventure1282", "choiceAdventure1283", "choiceAdventure1284", "choiceAdventure1285", "choiceAdventure1286", "choiceAdventure1287", "choiceAdventure1288", "choiceAdventure1289", "choiceAdventure1290", "choiceAdventure1291", "choiceAdventure1292", "choiceAdventure1293", "choiceAdventure1294", "choiceAdventure1295", "choiceAdventure1296", "choiceAdventure1297", "choiceAdventure1298", "choiceAdventure1299", "choiceAdventure1300", "choiceAdventure1301", "choiceAdventure1302", "choiceAdventure1303", "choiceAdventure1304", "choiceAdventure1305", "choiceAdventure1307", "choiceAdventure1310", "choiceAdventure1312", "choiceAdventure1313", "choiceAdventure1314", "choiceAdventure1315", "choiceAdventure1316", "choiceAdventure1317", "choiceAdventure1318", "choiceAdventure1319", "choiceAdventure1321", "choiceAdventure1322", "choiceAdventure1323", "choiceAdventure1324", "choiceAdventure1325", "choiceAdventure1326", "choiceAdventure1327", "choiceAdventure1328", "choiceAdventure1332", "choiceAdventure1333", "choiceAdventure1335", "choiceAdventure1340", "choiceAdventure1341", "choiceAdventure1345", "choiceAdventure1389", "choiceAdventure1392", "choiceAdventure1397", "choiceAdventure1399", "choiceAdventure1405", "choiceAdventure1411", "choiceAdventure1415", "choiceAdventure1427", "choiceAdventure1428", "choiceAdventure1429", "choiceAdventure1430", "choiceAdventure1431", "choiceAdventure1432", "choiceAdventure1433", "choiceAdventure1434", "choiceAdventure1436", "choiceAdventure1460", "choiceAdventure1461", "choiceAdventure1467", "choiceAdventure1468", "choiceAdventure1469", "choiceAdventure1470", "choiceAdventure1471", "choiceAdventure1472", "choiceAdventure1473", "choiceAdventure1474", "choiceAdventure1475", "choiceAdventure1486", "choiceAdventure1487", "choiceAdventure1488", "choiceAdventure1489", "choiceAdventure1491", "choiceAdventure1494"];
var familiarProperties = ["commaFamiliar", "nextQuantumFamiliar", "stillsuitFamiliar"];
var statProperties = ["nsChallenge1", "snojoSetting"];
var phylumProperties = ["dnaSyringe", "locketPhylum", "redSnapperPhylum"];
;// CONCATENATED MODULE: ./node_modules/libram/dist/propertyTyping.js

var booleanPropertiesSet = new Set(booleanProperties);
var numericPropertiesSet = new Set(numericProperties);
var numericOrStringPropertiesSet = new Set(numericOrStringProperties);
var stringPropertiesSet = new Set(stringProperties);
var locationPropertiesSet = new Set(locationProperties);
var monsterPropertiesSet = new Set(monsterProperties);
var familiarPropertiesSet = new Set(familiarProperties);
var statPropertiesSet = new Set(statProperties);
var phylumPropertiesSet = new Set(phylumProperties);
function isBooleanProperty(property) {
  return booleanPropertiesSet.has(property);
}
function isNumericProperty(property) {
  return numericPropertiesSet.has(property);
}
function isNumericOrStringProperty(property) {
  return numericOrStringPropertiesSet.has(property);
}
function isStringProperty(property) {
  return stringPropertiesSet.has(property);
}
function isLocationProperty(property) {
  return locationPropertiesSet.has(property);
}
function isMonsterProperty(property) {
  return monsterPropertiesSet.has(property);
}
function isFamiliarProperty(property) {
  return familiarPropertiesSet.has(property);
}
function isStatProperty(property) {
  return statPropertiesSet.has(property);
}
function isPhylumProperty(property) {
  return phylumPropertiesSet.has(property);
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/property.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var createPropertyGetter = transform => (property, default_) => {
  var value = (0,external_kolmafia_namespaceObject.getProperty)(property);

  if (default_ !== undefined && value === "") {
    return default_;
  }

  return transform(value, property);
};

var createMafiaClassPropertyGetter = (Type, toType) => createPropertyGetter(value => {
  if (value === "") return null;
  var v = toType(value);
  return v === Type.none ? null : v;
});

var getString = createPropertyGetter(value => value);
var getCommaSeparated = createPropertyGetter(value => value.split(/, ?/));
var getBoolean = createPropertyGetter(value => value === "true");
var getNumber = createPropertyGetter(value => Number(value));
var getBounty = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Bounty, external_kolmafia_namespaceObject.toBounty);
var getClass = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Class, external_kolmafia_namespaceObject.toClass);
var getCoinmaster = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Coinmaster, external_kolmafia_namespaceObject.toCoinmaster);
var getEffect = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Effect, external_kolmafia_namespaceObject.toEffect);
var getElement = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Element, external_kolmafia_namespaceObject.toElement);
var getFamiliar = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Familiar, external_kolmafia_namespaceObject.toFamiliar);
var getItem = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Item, external_kolmafia_namespaceObject.toItem);
var getLocation = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Location, external_kolmafia_namespaceObject.toLocation);
var getMonster = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Monster, external_kolmafia_namespaceObject.toMonster);
var getPhylum = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Phylum, external_kolmafia_namespaceObject.toPhylum);
var getServant = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Servant, external_kolmafia_namespaceObject.toServant);
var getSkill = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Skill, external_kolmafia_namespaceObject.toSkill);
var getSlot = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Slot, external_kolmafia_namespaceObject.toSlot);
var getStat = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Stat, external_kolmafia_namespaceObject.toStat);
var getThrall = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Thrall, external_kolmafia_namespaceObject.toThrall);
function property_get(property, _default) {
  var value = getString(property); // Handle known properties.

  if (isBooleanProperty(property)) {
    var _getBoolean;

    return (_getBoolean = getBoolean(property, _default)) !== null && _getBoolean !== void 0 ? _getBoolean : false;
  } else if (isNumericProperty(property)) {
    var _getNumber;

    return (_getNumber = getNumber(property, _default)) !== null && _getNumber !== void 0 ? _getNumber : 0;
  } else if (isNumericOrStringProperty(property)) {
    return value.match(/^\d+$/) ? parseInt(value) : value;
  } else if (isLocationProperty(property)) {
    return getLocation(property, _default);
  } else if (isMonsterProperty(property)) {
    return getMonster(property, _default);
  } else if (isFamiliarProperty(property)) {
    return getFamiliar(property, _default);
  } else if (isStatProperty(property)) {
    return getStat(property, _default);
  } else if (isPhylumProperty(property)) {
    return getPhylum(property, _default);
  } else if (isStringProperty(property)) {
    return value;
  } // Not a KnownProperty from here on out.


  if (_default instanceof external_kolmafia_namespaceObject.Location) {
    return getLocation(property, _default);
  } else if (_default instanceof external_kolmafia_namespaceObject.Monster) {
    return getMonster(property, _default);
  } else if (_default instanceof external_kolmafia_namespaceObject.Familiar) {
    return getFamiliar(property, _default);
  } else if (_default instanceof external_kolmafia_namespaceObject.Stat) {
    return getStat(property, _default);
  } else if (_default instanceof external_kolmafia_namespaceObject.Phylum) {
    return getPhylum(property, _default);
  } else if (typeof _default === "boolean") {
    return value === "true" ? true : value === "false" ? false : _default;
  } else if (typeof _default === "number") {
    return value === "" ? _default : parseInt(value);
  } else if (value === "") {
    return _default === undefined ? "" : _default;
  } else {
    return value;
  }
} // eslint-disable-next-line @typescript-eslint/no-explicit-any

function _set(property, value) {
  var stringValue = value === null ? "" : value.toString();
  (0,external_kolmafia_namespaceObject.setProperty)(property, stringValue);
}


function setProperties(properties) {
  for (var _i = 0, _Object$entries = Object.entries(properties); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        prop = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    _set(prop, value);
  }
}
function withProperties(properties, callback) {
  var propertiesBackup = Object.fromEntries(Object.entries(properties).map(_ref => {
    var _ref2 = _slicedToArray(_ref, 1),
        prop = _ref2[0];

    return [prop, property_get(prop)];
  }));
  setProperties(properties);

  try {
    callback();
  } finally {
    setProperties(propertiesBackup);
  }
}
function withProperty(property, value, callback) {
  withProperties(_defineProperty({}, property, value), callback);
}
function withChoices(choices, callback) {
  var properties = Object.fromEntries(Object.entries(choices).map(_ref3 => {
    var _ref4 = _slicedToArray(_ref3, 2),
        choice = _ref4[0],
        option = _ref4[1];

    return ["choiceAdventure".concat(choice), option];
  }));
  withProperties(properties, callback);
}
function withChoice(choice, value, callback) {
  withChoices(_defineProperty({}, choice, value), callback);
}
var PropertiesManager = /*#__PURE__*/function () {
  function PropertiesManager() {
    _classCallCheck(this, PropertiesManager);

    _defineProperty(this, "properties", {});
  }

  _createClass(PropertiesManager, [{
    key: "storedValues",
    get: function get() {
      return this.properties;
    }
    /**
     * Sets a collection of properties to the given values, storing the old values.
     * @param propertiesToSet A Properties object, keyed by property name.
     */

  }, {
    key: "set",
    value: function set(propertiesToSet) {
      for (var _i2 = 0, _Object$entries2 = Object.entries(propertiesToSet); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            propertyName = _Object$entries2$_i[0],
            propertyValue = _Object$entries2$_i[1];

        if (this.properties[propertyName] === undefined) {
          this.properties[propertyName] = property_get(propertyName);
        }

        _set(propertyName, propertyValue);
      }
    }
    /**
     * Sets a collection of choice adventure properties to the given values, storing the old values.
     * @param choicesToSet An object keyed by choice adventure number.
     */

  }, {
    key: "setChoices",
    value: function setChoices(choicesToSet) {
      this.set(Object.fromEntries(Object.entries(choicesToSet).map(_ref5 => {
        var _ref6 = _slicedToArray(_ref5, 2),
            choiceNumber = _ref6[0],
            choiceValue = _ref6[1];

        return ["choiceAdventure".concat(choiceNumber), choiceValue];
      })));
    }
    /**
     * Sets a single choice adventure property to the given value, storing the old value.
     * @param choiceToSet The number of the choice adventure to set the property for.
     * @param value The value to assign to that choice adventure.
     */

  }, {
    key: "setChoice",
    value: function setChoice(choiceToSet, value) {
      this.setChoices(_defineProperty({}, choiceToSet, value));
    }
    /**
     * Resets the given properties to their original stored value. Does not delete entries from the manager.
     * @param properties Collection of properties to reset.
     */

  }, {
    key: "reset",
    value: function reset() {
      for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
        properties[_key] = arguments[_key];
      }

      for (var _i3 = 0, _properties = properties; _i3 < _properties.length; _i3++) {
        var property = _properties[_i3];
        var value = this.properties[property];

        if (value) {
          _set(property, value);
        }
      }
    }
    /**
     * Iterates over all stored values, setting each property back to its original stored value. Does not delete entries from the manager.
     */

  }, {
    key: "resetAll",
    value: function resetAll() {
      setProperties(this.properties);
    }
    /**
     * Stops storing the original values of inputted properties.
     * @param properties Properties for the manager to forget.
     */

  }, {
    key: "clear",
    value: function clear() {
      for (var _len2 = arguments.length, properties = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        properties[_key2] = arguments[_key2];
      }

      for (var _i4 = 0, _properties2 = properties; _i4 < _properties2.length; _i4++) {
        var property = _properties2[_i4];

        if (this.properties[property]) {
          delete this.properties[property];
        }
      }
    }
    /**
     * Clears all properties.
     */

  }, {
    key: "clearAll",
    value: function clearAll() {
      this.properties = {};
    }
    /**
     * Increases a numeric property to the given value if necessary.
     * @param property The numeric property we want to potentially raise.
     * @param value The minimum value we want that property to have.
     * @returns Whether we needed to change the property.
     */

  }, {
    key: "setMinimumValue",
    value: function setMinimumValue(property, value) {
      if (property_get(property, 0) < value) {
        this.set(_defineProperty({}, property, value));
        return true;
      }

      return false;
    }
    /**
     * Decrease a numeric property to the given value if necessary.
     * @param property The numeric property we want to potentially lower.
     * @param value The maximum value we want that property to have.
     * @returns Whether we needed to change the property.
     */

  }, {
    key: "setMaximumValue",
    value: function setMaximumValue(property, value) {
      if (property_get(property, 0) > value) {
        this.set(_defineProperty({}, property, value));
        return true;
      }

      return false;
    }
    /**
     * Creates a new PropertiesManager with identical stored values to this one.
     * @returns A new PropertiesManager, with identical stored values to this one.
     */

  }, {
    key: "clone",
    value: function clone() {
      var newGuy = new PropertiesManager();
      newGuy.properties = this.storedValues;
      return newGuy;
    }
    /**
     * Clamps a numeric property, modulating it up or down to fit within a specified range
     * @param property The numeric property to clamp
     * @param min The lower bound for what we want the property to be allowed to be.
     * @param max The upper bound for what we want the property to be allowed to be.
     * @returns Whether we ended up changing the property or not.
     */

  }, {
    key: "clamp",
    value: function clamp(property, min, max) {
      if (max < min) return false;
      var start = property_get(property);
      this.setMinimumValue(property, min);
      this.setMaximumValue(property, max);
      return start !== property_get(property);
    }
    /**
     * Determines whether this PropertiesManager has identical stored values to another.
     * @param other The PropertiesManager to compare to this one.
     * @returns Whether their StoredValues are identical.
     */

  }, {
    key: "equals",
    value: function equals(other) {
      var thisProps = Object.entries(this.storedValues);
      var otherProps = new Map(Object.entries(other.storedValues));
      if (thisProps.length !== otherProps.size) return false;

      for (var _i5 = 0, _thisProps = thisProps; _i5 < _thisProps.length; _i5++) {
        var _thisProps$_i = _slicedToArray(_thisProps[_i5], 2),
            propertyName = _thisProps$_i[0],
            propertyValue = _thisProps$_i[1];

        if (otherProps.get(propertyName) === propertyValue) return false;
      }

      return true;
    }
    /**
     * Merges a PropertiesManager onto this one, letting the input win in the event that both PropertiesManagers have a value stored.
     * @param other The PropertiesManager to be merged onto this one.
     * @returns A new PropertiesManager with stored values from both its parents.
     */

  }, {
    key: "merge",
    value: function merge(other) {
      var newGuy = new PropertiesManager();
      newGuy.properties = _objectSpread(_objectSpread({}, this.properties), other.properties);
      return newGuy;
    }
    /**
     * Merges an arbitrary collection of PropertiesManagers, letting the rightmost PropertiesManager win in the event of verlap.
     * @param mergees The PropertiesManagers to merge together.
     * @returns A PropertiesManager that is just an amalgam of all the constituents.
     */

  }], [{
    key: "merge",
    value: function merge() {
      for (var _len3 = arguments.length, mergees = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        mergees[_key3] = arguments[_key3];
      }

      if (mergees.length === 0) return new PropertiesManager();
      return mergees.reduce((a, b) => a.merge(b));
    }
  }]);

  return PropertiesManager;
}();
;// CONCATENATED MODULE: ./node_modules/libram/dist/utils.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = utils_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function utils_slicedToArray(arr, i) { return utils_arrayWithHoles(arr) || utils_iterableToArrayLimit(arr, i) || utils_unsupportedIterableToArray(arr, i) || utils_nonIterableRest(); }

function utils_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function utils_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function utils_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || utils_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function utils_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return utils_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return utils_arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return utils_arrayLikeToArray(arr); }

function utils_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function notNull(value) {
  return value !== null;
}
function parseNumber(n) {
  return Number.parseInt(n.replace(/,/g, ""));
}
/**
 * Clamp a number between lower and upper bounds.
 *
 * @param n Number to clamp.
 * @param min Lower bound.
 * @param max Upper bound.
 */

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
/**
 * Split an {@param array} into {@param chunkSize} sized chunks
 *
 * @param array Array to split
 * @param chunkSize Size of chunk
 */

function utils_chunk(array, chunkSize) {
  var result = [];

  for (var i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }

  return result;
}
function arrayToCountedMap(array) {
  if (!Array.isArray(array)) return array;
  var map = new Map();
  array.forEach(item => {
    map.set(item, (map.get(item) || 0) + 1);
  });
  return map;
}
function countedMapToArray(map) {
  var _ref;

  return (_ref = []).concat.apply(_ref, _toConsumableArray(_toConsumableArray(map).map(_ref2 => {
    var _ref3 = utils_slicedToArray(_ref2, 2),
        item = _ref3[0],
        quantity = _ref3[1];

    return Array(quantity).fill(item);
  })));
}
function countedMapToString(map) {
  return _toConsumableArray(map).map(_ref4 => {
    var _ref5 = utils_slicedToArray(_ref4, 2),
        item = _ref5[0],
        quantity = _ref5[1];

    return "".concat(quantity, " x ").concat(item);
  }).join(", ");
}
function sum(addends, x) {
  return addends.reduce((subtotal, element) => subtotal + (typeof x === "function" ? x(element) : element[x]), 0);
}
function sumNumbers(addends) {
  return sum(addends, x => x);
}
/**
 * Checks if a given item is in a readonly array, acting as a typeguard.
 * @param item Needle
 * @param array Readonly array haystack
 * @returns Whether the item is in the array, and narrows the type of the item.
 */

function utils_arrayContains(item, array) {
  return array.includes(item);
}
/**
 * Checks if two arrays contain the same elements in the same quantity.
 * @param a First array for comparison
 * @param b Second array for comparison
 * @returns Whether the two arrays are equal, irrespective of order.
 */

function setEqual(a, b) {
  var sortedA = _toConsumableArray(a).sort();

  var sortedB = _toConsumableArray(b).sort();

  return a.length === b.length && sortedA.every((item, index) => item === sortedB[index]);
}
/**
 * Reverses keys and values for a given map
 * @param map Map to invert
 */

function invertMap(map) {
  var returnValue = new Map();

  var _iterator = _createForOfIteratorHelper(map),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = utils_slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      returnValue.set(value, key);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return returnValue;
}
/**
 * Splits a string by commas while also respecting escaping commas with a backslash
 * @param str String to split
 * @returns List of tokens
 */

function splitByCommasWithEscapes(str) {
  var returnValue = [];
  var ignoreNext = false;
  var currentString = "";

  var _iterator2 = _createForOfIteratorHelper(str.split("")),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var char = _step2.value;

      if (char === "\\") {
        ignoreNext = true;
      } else {
        if (char == "," && !ignoreNext) {
          returnValue.push(currentString.trim());
          currentString = "";
        } else {
          currentString += char;
        }

        ignoreNext = false;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  returnValue.push(currentString.trim());
  return returnValue;
}
function maxBy(array, optimizer) {
  var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!array.length) throw new Error("Cannot call maxBy on an empty array!");

  if (typeof optimizer === "function") {
    return _toConsumableArray(array).reduce((_ref6, other) => {
      var value = _ref6.value,
          item = _ref6.item;
      var otherValue = optimizer(other);
      return value >= otherValue !== reverse ? {
        value: value,
        item: item
      } : {
        value: otherValue,
        item: other
      };
    }, {
      item: array[0],
      value: optimizer(array[0])
    }).item;
  } else {
    return array.reduce((a, b) => a[optimizer] >= b[optimizer] !== reverse ? a : b);
  }
}
function arrayEquals(left, right) {
  if (left.length !== right.length) return false;
  return left.every((element, index) => element === right[index]);
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/template-string.js



var concatTemplateString = function concatTemplateString(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    placeholders[_key - 1] = arguments[_key];
  }

  return literals.raw.reduce((acc, literal, i) => {
    var _placeholders$i;

    return acc + literal + ((_placeholders$i = placeholders[i]) !== null && _placeholders$i !== void 0 ? _placeholders$i : "");
  }, "");
};

var createSingleConstant = Type => {
  var tagFunction = function tagFunction(literals) {
    for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      placeholders[_key2 - 1] = arguments[_key2];
    }

    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    return Type.get(input);
  };

  tagFunction.none = Type.none;
  return tagFunction;
};

var createPluralConstant = Type => function (literals) {
  for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    placeholders[_key3 - 1] = arguments[_key3];
  }

  var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));

  if (input === "") {
    return Type.all();
  }

  return Type.get(splitByCommasWithEscapes(input));
};
/**
 * A Bounty specified by name.
 *
 * @category In-game constant
 */


var $bounty = createSingleConstant(external_kolmafia_namespaceObject.Bounty);
/**
 * A list of Bounties specified by a comma-separated list of names.
 * For a list of all possible Bounties, leave the template string blank.
 *
 * @category In-game constant
 */

var $bounties = createPluralConstant(external_kolmafia_namespaceObject.Bounty);
/**
 * A Class specified by name.
 *
 * @category In-game constant
 */

var $class = createSingleConstant(external_kolmafia_namespaceObject.Class);
/**
 * A list of Classes specified by a comma-separated list of names.
 * For a list of all possible Classes, leave the template string blank.
 *
 * @category In-game constant
 */

var $classes = createPluralConstant(external_kolmafia_namespaceObject.Class);
/**
 * A Coinmaster specified by name.
 *
 * @category In-game constant
 */

var $coinmaster = createSingleConstant(external_kolmafia_namespaceObject.Coinmaster);
/**
 * A list of Coinmasters specified by a comma-separated list of names.
 * For a list of all possible Coinmasters, leave the template string blank.
 *
 * @category In-game constant
 */

var $coinmasters = createPluralConstant(external_kolmafia_namespaceObject.Coinmaster);
/**
 * An Effect specified by name.
 *
 * @category In-game constant
 */

var $effect = createSingleConstant(external_kolmafia_namespaceObject.Effect);
/**
 * A list of Effects specified by a comma-separated list of names.
 * For a list of all possible Effects, leave the template string blank.
 *
 * @category In-game constant
 */

var $effects = createPluralConstant(external_kolmafia_namespaceObject.Effect);
/**
 * An Element specified by name.
 *
 * @category In-game constant
 */

var $element = createSingleConstant(external_kolmafia_namespaceObject.Element);
/**
 * A list of Elements specified by a comma-separated list of names.
 * For a list of all possible Elements, leave the template string blank.
 *
 * @category In-game constant
 */

var $elements = createPluralConstant(external_kolmafia_namespaceObject.Element);
/**
 * A Familiar specified by name.
 *
 * @category In-game constant
 */

var template_string_$familiar = createSingleConstant(external_kolmafia_namespaceObject.Familiar);
/**
 * A list of Familiars specified by a comma-separated list of names.
 * For a list of all possible Familiars, leave the template string blank.
 *
 * @category In-game constant
 */

var $familiars = createPluralConstant(external_kolmafia_namespaceObject.Familiar);
/**
 * An Item specified by name.
 *
 * @category In-game constant
 */

var template_string_$item = createSingleConstant(external_kolmafia_namespaceObject.Item);
/**
 * A list of Items specified by a comma-separated list of names.
 * For a list of all possible Items, leave the template string blank.
 *
 * @category In-game constant
 */

var template_string_$items = createPluralConstant(external_kolmafia_namespaceObject.Item);
/**
 * A Location specified by name.
 *
 * @category In-game constant
 */

var $location = createSingleConstant(external_kolmafia_namespaceObject.Location);
/**
 * A list of Locations specified by a comma-separated list of names.
 * For a list of all possible Locations, leave the template string blank.
 *
 * @category In-game constant
 */

var $locations = createPluralConstant(external_kolmafia_namespaceObject.Location);
/**
 * A Monster specified by name.
 *
 * @category In-game constant
 */

var $monster = createSingleConstant(external_kolmafia_namespaceObject.Monster);
/**
 * A list of Monsters specified by a comma-separated list of names.
 * For a list of all possible Monsters, leave the template string blank.
 *
 * @category In-game constant
 */

var $monsters = createPluralConstant(external_kolmafia_namespaceObject.Monster);
/**
 * A Phylum specified by name.
 *
 * @category In-game constant
 */

var $phylum = createSingleConstant(external_kolmafia_namespaceObject.Phylum);
/**
 * A list of Phyla specified by a comma-separated list of names.
 * For a list of all possible Phyla, leave the template string blank.
 *
 * @category In-game constant
 */

var $phyla = createPluralConstant(external_kolmafia_namespaceObject.Phylum);
/**
 * A Servant specified by name.
 *
 * @category In-game constant
 */

var $servant = createSingleConstant(external_kolmafia_namespaceObject.Servant);
/**
 * A list of Servants specified by a comma-separated list of names.
 * For a list of all possible Servants, leave the template string blank.
 *
 * @category In-game constant
 */

var $servants = createPluralConstant(external_kolmafia_namespaceObject.Servant);
/**
 * A Skill specified by name.
 *
 * @category In-game constant
 */

var template_string_$skill = createSingleConstant(external_kolmafia_namespaceObject.Skill);
/**
 * A list of Skills specified by a comma-separated list of names.
 * For a list of all possible Skills, leave the template string blank.
 *
 * @category In-game constant
 */

var $skills = createPluralConstant(external_kolmafia_namespaceObject.Skill);
/**
 * A Slot specified by name.
 *
 * @category In-game constant
 */

var $slot = createSingleConstant(external_kolmafia_namespaceObject.Slot);
/**
 * A list of Slots specified by a comma-separated list of names.
 * For a list of all possible Slots, leave the template string blank.
 *
 * @category In-game constant
 */

var $slots = createPluralConstant(external_kolmafia_namespaceObject.Slot);
/**
 * A Stat specified by name.
 *
 * @category In-game constant
 */

var $stat = createSingleConstant(external_kolmafia_namespaceObject.Stat);
/**
 * A list of Stats specified by a comma-separated list of names.
 * For a list of all possible Stats, leave the template string blank.
 *
 * @category In-game constant
 */

var $stats = createPluralConstant(external_kolmafia_namespaceObject.Stat);
/**
 * A Thrall specified by name.
 *
 * @category In-game constant
 */

var $thrall = createSingleConstant(external_kolmafia_namespaceObject.Thrall);
/**
 * A list of Thralls specified by a comma-separated list of names.
 * For a list of all possible Thralls, leave the template string blank.
 *
 * @category In-game constant
 */

var $thralls = createPluralConstant(external_kolmafia_namespaceObject.Thrall);
/**
 * A Path specified by name.
 *
 * @category In-game constant
 */

var $path = createSingleConstant(external_kolmafia_namespaceObject.Path);
/**
 * A list of Paths specified by a comma-separated list of names.
 * For a list of all possible Paths, leave the template string blank.
 *
 * @category In-game constant
 */

var $paths = createPluralConstant(external_kolmafia_namespaceObject.Path);
;// CONCATENATED MODULE: ./node_modules/libram/dist/lib.js
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34;

function lib_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function lib_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = lib_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function lib_slicedToArray(arr, i) { return lib_arrayWithHoles(arr) || lib_iterableToArrayLimit(arr, i) || lib_unsupportedIterableToArray(arr, i) || lib_nonIterableRest(); }

function lib_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function lib_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return lib_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return lib_arrayLikeToArray(o, minLen); }

function lib_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function lib_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function lib_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/** @module GeneralLibrary */






/**
 * Returns the current maximum Accordion Thief songs the player can have in their head
 *
 * @category General
 */

function getSongLimit() {
  return 3 + (booleanModifier("Four Songs") ? 1 : 0) + numericModifier("Additional Song");
}
/**
 * Return whether the Skill or Effect provided is an Accordion Thief song
 *
 * @category General
 * @param skillOrEffect The Skill or Effect
 */

function isSong(skillOrEffect) {
  if (skillOrEffect instanceof external_kolmafia_namespaceObject.Effect && skillOrEffect.attributes.includes("song")) {
    return true;
  } else {
    var skill = skillOrEffect instanceof external_kolmafia_namespaceObject.Effect ? (0,external_kolmafia_namespaceObject.toSkill)(skillOrEffect) : skillOrEffect;
    return skill.class === $class(_templateObject || (_templateObject = _taggedTemplateLiteral(["Accordion Thief"]))) && skill.buff;
  }
}
/**
 * List all active Effects
 *
 * @category General
 */

function getActiveEffects() {
  return Object.keys(myEffects()).map(e => Effect.get(e));
}
/**
 * List currently active Accordion Thief songs
 *
 * @category General
 */

function getActiveSongs() {
  return getActiveEffects().filter(isSong);
}
/**
 * List number of active Accordion Thief songs
 *
 * @category General
 */

function getSongCount() {
  return getActiveSongs().length;
}
/**
 * Returns true if the player can remember another Accordion Thief song
 *
 * @category General
 * @param quantity Number of songs to test the space for
 */

function canRememberSong() {
  var quantity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return getSongLimit() - getSongCount() >= quantity;
}
/**
 * Return the locations in which the given monster can be encountered naturally
 *
 * @category General
 * @param monster Monster to find
 */

function getMonsterLocations(monster) {
  return Location.all().filter(location => monster.name in appearanceRates(location));
}
/**
 * Return the player's remaining liver space
 *
 * @category General
 */

function getRemainingLiver() {
  return inebrietyLimit() - myInebriety();
}
/**
 * Return the player's remaining stomach space
 *
 * @category General
 */

function getRemainingStomach() {
  return fullnessLimit() - myFullness();
}
/**
 * Return the player's remaining spleen space
 *
 * @category General
 */

function getRemainingSpleen() {
  return spleenLimit() - mySpleenUse();
}
/**
 * Return whether the player "has" any entity which one could feasibly "have".
 *
 * @category General
 * @param thing Thing to check
 * @param quantity Number to check that the player has
 */

function have(thing) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (thing instanceof external_kolmafia_namespaceObject.Effect) {
    return (0,external_kolmafia_namespaceObject.haveEffect)(thing) >= quantity;
  }

  if (thing instanceof external_kolmafia_namespaceObject.Familiar) {
    return (0,external_kolmafia_namespaceObject.haveFamiliar)(thing);
  }

  if (thing instanceof external_kolmafia_namespaceObject.Item) {
    return (0,external_kolmafia_namespaceObject.availableAmount)(thing) >= quantity;
  }

  if (thing instanceof external_kolmafia_namespaceObject.Servant) {
    return (0,external_kolmafia_namespaceObject.haveServant)(thing);
  }

  if (thing instanceof external_kolmafia_namespaceObject.Skill) {
    return (0,external_kolmafia_namespaceObject.haveSkill)(thing);
  }

  if (thing instanceof external_kolmafia_namespaceObject.Thrall) {
    var thrall = (0,external_kolmafia_namespaceObject.myThrall)();
    return thrall.id === thing.id && thrall.level >= quantity;
  }

  return false;
}
/**
 * Return whether an item is in the player's campground
 *
 * @category General
 * @param item The item mafia uses to represent the campground item
 */

function haveInCampground(item) {
  return Object.keys((0,external_kolmafia_namespaceObject.getCampground)()).map(i => external_kolmafia_namespaceObject.Item.get(i)).includes(item);
}
var Wanderer;

(function (Wanderer) {
  Wanderer["Digitize"] = "Digitize Monster";
  Wanderer["Enamorang"] = "Enamorang Monster";
  Wanderer["Familiar"] = "Familiar";
  Wanderer["Holiday"] = "Holiday Monster";
  Wanderer["Kramco"] = "Kramco";
  Wanderer["Nemesis"] = "Nemesis Assassin";
  Wanderer["Portscan"] = "portscan.edu";
  Wanderer["Romantic"] = "Romantic Monster";
  Wanderer["Vote"] = "Vote Monster";
})(Wanderer || (Wanderer = {}));

var deterministicWanderers = [Wanderer.Digitize, Wanderer.Portscan];
/**
 * Return whether the player has the queried counter
 *
 * @category General
 */

function haveCounter(counterName) {
  var minTurns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var maxTurns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
  return (0,external_kolmafia_namespaceObject.getCounters)(counterName, minTurns, maxTurns) === counterName;
}
/**
 * Return whether the player has the queried wandering counter
 *
 * @category Wanderers
 */

function haveWandererCounter(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer);
  }

  var begin = wanderer + " window begin";
  var end = wanderer + " window end";
  return haveCounter(begin) || haveCounter(end);
}
/**
 * Returns whether the player will encounter a vote wanderer on the next turn,
 * providing an "I Voted!" sticker is equipped.
 *
 * @category Wanderers
 */

function isVoteWandererNow() {
  return totalTurnsPlayed() % 11 === 1 && get("lastVoteMonsterTurn") < totalTurnsPlayed();
}
/**
 * Tells us whether we can expect a given wanderer now. Behaves differently
 * for different types of wanderer.
 *
 * - For deterministic wanderers, return whether the player will encounter
 *   the queried wanderer on the next turn
 *
 * - For variable wanderers (window), return whether the player is within
 *   an encounter window for the queried wanderer
 *
 * - For variable wanderers (chance per turn), returns true unless the player
 *   has exhausted the number of wanderers possible
 *
 * @category Wanderers
 * @param wanderer Wanderer to check
 */

function isWandererNow(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer, 0, 0);
  }

  if (wanderer === Wanderer.Kramco) {
    return true;
  }

  if (wanderer === Wanderer.Vote) {
    return isVoteWandererNow();
  }

  if (wanderer === Wanderer.Familiar) {
    return get("_hipsterAdv") < 7;
  }

  var begin = wanderer + " window begin";
  var end = wanderer + " window end";
  return !haveCounter(begin, 1) && haveCounter(end);
}
/**
 * Returns the float chance the player will encounter a sausage goblin on the
 * next turn, providing the Kramco Sausage-o-Matic is equipped.
 *
 * @category Wanderers
 */

function getKramcoWandererChance() {
  var fights = property_get("_sausageFights");
  var lastFight = property_get("_lastSausageMonsterTurn");
  var totalTurns = (0,external_kolmafia_namespaceObject.totalTurnsPlayed)();

  if (fights < 1) {
    return lastFight === totalTurns && (0,external_kolmafia_namespaceObject.myTurncount)() < 1 ? 0.5 : 1.0;
  }

  var turnsSinceLastFight = totalTurns - lastFight;
  return Math.min(1.0, (turnsSinceLastFight + 1) / (5 + fights * 3 + Math.pow(Math.max(0, fights - 5), 3)));
}
/**
 * Returns the float chance the player will encounter an Artistic Goth Kid or
 * Mini-Hipster wanderer on the next turn, providing a familiar is equipped.
 *
 * NOTE: You must complete one combat with the Artistic Goth Kid before you
 * can encounter any wanderers. Consequently,ƒ the first combat with the
 * Artist Goth Kid is effectively 0% chance to encounter a wanderer.
 *
 * @category Wanderers
 */

function getFamiliarWandererChance() {
  var totalFights = get("_hipsterAdv");
  var probability = [0.5, 0.4, 0.3, 0.2];

  if (totalFights < 4) {
    return probability[totalFights];
  }

  return totalFights > 7 ? 0.0 : 0.1;
}
/**
 * Returns the float chance the player will encounter the queried wanderer
 * on the next turn.
 *
 * @category Wanderers
 * @param wanderer Wanderer to check
 */

function getWandererChance(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer, 0, 0) ? 1.0 : 0.0;
  }

  if (wanderer === Wanderer.Kramco) {
    getKramcoWandererChance();
  }

  if (wanderer === Wanderer.Vote) {
    return isVoteWandererNow() ? 1.0 : 0.0;
  }

  if (wanderer === Wanderer.Familiar) {
    getFamiliarWandererChance();
  }

  var begin = wanderer + " window begin";
  var end = wanderer + " window end";

  if (haveCounter(begin, 1, 100)) {
    return 0.0;
  }

  var counters = get("relayCounters");
  var re = new RegExp("(\\d+):" + end);
  var matches = counters.match(re);

  if (matches && matches.length === 2) {
    var window = Number.parseInt(matches[1]) - myTurncount();
    return 1.0 / window;
  }

  return 0.0;
}
/**
 * Returns true if the player's current familiar is equal to the one supplied
 *
 * @category General
 * @param familiar Familiar to check
 */

function isCurrentFamiliar(familiar) {
  return myFamiliar() === familiar;
}
/**
 * Returns the fold group (if any) of which the given item is a part
 *
 * @category General
 * @param item Item that is part of the required fold group
 */

function getFoldGroup(item) {
  return Object.entries(getRelated(item, "fold")).sort((_ref, _ref2) => {
    var _ref3 = lib_slicedToArray(_ref, 2),
        a = _ref3[1];

    var _ref4 = lib_slicedToArray(_ref2, 2),
        b = _ref4[1];

    return a - b;
  }).map(_ref5 => {
    var _ref6 = lib_slicedToArray(_ref5, 1),
        i = _ref6[0];

    return Item.get(i);
  });
}
/**
 * Returns the zap group (if any) of which the given item is a part
 *
 * @category General
 * @param item Item that is part of the required zap group
 */

function getZapGroup(item) {
  return Object.keys(getRelated(item, "zap")).map(i => Item.get(i));
}
/**
 * Get a map of banished monsters keyed by what banished them
 *
 * @category General
 */

function getBanishedMonsters() {
  var banishes = chunk(get("banishedMonsters").split(":"), 3);
  var result = new Map();

  var _iterator = lib_createForOfIteratorHelper(banishes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = lib_slicedToArray(_step.value, 2),
          foe = _step$value[0],
          banisher = _step$value[1];

      if (foe === undefined || banisher === undefined) break; // toItem doesn"t error if the item doesn"t exist, so we have to use that.

      var banisherItem = toItem(banisher);

      if (banisher.toLowerCase() === "saber force") {
        result.set($skill(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Use the Force"]))), Monster.get(foe));
      } else if (banisher.toLowerCase() === "nanorhino") {
        result.set($skill(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Unleash Nanites"]))), Monster.get(foe));
      } else if ([Item.none, Item.get("training scroll:  Snokebomb"), Item.get("tomayohawk-style reflex hammer"), null].includes(banisherItem)) {
        if (Skill.get(banisher) === $skill.none) {
          break;
        } else {
          result.set(Skill.get(banisher), Monster.get(foe));
        }
      } else {
        result.set(banisherItem, Monster.get(foe));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
}
/**
 * Returns true if the item is usable
 *
 * This function will be an ongoing work in progress
 *
 * @param item Item to check
 */

function canUse(item) {
  var path = myPath();

  if (path !== Path.get("Nuclear Autumn")) {
    if ($items(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Shrieking Weasel holo-record, Power-Guy 2000 holo-record, Lucky Strikes holo-record, EMD holo-record, Superdrifter holo-record, The Pigs holo-record, Drunk Uncles holo-record"]))).includes(item)) {
      return false;
    }
  }

  if (path === Path.get("G-Lover")) {
    if (!item.name.toLowerCase().includes("g")) return false;
  }

  if (path === Path.get("Bees Hate You")) {
    if (item.name.toLowerCase().includes("b")) return false;
  }

  return true;
}
/**
 * Turn KoLmafia `none`s to JavaScript `null`s
 *
 * @param thing Thing that can have a mafia "none" value
 */

function noneToNull(thing) {
  if (thing instanceof Effect) {
    return thing === Effect.none ? null : thing;
  }

  if (thing instanceof Familiar) {
    return thing === Familiar.none ? null : thing;
  }

  if (thing instanceof Item) {
    return thing === Item.none ? null : thing;
  }

  return thing;
}
/**
 * Return the average value from the sort of range that KoLmafia encodes as a string
 *
 * @param range KoLmafia-style range string
 */

function getAverage(range) {
  var _range$match;

  if (range.indexOf("-") < 0) return Number(range);

  var _ref7 = (_range$match = range.match(/(-?[0-9]+)-(-?[0-9]+)/)) !== null && _range$match !== void 0 ? _range$match : ["0", "0", "0"],
      _ref8 = lib_slicedToArray(_ref7, 3),
      lower = _ref8[1],
      upper = _ref8[2];

  return (Number(lower) + Number(upper)) / 2;
}
/**
 * Return average adventures expected from consuming an item
 *
 * If item is not a consumable, will just return "0".
 *
 * @param item Consumable item
 */

function getAverageAdventures(item) {
  return getAverage(item.adventures);
}
/**
 * Remove an effect
 *
 * @category General
 * @param effect Effect to remove
 */

function uneffect(effect) {
  return (0,external_kolmafia_namespaceObject.cliExecute)("uneffect ".concat(effect.name));
}
/**
 * Get both the name and id of a player from either their name or id
 *
 * @param idOrName Id or name of player
 * @returns Object containing id and name of player
 */

function getPlayerFromIdOrName(idOrName) {
  var id = typeof idOrName === "number" ? idOrName : parseInt(getPlayerId(idOrName));
  return {
    name: getPlayerName(id),
    id: id
  };
}
/**
 * Return the step as a number for a given quest property.
 *
 * @param questName Name of quest property to check.
 */

function questStep(questName) {
  var stringStep = get(questName);
  if (stringStep === "unstarted") return -1;else if (stringStep === "started") return 0;else if (stringStep === "finished" || stringStep === "") return 999;else {
    if (stringStep.substring(0, 4) !== "step") {
      throw new Error("Quest state parsing error.");
    }

    return parseInt(stringStep.substring(4), 10);
  }
}
var EnsureError = /*#__PURE__*/function (_Error) {
  _inherits(EnsureError, _Error);

  var _super = _createSuper(EnsureError);

  function EnsureError(cause, reason) {
    var _this;

    lib_classCallCheck(this, EnsureError);

    _this = _super.call(this, "Failed to ensure ".concat(cause.name, "!").concat(reason ? " ".concat(reason) : ""));
    _this.name = "Ensure Error";
    return _this;
  }

  return EnsureError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Tries to get an effect using the default method
 * @param ef effect to try to get
 * @param turns turns to aim for; default of 1
 *
 * @throws {EnsureError} Throws an error if the effect cannot be guaranteed
 */

function ensureEffect(ef) {
  var turns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if ((0,external_kolmafia_namespaceObject.haveEffect)(ef) < turns) {
    if (ef.default === null) {
      throw new EnsureError(ef, "No default action");
    }

    if (!(0,external_kolmafia_namespaceObject.cliExecute)(ef.default) || (0,external_kolmafia_namespaceObject.haveEffect)(ef) === 0) {
      throw new EnsureError(ef);
    }
  }
}
var valueMap = new Map();
var MALL_VALUE_MODIFIER = 0.9;
/**
 * Returns the average value--based on mallprice and autosell--of a collection of items
 * @param items items whose value you care about
 */

function getSaleValue() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }

  return items.map(item => {
    if (valueMap.has(item)) return valueMap.get(item) || 0;

    if (item.discardable) {
      valueMap.set(item, mallPrice(item) > Math.max(2 * autosellPrice(item), 100) ? MALL_VALUE_MODIFIER * mallPrice(item) : autosellPrice(item));
    } else {
      valueMap.set(item, mallPrice(item) > 100 ? MALL_VALUE_MODIFIER * mallPrice(item) : 0);
    }

    return valueMap.get(item) || 0;
  }).reduce((s, price) => s + price, 0) / items.length;
}
var Environment = {
  Outdoor: "outdoor",
  Indoor: "indoor",
  Underground: "underground",
  Underwater: "underwater"
};
/**
 * Returns the weight-coefficient of any leprechaunning that this familiar may find itself doing
 * Assumes the familiar is nude and thus fails for hatrack & pantsrack
 * For the Mutant Cactus Bud, returns the efficacy-multiplier instead
 * @param familiar The familiar whose leprechaun multiplier you're interested in
 */

function findLeprechaunMultiplier(familiar) {
  if (familiar === $familiar(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Mutant Cactus Bud"])))) {
    return numericModifier(familiar, "Leprechaun Effectiveness", 1, $item.none);
  }

  if (familiar === $familiar(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Reanimated Reanimator"])))) return 0;
  var meatBonus = numericModifier(familiar, "Meat Drop", 1, $item.none);
  if (meatBonus === 0) return 0;
  return Math.pow(Math.sqrt(meatBonus / 2 + 55 / 4 + 3) - Math.sqrt(55) / 2, 2);
}
/**
 * Returns the weight-coefficient of any baby gravy fairying that this familiar may find itself doing
 * Assumes the familiar is nude and thus fails for hatrack & pantsrack
 * For the Mutant Fire Ant, returns the efficacy-multiplier instead
 * @param familiar The familiar whose fairy multiplier you're interested in
 */

function findFairyMultiplier(familiar) {
  if (familiar === $familiar(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Mutant Fire Ant"])))) {
    return numericModifier(familiar, "Fairy Effectiveness", 1, $item.none);
  }

  if (familiar === $familiar(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Reanimated Reanimator"])))) return 0;
  var itemBonus = numericModifier(familiar, "Item Drop", 1, $item.none);
  if (itemBonus === 0) return 0;
  return Math.pow(Math.sqrt(itemBonus + 55 / 4 + 3) - Math.sqrt(55) / 2, 2);
}
var holidayWanderers = new Map([["El Dia De Los Muertos Borrachos", $monsters(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Novia Cad\xE1ver, Novio Cad\xE1ver, Padre Cad\xE1ver, Persona Inocente Cad\xE1ver"])))], ["Feast of Boris", $monsters(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Candied Yam Golem, Malevolent Tofurkey, Possessed Can of Cranberry Sauce, Stuffing Golem"])))], ["Talk Like a Pirate Day", $monsters(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["ambulatory pirate, migratory pirate, peripatetic pirate"])))]]);
function getTodaysHolidayWanderers() {
  return (0,external_kolmafia_namespaceObject.holiday)().split("/").map(holiday => {
    var _holidayWanderers$get;

    return (_holidayWanderers$get = holidayWanderers.get(holiday)) !== null && _holidayWanderers$get !== void 0 ? _holidayWanderers$get : [];
  }).flat();
}
/**
 * Determines & returns whether or not we can safely call visitUrl(), based on whether we're in a fight, multi-fight, choice, etc
 */

function canVisitUrl() {
  return !(currentRound() || inMultiFight() || choiceFollowsFight() || handlingChoice());
}
/**
 * Calculate damage taken from a specific element after factoring in resistance
 * @param baseDamage
 * @param element
 * @returns damage after factoring in resistances
 */

function damageTakenByElement(baseDamage, element) {
  if (baseDamage < 0) return 1;
  var res = elementalResistance(element);
  return Math.max(1, Math.ceil(baseDamage - baseDamage * res / 100));
}
var telescopeStats = new Map([["standing around flexing their muscles and using grip exercisers", $stat(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Muscle"])))], ["sitting around playing chess and solving complicated-looking logic puzzles", $stat(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Mysticality"])))], ["all wearing sunglasses and dancing", $stat(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Moxie"])))]]);
var telescopeElements = new Map([["people, all of whom appear to be on fire", $element(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["hot"])))], ["people, surrounded by a cloud of eldritch mist", $element(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["spooky"])))], ["greasy-looking people furtively skulking around", $element(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["sleaze"])))], ["people, surrounded by garbage and clouds of flies", $element(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["stench"])))], ["people, clustered around a group of igloos", $element(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap1 = new Map([["smoldering bushes on the outskirts of a hedge maze", $element(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["hot"])))], ["creepy-looking black bushes on the outskirts of a hedge maze", $element(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["spooky"])))], ["purplish, greasy-looking hedges", $element(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["sleaze"])))], ["nasty-looking, dripping green bushes on the outskirts of a hedge maze", $element(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["stench"])))], ["frost-rimed bushes on the outskirts of a hedge maze", $element(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap2 = new Map([["smoke rising from deeper within the maze", $element(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["hot"])))], ["a miasma of eldritch vapors rising from deeper within the maze", $element(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["spooky"])))], ["a greasy purple cloud hanging over the center of the maze", $element(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["sleaze"])))], ["a cloud of green gas hovering over the maze", $element(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["stench"])))], ["wintry mists rising from deeper within the maze", $element(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap3 = new Map([["with lava slowly oozing out of it", $element(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["hot"])))], ["surrounded by creepy black mist", $element(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["spooky"])))], ["that occasionally vomits out a greasy ball of hair", $element(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["sleaze"])))], ["disgorging a really surprising amount of sewage", $element(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["stench"])))], ["occasionally disgorging a bunch of ice cubes", $element(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["cold"])))]]);
/**
 * @returns An object with all information the telescope gives you about the sorceress's contests and maze
 */

function telescope() {
  return {
    statContest: telescopeStats.get(get("telescope1")),
    elementContest: telescopeElements.get(get("telescope2")),
    hedge1: hedgeTrap1.get(get("telescope3")),
    hedge2: hedgeTrap2.get(get("telescope4")),
    hedge3: hedgeTrap3.get(get("telescope5"))
  };
}
;// CONCATENATED MODULE: ./src/lib.ts
var lib_templateObject, lib_templateObject2, lib_templateObject3, lib_templateObject4, lib_templateObject5;

function lib_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function src_lib_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = src_lib_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function src_lib_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return src_lib_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return src_lib_arrayLikeToArray(o, minLen); }

function src_lib_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var CommunityServiceTests;

(function (CommunityServiceTests) {
  CommunityServiceTests[CommunityServiceTests["HPTEST"] = 1] = "HPTEST";
  CommunityServiceTests[CommunityServiceTests["MUSTEST"] = 2] = "MUSTEST";
  CommunityServiceTests[CommunityServiceTests["MYSTTEST"] = 3] = "MYSTTEST";
  CommunityServiceTests[CommunityServiceTests["MOXTEST"] = 4] = "MOXTEST";
  CommunityServiceTests[CommunityServiceTests["FAMTEST"] = 5] = "FAMTEST";
  CommunityServiceTests[CommunityServiceTests["WPNTEST"] = 6] = "WPNTEST";
  CommunityServiceTests[CommunityServiceTests["SPELLTEST"] = 7] = "SPELLTEST";
  CommunityServiceTests[CommunityServiceTests["COMTEST"] = 8] = "COMTEST";
  CommunityServiceTests[CommunityServiceTests["ITEMTEST"] = 9] = "ITEMTEST";
  CommunityServiceTests[CommunityServiceTests["HOTTEST"] = 10] = "HOTTEST";
  CommunityServiceTests[CommunityServiceTests["COILTEST"] = 11] = "COILTEST";
  CommunityServiceTests[CommunityServiceTests["DONATEBODY"] = 30] = "DONATEBODY";
})(CommunityServiceTests || (CommunityServiceTests = {}));

var testModifiers = new Map([[CommunityServiceTests.HPTEST, ["Maximum HP", "Maximum HP Percent"]], [CommunityServiceTests.MUSTEST, ["Muscle", "Muscle Percent"]], [CommunityServiceTests.MYSTTEST, ["Mysticality", "Mysticality Percent"]], [CommunityServiceTests.MOXTEST, ["Moxie", "Moxie Percent"]], [CommunityServiceTests.FAMTEST, ["Familiar Weight"]], [CommunityServiceTests.WPNTEST, ["Weapon Damage", "Weapon Damage Percent"]], [CommunityServiceTests.SPELLTEST, ["Spell Damage", "Spell Damage Percent"]], [CommunityServiceTests.COMTEST, ["Combat Rate"]], [CommunityServiceTests.ITEMTEST, ["Item Drop", "Booze Drop"]], [CommunityServiceTests.HOTTEST, ["Hot Resistance"]], [CommunityServiceTests.COILTEST, []]]);
var testNames = new Map([[CommunityServiceTests.HPTEST, "HP Test"], [CommunityServiceTests.MUSTEST, "Muscle Test"], [CommunityServiceTests.MYSTTEST, "Mysticality Test"], [CommunityServiceTests.MOXTEST, "Moxie Test"], [CommunityServiceTests.FAMTEST, "Familiar Weight Test"], [CommunityServiceTests.WPNTEST, "Weapon Damage Test"], [CommunityServiceTests.SPELLTEST, "Spell Damage Test"], [CommunityServiceTests.COMTEST, "Noncombat Test"], [CommunityServiceTests.ITEMTEST, "Item Drop Test"], [CommunityServiceTests.HOTTEST, "Hot Resistance Test"], [CommunityServiceTests.COILTEST, "Coil Wire"]]); // From phccs

function convertMilliseconds(milliseconds) {
  var seconds = milliseconds / 1000;
  var minutes = Math.floor(seconds / 60);
  var secondsLeft = Math.round((seconds - minutes * 60) * 1000) / 1000;
  var hours = Math.floor(minutes / 60);
  var minutesLeft = Math.round(minutes - hours * 60);
  return (hours !== 0 ? "".concat(hours, " hours, ") : "") + (minutesLeft !== 0 ? "".concat(minutesLeft, " minutes, ") : "") + (secondsLeft !== 0 ? "".concat(secondsLeft, " seconds") : "");
}

function replaceAll(str, searchValue, replaceValue) {
  var newStr = str.replace(searchValue, replaceValue);
  if (newStr === str) return newStr;
  return replaceAll(newStr, searchValue, replaceValue);
}

function printModtrace(modifiers, baseModifier) {
  if (typeof modifiers === "string") {
    return printModtrace([modifiers], modifiers);
  } else {
    if (modifiers.length === 0) return;

    if (!baseModifier) {
      var baseModifiers = new Map(modifiers.map(key => {
        return [key, 1];
      }));
      modifiers.forEach(keyThis => {
        var _iterator = src_lib_createForOfIteratorHelper(modifiers),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var keyNext = _step.value;
            if (keyThis === keyNext) continue;

            if (keyThis.includes(keyNext)) {
              baseModifiers.set(keyThis, 0);
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
      modifiers.forEach(keyThis => {
        var _baseModifiers$get;

        if ((_baseModifiers$get = baseModifiers.get(keyThis)) !== null && _baseModifiers$get !== void 0 ? _baseModifiers$get : 0 !== 0) {
          var modifiersSubset = [keyThis];

          var _iterator2 = src_lib_createForOfIteratorHelper(modifiers),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var keyNext = _step2.value;
              if (keyThis === keyNext) continue;
              if (keyNext.includes(keyThis)) modifiersSubset.push(keyNext);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          printModtrace(modifiersSubset, keyThis);
        }
      });
    } else {
      var _ret = function () {
        var htmlOutput = (0,external_kolmafia_namespaceObject.cliExecuteOutput)("modtrace ".concat(baseModifier));
        var htmlHeader = htmlOutput.substring(htmlOutput.indexOf("<tr>") + 4, htmlOutput.indexOf("</tr>"));
        var headers = [];
        var headerMatches = htmlHeader.match("(>)(.*?)(</td>)");

        while (headerMatches) {
          var header = headerMatches[2];
          headers.push(header);
          var idx = headerMatches[0].length + htmlHeader.search("(>)(.*?)(</td>)");
          htmlHeader = htmlHeader.substring(idx);
          headerMatches = htmlHeader.match("(>)(.*?)(</td>)");
        }

        headers = headers.slice(2);
        var exactModifierColIdx = headers.findIndex(header => header.toLowerCase() === baseModifier.toLowerCase());

        if (exactModifierColIdx === -1) {
          (0,external_kolmafia_namespaceObject.print)("Could not find exact string match of ".concat(baseModifier, " in ").concat(modifiers.toString()), "red");
          return {
            v: void 0
          };
        }

        var totalVal = 0.0; // Maps modifier name to its value

        var modifierVals = new Map(headers.map(header => {
          return [header, 0];
        }));
        var lowerCaseModifiers = modifiers.map(modifier => modifier.toLowerCase());

        if (baseModifier.toLowerCase() === "familiar weight") {
          totalVal += (0,external_kolmafia_namespaceObject.familiarWeight)((0,external_kolmafia_namespaceObject.myFamiliar)());
          (0,external_kolmafia_namespaceObject.print)("[Familiar Weight] Base weight (".concat(totalVal, ")"));
        }

        htmlOutput = htmlOutput.substring(htmlOutput.indexOf("</tr>") + 5, htmlOutput.indexOf("</table>"));

        var _loop = function _loop() {
          var idxStart = htmlOutput.indexOf("<tr>");
          var idxEnd = htmlOutput.indexOf("</tr>");
          if (idxStart === -1) return "break";
          var row = replaceAll(htmlOutput.substring(idxStart + 4, idxEnd), "></td>", ">0</td>");
          var rowArr = [];
          var rowMatches = row.match("(>)(.*?)(</td>)");

          while (rowMatches) {
            rowArr.push(rowMatches[2]);
            row = row.replace(rowMatches[0], "");
            rowMatches = row.match("(>)(.*?)(</td>)");
          }

          rowArr.slice(2).filter((e, idx) => idx % 2 === 0).forEach((e, idx) => {
            var _modifierVals$get;

            var val = parseInt(e);
            modifierVals.set(headers[idx], ((_modifierVals$get = modifierVals.get(headers[idx])) !== null && _modifierVals$get !== void 0 ? _modifierVals$get : 0) + val);

            if (val !== 0 && lowerCaseModifiers.includes(headers[idx].toLowerCase())) {
              (0,external_kolmafia_namespaceObject.print)("[".concat(headers[idx], "] ").concat(rowArr[1], " (").concat(val.toFixed(1), ")"));
            }
          });
          htmlOutput = htmlOutput.substring(idxEnd + 5);
        };

        while (htmlOutput.length > 0) {
          var _ret2 = _loop();

          if (_ret2 === "break") break;
        }

        var total = 0.0;

        var _iterator3 = src_lib_createForOfIteratorHelper(headers),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var modifier = _step3.value;

            if (lowerCaseModifiers.includes(modifier.toLowerCase())) {
              var _modifierVals$get2;

              var _totalVal = (_modifierVals$get2 = modifierVals.get(modifier)) !== null && _modifierVals$get2 !== void 0 ? _modifierVals$get2 : 0;

              if (modifier.toLowerCase() === "weapon damage") {
                if (have($effect(lib_templateObject || (lib_templateObject = lib_taggedTemplateLiteral(["Bow-Legged Swagger"]))))) {
                  (0,external_kolmafia_namespaceObject.print)("[Weapon Damage] Bow-Legged Swagger (".concat(_totalVal.toFixed(1), ")"));
                  _totalVal += _totalVal;
                }
              } else if (modifier.toLowerCase() === "weapon damage percent") {
                if (have($effect(lib_templateObject2 || (lib_templateObject2 = lib_taggedTemplateLiteral(["Bow-Legged Swagger"]))))) {
                  (0,external_kolmafia_namespaceObject.print)("[Weapon Damage Percent] Bow-Legged Swagger (".concat(_totalVal.toFixed(1), ")"));
                  _totalVal += _totalVal;
                }
              }

              (0,external_kolmafia_namespaceObject.print)("".concat(modifier, " => ").concat(_totalVal.toFixed(1)), "purple");
              total += _totalVal;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        (0,external_kolmafia_namespaceObject.print)("Total ".concat(baseModifier, ": ").concat(total.toFixed(1)), "blue");
      }();

      if (typeof _ret === "object") return _ret.v;
    }
  }
}

function advCost(whichTest) {
  // Adapted from AutoHCCS
  var page = (0,external_kolmafia_namespaceObject.visitUrl)("council.php");
  var testStr = "name=option value=".concat(whichTest, ">");

  if (page.includes(testStr)) {
    var chars = 140; // chars to look ahead

    var pageStr = page.slice(page.indexOf(testStr) + testStr.length, page.indexOf(testStr) + testStr.length + chars);
    var advStr = pageStr.slice(pageStr.indexOf("(") + 1, pageStr.indexOf("(") + 3).trim();
    return parseInt(advStr);
  } else {
    (0,external_kolmafia_namespaceObject.print)("Didn't find specified test on the council page. Already done?");
    return 99999;
  }
}

function logTestSetup(whichTest) {
  var _testModifiers$get, _testNames$get;

  var testTurns = advCost(whichTest);
  printModtrace((_testModifiers$get = testModifiers.get(whichTest)) !== null && _testModifiers$get !== void 0 ? _testModifiers$get : []);
  (0,external_kolmafia_namespaceObject.print)("".concat((_testNames$get = testNames.get(whichTest)) !== null && _testNames$get !== void 0 ? _testNames$get : "Unknown Test", " takes ").concat(testTurns, " adventure").concat(testTurns === 1 ? "" : "s", "."), "blue");
  _set("_CSTest".concat(whichTest), testTurns + (have($effect(lib_templateObject3 || (lib_templateObject3 = lib_taggedTemplateLiteral(["Simmering"])))) ? 1 : 0));
}
function tryAcquiringEffect(ef) {
  var tryRegardless = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // Try acquiring an effect
  if (have(ef)) return; // If we already have the effect, we're done

  if (tryRegardless || canAcquireEffect(ef)) {
    if (ef === $effect(lib_templateObject4 || (lib_templateObject4 = lib_taggedTemplateLiteral(["Ode to Booze"])))) (0,external_kolmafia_namespaceObject.restoreMp)(50);
    if (ef.default === "cast 1 Seek out a Bird") (0,external_kolmafia_namespaceObject.cliExecute)("cast Seek out a Bird");else (0,external_kolmafia_namespaceObject.cliExecute)(ef.default);
  }
}
function canAcquireEffect(ef) {
  // This will not attempt to craft items to acquire the effect, which is the behaviour of ef.default
  // You will need to have the item beforehand for this to return true
  return ef.all.map(defaultAction => {
    if (defaultAction.length === 0) return false; // This effect is not acquirable

    var splitString = defaultAction.split(" ");
    var action = splitString[0];
    var target = splitString.slice(2).join(" ");

    switch (action) {
      case "eat":
        return have((0,external_kolmafia_namespaceObject.toItem)(target));
      // We have the food

      case "drink":
        return have((0,external_kolmafia_namespaceObject.toItem)(target));
      // We have the booze

      case "chew":
        return have((0,external_kolmafia_namespaceObject.toItem)(target));
      // We have the spleen item

      case "use":
        return have((0,external_kolmafia_namespaceObject.toItem)(target));
      // We have the item

      case "cast":
        return have((0,external_kolmafia_namespaceObject.toSkill)(target)) && (0,external_kolmafia_namespaceObject.myMp)() >= (0,external_kolmafia_namespaceObject.mpCost)((0,external_kolmafia_namespaceObject.toSkill)(target));
      // We have the skill and can cast it

      case "cargo":
        return have(template_string_$item(lib_templateObject5 || (lib_templateObject5 = lib_taggedTemplateLiteral(["Cargo Cultist Shorts"])))) && !property_get("_cargoPocketEmptied");
      // We can grab it from our cargo pants

      case "synthesize":
        return false;
      // We currently don't support sweet synthesis

      default:
        return false;
      // Doesn't seem like there's any way to acquire this effect?
    }
  }).some(b => b);
}
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/args.js
function args_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = args_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function args_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return args_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return args_arrayLikeToArray(o, minLen); }

function args_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function args_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function args_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { args_ownKeys(Object(source), true).forEach(function (key) { args_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { args_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function args_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function args_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function args_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function args_createClass(Constructor, protoProps, staticProps) { if (protoProps) args_defineProperties(Constructor.prototype, protoProps); if (staticProps) args_defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable @typescript-eslint/no-explicit-any */

var Args = /*#__PURE__*/function () {
  function Args() {
    args_classCallCheck(this, Args);
  }

  args_createClass(Args, null, [{
    key: "custom",
    value: function custom(spec, _parser, valueHelpName) {
      var _a, _b;

      var raw_options = (_a = spec.options) === null || _a === void 0 ? void 0 : _a.map(option => option[0]); // Check that the default value actually appears in the options.

      if ("default" in spec && raw_options) {
        if (!raw_options.includes(spec.default)) {
          throw "Invalid default value ".concat(spec.default);
        }
      }

      return args_objectSpread(args_objectSpread({}, spec), {}, {
        valueHelpName: valueHelpName,
        parser: value => {
          var parsed_value = _parser(value);

          if (parsed_value === undefined || parsed_value instanceof ParseError) return parsed_value;

          if (raw_options) {
            if (!raw_options.includes(parsed_value)) {
              return new ParseError("received ".concat(value, " which was not in the allowed options"));
            }
          }

          return parsed_value;
        },
        options: (_b = spec.options) === null || _b === void 0 ? void 0 : _b.map(a => ["".concat(a[0]), a[1]])
      });
    }
  }, {
    key: "arrayFromArg",
    value: function arrayFromArg(spec, argFromSpec) {
      var _a, _b, _c; // First, construct a non-array version of this argument.
      // We do this by calling argFromSpec in order to extract the parser and
      // valueHelpName (to make it easier to define the functions below).
      //
      // The default argument of an ArraySpec is of type T[], which causes
      // problems, so we must remove it.


      var spec_without_default = args_objectSpread({}, spec); // Avoid "the operand of a 'delete' operator must be optional"


      if ("default" in spec_without_default) delete spec_without_default["default"];
      var arg = argFromSpec.call(this, spec_without_default); // Next, check that all default values actually appear in the options.

      var raw_options = (_a = spec.options) === null || _a === void 0 ? void 0 : _a.map(option => option[0]);

      if ("default" in spec && raw_options) {
        var _iterator = args_createForOfIteratorHelper(spec.default),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var default_entry = _step.value;
            if (!raw_options.includes(default_entry)) throw "Invalid default value ".concat(spec.default);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      var separator = (_b = spec.separator) !== null && _b !== void 0 ? _b : ",";

      var arrayParser = value => {
        // Split the array
        var values = value.split(separator);
        if (!spec.noTrim) values = values.map(v => v.trim()); // Parse all values, return the first error found if any

        var result = values.map(v => arg.parser(v));
        var error = result.find(v => v instanceof ParseError);
        if (error) return error;
        var failure_index = result.indexOf(undefined);
        if (failure_index !== -1) return new ParseError("components expected ".concat(arg.valueHelpName, " but could not parse ").concat(values[failure_index])); // Otherwise, all values are good

        return result;
      };

      return args_objectSpread(args_objectSpread({}, spec), {}, {
        valueHelpName: "".concat(arg.valueHelpName).concat(separator, " ").concat(arg.valueHelpName).concat(separator, " ..."),
        parser: arrayParser,
        options: (_c = spec.options) === null || _c === void 0 ? void 0 : _c.map(a => ["".concat(a[0]), a[1]])
      });
    }
  }, {
    key: "string",
    value: function string(spec) {
      return this.custom(spec, value => value, "TEXT");
    }
  }, {
    key: "strings",
    value: function strings(spec) {
      return this.arrayFromArg(spec, this.string);
    }
  }, {
    key: "number",
    value: function number(spec) {
      return this.custom(spec, value => isNaN(Number(value)) ? undefined : Number(value), "NUMBER");
    }
  }, {
    key: "numbers",
    value: function numbers(spec) {
      return this.arrayFromArg(spec, this.number);
    }
  }, {
    key: "boolean",
    value: function boolean(spec) {
      return this.custom(spec, value => {
        if (value.toLowerCase() === "true") return true;
        if (value.toLowerCase() === "false") return false;
        return undefined;
      }, "BOOLEAN");
    }
  }, {
    key: "booleans",
    value: function booleans(spec) {
      return this.arrayFromArg(spec, this.boolean);
    }
  }, {
    key: "flag",
    value: function flag(spec) {
      return this.custom(spec, value => {
        if (value.toLowerCase() === "true") return true;
        if (value.toLowerCase() === "false") return false;
        return undefined;
      }, "FLAG");
    }
  }, {
    key: "class",
    value: function _class(spec) {
      return this.custom(spec, value => {
        var match = external_kolmafia_namespaceObject.Class.get(value); // Class.get does fuzzy matching:
        //  e.g. Class.get("sc") returns disco bandit.
        // To avoid this foot-gun, only return exact matches or id lookups.

        if (match.toString().toUpperCase() === value.toString().toUpperCase()) return match;
        if (!isNaN(Number(value))) return match;
        return undefined;
      }, "CLASS");
    }
  }, {
    key: "classes",
    value: function classes(spec) {
      return this.arrayFromArg(spec, this.class);
    }
  }, {
    key: "effect",
    value: function effect(spec) {
      return this.custom(spec, external_kolmafia_namespaceObject.Effect.get, "EFFECT");
    }
  }, {
    key: "effects",
    value: function effects(spec) {
      return this.arrayFromArg(spec, this.effect);
    }
  }, {
    key: "familiar",
    value: function familiar(spec) {
      return this.custom(spec, external_kolmafia_namespaceObject.Familiar.get, "FAMILIAR");
    }
  }, {
    key: "familiars",
    value: function familiars(spec) {
      return this.arrayFromArg(spec, this.familiar);
    }
  }, {
    key: "item",
    value: function item(spec) {
      return this.custom(spec, external_kolmafia_namespaceObject.Item.get, "ITEM");
    }
  }, {
    key: "items",
    value: function items(spec) {
      return this.arrayFromArg(spec, this.item);
    }
  }, {
    key: "location",
    value: function location(spec) {
      return this.custom(spec, external_kolmafia_namespaceObject.Location.get, "LOCATION");
    }
  }, {
    key: "locations",
    value: function locations(spec) {
      return this.arrayFromArg(spec, this.location);
    }
  }, {
    key: "monster",
    value: function monster(spec) {
      return this.custom(spec, external_kolmafia_namespaceObject.Monster.get, "MONSTER");
    }
  }, {
    key: "monsters",
    value: function monsters(spec) {
      return this.arrayFromArg(spec, this.monster);
    }
  }, {
    key: "path",
    value: function path(spec) {
      return this.custom(spec, external_kolmafia_namespaceObject.Path.get, "PATH");
    }
  }, {
    key: "paths",
    value: function paths(spec) {
      return this.arrayFromArg(spec, this.path);
    }
  }, {
    key: "skill",
    value: function skill(spec) {
      return this.custom(spec, external_kolmafia_namespaceObject.Skill.get, "SKILL");
    }
  }, {
    key: "skills",
    value: function skills(spec) {
      return this.arrayFromArg(spec, this.skill);
    }
    /**
     * Create a group of arguments that will be printed separately in the help.
     *
     * Note that keys in the group must still be globally distinct.
     *
     * @param groupName The display name for the group in help.
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     */

  }, {
    key: "group",
    value: function group(groupName, args) {
      return {
        name: groupName,
        args: args
      };
    }
    /**
     * Create a set of input arguments for a script.
     * @param scriptName Prefix for property names; often the name of the script.
     * @param scriptHelp Brief description of this script, for the help message.
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     * @param options Config options for the args and arg parser.
     * @returns An object which can hold parsed argument values. The keys of this
     *    object are identical to the keys in 'args'.
     */

  }, {
    key: "create",
    value: function create(scriptName, scriptHelp, args, options) {
      var _objectSpread2;

      _traverse(args, (keySpec, key) => {
        if (key === "help" || keySpec.key === "help") throw "help is a reserved argument name";
      });

      var argsWithHelp = args_objectSpread(args_objectSpread({}, args), {}, {
        help: this.flag({
          help: "Show this message and exit.",
          setting: ""
        })
      }); // Create an object to hold argument results, with a default value for
      // each argument.


      var res = args_objectSpread(args_objectSpread({}, _loadDefaultValues(argsWithHelp)), {}, (_objectSpread2 = {}, args_defineProperty(_objectSpread2, specSymbol, argsWithHelp), args_defineProperty(_objectSpread2, scriptSymbol, scriptName), args_defineProperty(_objectSpread2, scriptHelpSymbol, scriptHelp), args_defineProperty(_objectSpread2, optionsSymbol, options !== null && options !== void 0 ? options : {}), _objectSpread2));

      if (options === null || options === void 0 ? void 0 : options.positionalArgs) {
        var keys = [];
        var metadata = Args.getMetadata(res);
        metadata.traverse((keySpec, key) => {
          var _a;

          keys.push((_a = keySpec.key) !== null && _a !== void 0 ? _a : key);
        });

        var _iterator2 = args_createForOfIteratorHelper(options.positionalArgs),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var arg = _step2.value;
            if (!keys.includes(arg)) throw "Unknown key for positional arg: ".concat(arg);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      return res;
    }
    /**
     * Parse the command line input into the provided script arguments.
     * @param args An object to hold the parsed argument values, from Args.create(*).
     * @param command The command line input.
     * @param includeSettings If true, parse values from settings as well.
     */

  }, {
    key: "fill",
    value: function fill(args, command) {
      var includeSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var _a;

      var metadata = Args.getMetadata(args); // Load the list of keys and flags from the arg spec

      var keys = new Set();
      var flags = new Set();
      metadata.traverse((keySpec, key) => {
        var _a;

        var name = (_a = keySpec.key) !== null && _a !== void 0 ? _a : key;
        if (flags.has(name) || keys.has(name)) throw "Duplicate arg key ".concat(name, " is not allowed");
        if (keySpec.valueHelpName === "FLAG") flags.add(name);else keys.add(name);
      }); // Parse values from settings.

      if (includeSettings) {
        metadata.traverseAndMaybeSet(args, (keySpec, key) => {
          var _a, _b;

          var setting = (_a = keySpec.setting) !== null && _a !== void 0 ? _a : "".concat(metadata.scriptName, "_").concat((_b = keySpec.key) !== null && _b !== void 0 ? _b : key);
          if (setting === "") return undefined; // no setting

          var value_str = (0,external_kolmafia_namespaceObject.getProperty)(setting);
          if (value_str === "") return undefined; // no setting

          return parseAndValidate(keySpec, "Setting ".concat(setting), value_str);
        });
      } // Parse new argments from the command line


      if (command === undefined || command === "") return;
      var parsed = new CommandParser(command, keys, flags, (_a = metadata.options.positionalArgs) !== null && _a !== void 0 ? _a : []).parse();
      metadata.traverseAndMaybeSet(args, (keySpec, key) => {
        var _a;

        var argKey = (_a = keySpec.key) !== null && _a !== void 0 ? _a : key;
        var value_str = parsed.get(argKey);
        if (value_str === undefined) return undefined; // no setting

        return parseAndValidate(keySpec, "Argument ".concat(argKey), value_str);
      });
    }
    /**
     * Parse command line input into a new set of script arguments.
     * @param scriptName Prefix to use in property names; typically the name of the script.
     * @param scriptHelp Brief description of this script, for the help message.
     * @param spec An object specifying the script arguments.
     * @param command The command line input.
     * @param options Config options for the args and arg parser.
     */

  }, {
    key: "parse",
    value: function parse(scriptName, scriptHelp, spec, command, options) {
      var args = this.create(scriptName, scriptHelp, spec, options);
      this.fill(args, command);
      return args;
    }
    /**
     * Print a description of the script arguments to the CLI.
     *
     * First, all top-level argument descriptions are printed in the order they
     * were defined. Afterwards, descriptions for groups of arguments are printed
     * in the order they were defined.
     *
     * @param args An object of parsed arguments, from Args.create(*).
     * @param maxOptionsToDisplay If given, do not list more than this many options for each arg.
     */

  }, {
    key: "showHelp",
    value: function showHelp(args, maxOptionsToDisplay) {
      var _a;

      var metadata = Args.getMetadata(args);
      (0,external_kolmafia_namespaceObject.printHtml)("".concat(metadata.scriptHelp));
      (0,external_kolmafia_namespaceObject.printHtml)("");
      (0,external_kolmafia_namespaceObject.printHtml)("<b>".concat((_a = metadata.options.defaultGroupName) !== null && _a !== void 0 ? _a : "Options", ":</b>"));
      metadata.traverse((arg, key) => {
        var _a, _b, _c, _d, _e;

        if (arg.hidden) return;
        var nameText = "<font color='".concat((0,external_kolmafia_namespaceObject.isDarkMode)() ? "yellow" : "blue", "'>").concat((_a = arg.key) !== null && _a !== void 0 ? _a : key, "</font>");
        var valueText = arg.valueHelpName === "FLAG" ? "" : "<font color='purple'>".concat(arg.valueHelpName, "</font>");
        var helpText = (_b = arg.help) !== null && _b !== void 0 ? _b : "";
        var defaultText = "default" in arg ? "<font color='#888888'>[default: ".concat(arg.default, "]</font>") : "";
        var settingText = arg.setting === "" ? "" : "<font color='#888888'>[setting: ".concat((_c = arg.setting) !== null && _c !== void 0 ? _c : "".concat(metadata.scriptName, "_").concat((_d = arg.key) !== null && _d !== void 0 ? _d : key), "]</font>");
        (0,external_kolmafia_namespaceObject.printHtml)("&nbsp;&nbsp;".concat([nameText, valueText, "-", helpText, defaultText, settingText].join(" ")));
        var valueOptions = (_e = arg.options) !== null && _e !== void 0 ? _e : [];

        if (valueOptions.length < (maxOptionsToDisplay !== null && maxOptionsToDisplay !== void 0 ? maxOptionsToDisplay : Number.MAX_VALUE)) {
          var _iterator3 = args_createForOfIteratorHelper(valueOptions),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var option = _step3.value;

              if (option.length === 1 || option[1] === undefined) {
                (0,external_kolmafia_namespaceObject.printHtml)("&nbsp;&nbsp;&nbsp;&nbsp;<font color='blue'>".concat(nameText, "</font> ").concat(option[0]));
              } else {
                (0,external_kolmafia_namespaceObject.printHtml)("&nbsp;&nbsp;&nbsp;&nbsp;<font color='blue'>".concat(nameText, "</font> ").concat(option[0], " - ").concat(option[1]));
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }, group => {
        (0,external_kolmafia_namespaceObject.printHtml)("");
        (0,external_kolmafia_namespaceObject.printHtml)("<b>".concat(group.name, ":</b>"));
      });
    }
    /**
     * Load the metadata information for a set of arguments. Only for advanced usage.
     *
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     * @returns A class containing metadata information.
     */

  }, {
    key: "getMetadata",
    value: function getMetadata(args) {
      return new WrappedArgMetadata(args);
    }
  }]);

  return Args;
}();
var ParseError = function ParseError(message) {
  args_classCallCheck(this, ParseError);

  this.message = message;
};
/**
 * Metadata for the parsed arguments.
 *
 * This information is hidden within the parsed argument object so that it
 * is invisible to the user but available to fill(*) and showHelp(*).
 */

var specSymbol = Symbol("spec");
var scriptSymbol = Symbol("script");
var scriptHelpSymbol = Symbol("scriptHelp");
var optionsSymbol = Symbol("options");
/**
 * Parse a string into a value for a given argument, throwing if the parsing fails.
 * @param arg An argument that takes values in T.
 * @param source A description of where this value came from, for the error message.
 * @param value The value to parse.
 * @returns the parsed value.
 */

function parseAndValidate(arg, source, value) {
  var parsed_value;

  try {
    parsed_value = arg.parser(value);
  } catch (_a) {
    parsed_value = undefined;
  }

  if (parsed_value === undefined) throw "".concat(source, " expected ").concat(arg.valueHelpName, " but could not parse ").concat(value);
  if (parsed_value instanceof ParseError) throw "".concat(source, " ").concat(parsed_value.message);
  return parsed_value;
}
/**
 * A class that reveals the hidden metadata and specs for arguments.
 *
 * Only for advanced usage.
 */


var WrappedArgMetadata = /*#__PURE__*/function () {
  function WrappedArgMetadata(args) {
    args_classCallCheck(this, WrappedArgMetadata);

    this.spec = args[specSymbol];
    this.scriptName = args[scriptSymbol];
    this.scriptHelp = args[scriptHelpSymbol];
    this.options = args[optionsSymbol];
  }
  /**
   * Create a parsed args object from this spec using all default values.
   */


  args_createClass(WrappedArgMetadata, [{
    key: "loadDefaultValues",
    value: function loadDefaultValues() {
      return _loadDefaultValues(this.spec);
    }
    /**
     * Traverse the spec and possibly generate a value for each argument.
     *
     * @param result The object to hold the resulting argument values, typically
     *    the result of loadDefaultValues().
     * @param setTo A function to generate an argument value from each arg spec.
     *    If this function returns undefined, then the argument value is unchanged.
     */

  }, {
    key: "traverseAndMaybeSet",
    value: function traverseAndMaybeSet(result, setTo) {
      return _traverseAndMaybeSet(this.spec, result, setTo);
    }
    /**
     * Traverse the spec and call a method for each argument.
     *
     * @param process A function to call at each arg spec.
     */

  }, {
    key: "traverse",
    value: function traverse(process, onGroup) {
      return _traverse(this.spec, process, onGroup);
    }
  }]);

  return WrappedArgMetadata;
}();
/**
 * Create a parsed args object from a spec using all default values.
 *
 * @param spec The spec for all arguments.
 */


function _loadDefaultValues(spec) {
  var result = {};

  for (var k in spec) {
    var argSpec = spec[k];

    if ("args" in argSpec) {
      result[k] = _loadDefaultValues(argSpec.args);
    } else {
      if ("default" in argSpec) result[k] = argSpec.default;else result[k] = undefined;
    }
  }

  return result;
}
/**
 * Traverse the spec and possibly generate a value for each argument.
 *
 * @param spec The spec for all arguments.
 * @param result The object to hold the resulting argument values.
 * @param setTo A function to generate an argument value from each arg spec.
 *    If this function returns undefined, then the argument value is unchanged.
 */


function _traverseAndMaybeSet(spec, result, setTo) {
  var groups = [];

  for (var k in spec) {
    var argSpec = spec[k];

    if ("args" in argSpec) {
      groups.push([argSpec, k]);
    } else {
      var value = setTo(argSpec, k);
      if (value === undefined) continue;
      result[k] = value;
    }
  }

  for (var _i = 0, _groups = groups; _i < _groups.length; _i++) {
    var group_and_key = _groups[_i];

    _traverseAndMaybeSet(group_and_key[0].args, result[group_and_key[1]], setTo);
  }
}
/**
 * Traverse the spec and possibly generate a value for each argument.
 *
 * @param spec The spec for all arguments.
 * @param process A function to call at each arg spec.
 */


function _traverse(spec, process, onGroup) {
  var groups = [];

  for (var k in spec) {
    var argSpec = spec[k];

    if ("args" in argSpec) {
      groups.push([argSpec, k]);
    } else {
      process(argSpec, k);
    }
  }

  for (var _i2 = 0, _groups2 = groups; _i2 < _groups2.length; _i2++) {
    var group_and_key = _groups2[_i2];
    onGroup === null || onGroup === void 0 ? void 0 : onGroup(group_and_key[0], group_and_key[1]);

    _traverse(group_and_key[0].args, process, onGroup);
  }
}
/**
 * A parser to extract key/value pairs from a command line input.
 * @member command The command line input.
 * @member keys The set of valid keys that can appear.
 * @member flags The set of valid flags that can appear.
 * @member index An internal marker for the progress of the parser over the input.
 */


var CommandParser = /*#__PURE__*/function () {
  function CommandParser(command, keys, flags, positionalArgs) {
    args_classCallCheck(this, CommandParser);

    this.command = command;
    this.index = 0;
    this.keys = keys;
    this.flags = flags;
    this.positionalArgs = positionalArgs;
    this.positionalArgsParsed = 0;
  }
  /**
   * Perform the parsing of (key, value) pairs.
   * @returns The set of extracted (key, value) pairs.
   */


  args_createClass(CommandParser, [{
    key: "parse",
    value: function parse() {
      var _a, _b, _c, _d;

      this.index = 0; // reset the parser

      var result = new Map();

      while (!this.finished()) {
        // A flag F may appear as !F to be parsed as false.
        var parsing_negative_flag = false;

        if (this.peek() === "!") {
          parsing_negative_flag = true;
          this.consume(["!"]);
        }

        var startIndex = this.index;
        var key = this.parseKey();

        if (result.has(key)) {
          throw "Duplicate key ".concat(key, " (first set to ").concat((_a = result.get(key)) !== null && _a !== void 0 ? _a : "", ")");
        }

        if (this.flags.has(key)) {
          // The key corresponds to a flag.
          // Parse [key] as true and ![key] as false.
          result.set(key, parsing_negative_flag ? "false" : "true");
          if (this.peek() === "=") throw "Flag ".concat(key, " cannot be assigned a value");
          if (!this.finished()) this.consume([" "]);
          this.prevUnquotedKey = undefined;
        } else if (this.keys.has(key)) {
          // Parse [key]=[value] or [key] [value]
          this.consume(["=", " "]);
          var value = this.parseValue();
          if (["'", '"'].includes((_b = this.prev()) !== null && _b !== void 0 ? _b : "")) this.prevUnquotedKey = undefined;else this.prevUnquotedKey = key;
          if (!this.finished()) this.consume([" "]);
          result.set(key, value);
        } else if (this.positionalArgsParsed < this.positionalArgs.length && this.peek() !== "=") {
          // Parse [value] as the next positional arg
          var positionalKey = this.positionalArgs[this.positionalArgsParsed];
          this.positionalArgsParsed++;
          this.index = startIndex; // back up to reparse the key as a value

          var _value = this.parseValue();

          if (["'", '"'].includes((_c = this.prev()) !== null && _c !== void 0 ? _c : "")) this.prevUnquotedKey = undefined;else this.prevUnquotedKey = key;
          if (!this.finished()) this.consume([" "]);
          if (result.has(positionalKey)) throw "Cannot assign ".concat(_value, " to ").concat(positionalKey, " (positionally) since ").concat(positionalKey, " was already set to ").concat((_d = result.get(positionalKey)) !== null && _d !== void 0 ? _d : "");
          result.set(positionalKey, _value);
        } else {
          // Key not found; include a better error message if it is possible for quotes to have been missed
          if (this.prevUnquotedKey && this.peek() !== "=") throw "Unknown argument: ".concat(key, " (if this should have been parsed as part of ").concat(this.prevUnquotedKey, ", you should surround the entire value in quotes)");else throw "Unknown argument: ".concat(key);
        }
      }

      return result;
    }
    /**
     * @returns True if the entire command has been parsed.
     */

  }, {
    key: "finished",
    value: function finished() {
      return this.index >= this.command.length;
    }
    /**
     * @returns The next character to parse, if it exists.
     */

  }, {
    key: "peek",
    value: function peek() {
      if (this.index >= this.command.length) return undefined;
      return this.command.charAt(this.index);
    }
    /**
     * @returns The character just parsed, if it exists.
     */

  }, {
    key: "prev",
    value: function prev() {
      if (this.index <= 0) return undefined;
      if (this.index >= this.command.length + 1) return undefined;
      return this.command.charAt(this.index - 1);
    }
    /**
     * Advance the internal marker over the next expected character.
     * Throws an error on unexpected characters.
     *
     * @param allowed Characters that are expected.
     */

  }, {
    key: "consume",
    value: function consume(allowed) {
      var _a;

      if (this.finished()) throw "Expected ".concat(allowed);

      if (allowed.includes((_a = this.peek()) !== null && _a !== void 0 ? _a : "")) {
        this.index += 1;
      }
    }
    /**
     * Find the next occurance of one of the provided characters, or the end of
     * the string if the characters never appear again.
     *
     * @param searchValue The characters to locate.
     */

  }, {
    key: "findNext",
    value: function findNext(searchValue) {
      var result = this.command.length;

      var _iterator4 = args_createForOfIteratorHelper(searchValue),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var value = _step4.value;
          var index = this.command.indexOf(value, this.index);
          if (index !== -1 && index < result) result = index;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      return result;
    }
    /**
     * Starting from the internal marker, parse a single key.
     * This also advances the internal marker.
     *
     * @returns The next key.
     */

  }, {
    key: "parseKey",
    value: function parseKey() {
      var keyEnd = this.findNext(["=", " "]);
      var key = this.command.substring(this.index, keyEnd);
      this.index = keyEnd;
      return key;
    }
    /**
     * Starting from the internal marker, parse a single value.
     * This also advances the internal marker.
     *
     * Values are a single word or enclosed in matching quotes, i.e. one of:
     *    "[^"]*"
     *    '[^']*"
     *    [^'"][^ ]*
     *
     * @returns The next value.
     */

  }, {
    key: "parseValue",
    value: function parseValue() {
      var _a, _b;

      var valueEnder = " ";
      var quotes = ["'", '"'];

      if (quotes.includes((_a = this.peek()) !== null && _a !== void 0 ? _a : "")) {
        valueEnder = (_b = this.peek()) !== null && _b !== void 0 ? _b : ""; // The value is everything until the next quote

        this.consume([valueEnder]); // Consume opening quote
      }

      var valueEnd = this.findNext([valueEnder]);
      var value = this.command.substring(this.index, valueEnd);

      if (valueEnder !== " " && valueEnd === this.command.length) {
        throw "No closing ".concat(valueEnder, " found for ").concat(valueEnder).concat(value);
      } // Consume the value (and closing quote)


      this.index = valueEnd;
      if (valueEnder !== " ") this.consume([valueEnder]);
      return value;
    }
  }]);

  return CommandParser;
}();
;// CONCATENATED MODULE: ./node_modules/libram/dist/combat.js
var combat_templateObject, combat_templateObject2;

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = combat_getPrototypeOf(object); if (object === null) break; } return object; }

function combat_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = combat_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function combat_toConsumableArray(arr) { return combat_arrayWithoutHoles(arr) || combat_iterableToArray(arr) || combat_unsupportedIterableToArray(arr) || combat_nonIterableSpread(); }

function combat_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function combat_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return combat_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return combat_arrayLikeToArray(o, minLen); }

function combat_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function combat_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return combat_arrayLikeToArray(arr); }

function combat_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function combat_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function combat_createClass(Constructor, protoProps, staticProps) { if (protoProps) combat_defineProperties(Constructor.prototype, protoProps); if (staticProps) combat_defineProperties(Constructor, staticProps); return Constructor; }

function combat_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function combat_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function combat_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) combat_setPrototypeOf(subClass, superClass); }

function combat_createSuper(Derived) { var hasNativeReflectConstruct = combat_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = combat_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = combat_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return combat_possibleConstructorReturn(this, result); }; }

function combat_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return combat_assertThisInitialized(self); }

function combat_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function combat_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; combat_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !combat_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return combat_construct(Class, arguments, combat_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return combat_setPrototypeOf(Wrapper, Class); }; return combat_wrapNativeSuper(Class); }

function combat_construct(Parent, args, Class) { if (combat_isNativeReflectConstruct()) { combat_construct = Reflect.construct; } else { combat_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) combat_setPrototypeOf(instance, Class.prototype); return instance; }; } return combat_construct.apply(null, arguments); }

function combat_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function combat_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function combat_setPrototypeOf(o, p) { combat_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return combat_setPrototypeOf(o, p); }

function combat_getPrototypeOf(o) { combat_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return combat_getPrototypeOf(o); }

function combat_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var MACRO_NAME = "Script Autoattack Macro";
/**
 * Get the KoL native ID of the macro with name name.
 *
 * @category Combat
 * @returns {number} The macro ID.
 */

function getMacroId() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MACRO_NAME;
  var macroMatches = (0,external_kolmafia_namespaceObject.xpath)((0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php"), "//select[@name=\"macroid\"]/option[text()=\"".concat(name, "\"]/@value"));

  if (macroMatches.length === 0) {
    (0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php?action=new");
    var newMacroText = (0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php?macroid=0&name=".concat(name, "&macrotext=abort&action=save"));
    return parseInt((0,external_kolmafia_namespaceObject.xpath)(newMacroText, "//input[@name=".concat(name, "]/@value"))[0], 10);
  } else {
    return parseInt(macroMatches[0], 10);
  }
}

function itemOrNameToItem(itemOrName) {
  return typeof itemOrName === "string" ? external_kolmafia_namespaceObject.Item.get(itemOrName) : itemOrName;
} // The list of all combat items whose name is a strict substring of another combat item


var substringCombatItems = template_string_$items(combat_templateObject || (combat_templateObject = combat_taggedTemplateLiteral(["spider web, really sticky spider web, dictionary, NG, Cloaca-Cola, yo-yo, top, ball, kite, yo, red potion, blue potion, bowling ball, adder, red button, pile of sand, mushroom, deluxe mushroom"]))); // The list of all combat skills whose name is a strict substring of another combat skill

var substringCombatSkills = $skills(combat_templateObject2 || (combat_templateObject2 = combat_taggedTemplateLiteral(["Shoot, Thrust-Smack, Headbutt, Toss, Sing, Disarm, LIGHT, BURN, Extract, Meteor Shower, Snipe, Cleave, Boil, Slice, Rainbow"])));

function itemOrItemsBallsMacroName(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroName).join(", ");
  } else {
    var item = itemOrNameToItem(itemOrItems);
    return !substringCombatItems.includes(item) ? item.name : (0,external_kolmafia_namespaceObject.toInt)(item).toString();
  }
}

function itemOrItemsBallsMacroPredicate(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroPredicate).join(" && ");
  } else {
    return "hascombatitem ".concat(itemOrItems);
  }
}

function skillOrNameToSkill(skillOrName) {
  if (typeof skillOrName === "string") {
    return external_kolmafia_namespaceObject.Skill.get(skillOrName);
  } else {
    return skillOrName;
  }
}

function skillBallsMacroName(skillOrName) {
  var skill = skillOrNameToSkill(skillOrName);
  return skill.name.match(/^[A-Za-z ]+$/) && !substringCombatSkills.includes(skill) ? skill.name : (0,external_kolmafia_namespaceObject.toInt)(skill);
}

var InvalidMacroError = /*#__PURE__*/function (_Error) {
  combat_inherits(InvalidMacroError, _Error);

  var _super = combat_createSuper(InvalidMacroError);

  function InvalidMacroError() {
    combat_classCallCheck(this, InvalidMacroError);

    return _super.apply(this, arguments);
  }

  return InvalidMacroError;
}( /*#__PURE__*/combat_wrapNativeSuper(Error));
/**
 * BALLS macro builder for direct submission to KoL.
 * Create a new macro with `new Macro()` and add steps using the instance methods.
 * Uses a fluent interface, so each step returns the object for easy chaining of steps.
 * Each method is also defined as a static method that creates a new Macro with only that step.
 * For example, you can do `Macro.skill('Saucestorm').attack()`.
 */

var Macro = /*#__PURE__*/function () {
  function Macro() {
    combat_classCallCheck(this, Macro);

    combat_defineProperty(this, "components", []);

    combat_defineProperty(this, "name", MACRO_NAME);
  }

  combat_createClass(Macro, [{
    key: "toString",
    value:
    /**
     * Convert macro to string.
     */
    function toString() {
      return (this.components.join(";") + ";").replace(/;;+/g, ";");
    }
    /**
     * Gives your macro a new name to be used when saving an autoattack.
     * @param name The name to be used when saving as an autoattack.
     * @returns The macro in question
     */

  }, {
    key: "rename",
    value: function rename(name) {
      this.name = name;
      return this;
    }
    /**
     * Creates a new Macro with a name other than the default name.
     * @param name The name to assign this macro.
     * @returns A new Macro with the assigned name.
     */

  }, {
    key: "save",
    value:
    /**
     * Save a macro to a Mafia property for use in a consult script.
     */
    function save() {
      _set(Macro.SAVED_MACRO_PROPERTY, this.toString());
    }
    /**
     * Load a saved macro from the Mafia property.
     */

  }, {
    key: "step",
    value:
    /**
     * Statefully add one or several steps to a macro.
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */
    function step() {
      var _ref, _this$components;

      for (var _len = arguments.length, nextSteps = new Array(_len), _key = 0; _key < _len; _key++) {
        nextSteps[_key] = arguments[_key];
      }

      var nextStepsStrings = (_ref = []).concat.apply(_ref, combat_toConsumableArray(nextSteps.map(x => x instanceof Macro ? x.components : [x])));

      (_this$components = this.components).push.apply(_this$components, combat_toConsumableArray(nextStepsStrings.filter(s => s.length > 0)));

      return this;
    }
    /**
     * Statefully add one or several steps to a macro.
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "submit",
    value:
    /**
     * Submit the built macro to KoL. Only works inside combat.
     */
    function submit() {
      var final = this.toString();
      return (0,external_kolmafia_namespaceObject.visitUrl)("fight.php?action=macro&macrotext=".concat((0,external_kolmafia_namespaceObject.urlEncode)(final)), true, true);
    }
    /**
     * Set this macro as a KoL native autoattack.
     */

  }, {
    key: "setAutoAttack",
    value: function setAutoAttack() {
      var id = Macro.cachedMacroIds.get(this.name);

      if (id === undefined) {
        id = getMacroId(this.name);
        Macro.cachedMacroIds.set(this.name, id);
      }

      if ((0,external_kolmafia_namespaceObject.getAutoAttack)() === 99000000 + id && this.toString() === Macro.cachedAutoAttacks.get(this.name)) {
        // This macro is already set. Don"t make the server request.
        return;
      }

      (0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&name=").concat((0,external_kolmafia_namespaceObject.urlEncode)(this.name), "&macrotext=").concat((0,external_kolmafia_namespaceObject.urlEncode)(this.toString()), "&action=save"), true, true);
      (0,external_kolmafia_namespaceObject.visitUrl)("account.php?am=1&action=autoattack&value=".concat(99000000 + id, "&ajax=1"));
      Macro.cachedAutoAttacks.set(this.name, this.toString());
    }
    /**
     * Renames the macro, then sets it as an autoattack.
     * @param name The name to save the macro under as an autoattack.
     */

  }, {
    key: "setAutoAttackAs",
    value: function setAutoAttackAs(name) {
      this.name = name;
      this.setAutoAttack();
    }
    /**
     * Clear all cached autoattacks, and delete all stored macros server-side.
     */

  }, {
    key: "abort",
    value:
    /**
     * Add an "abort" step to this macro.
     * @returns {Macro} This object itself.
     */
    function abort() {
      return this.step("abort");
    }
    /**
     * Create a new macro with an "abort" step.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "runaway",
    value:
    /**
     * Add a "runaway" step to this macro.
     * @returns {Macro} This object itself.
     */
    function runaway() {
      return this.step("runaway");
    }
    /**
     * Create a new macro with an "runaway" step.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "if_",
    value:
    /**
     * Add an "if" statement to this macro.
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
    function if_(condition, ifTrue) {
      return this.step("if ".concat(Macro.makeBALLSPredicate(condition))).step(ifTrue).step("endif");
    }
    /**
     * Create a new macro with an "if" statement.
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "ifNot",
    value:
    /**
     * Add an "if" statement to this macro, inverting the condition.
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
    function ifNot(condition, ifTrue) {
      return this.step("if !(".concat(Macro.makeBALLSPredicate(condition), ")")).step(ifTrue).step("endif");
    }
    /**
     * Create a new macro with an "if" statement, inverting the condition.
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "while_",
    value:
    /**
     * Add a "while" statement to this macro.
     * @param condition The BALLS condition for the if statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */
    function while_(condition, contents) {
      return this.step("while ".concat(condition)).step(contents).step("endwhile");
    }
    /**
     * Create a new macro with a "while" statement.
     * @param condition The BALLS condition for the if statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "externalIf",
    value:
    /**
     * Conditionally add a step to a macro based on a condition evaluated at the time of building the macro.
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @param ifFalse Optional input to turn this into an if...else statement.
     * @returns {Macro} This object itself.
     */
    function externalIf(condition, ifTrue, ifFalse) {
      if (condition) return this.step(ifTrue);else if (ifFalse) return this.step(ifFalse);else return this;
    }
    /**
     * Create a new macro with a condition evaluated at the time of building the macro.
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @param ifFalse Optional input to turn this into an if...else statement.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "repeat",
    value:
    /**
     * Add a repeat step to the macro.
     * @returns {Macro} This object itself.
     */
    function repeat() {
      return this.step("repeat");
    }
    /**
     * Add one or more skill cast steps to the macro.
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "skill",
    value: function skill() {
      for (var _len2 = arguments.length, skills = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        skills[_key2] = arguments[_key2];
      }

      return this.step.apply(this, combat_toConsumableArray(skills.map(skill => {
        return "skill ".concat(skillBallsMacroName(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill cast steps.
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "trySkill",
    value:
    /**
     * Add one or more skill cast steps to the macro, where each step checks if you have the skill first.
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */
    function trySkill() {
      for (var _len3 = arguments.length, skills = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        skills[_key3] = arguments[_key3];
      }

      return this.step.apply(this, combat_toConsumableArray(skills.map(skill => {
        return Macro.if_("hasskill ".concat(skillBallsMacroName(skill)), Macro.skill(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill cast steps, where each step checks if you have the skill first.
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "trySkillRepeat",
    value:
    /**
     * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */
    function trySkillRepeat() {
      for (var _len4 = arguments.length, skills = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        skills[_key4] = arguments[_key4];
      }

      return this.step.apply(this, combat_toConsumableArray(skills.map(skill => {
        return Macro.if_("hasskill ".concat(skillBallsMacroName(skill)), Macro.skill(skill).repeat());
      })));
    }
    /**
     * Create a new macro with one or more skill-cast-and-repeat steps, where each step checks if you have the skill first.
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "item",
    value:
    /**
     * Add one or more item steps to the macro.
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
    function item() {
      for (var _len5 = arguments.length, items = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        items[_key5] = arguments[_key5];
      }

      return this.step.apply(this, combat_toConsumableArray(items.map(itemOrItems => {
        return "use ".concat(itemOrItemsBallsMacroName(itemOrItems));
      })));
    }
    /**
     * Create a new macro with one or more item steps.
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "tryItem",
    value:
    /**
     * Add one or more item steps to the macro, where each step checks to see if you have the item first.
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
    function tryItem() {
      for (var _len6 = arguments.length, items = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        items[_key6] = arguments[_key6];
      }

      return this.step.apply(this, combat_toConsumableArray(items.map(item => {
        return Macro.if_(itemOrItemsBallsMacroPredicate(item), "use ".concat(itemOrItemsBallsMacroName(item)));
      })));
    }
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "attack",
    value:
    /**
     * Add an attack step to the macro.
     * @returns {Macro} This object itself.
     */
    function attack() {
      return this.step("attack");
    }
    /**
     * Create a new macro with an attack step.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "ifHolidayWanderer",
    value:
    /**
     * Create an if_ statement based on what holiday of loathing it currently is. On non-holidays, returns the original macro, unmutated.
     * @param macro The macro to place in the if_ statement
     */
    function ifHolidayWanderer(macro) {
      var todaysWanderers = getTodaysHolidayWanderers();
      if (todaysWanderers.length === 0) return this;
      return this.if_(todaysWanderers.map(monster => "monsterid ".concat(monster.id)).join(" || "), macro);
    }
    /**
     * Create a new macro starting with an ifHolidayWanderer step.
     * @param macro The macro to place inside the if_ statement
     */

  }, {
    key: "ifNotHolidayWanderer",
    value:
    /**
     * Create an if_ statement based on what holiday of loathing it currently is. On non-holidays, returns the original macro, with the input macro appended.
     * @param macro The macro to place in the if_ statement.
     */
    function ifNotHolidayWanderer(macro) {
      var todaysWanderers = getTodaysHolidayWanderers();
      if (todaysWanderers.length === 0) return this.step(macro);
      return this.if_(todaysWanderers.map(monster => "!monsterid ".concat(monster.id)).join(" && "), macro);
    }
    /**
     * Create a new macro starting with an ifNotHolidayWanderer step.
     * @param macro The macro to place inside the if_ statement
     */

  }], [{
    key: "rename",
    value: function rename(name) {
      return new this().rename(name);
    }
  }, {
    key: "load",
    value: function load() {
      var _this;

      return (_this = new this()).step.apply(_this, combat_toConsumableArray(property_get(Macro.SAVED_MACRO_PROPERTY).split(";")));
    }
    /**
     * Clear the saved macro in the Mafia property.
     */

  }, {
    key: "clearSaved",
    value: function clearSaved() {
      (0,external_kolmafia_namespaceObject.removeProperty)(Macro.SAVED_MACRO_PROPERTY);
    }
  }, {
    key: "step",
    value: function step() {
      var _this2;

      return (_this2 = new this()).step.apply(_this2, arguments);
    }
  }, {
    key: "clearAutoAttackMacros",
    value: function clearAutoAttackMacros() {
      var _iterator = combat_createForOfIteratorHelper(Macro.cachedAutoAttacks.keys()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _Macro$cachedMacroIds;

          var name = _step.value;
          var id = (_Macro$cachedMacroIds = Macro.cachedMacroIds.get(name)) !== null && _Macro$cachedMacroIds !== void 0 ? _Macro$cachedMacroIds : getMacroId(name);
          (0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&action=edit&what=Delete&confirm=1"));
          Macro.cachedAutoAttacks.delete(name);
          Macro.cachedMacroIds.delete(name);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "abort",
    value: function abort() {
      return new this().abort();
    }
  }, {
    key: "runaway",
    value: function runaway() {
      return new this().runaway();
    }
  }, {
    key: "makeBALLSPredicate",
    value: function makeBALLSPredicate(condition) {
      var ballsCondition = "";

      if (condition instanceof external_kolmafia_namespaceObject.Monster) {
        ballsCondition = "monsterid ".concat(condition.id);
      } else if (condition instanceof Array) {
        ballsCondition = condition.map(mon => "monsterid ".concat(mon.id)).join(" || ");
        ballsCondition = "(".concat(ballsCondition, ")");
      } else if (condition instanceof external_kolmafia_namespaceObject.Effect) {
        ballsCondition = "haseffect ".concat((0,external_kolmafia_namespaceObject.toInt)(condition));
      } else if (condition instanceof external_kolmafia_namespaceObject.Skill) {
        ballsCondition = "hasskill ".concat(skillBallsMacroName(condition));
      } else if (condition instanceof external_kolmafia_namespaceObject.Item) {
        if (!condition.combat) {
          throw new InvalidMacroError("Item ".concat(condition, " cannot be made a valid BALLS predicate (it is not combat-usable)"));
        }

        ballsCondition = "hascombatitem ".concat(itemOrItemsBallsMacroName(condition));
      } else if (condition instanceof external_kolmafia_namespaceObject.Location) {
        var snarfblat = condition.id;

        if (snarfblat < 1) {
          throw new InvalidMacroError("Location ".concat(condition, " cannot be made a valid BALLS predicate (it has no location id)"));
        }

        ballsCondition = "snarfblat ".concat(snarfblat);
      } else if (condition instanceof external_kolmafia_namespaceObject.Class) {
        if ((0,external_kolmafia_namespaceObject.toInt)(condition) > 6) {
          throw new InvalidMacroError("Class ".concat(condition, " cannot be made a valid BALLS predicate (it is not a standard class)"));
        }

        ballsCondition = condition.toString().replaceAll(" ", "").toLowerCase();
      } else if (condition instanceof external_kolmafia_namespaceObject.Stat) {
        ballsCondition = "".concat(condition.toString().toLowerCase(), "class");
      } else {
        ballsCondition = condition;
      }

      return ballsCondition;
    }
  }, {
    key: "if_",
    value: function if_(condition, ifTrue) {
      return new this().if_(condition, ifTrue);
    }
  }, {
    key: "ifNot",
    value: function ifNot(condition, ifTrue) {
      return new this().ifNot(condition, ifTrue);
    }
  }, {
    key: "while_",
    value: function while_(condition, contents) {
      return new this().while_(condition, contents);
    }
  }, {
    key: "externalIf",
    value: function externalIf(condition, ifTrue, ifFalse) {
      return new this().externalIf(condition, ifTrue, ifFalse);
    }
  }, {
    key: "skill",
    value: function skill() {
      var _this3;

      return (_this3 = new this()).skill.apply(_this3, arguments);
    }
  }, {
    key: "trySkill",
    value: function trySkill() {
      var _this4;

      return (_this4 = new this()).trySkill.apply(_this4, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function trySkillRepeat() {
      var _this5;

      return (_this5 = new this()).trySkillRepeat.apply(_this5, arguments);
    }
  }, {
    key: "item",
    value: function item() {
      var _this6;

      return (_this6 = new this()).item.apply(_this6, arguments);
    }
  }, {
    key: "tryItem",
    value: function tryItem() {
      var _this7;

      return (_this7 = new this()).tryItem.apply(_this7, arguments);
    }
  }, {
    key: "attack",
    value: function attack() {
      return new this().attack();
    }
  }, {
    key: "ifHolidayWanderer",
    value: function ifHolidayWanderer(macro) {
      return new this().ifHolidayWanderer(macro);
    }
  }, {
    key: "ifNotHolidayWanderer",
    value: function ifNotHolidayWanderer(macro) {
      return new this().ifNotHolidayWanderer(macro);
    }
  }]);

  return Macro;
}();
/**
 * Adventure in a location and handle all combats with a given macro.
 * To use this function you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 *
 * @category Combat
 * @param loc Location to adventure in.
 * @param macro Macro to execute.
 */

combat_defineProperty(Macro, "SAVED_MACRO_PROPERTY", "libram_savedMacro");

combat_defineProperty(Macro, "cachedMacroIds", new Map());

combat_defineProperty(Macro, "cachedAutoAttacks", new Map());

function adventureMacro(loc, macro) {
  macro.save();
  setAutoAttack(0);

  try {
    adv1(loc, 0, "");

    while (inMultiFight()) {
      runCombat();
    }

    if (choiceFollowsFight()) visitUrl("choice.php");
  } finally {
    Macro.clearSaved();
  }
}
/**
 * Adventure in a location and handle all combats with a given autoattack and manual macro.
 * To use the nextMacro parameter you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 *
 * @category Combat
 * @param loc Location to adventure in.
 * @param autoMacro Macro to execute via KoL autoattack.
 * @param nextMacro Macro to execute manually after autoattack completes.
 */

function adventureMacroAuto(loc, autoMacro) {
  var _nextMacro;

  var nextMacro = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  nextMacro = (_nextMacro = nextMacro) !== null && _nextMacro !== void 0 ? _nextMacro : Macro.abort();
  autoMacro.setAutoAttack();
  nextMacro.save();

  try {
    adv1(loc, 0, "");

    while (inMultiFight()) {
      runCombat();
    }

    if (choiceFollowsFight()) visitUrl("choice.php");
  } finally {
    Macro.clearSaved();
  }
}
var StrictMacro = /*#__PURE__*/function (_Macro) {
  combat_inherits(StrictMacro, _Macro);

  var _super2 = combat_createSuper(StrictMacro);

  function StrictMacro() {
    combat_classCallCheck(this, StrictMacro);

    return _super2.apply(this, arguments);
  }

  combat_createClass(StrictMacro, [{
    key: "skill",
    value:
    /**
     * Add one or more skill cast steps to the macro.
     * @param skills Skills to cast.
     * @returns {StrictMacro} This object itself.
     */
    function skill() {
      var _get2;

      for (var _len7 = arguments.length, skills = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        skills[_key7] = arguments[_key7];
      }

      return (_get2 = _get(combat_getPrototypeOf(StrictMacro.prototype), "skill", this)).call.apply(_get2, [this].concat(skills));
    }
    /**
     * Create a new macro with one or more skill cast steps.
     * @param skills Skills to cast.
     * @returns {StrictMacro} This object itself.
     */

  }, {
    key: "item",
    value:
    /**
     * Add one or more item steps to the macro.
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */
    function item() {
      var _get3;

      for (var _len8 = arguments.length, items = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        items[_key8] = arguments[_key8];
      }

      return (_get3 = _get(combat_getPrototypeOf(StrictMacro.prototype), "item", this)).call.apply(_get3, [this].concat(items));
    }
    /**
     * Create a new macro with one or more item steps.
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */

  }, {
    key: "trySkill",
    value:
    /**
     * Add one or more skill cast steps to the macro, where each step checks if you have the skill first.
     * @param skills Skills to try casting.
     * @returns {StrictMacro} This object itself.
     */
    function trySkill() {
      var _get4;

      for (var _len9 = arguments.length, skills = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        skills[_key9] = arguments[_key9];
      }

      return (_get4 = _get(combat_getPrototypeOf(StrictMacro.prototype), "trySkill", this)).call.apply(_get4, [this].concat(skills));
    }
    /**
     * Create a new macro with one or more skill cast steps, where each step checks if you have the skill first.
     * @param skills Skills to try casting.
     * @returns {StrictMacro} This object itself.
     */

  }, {
    key: "tryItem",
    value:
    /**
     * Add one or more item steps to the macro, where each step checks to see if you have the item first.
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */
    function tryItem() {
      var _get5;

      for (var _len10 = arguments.length, items = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        items[_key10] = arguments[_key10];
      }

      return (_get5 = _get(combat_getPrototypeOf(StrictMacro.prototype), "tryItem", this)).call.apply(_get5, [this].concat(items));
    }
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */

  }, {
    key: "trySkillRepeat",
    value:
    /**
     * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
     * @param skills Skills to try repeatedly casting.
     * @returns {StrictMacro} This object itself.
     */
    function trySkillRepeat() {
      var _get6;

      for (var _len11 = arguments.length, skills = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        skills[_key11] = arguments[_key11];
      }

      return (_get6 = _get(combat_getPrototypeOf(StrictMacro.prototype), "trySkillRepeat", this)).call.apply(_get6, [this].concat(skills));
    }
    /**
     * Create a new macro with one or more skill-cast-and-repeat steps, where each step checks if you have the skill first.
     * @param skills Skills to try repeatedly casting.
     * @returns {StrictMacro} This object itself.
     */

  }], [{
    key: "skill",
    value: function skill() {
      var _this8;

      return (_this8 = new this()).skill.apply(_this8, arguments);
    }
  }, {
    key: "item",
    value: function item() {
      var _this9;

      return (_this9 = new this()).item.apply(_this9, arguments);
    }
  }, {
    key: "trySkill",
    value: function trySkill() {
      var _this10;

      return (_this10 = new this()).trySkill.apply(_this10, arguments);
    }
  }, {
    key: "tryItem",
    value: function tryItem() {
      var _this11;

      return (_this11 = new this()).tryItem.apply(_this11, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function trySkillRepeat() {
      var _this12;

      return (_this12 = new this()).trySkillRepeat.apply(_this12, arguments);
    }
  }]);

  return StrictMacro;
}(Macro);
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/lib.js
function undelay(delayedObject) {
  return typeof delayedObject === "function" ? delayedObject() : delayedObject;
}
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/combat.js
function dist_combat_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) dist_combat_setPrototypeOf(subClass, superClass); }

function dist_combat_setPrototypeOf(o, p) { dist_combat_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return dist_combat_setPrototypeOf(o, p); }

function dist_combat_createSuper(Derived) { var hasNativeReflectConstruct = dist_combat_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = dist_combat_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = dist_combat_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return dist_combat_possibleConstructorReturn(this, result); }; }

function dist_combat_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return dist_combat_assertThisInitialized(self); }

function dist_combat_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function dist_combat_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function dist_combat_getPrototypeOf(o) { dist_combat_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return dist_combat_getPrototypeOf(o); }

function dist_combat_toConsumableArray(arr) { return dist_combat_arrayWithoutHoles(arr) || dist_combat_iterableToArray(arr) || dist_combat_unsupportedIterableToArray(arr) || dist_combat_nonIterableSpread(); }

function dist_combat_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function dist_combat_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function dist_combat_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return dist_combat_arrayLikeToArray(arr); }

function dist_combat_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = dist_combat_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function dist_combat_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return dist_combat_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dist_combat_arrayLikeToArray(o, minLen); }

function dist_combat_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function dist_combat_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dist_combat_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dist_combat_createClass(Constructor, protoProps, staticProps) { if (protoProps) dist_combat_defineProperties(Constructor.prototype, protoProps); if (staticProps) dist_combat_defineProperties(Constructor, staticProps); return Constructor; }




/**
 * The strategy to use for combat for a task, which indicates what to do
 * for each monster.
 *
 * There are two ways to specify in a task what to do for a given monster:
 *   1. Provide a macro directly through .macro(macro, ...monsters)
 *   2. Provide an action through .action(action, ...monsters)
 *
 * An action is a strategy for dealing with a monster that is not fully
 * defined in the task. The possible actions are set with the type parameter A.
 * Actions should typically end the fight.
 *
 * For example, a task may want to banish a monster but not necessarily know or
 * care which banisher is used. Instead, it is best for the engine to determine
 * which banisher to use on the monster. To facilitate this, "banish" can be
 * defined as an action, e.g. with CombatStrategy<"banish">;
 *
 * Each action can be resolved by the engine by:
 *   1. Providing a default macro for the action through ActionDefaults<A>,
 *      which can be done through combat_defaults in Engine options, or
 *   2. Providing a CombatResource for the action through CombatResources<A>.
 *      This is typically done in Engine.customize() by checking if a given
 *      action is requested by the task with combat.can(.), and then providing
 *      an appropriate resource with resources.provide(.).
 *
 * A monster may have both a macro and an action defined, and a macro or action
 * can be specified to be done on all monsters. The order of combat is then:
 * 1. The macro(s) given in .startingMacro().
 * 2. The monster-specific macro(s) from .macro().
 * 3. The general macro(s) from .macro().
 * 4. The monster-specific action from .action().
 * 5. The general action from .action().
 *
 * If an autoattack is set with .autoattack(), the order of the autoattack is:
 * 1. The monster-specific macro(s) from .autoattack().
 * 2. The general macro(s) from .autoattack().
 */

var CombatStrategy = /*#__PURE__*/function () {
  function CombatStrategy() {
    dist_combat_classCallCheck(this, CombatStrategy);

    this.macros = new Map();
    this.autoattacks = new Map();
    this.actions = new Map();
    this.ccs_entries = new Map();
  }
  /**
   * Add a macro to perform for this monster. If multiple macros are given
   * for the same monster, they are concatinated.
   *
   * @param macro The macro to perform.
   * @param monsters Which monsters to use the macro on. If not given, add the
   *  macro as a general macro.
   * @param prepend If true, add the macro before all previous macros for
   *    the same monster. If false, add after all previous macros.
   * @returns this
   */


  dist_combat_createClass(CombatStrategy, [{
    key: "macro",
    value: function macro(_macro, monsters, prepend) {
      var _a, _b;

      if (monsters === undefined) {
        if (this.default_macro === undefined) this.default_macro = [];
        if (prepend) this.default_macro.unshift(_macro);else this.default_macro.push(_macro);
      } else {
        if (monsters instanceof external_kolmafia_namespaceObject.Monster) monsters = [monsters];

        var _iterator = dist_combat_createForOfIteratorHelper(monsters),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var monster = _step.value;
            if (!this.macros.has(monster)) this.macros.set(monster, []);
            if (prepend) (_a = this.macros.get(monster)) === null || _a === void 0 ? void 0 : _a.unshift(_macro);else (_b = this.macros.get(monster)) === null || _b === void 0 ? void 0 : _b.push(_macro);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return this;
    }
    /**
     * Add a macro to perform as an autoattack for this monster. If multiple
     * macros are given for the same monster, they are concatinated.
     *
     * @param macro The macro to perform as autoattack.
     * @param monsters Which monsters to use the macro on. If not given, add the
     *  macro as a general macro.
     * @param prepend If true, add the macro before all previous autoattack
     *    macros for the same monster. If false, add after all previous macros.
     * @returns this
     */

  }, {
    key: "autoattack",
    value: function autoattack(macro, monsters, prepend) {
      var _a, _b;

      if (monsters === undefined) {
        if (this.default_autoattack === undefined) this.default_autoattack = [];
        if (prepend) this.default_autoattack.unshift(macro);else this.default_autoattack.push(macro);
      } else {
        if (monsters instanceof external_kolmafia_namespaceObject.Monster) monsters = [monsters];

        var _iterator2 = dist_combat_createForOfIteratorHelper(monsters),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var monster = _step2.value;
            if (!this.autoattacks.has(monster)) this.autoattacks.set(monster, []);
            if (prepend) (_a = this.autoattacks.get(monster)) === null || _a === void 0 ? void 0 : _a.unshift(macro);else (_b = this.autoattacks.get(monster)) === null || _b === void 0 ? void 0 : _b.push(macro);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      return this;
    }
    /**
     * Add a macro to perform at the start of combat.
     * @param macro The macro to perform.
     * @param prepend If true, add the macro before all previous starting
     *    macros. If false, add after all previous starting macros.
     * @returns this
     */

  }, {
    key: "startingMacro",
    value: function startingMacro(macro, prepend) {
      if (this.starting_macro === undefined) this.starting_macro = [];
      if (prepend) this.starting_macro.unshift(macro);else this.starting_macro.push(macro);
      return this;
    }
    /**
     * Add an action to perform for this monster. Only one action can be set for
     * each monster; any previous actions are overwritten.
     *
     * @param action The action to perform.
     * @param monsters Which monsters to use the action on. If not given, set the
     *  action as the general action for all monsters.
     * @returns this
     */

  }, {
    key: "action",
    value: function action(_action, monsters) {
      if (monsters === undefined) {
        this.default_action = _action;
      } else if (monsters instanceof external_kolmafia_namespaceObject.Monster) {
        this.actions.set(monsters, _action);
      } else {
        var _iterator3 = dist_combat_createForOfIteratorHelper(monsters),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var monster = _step3.value;
            this.actions.set(monster, _action);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }

      return this;
    }
    /**
     * Add a separate entry in the grimoire-generated CCS file for the specified
     * monster. If multiple entries are given for the same monster, they are
     * concatinated.
     *
     * This should typically be only used rarely, on monsters for which KoL does
     * not support macros in combat (e.g. rampaging adding machine).
     *
     * @param entry The entry to add for the given monster.
     * @param monsters Which monsters to add the entry to.
     * @param prepend If true, add the entry before all previous entries. If
     *   false, add after all previous entries.
     */

  }, {
    key: "ccs",
    value: function ccs(entry, monsters, prepend) {
      var _a, _b;

      if (monsters instanceof external_kolmafia_namespaceObject.Monster) monsters = [monsters];

      var _iterator4 = dist_combat_createForOfIteratorHelper(monsters),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var monster = _step4.value;
          if (!this.ccs_entries.has(monster)) this.ccs_entries.set(monster, []);
          if (prepend) (_a = this.ccs_entries.get(monster)) === null || _a === void 0 ? void 0 : _a.unshift(entry);else (_b = this.ccs_entries.get(monster)) === null || _b === void 0 ? void 0 : _b.push(entry);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      return this;
    }
    /**
     * Check if the provided action was requested for any monsters, or for the
     * general action.
     */

  }, {
    key: "can",
    value: function can(action) {
      if (action === this.default_action) return true;
      return Array.from(this.actions.values()).includes(action);
    }
    /**
     * Return the general action (if it exists).
     */

  }, {
    key: "getDefaultAction",
    value: function getDefaultAction() {
      return this.default_action;
    }
    /**
     * Return all monsters where the provided action was requested.
     */

  }, {
    key: "where",
    value: function where(action) {
      return Array.from(this.actions.keys()).filter(key => this.actions.get(key) === action);
    }
    /**
     * Return the requested action (if it exists) for the provided monster.
     */

  }, {
    key: "currentStrategy",
    value: function currentStrategy(monster) {
      var _a;

      return (_a = this.actions.get(monster)) !== null && _a !== void 0 ? _a : this.default_action;
    }
    /**
     * Perform a deep copy of this combat strategy.
     */

  }, {
    key: "clone",
    value: function clone() {
      var result = new CombatStrategy();
      if (this.starting_macro) result.starting_macro = dist_combat_toConsumableArray(this.starting_macro);
      if (this.default_macro) result.default_macro = dist_combat_toConsumableArray(this.default_macro);

      var _iterator5 = dist_combat_createForOfIteratorHelper(this.macros),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var pair = _step5.value;
          result.macros.set(pair[0], dist_combat_toConsumableArray(pair[1]));
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      if (this.default_autoattack) result.default_autoattack = dist_combat_toConsumableArray(this.default_autoattack);

      var _iterator6 = dist_combat_createForOfIteratorHelper(this.autoattacks),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _pair = _step6.value;
          result.autoattacks.set(_pair[0], dist_combat_toConsumableArray(_pair[1]));
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      result.default_action = this.default_action;

      var _iterator7 = dist_combat_createForOfIteratorHelper(this.actions),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var _pair2 = _step7.value;
          result.actions.set(_pair2[0], _pair2[1]);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      var _iterator8 = dist_combat_createForOfIteratorHelper(this.ccs_entries),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _pair3 = _step8.value;
          result.ccs_entries.set(_pair3[0], dist_combat_toConsumableArray(_pair3[1]));
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      return result;
    }
    /**
     * Compile this combat strategy into a complete macro.
     *
     * @param resources The resources to use to fulfil actions.
     * @param defaults Macros to perform for each action without a resource.
     * @param location The adventuring location, if known.
     * @returns The compiled macro.
     */

  }, {
    key: "compile",
    value: function compile(resources, defaults, location) {
      var _a, _b;

      var result = new Macro(); // If there is macro precursor, do it now

      if (this.starting_macro) {
        result.step.apply(result, dist_combat_toConsumableArray(this.starting_macro.map(undelay)));
      } // Perform any monster-specific macros (these may or may not end the fight)


      var monster_macros = new CompressedMacro();
      this.macros.forEach((value, key) => {
        var _Macro;

        monster_macros.add(key, (_Macro = new Macro()).step.apply(_Macro, dist_combat_toConsumableArray(value.map(undelay))));
      });
      result.step(monster_macros.compile()); // Perform the non-monster specific macro

      if (this.default_macro) result.step.apply(result, dist_combat_toConsumableArray(this.default_macro.map(undelay))); // Perform any monster-specific actions (these should end the fight)

      var monster_actions = new CompressedMacro();
      this.actions.forEach((action, key) => {
        var _a, _b;

        var macro = (_a = resources.getMacro(action)) !== null && _a !== void 0 ? _a : (_b = defaults === null || defaults === void 0 ? void 0 : defaults[action]) === null || _b === void 0 ? void 0 : _b.call(defaults, key);
        if (macro) monster_actions.add(key, new Macro().step(macro));
      });
      result.step(monster_actions.compile()); // Perform the non-monster specific action (these should end the fight)

      if (this.default_action) {
        var macro = (_a = resources.getMacro(this.default_action)) !== null && _a !== void 0 ? _a : (_b = defaults === null || defaults === void 0 ? void 0 : defaults[this.default_action]) === null || _b === void 0 ? void 0 : _b.call(defaults, location);
        if (macro) result.step(macro);
      }

      return result;
    }
    /**
     * Compile the autoattack of this combat strategy into a complete macro.
     *
     * @returns The compiled autoattack macro.
     */

  }, {
    key: "compileAutoattack",
    value: function compileAutoattack() {
      var result = new Macro(); // Perform any monster-specific autoattacks (these may or may not end the fight)

      var monster_macros = new CompressedMacro();
      this.autoattacks.forEach((value, key) => {
        var _Macro2;

        monster_macros.add(key, (_Macro2 = new Macro()).step.apply(_Macro2, dist_combat_toConsumableArray(value.map(undelay))));
      });
      result.step(monster_macros.compile()); // Perform the non-monster specific macro

      if (this.default_autoattack) result.step.apply(result, dist_combat_toConsumableArray(this.default_autoattack.map(undelay)));
      return result;
    }
    /**
     * Compile the CCS entries of this combat strategy into a single array.
     *
     * @returns The lines of a CCS file, not including the [default] macro.
     */

  }, {
    key: "compileCcs",
    value: function compileCcs() {
      var result = [];

      var _iterator9 = dist_combat_createForOfIteratorHelper(this.ccs_entries),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var ccs_entry = _step9.value;
          result.push.apply(result, ["[".concat(ccs_entry[0].name, "]")].concat(dist_combat_toConsumableArray(ccs_entry[1])));
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      return result;
    }
    /**
     * For advanced users, this method will generate a fluent API for requesting
     * actions. That is, it allows you to do
     *   combat.banish(monster1).kill(monster2)
     * instead of
     *   combat.action("banish", monster1).action("kill", monster2)
     *
     * Example usage:
     *   const myActions = ["kill", "banish"] as const;
     *   class MyCombatStrategy extends CombatStrategy.withActions(myActions) {}
     *
     *   const foo: MyCombatStrategy = new MyCombatStrategy();
     *   const bar: MyCombatStrategy = foo.banish($monster`crate`).kill($monster`tumbleweed`);
     */

  }], [{
    key: "withActions",
    value: function withActions(actions) {
      var CombatStrategyWithActions = /*#__PURE__*/function (_this) {
        dist_combat_inherits(CombatStrategyWithActions, _this);

        var _super = dist_combat_createSuper(CombatStrategyWithActions);

        function CombatStrategyWithActions() {
          dist_combat_classCallCheck(this, CombatStrategyWithActions);

          return _super.apply(this, arguments);
        }

        return CombatStrategyWithActions;
      }(this); // eslint-disable-next-line @typescript-eslint/no-explicit-any


      var proto = CombatStrategyWithActions.prototype;

      var _iterator10 = dist_combat_createForOfIteratorHelper(actions),
          _step10;

      try {
        var _loop = function _loop() {
          var action = _step10.value;

          proto[action] = function (monsters) {
            return this.action(action, monsters);
          };
        };

        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          _loop();
        } // eslint-disable-next-line @typescript-eslint/no-explicit-any

      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }

      return CombatStrategyWithActions;
    }
  }]);

  return CombatStrategy;
}();
/**
 * A class to build a macro that combines if statements (keyed on monster) with
 * identical body into a single if statement, to avoid the 37-action limit.
 * Ex: [if x; A; if y; B; if z; A;] will turn into [if x || z; A; if y; B]
 */

var CompressedMacro = /*#__PURE__*/function () {
  function CompressedMacro() {
    dist_combat_classCallCheck(this, CompressedMacro);

    this.components = new Map();
  }
  /**
   * Set the macro for a given monster (replacing any previous macros).
   */


  dist_combat_createClass(CompressedMacro, [{
    key: "add",
    value: function add(monster, macro) {
      var _a;

      var macro_text = macro.toString();
      if (macro_text.length === 0) return;
      if (!this.components.has(macro_text)) this.components.set(macro_text, [monster]);else (_a = this.components.get(macro_text)) === null || _a === void 0 ? void 0 : _a.push(monster);
    }
    /**
     * Compile the compressed form of the macro.
     */

  }, {
    key: "compile",
    value: function compile() {
      var result = new Macro();
      this.components.forEach((monsters, macro) => {
        var condition = monsters.map(mon => "monsterid ".concat(mon.id)).join(" || ");
        result.if_(condition, macro);
      });
      return result;
    }
  }]);

  return CompressedMacro;
}();
/**
 * A class for providing resources to fulfil combat actions.
 */


var CombatResources = /*#__PURE__*/function () {
  function CombatResources() {
    dist_combat_classCallCheck(this, CombatResources);

    this.resources = new Map();
  }
  /**
   * Use the provided resource to fulfil the provided action.
   * (If the resource is undefined, this does nothing).
   */


  dist_combat_createClass(CombatResources, [{
    key: "provide",
    value: function provide(action, resource) {
      if (resource === undefined) return;
      this.resources.set(action, resource);
    }
    /**
     * Return true if the provided action has a resource provided.
     */

  }, {
    key: "has",
    value: function has(action) {
      return this.resources.has(action);
    }
    /**
     * Return all provided combat resources.
     */

  }, {
    key: "all",
    value: function all() {
      return Array.from(this.resources.values());
    }
    /**
     * Get the macro provided by the resource for this action, or undefined if
     * no resource was provided.
     */

  }, {
    key: "getMacro",
    value: function getMacro(action) {
      var resource = this.resources.get(action);
      if (resource === undefined) return undefined;
      if (resource.do instanceof external_kolmafia_namespaceObject.Item) return new Macro().item(resource.do);
      if (resource.do instanceof external_kolmafia_namespaceObject.Skill) return new Macro().skill(resource.do);
      return undelay(resource.do);
    }
  }]);

  return CombatResources;
}();
;// CONCATENATED MODULE: ./node_modules/libram/dist/logger.js
function logger_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function logger_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function logger_createClass(Constructor, protoProps, staticProps) { if (protoProps) logger_defineProperties(Constructor.prototype, protoProps); if (staticProps) logger_defineProperties(Constructor, staticProps); return Constructor; }

function logger_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var defaultHandlers = {
  info: message => {
    (0,external_kolmafia_namespaceObject.printHtml)("<b>[Libram]</b> ".concat(message));
    (0,external_kolmafia_namespaceObject.logprint)("[Libram] ".concat(message));
  },
  warning: message => {
    (0,external_kolmafia_namespaceObject.printHtml)("<span style=\"background: orange; color: white;\"><b>[Libram]</b> ".concat(message, "</span>"));
    (0,external_kolmafia_namespaceObject.logprint)("[Libram] ".concat(message));
  },
  error: _error => {
    (0,external_kolmafia_namespaceObject.printHtml)("<span style=\"background: red; color: white;\"><b>[Libram]</b> ".concat(_error.toString(), "</span>"));
    (0,external_kolmafia_namespaceObject.logprint)("[Libram] ".concat(_error.toString()));
  }
};

var Logger = /*#__PURE__*/function () {
  function Logger() {
    logger_classCallCheck(this, Logger);

    logger_defineProperty(this, "handlers", defaultHandlers);
  }

  logger_createClass(Logger, [{
    key: "setHandler",
    value: // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function setHandler(level, callback) {
      this.handlers[level] = callback;
    } // eslint-disable-next-line @typescript-eslint/no-explicit-any

  }, {
    key: "log",
    value: function log(level, message) {
      this.handlers[level](message);
    }
  }, {
    key: "info",
    value: function info(message) {
      this.log("info", message);
    }
  }, {
    key: "warning",
    value: function warning(message) {
      this.log("warning", message);
    }
  }, {
    key: "error",
    value: function error(message) {
      this.log("error", message);
    }
  }]);

  return Logger;
}();

/* harmony default export */ const logger = (new Logger());
;// CONCATENATED MODULE: ./node_modules/libram/dist/maximize.js
var maximize_templateObject, maximize_templateObject2, maximize_templateObject3, maximize_templateObject4, maximize_templateObject5, maximize_templateObject6, maximize_templateObject7, maximize_templateObject8, maximize_templateObject9, maximize_templateObject10, maximize_templateObject11, maximize_templateObject12, maximize_templateObject13, maximize_templateObject14, maximize_templateObject15, maximize_templateObject16, maximize_templateObject17, maximize_templateObject18, maximize_templateObject19, maximize_templateObject20, maximize_templateObject21, maximize_templateObject22, maximize_templateObject23, maximize_templateObject24, maximize_templateObject25, maximize_templateObject26, maximize_templateObject27, maximize_templateObject28, maximize_templateObject29, maximize_templateObject30, maximize_templateObject31, maximize_templateObject32, maximize_templateObject33, maximize_templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48;

function maximize_slicedToArray(arr, i) { return maximize_arrayWithHoles(arr) || maximize_iterableToArrayLimit(arr, i) || maximize_unsupportedIterableToArray(arr, i) || maximize_nonIterableRest(); }

function maximize_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function maximize_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function maximize_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function maximize_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function maximize_createClass(Constructor, protoProps, staticProps) { if (protoProps) maximize_defineProperties(Constructor.prototype, protoProps); if (staticProps) maximize_defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function maximize_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function maximize_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = maximize_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function maximize_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function maximize_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function maximize_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { maximize_ownKeys(Object(source), true).forEach(function (key) { maximize_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { maximize_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function maximize_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function maximize_toConsumableArray(arr) { return maximize_arrayWithoutHoles(arr) || maximize_iterableToArray(arr) || maximize_unsupportedIterableToArray(arr) || maximize_nonIterableSpread(); }

function maximize_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function maximize_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return maximize_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return maximize_arrayLikeToArray(o, minLen); }

function maximize_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function maximize_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return maximize_arrayLikeToArray(arr); }

function maximize_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





/**
 * Merges a Partial<MaximizeOptions> onto a MaximizeOptions. We merge via overriding for all boolean properties and for onlySlot, and concat all other array properties.
 * @param defaultOptions MaximizeOptions to use as a "base."
 * @param addendums Options to attempt to merge onto defaultOptions.
 */

function mergeMaximizeOptions(defaultOptions, addendums) {
  var _addendums$updateOnFa, _addendums$updateOnCa, _addendums$useOutfitC, _addendums$forceEquip, _addendums$preventEqu, _addendums$bonusEquip, _addendums$onlySlot, _addendums$preventSlo, _addendums$forceUpdat, _addendums$modes;

  return {
    updateOnFamiliarChange: (_addendums$updateOnFa = addendums.updateOnFamiliarChange) !== null && _addendums$updateOnFa !== void 0 ? _addendums$updateOnFa : defaultOptions.updateOnFamiliarChange,
    updateOnCanEquipChanged: (_addendums$updateOnCa = addendums.updateOnCanEquipChanged) !== null && _addendums$updateOnCa !== void 0 ? _addendums$updateOnCa : defaultOptions.updateOnCanEquipChanged,
    useOutfitCaching: (_addendums$useOutfitC = addendums.useOutfitCaching) !== null && _addendums$useOutfitC !== void 0 ? _addendums$useOutfitC : defaultOptions.useOutfitCaching,
    forceEquip: [].concat(maximize_toConsumableArray(defaultOptions.forceEquip), maximize_toConsumableArray((_addendums$forceEquip = addendums.forceEquip) !== null && _addendums$forceEquip !== void 0 ? _addendums$forceEquip : [])),
    preventEquip: [].concat(maximize_toConsumableArray(defaultOptions.preventEquip), maximize_toConsumableArray((_addendums$preventEqu = addendums.preventEquip) !== null && _addendums$preventEqu !== void 0 ? _addendums$preventEqu : [])).filter(item => {
      var _addendums$forceEquip2;

      return !defaultOptions.forceEquip.includes(item) && !((_addendums$forceEquip2 = addendums.forceEquip) !== null && _addendums$forceEquip2 !== void 0 && _addendums$forceEquip2.includes(item));
    }),
    bonusEquip: new Map([].concat(maximize_toConsumableArray(defaultOptions.bonusEquip), maximize_toConsumableArray((_addendums$bonusEquip = addendums.bonusEquip) !== null && _addendums$bonusEquip !== void 0 ? _addendums$bonusEquip : []))),
    onlySlot: (_addendums$onlySlot = addendums.onlySlot) !== null && _addendums$onlySlot !== void 0 ? _addendums$onlySlot : defaultOptions.onlySlot,
    preventSlot: [].concat(maximize_toConsumableArray(defaultOptions.preventSlot), maximize_toConsumableArray((_addendums$preventSlo = addendums.preventSlot) !== null && _addendums$preventSlo !== void 0 ? _addendums$preventSlo : [])),
    forceUpdate: (_addendums$forceUpdat = addendums.forceUpdate) !== null && _addendums$forceUpdat !== void 0 ? _addendums$forceUpdat : defaultOptions.forceUpdate,
    modes: maximize_objectSpread(maximize_objectSpread({}, defaultOptions.modes), (_addendums$modes = addendums.modes) !== null && _addendums$modes !== void 0 ? _addendums$modes : {})
  };
}
var defaultMaximizeOptions = {
  updateOnFamiliarChange: true,
  updateOnCanEquipChanged: true,
  useOutfitCaching: true,
  forceEquip: [],
  preventEquip: [],
  bonusEquip: new Map(),
  onlySlot: [],
  preventSlot: [],
  forceUpdate: false,
  modes: {}
};
/**
 *
 * @param options Default options for each maximizer run.
 * @param options.updateOnFamiliarChange Re-run the maximizer if familiar has changed. Default true.
 * @param options.updateOnCanEquipChanged Re-run the maximizer if stats have changed what can be equipped. Default true.
 * @param options.forceEquip Equipment to force-equip ("equip X").
 * @param options.preventEquip Equipment to prevent equipping ("-equip X").
 * @param options.bonusEquip Equipment to apply a bonus to ("200 bonus X").
 */

function setDefaultMaximizeOptions(options) {
  Object.assign(defaultMaximizeOptions, options);
}
var modeableCommands = ["backupcamera", "umbrella", "snowsuit", "edpiece", "retrocape", "parka"];
var modeableItems = {
  backupcamera: template_string_$item(maximize_templateObject || (maximize_templateObject = maximize_taggedTemplateLiteral(["backup camera"]))),
  umbrella: template_string_$item(maximize_templateObject2 || (maximize_templateObject2 = maximize_taggedTemplateLiteral(["unbreakable umbrella"]))),
  snowsuit: template_string_$item(maximize_templateObject3 || (maximize_templateObject3 = maximize_taggedTemplateLiteral(["Snow Suit"]))),
  edpiece: template_string_$item(maximize_templateObject4 || (maximize_templateObject4 = maximize_taggedTemplateLiteral(["The Crown of Ed the Undying"]))),
  retrocape: template_string_$item(maximize_templateObject5 || (maximize_templateObject5 = maximize_taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"]))),
  parka: template_string_$item(maximize_templateObject6 || (maximize_templateObject6 = maximize_taggedTemplateLiteral(["Jurassic Parka"])))
};
var modeableState = {
  backupcamera: () => (0,external_kolmafia_namespaceObject.getProperty)("backupCameraMode"),
  umbrella: () => (0,external_kolmafia_namespaceObject.getProperty)("umbrellaState"),
  snowsuit: () => (0,external_kolmafia_namespaceObject.getProperty)("snowsuit"),
  edpiece: () => (0,external_kolmafia_namespaceObject.getProperty)("edPiece"),
  retrocape: () => (0,external_kolmafia_namespaceObject.getProperty)("retroCapeSuperhero") + " " + (0,external_kolmafia_namespaceObject.getProperty)("retroCapeWashingInstructions"),
  parka: () => (0,external_kolmafia_namespaceObject.getProperty)("parkaMode")
};
function getCurrentModes() {
  var modes = {};

  var _iterator = maximize_createForOfIteratorHelper(modeableCommands),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;

      if ((0,external_kolmafia_namespaceObject.haveEquipped)(modeableItems[key])) {
        modes[key] = modeableState[key]();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return modes;
}
function applyModes(modes) {
  var _iterator2 = maximize_createForOfIteratorHelper(modeableCommands),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var command = _step2.value;

      if ((0,external_kolmafia_namespaceObject.haveEquipped)(modeableItems[command]) && modes[command] !== undefined) {
        if (modeableState[command]() !== modes[command]) {
          (0,external_kolmafia_namespaceObject.cliExecute)(command + " " + modes[command]);
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
} // Subset of slots that are valid for caching.

var cachedSlots = $slots(maximize_templateObject7 || (maximize_templateObject7 = maximize_taggedTemplateLiteral(["hat, weapon, off-hand, back, shirt, pants, acc1, acc2, acc3, familiar"])));

var CacheEntry = function CacheEntry(equipment, rider, familiar, canEquipItemCount, modes) {
  maximize_classCallCheck(this, CacheEntry);

  maximize_defineProperty(this, "equipment", void 0);

  maximize_defineProperty(this, "rider", void 0);

  maximize_defineProperty(this, "familiar", void 0);

  maximize_defineProperty(this, "canEquipItemCount", void 0);

  maximize_defineProperty(this, "modes", void 0);

  this.equipment = equipment;
  this.rider = rider;
  this.familiar = familiar;
  this.canEquipItemCount = canEquipItemCount;
  this.modes = modes;
};

var _outfitSlots = /*#__PURE__*/new WeakMap();

var _useHistory = /*#__PURE__*/new WeakMap();

var _maxSize = /*#__PURE__*/new WeakMap();

var OutfitLRUCache = /*#__PURE__*/function () {
  // Current outfits allocated
  // Array of indices into #outfitSlots in order of use. Most recent at the front.
  function OutfitLRUCache(maxSize) {
    maximize_classCallCheck(this, OutfitLRUCache);

    _outfitSlots.set(this, {
      writable: true,
      value: []
    });

    _useHistory.set(this, {
      writable: true,
      value: []
    });

    _maxSize.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _maxSize, maxSize);
  }

  maximize_createClass(OutfitLRUCache, [{
    key: "checkConsistent",
    value: function checkConsistent() {
      if (_classPrivateFieldGet(this, _useHistory).length !== _classPrivateFieldGet(this, _outfitSlots).length || !maximize_toConsumableArray(_classPrivateFieldGet(this, _useHistory)).sort().every((value, index) => value === index)) {
        throw new Error("Outfit cache consistency failed.");
      }
    }
  }, {
    key: "promote",
    value: function promote(index) {
      _classPrivateFieldSet(this, _useHistory, [index].concat(maximize_toConsumableArray(_classPrivateFieldGet(this, _useHistory).filter(i => i !== index))));

      this.checkConsistent();
    }
  }, {
    key: "get",
    value: function get(key) {
      var index = _classPrivateFieldGet(this, _outfitSlots).indexOf(key);

      if (index < 0) return undefined;
      this.promote(index);
      return "".concat(OutfitLRUCache.OUTFIT_PREFIX, " ").concat(index);
    }
  }, {
    key: "insert",
    value: function insert(key) {
      var lastUseIndex = undefined;

      if (_classPrivateFieldGet(this, _outfitSlots).length >= _classPrivateFieldGet(this, _maxSize)) {
        lastUseIndex = _classPrivateFieldGet(this, _useHistory).pop();

        if (lastUseIndex === undefined) {
          throw new Error("Outfit cache consistency failed.");
        }

        _classPrivateFieldGet(this, _useHistory).splice(0, 0, lastUseIndex);

        _classPrivateFieldGet(this, _outfitSlots)[lastUseIndex] = key;
        this.checkConsistent();
        return "".concat(OutfitLRUCache.OUTFIT_PREFIX, " ").concat(lastUseIndex);
      } else {
        var index = _classPrivateFieldGet(this, _outfitSlots).push(key) - 1;

        _classPrivateFieldGet(this, _useHistory).splice(0, 0, index);

        this.checkConsistent();
        return "".concat(OutfitLRUCache.OUTFIT_PREFIX, " ").concat(index);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      _classPrivateFieldSet(this, _outfitSlots, []);

      _classPrivateFieldSet(this, _useHistory, []);
    }
  }]);

  return OutfitLRUCache;
}();
/**
 * Save current equipment as KoL-native outfit.
 * @param name Name of new outfit.
 */


maximize_defineProperty(OutfitLRUCache, "OUTFIT_PREFIX", "Script Outfit");

function saveOutfit(name) {
  (0,external_kolmafia_namespaceObject.cliExecute)("outfit save ".concat(name));
} // Objective cache entries.


var cachedObjectives = {}; // Outfit cache entries. Keep 6 by default to avoid cluttering list.

var outfitCache = new OutfitLRUCache(6); // Cache to prevent rescanning all items unnecessarily

var cachedStats = [0, 0, 0];
var cachedCanEquipItemCount = 0;
/**
 * Count the number of unique items that can be equipped.
 * @returns The count of unique items.
 */

function canEquipItemCount() {
  var stats = $stats(maximize_templateObject8 || (maximize_templateObject8 = maximize_taggedTemplateLiteral(["Muscle, Mysticality, Moxie"]))).map(stat => Math.min((0,external_kolmafia_namespaceObject.myBasestat)(stat), 300));

  if (stats.every((value, index) => value === cachedStats[index])) {
    return cachedCanEquipItemCount;
  }

  cachedStats = stats;
  cachedCanEquipItemCount = external_kolmafia_namespaceObject.Item.all().filter(item => (0,external_kolmafia_namespaceObject.canEquip)(item)).length;
  return cachedCanEquipItemCount;
}
/**
 * Checks the objective cache for a valid entry.
 * @param cacheKey The cache key to check.
 * @param updateOnFamiliarChange Ignore cache if familiar has changed.
 * @param updateOnCanEquipChanged Ignore cache if stats have changed what can be equipped.
 * @returns A valid CacheEntry or null.
 */


function checkCache(cacheKey, options) {
  var entry = cachedObjectives[cacheKey];

  if (!entry) {
    return null;
  }

  if (options.updateOnFamiliarChange && (0,external_kolmafia_namespaceObject.myFamiliar)() !== entry.familiar) {
    logger.warning("Equipment found in maximize cache but familiar is different.");
    return null;
  }

  if (options.updateOnCanEquipChanged && entry.canEquipItemCount !== canEquipItemCount()) {
    logger.warning("Equipment found in maximize cache but equippable item list is out of date.");
    return null;
  }

  return entry;
}
/**
 * Applies equipment that was found in the cache.
 * @param entry The CacheEntry to apply
 */


function applyCached(entry, options) {
  var outfitName = options.useOutfitCaching ? outfitCache.get(entry) : undefined;

  if (outfitName) {
    if (!(0,external_kolmafia_namespaceObject.isWearingOutfit)(outfitName)) {
      (0,external_kolmafia_namespaceObject.outfit)(outfitName);
    }

    var familiarEquip = entry.equipment.get($slot(maximize_templateObject9 || (maximize_templateObject9 = maximize_taggedTemplateLiteral(["familiar"]))));
    if (familiarEquip) (0,external_kolmafia_namespaceObject.equip)($slot(maximize_templateObject10 || (maximize_templateObject10 = maximize_taggedTemplateLiteral(["familiar"]))), familiarEquip);
  } else {
    var _iterator3 = maximize_createForOfIteratorHelper(entry.equipment),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _step3$value = maximize_slicedToArray(_step3.value, 2),
            slot = _step3$value[0],
            item = _step3$value[1];

        if ((0,external_kolmafia_namespaceObject.equippedItem)(slot) !== item && (0,external_kolmafia_namespaceObject.availableAmount)(item) > 0) {
          (0,external_kolmafia_namespaceObject.equip)(slot, item);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    if (verifyCached(entry) && options.useOutfitCaching) {
      var _outfitName = outfitCache.insert(entry);

      logger.info("Saving equipment to outfit ".concat(_outfitName, "."));
      saveOutfit(_outfitName);
    }
  }

  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject11 || (maximize_templateObject11 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))) > 0 && entry.rider.get(template_string_$item(maximize_templateObject12 || (maximize_templateObject12 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))))) {
    (0,external_kolmafia_namespaceObject.enthroneFamiliar)(entry.rider.get(template_string_$item(maximize_templateObject13 || (maximize_templateObject13 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))) || template_string_$familiar.none);
  }

  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject14 || (maximize_templateObject14 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))) > 0 && entry.rider.get(template_string_$item(maximize_templateObject15 || (maximize_templateObject15 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))))) {
    (0,external_kolmafia_namespaceObject.bjornifyFamiliar)(entry.rider.get(template_string_$item(maximize_templateObject16 || (maximize_templateObject16 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))) || template_string_$familiar.none);
  }

  applyModes(maximize_objectSpread(maximize_objectSpread({}, entry.modes), options.modes));
}

var slotStructure = [$slots(maximize_templateObject17 || (maximize_templateObject17 = maximize_taggedTemplateLiteral(["hat"]))), $slots(maximize_templateObject18 || (maximize_templateObject18 = maximize_taggedTemplateLiteral(["back"]))), $slots(maximize_templateObject19 || (maximize_templateObject19 = maximize_taggedTemplateLiteral(["shirt"]))), $slots(maximize_templateObject20 || (maximize_templateObject20 = maximize_taggedTemplateLiteral(["weapon, off-hand"]))), $slots(maximize_templateObject21 || (maximize_templateObject21 = maximize_taggedTemplateLiteral(["pants"]))), $slots(maximize_templateObject22 || (maximize_templateObject22 = maximize_taggedTemplateLiteral(["acc1, acc2, acc3"]))), $slots(maximize_templateObject23 || (maximize_templateObject23 = maximize_taggedTemplateLiteral(["familiar"])))];
/**
 * Verifies that a CacheEntry was applied successfully.
 * @param entry The CacheEntry to verify
 * @returns If all desired equipment was appliedn in the correct slots.
 */

function verifyCached(entry) {
  var warn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var success = true;

  var _iterator4 = maximize_createForOfIteratorHelper(slotStructure),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var slotGroup = _step4.value;
      var desiredSlots = slotGroup.map(slot => {
        var _entry$equipment$get;

        return [slot, (_entry$equipment$get = entry.equipment.get(slot)) !== null && _entry$equipment$get !== void 0 ? _entry$equipment$get : null];
      }).filter(_ref => {
        var _ref2 = maximize_slicedToArray(_ref, 2),
            item = _ref2[1];

        return item !== null;
      });
      var desiredSet = desiredSlots.map(_ref3 => {
        var _ref4 = maximize_slicedToArray(_ref3, 2),
            item = _ref4[1];

        return item;
      });
      var equippedSet = desiredSlots.map(_ref5 => {
        var _ref6 = maximize_slicedToArray(_ref5, 1),
            slot = _ref6[0];

        return (0,external_kolmafia_namespaceObject.equippedItem)(slot);
      });

      if (!setEqual(desiredSet, equippedSet)) {
        if (warn) {
          logger.warning("Failed to apply cached ".concat(desiredSet.join(", "), " in ").concat(slotGroup.join(", "), "."));
        }

        success = false;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject24 || (maximize_templateObject24 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))) > 0 && entry.rider.get(template_string_$item(maximize_templateObject25 || (maximize_templateObject25 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))))) {
    if (entry.rider.get(template_string_$item(maximize_templateObject26 || (maximize_templateObject26 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))) !== (0,external_kolmafia_namespaceObject.myEnthronedFamiliar)()) {
      if (warn) {
        logger.warning("Failed to apply ".concat(entry.rider.get(template_string_$item(maximize_templateObject27 || (maximize_templateObject27 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))), " in ").concat(template_string_$item(maximize_templateObject28 || (maximize_templateObject28 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))), "."));
      }

      success = false;
    }
  }

  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject29 || (maximize_templateObject29 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))) > 0 && entry.rider.get(template_string_$item(maximize_templateObject30 || (maximize_templateObject30 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))))) {
    if (entry.rider.get(template_string_$item(maximize_templateObject31 || (maximize_templateObject31 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))) !== (0,external_kolmafia_namespaceObject.myBjornedFamiliar)()) {
      if (warn) {
        logger.warning("Failed to apply".concat(entry.rider.get(template_string_$item(maximize_templateObject32 || (maximize_templateObject32 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))), " in ").concat(template_string_$item(maximize_templateObject33 || (maximize_templateObject33 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))), "."));
      }

      success = false;
    }
  }

  return success;
}
/**
 * Save current equipment to the objective cache.
 * @param cacheKey The cache key to save.
 */


function saveCached(cacheKey, options) {
  var equipment = new Map();
  var rider = new Map();

  var _iterator5 = maximize_createForOfIteratorHelper(cachedSlots),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var _slot2 = _step5.value;
      equipment.set(_slot2, (0,external_kolmafia_namespaceObject.equippedItem)(_slot2));
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject34 || (maximize_templateObject34 = maximize_taggedTemplateLiteral(["card sleeve"])))) > 0) {
    equipment.set($slot(_templateObject35 || (_templateObject35 = maximize_taggedTemplateLiteral(["card-sleeve"]))), (0,external_kolmafia_namespaceObject.equippedItem)($slot(_templateObject36 || (_templateObject36 = maximize_taggedTemplateLiteral(["card-sleeve"])))));
  }

  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(_templateObject37 || (_templateObject37 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))) > 0) {
    rider.set(template_string_$item(_templateObject38 || (_templateObject38 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))), (0,external_kolmafia_namespaceObject.myEnthronedFamiliar)());
  }

  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(_templateObject39 || (_templateObject39 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))) > 0) {
    rider.set(template_string_$item(_templateObject40 || (_templateObject40 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))), (0,external_kolmafia_namespaceObject.myBjornedFamiliar)());
  }

  if (options.preventSlot && options.preventSlot.length > 0) {
    var _iterator6 = maximize_createForOfIteratorHelper(options.preventSlot),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var slot = _step6.value;
        equipment.delete(slot);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }

    if (options.preventSlot.includes($slot(_templateObject41 || (_templateObject41 = maximize_taggedTemplateLiteral(["buddy-bjorn"]))))) {
      rider.delete(template_string_$item(_templateObject42 || (_templateObject42 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))));
    }

    if (options.preventSlot.includes($slot(_templateObject43 || (_templateObject43 = maximize_taggedTemplateLiteral(["crown-of-thrones"]))))) {
      rider.delete(template_string_$item(_templateObject44 || (_templateObject44 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))));
    }
  }

  if (options.onlySlot && options.onlySlot.length > 0) {
    var _iterator7 = maximize_createForOfIteratorHelper(external_kolmafia_namespaceObject.Slot.all()),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var _slot = _step7.value;

        if (!options.onlySlot.includes(_slot)) {
          equipment.delete(_slot);
        }
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }

    if (!options.onlySlot.includes($slot(_templateObject45 || (_templateObject45 = maximize_taggedTemplateLiteral(["buddy-bjorn"]))))) {
      rider.delete(template_string_$item(_templateObject46 || (_templateObject46 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))));
    }

    if (!options.onlySlot.includes($slot(_templateObject47 || (_templateObject47 = maximize_taggedTemplateLiteral(["crown-of-thrones"]))))) {
      rider.delete(template_string_$item(_templateObject48 || (_templateObject48 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))));
    }
  }

  var entry = new CacheEntry(equipment, rider, (0,external_kolmafia_namespaceObject.myFamiliar)(), canEquipItemCount(), maximize_objectSpread(maximize_objectSpread({}, getCurrentModes()), options.modes));
  cachedObjectives[cacheKey] = entry;

  if (options.useOutfitCaching) {
    var outfitName = outfitCache.insert(entry);
    logger.info("Saving equipment to outfit ".concat(outfitName, "."));
    saveOutfit(outfitName);
  }
}
/**
 * Run the maximizer, but only if the objective and certain pieces of game state haven't changed since it was last run.
 * @param objectives Objectives to maximize for.
 * @param options Options for this run of the maximizer.
 * @param options.updateOnFamiliarChange Re-run the maximizer if familiar has changed. Default true.
 * @param options.updateOnCanEquipChanged Re-run the maximizer if stats have changed what can be equipped. Default true.
 * @param options.forceEquip Equipment to force-equip ("equip X").
 * @param options.preventEquip Equipment to prevent equipping ("-equip X").
 * @param options.bonusEquip Equipment to apply a bonus to ("200 bonus X").
 * @returns Whether the maximize call succeeded.
 */


function maximizeCached(objectives) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fullOptions = mergeMaximizeOptions(defaultMaximizeOptions, options);
  var forceEquip = fullOptions.forceEquip,
      preventEquip = fullOptions.preventEquip,
      bonusEquip = fullOptions.bonusEquip,
      onlySlot = fullOptions.onlySlot,
      preventSlot = fullOptions.preventSlot,
      forceUpdate = fullOptions.forceUpdate; // Sort each group in objective to ensure consistent ordering in string

  var objective = maximize_toConsumableArray(new Set([].concat(maximize_toConsumableArray(objectives.sort()), maximize_toConsumableArray(forceEquip.map(item => "equip ".concat(item)).sort()), maximize_toConsumableArray(preventEquip.map(item => "-equip ".concat(item)).sort()), maximize_toConsumableArray(onlySlot.map(slot => "".concat(slot)).sort()), maximize_toConsumableArray(preventSlot.map(slot => "-".concat(slot)).sort()), maximize_toConsumableArray(Array.from(bonusEquip.entries()).filter(_ref7 => {
    var _ref8 = maximize_slicedToArray(_ref7, 2),
        bonus = _ref8[1];

    return bonus !== 0;
  }).map(_ref9 => {
    var _ref10 = maximize_slicedToArray(_ref9, 2),
        item = _ref10[0],
        bonus = _ref10[1];

    return "".concat(Math.round(bonus * 100) / 100, " bonus ").concat(item);
  }).sort())))).join(", "); // Items equipped in slots not touched by the maximizer must be in the cache key


  var untouchedSlots = cachedSlots.filter(slot => preventSlot.includes(slot) || onlySlot.length > 0 && !onlySlot.includes(slot));
  var cacheKey = [objective].concat(maximize_toConsumableArray(untouchedSlots.map(slot => "".concat(slot, ":").concat((0,external_kolmafia_namespaceObject.equippedItem)(slot))).sort())).join("; ");
  var cacheEntry = checkCache(cacheKey, fullOptions);

  if (cacheEntry && !forceUpdate) {
    if (verifyCached(cacheEntry, false)) return true;
    logger.info("Equipment found in maximize cache, equipping...");
    applyCached(cacheEntry, fullOptions);

    if (verifyCached(cacheEntry)) {
      logger.info("Equipped cached ".concat(cacheKey));
      return true;
    }

    logger.warning("Maximize cache application failed, maximizing...");
  }

  var result = (0,external_kolmafia_namespaceObject.maximize)(objective, false);
  saveCached(cacheKey, fullOptions);
  return result;
}

var _maximizeParameters = /*#__PURE__*/new WeakMap();

var _maximizeOptions = /*#__PURE__*/new WeakMap();

var Requirement = /*#__PURE__*/function () {
  /**
   * A convenient way of combining maximization parameters and options
   * @param maximizeParameters Parameters you're attempting to maximize
   * @param maximizeOptions Object potentially containing forceEquips, bonusEquips, preventEquips, and preventSlots
   */
  function Requirement(maximizeParameters, maximizeOptions) {
    maximize_classCallCheck(this, Requirement);

    _maximizeParameters.set(this, {
      writable: true,
      value: void 0
    });

    _maximizeOptions.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _maximizeParameters, maximizeParameters);

    _classPrivateFieldSet(this, _maximizeOptions, maximizeOptions);
  }

  maximize_createClass(Requirement, [{
    key: "maximizeParameters",
    get: function get() {
      return _classPrivateFieldGet(this, _maximizeParameters);
    }
  }, {
    key: "maximizeOptions",
    get: function get() {
      return _classPrivateFieldGet(this, _maximizeOptions);
    }
    /**
     * Merges two requirements, concanating relevant arrays. Typically used in static form.
     * @param other Requirement to merge with.
     */

  }, {
    key: "merge",
    value: function merge(other) {
      var _optionsA$forceEquip, _other$maximizeOption, _optionsA$preventEqui, _other$maximizeOption3, _optionsA$bonusEquip$, _optionsA$bonusEquip, _optionsB$bonusEquip$, _optionsB$bonusEquip, _optionsA$onlySlot, _optionsB$onlySlot, _optionsA$preventSlot, _optionsB$preventSlot;

      var optionsA = this.maximizeOptions;
      var optionsB = other.maximizeOptions;
      return new Requirement([].concat(maximize_toConsumableArray(this.maximizeParameters), maximize_toConsumableArray(other.maximizeParameters)), {
        updateOnFamiliarChange: optionsA.updateOnFamiliarChange || other.maximizeOptions.updateOnFamiliarChange,
        updateOnCanEquipChanged: optionsA.updateOnCanEquipChanged || other.maximizeOptions.updateOnCanEquipChanged,
        forceEquip: [].concat(maximize_toConsumableArray((_optionsA$forceEquip = optionsA.forceEquip) !== null && _optionsA$forceEquip !== void 0 ? _optionsA$forceEquip : []), maximize_toConsumableArray((_other$maximizeOption = other.maximizeOptions.forceEquip) !== null && _other$maximizeOption !== void 0 ? _other$maximizeOption : [])).filter(x => {
          var _other$maximizeOption2;

          return !((_other$maximizeOption2 = other.maximizeOptions.preventEquip) !== null && _other$maximizeOption2 !== void 0 && _other$maximizeOption2.includes(x));
        }),
        preventEquip: [].concat(maximize_toConsumableArray((_optionsA$preventEqui = optionsA.preventEquip) !== null && _optionsA$preventEqui !== void 0 ? _optionsA$preventEqui : []), maximize_toConsumableArray((_other$maximizeOption3 = other.maximizeOptions.preventEquip) !== null && _other$maximizeOption3 !== void 0 ? _other$maximizeOption3 : [])).filter(x => {
          var _other$maximizeOption4;

          return !((_other$maximizeOption4 = other.maximizeOptions.forceEquip) !== null && _other$maximizeOption4 !== void 0 && _other$maximizeOption4.includes(x));
        }),
        bonusEquip: new Map([].concat(maximize_toConsumableArray((_optionsA$bonusEquip$ = (_optionsA$bonusEquip = optionsA.bonusEquip) === null || _optionsA$bonusEquip === void 0 ? void 0 : _optionsA$bonusEquip.entries()) !== null && _optionsA$bonusEquip$ !== void 0 ? _optionsA$bonusEquip$ : []), maximize_toConsumableArray((_optionsB$bonusEquip$ = (_optionsB$bonusEquip = optionsB.bonusEquip) === null || _optionsB$bonusEquip === void 0 ? void 0 : _optionsB$bonusEquip.entries()) !== null && _optionsB$bonusEquip$ !== void 0 ? _optionsB$bonusEquip$ : []))),
        onlySlot: [].concat(maximize_toConsumableArray((_optionsA$onlySlot = optionsA.onlySlot) !== null && _optionsA$onlySlot !== void 0 ? _optionsA$onlySlot : []), maximize_toConsumableArray((_optionsB$onlySlot = optionsB.onlySlot) !== null && _optionsB$onlySlot !== void 0 ? _optionsB$onlySlot : [])),
        preventSlot: [].concat(maximize_toConsumableArray((_optionsA$preventSlot = optionsA.preventSlot) !== null && _optionsA$preventSlot !== void 0 ? _optionsA$preventSlot : []), maximize_toConsumableArray((_optionsB$preventSlot = optionsB.preventSlot) !== null && _optionsB$preventSlot !== void 0 ? _optionsB$preventSlot : [])),
        forceUpdate: optionsA.forceUpdate || optionsB.forceUpdate
      });
    }
    /**
     * Merges a set of requirements together, starting with an empty requirement.
     * @param allRequirements Requirements to merge
     */

  }, {
    key: "maximize",
    value:
    /**
     * Runs maximizeCached, using the maximizeParameters and maximizeOptions contained by this requirement.
     * @returns Whether the maximize call succeeded.
     */
    function maximize() {
      return maximizeCached(this.maximizeParameters, this.maximizeOptions);
    }
    /**
     * Merges requirements, and then runs maximizeCached on the combined requirement.
     * @param requirements Requirements to maximize on
     */

  }], [{
    key: "merge",
    value: function merge(allRequirements) {
      return allRequirements.reduce((x, y) => x.merge(y), new Requirement([], {}));
    }
  }, {
    key: "maximize",
    value: function maximize() {
      for (var _len = arguments.length, requirements = new Array(_len), _key = 0; _key < _len; _key++) {
        requirements[_key] = arguments[_key];
      }

      Requirement.merge(requirements).maximize();
    }
  }]);

  return Requirement;
}();
/**
 * Clear all outfits cached by the maximizer.
 */

function clearMaximizerCache() {
  outfitCache.clear();

  for (var member in cachedObjectives) {
    delete cachedObjectives[member];
  }
}
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/outfit.js
var outfit_templateObject, outfit_templateObject2, outfit_templateObject3, outfit_templateObject4, outfit_templateObject5, outfit_templateObject6, outfit_templateObject7, outfit_templateObject8, outfit_templateObject9, outfit_templateObject10, outfit_templateObject11, outfit_templateObject12, outfit_templateObject13, outfit_templateObject14, outfit_templateObject15, outfit_templateObject16, outfit_templateObject17, outfit_templateObject18, outfit_templateObject19, outfit_templateObject20, outfit_templateObject21, outfit_templateObject22, outfit_templateObject23, outfit_templateObject24, outfit_templateObject25, outfit_templateObject26, outfit_templateObject27, outfit_templateObject28, outfit_templateObject29, outfit_templateObject30, outfit_templateObject31, outfit_templateObject32, outfit_templateObject33, outfit_templateObject34, outfit_templateObject35, outfit_templateObject36, outfit_templateObject37, outfit_templateObject38, outfit_templateObject39, outfit_templateObject40, outfit_templateObject41, outfit_templateObject42, outfit_templateObject43, outfit_templateObject44, outfit_templateObject45, outfit_templateObject46, outfit_templateObject47, outfit_templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60;

function outfit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function outfit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { outfit_ownKeys(Object(source), true).forEach(function (key) { outfit_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { outfit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function outfit_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function outfit_slicedToArray(arr, i) { return outfit_arrayWithHoles(arr) || outfit_iterableToArrayLimit(arr, i) || outfit_unsupportedIterableToArray(arr, i) || outfit_nonIterableRest(); }

function outfit_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function outfit_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function outfit_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function outfit_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = outfit_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function outfit_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function outfit_toConsumableArray(arr) { return outfit_arrayWithoutHoles(arr) || outfit_iterableToArray(arr) || outfit_unsupportedIterableToArray(arr) || outfit_nonIterableSpread(); }

function outfit_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function outfit_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return outfit_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return outfit_arrayLikeToArray(o, minLen); }

function outfit_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function outfit_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return outfit_arrayLikeToArray(arr); }

function outfit_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function outfit_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function outfit_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function outfit_createClass(Constructor, protoProps, staticProps) { if (protoProps) outfit_defineProperties(Constructor.prototype, protoProps); if (staticProps) outfit_defineProperties(Constructor, staticProps); return Constructor; }



var FORCE_REFRESH_REQUIREMENT = new Requirement([], {
  forceUpdate: true
});
var outfitSlots = ["hat", "back", "weapon", "offhand", "shirt", "pants", "acc1", "acc2", "acc3", "famequip"];
var riderSlots = (/* unused pure expression or super */ null && (["buddy-bjorn", "crown-of-thrones"]));

var weaponHands = i => i ? (0,external_kolmafia_namespaceObject.weaponHands)(i) : 0;

var outfit_modeableCommands = ["backupcamera", "umbrella", "snowsuit", "edpiece", "retrocape", "parka"];
var Outfit = /*#__PURE__*/function () {
  function Outfit() {
    outfit_classCallCheck(this, Outfit);

    this.equips = new Map();
    this.riders = new Map();
    this.modes = {};
    this.skipDefaults = false;
    this.modifier = [];
    this.avoid = [];
    this.bonuses = new Map();
  }
  /**
   * Create an outfit from your current player state.
   */


  outfit_createClass(Outfit, [{
    key: "equippedAmount",
    value:
    /**
     * Check how many of an item is equipped on the outfit.
     */
    function equippedAmount(item) {
      return outfit_toConsumableArray(this.equips.values()).filter(i => i === item).length;
    }
  }, {
    key: "isAvailable",
    value: function isAvailable(item) {
      var _a;

      if ((_a = this.avoid) === null || _a === void 0 ? void 0 : _a.includes(item)) return false;
      if (!have(item, this.equippedAmount(item) + 1)) return false;
      if ((0,external_kolmafia_namespaceObject.booleanModifier)(item, "Single Equip") && this.equippedAmount(item) > 0) return false;
      return true;
    }
    /**
     * Check whether an item is equipped on the outfit, optionally in a specific slot.
     */

  }, {
    key: "haveEquipped",
    value: function haveEquipped(item, slot) {
      if (slot === undefined) return this.equippedAmount(item) > 0;
      return this.equips.get(slot) === item;
    }
  }, {
    key: "equipItemNone",
    value: function equipItemNone(item, slot) {
      if (item !== template_string_$item.none) return false;
      if (slot === undefined) return true;
      if (this.equips.has(slot)) return false;
      this.equips.set(slot, item);
      return true;
    }
  }, {
    key: "equipNonAccessory",
    value: function equipNonAccessory(item, slot) {
      if ($slots(outfit_templateObject || (outfit_templateObject = outfit_taggedTemplateLiteral(["acc1, acc2, acc3"]))).includes((0,external_kolmafia_namespaceObject.toSlot)(item))) return false;
      if (slot !== undefined && slot !== (0,external_kolmafia_namespaceObject.toSlot)(item)) return false;
      if (this.equips.has((0,external_kolmafia_namespaceObject.toSlot)(item))) return false;

      switch ((0,external_kolmafia_namespaceObject.toSlot)(item)) {
        case $slot(outfit_templateObject2 || (outfit_templateObject2 = outfit_taggedTemplateLiteral(["off-hand"]))):
          if (this.equips.has($slot(outfit_templateObject3 || (outfit_templateObject3 = outfit_taggedTemplateLiteral(["weapon"])))) && weaponHands(this.equips.get($slot(outfit_templateObject4 || (outfit_templateObject4 = outfit_taggedTemplateLiteral(["weapon"]))))) !== 1) {
            return false;
          }

          break;

        case $slot(outfit_templateObject5 || (outfit_templateObject5 = outfit_taggedTemplateLiteral(["familiar"]))):
          if (this.familiar !== undefined && !(0,external_kolmafia_namespaceObject.canEquip)(this.familiar, item)) return false;
      }

      if ((0,external_kolmafia_namespaceObject.toSlot)(item) !== $slot(outfit_templateObject6 || (outfit_templateObject6 = outfit_taggedTemplateLiteral(["familiar"]))) && !(0,external_kolmafia_namespaceObject.canEquip)(item)) return false;
      this.equips.set((0,external_kolmafia_namespaceObject.toSlot)(item), item);
      return true;
    }
  }, {
    key: "equipAccessory",
    value: function equipAccessory(item, slot) {
      if (![undefined].concat(outfit_toConsumableArray($slots(outfit_templateObject7 || (outfit_templateObject7 = outfit_taggedTemplateLiteral(["acc1, acc2, acc3"]))))).includes(slot)) return false;
      if ((0,external_kolmafia_namespaceObject.toSlot)(item) !== $slot(outfit_templateObject8 || (outfit_templateObject8 = outfit_taggedTemplateLiteral(["acc1"])))) return false;
      if (!(0,external_kolmafia_namespaceObject.canEquip)(item)) return false;

      if (slot === undefined) {
        // We don't care which of the accessory slots we equip in
        var empty = $slots(outfit_templateObject9 || (outfit_templateObject9 = outfit_taggedTemplateLiteral(["acc1, acc2, acc3"]))).find(s => !this.equips.has(s));
        if (empty === undefined) return false;
        this.equips.set(empty, item);
      } else {
        if (this.equips.has(slot)) return false;
        this.equips.set(slot, item);
      }

      return true;
    }
  }, {
    key: "equipUsingDualWield",
    value: function equipUsingDualWield(item, slot) {
      if (![undefined, $slot(outfit_templateObject10 || (outfit_templateObject10 = outfit_taggedTemplateLiteral(["off-hand"])))].includes(slot)) return false;
      if ((0,external_kolmafia_namespaceObject.toSlot)(item) !== $slot(outfit_templateObject11 || (outfit_templateObject11 = outfit_taggedTemplateLiteral(["weapon"])))) return false;

      if (this.equips.has($slot(outfit_templateObject12 || (outfit_templateObject12 = outfit_taggedTemplateLiteral(["weapon"])))) && weaponHands(this.equips.get($slot(outfit_templateObject13 || (outfit_templateObject13 = outfit_taggedTemplateLiteral(["weapon"]))))) !== 1) {
        return false;
      }

      if (this.equips.has($slot(outfit_templateObject14 || (outfit_templateObject14 = outfit_taggedTemplateLiteral(["off-hand"]))))) return false;
      if (!have(template_string_$skill(outfit_templateObject15 || (outfit_templateObject15 = outfit_taggedTemplateLiteral(["Double-Fisted Skull Smashing"]))))) return false;
      if (weaponHands(item) !== 1) return false;
      if (!(0,external_kolmafia_namespaceObject.canEquip)(item)) return false;
      this.equips.set($slot(outfit_templateObject16 || (outfit_templateObject16 = outfit_taggedTemplateLiteral(["off-hand"]))), item);
      return true;
    }
  }, {
    key: "getHoldingFamiliar",
    value: function getHoldingFamiliar(item) {
      switch ((0,external_kolmafia_namespaceObject.toSlot)(item)) {
        case $slot(outfit_templateObject17 || (outfit_templateObject17 = outfit_taggedTemplateLiteral(["weapon"]))):
          return template_string_$familiar(outfit_templateObject18 || (outfit_templateObject18 = outfit_taggedTemplateLiteral(["Disembodied Hand"])));

        case $slot(outfit_templateObject19 || (outfit_templateObject19 = outfit_taggedTemplateLiteral(["off-hand"]))):
          return template_string_$familiar(outfit_templateObject20 || (outfit_templateObject20 = outfit_taggedTemplateLiteral(["Left-Hand Man"])));

        default:
          return undefined;
      }
    }
    /**
     * Returns the bonus value associated with a given item.
     * @param item The item to check the bonus of.
     * @returns The bonus assigned to that item.
     */

  }, {
    key: "getBonus",
    value: function getBonus(item) {
      var _a;

      return (_a = this.bonuses.get(item)) !== null && _a !== void 0 ? _a : 0;
    }
    /**
     * Sets the bonus value of an item equal to a given value, overriding any current bonus assigned.
     *
     * Only triggers on items that may be equipped to this outfit.
     * @param item The item to try to apply a bonus to.
     * @param value The value to try to apply.
     * @returns Whether the bonus was successfully asigned.
     */

  }, {
    key: "setBonus",
    value: function setBonus(item, value) {
      var can = this.canEquip(item);
      if (can) this.bonuses.set(item, value);
      return can;
    }
    /**
     * Adds a value to any existing bonus this item has; if it started without a bonus, sets the bonus equal to that value.
     *
     * Only triggers on items that may be equipped to this outfit.
     * @param item The item to try to add a bonus to.
     * @param value The value to try to add.
     * @returns The total assigned bonus to that item.
     */

  }, {
    key: "addBonus",
    value: function addBonus(item, value) {
      var previous = this.getBonus(item);
      this.setBonus(item, previous + value);
      return this.getBonus(item);
    }
  }, {
    key: "equipUsingFamiliar",
    value: function equipUsingFamiliar(item, slot) {
      if (![undefined, $slot(outfit_templateObject21 || (outfit_templateObject21 = outfit_taggedTemplateLiteral(["familiar"])))].includes(slot)) return false;
      if (this.equips.has($slot(outfit_templateObject22 || (outfit_templateObject22 = outfit_taggedTemplateLiteral(["familiar"]))))) return false;
      if ((0,external_kolmafia_namespaceObject.booleanModifier)(item, "Single Equip")) return false;
      var familiar = this.getHoldingFamiliar(item);
      if (familiar === undefined || !this.equip(familiar)) return false;
      this.equips.set($slot(outfit_templateObject23 || (outfit_templateObject23 = outfit_taggedTemplateLiteral(["familiar"]))), item);
      return true;
    }
  }, {
    key: "equipItem",
    value: function equipItem(item, slot) {
      return this.haveEquipped(item, slot) || this.equipItemNone(item, slot) || this.isAvailable(item) && (this.equipNonAccessory(item, slot) || this.equipAccessory(item, slot) || this.equipUsingDualWield(item, slot) || this.equipUsingFamiliar(item, slot));
    }
  }, {
    key: "equipFamiliar",
    value: function equipFamiliar(familiar) {
      if (familiar === this.familiar) return true;
      if (this.familiar !== undefined) return false;

      if (familiar !== template_string_$familiar.none) {
        if (!have(familiar)) return false;
        if (Array.from(this.riders.values()).includes(familiar)) return false;
      }

      var item = this.equips.get($slot(outfit_templateObject24 || (outfit_templateObject24 = outfit_taggedTemplateLiteral(["familiar"]))));
      if (item !== undefined && item !== template_string_$item.none && !(0,external_kolmafia_namespaceObject.canEquip)(familiar, item)) return false;
      this.familiar = familiar;
      return true;
    }
  }, {
    key: "equipSpec",
    value: function equipSpec(spec) {
      var _this$avoid;

      var _a, _b, _c, _d;

      var succeeded = true;

      var _iterator = outfit_createForOfIteratorHelper(outfitSlots),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var slotName = _step.value;
          var slot = (_a = new Map([["famequip", $slot(outfit_templateObject25 || (outfit_templateObject25 = outfit_taggedTemplateLiteral(["familiar"])))], ["offhand", $slot(outfit_templateObject26 || (outfit_templateObject26 = outfit_taggedTemplateLiteral(["off-hand"])))]]).get(slotName)) !== null && _a !== void 0 ? _a : (0,external_kolmafia_namespaceObject.toSlot)(slotName);
          var itemOrItems = spec[slotName];
          if (itemOrItems !== undefined && !this.equip(itemOrItems, slot)) succeeded = false;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = outfit_createForOfIteratorHelper((_b = spec === null || spec === void 0 ? void 0 : spec.equip) !== null && _b !== void 0 ? _b : []),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _item = _step2.value;
          if (!this.equip(_item)) succeeded = false;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if ((spec === null || spec === void 0 ? void 0 : spec.familiar) !== undefined) {
        if (!this.equip(spec.familiar)) succeeded = false;
      }

      (_this$avoid = this.avoid).push.apply(_this$avoid, outfit_toConsumableArray((_c = spec === null || spec === void 0 ? void 0 : spec.avoid) !== null && _c !== void 0 ? _c : []));

      this.skipDefaults = this.skipDefaults || ((_d = spec.skipDefaults) !== null && _d !== void 0 ? _d : false);

      if (spec.modifier) {
        var _this$modifier;

        if (Array.isArray(spec.modifier)) (_this$modifier = this.modifier).push.apply(_this$modifier, outfit_toConsumableArray(spec.modifier));else this.modifier.push(spec.modifier);
      }

      if (spec.modes) {
        if (!this.setModes(spec.modes)) {
          succeeded = false;
        }
      }

      if (spec.riders) {
        if (spec.riders["buddy-bjorn"] && !this.bjornify(spec.riders["buddy-bjorn"])) succeeded = false;
        if (spec.riders["crown-of-thrones"] && !this.enthrone(spec.riders["crown-of-thrones"])) succeeded = false;
      }

      if (spec.bonuses) {
        var _iterator3 = outfit_createForOfIteratorHelper(spec.bonuses),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _step3$value = outfit_slicedToArray(_step3.value, 2),
                item = _step3$value[0],
                value = _step3$value[1];

            succeeded && (succeeded = value + this.getBonus(item) === this.addBonus(item, value));
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }

      return succeeded;
    }
    /**
     * Equip the first thing that can be equipped to the outfit.
     *
     * @param things The things to equip.
     * @param slot The slot to equip them.
     * @returns True if one of the things is equipped, and false otherwise.
     */

  }, {
    key: "equipFirst",
    value: function equipFirst(things, slot) {
      return things.some(val => this.equip(val, slot));
    }
    /**
     * Equip a thing to the outfit.
     *
     * If no slot is given, then the thing will be equipped wherever possible
     * (possibly using dual-wielding, any of the accessory slots, or as
     * familiar equipment). If it is impossible to add this thing anywhere to
     * the outfit, this function will return false.
     *
     * If a slot is given, the item will be equipped only in that slot. If the
     * slot is filled with a different item, this function will return false.
     *
     * If the thing is already equipped in the provided slot, or if no slot is
     * given and the thing is already equipped in any slot, this function will
     * return true and not change the outfit.
     *
     * @param thing The thing or things to equip.
     * @param slot The slot to equip them.
     * @returns True if the thing was sucessfully equipped, and false otherwise.
     */

  }, {
    key: "equip",
    value: function equip(thing, slot) {
      if (Array.isArray(thing)) {
        if (slot !== undefined) return this.equipFirst(thing, slot);
        return thing.every(val => this.equip(val));
      }

      if (thing instanceof external_kolmafia_namespaceObject.Item) return this.equipItem(thing, slot);
      if (thing instanceof external_kolmafia_namespaceObject.Familiar) return this.equipFamiliar(thing);
      if (thing instanceof Outfit) return this.equipSpec(thing.spec());
      return this.equipSpec(thing);
    }
  }, {
    key: "bjornify",
    value:
    /**
     * Add a bjornified familiar to the outfit.
     *
     * This function does *not* equip the buddy bjorn itself; it must be equipped separately.
     *
     * If a familiar is already specified for the buddy bjorn that is different from the provided target, this function will return false and not change the buddy bjorn.
     * @param target The familiar to bjornify, or a ranked list of familiars to try to bjornify.
     * @returns True if we successfully set the bjorn to a valid target.
     */
    function bjornify(target) {
      var current = this.riders.get($slot(outfit_templateObject27 || (outfit_templateObject27 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))));

      if (current) {
        if (Array.isArray(target) ? target.includes(current) : current === target) {
          return true;
        }

        return false;
      }

      if (Array.isArray(target)) {
        var fam = target.find(f => have(f) && this.familiar !== f && this.riders.get($slot(outfit_templateObject28 || (outfit_templateObject28 = outfit_taggedTemplateLiteral(["crown-of-thrones"])))) !== f);

        if (fam) {
          this.riders.set($slot(outfit_templateObject29 || (outfit_templateObject29 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))), fam);
          return true;
        }

        return false;
      } else {
        if (have(target) && this.familiar !== target && !Array.from(this.riders.values()).includes(target)) {
          this.riders.set($slot(outfit_templateObject30 || (outfit_templateObject30 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))), target);
          return true;
        }

        return false;
      }
    }
    /**
     * Add anenthroned familiar to the outfit.
     *
     * This function does *not* equip the crown of thrones itself; it must be equipped separately.
     *
     * If a familiar is already specified for the crown of thrones that is different from the provided target, this function will return false and not change the crown of thrones.
     * @param target The familiar to enthrone, or a ranked list of familiars to try to enthrone.
     * @returns True if we successfully set the enthrone to a valid target.
     */

  }, {
    key: "enthrone",
    value: function enthrone(target) {
      var current = this.riders.get($slot(outfit_templateObject31 || (outfit_templateObject31 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))));

      if (current) {
        if (Array.isArray(target) ? target.includes(current) : current === target) {
          return true;
        }

        return false;
      }

      if (Array.isArray(target)) {
        var fam = target.find(f => have(f) && this.familiar !== f && this.riders.get($slot(outfit_templateObject32 || (outfit_templateObject32 = outfit_taggedTemplateLiteral(["buddy-bjorn"])))) !== f);

        if (fam) {
          this.riders.set($slot(outfit_templateObject33 || (outfit_templateObject33 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))), fam);
          return true;
        }

        return false;
      } else {
        if (have(target) && this.familiar !== target && !Array.from(this.riders.values()).includes(target)) {
          this.riders.set($slot(outfit_templateObject34 || (outfit_templateObject34 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))), target);
          return true;
        }

        return false;
      }
    }
    /**
     * Set the provided modes for items that may be equipped in the outfit.
     *
     * This function does *not* equip items for the set modes; they must be
     * equipped separately.
     *
     * If a mode is already set for an item that is different from the provided
     * mode, this function will return false and not change the mode for that
     * item. (But other modes might still be changed if they are compatible.)
     *
     * Note that the superhero and instuctions of a retrocape can be set
     * independently (`undefined` is treated as "don't care").
     *
     * @param modes Modes to set in this outfit.
     * @returns True if all modes were sucessfully set, and false otherwise.
     */

  }, {
    key: "setModes",
    value: function setModes(modes) {
      var _a, _b;

      var compatible = true; // Check if the new modes are compatible with existing modes

      var _iterator4 = outfit_createForOfIteratorHelper(outfit_modeableCommands),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var mode = _step4.value;
          if (mode === "retrocape") continue; // checked below

          if (this.modes[mode] && modes[mode] && this.modes[mode] !== modes[mode]) {
            compatible = false;
          }
        } // Check if retrocape modes are compatible
        // (Parts that are undefined are compatible with everything)

      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      if (this.modes["retrocape"] && modes["retrocape"]) {
        if (this.modes["retrocape"][0] && modes["retrocape"][0] && this.modes["retrocape"][0] !== modes["retrocape"][0]) {
          compatible = false;
        }

        if (this.modes["retrocape"][1] && modes["retrocape"][1] && this.modes["retrocape"][1] !== modes["retrocape"][1]) {
          compatible = false;
        }

        this.modes["retrocape"][0] = (_a = this.modes["retrocape"][0]) !== null && _a !== void 0 ? _a : modes["retrocape"][0];
        this.modes["retrocape"][1] = (_b = this.modes["retrocape"][1]) !== null && _b !== void 0 ? _b : modes["retrocape"][1];
      }

      this.modes = outfit_objectSpread(outfit_objectSpread({}, modes), this.modes);
      return compatible;
    }
    /**
     * Check if it is possible to equip a thing to this outfit using .equip().
     *
     * This does not change the current outfit.
     *
     * @param thing The thing to equip.
     * @param slot The slot to equip them.
     * @returns True if this thing can be equipped.
     */

  }, {
    key: "canEquip",
    value: function canEquip(thing, slot) {
      var outfit = this.clone();
      return outfit.equip(thing, slot);
    }
    /**
     * Check if it is possible to equip a thing to this outfit using .equip(); if it is, do so.
     *
     * This does change the current outfit.
     * @param thing The thing to equip.
     * @param slot The slot to equip them.
     * @returns True if this thing was successfully equipped.
     */

  }, {
    key: "tryEquip",
    value: function tryEquip(thing, slot) {
      return this.canEquip(thing, slot) && this.equip(thing, slot);
    }
    /**
     * Equip this outfit.
     */

  }, {
    key: "_dress",
    value: function _dress(refreshed) {
      if (this.familiar) (0,external_kolmafia_namespaceObject.useFamiliar)(this.familiar);
      var targetEquipment = Array.from(this.equips.values());
      var usedSlots = new Set(); // First, we equip non-accessory equipment.

      var nonaccessorySlots = $slots(outfit_templateObject35 || (outfit_templateObject35 = outfit_taggedTemplateLiteral(["weapon, off-hand, hat, back, shirt, pants, familiar"])));
      var bjorn = this.riders.get($slot(outfit_templateObject36 || (outfit_templateObject36 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))));

      if (bjorn && (this.equips.get($slot(outfit_templateObject37 || (outfit_templateObject37 = outfit_taggedTemplateLiteral(["back"])))) === template_string_$item(outfit_templateObject38 || (outfit_templateObject38 = outfit_taggedTemplateLiteral(["Buddy Bjorn"]))) || this.getBonus(template_string_$item(outfit_templateObject39 || (outfit_templateObject39 = outfit_taggedTemplateLiteral(["Buddy Bjorn"])))))) {
        usedSlots.add($slot(outfit_templateObject40 || (outfit_templateObject40 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))));
        usedSlots.add($slot(outfit_templateObject41 || (outfit_templateObject41 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))));
      }

      var crown = this.riders.get($slot(outfit_templateObject42 || (outfit_templateObject42 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))));

      if (crown && (this.equips.get($slot(outfit_templateObject43 || (outfit_templateObject43 = outfit_taggedTemplateLiteral(["hat"])))) === template_string_$item(outfit_templateObject44 || (outfit_templateObject44 = outfit_taggedTemplateLiteral(["Crown of Thrones"]))) || this.getBonus(template_string_$item(outfit_templateObject45 || (outfit_templateObject45 = outfit_taggedTemplateLiteral(["Crown of Thrones"])))))) {
        usedSlots.add($slot(outfit_templateObject46 || (outfit_templateObject46 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))));
        usedSlots.add($slot(outfit_templateObject47 || (outfit_templateObject47 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))));
      } // We must manually remove equipment that we want to use in a different
      // slot than where it is currently equipped, to avoid a mafia issue.
      // Order is anchored here to prevent DFSS shenanigans


      var _iterator5 = outfit_createForOfIteratorHelper(nonaccessorySlots),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var slot = _step5.value;
          if (targetEquipment.includes((0,external_kolmafia_namespaceObject.equippedItem)(slot)) && this.equips.get(slot) !== (0,external_kolmafia_namespaceObject.equippedItem)(slot) || this.avoid.includes((0,external_kolmafia_namespaceObject.equippedItem)(slot))) (0,external_kolmafia_namespaceObject.equip)(slot, template_string_$item.none);
        } // Then we equip all the non-accessory equipment.

      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      var _iterator6 = outfit_createForOfIteratorHelper(nonaccessorySlots),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _slot = _step6.value;
          var equipment = this.equips.get(_slot);

          if (equipment) {
            (0,external_kolmafia_namespaceObject.equip)(_slot, equipment);
            usedSlots.add(_slot);
          }
        } // Next, we equip accessories

      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      var accessorySlots = $slots(outfit_templateObject48 || (outfit_templateObject48 = outfit_taggedTemplateLiteral(["acc1, acc2, acc3"])));
      var accessoryEquips = accessorySlots.map(slot => this.equips.get(slot)).filter(item => item !== undefined); // To plan how to equip accessories, first check which accessories are
      // already equipped in some accessory slot. There is no need to move them,
      // since KoL doesn't care what order accessories are equipped in.

      var missingAccessories = []; // accessories that are not already equipped

      var _iterator7 = outfit_createForOfIteratorHelper(accessoryEquips),
          _step7;

      try {
        var _loop = function _loop() {
          var accessory = _step7.value;
          var alreadyEquipped = accessorySlots.find(slot => !usedSlots.has(slot) && (0,external_kolmafia_namespaceObject.equippedItem)(slot) === accessory);

          if (alreadyEquipped) {
            usedSlots.add(alreadyEquipped);
          } else {
            missingAccessories.push(accessory);
          }
        };

        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          _loop();
        } // Then, for all accessories that are not currently equipped, use the first
        // open slot to place them.

      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      for (var _i2 = 0, _missingAccessories = missingAccessories; _i2 < _missingAccessories.length; _i2++) {
        var accessory = _missingAccessories[_i2];
        var unusedSlot = accessorySlots.find(slot => !usedSlots.has(slot));

        if (unusedSlot === undefined) {
          // This should only occur if there is a bug in .dress()
          throw "No accessory slots remaining";
        }

        (0,external_kolmafia_namespaceObject.equip)(unusedSlot, accessory);
        usedSlots.add(unusedSlot);
      } // Remaining slots are filled by the maximizer


      var modes = convertToLibramModes(this.modes);

      if (this.modifier.length > 0) {
        var allRequirements = [new Requirement(this.modifier, {
          preventSlot: outfit_toConsumableArray(usedSlots),
          preventEquip: this.avoid,
          modes: modes,
          bonusEquip: this.bonuses
        })];
        if (refreshed) allRequirements.push(FORCE_REFRESH_REQUIREMENT);

        if (!Requirement.merge(allRequirements).maximize()) {
          if (!refreshed) {
            (0,external_kolmafia_namespaceObject.cliExecute)("refresh inventory");

            this._dress(true);

            return;
          } else throw new Error("Failed to maximize properly!");
        }

        (0,external_kolmafia_namespaceObject.logprint)("Maximize: ".concat(this.modifier));
      } // Set the modes of any equipped items.


      applyModes(modes); // Handle the rider slots next

      if (bjorn) {
        if ((0,external_kolmafia_namespaceObject.myEnthronedFamiliar)() === bjorn) (0,external_kolmafia_namespaceObject.enthroneFamiliar)(template_string_$familiar.none);
        if ((0,external_kolmafia_namespaceObject.myBjornedFamiliar)() !== bjorn) (0,external_kolmafia_namespaceObject.bjornifyFamiliar)(bjorn);
      }

      if (crown) {
        if ((0,external_kolmafia_namespaceObject.myBjornedFamiliar)() === crown) (0,external_kolmafia_namespaceObject.bjornifyFamiliar)(template_string_$familiar.none);
        if ((0,external_kolmafia_namespaceObject.myEnthronedFamiliar)() !== crown) (0,external_kolmafia_namespaceObject.enthroneFamiliar)(crown);
      } // Verify that all equipment was indeed equipped


      if (this.familiar !== undefined && (0,external_kolmafia_namespaceObject.myFamiliar)() !== this.familiar) throw "Failed to fully dress (expected: familiar ".concat(this.familiar, ")");

      var _iterator8 = outfit_createForOfIteratorHelper(nonaccessorySlots),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _slot2 = _step8.value;

          if (this.equips.has(_slot2) && (0,external_kolmafia_namespaceObject.equippedItem)(_slot2) !== this.equips.get(_slot2)) {
            throw "Failed to fully dress (expected: ".concat(_slot2, " ").concat(this.equips.get(_slot2), ")");
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      var _iterator9 = outfit_createForOfIteratorHelper(accessoryEquips),
          _step9;

      try {
        var _loop2 = function _loop2() {
          var accessory = _step9.value;

          if ((0,external_kolmafia_namespaceObject.equippedAmount)(accessory) < accessoryEquips.filter(acc => acc === accessory).length) {
            throw "Failed to fully dress (expected: acc ".concat(accessory, ")");
          }
        };

        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      for (var _i3 = 0, _arr2 = [[$slot(_templateObject49 || (_templateObject49 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))), external_kolmafia_namespaceObject.myBjornedFamiliar], [$slot(_templateObject50 || (_templateObject50 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))), external_kolmafia_namespaceObject.myEnthronedFamiliar]]; _i3 < _arr2.length; _i3++) {
        var _arr2$_i = outfit_slicedToArray(_arr2[_i3], 2),
            rider = _arr2$_i[0],
            checkingFunction = _arr2$_i[1];

        var wanted = this.riders.get(rider);

        if (wanted && checkingFunction() !== wanted) {
          throw "Failed to fully dress: (expected ".concat(rider, " ").concat(wanted, ")");
        }
      }
    }
  }, {
    key: "dress",
    value: function dress() {
      this._dress(false);
    }
    /**
     * Build an Outfit identical to this outfit.
     */

  }, {
    key: "clone",
    value: function clone() {
      var result = new Outfit();
      result.equips = new Map(this.equips);
      result.skipDefaults = this.skipDefaults;
      result.familiar = this.familiar;
      result.modifier = outfit_toConsumableArray(this.modifier);
      result.avoid = outfit_toConsumableArray(this.avoid);
      result.modes = outfit_objectSpread({}, this.modes);
      result.riders = new Map(this.riders);
      result.bonuses = new Map(this.bonuses);
      return result;
    }
    /**
     * Build an OutfitSpec identical to this outfit.
     */

  }, {
    key: "spec",
    value: function spec() {
      var _a;

      var result = {
        modifier: outfit_toConsumableArray(this.modifier),
        familiar: this.familiar,
        avoid: outfit_toConsumableArray(this.avoid),
        skipDefaults: this.skipDefaults,
        modes: outfit_objectSpread({}, this.modes),
        bonuses: new Map(this.bonuses)
      }; // Add all equipment forced in a particular slot

      var _iterator10 = outfit_createForOfIteratorHelper(outfitSlots),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var slotName = _step10.value;
          result[slotName] = this.equips.get((_a = new Map([["famequip", $slot(_templateObject53 || (_templateObject53 = outfit_taggedTemplateLiteral(["familiar"])))], ["offhand", $slot(_templateObject54 || (_templateObject54 = outfit_taggedTemplateLiteral(["off-hand"])))]]).get(slotName)) !== null && _a !== void 0 ? _a : (0,external_kolmafia_namespaceObject.toSlot)(slotName));
        } // Include the riders

      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }

      var riders = {};
      var buddyRider = this.riders.get($slot(_templateObject51 || (_templateObject51 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))));
      if (buddyRider !== undefined) riders["buddy-bjorn"] = buddyRider;
      var throneRider = this.riders.get($slot(_templateObject52 || (_templateObject52 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))));
      if (throneRider !== undefined) riders["crown-of-thrones"] = throneRider;
      if (buddyRider !== undefined || throneRider !== undefined) result.riders = riders;
      return result;
    }
  }], [{
    key: "current",
    value: function current() {
      var _a;

      var outfit = new Outfit();
      var familiar = (0,external_kolmafia_namespaceObject.myFamiliar)();

      if (outfit.equip(familiar)) {
        throw "Failed to create outfit from current state (expected: familiar ".concat(familiar, ")");
      }

      var _iterator11 = outfit_createForOfIteratorHelper(outfitSlots),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var slotName = _step11.value;
          var slot = (_a = new Map([["famequip", $slot(_templateObject59 || (_templateObject59 = outfit_taggedTemplateLiteral(["familiar"])))], ["offhand", $slot(_templateObject60 || (_templateObject60 = outfit_taggedTemplateLiteral(["off-hand"])))]]).get(slotName)) !== null && _a !== void 0 ? _a : (0,external_kolmafia_namespaceObject.toSlot)(slotName);
          var item = (0,external_kolmafia_namespaceObject.equippedItem)(slot);

          if (!outfit.equip(item, slot)) {
            throw "Failed to create outfit from current state (expected: ".concat(slot, " ").concat(item, ")");
          }
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }

      if ((0,external_kolmafia_namespaceObject.haveEquipped)(template_string_$item(_templateObject55 || (_templateObject55 = outfit_taggedTemplateLiteral(["Crown of Thrones"]))))) outfit.riders.set($slot(_templateObject56 || (_templateObject56 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))), (0,external_kolmafia_namespaceObject.myEnthronedFamiliar)());
      if ((0,external_kolmafia_namespaceObject.haveEquipped)(template_string_$item(_templateObject57 || (_templateObject57 = outfit_taggedTemplateLiteral(["Buddy Bjorn"]))))) outfit.riders.set($slot(_templateObject58 || (_templateObject58 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))), (0,external_kolmafia_namespaceObject.myBjornedFamiliar)());
      outfit.setModes(outfit_getCurrentModes());
      return outfit;
    }
  }, {
    key: "from",
    value: function from(spec) {
      var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var outfit = new Outfit();
      var success = outfit.equip(spec);
      if (!success && error) throw error;
      return success ? outfit : null;
    }
  }]);

  return Outfit;
}();
/**
 * Get the modes of this outfit in a type compatible with Libram.
 *
 * This conversion is needed since we store the retrocape modes
 * internally as an array, but libram uses a string.
 *
 * @returns The modes equipped to this outfit.
 */

function convertToLibramModes(modes) {
  var _a;

  return {
    backupcamera: modes["backupcamera"],
    umbrella: modes["umbrella"],
    snowsuit: modes["snowsuit"],
    edpiece: modes["edpiece"],
    retrocape: (_a = modes["retrocape"]) === null || _a === void 0 ? void 0 : _a.filter(s => s !== undefined).join(" "),
    parka: modes["parka"]
  };
}
/**
 * Get the current modes of all items.
 *
 * @returns The current mode settings for all items, equipped or not.
 */

function outfit_getCurrentModes() {
  return {
    backupcamera: getMode("backupCameraMode", ["ml", "meat", "init"]),
    umbrella: getMode("umbrellaState", ["broken", "forward-facing", "bucket style", "pitchfork style", "constantly twirling", "cocoon"]),
    snowsuit: getMode("snowsuit", ["eyebrows", "smirk", "nose", "goatee", "hat"]),
    edpiece: getMode("edPiece", ["bear", "owl", "puma", "hyena", "mouse", "weasel", "fish"]),
    retrocape: [getMode("retroCapeSuperhero", ["vampire", "heck", "robot"]), getMode("retroCapeWashingInstructions", ["hold", "thrill", "kiss", "kill"])],
    parka: getMode("parkaMode", ["kachungasaur", "dilophosaur", "ghostasaurus", "spikolodon", "pterodactyl"])
  };
}
/**
 * Get the current value for a mode in a type-safe way.
 *
 * @param property The mafia property for the mode.
 * @param options A typed list of options for the mode.
 * @returns The mode if the property value matched a valid option, or undefined.
 */

function getMode(property, options) {
  var val = property_get(property, "");
  return options.find(s => s === val); // .includes has type issues
}
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/engine.js
var engine_templateObject;

function engine_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function engine_toConsumableArray(arr) { return engine_arrayWithoutHoles(arr) || engine_iterableToArray(arr) || engine_unsupportedIterableToArray(arr) || engine_nonIterableSpread(); }

function engine_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function engine_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function engine_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return engine_arrayLikeToArray(arr); }

function engine_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = engine_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function engine_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return engine_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return engine_arrayLikeToArray(o, minLen); }

function engine_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function engine_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function engine_createClass(Constructor, protoProps, staticProps) { if (protoProps) engine_defineProperties(Constructor.prototype, protoProps); if (staticProps) engine_defineProperties(Constructor, staticProps); return Constructor; }

function engine_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var EngineOptions = function EngineOptions() {
  engine_classCallCheck(this, EngineOptions);
};
var grimoireCCS = "grimoire_macro";
var Engine = /*#__PURE__*/function () {
  /**
   * Create the engine.
   * @param tasks A list of tasks for looking up task dependencies.
   * @param options Basic configuration of the engine.
   */
  function Engine(tasks, options) {
    engine_classCallCheck(this, Engine);

    this.attempts = {};
    this.propertyManager = new PropertiesManager();
    this.tasks_by_name = new Map();
    this.cachedCcsContents = "";
    this.tasks = tasks;
    this.options = options !== null && options !== void 0 ? options : {};

    var _iterator = engine_createForOfIteratorHelper(tasks),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var task = _step.value;
        this.tasks_by_name.set(task.name, task);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    this.initPropertiesManager(this.propertyManager);
  }
  /**
   * Determine the next task to perform.
   * By default, this is the first task in the task list that is available.
   * @returns The next task to perform, or undefined if no tasks are available.
   */


  engine_createClass(Engine, [{
    key: "getNextTask",
    value: function getNextTask() {
      return this.tasks.find(task => this.available(task));
    }
    /**
     * Continually get the next task and execute it.
     * @param actions If given, only perform up to this many tasks.
     */

  }, {
    key: "run",
    value: function run(actions) {
      for (var i = 0; i < (actions !== null && actions !== void 0 ? actions : Infinity); i++) {
        var task = this.getNextTask();
        if (!task) return;
        this.execute(task);
      }
    }
    /**
     * Close the engine and reset all properties.
     * After this has been called, this object should not be used.
     */

  }, {
    key: "destruct",
    value: function destruct() {
      this.propertyManager.resetAll();
      (0,external_kolmafia_namespaceObject.setAutoAttack)(0);
    }
    /**
     * Check if the given task is available at this moment.
     * @returns true if all dependencies are complete and the task is ready.
     *  Note that dependencies are not checked transitively. That is, if
     *  A depends on B which depends on C, then A is ready if B is complete
     *  (regardless of if C is complete or not).
     */

  }, {
    key: "available",
    value: function available(task) {
      var _a;

      var _iterator2 = engine_createForOfIteratorHelper((_a = task.after) !== null && _a !== void 0 ? _a : []),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var after = _step2.value;
          var after_task = this.tasks_by_name.get(after);
          if (after_task === undefined) throw "Unknown task dependency ".concat(after, " on ").concat(task.name);
          if (!after_task.completed()) return false;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (task.ready && !task.ready()) return false;
      if (task.completed()) return false;
      return true;
    }
    /**
     * Perform all steps to execute the provided task.
     * This is the main entry point for the Engine.
     * @param task The current executing task.
     */

  }, {
    key: "execute",
    value: function execute(task) {
      var _a, _b, _c, _d, _e;

      (0,external_kolmafia_namespaceObject.print)("");
      (0,external_kolmafia_namespaceObject.print)("Executing ".concat(task.name), "blue"); // Determine the proper postcondition for after the task executes.

      var postcondition = (_b = (_a = task.limit) === null || _a === void 0 ? void 0 : _a.guard) === null || _b === void 0 ? void 0 : _b.call(_a); // Acquire any items and effects first, possibly for later execution steps.

      this.acquireItems(task);
      this.acquireEffects(task); // Prepare the outfit, with resources.

      var task_combat = (_d = (_c = task.combat) === null || _c === void 0 ? void 0 : _c.clone()) !== null && _d !== void 0 ? _d : new CombatStrategy();
      var outfit = this.createOutfit(task);
      var task_resources = new CombatResources();
      this.customize(task, outfit, task_combat, task_resources);
      this.dress(task, outfit); // Prepare combat and choices

      this.setCombat(task, task_combat, task_resources);
      this.setChoices(task, this.propertyManager); // Actually perform the task

      var _iterator3 = engine_createForOfIteratorHelper(task_resources.all()),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var resource = _step3.value;
          (_e = resource.prepare) === null || _e === void 0 ? void 0 : _e.call(resource);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      this.prepare(task);
      this.do(task);

      while (this.shouldRepeatAdv(task)) {
        _set("lastEncounter", "");
        this.do(task);
      }

      this.post(task); // Mark that we tried the task, and apply limits

      this.markAttempt(task);
      this.checkLimits(task, postcondition);
    }
    /**
     * Acquire all items for the task.
     * @param task The current executing task.
     */

  }, {
    key: "acquireItems",
    value: function acquireItems(task) {
      var _a;

      var acquire = undelay(task.acquire);

      var _iterator4 = engine_createForOfIteratorHelper(acquire || []),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var to_get = _step4.value;
          var num_needed = (_a = to_get.num) !== null && _a !== void 0 ? _a : 1;
          var num_have = (0,external_kolmafia_namespaceObject.itemAmount)(to_get.item) + (0,external_kolmafia_namespaceObject.equippedAmount)(to_get.item);
          if (num_needed <= num_have) continue;
          if (to_get.useful !== undefined && !to_get.useful()) continue;

          if (to_get.get) {
            to_get.get();
          } else if (to_get.price !== undefined) {
            (0,external_kolmafia_namespaceObject.buy)(to_get.item, num_needed - num_have, to_get.price);
          } else if (Object.keys((0,external_kolmafia_namespaceObject.getRelated)(to_get.item, "fold")).length > 0) {
            (0,external_kolmafia_namespaceObject.cliExecute)("fold ".concat(to_get.item));
          } else {
            (0,external_kolmafia_namespaceObject.retrieveItem)(to_get.item, num_needed);
          }

          if ((0,external_kolmafia_namespaceObject.itemAmount)(to_get.item) + (0,external_kolmafia_namespaceObject.equippedAmount)(to_get.item) < num_needed && !to_get.optional) {
            throw "Task ".concat(task.name, " was unable to acquire ").concat(num_needed, " ").concat(to_get.item);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
    /**
     * Acquire all effects for the task.
     * @param task The current executing task.
     */

  }, {
    key: "acquireEffects",
    value: function acquireEffects(task) {
      var _a;

      var effects = (_a = undelay(task.effects)) !== null && _a !== void 0 ? _a : [];
      var songs = effects.filter(effect => isSong(effect));
      if (songs.length > maxSongs()) throw "Too many AT songs";
      var extraSongs = Object.keys((0,external_kolmafia_namespaceObject.myEffects)()).map(effectName => (0,external_kolmafia_namespaceObject.toEffect)(effectName)).filter(effect => isSong(effect) && !songs.includes(effect));

      while (songs.length + extraSongs.length > maxSongs()) {
        var toRemove = extraSongs.pop();

        if (toRemove === undefined) {
          break;
        } else {
          uneffect(toRemove);
        }
      }

      var _iterator5 = engine_createForOfIteratorHelper(effects),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var effect = _step5.value;
          ensureEffect(effect);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
    /**
     * Create an outfit for the task with all required equipment.
     * @param task The current executing task.
     */

  }, {
    key: "createOutfit",
    value: function createOutfit(task) {
      var spec = undelay(task.outfit);
      if (spec instanceof Outfit) return spec.clone();
      var outfit = new Outfit();

      if (spec !== undefined) {
        if (!outfit.equip(spec)) {
          throw "Unable to equip all items for ".concat(task.name);
        }
      }

      return outfit;
    }
    /**
     * Equip the outfit for the task.
     * @param task The current executing task.
     * @param outfit The outfit for the task, possibly augmented by the engine.
     */

  }, {
    key: "dress",
    value: function dress(task, outfit) {
      if (task.do instanceof external_kolmafia_namespaceObject.Location) (0,external_kolmafia_namespaceObject.setLocation)(task.do);
      outfit.dress();
    }
    /* eslint-disable @typescript-eslint/no-unused-vars */

    /**
     * Perform any engine-specific customization for the outfit and combat plan.
     *
     * This is a natural method to override in order to:
     *   * Enable the use of any resources in the outfit or combat (e.g., allocate banishers).
     *   * Equip a default outfit.
     *   * Determine additional monster macros at a global level (e.g., use flyers).
     * @param task The current executing task.
     * @param outfit The outfit for the task.
     * @param combat The combat strategy so far for the task.
     * @param resources The combat resources assigned so far for the task.
     */

  }, {
    key: "customize",
    value: function customize(task, outfit, combat, resources) {// do nothing by default
    }
    /* eslint-enable @typescript-eslint/no-unused-vars */

    /**
     * Set the choice settings for the task.
     * @param task The current executing task.
     * @param manager The property manager to use.
     */

  }, {
    key: "setChoices",
    value: function setChoices(task, manager) {
      var choices = {};

      for (var choice_id_str in task.choices) {
        var choice_id = parseInt(choice_id_str);
        var choice = task.choices[choice_id];
        choices[choice_id] = undelay(choice);
      }

      manager.setChoices(choices);
    }
    /**
     * Save the combat macro for this task.
     * @param task The current executing task.
     * @param task_combat The completed combat strategy far for the task.
     * @param task_resources The combat resources assigned for the task.
     */

  }, {
    key: "setCombat",
    value: function setCombat(task, task_combat, task_resources) {
      var _a; // Save regular combat macro


      var macro = task_combat.compile(task_resources, (_a = this.options) === null || _a === void 0 ? void 0 : _a.combat_defaults, task.do instanceof external_kolmafia_namespaceObject.Location ? task.do : undefined);
      macro.save();

      if (!this.options.ccs) {
        // Use the macro through a CCS file
        var otherCCSEntries = task_combat.compileCcs();
        var ccsContents = ["[default]", "\"".concat(macro.toString(), "\"")].concat(engine_toConsumableArray(otherCCSEntries)).join("\n"); // Log Macro + other CCS

        (0,external_kolmafia_namespaceObject.logprint)("CCS: ".concat(ccsContents.replace("\n", "\\n ")));

        if (ccsContents !== this.cachedCcsContents) {
          (0,external_kolmafia_namespaceObject.writeCcs)(ccsContents, grimoireCCS);
          (0,external_kolmafia_namespaceObject.cliExecute)("ccs ".concat(grimoireCCS)); // force Mafia to reparse the ccs

          this.cachedCcsContents = ccsContents;
        }
      } // Save autoattack combat macro


      var autoattack = task_combat.compileAutoattack();

      if (autoattack.toString().length > 1) {
        (0,external_kolmafia_namespaceObject.logprint)("Autoattack macro: ".concat(autoattack.toString()));
        autoattack.setAutoAttack();
      } else {
        (0,external_kolmafia_namespaceObject.setAutoAttack)(0);
      }
    }
    /**
     * Do any task-specific preparation.
     * @param task The current executing task.
     */

  }, {
    key: "prepare",
    value: function prepare(task) {
      var _a;

      (_a = task.prepare) === null || _a === void 0 ? void 0 : _a.call(task);
    }
    /**
     * Actually perform the task.
     * @param task The current executing task.
     */

  }, {
    key: "do",
    value: function _do(task) {
      if (typeof task.do === "function") {
        task.do();
      } else {
        (0,external_kolmafia_namespaceObject.adv1)(task.do, 0, "");
      }

      (0,external_kolmafia_namespaceObject.runCombat)();

      while ((0,external_kolmafia_namespaceObject.inMultiFight)()) {
        (0,external_kolmafia_namespaceObject.runCombat)();
      }

      if ((0,external_kolmafia_namespaceObject.choiceFollowsFight)()) (0,external_kolmafia_namespaceObject.runChoice)(-1);
    }
    /**
     * Check if the task.do should be immediately repeated without any prep.
     *
     * By default, this is only used to repeat a task if we hit one of:
     *   1. Halloweener dog noncombats,
     *   2. June cleaver noncombats, or
     *   3. Lil' Doctor™ bag noncombt.
     * @param task The current executing task.
     * @returns True if the task should be immediately repeated.
     */

  }, {
    key: "shouldRepeatAdv",
    value: function shouldRepeatAdv(task) {
      return task.do instanceof external_kolmafia_namespaceObject.Location && lastEncounterWasWanderingNC();
    }
    /**
     * Do any task-specific wrapup activities.
     * @param task The current executing task.
     */

  }, {
    key: "post",
    value: function post(task) {
      var _a;

      (_a = task.post) === null || _a === void 0 ? void 0 : _a.call(task);
    }
    /**
     * Mark that an attempt was made on the current task.
     * @param task The current executing task.
     */

  }, {
    key: "markAttempt",
    value: function markAttempt(task) {
      if (!(task.name in this.attempts)) this.attempts[task.name] = 0;
      this.attempts[task.name]++;
    }
    /**
     * Check if the task has passed any of its internal limits.
     * @param task The task to check.
     * @throws An error if any of the internal limits have been passed.
     */

  }, {
    key: "checkLimits",
    value: function checkLimits(task, postcondition) {
      var _a;

      if (!task.limit) return;
      var failureMessage = task.limit.message ? " ".concat(task.limit.message) : "";

      if (!task.completed()) {
        if (task.limit.tries && this.attempts[task.name] >= task.limit.tries) throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.tries, " attempts. Please check what went wrong.").concat(failureMessage);
        if (task.limit.soft && this.attempts[task.name] >= task.limit.soft) throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.soft, " attempts. Please check what went wrong (you may just be unlucky).").concat(failureMessage);
        if (task.limit.turns && task.do instanceof external_kolmafia_namespaceObject.Location && task.do.turnsSpent >= task.limit.turns) throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.turns, " turns. Please check what went wrong.").concat(failureMessage);
        if (task.limit.unready && ((_a = task.ready) === null || _a === void 0 ? void 0 : _a.call(task))) throw "Task ".concat(task.name, " is still ready, but it should not be. Please check what went wrong.").concat(failureMessage);
      }

      if (postcondition && !postcondition()) {
        throw "Task ".concat(task.name, " failed its guard. Please check what went wrong.").concat(failureMessage);
      }
    }
    /**
     * Initialize properties for the script.
     * @param manager The properties manager to use.
     */

  }, {
    key: "initPropertiesManager",
    value: function initPropertiesManager(manager) {
      var _a; // Properties adapted from garbo


      manager.set({
        logPreferenceChange: true,
        logPreferenceChangeFilter: engine_toConsumableArray(new Set([].concat(engine_toConsumableArray(property_get("logPreferenceChangeFilter").split(",")), ["libram_savedMacro", "maximizerMRUList", "testudinalTeachings", "_lastCombatStarted"]))).sort().filter(a => a).join(","),
        battleAction: "custom combat script",
        autoSatisfyWithMall: true,
        autoSatisfyWithNPCs: true,
        autoSatisfyWithCoinmasters: true,
        autoSatisfyWithStash: false,
        dontStopForCounters: true,
        maximizerFoldables: true,
        hpAutoRecovery: "-0.05",
        hpAutoRecoveryTarget: "0.0",
        mpAutoRecovery: "-0.05",
        mpAutoRecoveryTarget: "0.0",
        afterAdventureScript: "",
        betweenBattleScript: "",
        choiceAdventureScript: "",
        familiarScript: "",
        currentMood: "apathetic",
        autoTuxedo: true,
        autoPinkyRing: true,
        autoGarish: true,
        allowNonMoodBurning: false,
        allowSummonBurning: true,
        libramSkillsSoftcore: "none"
      });

      if (this.options.ccs !== "") {
        if (this.options.ccs === undefined && (0,external_kolmafia_namespaceObject.readCcs)(grimoireCCS) === "") {
          // Write a simple CCS so we can switch to it
          (0,external_kolmafia_namespaceObject.writeCcs)("[ default ]\nabort", grimoireCCS);
        }

        manager.set({
          customCombatScript: (_a = this.options.ccs) !== null && _a !== void 0 ? _a : grimoireCCS
        });
      }
    }
  }]);

  return Engine;
}();
function maxSongs() {
  return have(template_string_$skill(engine_templateObject || (engine_templateObject = engine_taggedTemplateLiteral(["Mariachi Memory"])))) ? 4 : 3;
}
var wanderingNCs = new Set(["Wooof! Wooooooof!", "Playing Fetch*", "A Pound of Cure", "Aunts not Ants", "Bath Time", "Beware of Aligator", "Delicious Sprouts", "Hypnotic Master", "Lost and Found", "Poetic Justice", "Summer Days", "Teacher's Pet"]);
/**
 * Return true if the last adv was one of:
 *   1. Halloweener dog noncombats,
 *   2. June cleaver noncombats, or
 *   3. Lil' Doctor™ bag noncombt.
 */

function lastEncounterWasWanderingNC() {
  return wanderingNCs.has(property_get("lastEncounter"));
}
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/route.js
function route_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function route_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { route_ownKeys(Object(source), true).forEach(function (key) { route_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { route_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function route_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function route_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = route_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function route_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return route_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return route_arrayLikeToArray(o, minLen); }

function route_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Extract a list of tasks from the provided quests.
 *
 * Each task name is prepended with the quest name ("Quest Name/Task Name").
 * The quest-local names referred to in task.after are updated appropriately.
 * The task completion condition is updated to include the quest completion.
 *
 * Tasks are returned in-order: all tasks from the first quest, then all tasks
 * from the second quest, etc.
 *
 * @param quests The list of quests. This method does not modify the quest
 *    objects or their tasks.
 * @param implicitAfter If true, each task with task.after = undefined will
 *    have a dependency added on the previous task in the list.
 * @returns A list of tasks from the input quests (with updated properties).
 */
function getTasks(quests) {
  var implicitAfter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var _a, _b;

  var result = [];

  var _iterator = route_createForOfIteratorHelper(quests),
      _step;

  try {
    var _loop = function _loop() {
      var quest = _step.value;
      var questCompleted = quest.completed;

      var _iterator3 = route_createForOfIteratorHelper(quest.tasks),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _task2 = _step3.value;

          // Include quest name in task names and dependencies (unless dependency quest is given)
          var renamedTask = route_objectSpread({}, _task2);

          renamedTask.name = "".concat(quest.name, "/").concat(_task2.name);
          renamedTask.after = (_a = _task2.after) === null || _a === void 0 ? void 0 : _a.map(after => after.includes("/") ? after : "".concat(quest.name, "/").concat(after)); // Include previous task as a dependency

          if (implicitAfter && _task2.after === undefined && result.length > 0) renamedTask.after = [result[result.length - 1].name]; // Include quest completion in task completion

          if (questCompleted !== undefined) {
            (function () {
              var taskCompleted = _task2.completed;

              renamedTask.completed = () => questCompleted() || taskCompleted();
            })();
          }

          result.push(renamedTask);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    } // Verify the dependency names of all tasks

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var names = new Set();

  for (var _i = 0, _result = result; _i < _result.length; _i++) {
    var task = _result[_i];
    names.add(task.name);
  }

  for (var _i2 = 0, _result2 = result; _i2 < _result2.length; _i2++) {
    var _task = _result2[_i2];

    var _iterator2 = route_createForOfIteratorHelper((_b = _task.after) !== null && _b !== void 0 ? _b : []),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var after = _step2.value;

        if (!names.has(after)) {
          throw "Unknown task dependency ".concat(after, " of ").concat(_task.name);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  return result;
}
function orderByRoute(tasks, routing, ignore_missing_tasks) {
  var priorities = new Map();

  var _iterator4 = route_createForOfIteratorHelper(tasks),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var task = _step4.value;
      priorities.set(task.name, [1000, task]);
    } // Prioritize the routing list of tasks first

  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  function setPriorityRecursive(task, priority) {
    var _a;

    var old_priority = priorities.get(task);

    if (old_priority === undefined) {
      if (ignore_missing_tasks) return;
      throw "Unknown routing task ".concat(task);
    }

    if (old_priority[0] <= priority) return;
    priorities.set(task, [priority, old_priority[1]]);

    var _iterator5 = route_createForOfIteratorHelper((_a = old_priority[1].after) !== null && _a !== void 0 ? _a : []),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var requirement = _step5.value;
        setPriorityRecursive(requirement, priority - 0.01);
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }

  for (var i = 0; i < routing.length; i++) {
    setPriorityRecursive(routing[i], i);
  } // Sort all tasks by priority.
  // Since this sort is stable, we default to earlier tasks.


  var result = tasks.slice();
  result.sort((a, b) => (priorities.get(a.name) || [1000])[0] - (priorities.get(b.name) || [1000])[0]);
  return result;
}
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/index.js








;// CONCATENATED MODULE: ./src/engine/engine.ts
var engine_engine_templateObject, engine_templateObject2, engine_templateObject3;

function engine_engine_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function engine_engine_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = engine_engine_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function engine_slicedToArray(arr, i) { return engine_arrayWithHoles(arr) || engine_iterableToArrayLimit(arr, i) || engine_engine_unsupportedIterableToArray(arr, i) || engine_nonIterableRest(); }

function engine_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function engine_engine_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return engine_engine_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return engine_engine_arrayLikeToArray(o, minLen); }

function engine_engine_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function engine_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function engine_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function engine_engine_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function engine_engine_createClass(Constructor, protoProps, staticProps) { if (protoProps) engine_engine_defineProperties(Constructor.prototype, protoProps); if (staticProps) engine_engine_defineProperties(Constructor, staticProps); return Constructor; }

function engine_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { engine_get = Reflect.get; } else { engine_get = function _get(target, property, receiver) { var base = engine_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return engine_get(target, property, receiver || target); }

function engine_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = engine_getPrototypeOf(object); if (object === null) break; } return object; }

function engine_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) engine_setPrototypeOf(subClass, superClass); }

function engine_setPrototypeOf(o, p) { engine_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return engine_setPrototypeOf(o, p); }

function engine_createSuper(Derived) { var hasNativeReflectConstruct = engine_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = engine_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = engine_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return engine_possibleConstructorReturn(this, result); }; }

function engine_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return engine_assertThisInitialized(self); }

function engine_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function engine_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function engine_getPrototypeOf(o) { engine_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return engine_getPrototypeOf(o); }

function engine_engine_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function engine_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var trackedPref = function trackedPref(pref, name, maxUses) {
  engine_engine_classCallCheck(this, trackedPref);

  engine_defineProperty(this, "pref", void 0);

  engine_defineProperty(this, "name", void 0);

  engine_defineProperty(this, "maxUses", void 0);

  this.pref = pref;
  this.name = name;
  if (maxUses) this.maxUses = maxUses;
};
var freeBanishPrefs = [new trackedPref("_feelHatredUsed", "Feel Hatred", 3), new trackedPref("_reflexHammerUsed", "Reflex Hammer", 3), new trackedPref("_latteRefillsUsed", "Latte Refills", 3), new trackedPref("_kgbTranquilizerDartUses", "KGB Tranquilizers", 3), new trackedPref("_snokebombUsed", "Snokebomb", 3)];
var freeKillPrefs = [new trackedPref("_chestXRayUsed", "Chest X-Ray", 3), new trackedPref("_shatteringPunchUsed", "Shattering Punch", 3), new trackedPref("_gingerbreadMobHitUsed", "Gingerbread Mob Hit", 1), new trackedPref("_missileLauncherUsed", "Missile Launcher", 1), new trackedPref("_CSParkaYRUsed", "Parka YR")];
var notableSkillPrefs = [new trackedPref("_saberForceUses", "Saber Forces", 5), new trackedPref("_monstersMapped", "Monsters Mapped", 3), new trackedPref("_feelEnvyUsed", "Feel Envy", 3), new trackedPref("_sourceTerminalDigitizeUses", "Digitize", 3), new trackedPref("_sourceTerminalPortscanUses", "Portscan", 3), new trackedPref("_sourceTerminalDuplicateUses", "Duplicate", 3), new trackedPref("_sourceTerminalEnhanceUses", "Source Terminal Enhances", 1)];
var freeFightPrefs = [new trackedPref("_snojoFreeFights", "Snojo", 10), new trackedPref("_neverendingPartyFreeTurns", "NEP", 10), new trackedPref("_witchessFights", "Witchess", 5), new trackedPref("_machineTunnelsAdv", "DMT", 5), new trackedPref("_loveTunnelUsed", "LOV Tunnel", 3), new trackedPref("_voteFreeFights", "Voters", 3), new trackedPref("_godLobsterFights", "God Lobster", 3), new trackedPref("_speakeasyFreeFights", "Oliver's Place", 3), new trackedPref("_eldritchHorrorEvoked", "Eldritch Tentacle", 1), new trackedPref("_sausageFights", "Sausage Goblins")];
var potentiallyFreeFightPrefs = [new trackedPref("_backUpUses", "Backup Camera", 11), new trackedPref("_locketMonstersFought", "Locket Reminisces", 3), new trackedPref("_photocopyUsed", "Fax Machine", 1), new trackedPref("_chateauMonsterFought", "Chateau Painting", 1)];
var farmingResourcePrefs = [new trackedPref("_powerfulGloveBatteryPowerUsed", "Powerful Glove Charges", 100), new trackedPref("_kgbClicksUsed", "KGB Clicks", 22), new trackedPref("_deckCardsDrawn", "Deck Draws", 15), new trackedPref("_macrometeoriteUses", "Macrometeorites", 10), new trackedPref("_AAABatteriesUsed", "Batteries (AAA)", 7), new trackedPref("tomeSummons", "Tome Summons", 3), new trackedPref("_genieWishesUsed", "Genie Wishes", 3), new trackedPref("_pottedTeaTreeUsed", "Tea Tree", 3), new trackedPref("_favoriteBirdVisited", "Favorite Bird", 1), new trackedPref("_clanFortuneBuffUsed", "Zatara Consult", 1), new trackedPref("_floundryItemCreated", "Clan Floundry", 1), new trackedPref("_gingerbreadCityNoonCompleted", "GingerbreadCity Noon", 1), new trackedPref("_gingerbreadCityMidnightCompleted", "GingerbreadCity Midnight", 1), new trackedPref("_pantogramModifier", "Pantogram", 1), new trackedPref("_cargoPocketEmptied", "Cargo Shorts", 1), new trackedPref("_freePillKeeperUsed", "Pillkeeper", 1)];
var trackedPreferences = [].concat(freeBanishPrefs, freeKillPrefs, notableSkillPrefs, freeFightPrefs, potentiallyFreeFightPrefs, farmingResourcePrefs);
var engine_Engine = /*#__PURE__*/function (_BaseEngine) {
  engine_inherits(Engine, _BaseEngine);

  var _super = engine_createSuper(Engine);

  function Engine() {
    engine_engine_classCallCheck(this, Engine);

    return _super.apply(this, arguments);
  }

  engine_engine_createClass(Engine, [{
    key: "getNextTask",
    value: function getNextTask() {
      return this.tasks.find(task => !task.completed() && (task.ready ? task.ready() : true));
    }
  }, {
    key: "execute",
    value: function execute(task) {
      var originalValues = trackedPreferences.map(_ref => {
        var pref = _ref.pref;
        return [pref, property_get(pref).toString()];
      });
      this.checkLimits(task, undefined); // Handle unequippables in outfit here

      var outfit = task.outfit;
      var spec = undelay(outfit);

      if (spec !== undefined) {
        if (spec instanceof Outfit) {
          var badSlots = Array.from(spec.equips.entries()).filter(_ref2 => {
            var _ref3 = engine_slicedToArray(_ref2, 2),
                it = _ref3[1];

            return !have(it) && it !== null;
          }).map(_ref4 => {
            var _ref5 = engine_slicedToArray(_ref4, 1),
                s = _ref5[0];

            return s;
          });
          badSlots.forEach(s => {
            var _spec$equips$get;

            (0,external_kolmafia_namespaceObject.print)("Ignoring slot ".concat(s, " because we don't have ").concat((_spec$equips$get = spec.equips.get(s)) !== null && _spec$equips$get !== void 0 ? _spec$equips$get : ""), "red");
            spec.equips.delete(s);
          });
        } else {
          var _iterator = engine_engine_createForOfIteratorHelper(outfitSlots),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var slotName = _step.value;
              var itemOrItems = spec[slotName];

              if (itemOrItems) {
                if (itemOrItems instanceof external_kolmafia_namespaceObject.Item) {
                  if (!have(itemOrItems) && itemOrItems !== null) {
                    (0,external_kolmafia_namespaceObject.print)("Ignoring slot ".concat(slotName, " because we don't have ").concat(itemOrItems), "red");
                    spec[slotName] = undefined;
                  }
                } else {
                  if (!itemOrItems.some(it => have(it) && it !== null)) {
                    (0,external_kolmafia_namespaceObject.print)("Ignoring slot ".concat(slotName, " because we don't have ").concat(itemOrItems.map(it => it.name).join(", ")), "red");
                    spec[slotName] = undefined;
                  }
                }
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        task.outfit = spec;
      }

      engine_get(engine_getPrototypeOf(Engine.prototype), "execute", this).call(this, task);

      if (have($effect(engine_engine_templateObject || (engine_engine_templateObject = engine_engine_taggedTemplateLiteral(["Beaten Up"]))))) {
        if (property_get("lastEncounter") === "Sssshhsssblllrrggghsssssggggrrgglsssshhssslblgl") uneffect($effect(engine_templateObject2 || (engine_templateObject2 = engine_engine_taggedTemplateLiteral(["Beaten Up"]))));else throw "Fight was lost; stop.";
      }

      originalValues.forEach(_ref6 => {
        var _ref7 = engine_slicedToArray(_ref6, 2),
            pref = _ref7[0],
            val = _ref7[1];

        if (val !== property_get(pref).toString()) {
          var s = "_instant".concat(pref);
          var arr = property_get(s, "").split(",");
          arr.push(task.name);
          _set(s, arr.filter((v, i, a) => v.length > 0 && a.indexOf(v) === i).join(","));
        }
      });

      if (task.completed()) {
        (0,external_kolmafia_namespaceObject.print)("".concat(task.name, " completed!"), "blue");
      } else {
        (0,external_kolmafia_namespaceObject.print)("".concat(task.name, " not completed!"), "blue");
      }
    }
  }, {
    key: "dress",
    value: function dress(task, outfit) {
      engine_get(engine_getPrototypeOf(Engine.prototype), "dress", this).call(this, task, outfit);
    }
  }, {
    key: "prepare",
    value: function prepare(task) {
      engine_get(engine_getPrototypeOf(Engine.prototype), "prepare", this).call(this, task);

      if (task.combat !== undefined && (0,external_kolmafia_namespaceObject.myHp)() < (0,external_kolmafia_namespaceObject.myMaxhp)() * 0.9) (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(engine_templateObject3 || (engine_templateObject3 = engine_engine_taggedTemplateLiteral(["Cannelloni Cocoon"]))));
    }
  }, {
    key: "initPropertiesManager",
    value: function initPropertiesManager(manager) {
      engine_get(engine_getPrototypeOf(Engine.prototype), "initPropertiesManager", this).call(this, manager);

      manager.set({
        hpAutoRecovery: -0.05,
        mpAutoRecovery: -0.05,
        maximizerCombinationLimit: 0
      });
    }
  }]);

  return Engine;
}(Engine);
// EXTERNAL MODULE: ./node_modules/libram/node_modules/core-js/modules/es.object.values.js
var es_object_values = __webpack_require__(2231);
;// CONCATENATED MODULE: ./node_modules/libram/dist/modifierTypes.js
// THIS FILE IS AUTOMATICALLY GENERATED. See tools/parseModifiers.ts for more information
var modifierTypes_booleanModifiers = ["Softcore Only", "Single Equip", "Never Fumble", "Weakens Monster", "Free Pull", "Variable", "Nonstackable Watch", "Cold Immunity", "Hot Immunity", "Sleaze Immunity", "Spooky Immunity", "Stench Immunity", "Cold Vulnerability", "Hot Vulnerability", "Sleaze Vulnerability", "Spooky Vulnerability", "Stench Vulnerability", "Moxie Controls MP", "Moxie May Control MP", "Four Songs", "Adventure Underwater", "Underwater Familiar", "Generic", "Unarmed", "No Pull", "Lasts Until Rollover", "Attacks Can't Miss", "Pirate", "Breakable", "Drops Items", "Drops Meat"];
var classModifiers = ["Class"];
var modifierTypes_numericModifiers = ["Familiar Weight", "Monster Level", "Combat Rate", "Initiative", "Experience", "Item Drop", "Meat Drop", "Damage Absorption", "Damage Reduction", "Cold Resistance", "Hot Resistance", "Sleaze Resistance", "Spooky Resistance", "Stench Resistance", "Mana Cost", "Moxie", "Moxie Percent", "Muscle", "Muscle Percent", "Mysticality", "Mysticality Percent", "Maximum HP", "Maximum HP Percent", "Maximum MP", "Maximum MP Percent", "Weapon Damage", "Ranged Damage", "Spell Damage", "Spell Damage Percent", "Cold Damage", "Hot Damage", "Sleaze Damage", "Spooky Damage", "Stench Damage", "Cold Spell Damage", "Hot Spell Damage", "Sleaze Spell Damage", "Spooky Spell Damage", "Stench Spell Damage", "Underwater Combat Rate", "Fumble", "HP Regen Min", "HP Regen Max", "MP Regen Min", "MP Regen Max", "Adventures", "Familiar Weight Percent", "Weapon Damage Percent", "Ranged Damage Percent", "Stackable Mana Cost", "Hobo Power", "Base Resting HP", "Resting HP Percent", "Bonus Resting HP", "Base Resting MP", "Resting MP Percent", "Bonus Resting MP", "Critical Hit Percent", "PvP Fights", "Volleyball", "Sombrero", "Leprechaun", "Fairy", "Meat Drop Penalty", "Hidden Familiar Weight", "Item Drop Penalty", "Initiative Penalty", "Food Drop", "Booze Drop", "Hat Drop", "Weapon Drop", "Offhand Drop", "Shirt Drop", "Pants Drop", "Accessory Drop", "Volleyball Effectiveness", "Sombrero Effectiveness", "Leprechaun Effectiveness", "Fairy Effectiveness", "Familiar Weight Cap", "Slime Resistance", "Slime Hates It", "Spell Critical Percent", "Muscle Experience", "Mysticality Experience", "Moxie Experience", "Effect Duration", "Candy Drop", "DB Combat Damage", "Sombrero Bonus", "Familiar Experience", "Sporadic Meat Drop", "Sporadic Item Drop", "Meat Bonus", "Pickpocket Chance", "Combat Mana Cost", "Muscle Experience Percent", "Mysticality Experience Percent", "Moxie Experience Percent", "Minstrel Level", "Muscle Limit", "Mysticality Limit", "Moxie Limit", "Song Duration", "Prismatic Damage", "Smithsness", "Supercold Resistance", "Reduce Enemy Defense", "Pool Skill", "Surgeonosity", "Familiar Damage", "Gear Drop", "Maximum Hooch", "Water Level", "Crimbot Outfit Power", "Familiar Tuning Muscle", "Familiar Tuning Mysticality", "Familiar Tuning Moxie", "Random Monster Modifiers", "Luck", "Othello Skill", "Disco Style", "Rollover Effect Duration", "Sixgun Damage", "Fishing Skill", "Additional Song", "Sprinkle Drop", "Absorb Adventures", "Absorb Stats", "Rubee Drop", "Kruegerand Drop", "WarBear Armor Penetration", "Clowniness", "Maximum PP", "Plumber Power", "Drippy Damage", "Drippy Resistance", "Energy", "Scrap", "Familiar Action Bonus", "Water"];
var effectModifiers = ["Effect", "Rollover Effect"];
var monsterModifiers = ["Avatar"];
var skillModifiers = ["Skill"];
var statModifiers = ["Plumber Stat"];
var stringModifiers = ["Intrinsic Effect", "Equalize", "Wiki Name", "Modifiers", "Outfit", "Stat Tuning", "Equips On", "Familiar Effect", "Jiggle", "Equalize Muscle", "Equalize Mysticality", "Equalize Moxie", "Floor Buffed Muscle", "Floor Buffed Mysticality", "Floor Buffed Moxie"];
;// CONCATENATED MODULE: ./node_modules/libram/dist/modifier.js
function modifier_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function modifier_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { modifier_ownKeys(Object(source), true).forEach(function (key) { modifier_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { modifier_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function modifier_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function modifier_get(name, subject) {
  if (utils_arrayContains(name, modifierTypes_booleanModifiers)) {
    return subject === undefined ? (0,external_kolmafia_namespaceObject.booleanModifier)(name) : (0,external_kolmafia_namespaceObject.booleanModifier)(subject, name);
  }

  if (utils_arrayContains(name, classModifiers)) {
    return (0,external_kolmafia_namespaceObject.classModifier)(subject, name);
  }

  if (utils_arrayContains(name, effectModifiers)) {
    return (0,external_kolmafia_namespaceObject.effectModifier)(subject, name);
  }

  if (utils_arrayContains(name, monsterModifiers)) {
    return (0,external_kolmafia_namespaceObject.monsterModifier)(subject, name);
  }

  if (utils_arrayContains(name, modifierTypes_numericModifiers)) {
    return subject === undefined ? (0,external_kolmafia_namespaceObject.numericModifier)(name) : (0,external_kolmafia_namespaceObject.numericModifier)(subject, name);
  }

  if (utils_arrayContains(name, skillModifiers)) {
    return (0,external_kolmafia_namespaceObject.skillModifier)(subject, name);
  }

  if (utils_arrayContains(name, stringModifiers)) {
    return subject === undefined ? (0,external_kolmafia_namespaceObject.stringModifier)(name) : (0,external_kolmafia_namespaceObject.stringModifier)(subject, name);
  }

  if (utils_arrayContains(name, statModifiers)) {
    return (0,external_kolmafia_namespaceObject.statModifier)(subject, name);
  }
}
/**
 * Merge two Modifiers objects into one, summing all numeric modifiers, ||ing all boolean modifiers, and otherwise letting the second object overwrite the first.
 * @param modifiers1 Modifiers objects to be merged onto.
 * @param modifiers2 Modifiers object to merge.
 * @returns A single Modifiers object obtained by merging.
 */

function pairwiseMerge(modifiers1, modifiers2) {
  var returnValue = modifier_objectSpread(modifier_objectSpread({}, modifiers1), modifiers2);

  for (var modifier in modifiers1) {
    if (Array.from(Object.values(modifiers2)).includes(modifier)) {
      if (arrayContains(modifier, numericModifiers)) {
        var _modifiers1$modifier, _modifiers2$modifier;

        returnValue[modifier] = ((_modifiers1$modifier = modifiers1[modifier]) !== null && _modifiers1$modifier !== void 0 ? _modifiers1$modifier : 0) + ((_modifiers2$modifier = modifiers2[modifier]) !== null && _modifiers2$modifier !== void 0 ? _modifiers2$modifier : 0);
      }

      if (arrayContains(modifier, booleanModifiers)) {
        var _modifiers1$modifier2, _modifiers2$modifier2;

        returnValue[modifier] = ((_modifiers1$modifier2 = modifiers1[modifier]) !== null && _modifiers1$modifier2 !== void 0 ? _modifiers1$modifier2 : false) || ((_modifiers2$modifier2 = modifiers2[modifier]) !== null && _modifiers2$modifier2 !== void 0 ? _modifiers2$modifier2 : false);
      }
    }
  }

  return returnValue;
}
/**
 * Merge arbitrarily many Modifiers objects into one, summing all numeric modifiers, and ||ing all boolean modifiers.
 * @param modifierss Modifiers objects to be merged together.
 * @returns A single Modifiers object obtained by merging.
 */


function mergeModifiers() {
  for (var _len = arguments.length, modifierss = new Array(_len), _key = 0; _key < _len; _key++) {
    modifierss[_key] = arguments[_key];
  }

  return modifierss.reduce((a, b) => pairwiseMerge(a, b), {});
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2017/MummingTrunk.js
function MummingTrunk_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = MummingTrunk_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function MummingTrunk_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return MummingTrunk_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return MummingTrunk_arrayLikeToArray(o, minLen); }

function MummingTrunk_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function toModifier(input) {
  var regExp = new RegExp(/Experience \((.*?)\)/);
  var matcher = input.match(regExp);
  return matcher ? "".concat(matcher[2], " Experience") : input;
}
/**
 * Parses the _mummeryMods preference into a Map for easier use.
 * @returns A map, mapping Familiars to a Tuple consisting of the NumericModifier attached to the familiar, and the value thereof.
 */


function currentCostumes() {
  var entries = property_get("_mummeryMods").split(",");
  var returnValue = new Map();
  var regExp = new RegExp(/([^:]+): \[(d+)\*fam\(([^)]+)\)\]/);

  var _iterator = MummingTrunk_createForOfIteratorHelper(entries),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var entry = _step.value;
      var matcher = entry.match(regExp);

      if (matcher) {
        returnValue.set((0,external_kolmafia_namespaceObject.toFamiliar)(matcher[3]), [toModifier(matcher[1]), parseInt(matcher[2])]);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return returnValue;
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/challengePaths/2015/CommunityService.js
var CommunityService_templateObject, CommunityService_templateObject2, CommunityService_templateObject3, CommunityService_templateObject4, CommunityService_templateObject5, CommunityService_templateObject6, CommunityService_templateObject7, CommunityService_templateObject8, CommunityService_templateObject9, CommunityService_templateObject10, CommunityService_templateObject11, CommunityService_templateObject12, CommunityService_templateObject13, CommunityService_templateObject14, CommunityService_templateObject15, CommunityService_templateObject16, CommunityService_templateObject17, CommunityService_templateObject18, CommunityService_templateObject19, CommunityService_templateObject20, CommunityService_templateObject21, CommunityService_templateObject22, CommunityService_templateObject23, CommunityService_templateObject24, CommunityService_templateObject25, CommunityService_templateObject26, CommunityService_templateObject27;

function CommunityService_slicedToArray(arr, i) { return CommunityService_arrayWithHoles(arr) || CommunityService_iterableToArrayLimit(arr, i) || CommunityService_unsupportedIterableToArray(arr, i) || CommunityService_nonIterableRest(); }

function CommunityService_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function CommunityService_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return CommunityService_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return CommunityService_arrayLikeToArray(o, minLen); }

function CommunityService_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function CommunityService_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function CommunityService_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function CommunityService_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CommunityService_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CommunityService_createClass(Constructor, protoProps, staticProps) { if (protoProps) CommunityService_defineProperties(Constructor.prototype, protoProps); if (staticProps) CommunityService_defineProperties(Constructor, staticProps); return Constructor; }

function CommunityService_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CommunityService_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var thralls = new Map([[$stat(CommunityService_templateObject || (CommunityService_templateObject = CommunityService_taggedTemplateLiteral(["muscle"]))), $thrall(CommunityService_templateObject2 || (CommunityService_templateObject2 = CommunityService_taggedTemplateLiteral(["Elbow Macaroni"])))], [$stat(CommunityService_templateObject3 || (CommunityService_templateObject3 = CommunityService_taggedTemplateLiteral(["moxie"]))), $thrall(CommunityService_templateObject4 || (CommunityService_templateObject4 = CommunityService_taggedTemplateLiteral(["Penne Dreadful"])))]]);

var statCommunityServicePredictor = stat => {
  return () => 60 - Math.floor(1 / 30 * ((0,external_kolmafia_namespaceObject.myBuffedstat)(stat) - (0,external_kolmafia_namespaceObject.myBasestat)(thralls.get(stat) === (0,external_kolmafia_namespaceObject.myThrall)() && !have($effect(CommunityService_templateObject5 || (CommunityService_templateObject5 = CommunityService_taggedTemplateLiteral(["Expert Oiliness"])))) ? $stat(CommunityService_templateObject6 || (CommunityService_templateObject6 = CommunityService_taggedTemplateLiteral(["mysticality"]))) : stat)));
};

var visitCouncil = () => (0,external_kolmafia_namespaceObject.visitUrl)("council.php");

var baseWeight = () => have($effect(CommunityService_templateObject7 || (CommunityService_templateObject7 = CommunityService_taggedTemplateLiteral(["Fidoxene"])))) ? 20 : (0,external_kolmafia_namespaceObject.familiarWeight)((0,external_kolmafia_namespaceObject.myFamiliar)());

var CommunityService = /*#__PURE__*/function () {
  /**
   * Class to store properties of various CS tests.
   * @param id The id the game HTML uses to identify the test; this is used primarily in runChoice.
   * @param stat The principle stat the test measures, often used as more easily memorable shorthand for the specific tests
   * @param property The name of the test as a string, often used as part of the string property "csServicesPerformed".
   * @param predictor A function that returns an estimate for the number of turns that the test will take given your character's current state.
   * @param maximizeRequirements A Requirement object, if applicable, that aligns with the things needed to maximize for this particular test.
   */
  function CommunityService(id, stat, property, predictor, maximizeRequirements) {
    CommunityService_classCallCheck(this, CommunityService);

    CommunityService_defineProperty(this, "choice", void 0);

    CommunityService_defineProperty(this, "stat", void 0);

    CommunityService_defineProperty(this, "property", void 0);

    CommunityService_defineProperty(this, "predictor", void 0);

    CommunityService_defineProperty(this, "maximizeRequirements", void 0);

    this.choice = id;
    this.stat = stat;
    this.property = property;
    this.predictor = predictor;
    this.maximizeRequirements = maximizeRequirements;
  }
  /**
   * @returns The id number of the test, used primarily in runChoice.
   */


  CommunityService_createClass(CommunityService, [{
    key: "id",
    get: function get() {
      return this.choice;
    }
    /**
     * @returns The primary stat the test measures, used primarily as memorable shorthand in place of test names.
     */

  }, {
    key: "statName",
    get: function get() {
      return this.stat;
    }
    /**
     * @returns The name of the test, used primarily as part of the string property "csServicesPerformed"
     */

  }, {
    key: "name",
    get: function get() {
      return this.property;
    }
    /**
     *  @returns The predicted number of turns this test will take given your character's current state.
     */

  }, {
    key: "prediction",
    get: function get() {
      return this.predictor();
    }
    /**
     * @returns A Requirement object, if applicable, that aligns with the things needed to maximize for this particular test.
     */

  }, {
    key: "requirement",
    get: function get() {
      return this.maximizeRequirements;
    }
  }, {
    key: "isDone",
    value:
    /**
     * Checks the "csServicesPerformed" property to see whether mafia currently believes this test is complete.
     * @returns Whether mafia currently believes this test is complete.
     */
    function isDone() {
      return property_get("csServicesPerformed").includes(this.property);
    }
    /**
     * Maximizes based on the Requirement associated with this particular test.
     */

  }, {
    key: "maximize",
    value: function maximize() {
      if (this.maximizeRequirements) this.maximizeRequirements.maximize();
    }
    /**
     * Attempts to turn in the test to the Council of Loathing.
     * @returns Whether mafia believes the test is complete at the end of this function.
     */

  }, {
    key: "do",
    value: function _do() {
      if (property_get("csServicesPerformed").trim().length === 0) visitCouncil();
      visitCouncil();
      var councilText = (0,external_kolmafia_namespaceObject.runChoice)(this.choice);
      return this._verifyIsDone(councilText);
    }
    /**
     * Wrapper function that prepares for a test and then completes it, adding time and turn details to the log.
     * @param prepare A function that does all necessary preparations for this CS test, including choosing your outfit. Optionally returns the number of turns you expect to spend preparing for the test.
     * @param maxTurns We will run the test iff the predicted/actual turns is less than or equal to this parameter.
     * @returns "completed", "failed", or "already completed".
     */

  }, {
    key: "run",
    value: function run(prepare) {
      var maxTurns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
      if (this.isDone()) return "already completed";
      var startTime = Date.now();
      var startTurns = (0,external_kolmafia_namespaceObject.myTurncount)();
      var additionalTurns;

      try {
        var _prepare;

        additionalTurns = (_prepare = prepare()) !== null && _prepare !== void 0 ? _prepare : 0;
      } catch (e) {
        (0,external_kolmafia_namespaceObject.print)("".concat(e), "red");
        return "failed";
      }

      var prediction = this.predictor();
      var council = visitCouncil();

      var turns = this._actualCost(council);

      if (!turns) return "already completed";

      if (turns > Math.min(maxTurns, (0,external_kolmafia_namespaceObject.myAdventures)())) {
        return "failed";
      }

      if (!this.do()) return "failed";
      CommunityService.log[this.property] = {
        predictedTurns: prediction + additionalTurns,
        turnCost: (0,external_kolmafia_namespaceObject.myTurncount)() - startTurns,
        seconds: (Date.now() - startTime) / 1000,
        type: "test"
      };
      return "completed";
    }
  }, {
    key: "_verifyIsDone",
    value: function _verifyIsDone(councilText) {
      return !councilText.includes("<input type=hidden name=option value=".concat(this.choice, ">"));
    }
    /**
     * Checks council.php to verify that a test is complete; more reliable than isDone, but requires an additional pagehit.
     * @returns Whether council.php suggests that the test is complete.
     */

  }, {
    key: "verifyIsDone",
    value: function verifyIsDone() {
      return this._verifyIsDone(visitCouncil());
    }
  }, {
    key: "_actualCost",
    value: function _actualCost(councilText) {
      var match = councilText.match("<input type=hidden name=option value=".concat(this.id, ">.*?Perform Service \\((\\d+) Adventures\\)"));
      return match ? parseInt(match[1]) : 0;
    }
    /**
     * Checks council.php for the number of turns this test will take; more reliable than prediction, but requires an additional pagehit.
     * @returns The number of turns to complete this test according to council.php.
     */

  }, {
    key: "actualCost",
    value: function actualCost() {
      return this._actualCost(visitCouncil());
    }
    /**
     * A log of the predicted turns, actual turns, and duration of each CS test performed.
     */

  }], [{
    key: "logTask",
    value: function logTask(name, action) {
      var _action;

      var startTime = Date.now();
      var startTurns = (0,external_kolmafia_namespaceObject.myTurncount)();
      var estimatedTurns = (_action = action()) !== null && _action !== void 0 ? _action : 0;
      CommunityService.log[name] = {
        type: "task",
        turnCost: (0,external_kolmafia_namespaceObject.myTurncount)() - startTurns,
        predictedTurns: estimatedTurns,
        seconds: (Date.now() - startTime) / 1000
      };
    }
  }, {
    key: "printLog",
    value:
    /**
     * Prints turncount and time details of the test in question.
     * @param colour The colour (or color) you'd like the log to be printed in.
     */
    function printLog() {
      var colour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "blue";
      var logEntries = Object.entries(CommunityService.log);

      for (var _i = 0, _logEntries = logEntries; _i < _logEntries.length; _i++) {
        var _logEntries$_i = CommunityService_slicedToArray(_logEntries[_i], 2),
            testName = _logEntries$_i[0],
            testEntry = _logEntries$_i[1];

        var type = testEntry.type,
            predictedTurns = testEntry.predictedTurns,
            turnCost = testEntry.turnCost,
            seconds = testEntry.seconds;

        if (type === "test") {
          (0,external_kolmafia_namespaceObject.print)("We predicted the ".concat(testName, " test would take ").concat(predictedTurns, " turns, ").concat(predictedTurns === turnCost ? "and" : "but", " it took ").concat(turnCost, " turns."), colour);
          (0,external_kolmafia_namespaceObject.print)("".concat(testName, " took ").concat(seconds.toFixed(1), " seconds."), colour);
        } else {
          if (!(predictedTurns === 0 && turnCost === 0)) {
            (0,external_kolmafia_namespaceObject.print)("We predicted the task ".concat(testName, " would take ").concat(predictedTurns, " turns, ").concat(predictedTurns === turnCost ? "and" : "but", " it took ").concat(turnCost, " turns."), colour);
          }

          (0,external_kolmafia_namespaceObject.print)("The task ".concat(testName, " took ").concat(seconds.toFixed(1), " seconds."), colour);
        }
      }

      var totalTime = sum(logEntries, _ref => {
        var _ref2 = CommunityService_slicedToArray(_ref, 2),
            testEntry = _ref2[1];

        return testEntry.seconds;
      });
      (0,external_kolmafia_namespaceObject.print)("All together, you have spent ".concat(totalTime.toFixed(1), " seconds during this Community Service run"), colour);
    } // Below, we have the tests themselves.

  }]);

  return CommunityService;
}();

CommunityService_defineProperty(CommunityService, "log", {});

CommunityService_defineProperty(CommunityService, "HP", new CommunityService(1, "HP", "Donate Blood", () => 60 - Math.floor(((0,external_kolmafia_namespaceObject.myMaxhp)() - (0,external_kolmafia_namespaceObject.myBuffedstat)($stat(CommunityService_templateObject8 || (CommunityService_templateObject8 = CommunityService_taggedTemplateLiteral(["muscle"])))) - 3) / 30), new Requirement(["HP"], {})));

CommunityService_defineProperty(CommunityService, "Muscle", new CommunityService(2, "Muscle", "Feed The Children", statCommunityServicePredictor($stat(CommunityService_templateObject9 || (CommunityService_templateObject9 = CommunityService_taggedTemplateLiteral(["Muscle"])))), new Requirement(["Muscle"], {})));

CommunityService_defineProperty(CommunityService, "Mysticality", new CommunityService(3, "Mysticality", "Build Playground Mazes", statCommunityServicePredictor($stat(CommunityService_templateObject10 || (CommunityService_templateObject10 = CommunityService_taggedTemplateLiteral(["Mysticality"])))), new Requirement(["Mysticality"], {})));

CommunityService_defineProperty(CommunityService, "Moxie", new CommunityService(4, "Moxie", "Feed Conspirators", statCommunityServicePredictor($stat(CommunityService_templateObject11 || (CommunityService_templateObject11 = CommunityService_taggedTemplateLiteral(["Moxie"])))), new Requirement(["Moxie"], {})));

CommunityService_defineProperty(CommunityService, "FamiliarWeight", new CommunityService(5, "Familiar Weight", "Breed More Collies", () => 60 - Math.floor((baseWeight() + (0,external_kolmafia_namespaceObject.weightAdjustment)()) / 5), new Requirement(["Familiar Weight"], {})));

CommunityService_defineProperty(CommunityService, "WeaponDamage", new CommunityService(6, "Weapon Damage", "Reduce Gazelle Population", () => {
  var weaponPower = (0,external_kolmafia_namespaceObject.getPower)((0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject12 || (CommunityService_templateObject12 = CommunityService_taggedTemplateLiteral(["weapon"])))));
  var offhandPower = (0,external_kolmafia_namespaceObject.toSlot)((0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject13 || (CommunityService_templateObject13 = CommunityService_taggedTemplateLiteral(["off-hand"]))))) === $slot(CommunityService_templateObject14 || (CommunityService_templateObject14 = CommunityService_taggedTemplateLiteral(["weapon"]))) ? (0,external_kolmafia_namespaceObject.getPower)((0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject15 || (CommunityService_templateObject15 = CommunityService_taggedTemplateLiteral(["off-hand"]))))) : 0;
  var familiarPower = (0,external_kolmafia_namespaceObject.toSlot)((0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject16 || (CommunityService_templateObject16 = CommunityService_taggedTemplateLiteral(["familiar"]))))) === $slot(CommunityService_templateObject17 || (CommunityService_templateObject17 = CommunityService_taggedTemplateLiteral(["weapon"]))) ? (0,external_kolmafia_namespaceObject.getPower)((0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject18 || (CommunityService_templateObject18 = CommunityService_taggedTemplateLiteral(["familiar"]))))) : 0; // mafia does not currently count swagger

  var multiplier = have($effect(CommunityService_templateObject19 || (CommunityService_templateObject19 = CommunityService_taggedTemplateLiteral(["Bow-Legged Swagger"])))) ? 2 : 1; // We add 0.001 because the floor function sometimes introduces weird rounding errors

  return 60 - Math.floor(multiplier * (modifier_get("Weapon Damage") - 0.15 * (weaponPower + offhandPower + familiarPower)) / 50 + 0.001) - Math.floor(multiplier * modifier_get("Weapon Damage Percent") / 50 + 0.001);
}, new Requirement(["Weapon Damage", "Weapon Damage Percent"], {})));

CommunityService_defineProperty(CommunityService, "SpellDamage", new CommunityService(7, "Spell Damage", "Make Sausage", () => {
  var dragonfishDamage = (0,external_kolmafia_namespaceObject.myFamiliar)() === template_string_$familiar(CommunityService_templateObject20 || (CommunityService_templateObject20 = CommunityService_taggedTemplateLiteral(["Magic Dragonfish"]))) ? (0,external_kolmafia_namespaceObject.numericModifier)(template_string_$familiar(CommunityService_templateObject21 || (CommunityService_templateObject21 = CommunityService_taggedTemplateLiteral(["Magic Dragonfish"]))), "Spell Damage Percent", baseWeight() + (0,external_kolmafia_namespaceObject.weightAdjustment)(), template_string_$item.none) : 0; // We add 0.001 because the floor function sometimes introduces weird rounding errors

  return 60 - Math.floor(modifier_get("Spell Damage") / 50 + 0.001) - Math.floor((modifier_get("Spell Damage Percent") - dragonfishDamage) / 50 + 0.001);
}, new Requirement(["Spell Damage", "Spell Damage Percent"], {})));

CommunityService_defineProperty(CommunityService, "Noncombat", new CommunityService(8, "Non-Combat", "Be a Living Statue", () => {
  var noncombatRate = -1 * modifier_get("Combat Rate");
  var unsoftcappedRate = noncombatRate > 25 ? 25 + (noncombatRate - 25) * 5 : noncombatRate;
  return 60 - 3 * Math.floor(unsoftcappedRate / 5);
}, new Requirement(["-combat"], {})));

CommunityService_defineProperty(CommunityService, "BoozeDrop", new CommunityService(9, "Item Drop", "Make Margaritas", () => {
  var mummingCostume = currentCostumes().get((0,external_kolmafia_namespaceObject.myFamiliar)());
  var mummingBuff = mummingCostume && mummingCostume[0] === "Item Drop" ? mummingCostume[1] : 0;
  var familiarItemDrop = (0,external_kolmafia_namespaceObject.numericModifier)((0,external_kolmafia_namespaceObject.myFamiliar)(), "Item Drop", baseWeight() + (0,external_kolmafia_namespaceObject.weightAdjustment)(), (0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject22 || (CommunityService_templateObject22 = CommunityService_taggedTemplateLiteral(["familiar"]))))) + mummingBuff - (0,external_kolmafia_namespaceObject.numericModifier)((0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject23 || (CommunityService_templateObject23 = CommunityService_taggedTemplateLiteral(["familiar"])))), "Item Drop");
  var familiarBoozeDrop = (0,external_kolmafia_namespaceObject.numericModifier)((0,external_kolmafia_namespaceObject.myFamiliar)(), "Booze Drop", baseWeight() + (0,external_kolmafia_namespaceObject.weightAdjustment)(), (0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject24 || (CommunityService_templateObject24 = CommunityService_taggedTemplateLiteral(["familiar"]))))) - (0,external_kolmafia_namespaceObject.numericModifier)((0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject25 || (CommunityService_templateObject25 = CommunityService_taggedTemplateLiteral(["familiar"])))), "Booze Drop"); // Champagne doubling does NOT count for CS, so we undouble

  var multiplier = (0,external_kolmafia_namespaceObject.haveEquipped)(template_string_$item(CommunityService_templateObject26 || (CommunityService_templateObject26 = CommunityService_taggedTemplateLiteral(["broken champagne bottle"])))) && property_get("garbageChampagneCharge") > 0 ? 0.5 : 1; // We add 0.001 because the floor function sometimes introduces weird rounding errors

  return 60 - Math.floor(multiplier * (modifier_get("Item Drop") - familiarItemDrop) / 30 + 0.001) - Math.floor((modifier_get("Booze Drop") - familiarBoozeDrop) / 15 + 0.001);
}, new Requirement(["Item Drop", "2 Booze Drop"], {
  preventEquip: template_string_$items(CommunityService_templateObject27 || (CommunityService_templateObject27 = CommunityService_taggedTemplateLiteral(["broken champagne bottle"])))
})));

CommunityService_defineProperty(CommunityService, "HotRes", new CommunityService(10, "Hot Resistance", "Clean Steam Tunnels", () => 60 - modifier_get("Hot Resistance"), new Requirement(["Hot Resistance"], {})));

CommunityService_defineProperty(CommunityService, "CoilWire", new CommunityService(11, "Coil Wire", "Coil Wire", () => 60, new Requirement([], {})));

CommunityService_defineProperty(CommunityService, "donate", () => {
  visitCouncil();
  (0,external_kolmafia_namespaceObject.visitUrl)("choice.php?whichchoice=1089&option=30");
});


;// CONCATENATED MODULE: ./src/tasks/stat.ts
var stat_templateObject, stat_templateObject2, stat_templateObject3, stat_templateObject4, stat_templateObject5, stat_templateObject6, stat_templateObject7, stat_templateObject8, stat_templateObject9, stat_templateObject10, stat_templateObject11, stat_templateObject12, stat_templateObject13, stat_templateObject14, stat_templateObject15, stat_templateObject16, stat_templateObject17, stat_templateObject18, stat_templateObject19, stat_templateObject20, stat_templateObject21, stat_templateObject22, stat_templateObject23, stat_templateObject24, stat_templateObject25, stat_templateObject26, stat_templateObject27, stat_templateObject28, stat_templateObject29, stat_templateObject30, stat_templateObject31, stat_templateObject32, stat_templateObject33, stat_templateObject34, stat_templateObject35, stat_templateObject36, stat_templateObject37, stat_templateObject38, stat_templateObject39, stat_templateObject40, stat_templateObject41, stat_templateObject42, stat_templateObject43, stat_templateObject44, stat_templateObject45, stat_templateObject46, stat_templateObject47, stat_templateObject48, stat_templateObject49, stat_templateObject50, stat_templateObject51, stat_templateObject52, stat_templateObject53, stat_templateObject54, stat_templateObject55, stat_templateObject56;

function stat_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var HPQuest = {
  name: "HP",
  tasks: [{
    name: "Test",
    completed: () => CommunityService.HP.isDone(),
    prepare: () => {
      $effects(stat_templateObject || (stat_templateObject = stat_taggedTemplateLiteral(["Ur-Kel's Aria of Annoyance, Aloysius' Antiphon of Aptitude, Ode to Booze"]))).forEach(ef => uneffect(ef));
      var usefulEffects = [$effect(stat_templateObject2 || (stat_templateObject2 = stat_taggedTemplateLiteral(["A Few Extra Pounds"]))), $effect(stat_templateObject3 || (stat_templateObject3 = stat_taggedTemplateLiteral(["Big"]))), $effect(stat_templateObject4 || (stat_templateObject4 = stat_taggedTemplateLiteral(["Hulkien"]))), $effect(stat_templateObject5 || (stat_templateObject5 = stat_taggedTemplateLiteral(["Mariachi Mood"]))), $effect(stat_templateObject6 || (stat_templateObject6 = stat_taggedTemplateLiteral(["Patience of the Tortoise"]))), $effect(stat_templateObject7 || (stat_templateObject7 = stat_taggedTemplateLiteral(["Power Ballad of the Arrowsmith"]))), $effect(stat_templateObject8 || (stat_templateObject8 = stat_taggedTemplateLiteral(["Quiet Determination"]))), $effect(stat_templateObject9 || (stat_templateObject9 = stat_taggedTemplateLiteral(["Reptilian Fortitude"]))), $effect(stat_templateObject10 || (stat_templateObject10 = stat_taggedTemplateLiteral(["Saucemastery"]))), $effect(stat_templateObject11 || (stat_templateObject11 = stat_taggedTemplateLiteral(["Seal Clubbing Frenzy"]))), $effect(stat_templateObject12 || (stat_templateObject12 = stat_taggedTemplateLiteral(["Song of Starch"]))), $effect(stat_templateObject13 || (stat_templateObject13 = stat_taggedTemplateLiteral(["Stevedave's Shanty of Superiority"]))), $effect(stat_templateObject14 || (stat_templateObject14 = stat_taggedTemplateLiteral(["Triple-Sized"])))];
      usefulEffects.forEach(ef => tryAcquiringEffect(ef, true));
    },
    do: () => CommunityService.HP.run(() => logTestSetup(CommunityServiceTests.HPTEST), 1),
    outfit: {
      modifier: "HP, switch disembodied hand, -switch left-hand man"
    },
    limit: {
      tries: 1
    }
  }]
};
var MuscleQuest = {
  name: "Muscle",
  tasks: [{
    name: "Test",
    completed: () => CommunityService.Muscle.isDone(),
    prepare: () => {
      if (!have($effect(stat_templateObject15 || (stat_templateObject15 = stat_taggedTemplateLiteral(["Expert Oiliness"])))) && !have(template_string_$item(stat_templateObject16 || (stat_templateObject16 = stat_taggedTemplateLiteral(["oil of expertise"]))))) {
        (0,external_kolmafia_namespaceObject.create)(template_string_$item(stat_templateObject17 || (stat_templateObject17 = stat_taggedTemplateLiteral(["oil of expertise"]))), 1);
      }

      ensureEffect($effect(stat_templateObject18 || (stat_templateObject18 = stat_taggedTemplateLiteral(["Expert Oiliness"]))));
      var usefulEffects = [$effect(stat_templateObject19 || (stat_templateObject19 = stat_taggedTemplateLiteral(["Big"]))), $effect(stat_templateObject20 || (stat_templateObject20 = stat_taggedTemplateLiteral(["Go Get 'Em, Tiger!"]))), $effect(stat_templateObject21 || (stat_templateObject21 = stat_taggedTemplateLiteral(["Hulkien"]))), $effect(stat_templateObject22 || (stat_templateObject22 = stat_taggedTemplateLiteral(["Quiet Determination"]))), $effect(stat_templateObject23 || (stat_templateObject23 = stat_taggedTemplateLiteral(["Power Ballad of the Arrowsmith"]))), $effect(stat_templateObject24 || (stat_templateObject24 = stat_taggedTemplateLiteral(["Rage of the Reindeer"]))), $effect(stat_templateObject25 || (stat_templateObject25 = stat_taggedTemplateLiteral(["Song of Bravado"]))), $effect(stat_templateObject26 || (stat_templateObject26 = stat_taggedTemplateLiteral(["Stevedave's Shanty of Superiority"]))), $effect(stat_templateObject27 || (stat_templateObject27 = stat_taggedTemplateLiteral(["Triple-Sized"])))];
      usefulEffects.forEach(ef => tryAcquiringEffect(ef, true));
    },
    do: () => CommunityService.Muscle.run(() => logTestSetup(CommunityServiceTests.MUSTEST), 2),
    outfit: {
      modifier: "Muscle, switch disembodied hand, -switch left-hand man"
    },
    post: () => {
      uneffect($effect(stat_templateObject28 || (stat_templateObject28 = stat_taggedTemplateLiteral(["Power Ballad of the Arrowsmith"]))));
    },
    limit: {
      tries: 1
    }
  }]
};
var MysticalityQuest = {
  name: "Mysticality",
  tasks: [{
    name: "Test",
    completed: () => CommunityService.Mysticality.isDone(),
    prepare: () => {
      (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(stat_templateObject29 || (stat_templateObject29 = stat_taggedTemplateLiteral(["Bind Undead Elbow Macaroni"]))));
      var usefulEffects = [$effect(stat_templateObject30 || (stat_templateObject30 = stat_taggedTemplateLiteral(["Big"]))), $effect(stat_templateObject31 || (stat_templateObject31 = stat_taggedTemplateLiteral(["Glittering Eyelashes"]))), $effect(stat_templateObject32 || (stat_templateObject32 = stat_taggedTemplateLiteral(["Hulkien"]))), $effect(stat_templateObject33 || (stat_templateObject33 = stat_taggedTemplateLiteral(["The Magical Mojomuscular Melody"]))), $effect(stat_templateObject34 || (stat_templateObject34 = stat_taggedTemplateLiteral(["Triple-Sized"]))), $effect(stat_templateObject35 || (stat_templateObject35 = stat_taggedTemplateLiteral(["Pasta Oneness"]))), $effect(stat_templateObject36 || (stat_templateObject36 = stat_taggedTemplateLiteral(["Quiet Judgement"]))), $effect(stat_templateObject37 || (stat_templateObject37 = stat_taggedTemplateLiteral(["Song of Bravado"]))), $effect(stat_templateObject38 || (stat_templateObject38 = stat_taggedTemplateLiteral(["Stevedave's Shanty of Superiority"])))];
      usefulEffects.forEach(ef => tryAcquiringEffect(ef, true));
    },
    do: () => CommunityService.Mysticality.run(() => logTestSetup(CommunityServiceTests.MYSTTEST), 1),
    outfit: {
      modifier: "Mysticality, switch disembodied hand, -switch left-hand man"
    },
    post: () => {
      uneffect($effect(stat_templateObject39 || (stat_templateObject39 = stat_taggedTemplateLiteral(["The Magical Mojomuscular Melody"]))));
    },
    limit: {
      tries: 1
    }
  }]
};
var MoxieQuest = {
  name: "Moxie",
  tasks: [{
    name: "Test",
    completed: () => CommunityService.Moxie.isDone(),
    prepare: () => {
      if (!have($effect(stat_templateObject40 || (stat_templateObject40 = stat_taggedTemplateLiteral(["Expert Oiliness"])))) && !have(template_string_$item(stat_templateObject41 || (stat_templateObject41 = stat_taggedTemplateLiteral(["oil of expertise"]))))) {
        (0,external_kolmafia_namespaceObject.create)(template_string_$item(stat_templateObject42 || (stat_templateObject42 = stat_taggedTemplateLiteral(["oil of expertise"]))), 1);
      }

      ensureEffect($effect(stat_templateObject43 || (stat_templateObject43 = stat_taggedTemplateLiteral(["Expert Oiliness"]))));
      var usefulEffects = [// $effect`Amazing`,
      $effect(stat_templateObject44 || (stat_templateObject44 = stat_taggedTemplateLiteral(["Big"]))), $effect(stat_templateObject45 || (stat_templateObject45 = stat_taggedTemplateLiteral(["Blessing of the Bird"]))), $effect(stat_templateObject46 || (stat_templateObject46 = stat_taggedTemplateLiteral(["Blubbered Up"]))), $effect(stat_templateObject47 || (stat_templateObject47 = stat_taggedTemplateLiteral(["Butt-Rock Hair"]))), $effect(stat_templateObject48 || (stat_templateObject48 = stat_taggedTemplateLiteral(["Disco Fever"]))), $effect(stat_templateObject49 || (stat_templateObject49 = stat_taggedTemplateLiteral(["Disco State of Mind"]))), $effect(stat_templateObject50 || (stat_templateObject50 = stat_taggedTemplateLiteral(["Hulkien"]))), $effect(stat_templateObject51 || (stat_templateObject51 = stat_taggedTemplateLiteral(["The Moxious Madrigal"]))), $effect(stat_templateObject52 || (stat_templateObject52 = stat_taggedTemplateLiteral(["Triple-Sized"]))), $effect(stat_templateObject53 || (stat_templateObject53 = stat_taggedTemplateLiteral(["Pomp & Circumsands"]))), $effect(stat_templateObject54 || (stat_templateObject54 = stat_taggedTemplateLiteral(["Quiet Desperation"]))), $effect(stat_templateObject55 || (stat_templateObject55 = stat_taggedTemplateLiteral(["Song of Bravado"]))), $effect(stat_templateObject56 || (stat_templateObject56 = stat_taggedTemplateLiteral(["Stevedave's Shanty of Superiority"])))];
      usefulEffects.forEach(ef => tryAcquiringEffect(ef, true));
    },
    do: () => CommunityService.Moxie.run(() => logTestSetup(CommunityServiceTests.MOXTEST), 5),
    outfit: {
      modifier: "Moxie, switch disembodied hand, -switch left-hand man"
    },
    limit: {
      tries: 1
    }
  }]
};
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2018/SongBoom.js
var SongBoom_templateObject;

function SongBoom_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var item = template_string_$item(SongBoom_templateObject || (SongBoom_templateObject = SongBoom_taggedTemplateLiteral(["SongBoom\u2122 BoomBox"])));
function SongBoom_have() {
  return haveItem(item);
}
var keywords = {
  "Eye of the Giger": "spooky",
  "Food Vibrations": "food",
  "Remainin' Alive": "dr",
  "These Fists Were Made for Punchin'": "damage",
  "Total Eclipse of Your Meat": "meat"
};
var songBoomSongs = new Set(Object.keys(keywords));
/**
 * Current song.
 */

function song() {
  var stored = property_get("boomBoxSong");
  return songBoomSongs.has(stored) ? stored : null;
}
/**
 * Song changes left today.
 */

function songChangesLeft() {
  return property_get("_boomBoxSongsLeft");
}
/**
 * Change the song.
 * @param newSong Song to change to.
 */

function setSong(newSong) {
  if (song() !== newSong) {
    if (songChangesLeft() === 0) throw new Error("Out of song changes!");
    (0,external_kolmafia_namespaceObject.cliExecute)("boombox ".concat(newSong ? keywords[newSong] : "none"));
    return true;
  } else {
    return false;
  }
}
/**
 * Progress to next song drop (e.g. gathered meat-clip).
 */

function dropProgress() {
  return get("_boomBoxFights");
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2022/CombatLoversLocket.js
var CombatLoversLocket_templateObject;

function CombatLoversLocket_slicedToArray(arr, i) { return CombatLoversLocket_arrayWithHoles(arr) || CombatLoversLocket_iterableToArrayLimit(arr, i) || CombatLoversLocket_unsupportedIterableToArray(arr, i) || CombatLoversLocket_nonIterableRest(); }

function CombatLoversLocket_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function CombatLoversLocket_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return CombatLoversLocket_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return CombatLoversLocket_arrayLikeToArray(o, minLen); }

function CombatLoversLocket_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function CombatLoversLocket_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function CombatLoversLocket_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function CombatLoversLocket_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





 // eslint-disable-next-line libram/verify-constants

var locket = template_string_$item(CombatLoversLocket_templateObject || (CombatLoversLocket_templateObject = CombatLoversLocket_taggedTemplateLiteral(["Combat Lover's Locket"])));
function CombatLoversLocket_have() {
  return have(locket);
}
/**
 * Filters the set of all unlocked locket monsters to only the ones available to be locketed right now.
 * @returns An array consisting of all Monsters you can fight with your locket right now.
 */

function availableLocketMonsters() {
  if (reminiscesLeft() === 0) return [];
  return Object.entries(getLocketMonsters()).filter(_ref => {
    var _ref2 = CombatLoversLocket_slicedToArray(_ref, 2),
        unused = _ref2[1];

    return unused;
  }).map(_ref3 => {
    var _ref4 = CombatLoversLocket_slicedToArray(_ref3, 1),
        name = _ref4[0];

    return toMonster(name);
  });
}
/**
 * Parses getLocketMonsters and returns the collection of all Monsters as an Array.
 * @returns An array consisting of all Monsters you can hypothetically fight, regardless of whether they've been fought today.
 */

function unlockedLocketMonsters() {
  return Object.entries((0,external_kolmafia_namespaceObject.getLocketMonsters)()).map(_ref5 => {
    var _ref6 = CombatLoversLocket_slicedToArray(_ref5, 1),
        name = _ref6[0];

    return (0,external_kolmafia_namespaceObject.toMonster)(name);
  });
}

function parseLocketProperty() {
  return property_get("_locketMonstersFought").split(",").filter(id => id.trim().length > 0);
}
/**
 * Determines how many reminisces remain by parsing the _locketMonstersFought property.
 * @returns The number of reminisces a player has available; 0 if they lack the Locket.
 */


function reminiscesLeft() {
  return CombatLoversLocket_have() ? clamp(3 - parseLocketProperty().length, 0, 3) : 0;
}
/**
 * Determines which monsters were reminisced today by parsing the _locketMonstersFought property.
 * @returns An array consisting of the Monsters reminisced today.
 */

function monstersReminisced() {
  return parseLocketProperty().map(id => (0,external_kolmafia_namespaceObject.toMonster)(id));
}
/**
 * Fight a Monster using the Combat Lover's Locket
 * @param monster The Monster to fight
 * @returns false if we are unable to reminisce about this monster. Else, returns whether, at the end of all things, we have reminisced about this monster.
 */

function reminisce(monster) {
  if (!CombatLoversLocket_have() || reminiscesLeft() === 0 || !(0,external_kolmafia_namespaceObject.getLocketMonsters)()[monster.name]) {
    return false;
  }

  (0,external_kolmafia_namespaceObject.cliExecute)("reminisce ".concat(monster));
  (0,external_kolmafia_namespaceObject.runCombat)();
  return monstersReminisced().includes(monster);
}
/**
 * This function efficiently evaluates all of an adventurer's possibly reminiscable monsters, placing them through a filtering criteria and evaluating them based on a passed function.
 * @param criteria A filtering function for delineating which monsters are "fair game" for the search, such as "is this monster free".
 * @param value A function for deciding which monsters are "better" than others.
 * @returns A singular monster that fulfills the criteria function and maximizes the value function.
 */

function findMonster(criteria) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : () => 1;
  if (!CombatLoversLocket_have() || reminiscesLeft() === 0) return null;
  var options = availableLocketMonsters().filter(criteria);
  if (!options.length) return null;
  return options.reduce((a, b) => value(a) > value(b) ? a : b);
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/Copier.js
function Copier_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Copier_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Copier = function Copier(couldCopy, prepare, canCopy, copiedMonster, fightCopy) {
  Copier_classCallCheck(this, Copier);

  Copier_defineProperty(this, "couldCopy", void 0);

  Copier_defineProperty(this, "prepare", void 0);

  Copier_defineProperty(this, "canCopy", void 0);

  Copier_defineProperty(this, "copiedMonster", void 0);

  Copier_defineProperty(this, "fightCopy", null);

  this.couldCopy = couldCopy;
  this.prepare = prepare;
  this.canCopy = canCopy;
  this.copiedMonster = copiedMonster;
  if (fightCopy) this.fightCopy = fightCopy;
};
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2017/TunnelOfLove.js
var TunnelOfLove_templateObject, TunnelOfLove_templateObject2;

function TunnelOfLove_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






function TunnelOfLove_have() {
  return get("loveTunnelAvailable");
}
function isUsed() {
  return get("_loveTunnelUsed");
}
function haveLovEnamorang() {
  return have(template_string_$item(TunnelOfLove_templateObject || (TunnelOfLove_templateObject = TunnelOfLove_taggedTemplateLiteral(["LOV Enamorang"]))));
}
function getLovEnamorangUses() {
  return property_get("_enamorangs");
}
function couldUseLoveEnamorang() {
  return !haveWandererCounter(Wanderer.Enamorang) && getLovEnamorangUses() < 3 && haveLovEnamorang();
}
function getLovEnamorangMonster() {
  return property_get("enamorangMonster");
}
var LovEnamorang = new Copier(() => couldUseLoveEnamorang(), null, () => couldUseLoveEnamorang(), () => getLovEnamorangMonster());

function equipmentChoice(equipment) {
  switch (equipment) {
    case "LOV Eardigan":
      return 1;

    case "LOV Epaulettes":
      return 2;

    case "LOV Earring":
      return 3;
  }
}

function effectChoice(effect) {
  switch (effect) {
    case "Lovebotamy":
      return 1;

    case "Open Heart Surgery":
      return 2;

    case "Wandering Eye Surgery":
      return 3;
  }
}

function extraChoice(extra) {
  switch (extra) {
    case "LOV Enamorang":
      return 1;

    case "LOV Emotionizer":
      return 2;

    case "LOV Extraterrestrial Chocolate":
      return 3;

    case "LOV Echinacea Bouquet":
      return 4;

    case "LOV Elephant":
      return 5;

    case "toast":
      return 6;

    case null:
      return 7;
  }
}
/**
 * Fight all LOV monsters and get buffs/equipment.
 * @param equipment Equipment to take from LOV.
 * @param effect Effect to take from LOV.
 * @param extra Extra item to take from LOV.
 */


function fightAll(equipment, effect, extra) {
  _set("choiceAdventure1222", 1); // Entrance

  _set("choiceAdventure1223", 1); // Fight LOV Enforcer

  _set("choiceAdventure1224", equipmentChoice(equipment));
  _set("choiceAdventure1225", 1); // Fight LOV Engineer

  _set("choiceAdventure1226", effectChoice(effect));
  _set("choiceAdventure1227", 1); // Fight LOV Equivocator

  _set("choiceAdventure1228", extraChoice(extra));
  (0,external_kolmafia_namespaceObject.adv1)($location(TunnelOfLove_templateObject2 || (TunnelOfLove_templateObject2 = TunnelOfLove_taggedTemplateLiteral(["The Tunnel of L.O.V.E."]))), 0, "");
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2016/Witchess.js
var Witchess_templateObject;

function Witchess_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Witchess_item = template_string_$item(Witchess_templateObject || (Witchess_templateObject = Witchess_taggedTemplateLiteral(["Witchess Set"])));
function Witchess_have() {
  return haveInCampground(Witchess_item);
}
function fightsDone() {
  return get("_witchessFights");
}
var pieces = external_kolmafia_namespaceObject.Monster.get(["Witchess Pawn", "Witchess Knight", "Witchess Bishop", "Witchess Rook", "Witchess Queen", "Witchess King", "Witchess Witch", "Witchess Ox"]);
function fightPiece(piece) {
  if (!pieces.includes(piece)) throw new Error("That is not a valid piece.");

  if (!(0,external_kolmafia_namespaceObject.visitUrl)("campground.php?action=witchess").includes("whichchoice value=1181")) {
    throw new Error("Failed to open Witchess.");
  }

  if (!(0,external_kolmafia_namespaceObject.runChoice)(1).includes("whichchoice=1182")) {
    throw new Error("Failed to visit shrink ray.");
  }

  if (!(0,external_kolmafia_namespaceObject.visitUrl)("choice.php?option=1&pwd=".concat((0,external_kolmafia_namespaceObject.myHash)(), "&whichchoice=1182&piece=").concat((0,external_kolmafia_namespaceObject.toInt)(piece)), false).includes(piece.name)) {
    throw new Error("Failed to start fight.");
  }

  return (0,external_kolmafia_namespaceObject.runCombat)();
}
;// CONCATENATED MODULE: ./src/combat.ts
var src_combat_templateObject, src_combat_templateObject2, combat_templateObject3, combat_templateObject4, combat_templateObject5, combat_templateObject6, combat_templateObject7;

function src_combat_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function src_combat_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function src_combat_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function src_combat_createClass(Constructor, protoProps, staticProps) { if (protoProps) src_combat_defineProperties(Constructor.prototype, protoProps); if (staticProps) src_combat_defineProperties(Constructor, staticProps); return Constructor; }

function src_combat_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) src_combat_setPrototypeOf(subClass, superClass); }

function src_combat_setPrototypeOf(o, p) { src_combat_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return src_combat_setPrototypeOf(o, p); }

function src_combat_createSuper(Derived) { var hasNativeReflectConstruct = src_combat_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = src_combat_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = src_combat_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return src_combat_possibleConstructorReturn(this, result); }; }

function src_combat_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return src_combat_assertThisInitialized(self); }

function src_combat_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function src_combat_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function src_combat_getPrototypeOf(o) { src_combat_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return src_combat_getPrototypeOf(o); }



var mainStat = (0,external_kolmafia_namespaceObject.myClass)().primestat;

var combat_Macro = /*#__PURE__*/function (_StrictMacro) {
  src_combat_inherits(Macro, _StrictMacro);

  var _super = src_combat_createSuper(Macro);

  function Macro() {
    src_combat_classCallCheck(this, Macro);

    return _super.apply(this, arguments);
  }

  src_combat_createClass(Macro, [{
    key: "kill",
    value: function kill() {
      return this.skill(template_string_$skill(src_combat_templateObject || (src_combat_templateObject = src_combat_taggedTemplateLiteral(["Curse of Weaksauce"])))).if_("!mpbelow ".concat((0,external_kolmafia_namespaceObject.mpCost)(template_string_$skill(src_combat_templateObject2 || (src_combat_templateObject2 = src_combat_taggedTemplateLiteral(["Stuffed Mortar Shell"]))))), Macro.skill(template_string_$skill(combat_templateObject3 || (combat_templateObject3 = src_combat_taggedTemplateLiteral(["Stuffed Mortar Shell"]))))).while_("!mpbelow ".concat((0,external_kolmafia_namespaceObject.mpCost)(template_string_$skill(combat_templateObject4 || (combat_templateObject4 = src_combat_taggedTemplateLiteral(["Saucegeyser"]))))), Macro.skill(template_string_$skill(combat_templateObject5 || (combat_templateObject5 = src_combat_taggedTemplateLiteral(["Saucegeyser"]))))).while_("!mpbelow ".concat((0,external_kolmafia_namespaceObject.mpCost)(template_string_$skill(combat_templateObject6 || (combat_templateObject6 = src_combat_taggedTemplateLiteral(["Saucestorm"]))))), Macro.skill(template_string_$skill(combat_templateObject7 || (combat_templateObject7 = src_combat_taggedTemplateLiteral(["Saucestorm"]))))).attack().repeat();
    }
  }, {
    key: "default",
    value: function _default() {
      return this.kill();
    }
  }], [{
    key: "kill",
    value: function kill() {
      return new Macro().kill();
    }
  }, {
    key: "default",
    value: function _default() {
      return new Macro().default();
    }
  }]);

  return Macro;
}(StrictMacro);


function main() {
  combat_Macro.load().submit();
}
;// CONCATENATED MODULE: ./src/engine/outfit.ts
var engine_outfit_templateObject, engine_outfit_templateObject2, engine_outfit_templateObject3, engine_outfit_templateObject4, engine_outfit_templateObject5, engine_outfit_templateObject6, engine_outfit_templateObject7, engine_outfit_templateObject8, engine_outfit_templateObject9, engine_outfit_templateObject10, engine_outfit_templateObject11, engine_outfit_templateObject12;

function engine_outfit_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



function garbageShirt() {
  if (have(template_string_$item(engine_outfit_templateObject || (engine_outfit_templateObject = engine_outfit_taggedTemplateLiteral(["January's Garbage Tote"])))) && property_get("garbageShirtCharge") > 0 && have(template_string_$skill(engine_outfit_templateObject2 || (engine_outfit_templateObject2 = engine_outfit_taggedTemplateLiteral(["Torso Awareness"]))))) {
    if (property_get("garbageShirtCharge") === 1) {
      if ((0,external_kolmafia_namespaceObject.equippedItem)($slot(engine_outfit_templateObject3 || (engine_outfit_templateObject3 = engine_outfit_taggedTemplateLiteral(["shirt"])))) === template_string_$item(engine_outfit_templateObject4 || (engine_outfit_templateObject4 = engine_outfit_taggedTemplateLiteral(["makeshift garbage shirt"])))) (0,external_kolmafia_namespaceObject.equip)($slot(engine_outfit_templateObject5 || (engine_outfit_templateObject5 = engine_outfit_taggedTemplateLiteral(["shirt"]))), template_string_$item.none);
    } else {
      if (!have(template_string_$item(engine_outfit_templateObject6 || (engine_outfit_templateObject6 = engine_outfit_taggedTemplateLiteral(["makeshift garbage shirt"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("fold makeshift garbage shirt");
      (0,external_kolmafia_namespaceObject.equip)($slot(engine_outfit_templateObject7 || (engine_outfit_templateObject7 = engine_outfit_taggedTemplateLiteral(["shirt"]))), template_string_$item(engine_outfit_templateObject8 || (engine_outfit_templateObject8 = engine_outfit_taggedTemplateLiteral(["makeshift garbage shirt"]))));
    }
  }
}
function unbreakableUmbrella() {
  if (have(template_string_$item(engine_outfit_templateObject9 || (engine_outfit_templateObject9 = engine_outfit_taggedTemplateLiteral(["unbreakable umbrella"])))) && property_get("umbrellaState") !== "broken") (0,external_kolmafia_namespaceObject.cliExecute)("umbrella ml");
}
function docBag() {
  if (have(template_string_$item(engine_outfit_templateObject10 || (engine_outfit_templateObject10 = engine_outfit_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"])))) && property_get("_chestXRayUsed") < 3) (0,external_kolmafia_namespaceObject.equip)($slot(engine_outfit_templateObject11 || (engine_outfit_templateObject11 = engine_outfit_taggedTemplateLiteral(["acc3"]))), template_string_$item(engine_outfit_templateObject12 || (engine_outfit_templateObject12 = engine_outfit_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]))));
}
;// CONCATENATED MODULE: ./src/tasks/leveling.ts
var leveling_templateObject, leveling_templateObject2, leveling_templateObject3, leveling_templateObject4, leveling_templateObject5, leveling_templateObject6, leveling_templateObject7, leveling_templateObject8, leveling_templateObject9, leveling_templateObject10, leveling_templateObject11, leveling_templateObject12, leveling_templateObject13, leveling_templateObject14, leveling_templateObject15, leveling_templateObject16, leveling_templateObject17, leveling_templateObject18, leveling_templateObject19, leveling_templateObject20, leveling_templateObject21, leveling_templateObject22, leveling_templateObject23, leveling_templateObject24, leveling_templateObject25, leveling_templateObject26, leveling_templateObject27, leveling_templateObject28, leveling_templateObject29, leveling_templateObject30, leveling_templateObject31, leveling_templateObject32, leveling_templateObject33, leveling_templateObject34, leveling_templateObject35, leveling_templateObject36, leveling_templateObject37, leveling_templateObject38, leveling_templateObject39, leveling_templateObject40, leveling_templateObject41, leveling_templateObject42, leveling_templateObject43, leveling_templateObject44, leveling_templateObject45, leveling_templateObject46, leveling_templateObject47, leveling_templateObject48, leveling_templateObject49, leveling_templateObject50, leveling_templateObject51, leveling_templateObject52, leveling_templateObject53, leveling_templateObject54, leveling_templateObject55, leveling_templateObject56, leveling_templateObject57, leveling_templateObject58, leveling_templateObject59, leveling_templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94, _templateObject95, _templateObject96, _templateObject97, _templateObject98, _templateObject99, _templateObject100, _templateObject101, _templateObject102, _templateObject103, _templateObject104, _templateObject105, _templateObject106, _templateObject107, _templateObject108, _templateObject109, _templateObject110, _templateObject111, _templateObject112, _templateObject113, _templateObject114, _templateObject115, _templateObject116, _templateObject117, _templateObject118, _templateObject119, _templateObject120, _templateObject121, _templateObject122, _templateObject123, _templateObject124, _templateObject125, _templateObject126, _templateObject127, _templateObject128, _templateObject129, _templateObject130, _templateObject131, _templateObject132, _templateObject133, _templateObject134, _templateObject135, _templateObject136, _templateObject137, _templateObject138, _templateObject139, _templateObject140, _templateObject141, _templateObject142, _templateObject143, _templateObject144, _templateObject145, _templateObject146, _templateObject147, _templateObject148, _templateObject149, _templateObject150, _templateObject151, _templateObject152, _templateObject153, _templateObject154, _templateObject155, _templateObject156, _templateObject157, _templateObject158, _templateObject159, _templateObject160, _templateObject161, _templateObject162, _templateObject163, _templateObject164, _templateObject165, _templateObject166, _templateObject167, _templateObject168, _templateObject169, _templateObject170, _templateObject171, _templateObject172, _templateObject173, _templateObject174, _templateObject175, _templateObject176, _templateObject177, _templateObject178, _templateObject179, _templateObject180, _templateObject181, _templateObject182, _templateObject183, _templateObject184, _templateObject185, _templateObject186, _templateObject187, _templateObject188, _templateObject189, _templateObject190, _templateObject191, _templateObject192, _templateObject193, _templateObject194, _templateObject195, _templateObject196, _templateObject197, _templateObject198, _templateObject199, _templateObject200, _templateObject201, _templateObject202, _templateObject203, _templateObject204, _templateObject205, _templateObject206, _templateObject207, _templateObject208, _templateObject209, _templateObject210, _templateObject211, _templateObject212, _templateObject213, _templateObject214, _templateObject215, _templateObject216, _templateObject217, _templateObject218, _templateObject219, _templateObject220, _templateObject221, _templateObject222, _templateObject223, _templateObject224, _templateObject225, _templateObject226, _templateObject227, _templateObject228, _templateObject229, _templateObject230, _templateObject231, _templateObject232, _templateObject233, _templateObject234, _templateObject235, _templateObject236, _templateObject237, _templateObject238, _templateObject239, _templateObject240, _templateObject241, _templateObject242, _templateObject243, _templateObject244, _templateObject245, _templateObject246, _templateObject247, _templateObject248, _templateObject249, _templateObject250, _templateObject251, _templateObject252, _templateObject253, _templateObject254, _templateObject255, _templateObject256, _templateObject257, _templateObject258;

function leveling_toConsumableArray(arr) { return leveling_arrayWithoutHoles(arr) || leveling_iterableToArray(arr) || leveling_unsupportedIterableToArray(arr) || leveling_nonIterableSpread(); }

function leveling_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function leveling_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return leveling_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return leveling_arrayLikeToArray(o, minLen); }

function leveling_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function leveling_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return leveling_arrayLikeToArray(arr); }

function leveling_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function leveling_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var freeFightMonsters = $monsters(leveling_templateObject || (leveling_templateObject = leveling_taggedTemplateLiteral(["Witchess Bishop, Witchess King, Witchess Witch, sausage goblin, Eldritch Tentacle"])));
var craftedCBBFoods = template_string_$items(leveling_templateObject2 || (leveling_templateObject2 = leveling_taggedTemplateLiteral(["honey bun of Boris, roasted vegetable of Jarlsberg, Pete's rich ricotta, plain calzone"])));
var usefulEffects = [// Stats
$effect(leveling_templateObject3 || (leveling_templateObject3 = leveling_taggedTemplateLiteral(["Big"]))), $effect(leveling_templateObject4 || (leveling_templateObject4 = leveling_taggedTemplateLiteral(["Pasta Oneness"]))), $effect(leveling_templateObject5 || (leveling_templateObject5 = leveling_taggedTemplateLiteral(["Saucemastery"]))), $effect(leveling_templateObject6 || (leveling_templateObject6 = leveling_taggedTemplateLiteral(["Disdain of She-Who-Was"]))), $effect(leveling_templateObject7 || (leveling_templateObject7 = leveling_taggedTemplateLiteral(["Glittering Eyelashes"]))), $effect(leveling_templateObject8 || (leveling_templateObject8 = leveling_taggedTemplateLiteral(["Feeling Excited"]))), $effect(leveling_templateObject9 || (leveling_templateObject9 = leveling_taggedTemplateLiteral(["Triple-Sized"]))), $effect(leveling_templateObject10 || (leveling_templateObject10 = leveling_taggedTemplateLiteral(["substats.enh"]))), $effect(leveling_templateObject11 || (leveling_templateObject11 = leveling_taggedTemplateLiteral(["Hulkien"]))), $effect(leveling_templateObject12 || (leveling_templateObject12 = leveling_taggedTemplateLiteral(["Uncucumbered"]))), $effect(leveling_templateObject13 || (leveling_templateObject13 = leveling_taggedTemplateLiteral(["We're All Made of Starfish"]))), $effect(leveling_templateObject14 || (leveling_templateObject14 = leveling_taggedTemplateLiteral(["Broad-Spectrum Vaccine"]))), // $effect`Think Win-Lose`,
// $effect`Confidence of the Votive`,
$effect(leveling_templateObject15 || (leveling_templateObject15 = leveling_taggedTemplateLiteral(["Song of Bravado"]))), // ML
$effect(leveling_templateObject16 || (leveling_templateObject16 = leveling_taggedTemplateLiteral(["Pride of the Puffin"]))), $effect(leveling_templateObject17 || (leveling_templateObject17 = leveling_taggedTemplateLiteral(["Drescher's Annoying Noise"]))), $effect(leveling_templateObject18 || (leveling_templateObject18 = leveling_taggedTemplateLiteral(["Ur-Kel's Aria of Annoyance"]))), // Xp
$effect(leveling_templateObject19 || (leveling_templateObject19 = leveling_taggedTemplateLiteral(["Carol of the Thrills"]))), // Songs
$effect(leveling_templateObject20 || (leveling_templateObject20 = leveling_taggedTemplateLiteral(["Stevedave's Shanty of Superiority"]))), $effect(leveling_templateObject21 || (leveling_templateObject21 = leveling_taggedTemplateLiteral(["Ur-Kel's Aria of Annoyance"]))), $effect(leveling_templateObject22 || (leveling_templateObject22 = leveling_taggedTemplateLiteral(["Aloysius' Antiphon of Aptitude"]))), // Spell dmg
$effect(leveling_templateObject23 || (leveling_templateObject23 = leveling_taggedTemplateLiteral(["Carol of the Hells"])))];

function powerlevelingLocation() {
  if (property_get("neverendingPartyAlways")) return $location(leveling_templateObject24 || (leveling_templateObject24 = leveling_taggedTemplateLiteral(["The Neverending Party"])));else if (property_get("stenchAirportAlways") || property_get("_stenchAirportToday")) return $location(leveling_templateObject25 || (leveling_templateObject25 = leveling_taggedTemplateLiteral(["Uncle Gator's Country Fun-Time Liquid Waste Sluice"])));else if (property_get("spookyAirportAlways")) return $location(leveling_templateObject26 || (leveling_templateObject26 = leveling_taggedTemplateLiteral(["The Deep Dark Jungle"])));else if (property_get("hotAirportAlways")) return $location(leveling_templateObject27 || (leveling_templateObject27 = leveling_taggedTemplateLiteral(["The SMOOCH Army HQ"])));else if (property_get("coldAirportAlways")) return $location(leveling_templateObject28 || (leveling_templateObject28 = leveling_taggedTemplateLiteral(["VYKEA"])));else if (property_get("sleazeAirportAlways")) return $location(leveling_templateObject29 || (leveling_templateObject29 = leveling_taggedTemplateLiteral(["Sloppy Seconds Diner"])));
  return $location.none;
}

function sendAutumnaton() {
  if (have(template_string_$item(leveling_templateObject30 || (leveling_templateObject30 = leveling_taggedTemplateLiteral(["autumn-aton"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("autumnaton send Shadow Rift");
}

var LevelingQuest = {
  name: "Leveling",
  completed: () => property_get("csServicesPerformed").split(",").length > 1,
  tasks: [{
    name: "Soul Food",
    ready: () => (0,external_kolmafia_namespaceObject.mySoulsauce)() >= 5,
    completed: () => (0,external_kolmafia_namespaceObject.mySoulsauce)() < 5 || (0,external_kolmafia_namespaceObject.myMp)() > (0,external_kolmafia_namespaceObject.myMaxmp)() - 15 || !have(template_string_$skill(leveling_templateObject31 || (leveling_templateObject31 = leveling_taggedTemplateLiteral(["Soul Food"])))),
    do: () => {
      while ((0,external_kolmafia_namespaceObject.mySoulsauce)() >= 5 && (0,external_kolmafia_namespaceObject.myMp)() <= (0,external_kolmafia_namespaceObject.myMaxmp)() - 15) {
        (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(leveling_templateObject32 || (leveling_templateObject32 = leveling_taggedTemplateLiteral(["Soul Food"]))));
      }
    }
  }, {
    name: "Clan Shower",
    completed: () => property_get("_aprilShower"),
    do: () => ensureEffect($effect(leveling_templateObject33 || (leveling_templateObject33 = leveling_taggedTemplateLiteral(["Thaumodynamic"])))),
    limit: {
      tries: 1
    }
  }, {
    name: "Inscrutable Gaze",
    completed: () => have($effect(leveling_templateObject34 || (leveling_templateObject34 = leveling_taggedTemplateLiteral(["Inscrutable Gaze"])))) || !have(template_string_$skill(leveling_templateObject35 || (leveling_templateObject35 = leveling_taggedTemplateLiteral(["Inscrutable Gaze"])))),
    do: () => ensureEffect($effect(leveling_templateObject36 || (leveling_templateObject36 = leveling_taggedTemplateLiteral(["Inscrutable Gaze"]))))
  }, {
    name: "Pull Deep Dish of Legend",
    completed: () => have(template_string_$item(leveling_templateObject37 || (leveling_templateObject37 = leveling_taggedTemplateLiteral(["Deep Dish of Legend"])))) || have($effect(leveling_templateObject38 || (leveling_templateObject38 = leveling_taggedTemplateLiteral(["In the Depths"])))),
    do: () => (0,external_kolmafia_namespaceObject.takeStorage)(template_string_$item(leveling_templateObject39 || (leveling_templateObject39 = leveling_taggedTemplateLiteral(["Deep Dish of Legend"]))), 1),
    limit: {
      tries: 1
    }
  }, {
    name: "Pull Calzone of Legend",
    completed: () => have(template_string_$item(leveling_templateObject40 || (leveling_templateObject40 = leveling_taggedTemplateLiteral(["Calzone of Legend"])))) || have($effect(leveling_templateObject41 || (leveling_templateObject41 = leveling_taggedTemplateLiteral(["In the 'zone zone!"])))),
    do: () => (0,external_kolmafia_namespaceObject.takeStorage)(template_string_$item(leveling_templateObject42 || (leveling_templateObject42 = leveling_taggedTemplateLiteral(["Calzone of Legend"]))), 1),
    limit: {
      tries: 1
    }
  }, {
    name: "Pull Pizza of Legend",
    completed: () => have(template_string_$item(leveling_templateObject43 || (leveling_templateObject43 = leveling_taggedTemplateLiteral(["Pizza of Legend"])))) || have($effect(leveling_templateObject44 || (leveling_templateObject44 = leveling_taggedTemplateLiteral(["Endless Drool"])))),
    do: () => (0,external_kolmafia_namespaceObject.takeStorage)(template_string_$item(leveling_templateObject45 || (leveling_templateObject45 = leveling_taggedTemplateLiteral(["Pizza of Legend"]))), 1),
    limit: {
      tries: 1
    }
  }, {
    name: "Pull Daypass",
    completed: () => powerlevelingLocation() !== $location.none,
    do: () => {
      (0,external_kolmafia_namespaceObject.takeStorage)(template_string_$item(leveling_templateObject46 || (leveling_templateObject46 = leveling_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"]))), 1);
      (0,external_kolmafia_namespaceObject.use)(template_string_$item(leveling_templateObject47 || (leveling_templateObject47 = leveling_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"]))), 1);
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Pull Non-Euclidean Angle",
    completed: () => property_get("_roninStoragePulls").split(",").length >= 5 || property_get("_roninStoragePulls").split(",").includes((0,external_kolmafia_namespaceObject.toInt)(template_string_$item(leveling_templateObject48 || (leveling_templateObject48 = leveling_taggedTemplateLiteral(["non-Euclidean angle"])))).toString()) || have(template_string_$item(leveling_templateObject49 || (leveling_templateObject49 = leveling_taggedTemplateLiteral(["non-Euclidean angle"])))) || have($effect(leveling_templateObject50 || (leveling_templateObject50 = leveling_taggedTemplateLiteral(["Different Way of Seeing Things"])))) || (0,external_kolmafia_namespaceObject.storageAmount)(template_string_$item(leveling_templateObject51 || (leveling_templateObject51 = leveling_taggedTemplateLiteral(["non-Euclidean angle"])))) === 0,
    do: () => {
      (0,external_kolmafia_namespaceObject.takeStorage)(template_string_$item(leveling_templateObject52 || (leveling_templateObject52 = leveling_taggedTemplateLiteral(["non-Euclidean angle"]))), 1);
      (0,external_kolmafia_namespaceObject.chew)(template_string_$item(leveling_templateObject53 || (leveling_templateObject53 = leveling_taggedTemplateLiteral(["non-Euclidean angle"]))), 1);
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Pull Abstraction: Category",
    completed: () => property_get("_roninStoragePulls").split(",").length >= 5 || property_get("_roninStoragePulls").split(",").includes((0,external_kolmafia_namespaceObject.toInt)(template_string_$item(leveling_templateObject54 || (leveling_templateObject54 = leveling_taggedTemplateLiteral(["abstraction: category"])))).toString()) || have(template_string_$item(leveling_templateObject55 || (leveling_templateObject55 = leveling_taggedTemplateLiteral(["abstraction: category"])))) || have($effect(leveling_templateObject56 || (leveling_templateObject56 = leveling_taggedTemplateLiteral(["Category"])))) || (0,external_kolmafia_namespaceObject.storageAmount)(template_string_$item(leveling_templateObject57 || (leveling_templateObject57 = leveling_taggedTemplateLiteral(["abstraction: category"])))) === 0,
    do: () => {
      (0,external_kolmafia_namespaceObject.takeStorage)(template_string_$item(leveling_templateObject58 || (leveling_templateObject58 = leveling_taggedTemplateLiteral(["abstraction: category"]))), 1);
      (0,external_kolmafia_namespaceObject.chew)(template_string_$item(leveling_templateObject59 || (leveling_templateObject59 = leveling_taggedTemplateLiteral(["abstraction: category"]))), 1);
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Use Ten-Percent Bonus",
    prepare: () => {
      if (property_get("getawayCampsiteUnlocked")) (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=campaway&action=campaway_sky");
    },
    completed: () => !have(template_string_$item(leveling_templateObject60 || (leveling_templateObject60 = leveling_taggedTemplateLiteral(["a ten-percent bonus"])))),
    do: () => (0,external_kolmafia_namespaceObject.use)(template_string_$item(_templateObject61 || (_templateObject61 = leveling_taggedTemplateLiteral(["a ten-percent bonus"]))), 1),
    limit: {
      tries: 1
    }
  }, {
    name: "Bastille",
    completed: () => property_get("_bastilleGames") > 0 || !have(template_string_$item(_templateObject62 || (_templateObject62 = leveling_taggedTemplateLiteral(["Bastille Battalion control rig"])))),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("bastille.ash mainstat brutalist"),
    limit: {
      tries: 1
    }
  }, {
    name: "Restore mp",
    completed: () => property_get("timesRested") >= (0,external_kolmafia_namespaceObject.totalFreeRests)() || (0,external_kolmafia_namespaceObject.myMp)() >= (0,external_kolmafia_namespaceObject.myMaxmp)(),
    prepare: () => {
      if (have(template_string_$item(_templateObject63 || (_templateObject63 = leveling_taggedTemplateLiteral(["Newbiesport\u2122 tent"]))))) (0,external_kolmafia_namespaceObject.use)(template_string_$item(_templateObject64 || (_templateObject64 = leveling_taggedTemplateLiteral(["Newbiesport\u2122 tent"]))));
    },
    do: () => {
      if (property_get("chateauAvailable")) {
        (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=chateau&action=chateau_restbox");
      } else if (property_get("getawayCampsiteUnlocked")) {
        (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=campaway&action=campaway_tentclick");
      } else {
        (0,external_kolmafia_namespaceObject.visitUrl)("campground.php?action=rest");
      }
    },
    outfit: {
      modifier: "myst, mp"
    }
  }, {
    name: "Alice Army",
    completed: () => property_get("grimoire3Summons") > 0 || !have(template_string_$skill(_templateObject65 || (_templateObject65 = leveling_taggedTemplateLiteral(["Summon Alice's Army Cards"])))),
    do: () => (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(_templateObject66 || (_templateObject66 = leveling_taggedTemplateLiteral(["Summon Alice's Army Cards"])))),
    limit: {
      tries: 1
    }
  }, {
    name: "Confiscator's Grimoire",
    completed: () => property_get("_grimoireConfiscatorSummons") > 0 || !have(template_string_$skill(_templateObject67 || (_templateObject67 = leveling_taggedTemplateLiteral(["Summon Confiscated Things"])))),
    do: () => (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(_templateObject68 || (_templateObject68 = leveling_taggedTemplateLiteral(["Summon Confiscated Things"])))),
    limit: {
      tries: 1
    }
  }, {
    name: "Eat Calzone",
    completed: () => property_get("calzoneOfLegendEaten"),
    do: () => (0,external_kolmafia_namespaceObject.eat)(template_string_$item(_templateObject69 || (_templateObject69 = leveling_taggedTemplateLiteral(["Calzone of Legend"]))), 1),
    limit: {
      tries: 1
    }
  }, {
    name: "Drink Perfect Dark and Stormy",
    completed: () => property_get("_preventScurvy") && property_get("_perfectFreezeUsed") || (0,external_kolmafia_namespaceObject.myInebriety)() >= 3,
    do: () => {
      (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(_templateObject70 || (_templateObject70 = leveling_taggedTemplateLiteral(["Perfect Freeze"]))));
      (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(_templateObject71 || (_templateObject71 = leveling_taggedTemplateLiteral(["Prevent Scurvy and Sobriety"]))));
      (0,external_kolmafia_namespaceObject.create)(template_string_$item(_templateObject72 || (_templateObject72 = leveling_taggedTemplateLiteral(["perfect dark and stormy"]))), 1);
      tryAcquiringEffect($effect(_templateObject73 || (_templateObject73 = leveling_taggedTemplateLiteral(["Ode to Booze"]))));
      (0,external_kolmafia_namespaceObject.drink)(template_string_$item(_templateObject74 || (_templateObject74 = leveling_taggedTemplateLiteral(["perfect dark and stormy"]))), 1);
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Breakfast",
    completed: () => property_get("breakfastCompleted"),
    do: () => {
      (0,external_kolmafia_namespaceObject.cliExecute)("breakfast");
      (0,external_kolmafia_namespaceObject.cliExecute)("refresh all");
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Consult Gorgonzola",
    completed: () => property_get("_clanFortuneBuffUsed"),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("fortune buff mys"),
    limit: {
      tries: 1
    }
  }, {
    name: "Use Glittery Mascara",
    completed: () => have($effect(_templateObject75 || (_templateObject75 = leveling_taggedTemplateLiteral(["Glittering Eyelashes"])))),
    do: () => ensureEffect($effect(_templateObject76 || (_templateObject76 = leveling_taggedTemplateLiteral(["Glittering Eyelashes"]))))
  }, {
    name: "Use Ointment of the Occult",
    completed: () => have($effect(_templateObject77 || (_templateObject77 = leveling_taggedTemplateLiteral(["Mystically Oiled"])))),
    do: () => {
      if (!have(template_string_$item(_templateObject78 || (_templateObject78 = leveling_taggedTemplateLiteral(["ointment of the occult"]))))) {
        if (property_get("reagentSummons") === 0) (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(_templateObject79 || (_templateObject79 = leveling_taggedTemplateLiteral(["Advanced Saucecrafting"]))), 1);
        (0,external_kolmafia_namespaceObject.create)(template_string_$item(_templateObject80 || (_templateObject80 = leveling_taggedTemplateLiteral(["ointment of the occult"]))), 1);
      }

      ensureEffect($effect(_templateObject81 || (_templateObject81 = leveling_taggedTemplateLiteral(["Mystically Oiled"]))));
    }
  }, {
    name: "Use Oil of Expertise",
    completed: () => !have(template_string_$item(_templateObject82 || (_templateObject82 = leveling_taggedTemplateLiteral(["cherry"])))) && (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(_templateObject83 || (_templateObject83 = leveling_taggedTemplateLiteral(["oil of expertise"])))) <= 1 || have($effect(_templateObject84 || (_templateObject84 = leveling_taggedTemplateLiteral(["Expert Oiliness"])))),
    do: () => {
      if (!have(template_string_$item(_templateObject85 || (_templateObject85 = leveling_taggedTemplateLiteral(["oil of expertise"]))))) {
        if (property_get("reagentSummons") === 0) (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(_templateObject86 || (_templateObject86 = leveling_taggedTemplateLiteral(["Advanced Saucecrafting"]))), 1);
        (0,external_kolmafia_namespaceObject.create)(template_string_$item(_templateObject87 || (_templateObject87 = leveling_taggedTemplateLiteral(["oil of expertise"]))), 1);
      }

      if ((0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(_templateObject88 || (_templateObject88 = leveling_taggedTemplateLiteral(["oil of expertise"])))) > 1) (0,external_kolmafia_namespaceObject.use)(template_string_$item(_templateObject89 || (_templateObject89 = leveling_taggedTemplateLiteral(["oil of expertise"]))), (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(_templateObject90 || (_templateObject90 = leveling_taggedTemplateLiteral(["oil of expertise"])))) - 1);
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Buy Oversized Sparkler",
    ready: () => have($effect(_templateObject91 || (_templateObject91 = leveling_taggedTemplateLiteral(["Everything Looks Blue"])))) && (0,external_kolmafia_namespaceObject.myMeat)() >= 1000,
    completed: () => have(template_string_$item(_templateObject92 || (_templateObject92 = leveling_taggedTemplateLiteral(["oversized sparkler"])))),
    do: () => (0,external_kolmafia_namespaceObject.buy)(template_string_$item(_templateObject93 || (_templateObject93 = leveling_taggedTemplateLiteral(["oversized sparkler"]))), 1),
    limit: {
      tries: 1
    }
  }, {
    name: "Eat Pizza",
    ready: () => have($effect(_templateObject94 || (_templateObject94 = leveling_taggedTemplateLiteral(["Ready to Eat"])))),
    // only eat this after we red rocket
    completed: () => property_get("pizzaOfLegendEaten"),
    do: () => (0,external_kolmafia_namespaceObject.eat)(template_string_$item(_templateObject95 || (_templateObject95 = leveling_taggedTemplateLiteral(["Pizza of Legend"]))), 1),
    limit: {
      tries: 1
    }
  }, {
    name: "Drink Astral Pilsners",
    ready: () => (0,external_kolmafia_namespaceObject.myLevel)() >= 11,
    completed: () => (0,external_kolmafia_namespaceObject.myInebriety)() >= (0,external_kolmafia_namespaceObject.inebrietyLimit)() || !have(template_string_$item(_templateObject96 || (_templateObject96 = leveling_taggedTemplateLiteral(["astral six-pack"])))) && !have(template_string_$item(_templateObject97 || (_templateObject97 = leveling_taggedTemplateLiteral(["astral pilsner"])))),
    prepare: () => tryAcquiringEffect($effect(_templateObject98 || (_templateObject98 = leveling_taggedTemplateLiteral(["Ode to Booze"])))),
    do: () => {
      if (have(template_string_$item(_templateObject99 || (_templateObject99 = leveling_taggedTemplateLiteral(["astral six-pack"]))))) (0,external_kolmafia_namespaceObject.use)(template_string_$item(_templateObject100 || (_templateObject100 = leveling_taggedTemplateLiteral(["astral six-pack"]))), 1);
      (0,external_kolmafia_namespaceObject.drink)(template_string_$item(_templateObject101 || (_templateObject101 = leveling_taggedTemplateLiteral(["astral pilsner"]))), 1);
    },
    post: () => {
      if (!have(template_string_$item(_templateObject102 || (_templateObject102 = leveling_taggedTemplateLiteral(["astral six-pack"])))) && !have(template_string_$item(_templateObject103 || (_templateObject103 = leveling_taggedTemplateLiteral(["astral pilsner"]))))) uneffect($effect(_templateObject104 || (_templateObject104 = leveling_taggedTemplateLiteral(["Ode to Booze"]))));
    },
    limit: {
      tries: 6
    }
  }, {
    name: "BoomBox Meat",
    ready: () => have(template_string_$item(_templateObject105 || (_templateObject105 = leveling_taggedTemplateLiteral(["Punching Potion"])))),
    completed: () => song() === "Total Eclipse of Your Meat" || !have(template_string_$item(_templateObject106 || (_templateObject106 = leveling_taggedTemplateLiteral(["SongBoom\u2122 BoomBox"])))),
    do: () => setSong("Total Eclipse of Your Meat"),
    limit: {
      tries: 1
    }
  }, {
    name: "Get Rufus Quest",
    completed: () => // eslint-disable-next-line libram/verify-constants
    have(template_string_$item(_templateObject107 || (_templateObject107 = leveling_taggedTemplateLiteral(["Rufus's shadow lodestone"])))) || (0,external_kolmafia_namespaceObject.toItem)(property_get("rufusQuestTarget", "")) !== template_string_$item.none,
    do: () => // eslint-disable-next-line libram/verify-constants
    (0,external_kolmafia_namespaceObject.use)(template_string_$item(_templateObject108 || (_templateObject108 = leveling_taggedTemplateLiteral(["closed-circuit pay phone"])))),
    choices: {
      1497: 2,
      1498: 6
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Shadow Rift",
    ready: () => // eslint-disable-next-line libram/verify-constants
    (0,external_kolmafia_namespaceObject.toItem)(property_get("rufusQuestTarget", "")) !== template_string_$item.none,
    prepare: () => {
      (0,external_kolmafia_namespaceObject.restoreHp)(clamp(1000, (0,external_kolmafia_namespaceObject.myMaxhp)() / 2, (0,external_kolmafia_namespaceObject.myMaxhp)()));
      if (!have($effect(_templateObject109 || (_templateObject109 = leveling_taggedTemplateLiteral(["Everything Looks Red"])))) && !have(template_string_$item(_templateObject110 || (_templateObject110 = leveling_taggedTemplateLiteral(["red rocket"]))))) (0,external_kolmafia_namespaceObject.buy)(template_string_$item(_templateObject111 || (_templateObject111 = leveling_taggedTemplateLiteral(["red rocket"]))), 1);
      if (!have($effect(_templateObject112 || (_templateObject112 = leveling_taggedTemplateLiteral(["Everything Looks Blue"])))) && !have(template_string_$item(_templateObject113 || (_templateObject113 = leveling_taggedTemplateLiteral(["blue rocket"]))))) (0,external_kolmafia_namespaceObject.buy)(template_string_$item(_templateObject114 || (_templateObject114 = leveling_taggedTemplateLiteral(["blue rocket"]))), 1);
      unbreakableUmbrella();
      (0,external_kolmafia_namespaceObject.restoreMp)(50);
    },
    completed: () => // eslint-disable-next-line libram/verify-constants
    have(template_string_$item(_templateObject115 || (_templateObject115 = leveling_taggedTemplateLiteral(["Rufus's shadow lodestone"])))) || property_get("_shadowRiftCombats", 0) >= 12,
    // eslint-disable-next-line libram/verify-constants
    do: () => {
      (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=town_right&action=townright_shadowrift");

      if ((0,external_kolmafia_namespaceObject.lastChoice)() === 1499) {
        var NCChoice = 6;

        var _loop = function _loop() {
          var availableChoices = (0,external_kolmafia_namespaceObject.availableChoiceOptions)(true);
          var currentChoice = [2, 3, 4].filter(choice => availableChoices[choice].includes(property_get("rufusQuestTarget", "")));
          if (currentChoice.length > 0) NCChoice = currentChoice[0];else (0,external_kolmafia_namespaceObject.runChoice)(5);
        };

        while (NCChoice === 6) {
          _loop();
        }

        (0,external_kolmafia_namespaceObject.runChoice)(NCChoice);
      }
    },
    combat: new CombatStrategy().macro(combat_Macro.tryItem(template_string_$item(_templateObject116 || (_templateObject116 = leveling_taggedTemplateLiteral(["red rocket"])))).tryItem(template_string_$item(_templateObject117 || (_templateObject117 = leveling_taggedTemplateLiteral(["blue rocket"])))).default()),
    outfit: {
      offhand: template_string_$item(_templateObject118 || (_templateObject118 = leveling_taggedTemplateLiteral(["unbreakable umbrella"]))),
      acc1: template_string_$item(_templateObject119 || (_templateObject119 = leveling_taggedTemplateLiteral(["codpiece"]))),
      familiar: template_string_$familiar(_templateObject120 || (_templateObject120 = leveling_taggedTemplateLiteral(["Cookbookbat"]))),
      modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape"
    },
    choices: {
      1498: 1
    },
    post: () => {
      if (have((0,external_kolmafia_namespaceObject.toItem)(property_get("rufusQuestTarget", "")))) {
        // eslint-disable-next-line libram/verify-constants
        (0,external_kolmafia_namespaceObject.use)(template_string_$item(_templateObject121 || (_templateObject121 = leveling_taggedTemplateLiteral(["closed-circuit pay phone"]))));
      }
    },
    limit: {
      tries: 12
    }
  }, {
    name: "Snojo",
    prepare: () => {
      (0,external_kolmafia_namespaceObject.restoreHp)(clamp(1000, (0,external_kolmafia_namespaceObject.myMaxhp)() / 2, (0,external_kolmafia_namespaceObject.myMaxhp)()));

      if (property_get("snojoSetting") === null) {
        (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=snojo&action=snojo_controller");
        (0,external_kolmafia_namespaceObject.runChoice)(1);
      }

      unbreakableUmbrella();
      (0,external_kolmafia_namespaceObject.restoreMp)(50);
    },
    completed: () => property_get("_snojoFreeFights") >= 10 || !property_get("snojoAvailable"),
    do: $location(_templateObject122 || (_templateObject122 = leveling_taggedTemplateLiteral(["The X-32-F Combat Training Snowman"]))),
    combat: new CombatStrategy().macro(combat_Macro["default"]()),
    outfit: {
      offhand: template_string_$item(_templateObject123 || (_templateObject123 = leveling_taggedTemplateLiteral(["unbreakable umbrella"]))),
      acc1: template_string_$item(_templateObject124 || (_templateObject124 = leveling_taggedTemplateLiteral(["codpiece"]))),
      familiar: template_string_$familiar(_templateObject125 || (_templateObject125 = leveling_taggedTemplateLiteral(["Cookbookbat"]))),
      modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape"
    },
    limit: {
      tries: 10
    },
    post: () => {
      if (property_get("_snojoFreeFights") >= 10) (0,external_kolmafia_namespaceObject.cliExecute)("hottub");
      sendAutumnaton();
    }
  }, {
    name: "Snokebomb",
    prepare: () => {
      (0,external_kolmafia_namespaceObject.restoreHp)(clamp(1000, (0,external_kolmafia_namespaceObject.myMaxhp)() / 2, (0,external_kolmafia_namespaceObject.myMaxhp)()));
      unbreakableUmbrella();
      (0,external_kolmafia_namespaceObject.restoreMp)(50);
    },
    completed: () => property_get("_snokebombUsed") >= 3,
    do: powerlevelingLocation(),
    combat: new CombatStrategy().macro(combat_Macro.trySkill(template_string_$skill(_templateObject126 || (_templateObject126 = leveling_taggedTemplateLiteral(["Snokebomb"])))).abort()),
    outfit: {
      offhand: template_string_$item(_templateObject127 || (_templateObject127 = leveling_taggedTemplateLiteral(["unbreakable umbrella"]))),
      acc1: template_string_$item(_templateObject128 || (_templateObject128 = leveling_taggedTemplateLiteral(["codpiece"]))),
      familiar: template_string_$familiar(_templateObject129 || (_templateObject129 = leveling_taggedTemplateLiteral(["Cookbookbat"]))),
      modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape"
    },
    choices: {
      1094: 5,
      1115: 6,
      1322: 2,
      1324: 5
    },
    post: () => {
      sendAutumnaton();
    },
    limit: {
      tries: 4
    }
  }, {
    name: "Backups",
    ready: () => {
      var _get;

      return freeFightMonsters.includes((_get = property_get("lastCopyableMonster")) !== null && _get !== void 0 ? _get : $monster.none);
    },
    prepare: () => {
      (0,external_kolmafia_namespaceObject.restoreHp)(clamp(1000, (0,external_kolmafia_namespaceObject.myMaxhp)() / 2, (0,external_kolmafia_namespaceObject.myMaxhp)()));
      unbreakableUmbrella();
      garbageShirt();
      usefulEffects.forEach(ef => tryAcquiringEffect(ef));
      (0,external_kolmafia_namespaceObject.restoreMp)(50);
    },
    completed: () => {
      var _get2;

      return !have(template_string_$item(_templateObject130 || (_templateObject130 = leveling_taggedTemplateLiteral(["backup camera"])))) || !freeFightMonsters.includes((_get2 = property_get("lastCopyableMonster")) !== null && _get2 !== void 0 ? _get2 : $monster.none) || property_get("_backUpUses") >= 11;
    },
    do: $location(_templateObject131 || (_templateObject131 = leveling_taggedTemplateLiteral(["The Dire Warren"]))),
    combat: new CombatStrategy().macro(combat_Macro.trySkill(template_string_$skill(_templateObject132 || (_templateObject132 = leveling_taggedTemplateLiteral(["Back-Up to your Last Enemy"])))).default()),
    outfit: {
      back: template_string_$item(_templateObject133 || (_templateObject133 = leveling_taggedTemplateLiteral(["LOV Epaulettes"]))),
      offhand: template_string_$item(_templateObject134 || (_templateObject134 = leveling_taggedTemplateLiteral(["unbreakable umbrella"]))),
      acc1: template_string_$item(_templateObject135 || (_templateObject135 = leveling_taggedTemplateLiteral(["codpiece"]))),
      acc3: template_string_$item(_templateObject136 || (_templateObject136 = leveling_taggedTemplateLiteral(["backup camera"]))),
      familiar: template_string_$familiar(_templateObject137 || (_templateObject137 = leveling_taggedTemplateLiteral(["Cookbookbat"]))),
      modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape"
    },
    post: () => {
      var _get3;

      if (!freeFightMonsters.includes((_get3 = property_get("lastCopyableMonster")) !== null && _get3 !== void 0 ? _get3 : $monster.none)) throw new Error("Fought unexpected monster");
      if (have(template_string_$item(_templateObject138 || (_templateObject138 = leveling_taggedTemplateLiteral(["magical sausage casing"])))) && (0,external_kolmafia_namespaceObject.myMeat)() >= 3000) (0,external_kolmafia_namespaceObject.create)(template_string_$item(_templateObject139 || (_templateObject139 = leveling_taggedTemplateLiteral(["magical sausage"]))), (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(_templateObject140 || (_templateObject140 = leveling_taggedTemplateLiteral(["magical sausage casing"])))));
      (0,external_kolmafia_namespaceObject.eat)((0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(_templateObject141 || (_templateObject141 = leveling_taggedTemplateLiteral(["magical sausage"])))), template_string_$item(_templateObject142 || (_templateObject142 = leveling_taggedTemplateLiteral(["magical sausage"]))));
    },
    limit: {
      tries: 11
    }
  }, {
    name: "Kramco",
    prepare: () => {
      (0,external_kolmafia_namespaceObject.restoreHp)(clamp(1000, (0,external_kolmafia_namespaceObject.myMaxhp)() / 2, (0,external_kolmafia_namespaceObject.myMaxhp)()));
      unbreakableUmbrella();
      garbageShirt();
      usefulEffects.forEach(ef => tryAcquiringEffect(ef));
      (0,external_kolmafia_namespaceObject.restoreMp)(50);
    },
    ready: () => getKramcoWandererChance() >= 1.0,
    completed: () => getKramcoWandererChance() < 1.0 || !have(template_string_$item(_templateObject143 || (_templateObject143 = leveling_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"])))),
    do: $location(_templateObject144 || (_templateObject144 = leveling_taggedTemplateLiteral(["Noob Cave"]))),
    outfit: {
      back: template_string_$item(_templateObject145 || (_templateObject145 = leveling_taggedTemplateLiteral(["LOV Epaulettes"]))),
      offhand: template_string_$item(_templateObject146 || (_templateObject146 = leveling_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))),
      acc1: template_string_$item(_templateObject147 || (_templateObject147 = leveling_taggedTemplateLiteral(["codpiece"]))),
      familiar: template_string_$familiar(_templateObject148 || (_templateObject148 = leveling_taggedTemplateLiteral(["Cookbookbat"]))),
      modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape"
    },
    combat: new CombatStrategy().macro(combat_Macro["default"]()),
    post: () => {
      if (have(template_string_$item(_templateObject149 || (_templateObject149 = leveling_taggedTemplateLiteral(["magical sausage casing"])))) && (0,external_kolmafia_namespaceObject.myMeat)() >= 3000) (0,external_kolmafia_namespaceObject.create)(template_string_$item(_templateObject150 || (_templateObject150 = leveling_taggedTemplateLiteral(["magical sausage"]))), (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(_templateObject151 || (_templateObject151 = leveling_taggedTemplateLiteral(["magical sausage casing"])))));
      (0,external_kolmafia_namespaceObject.eat)((0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(_templateObject152 || (_templateObject152 = leveling_taggedTemplateLiteral(["magical sausage"])))), template_string_$item(_templateObject153 || (_templateObject153 = leveling_taggedTemplateLiteral(["magical sausage"]))));
      sendAutumnaton();
    }
  }, {
    name: "Red Skeleton",
    ready: () => !have($effect(_templateObject154 || (_templateObject154 = leveling_taggedTemplateLiteral(["Everything Looks Yellow"])))),
    prepare: () => {
      (0,external_kolmafia_namespaceObject.restoreHp)(clamp(1000, (0,external_kolmafia_namespaceObject.myMaxhp)() / 2, (0,external_kolmafia_namespaceObject.myMaxhp)()));
      if (!have(template_string_$item(_templateObject155 || (_templateObject155 = leveling_taggedTemplateLiteral(["yellow rocket"]))))) (0,external_kolmafia_namespaceObject.buy)(template_string_$item(_templateObject156 || (_templateObject156 = leveling_taggedTemplateLiteral(["yellow rocket"]))), 1);
      unbreakableUmbrella();
    },
    completed: () => monstersReminisced().includes($monster(_templateObject157 || (_templateObject157 = leveling_taggedTemplateLiteral(["red skeleton"])))),
    do: () => reminisce($monster(_templateObject158 || (_templateObject158 = leveling_taggedTemplateLiteral(["red skeleton"])))),
    combat: new CombatStrategy().macro(combat_Macro.tryItem(template_string_$item(_templateObject159 || (_templateObject159 = leveling_taggedTemplateLiteral(["yellow rocket"])))).abort()),
    outfit: {
      back: template_string_$item(_templateObject160 || (_templateObject160 = leveling_taggedTemplateLiteral(["LOV Epaulettes"]))),
      offhand: template_string_$item(_templateObject161 || (_templateObject161 = leveling_taggedTemplateLiteral(["unbreakable umbrella"]))),
      acc1: template_string_$item(_templateObject162 || (_templateObject162 = leveling_taggedTemplateLiteral(["codpiece"]))),
      familiar: template_string_$familiar(_templateObject163 || (_templateObject163 = leveling_taggedTemplateLiteral(["Cookbookbat"]))),
      modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape"
    },
    post: () => {
      (0,external_kolmafia_namespaceObject.use)(template_string_$item(_templateObject164 || (_templateObject164 = leveling_taggedTemplateLiteral(["red box"]))), 1);
      sendAutumnaton();
    },
    limit: {
      tries: 1
    }
  }, {
    name: "LOV Tunnel",
    prepare: () => {
      (0,external_kolmafia_namespaceObject.restoreHp)(clamp(1000, (0,external_kolmafia_namespaceObject.myMaxhp)() / 2, (0,external_kolmafia_namespaceObject.myMaxhp)()));
      unbreakableUmbrella();
      usefulEffects.forEach(ef => tryAcquiringEffect(ef));
      tryAcquiringEffect($effect(_templateObject165 || (_templateObject165 = leveling_taggedTemplateLiteral(["Comic Violence"]))));
    },
    completed: () => property_get("_loveTunnelUsed") || !property_get("loveTunnelAvailable"),
    do: () => fightAll("LOV Epaulettes", "Open Heart Surgery", "LOV Extraterrestrial Chocolate"),
    combat: new CombatStrategy().macro(combat_Macro.if_($monster(_templateObject166 || (_templateObject166 = leveling_taggedTemplateLiteral(["LOV Enforcer"]))), combat_Macro.attack().repeat()).if_($monster(_templateObject167 || (_templateObject167 = leveling_taggedTemplateLiteral(["LOV Engineer"]))), combat_Macro["default"]()).if_($monster(_templateObject168 || (_templateObject168 = leveling_taggedTemplateLiteral(["LOV Equivocator"]))), combat_Macro["default"]())),
    outfit: {
      offhand: template_string_$item(_templateObject169 || (_templateObject169 = leveling_taggedTemplateLiteral(["unbreakable umbrella"]))),
      acc1: template_string_$item(_templateObject170 || (_templateObject170 = leveling_taggedTemplateLiteral(["codpiece"]))),
      familiar: template_string_$familiar(_templateObject171 || (_templateObject171 = leveling_taggedTemplateLiteral(["Cookbookbat"]))),
      modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape"
    },
    limit: {
      tries: 1
    },
    post: () => {
      if (have($effect(_templateObject172 || (_templateObject172 = leveling_taggedTemplateLiteral(["Beaten Up"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("hottub");
      if (have(template_string_$item(_templateObject173 || (_templateObject173 = leveling_taggedTemplateLiteral(["LOV Extraterrestrial Chocolate"]))))) (0,external_kolmafia_namespaceObject.use)(template_string_$item(_templateObject174 || (_templateObject174 = leveling_taggedTemplateLiteral(["LOV Extraterrestrial Chocolate"]))), 1);
      sendAutumnaton();
    }
  }, {
    name: "Oliver's Place",
    prepare: () => {
      (0,external_kolmafia_namespaceObject.restoreHp)(clamp(1000, (0,external_kolmafia_namespaceObject.myMaxhp)() / 2, (0,external_kolmafia_namespaceObject.myMaxhp)()));
      unbreakableUmbrella();
      (0,external_kolmafia_namespaceObject.restoreMp)(50);
    },
    completed: () => property_get("_speakeasyFreeFights", 0) >= 3 || !property_get("ownsSpeakeasy"),
    do: $location(_templateObject175 || (_templateObject175 = leveling_taggedTemplateLiteral(["An Unusually Quiet Barroom Brawl"]))),
    combat: new CombatStrategy().macro(combat_Macro["default"]()),
    outfit: {
      back: template_string_$item(_templateObject176 || (_templateObject176 = leveling_taggedTemplateLiteral(["LOV Epaulettes"]))),
      offhand: template_string_$item(_templateObject177 || (_templateObject177 = leveling_taggedTemplateLiteral(["unbreakable umbrella"]))),
      acc1: template_string_$item(_templateObject178 || (_templateObject178 = leveling_taggedTemplateLiteral(["codpiece"]))),
      familiar: template_string_$familiar(_templateObject179 || (_templateObject179 = leveling_taggedTemplateLiteral(["Cookbookbat"]))),
      modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape"
    },
    limit: {
      tries: 3
    },
    post: () => {
      sendAutumnaton();
    }
  }, {
    name: "God Lobster",
    prepare: () => {
      (0,external_kolmafia_namespaceObject.restoreHp)(clamp(1000, (0,external_kolmafia_namespaceObject.myMaxhp)() / 2, (0,external_kolmafia_namespaceObject.myMaxhp)()));
      unbreakableUmbrella();
      usefulEffects.forEach(ef => tryAcquiringEffect(ef));
      (0,external_kolmafia_namespaceObject.restoreMp)(50);
    },
    completed: () => property_get("_godLobsterFights") >= 3 || !have(template_string_$familiar(_templateObject180 || (_templateObject180 = leveling_taggedTemplateLiteral(["God Lobster"])))),
    do: () => (0,external_kolmafia_namespaceObject.visitUrl)("main.php?fightgodlobster=1"),
    combat: new CombatStrategy().macro(combat_Macro["default"]()),
    choices: {
      1310: () => have(template_string_$item(_templateObject181 || (_templateObject181 = leveling_taggedTemplateLiteral(["God Lobster's Ring"])))) ? 2 : 3
    },
    // Get xp on last fight
    outfit: {
      back: template_string_$item(_templateObject182 || (_templateObject182 = leveling_taggedTemplateLiteral(["LOV Epaulettes"]))),
      offhand: template_string_$item(_templateObject183 || (_templateObject183 = leveling_taggedTemplateLiteral(["unbreakable umbrella"]))),
      acc1: template_string_$item(_templateObject184 || (_templateObject184 = leveling_taggedTemplateLiteral(["codpiece"]))),
      famequip: template_string_$items(_templateObject185 || (_templateObject185 = leveling_taggedTemplateLiteral(["God Lobster's Ring, God Lobster's Scepter"]))),
      familiar: template_string_$familiar(_templateObject186 || (_templateObject186 = leveling_taggedTemplateLiteral(["God Lobster"]))),
      modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape"
    },
    acquire: [{
      item: template_string_$item(_templateObject187 || (_templateObject187 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"])))
    }],
    limit: {
      tries: 3
    },
    post: () => {
      sendAutumnaton();
    }
  }, {
    name: "Eldritch Tentacle",
    prepare: () => {
      (0,external_kolmafia_namespaceObject.restoreHp)(clamp(1000, (0,external_kolmafia_namespaceObject.myMaxhp)() / 2, (0,external_kolmafia_namespaceObject.myMaxhp)()));
      unbreakableUmbrella();
      usefulEffects.forEach(ef => tryAcquiringEffect(ef));
      (0,external_kolmafia_namespaceObject.restoreMp)(50);
    },
    completed: () => property_get("_eldritchHorrorEvoked") || !have(template_string_$skill(_templateObject188 || (_templateObject188 = leveling_taggedTemplateLiteral(["Evoke Eldritch Horror"])))),
    do: () => (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(_templateObject189 || (_templateObject189 = leveling_taggedTemplateLiteral(["Evoke Eldritch Horror"])))),
    post: () => {
      if (have($effect(_templateObject190 || (_templateObject190 = leveling_taggedTemplateLiteral(["Beaten Up"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("hottub");
      sendAutumnaton();
    },
    combat: new CombatStrategy().macro(combat_Macro["default"]()),
    outfit: {
      back: template_string_$item(_templateObject191 || (_templateObject191 = leveling_taggedTemplateLiteral(["LOV Epaulettes"]))),
      offhand: template_string_$item(_templateObject192 || (_templateObject192 = leveling_taggedTemplateLiteral(["unbreakable umbrella"]))),
      acc1: template_string_$item(_templateObject193 || (_templateObject193 = leveling_taggedTemplateLiteral(["codpiece"]))),
      familiar: template_string_$familiar(_templateObject194 || (_templateObject194 = leveling_taggedTemplateLiteral(["Cookbookbat"]))),
      modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape"
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Witchess Bishop",
    prepare: () => {
      (0,external_kolmafia_namespaceObject.restoreHp)(clamp(1000, (0,external_kolmafia_namespaceObject.myMaxhp)() / 2, (0,external_kolmafia_namespaceObject.myMaxhp)()));
      unbreakableUmbrella();
      usefulEffects.forEach(ef => tryAcquiringEffect(ef));
      (0,external_kolmafia_namespaceObject.restoreMp)(50);
    },
    completed: () => property_get("_witchessFights") >= 5 || !Witchess_have(),
    do: () => fightPiece($monster(_templateObject195 || (_templateObject195 = leveling_taggedTemplateLiteral(["Witchess Bishop"])))),
    combat: new CombatStrategy().macro(combat_Macro["default"]()),
    outfit: {
      back: template_string_$item(_templateObject196 || (_templateObject196 = leveling_taggedTemplateLiteral(["LOV Epaulettes"]))),
      offhand: template_string_$item(_templateObject197 || (_templateObject197 = leveling_taggedTemplateLiteral(["unbreakable umbrella"]))),
      acc1: template_string_$item(_templateObject198 || (_templateObject198 = leveling_taggedTemplateLiteral(["codpiece"]))),
      familiar: template_string_$familiar(_templateObject199 || (_templateObject199 = leveling_taggedTemplateLiteral(["Cookbookbat"]))),
      modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape"
    },
    post: () => {
      sendAutumnaton();
    },
    limit: {
      tries: 5
    }
  }, {
    name: "DMT",
    prepare: () => {
      (0,external_kolmafia_namespaceObject.restoreHp)(clamp(1000, (0,external_kolmafia_namespaceObject.myMaxhp)() / 2, (0,external_kolmafia_namespaceObject.myMaxhp)()));
      unbreakableUmbrella();
      usefulEffects.forEach(ef => tryAcquiringEffect(ef));
      (0,external_kolmafia_namespaceObject.restoreMp)(50);
    },
    completed: () => property_get("_machineTunnelsAdv") >= 5 || !have(template_string_$familiar(_templateObject200 || (_templateObject200 = leveling_taggedTemplateLiteral(["Machine Elf"])))),
    do: () => (0,external_kolmafia_namespaceObject.adv1)($location(_templateObject201 || (_templateObject201 = leveling_taggedTemplateLiteral(["The Deep Machine Tunnels"]))), -1),
    combat: new CombatStrategy().macro(combat_Macro["default"]()),
    outfit: {
      back: template_string_$item(_templateObject202 || (_templateObject202 = leveling_taggedTemplateLiteral(["LOV Epaulettes"]))),
      offhand: template_string_$item(_templateObject203 || (_templateObject203 = leveling_taggedTemplateLiteral(["unbreakable umbrella"]))),
      acc1: template_string_$item(_templateObject204 || (_templateObject204 = leveling_taggedTemplateLiteral(["codpiece"]))),
      familiar: template_string_$familiar(_templateObject205 || (_templateObject205 = leveling_taggedTemplateLiteral(["Machine Elf"]))),
      modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape"
    },
    limit: {
      tries: 5
    },
    post: () => {
      sendAutumnaton();
    }
  }, {
    name: "Powerlevel",
    completed: () => (0,external_kolmafia_namespaceObject.myBasestat)($stat(_templateObject206 || (_templateObject206 = leveling_taggedTemplateLiteral(["Mysticality"])))) >= 175 && ((0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(_templateObject207 || (_templateObject207 = leveling_taggedTemplateLiteral(["Yeast of Boris"])))) >= 3 && (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(_templateObject208 || (_templateObject208 = leveling_taggedTemplateLiteral(["Vegetable of Jarlsberg"])))) >= 3 && (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(_templateObject209 || (_templateObject209 = leveling_taggedTemplateLiteral(["St. Sneaky Pete's Whey"])))) >= 6 || craftedCBBFoods.every(it => have(it) || have((0,external_kolmafia_namespaceObject.effectModifier)(it, "effect")))) && (powerlevelingLocation() !== $location(_templateObject210 || (_templateObject210 = leveling_taggedTemplateLiteral(["The Neverending Party"]))) || property_get("_neverendingPartyFreeTurns") >= 10),
    do: powerlevelingLocation(),
    prepare: () => {
      (0,external_kolmafia_namespaceObject.restoreHp)(clamp(1000, (0,external_kolmafia_namespaceObject.myMaxhp)() / 2, (0,external_kolmafia_namespaceObject.myMaxhp)()));
      unbreakableUmbrella();
      garbageShirt();
      usefulEffects.forEach(ef => tryAcquiringEffect(ef));
      (0,external_kolmafia_namespaceObject.restoreMp)(50);
    },
    outfit: {
      back: template_string_$item(_templateObject211 || (_templateObject211 = leveling_taggedTemplateLiteral(["LOV Epaulettes"]))),
      offhand: template_string_$item(_templateObject212 || (_templateObject212 = leveling_taggedTemplateLiteral(["unbreakable umbrella"]))),
      acc1: template_string_$item(_templateObject213 || (_templateObject213 = leveling_taggedTemplateLiteral(["codpiece"]))),
      familiar: template_string_$familiar(_templateObject214 || (_templateObject214 = leveling_taggedTemplateLiteral(["Cookbookbat"]))),
      modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape"
    },
    limit: {
      tries: 60
    },
    choices: {
      1094: 5,
      1115: 6,
      1322: 2,
      1324: 5
    },
    combat: new CombatStrategy().macro(combat_Macro.trySkill(template_string_$skill(_templateObject215 || (_templateObject215 = leveling_taggedTemplateLiteral(["Bowl Sideways"])))).default()),
    post: () => {
      if (have(template_string_$item(_templateObject216 || (_templateObject216 = leveling_taggedTemplateLiteral(["SMOOCH coffee cup"]))))) (0,external_kolmafia_namespaceObject.chew)(template_string_$item(_templateObject217 || (_templateObject217 = leveling_taggedTemplateLiteral(["SMOOCH coffee cup"]))), 1);
      sendAutumnaton();
    }
  }, {
    name: "Pre-free-fights consumption",
    after: ["Powerlevel"],
    completed: () => (0,external_kolmafia_namespaceObject.myFullness)() >= 11 && (0,external_kolmafia_namespaceObject.myInebriety)() >= 11,
    do: () => {
      if ((0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(_templateObject218 || (_templateObject218 = leveling_taggedTemplateLiteral(["wad of dough"])))) < 2) {
        (0,external_kolmafia_namespaceObject.buy)(template_string_$item(_templateObject219 || (_templateObject219 = leveling_taggedTemplateLiteral(["all-purpose flower"]))), 1);
        (0,external_kolmafia_namespaceObject.use)(template_string_$item(_templateObject220 || (_templateObject220 = leveling_taggedTemplateLiteral(["all-purpose flower"]))), 1);
      }

      if (property_get("_speakeasyDrinksDrunk") === 0) {
        tryAcquiringEffect($effect(_templateObject221 || (_templateObject221 = leveling_taggedTemplateLiteral(["Ode to Booze"]))));
        (0,external_kolmafia_namespaceObject.visitUrl)("clan_viplounge.php?preaction=speakeasydrink&drink=5&pwd=".concat(+(0,external_kolmafia_namespaceObject.myHash)())); // Bee's Knees
      }

      [].concat(leveling_toConsumableArray(craftedCBBFoods), [template_string_$item(_templateObject222 || (_templateObject222 = leveling_taggedTemplateLiteral(["Deep Dish of Legend"])))]).forEach(it => {
        if (!have((0,external_kolmafia_namespaceObject.effectModifier)(it, "effect"))) {
          if (!have(it)) (0,external_kolmafia_namespaceObject.create)(it, 1);
          (0,external_kolmafia_namespaceObject.eat)(it, 1);
        }
      });

      if ((0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(_templateObject223 || (_templateObject223 = leveling_taggedTemplateLiteral(["Vegetable of Jarlsberg"])))) >= 4 && !have($effect(_templateObject224 || (_templateObject224 = leveling_taggedTemplateLiteral(["Pretty Delicious"]))))) {
        if (!have(template_string_$item(_templateObject225 || (_templateObject225 = leveling_taggedTemplateLiteral(["baked veggie ricotta casserole"]))))) (0,external_kolmafia_namespaceObject.create)(template_string_$item(_templateObject226 || (_templateObject226 = leveling_taggedTemplateLiteral(["baked veggie ricotta casserole"]))), 1);
        (0,external_kolmafia_namespaceObject.eat)(template_string_$item(_templateObject227 || (_templateObject227 = leveling_taggedTemplateLiteral(["baked veggie ricotta casserole"]))), 1);
      }
    },
    post: () => {
      tryAcquiringEffect($effect(_templateObject228 || (_templateObject228 = leveling_taggedTemplateLiteral(["Favored by Lyle"]))));
      tryAcquiringEffect($effect(_templateObject229 || (_templateObject229 = leveling_taggedTemplateLiteral(["Starry-Eyed"]))));
    }
  }, {
    name: "Witchess King",
    prepare: () => {
      (0,external_kolmafia_namespaceObject.restoreHp)(clamp(1000, (0,external_kolmafia_namespaceObject.myMaxhp)() / 2, (0,external_kolmafia_namespaceObject.myMaxhp)()));
      unbreakableUmbrella();
      garbageShirt();
      usefulEffects.forEach(ef => tryAcquiringEffect(ef));
      (0,external_kolmafia_namespaceObject.restoreMp)(50);
    },
    completed: () => monstersReminisced().includes($monster(_templateObject230 || (_templateObject230 = leveling_taggedTemplateLiteral(["Witchess King"])))),
    do: () => reminisce($monster(_templateObject231 || (_templateObject231 = leveling_taggedTemplateLiteral(["Witchess King"])))),
    combat: new CombatStrategy().macro(combat_Macro["default"]()),
    outfit: {
      back: template_string_$item(_templateObject232 || (_templateObject232 = leveling_taggedTemplateLiteral(["LOV Epaulettes"]))),
      offhand: template_string_$item(_templateObject233 || (_templateObject233 = leveling_taggedTemplateLiteral(["unbreakable umbrella"]))),
      acc1: template_string_$item(_templateObject234 || (_templateObject234 = leveling_taggedTemplateLiteral(["codpiece"]))),
      familiar: template_string_$familiar(_templateObject235 || (_templateObject235 = leveling_taggedTemplateLiteral(["Cookbookbat"]))),
      modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape"
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Free Kills and More Fights",
    after: ["Pre-free-fights consumption"],
    prepare: () => {
      (0,external_kolmafia_namespaceObject.restoreHp)(clamp(1000, (0,external_kolmafia_namespaceObject.myMaxhp)() / 2, (0,external_kolmafia_namespaceObject.myMaxhp)()));
      unbreakableUmbrella();
      garbageShirt();
      docBag();
      usefulEffects.forEach(ef => tryAcquiringEffect(ef));
      (0,external_kolmafia_namespaceObject.restoreMp)(50);
    },
    outfit: {
      back: template_string_$item(_templateObject236 || (_templateObject236 = leveling_taggedTemplateLiteral(["LOV Epaulettes"]))),
      offhand: template_string_$item(_templateObject237 || (_templateObject237 = leveling_taggedTemplateLiteral(["unbreakable umbrella"]))),
      acc1: template_string_$item(_templateObject238 || (_templateObject238 = leveling_taggedTemplateLiteral(["codpiece"]))),
      familiar: template_string_$familiar(_templateObject239 || (_templateObject239 = leveling_taggedTemplateLiteral(["Cookbookbat"]))),
      modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape"
    },
    completed: () => property_get("_shatteringPunchUsed") >= 3 && property_get("_gingerbreadMobHitUsed") && have($effect(_templateObject240 || (_templateObject240 = leveling_taggedTemplateLiteral(["Pretty Delicious"])))) && (have($effect(_templateObject241 || (_templateObject241 = leveling_taggedTemplateLiteral(["Awfully Wily"])))) || (0,external_kolmafia_namespaceObject.myBasestat)($stat(_templateObject242 || (_templateObject242 = leveling_taggedTemplateLiteral(["Mysticality"])))) >= 190),
    do: powerlevelingLocation(),
    combat: new CombatStrategy().macro(combat_Macro.trySkill(template_string_$skill(_templateObject243 || (_templateObject243 = leveling_taggedTemplateLiteral(["Feel Pride"])))).trySkill(template_string_$skill(_templateObject244 || (_templateObject244 = leveling_taggedTemplateLiteral(["Chest X-Ray"])))).trySkill(template_string_$skill(_templateObject245 || (_templateObject245 = leveling_taggedTemplateLiteral(["Shattering Punch"])))).trySkill(template_string_$skill(_templateObject246 || (_templateObject246 = leveling_taggedTemplateLiteral(["Gingerbread Mob Hit"])))).trySkill(template_string_$skill(_templateObject247 || (_templateObject247 = leveling_taggedTemplateLiteral(["Bowl Sideways"])))).default()),
    choices: {
      1094: 5,
      1115: 6,
      1322: 2,
      1324: 5
    },
    post: () => {
      if ((0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(_templateObject248 || (_templateObject248 = leveling_taggedTemplateLiteral(["Vegetable of Jarlsberg"])))) >= 4 && !have($effect(_templateObject249 || (_templateObject249 = leveling_taggedTemplateLiteral(["Pretty Delicious"]))))) {
        if (!have(template_string_$item(_templateObject250 || (_templateObject250 = leveling_taggedTemplateLiteral(["baked veggie ricotta casserole"]))))) (0,external_kolmafia_namespaceObject.create)(template_string_$item(_templateObject251 || (_templateObject251 = leveling_taggedTemplateLiteral(["baked veggie ricotta casserole"]))), 1);
        (0,external_kolmafia_namespaceObject.eat)(template_string_$item(_templateObject252 || (_templateObject252 = leveling_taggedTemplateLiteral(["baked veggie ricotta casserole"]))), 1);
      }

      if ((0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(_templateObject253 || (_templateObject253 = leveling_taggedTemplateLiteral(["St. Sneaky Pete's Whey"])))) >= 1 && !have($effect(_templateObject254 || (_templateObject254 = leveling_taggedTemplateLiteral(["Awfully Wily"]))))) {
        (0,external_kolmafia_namespaceObject.create)(template_string_$item(_templateObject255 || (_templateObject255 = leveling_taggedTemplateLiteral(["Pete's wiley whey bar"]))), 1);
        (0,external_kolmafia_namespaceObject.eat)(template_string_$item(_templateObject256 || (_templateObject256 = leveling_taggedTemplateLiteral(["Pete's wiley whey bar"]))), 1);
      }

      if (have(template_string_$item(_templateObject257 || (_templateObject257 = leveling_taggedTemplateLiteral(["SMOOCH coffee cup"]))))) (0,external_kolmafia_namespaceObject.chew)(template_string_$item(_templateObject258 || (_templateObject258 = leveling_taggedTemplateLiteral(["SMOOCH coffee cup"]))), 1);
      sendAutumnaton();
    },
    limit: {
      tries: 20
    }
  }]
};
;// CONCATENATED MODULE: ./src/tasks/coilwire.ts



var CoilWireQuest = {
  name: "Coil Wire",
  completed: () => CommunityService.CoilWire.isDone(),
  tasks: [{
    name: "Test",
    ready: () => (0,external_kolmafia_namespaceObject.myAdventures)() >= 60,
    completed: () => CommunityService.CoilWire.isDone(),
    do: () => CommunityService.CoilWire.run(() => logTestSetup(CommunityServiceTests.COILTEST)),
    limit: {
      tries: 1
    }
  }]
};
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2017/Pantogram.js
var Pantogram_templateObject, Pantogram_templateObject2, _Alignment, _Element, Pantogram_templateObject3, Pantogram_templateObject4, Pantogram_templateObject5, Pantogram_templateObject6, Pantogram_templateObject7, Pantogram_templateObject8, Pantogram_templateObject9, _LeftSacrifice, Pantogram_templateObject10, Pantogram_templateObject11, Pantogram_templateObject12, Pantogram_templateObject13, Pantogram_templateObject14, Pantogram_templateObject15, Pantogram_templateObject16, Pantogram_templateObject17, Pantogram_templateObject18, _MiddleSacrifice, Pantogram_templateObject19, Pantogram_templateObject20, Pantogram_templateObject21, Pantogram_templateObject22, Pantogram_templateObject23, Pantogram_templateObject24, Pantogram_templateObject25, Pantogram_templateObject26, Pantogram_templateObject27, Pantogram_templateObject28, _RightSacrifice;

function Pantogram_slicedToArray(arr, i) { return Pantogram_arrayWithHoles(arr) || Pantogram_iterableToArrayLimit(arr, i) || Pantogram_unsupportedIterableToArray(arr, i) || Pantogram_nonIterableRest(); }

function Pantogram_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Pantogram_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Pantogram_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Pantogram_arrayLikeToArray(o, minLen); }

function Pantogram_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Pantogram_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Pantogram_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Pantogram_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Pantogram_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var pantogram = template_string_$item(Pantogram_templateObject || (Pantogram_templateObject = Pantogram_taggedTemplateLiteral(["portable pantogram"])));
var pants = template_string_$item(Pantogram_templateObject2 || (Pantogram_templateObject2 = Pantogram_taggedTemplateLiteral(["pantogram pants"])));
function Pantogram_have() {
  return haveItem(pantogram);
}
function havePants() {
  return have(pants);
}
var Alignment = (_Alignment = {}, Pantogram_defineProperty(_Alignment, "Muscle", 1), Pantogram_defineProperty(_Alignment, "Mysticality", 2), Pantogram_defineProperty(_Alignment, "Moxie", 3), _Alignment);
var Element = (_Element = {}, Pantogram_defineProperty(_Element, "Hot Resistance: 2", 1), Pantogram_defineProperty(_Element, "Cold Resistance: 2", 2), Pantogram_defineProperty(_Element, "Spooky Resistance: 2", 3), Pantogram_defineProperty(_Element, "Sleaze Resistance: 2", 4), Pantogram_defineProperty(_Element, "Stench Resistance: 2", 5), _Element);
var LeftSacrifice = (_LeftSacrifice = {}, Pantogram_defineProperty(_LeftSacrifice, "Maximum HP: 40", [-1, 0]), Pantogram_defineProperty(_LeftSacrifice, "Maximum MP: 20", [-2, 0]), Pantogram_defineProperty(_LeftSacrifice, "HP Regen Max: 10", [template_string_$item(Pantogram_templateObject3 || (Pantogram_templateObject3 = Pantogram_taggedTemplateLiteral(["red pixel potion"]))), 1]), Pantogram_defineProperty(_LeftSacrifice, "HP Regen Max: 15", [template_string_$item(Pantogram_templateObject4 || (Pantogram_templateObject4 = Pantogram_taggedTemplateLiteral(["royal jelly"]))), 1]), Pantogram_defineProperty(_LeftSacrifice, "HP Regen Max: 20", [template_string_$item(Pantogram_templateObject5 || (Pantogram_templateObject5 = Pantogram_taggedTemplateLiteral(["scented massage oil"]))), 1]), Pantogram_defineProperty(_LeftSacrifice, "MP Regen Max: 10", [template_string_$item(Pantogram_templateObject6 || (Pantogram_templateObject6 = Pantogram_taggedTemplateLiteral(["Cherry Cloaca Cola"]))), 1]), Pantogram_defineProperty(_LeftSacrifice, "MP Regen Max: 15", [template_string_$item(Pantogram_templateObject7 || (Pantogram_templateObject7 = Pantogram_taggedTemplateLiteral(["bubblin' crude"]))), 1]), Pantogram_defineProperty(_LeftSacrifice, "MP Regen Max: 20", [template_string_$item(Pantogram_templateObject8 || (Pantogram_templateObject8 = Pantogram_taggedTemplateLiteral(["glowing New Age crystal"]))), 1]), Pantogram_defineProperty(_LeftSacrifice, "Mana Cost: -3", [template_string_$item(Pantogram_templateObject9 || (Pantogram_templateObject9 = Pantogram_taggedTemplateLiteral(["baconstone"]))), 1]), _LeftSacrifice);

function getLeftSacPair(mod) {
  return LeftSacrifice[mod];
}

var MiddleSacrifice = (_MiddleSacrifice = {}, Pantogram_defineProperty(_MiddleSacrifice, "Combat Rate: -5", [-1, 0]), Pantogram_defineProperty(_MiddleSacrifice, "Combat Rate: 5", [-2, 0]), Pantogram_defineProperty(_MiddleSacrifice, "Critical Hit Percent: 10", [template_string_$item(Pantogram_templateObject10 || (Pantogram_templateObject10 = Pantogram_taggedTemplateLiteral(["hamethyst"]))), 1]), Pantogram_defineProperty(_MiddleSacrifice, "Initiative: 50", [template_string_$item(Pantogram_templateObject11 || (Pantogram_templateObject11 = Pantogram_taggedTemplateLiteral(["bar skin"]))), 1]), Pantogram_defineProperty(_MiddleSacrifice, "Familiar Weight: 10", [template_string_$item(Pantogram_templateObject12 || (Pantogram_templateObject12 = Pantogram_taggedTemplateLiteral(["lead necklace"]))), 11]), Pantogram_defineProperty(_MiddleSacrifice, "Candy Drop: 100", [template_string_$item(Pantogram_templateObject13 || (Pantogram_templateObject13 = Pantogram_taggedTemplateLiteral(["huge bowl of candy"]))), 1]), Pantogram_defineProperty(_MiddleSacrifice, "Item Drop Penalty: -10", [template_string_$item(Pantogram_templateObject14 || (Pantogram_templateObject14 = Pantogram_taggedTemplateLiteral(["sea salt crystal"]))), 11]), Pantogram_defineProperty(_MiddleSacrifice, "Fishing Skill: 5", [template_string_$item(Pantogram_templateObject15 || (Pantogram_templateObject15 = Pantogram_taggedTemplateLiteral(["wriggling worm"]))), 1]), Pantogram_defineProperty(_MiddleSacrifice, "Pool Skill: 5", [template_string_$item(Pantogram_templateObject16 || (Pantogram_templateObject16 = Pantogram_taggedTemplateLiteral(["8-ball"]))), 15]), Pantogram_defineProperty(_MiddleSacrifice, "Avatar: Purple", [template_string_$item(Pantogram_templateObject17 || (Pantogram_templateObject17 = Pantogram_taggedTemplateLiteral(["moxie weed"]))), 99]), Pantogram_defineProperty(_MiddleSacrifice, "Drops Items: true", [template_string_$item(Pantogram_templateObject18 || (Pantogram_templateObject18 = Pantogram_taggedTemplateLiteral(["ten-leaf clover"]))), 1]), _MiddleSacrifice);

function getMiddleSacPair(mod) {
  return MiddleSacrifice[mod];
}

var RightSacrifice = (_RightSacrifice = {}, Pantogram_defineProperty(_RightSacrifice, "Weapon Damage: 20", [-1, 0]), Pantogram_defineProperty(_RightSacrifice, "Spell Damage Percent: 20", [-2, 0]), Pantogram_defineProperty(_RightSacrifice, "Meat Drop: 30", [template_string_$item(Pantogram_templateObject19 || (Pantogram_templateObject19 = Pantogram_taggedTemplateLiteral(["taco shell"]))), 1]), Pantogram_defineProperty(_RightSacrifice, "Meat Drop: 60", [template_string_$item(Pantogram_templateObject20 || (Pantogram_templateObject20 = Pantogram_taggedTemplateLiteral(["porquoise"]))), 1]), Pantogram_defineProperty(_RightSacrifice, "Item Drop: 15", [template_string_$item(Pantogram_templateObject21 || (Pantogram_templateObject21 = Pantogram_taggedTemplateLiteral(["fairy gravy boat"]))), 1]), Pantogram_defineProperty(_RightSacrifice, "Item Drop: 30", [template_string_$item(Pantogram_templateObject22 || (Pantogram_templateObject22 = Pantogram_taggedTemplateLiteral(["tiny dancer"]))), 1]), Pantogram_defineProperty(_RightSacrifice, "Muscle Experience: 3", [template_string_$item(Pantogram_templateObject23 || (Pantogram_templateObject23 = Pantogram_taggedTemplateLiteral(["Knob Goblin firecracker"]))), 3]), Pantogram_defineProperty(_RightSacrifice, "Mysticality Experience: 3", [template_string_$item(Pantogram_templateObject24 || (Pantogram_templateObject24 = Pantogram_taggedTemplateLiteral(["razor-sharp can lid"]))), 3]), Pantogram_defineProperty(_RightSacrifice, "Moxie Experience: 3", [template_string_$item(Pantogram_templateObject25 || (Pantogram_templateObject25 = Pantogram_taggedTemplateLiteral(["spider web"]))), 3]), Pantogram_defineProperty(_RightSacrifice, "Muscle Experience Percent: 25", [template_string_$item(Pantogram_templateObject26 || (Pantogram_templateObject26 = Pantogram_taggedTemplateLiteral(["synthetic marrow"]))), 5]), Pantogram_defineProperty(_RightSacrifice, "Mysticality Experience Percent: 25", [template_string_$item(Pantogram_templateObject27 || (Pantogram_templateObject27 = Pantogram_taggedTemplateLiteral(["haunted battery"]))), 5]), Pantogram_defineProperty(_RightSacrifice, "Moxie Experience Percent: 25", [template_string_$item(Pantogram_templateObject28 || (Pantogram_templateObject28 = Pantogram_taggedTemplateLiteral(["the funk"]))), 5]), _RightSacrifice);

function getRightSacPair(mod) {
  return RightSacrifice[mod];
}
/**
 * Finds the item requirements for a particular pair of pants.
 * @param modifiers An object consisting of the modifiers you want on your pants. For modifiers repeated across a particular sacrifice, use a tuple of that modifier and its value.
 * @returns A map of the items you need to make these pants and the quantities needed.
 */


function findRequirements(modifiers) {
  var leftSac = modifiers.leftSac,
      rightSac = modifiers.rightSac,
      middleSac = modifiers.middleSac;
  var returnValue = new Map();

  if (leftSac) {
    var _getLeftSacPair = getLeftSacPair(leftSac),
        _getLeftSacPair2 = Pantogram_slicedToArray(_getLeftSacPair, 2),
        sacrifice = _getLeftSacPair2[0],
        quantity = _getLeftSacPair2[1];

    if (sacrifice instanceof external_kolmafia_namespaceObject.Item) {
      returnValue.set(sacrifice, quantity);
    }
  }

  if (rightSac) {
    var _getRightSacPair = getRightSacPair(rightSac),
        _getRightSacPair2 = Pantogram_slicedToArray(_getRightSacPair, 2),
        _sacrifice = _getRightSacPair2[0],
        _quantity = _getRightSacPair2[1];

    if (_sacrifice instanceof external_kolmafia_namespaceObject.Item) {
      returnValue.set(_sacrifice, _quantity);
    }
  }

  if (middleSac) {
    var _getMiddleSacPair = getMiddleSacPair(middleSac),
        _getMiddleSacPair2 = Pantogram_slicedToArray(_getMiddleSacPair, 2),
        _sacrifice2 = _getMiddleSacPair2[0],
        _quantity2 = _getMiddleSacPair2[1];

    if (_sacrifice2 instanceof external_kolmafia_namespaceObject.Item) {
      returnValue.set(_sacrifice2, _quantity2);
    }
  }

  return returnValue;
}

function sacrificePairToURL(pair) {
  var _pair = Pantogram_slicedToArray(pair, 2),
      rawSacrifice = _pair[0],
      quantity = _pair[1];

  var sacrifice = rawSacrifice instanceof external_kolmafia_namespaceObject.Item ? (0,external_kolmafia_namespaceObject.toInt)(rawSacrifice) : rawSacrifice;
  return "".concat(sacrifice, ",").concat(quantity);
}
/**
 * Makes a pair of pants with the given modifiers
 * @param alignment The stat you'd like your pants to improve. Moxie, Mysticality, or Muscle
 * @param element The element you'd like your pants to provide resistance for
 * @param leftSac The modifier you'd like to get from your leftmost sacrifice in Pantagramming.
 * @param middleSac The modifier you'd like to get from your middle sacrifice in Pantagramming.
 * @param rightSac The modifier you'd like to get from your rightmost sacrifice in Pantagramming.
 * @returns Whether or not you successfully created a pair of pants. False if you don't own the pantogram or if you already have pantogram pants.
 */


function makePants(alignment, element, leftSac, middleSac, rightSac) {
  if (have(pants) || !have(pantogram)) return false;
  var requirements = findRequirements({
    alignment: alignment,
    element: element,
    leftSac: leftSac,
    rightSac: rightSac,
    middleSac: middleSac
  });

  if (Array.from(requirements.entries()).some(_ref => {
    var _ref2 = Pantogram_slicedToArray(_ref, 2),
        item = _ref2[0],
        quantity = _ref2[1];

    return !have(item, quantity);
  })) {
    return false;
  }

  var s1 = sacrificePairToURL(getLeftSacPair(leftSac));
  var s2 = sacrificePairToURL(getRightSacPair(rightSac));
  var s3 = sacrificePairToURL(getMiddleSacPair(middleSac));
  var url = "choice.php?whichchoice=1270&pwd&option=1&m=".concat(Alignment[alignment], "&e=").concat(Element[element], "&s1=").concat(s1, "&s2=").concat(s2, "&s3=").concat(s3);
  (0,external_kolmafia_namespaceObject.visitUrl)("inv_use.php?pwd&whichitem=9573");
  (0,external_kolmafia_namespaceObject.visitUrl)(url);
  return have(pants);
}
/**
 * Creates a pair of pants from a Pants object.
 * @param pants An object consisting of the modifiers you'd like the pants to give you.
 * @returns Whether or not you successfully created a pair of pants. False if you don't own the pantogram or if you already have pantogram pants.
 */

function makePantsFromObject(pants) {
  return makePants(pants.alignment, pants.element, pants.leftSac, pants.middleSac, pants.rightSac);
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2022/TrainSet.js
var TrainSet_templateObject;

function TrainSet_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var TrainSet_item = template_string_$item(TrainSet_templateObject || (TrainSet_templateObject = TrainSet_taggedTemplateLiteral(["model train set"])));
function installed() {
  return (0,external_kolmafia_namespaceObject.getWorkshed)() === TrainSet_item;
}
function TrainSet_have() {
  return installed() || have_(TrainSet_item);
}
var Station;

(function (Station) {
  /**
   * Unknown station
   */
  Station["UNKNOWN"] = "";
  /**
   * Empty station
   */

  Station["EMPTY"] = "empty";
  /**
   * Gain 800 meat
   */

  Station["GAIN_MEAT"] = "meat_mine";
  /**
   * Effect: Regenerate MP
   */

  Station["TOWER_FIZZY"] = "tower_fizzy";
  /**
   * Gain mus, mys, mox stats
   */

  Station["VIEWING_PLATFORM"] = "viewing_platform";
  /**
   * Effect: Hot resist, cold damage
   */

  Station["TOWER_FROZEN"] = "tower_frozen";
  /**
   * Effect: Stench resist, spooky damage
   */

  Station["SPOOKY_GRAVEYARD"] = "spooky_graveyard";
  /**
   * Get smut bridge part, or stats
   */

  Station["LOGGING_MILL"] = "logging_mill";
  /**
   * Get some candy
   */

  Station["CANDY_FACTORY"] = "candy_factory";
  /**
   * Double strength of next station
   */

  Station["COAL_HOPPER"] = "coal_hopper";
  /**
   * Effect: Cold resist, stench damage
   */

  Station["TOWER_SEWAGE"] = "tower_sewage";
  /**
   * Effect: Spooky resist, sleaze damage
   */

  Station["OIL_REFINERY"] = "oil_refinery";
  /**
   * Effect: Sleaze resist, hot damage
   */

  Station["OIL_BRIDGE"] = "oil_bridge";
  /**
   * Effect: Increased Monster Level
   */

  Station["WATER_BRIDGE"] = "water_bridge";
  /**
   * Get moxie stats
   */

  Station["GROIN_SILO"] = "groin_silo";
  /**
   * Get random booze
   */

  Station["GRAIN_SILO"] = "grain_silo";
  /**
   * Get mys stats
   */

  Station["BRAIN_SILO"] = "brain_silo";
  /**
   * Get muscle stats
   */

  Station["BRAWN_SILO"] = "brawn_silo";
  /**
   * Effect: 50% food drop
   */

  Station["PRAWN_SILO"] = "prawn_silo";
  /**
   * Dupe last food dropped, or gain random food
   */

  Station["TRACKSIDE_DINER"] = "trackside_diner";
  /**
   * Drop random ore, or trapper ore if known
   */

  Station["ORE_HOPPER"] = "ore_hopper";
})(Station || (Station = {}));

var trainsetEffects = new Map([[Station.TOWER_FIZZY, external_kolmafia_namespaceObject.Effect.get("Carbonated")], [Station.TOWER_FROZEN, external_kolmafia_namespaceObject.Effect.get("Frozen")], [Station.SPOOKY_GRAVEYARD, external_kolmafia_namespaceObject.Effect.get("Shivering Spine")], [Station.TOWER_SEWAGE, external_kolmafia_namespaceObject.Effect.get("Hot Soupy Garbage")], [Station.OIL_BRIDGE, external_kolmafia_namespaceObject.Effect.get("Burningly Oiled")], [Station.OIL_REFINERY, external_kolmafia_namespaceObject.Effect.get("Spookily Greasy")], [Station.WATER_BRIDGE, external_kolmafia_namespaceObject.Effect.get("Troubled Waters")], [Station.PRAWN_SILO, external_kolmafia_namespaceObject.Effect.get("Craving Prawns")]]);
var trainsetEffectsDoubled = new Map([[Station.TOWER_FIZZY, external_kolmafia_namespaceObject.Effect.get("Double Carbonated")], [Station.TOWER_FROZEN, external_kolmafia_namespaceObject.Effect.get("Double Frozen")], [Station.SPOOKY_GRAVEYARD, external_kolmafia_namespaceObject.Effect.get("Doubly Shivering Spine")], [Station.TOWER_SEWAGE, external_kolmafia_namespaceObject.Effect.get("Double Hot Soupy Garbage")], [Station.OIL_BRIDGE, external_kolmafia_namespaceObject.Effect.get("Doubly Burningly Oiled")], [Station.OIL_REFINERY, external_kolmafia_namespaceObject.Effect.get("Doubly Spookily Greasy")], [Station.WATER_BRIDGE, external_kolmafia_namespaceObject.Effect.get("Doubly Troubled Waters")], [Station.PRAWN_SILO, external_kolmafia_namespaceObject.Effect.get("Doubly Craving Prawns")]]);
function effect(station) {
  var _trainsetEffects$get;

  return (_trainsetEffects$get = trainsetEffects.get(station)) !== null && _trainsetEffects$get !== void 0 ? _trainsetEffects$get : null;
}
function doubledEffect(station) {
  var _trainsetEffectsDoubl;

  return (_trainsetEffectsDoubl = trainsetEffectsDoubled.get(station)) !== null && _trainsetEffectsDoubl !== void 0 ? _trainsetEffectsDoubl : null;
}
function cycle() {
  return property_get("trainsetConfiguration").split(",");
}
function nextConfigurable() {
  return clamp(property_get("lastTrainsetConfiguration") + 40 - property_get("trainsetPosition"), 0, 40);
}
function canConfigure() {
  return installed() && !nextConfigurable();
}
var TrainSet_pieces = [Station.EMPTY, Station.GAIN_MEAT, Station.TOWER_FIZZY, Station.VIEWING_PLATFORM, Station.TOWER_FROZEN, Station.SPOOKY_GRAVEYARD, Station.LOGGING_MILL, Station.CANDY_FACTORY, Station.COAL_HOPPER, Station.TOWER_SEWAGE, Station.UNKNOWN, Station.OIL_REFINERY, Station.OIL_BRIDGE, Station.WATER_BRIDGE, Station.GROIN_SILO, Station.GRAIN_SILO, Station.BRAIN_SILO, Station.BRAWN_SILO, Station.PRAWN_SILO, Station.TRACKSIDE_DINER, Station.ORE_HOPPER];

function stationToInt(station) {
  return TrainSet_pieces.indexOf(station);
}

function setConfiguration(configuration) {
  if (!canConfigure()) return false;
  (0,external_kolmafia_namespaceObject.visitUrl)("campground.php?action=workshed");
  (0,external_kolmafia_namespaceObject.runChoice)(1, "forceoption=0".concat(configuration.map((station, index) => "&slot[".concat(index, "]=").concat(stationToInt(station))).join("")));
  (0,external_kolmafia_namespaceObject.visitUrl)("main.php");
  var currentConfiguration = cycle();
  return configuration.every((station, index) => station === currentConfiguration[index]);
}
function next() {
  return cycle()[get("trainsetPosition") % 8];
}
;// CONCATENATED MODULE: ./src/tasks/runstart.ts
var runstart_templateObject, runstart_templateObject2, runstart_templateObject3, runstart_templateObject4, runstart_templateObject5, runstart_templateObject6, runstart_templateObject7, runstart_templateObject8, runstart_templateObject9, runstart_templateObject10, runstart_templateObject11, runstart_templateObject12, runstart_templateObject13, runstart_templateObject14, runstart_templateObject15, runstart_templateObject16, runstart_templateObject17, runstart_templateObject18, runstart_templateObject19, runstart_templateObject20, runstart_templateObject21, runstart_templateObject22, runstart_templateObject23, runstart_templateObject24, runstart_templateObject25, runstart_templateObject26, runstart_templateObject27, runstart_templateObject28, runstart_templateObject29, runstart_templateObject30, runstart_templateObject31, runstart_templateObject32, runstart_templateObject33, runstart_templateObject34, runstart_templateObject35, runstart_templateObject36, runstart_templateObject37, runstart_templateObject38, runstart_templateObject39, runstart_templateObject40, runstart_templateObject41, runstart_templateObject42, runstart_templateObject43, runstart_templateObject44, runstart_templateObject45, runstart_templateObject46, runstart_templateObject47, runstart_templateObject48, runstart_templateObject49, runstart_templateObject50, runstart_templateObject51, runstart_templateObject52, runstart_templateObject53, runstart_templateObject54, runstart_templateObject55, runstart_templateObject56, runstart_templateObject57, runstart_templateObject58, runstart_templateObject59, runstart_templateObject60, runstart_templateObject61, runstart_templateObject62, runstart_templateObject63, runstart_templateObject64, runstart_templateObject65, runstart_templateObject66, runstart_templateObject67, runstart_templateObject68, runstart_templateObject69, runstart_templateObject70, runstart_templateObject71, runstart_templateObject72, runstart_templateObject73, runstart_templateObject74, runstart_templateObject75, runstart_templateObject76, runstart_templateObject77, runstart_templateObject78, runstart_templateObject79, runstart_templateObject80, runstart_templateObject81, runstart_templateObject82, runstart_templateObject83, runstart_templateObject84, runstart_templateObject85, runstart_templateObject86;

function runstart_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var RunStartQuest = {
  name: "Run Start",
  completed: () => CommunityService.CoilWire.isDone(),
  tasks: [{
    name: "Council",
    completed: () => property_get("lastCouncilVisit") > 0,
    do: () => (0,external_kolmafia_namespaceObject.visitUrl)("council.php")
  }, {
    name: "Toot",
    prepare: () => (0,external_kolmafia_namespaceObject.visitUrl)("tutorial.php?action=toot"),
    completed: () => property_get("questM05Toot") === "finished" && !have(template_string_$item(runstart_templateObject || (runstart_templateObject = runstart_taggedTemplateLiteral(["letter from King Ralph XI"])))),
    do: () => (0,external_kolmafia_namespaceObject.use)(template_string_$item(runstart_templateObject2 || (runstart_templateObject2 = runstart_taggedTemplateLiteral(["letter from King Ralph XI"])))),
    limit: {
      tries: 1
    }
  }, {
    name: "Skeleton Store",
    completed: () => property_get("questM23Meatsmith") !== "unstarted",
    do: () => {
      (0,external_kolmafia_namespaceObject.visitUrl)("shop.php?whichshop=meatsmith&action=talk");
      (0,external_kolmafia_namespaceObject.runChoice)(1);
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Overgrown Lot",
    completed: () => property_get("questM24Doc") !== "unstarted",
    do: () => {
      (0,external_kolmafia_namespaceObject.visitUrl)("shop.php?whichshop=doc&action=talk");
      (0,external_kolmafia_namespaceObject.runChoice)(1);
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Madness Bakery",
    completed: () => property_get("questM25Armorer") !== "unstarted",
    do: () => {
      (0,external_kolmafia_namespaceObject.visitUrl)("shop.php?whichshop=armory&action=talk");
      (0,external_kolmafia_namespaceObject.runChoice)(1);
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Sell Pork Gems",
    completed: () => !have(template_string_$item(runstart_templateObject3 || (runstart_templateObject3 = runstart_taggedTemplateLiteral(["pork elf goodies sack"])))),
    do: () => {
      (0,external_kolmafia_namespaceObject.use)(template_string_$item(runstart_templateObject4 || (runstart_templateObject4 = runstart_taggedTemplateLiteral(["pork elf goodies sack"]))));
      (0,external_kolmafia_namespaceObject.autosell)(template_string_$item(runstart_templateObject5 || (runstart_templateObject5 = runstart_taggedTemplateLiteral(["hamethyst"]))), (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(runstart_templateObject6 || (runstart_templateObject6 = runstart_taggedTemplateLiteral(["hamethyst"])))));
      (0,external_kolmafia_namespaceObject.autosell)(template_string_$item(runstart_templateObject7 || (runstart_templateObject7 = runstart_taggedTemplateLiteral(["baconstone"]))), (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(runstart_templateObject8 || (runstart_templateObject8 = runstart_taggedTemplateLiteral(["baconstone"])))));
      (0,external_kolmafia_namespaceObject.autosell)(template_string_$item(runstart_templateObject9 || (runstart_templateObject9 = runstart_taggedTemplateLiteral(["porquoise"]))), (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(runstart_templateObject10 || (runstart_templateObject10 = runstart_taggedTemplateLiteral(["porquoise"])))));
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Get Codpiece",
    completed: () => property_get("_floundryItemCreated"),
    do: () => {
      (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(runstart_templateObject11 || (runstart_templateObject11 = runstart_taggedTemplateLiteral(["codpiece"]))), 1);
      (0,external_kolmafia_namespaceObject.use)(template_string_$item(runstart_templateObject12 || (runstart_templateObject12 = runstart_taggedTemplateLiteral(["codpiece"]))), 1);
      (0,external_kolmafia_namespaceObject.create)(template_string_$item(runstart_templateObject13 || (runstart_templateObject13 = runstart_taggedTemplateLiteral(["oil cap"]))), 1);
      (0,external_kolmafia_namespaceObject.autosell)(template_string_$item(runstart_templateObject14 || (runstart_templateObject14 = runstart_taggedTemplateLiteral(["oil cap"]))), 1);
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Deck",
    ready: () => property_get("_deckCardsDrawn") === 0,
    completed: () => property_get("_deckCardsDrawn") >= 10 || !have(template_string_$item(runstart_templateObject15 || (runstart_templateObject15 = runstart_taggedTemplateLiteral(["Deck of Every Card"])))),
    do: () => {
      (0,external_kolmafia_namespaceObject.cliExecute)("cheat wrench");
      (0,external_kolmafia_namespaceObject.cliExecute)("cheat candlestick");
    },
    limit: {
      tries: 1
    }
  }, {
    name: "KGB",
    completed: () => property_get("_kgbClicksUsed") > 0 || !have(template_string_$item(runstart_templateObject16 || (runstart_templateObject16 = runstart_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("briefcase e ml"),
    limit: {
      tries: 1
    }
  }, {
    name: "Restore mp",
    completed: () => property_get("timesRested") >= (0,external_kolmafia_namespaceObject.totalFreeRests)() || (0,external_kolmafia_namespaceObject.myMp)() >= Math.min(200, (0,external_kolmafia_namespaceObject.myMaxmp)()),
    prepare: () => {
      if (have(template_string_$item(runstart_templateObject17 || (runstart_templateObject17 = runstart_taggedTemplateLiteral(["Newbiesport\u2122 tent"]))))) (0,external_kolmafia_namespaceObject.use)(template_string_$item(runstart_templateObject18 || (runstart_templateObject18 = runstart_taggedTemplateLiteral(["Newbiesport\u2122 tent"]))));
    },
    do: () => {
      if (property_get("chateauAvailable")) {
        (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=chateau&action=chateau_restbox");
      } else if (property_get("getawayCampsiteUnlocked")) {
        (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=campaway&action=campaway_tentclick");
      } else {
        (0,external_kolmafia_namespaceObject.visitUrl)("campground.php?action=rest");
      }
    },
    outfit: {
      modifier: "myst, mp"
    }
  }, {
    name: "Borrowed Time",
    prepare: () => {
      if (have(template_string_$item(runstart_templateObject19 || (runstart_templateObject19 = runstart_taggedTemplateLiteral(["borrowed time"]))))) return;
      if (have(template_string_$skill(runstart_templateObject20 || (runstart_templateObject20 = runstart_taggedTemplateLiteral(["Summon Clip Art"])))) && property_get("tomeSummons") < 3) (0,external_kolmafia_namespaceObject.create)(template_string_$item(runstart_templateObject21 || (runstart_templateObject21 = runstart_taggedTemplateLiteral(["borrowed time"]))), 1);else (0,external_kolmafia_namespaceObject.takeStorage)(template_string_$item(runstart_templateObject22 || (runstart_templateObject22 = runstart_taggedTemplateLiteral(["borrowed time"]))), 1);
    },
    completed: () => property_get("_borrowedTimeUsed"),
    do: () => (0,external_kolmafia_namespaceObject.use)(template_string_$item(runstart_templateObject23 || (runstart_templateObject23 = runstart_taggedTemplateLiteral(["borrowed time"]))), 1),
    limit: {
      tries: 1
    }
  }, {
    name: "Numberology",
    ready: () => Object.keys((0,external_kolmafia_namespaceObject.reverseNumberology)()).includes("69"),
    completed: () => property_get("_universeCalculated") >= (property_get("skillLevel144") > 3 ? 3 : property_get("skillLevel144")),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("numberology 69"),
    limit: {
      tries: 3
    }
  }, {
    name: "Chateau Desk",
    completed: () => property_get("_chateauDeskHarvested") || !property_get("chateauAvailable"),
    do: () => (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=chateau&action=chateau_desk"),
    limit: {
      tries: 1
    }
  }, {
    name: "Cowboy Boots",
    completed: () => have(template_string_$item(runstart_templateObject24 || (runstart_templateObject24 = runstart_taggedTemplateLiteral(["your cowboy boots"])))) || !property_get("telegraphOfficeAvailable"),
    do: () => (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=town_right&action=townright_ltt"),
    limit: {
      tries: 1
    }
  }, {
    name: "Detective Badge",
    completed: () => have(template_string_$item(runstart_templateObject25 || (runstart_templateObject25 = runstart_taggedTemplateLiteral(["gold detective badge"])))) || !property_get("hasDetectiveSchool"),
    do: () => (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=town_wrong&action=townwrong_precinct"),
    limit: {
      tries: 1
    }
  }, {
    name: "Detective School",
    completed: () => property_get("_detectiveCasesCompleted", 0) >= 3 || !property_get("hasDetectiveSchool"),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("Detective Solver"),
    limit: {
      tries: 3
    }
  }, {
    name: "Pantogramming",
    completed: () => havePants() || !have(template_string_$item(runstart_templateObject26 || (runstart_templateObject26 = runstart_taggedTemplateLiteral(["portable pantogram"])))),
    do: () => {
      makePants("Mysticality", "Hot Resistance: 2", "Maximum HP: 40", "Combat Rate: -5", "Weapon Damage: 20");
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Mummery",
    completed: () => property_get("_mummeryMods").includes("Experience (Mysticality)") || !have(template_string_$item(runstart_templateObject27 || (runstart_templateObject27 = runstart_taggedTemplateLiteral(["mumming trunk"])))),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("mummery myst"),
    outfit: {
      familiar: template_string_$familiar(runstart_templateObject28 || (runstart_templateObject28 = runstart_taggedTemplateLiteral(["Cookbookbat"])))
    },
    limit: {
      tries: 1
    }
  }, {
    name: "BoomBox",
    completed: () => song() === "These Fists Were Made for Punchin'" || !have(template_string_$item(runstart_templateObject29 || (runstart_templateObject29 = runstart_taggedTemplateLiteral(["SongBoom\u2122 BoomBox"])))),
    do: () => setSong("These Fists Were Made for Punchin'"),
    limit: {
      tries: 1
    }
  }, {
    name: "Horsery",
    completed: () => property_get("_horsery") === "dark horse" || !property_get("horseryAvailable"),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("horsery dark"),
    limit: {
      tries: 1
    }
  }, {
    name: "Vote",
    completed: () => have(template_string_$item(runstart_templateObject30 || (runstart_templateObject30 = runstart_taggedTemplateLiteral(["\"I Voted!\" sticker"])))) || !property_get("voteAlways"),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("VotingBooth.ash"),
    limit: {
      tries: 1
    }
  }, {
    name: "Scavenge",
    completed: () => property_get("_daycareGymScavenges") > 0 || !property_get("daycareOpen"),
    do: () => {
      (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=town_wrong&action=townwrong_boxingdaycare");
      (0,external_kolmafia_namespaceObject.runChoice)(3);
      (0,external_kolmafia_namespaceObject.runChoice)(2);
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Cosplay Saber",
    completed: () => property_get("_saberMod") > 0 || !have(template_string_$item(runstart_templateObject31 || (runstart_templateObject31 = runstart_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("saber familiar"),
    limit: {
      tries: 1
    }
  }, {
    name: "Bird Calendar",
    completed: () => have(template_string_$skill(runstart_templateObject32 || (runstart_templateObject32 = runstart_taggedTemplateLiteral(["Seek out a Bird"])))) || !have(template_string_$item(runstart_templateObject33 || (runstart_templateObject33 = runstart_taggedTemplateLiteral(["Bird-a-Day calendar"])))),
    do: () => (0,external_kolmafia_namespaceObject.use)(template_string_$item(runstart_templateObject34 || (runstart_templateObject34 = runstart_taggedTemplateLiteral(["Bird-a-Day calendar"])))),
    limit: {
      tries: 1
    }
  }, {
    name: "Lathe",
    prepare: () => (0,external_kolmafia_namespaceObject.visitUrl)("shop.php?whichshop=lathe"),
    completed: () => have(template_string_$item(runstart_templateObject35 || (runstart_templateObject35 = runstart_taggedTemplateLiteral(["weeping willow wand"])))) || !have(template_string_$item(runstart_templateObject36 || (runstart_templateObject36 = runstart_taggedTemplateLiteral(["SpinMaster\u2122 lathe"])))),
    do: () => (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(runstart_templateObject37 || (runstart_templateObject37 = runstart_taggedTemplateLiteral(["weeping willow wand"])))),
    limit: {
      tries: 1
    }
  }, {
    name: "Backup Camera",
    completed: () => !have(template_string_$item(runstart_templateObject38 || (runstart_templateObject38 = runstart_taggedTemplateLiteral(["backup camera"])))) || property_get("backupCameraMode") === "ml" && property_get("backupCameraReverserEnabled"),
    do: () => {
      (0,external_kolmafia_namespaceObject.cliExecute)("backupcamera ml");
      if (!property_get("backupCameraReverserEnabled")) (0,external_kolmafia_namespaceObject.cliExecute)("backupcamera reverser");
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Autumnaton",
    completed: () => !have(template_string_$item(runstart_templateObject39 || (runstart_templateObject39 = runstart_taggedTemplateLiteral(["autumn-aton"])))) || have(template_string_$item(runstart_templateObject40 || (runstart_templateObject40 = runstart_taggedTemplateLiteral(["autumn leaf"])))) || have($effect(runstart_templateObject41 || (runstart_templateObject41 = runstart_taggedTemplateLiteral(["Crunching Leaves"])))),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("autumnaton send The Sleazy Back Alley"),
    limit: {
      tries: 1
    }
  }, {
    name: "Configure Trainset",
    completed: () => !have(template_string_$item(runstart_templateObject42 || (runstart_templateObject42 = runstart_taggedTemplateLiteral(["model train set"])))) || (0,external_kolmafia_namespaceObject.getWorkshed)() === template_string_$item(runstart_templateObject43 || (runstart_templateObject43 = runstart_taggedTemplateLiteral(["model train set"]))) && !canConfigure(),
    do: () => {
      (0,external_kolmafia_namespaceObject.use)(template_string_$item(runstart_templateObject44 || (runstart_templateObject44 = runstart_taggedTemplateLiteral(["model train set"]))));
      setConfiguration([Station.GAIN_MEAT, // meat
      Station.TOWER_FIZZY, // mp regen
      Station.COAL_HOPPER, // double myst gain
      Station.BRAIN_SILO, // myst stats
      Station.VIEWING_PLATFORM, // all stats
      Station.WATER_BRIDGE, // +ML
      Station.TOWER_FROZEN, // hot resist (useful)
      Station.CANDY_FACTORY // candies
      ]);
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Use Mind Control Device",
    completed: () => (0,external_kolmafia_namespaceObject.currentMcd)() >= 10,
    do: () => (0,external_kolmafia_namespaceObject.changeMcd)(11),
    limit: {
      tries: 1
    }
  }, {
    name: "Novelty Tropical Skeleton",
    ready: () => !have($effect(runstart_templateObject45 || (runstart_templateObject45 = runstart_taggedTemplateLiteral(["Everything Looks Yellow"])))) || have(template_string_$item(runstart_templateObject46 || (runstart_templateObject46 = runstart_taggedTemplateLiteral(["cherry"])))),
    prepare: () => {
      if (!have(template_string_$item(runstart_templateObject47 || (runstart_templateObject47 = runstart_taggedTemplateLiteral(["yellow rocket"]))))) (0,external_kolmafia_namespaceObject.buy)(template_string_$item(runstart_templateObject48 || (runstart_templateObject48 = runstart_taggedTemplateLiteral(["yellow rocket"]))), 1);
      if (have(template_string_$item(runstart_templateObject49 || (runstart_templateObject49 = runstart_taggedTemplateLiteral(["unbreakable umbrella"])))) && property_get("umbrellaState") !== "broken") (0,external_kolmafia_namespaceObject.cliExecute)("umbrella ml");
      if (property_get("_snokebombUsed") === 0) (0,external_kolmafia_namespaceObject.restoreMp)(50);
    },
    completed: () => have(template_string_$item(runstart_templateObject50 || (runstart_templateObject50 = runstart_taggedTemplateLiteral(["cherry"])))) && !have(template_string_$item(runstart_templateObject51 || (runstart_templateObject51 = runstart_taggedTemplateLiteral(["cosmic bowling ball"])))) && property_get("_snokebombUsed") >= 1,
    do: $location(runstart_templateObject52 || (runstart_templateObject52 = runstart_taggedTemplateLiteral(["The Skeleton Store"]))),
    combat: new CombatStrategy().macro(combat_Macro.if_($monster(runstart_templateObject53 || (runstart_templateObject53 = runstart_taggedTemplateLiteral(["novelty tropical skeleton"]))), combat_Macro.tryItem(template_string_$item(runstart_templateObject54 || (runstart_templateObject54 = runstart_taggedTemplateLiteral(["yellow rocket"]))))).trySkill(template_string_$skill(runstart_templateObject55 || (runstart_templateObject55 = runstart_taggedTemplateLiteral(["Bowl a Curveball"])))).trySkill(template_string_$skill(runstart_templateObject56 || (runstart_templateObject56 = runstart_taggedTemplateLiteral(["Snokebomb"])))).abort()),
    outfit: {
      offhand: template_string_$item(runstart_templateObject57 || (runstart_templateObject57 = runstart_taggedTemplateLiteral(["unbreakable umbrella"]))),
      acc1: template_string_$item(runstart_templateObject58 || (runstart_templateObject58 = runstart_taggedTemplateLiteral(["codpiece"]))),
      familiar: template_string_$familiar(runstart_templateObject59 || (runstart_templateObject59 = runstart_taggedTemplateLiteral(["Cookbookbat"]))),
      modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape"
    },
    post: () => {
      if (have(template_string_$item(runstart_templateObject60 || (runstart_templateObject60 = runstart_taggedTemplateLiteral(["MayDay\u2122 supply package"]))))) (0,external_kolmafia_namespaceObject.use)(template_string_$item(runstart_templateObject61 || (runstart_templateObject61 = runstart_taggedTemplateLiteral(["MayDay\u2122 supply package"]))), 1);
      if (have(template_string_$item(runstart_templateObject62 || (runstart_templateObject62 = runstart_taggedTemplateLiteral(["space blanket"]))))) (0,external_kolmafia_namespaceObject.autosell)(template_string_$item(runstart_templateObject63 || (runstart_templateObject63 = runstart_taggedTemplateLiteral(["space blanket"]))), 1);
    },
    limit: {
      tries: 4
    }
  }, {
    name: "Chewing Gum",
    completed: () => (0,external_kolmafia_namespaceObject.myMeat)() <= 600 || have(template_string_$item(runstart_templateObject64 || (runstart_templateObject64 = runstart_taggedTemplateLiteral(["turtle totem"])))) && have(template_string_$item(runstart_templateObject65 || (runstart_templateObject65 = runstart_taggedTemplateLiteral(["saucepan"])))) && property_get("_cloversPurchased") >= 2,
    do: () => {
      (0,external_kolmafia_namespaceObject.buy)(1, template_string_$item(runstart_templateObject66 || (runstart_templateObject66 = runstart_taggedTemplateLiteral(["chewing gum on a string"]))));
      (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(runstart_templateObject67 || (runstart_templateObject67 = runstart_taggedTemplateLiteral(["chewing gum on a string"]))));
      (0,external_kolmafia_namespaceObject.hermit)(template_string_$item(runstart_templateObject68 || (runstart_templateObject68 = runstart_taggedTemplateLiteral(["11-leaf clover"]))), 1);
    },
    acquire: [{
      item: template_string_$item(runstart_templateObject69 || (runstart_templateObject69 = runstart_taggedTemplateLiteral(["toy accordion"])))
    }],
    limit: {
      tries: 50
    }
  }, {
    name: "Get Distilled Fortified Wine",
    ready: () => have(template_string_$item(runstart_templateObject70 || (runstart_templateObject70 = runstart_taggedTemplateLiteral(["11-leaf clover"])))) || have($effect(runstart_templateObject71 || (runstart_templateObject71 = runstart_taggedTemplateLiteral(["Lucky!"])))),
    completed: () => (0,external_kolmafia_namespaceObject.myInebriety)() >= 1,
    do: () => {
      if (!have($effect(runstart_templateObject72 || (runstart_templateObject72 = runstart_taggedTemplateLiteral(["Lucky!"]))))) (0,external_kolmafia_namespaceObject.use)(template_string_$item(runstart_templateObject73 || (runstart_templateObject73 = runstart_taggedTemplateLiteral(["11-leaf clover"]))));
      if (!have(template_string_$item(runstart_templateObject74 || (runstart_templateObject74 = runstart_taggedTemplateLiteral(["distilled fortified wine"]))))) (0,external_kolmafia_namespaceObject.adv1)($location(runstart_templateObject75 || (runstart_templateObject75 = runstart_taggedTemplateLiteral(["The Sleazy Back Alley"]))), -1);

      while (have(template_string_$item(runstart_templateObject76 || (runstart_templateObject76 = runstart_taggedTemplateLiteral(["distilled fortified wine"])))) && (0,external_kolmafia_namespaceObject.myInebriety)() < 1) {
        tryAcquiringEffect($effect(runstart_templateObject77 || (runstart_templateObject77 = runstart_taggedTemplateLiteral(["Ode to Booze"]))));
        (0,external_kolmafia_namespaceObject.drink)(template_string_$item(runstart_templateObject78 || (runstart_templateObject78 = runstart_taggedTemplateLiteral(["distilled fortified wine"]))), 1);
      }
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Kramco",
    prepare: () => {
      (0,external_kolmafia_namespaceObject.restoreHp)(clamp(500, (0,external_kolmafia_namespaceObject.myMaxhp)() / 2, (0,external_kolmafia_namespaceObject.myMaxhp)()));
    },
    ready: () => getKramcoWandererChance() >= 1.0,
    completed: () => getKramcoWandererChance() < 1.0 || !have(template_string_$item(runstart_templateObject79 || (runstart_templateObject79 = runstart_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"])))),
    do: $location(runstart_templateObject80 || (runstart_templateObject80 = runstart_taggedTemplateLiteral(["Noob Cave"]))),
    outfit: {
      offhand: template_string_$item(runstart_templateObject81 || (runstart_templateObject81 = runstart_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))),
      acc1: template_string_$item(runstart_templateObject82 || (runstart_templateObject82 = runstart_taggedTemplateLiteral(["codpiece"]))),
      familiar: template_string_$familiar(runstart_templateObject83 || (runstart_templateObject83 = runstart_taggedTemplateLiteral(["Cookbookbat"]))),
      modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape"
    },
    combat: new CombatStrategy().macro(combat_Macro["default"]()),
    post: () => (0,external_kolmafia_namespaceObject.eat)((0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(runstart_templateObject84 || (runstart_templateObject84 = runstart_taggedTemplateLiteral(["magical sausage"])))) + (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(runstart_templateObject85 || (runstart_templateObject85 = runstart_taggedTemplateLiteral(["magical sausage casing"])))), template_string_$item(runstart_templateObject86 || (runstart_templateObject86 = runstart_taggedTemplateLiteral(["magical sausage"]))))
  }]
};
;// CONCATENATED MODULE: ./src/tasks/familiarweight.ts
var familiarweight_templateObject, familiarweight_templateObject2, familiarweight_templateObject3, familiarweight_templateObject4, familiarweight_templateObject5, familiarweight_templateObject6, familiarweight_templateObject7, familiarweight_templateObject8, familiarweight_templateObject9, familiarweight_templateObject10, familiarweight_templateObject11, familiarweight_templateObject12, familiarweight_templateObject13, familiarweight_templateObject14, familiarweight_templateObject15, familiarweight_templateObject16, familiarweight_templateObject17, familiarweight_templateObject18, familiarweight_templateObject19, familiarweight_templateObject20, familiarweight_templateObject21, familiarweight_templateObject22, familiarweight_templateObject23, familiarweight_templateObject24;

function familiarweight_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var FamiliarWeightQuest = {
  name: "Familiar Weight",
  completed: () => CommunityService.FamiliarWeight.isDone(),
  tasks: [{
    name: "Meteor Shower",
    completed: () => have($effect(familiarweight_templateObject || (familiarweight_templateObject = familiarweight_taggedTemplateLiteral(["Meteor Showered"])))) || !have(template_string_$item(familiarweight_templateObject2 || (familiarweight_templateObject2 = familiarweight_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))) || !have(template_string_$skill(familiarweight_templateObject3 || (familiarweight_templateObject3 = familiarweight_taggedTemplateLiteral(["Meteor Lore"])))) || property_get("_saberForceUses") >= 5,
    do: $location(familiarweight_templateObject4 || (familiarweight_templateObject4 = familiarweight_taggedTemplateLiteral(["The Dire Warren"]))),
    combat: new CombatStrategy().macro(Macro.trySkill(template_string_$skill(familiarweight_templateObject5 || (familiarweight_templateObject5 = familiarweight_taggedTemplateLiteral(["Meteor Shower"])))).trySkill(template_string_$skill(familiarweight_templateObject6 || (familiarweight_templateObject6 = familiarweight_taggedTemplateLiteral(["Use the Force"])))).abort()),
    outfit: {
      weapon: template_string_$item(familiarweight_templateObject7 || (familiarweight_templateObject7 = familiarweight_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
      familiar: template_string_$familiar(familiarweight_templateObject8 || (familiarweight_templateObject8 = familiarweight_taggedTemplateLiteral(["Cookbookbat"])))
    },
    choices: {
      1387: 3
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Test",
    completed: () => CommunityService.FamiliarWeight.isDone(),
    prepare: () => {
      var usefulEffects = [$effect(familiarweight_templateObject9 || (familiarweight_templateObject9 = familiarweight_taggedTemplateLiteral(["Billiards Belligerence"]))), $effect(familiarweight_templateObject10 || (familiarweight_templateObject10 = familiarweight_taggedTemplateLiteral(["Blood Bond"]))), $effect(familiarweight_templateObject11 || (familiarweight_templateObject11 = familiarweight_taggedTemplateLiteral(["Boxing Day Glow"]))), $effect(familiarweight_templateObject12 || (familiarweight_templateObject12 = familiarweight_taggedTemplateLiteral(["Do I Know You From Somewhere?"]))), $effect(familiarweight_templateObject13 || (familiarweight_templateObject13 = familiarweight_taggedTemplateLiteral(["Empathy"]))), $effect(familiarweight_templateObject14 || (familiarweight_templateObject14 = familiarweight_taggedTemplateLiteral(["Fidoxene"]))), $effect(familiarweight_templateObject15 || (familiarweight_templateObject15 = familiarweight_taggedTemplateLiteral(["Leash of Linguini"]))), $effect(familiarweight_templateObject16 || (familiarweight_templateObject16 = familiarweight_taggedTemplateLiteral(["Puzzle Champ"])))];
      usefulEffects.forEach(ef => tryAcquiringEffect(ef, true));

      if (have(template_string_$skill(familiarweight_templateObject17 || (familiarweight_templateObject17 = familiarweight_taggedTemplateLiteral(["Summon Clip Art"]))))) {
        if (!have(template_string_$item(familiarweight_templateObject18 || (familiarweight_templateObject18 = familiarweight_taggedTemplateLiteral(["box of Familiar Jacks"]))))) (0,external_kolmafia_namespaceObject.create)(template_string_$item(familiarweight_templateObject19 || (familiarweight_templateObject19 = familiarweight_taggedTemplateLiteral(["box of Familiar Jacks"]))), 1);
        if (have(template_string_$familiar(familiarweight_templateObject20 || (familiarweight_templateObject20 = familiarweight_taggedTemplateLiteral(["Mini-Crimbot"]))))) (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(familiarweight_templateObject21 || (familiarweight_templateObject21 = familiarweight_taggedTemplateLiteral(["Mini-Crimbot"]))));else (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(familiarweight_templateObject22 || (familiarweight_templateObject22 = familiarweight_taggedTemplateLiteral(["Exotic Parrot"]))));
        (0,external_kolmafia_namespaceObject.use)(template_string_$item(familiarweight_templateObject23 || (familiarweight_templateObject23 = familiarweight_taggedTemplateLiteral(["box of Familiar Jacks"]))), 1);
        (0,external_kolmafia_namespaceObject.cliExecute)("maximize familiar weight");
      }
    },
    do: () => CommunityService.FamiliarWeight.run(() => logTestSetup(CommunityServiceTests.FAMTEST), 50),
    outfit: {
      modifier: "familiar weight",
      familiar: template_string_$familiar(familiarweight_templateObject24 || (familiarweight_templateObject24 = familiarweight_taggedTemplateLiteral(["Cookbookbat"])))
    },
    limit: {
      tries: 1
    }
  }]
};
;// CONCATENATED MODULE: ./src/tasks/noncombat.ts
var noncombat_templateObject, noncombat_templateObject2, noncombat_templateObject3, noncombat_templateObject4, noncombat_templateObject5, noncombat_templateObject6, noncombat_templateObject7, noncombat_templateObject8, noncombat_templateObject9, noncombat_templateObject10, noncombat_templateObject11, noncombat_templateObject12, noncombat_templateObject13, noncombat_templateObject14, noncombat_templateObject15, noncombat_templateObject16, noncombat_templateObject17, noncombat_templateObject18, noncombat_templateObject19;

function noncombat_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var NoncombatQuest = {
  name: "Noncombat",
  completed: () => CommunityService.Noncombat.isDone(),
  tasks: [{
    name: "Buy Porkpie-mounted Popper",
    completed: () => have(template_string_$item(noncombat_templateObject || (noncombat_templateObject = noncombat_taggedTemplateLiteral(["porkpie-mounted popper"])))),
    do: () => (0,external_kolmafia_namespaceObject.buy)(template_string_$item(noncombat_templateObject2 || (noncombat_templateObject2 = noncombat_taggedTemplateLiteral(["porkpie-mounted popper"]))), 1),
    limit: {
      tries: 1
    }
  }, {
    name: "Use Shadow Lodestone",
    // eslint-disable-next-line libram/verify-constants
    ready: () => have(template_string_$item(noncombat_templateObject3 || (noncombat_templateObject3 = noncombat_taggedTemplateLiteral(["Rufus's shadow lodestone"])))),
    // eslint-disable-next-line libram/verify-constants
    completed: () => have($effect(noncombat_templateObject4 || (noncombat_templateObject4 = noncombat_taggedTemplateLiteral(["Shadow Waters"])))),
    do: () => {
      // eslint-disable-next-line libram/verify-constants
      (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=town_right&action=townright_shadowrift");
      (0,external_kolmafia_namespaceObject.runChoice)(2);
    },
    choices: {
      1500: 2
    },
    combat: new CombatStrategy().macro(Macro.abort()),
    limit: {
      tries: 1
    }
  }, {
    name: "Test",
    completed: () => CommunityService.Noncombat.isDone(),
    prepare: () => {
      if (have(template_string_$item(noncombat_templateObject5 || (noncombat_templateObject5 = noncombat_taggedTemplateLiteral(["Jurassic Parka"])))) && property_get("parkaMode") !== "pterodactyl") (0,external_kolmafia_namespaceObject.cliExecute)("parka pterodactyl");
      if (property_get("_kgbClicksUsed") < 22 && have(template_string_$item(noncombat_templateObject6 || (noncombat_templateObject6 = noncombat_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("briefcase e -combat");
      var usefulEffects = [$effect(noncombat_templateObject7 || (noncombat_templateObject7 = noncombat_taggedTemplateLiteral(["Feeling Lonely"]))), $effect(noncombat_templateObject8 || (noncombat_templateObject8 = noncombat_taggedTemplateLiteral(["Gummed Shoes"]))), $effect(noncombat_templateObject9 || (noncombat_templateObject9 = noncombat_taggedTemplateLiteral(["Invisible Avatar"]))), $effect(noncombat_templateObject10 || (noncombat_templateObject10 = noncombat_taggedTemplateLiteral(["Silent Running"]))), $effect(noncombat_templateObject11 || (noncombat_templateObject11 = noncombat_taggedTemplateLiteral(["Smooth Movements"]))), $effect(noncombat_templateObject12 || (noncombat_templateObject12 = noncombat_taggedTemplateLiteral(["The Sonata of Sneakiness"]))), $effect(noncombat_templateObject13 || (noncombat_templateObject13 = noncombat_taggedTemplateLiteral(["Throwing Some Shade"]))), // Famwt for Disgeist
      $effect(noncombat_templateObject14 || (noncombat_templateObject14 = noncombat_taggedTemplateLiteral(["Blood Bond"]))), $effect(noncombat_templateObject15 || (noncombat_templateObject15 = noncombat_taggedTemplateLiteral(["Leash of Linguini"]))), $effect(noncombat_templateObject16 || (noncombat_templateObject16 = noncombat_taggedTemplateLiteral(["Empathy"]))), $effect(noncombat_templateObject17 || (noncombat_templateObject17 = noncombat_taggedTemplateLiteral(["Puzzle Champ"])))];
      usefulEffects.forEach(ef => tryAcquiringEffect(ef, true));
      (0,external_kolmafia_namespaceObject.cliExecute)("maximize -combat"); // To avoid maximizer bug, we invoke this once more
    },
    do: () => CommunityService.Noncombat.run(() => logTestSetup(CommunityServiceTests.COMTEST), 12),
    outfit: {
      familiar: template_string_$familiar(noncombat_templateObject18 || (noncombat_templateObject18 = noncombat_taggedTemplateLiteral(["Disgeist"]))),
      modifier: "-combat"
    },
    post: () => {
      uneffect($effect(noncombat_templateObject19 || (noncombat_templateObject19 = noncombat_taggedTemplateLiteral(["The Sonata of Sneakiness"]))));
    },
    limit: {
      tries: 1
    }
  }]
};
;// CONCATENATED MODULE: ./src/tasks/boozedrop.ts
var boozedrop_templateObject, boozedrop_templateObject2, boozedrop_templateObject3, boozedrop_templateObject4, boozedrop_templateObject5, boozedrop_templateObject6, boozedrop_templateObject7, boozedrop_templateObject8, boozedrop_templateObject9, boozedrop_templateObject10, boozedrop_templateObject11, boozedrop_templateObject12, boozedrop_templateObject13, boozedrop_templateObject14, boozedrop_templateObject15, boozedrop_templateObject16, boozedrop_templateObject17, boozedrop_templateObject18, boozedrop_templateObject19, boozedrop_templateObject20, boozedrop_templateObject21, boozedrop_templateObject22, boozedrop_templateObject23, boozedrop_templateObject24, boozedrop_templateObject25, boozedrop_templateObject26, boozedrop_templateObject27, boozedrop_templateObject28, boozedrop_templateObject29, boozedrop_templateObject30, boozedrop_templateObject31, boozedrop_templateObject32, boozedrop_templateObject33, boozedrop_templateObject34, boozedrop_templateObject35, boozedrop_templateObject36, boozedrop_templateObject37, boozedrop_templateObject38, boozedrop_templateObject39, boozedrop_templateObject40, boozedrop_templateObject41, boozedrop_templateObject42, boozedrop_templateObject43;

function boozedrop_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var BoozeDropQuest = {
  name: "Booze Drop",
  completed: () => CommunityService.BoozeDrop.isDone(),
  tasks: [{
    name: "Configure Trainset",
    completed: () => (0,external_kolmafia_namespaceObject.getWorkshed)() === template_string_$item(boozedrop_templateObject || (boozedrop_templateObject = boozedrop_taggedTemplateLiteral(["model train set"]))) && !canConfigure(),
    do: () => {
      var offset = property_get("trainsetPosition") % 8;
      var newStations = [];
      var stations = [Station.COAL_HOPPER, // double myst gain
      Station.TOWER_FROZEN, // hot resist (useful)
      Station.GAIN_MEAT, // meat
      Station.TOWER_FIZZY, // mp regen
      Station.BRAIN_SILO, // myst stats
      Station.VIEWING_PLATFORM, // all stats
      Station.WATER_BRIDGE, // +ML
      Station.CANDY_FACTORY // candies
      ];

      for (var i = 0; i < 8; i++) {
        var newPos = (i + offset) % 8;
        newStations[newPos] = stations[i];
      }

      setConfiguration(newStations);
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Get Cyclops Eyedrops",
    completed: () => have(template_string_$item(boozedrop_templateObject2 || (boozedrop_templateObject2 = boozedrop_taggedTemplateLiteral(["cyclops eyedrops"])))) || have($effect(boozedrop_templateObject3 || (boozedrop_templateObject3 = boozedrop_taggedTemplateLiteral(["One Very Clear Eye"])))),
    do: () => {
      if (!have($effect(boozedrop_templateObject4 || (boozedrop_templateObject4 = boozedrop_taggedTemplateLiteral(["Lucky!"]))))) (0,external_kolmafia_namespaceObject.use)(template_string_$item(boozedrop_templateObject5 || (boozedrop_templateObject5 = boozedrop_taggedTemplateLiteral(["11-leaf clover"]))));
      if (!have(template_string_$item(boozedrop_templateObject6 || (boozedrop_templateObject6 = boozedrop_taggedTemplateLiteral(["cyclops eyedrops"]))))) (0,external_kolmafia_namespaceObject.adv1)($location(boozedrop_templateObject7 || (boozedrop_templateObject7 = boozedrop_taggedTemplateLiteral(["The Limerick Dungeon"]))), -1);
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Reminisce Factory Worker (female)",
    prepare: () => {
      if (!have(template_string_$item(boozedrop_templateObject8 || (boozedrop_templateObject8 = boozedrop_taggedTemplateLiteral(["yellow rocket"]))))) (0,external_kolmafia_namespaceObject.buy)(template_string_$item(boozedrop_templateObject9 || (boozedrop_templateObject9 = boozedrop_taggedTemplateLiteral(["yellow rocket"]))), 1);
      if (have(template_string_$item(boozedrop_templateObject10 || (boozedrop_templateObject10 = boozedrop_taggedTemplateLiteral(["vampyric cloake"]))))) (0,external_kolmafia_namespaceObject.equip)($slot(boozedrop_templateObject11 || (boozedrop_templateObject11 = boozedrop_taggedTemplateLiteral(["back"]))), template_string_$item(boozedrop_templateObject12 || (boozedrop_templateObject12 = boozedrop_taggedTemplateLiteral(["vampyric cloake"]))));
    },
    completed: () => monstersReminisced().includes($monster(boozedrop_templateObject13 || (boozedrop_templateObject13 = boozedrop_taggedTemplateLiteral(["factory worker (female)"])))) || have($effect(boozedrop_templateObject14 || (boozedrop_templateObject14 = boozedrop_taggedTemplateLiteral(["Everything Looks Yellow"])))),
    do: () => reminisce($monster(boozedrop_templateObject15 || (boozedrop_templateObject15 = boozedrop_taggedTemplateLiteral(["factory worker (female)"])))),
    outfit: {
      familiar: template_string_$familiar(boozedrop_templateObject16 || (boozedrop_templateObject16 = boozedrop_taggedTemplateLiteral(["Cookbookbat"])))
    },
    combat: new CombatStrategy().macro(Macro.trySkill(template_string_$skill(boozedrop_templateObject17 || (boozedrop_templateObject17 = boozedrop_taggedTemplateLiteral(["Bowl Straight Up"])))).trySkill(template_string_$skill(boozedrop_templateObject18 || (boozedrop_templateObject18 = boozedrop_taggedTemplateLiteral(["Become a Bat"])))).tryItem(template_string_$item(boozedrop_templateObject19 || (boozedrop_templateObject19 = boozedrop_taggedTemplateLiteral(["yellow rocket"])))).abort()),
    limit: {
      tries: 1
    }
  }, {
    name: "Eat roasted vegetable of Jarlsberg",
    completed: () => have($effect(boozedrop_templateObject20 || (boozedrop_templateObject20 = boozedrop_taggedTemplateLiteral(["Wizard Sight"])))),
    do: () => {
      if (!have(template_string_$item(boozedrop_templateObject21 || (boozedrop_templateObject21 = boozedrop_taggedTemplateLiteral(["roasted vegetable of Jarlsberg"]))))) (0,external_kolmafia_namespaceObject.create)(template_string_$item(boozedrop_templateObject22 || (boozedrop_templateObject22 = boozedrop_taggedTemplateLiteral(["roasted vegetable of Jarlsberg"]))), 1);
      (0,external_kolmafia_namespaceObject.eat)(template_string_$item(boozedrop_templateObject23 || (boozedrop_templateObject23 = boozedrop_taggedTemplateLiteral(["roasted vegetable of Jarlsberg"]))), 1);
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Drink Sacramento Wine",
    completed: () => (0,external_kolmafia_namespaceObject.myInebriety)() >= (0,external_kolmafia_namespaceObject.inebrietyLimit)() - 2 || !have(template_string_$item(boozedrop_templateObject24 || (boozedrop_templateObject24 = boozedrop_taggedTemplateLiteral(["Sacramento wine"])))),
    do: () => {
      if ((0,external_kolmafia_namespaceObject.myInebriety)() < (0,external_kolmafia_namespaceObject.inebrietyLimit)()) {
        tryAcquiringEffect($effect(boozedrop_templateObject25 || (boozedrop_templateObject25 = boozedrop_taggedTemplateLiteral(["Ode to Booze"]))));
        (0,external_kolmafia_namespaceObject.drink)(template_string_$item(boozedrop_templateObject26 || (boozedrop_templateObject26 = boozedrop_taggedTemplateLiteral(["Sacramento wine"]))), 1);
        uneffect($effect(boozedrop_templateObject27 || (boozedrop_templateObject27 = boozedrop_taggedTemplateLiteral(["Ode to Booze"]))));
      }
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Deck Wheel of Fortune",
    ready: () => property_get("_deckCardsDrawn") <= 10,
    completed: () => property_get("_deckCardsDrawn") >= 15 || !have(template_string_$item(boozedrop_templateObject28 || (boozedrop_templateObject28 = boozedrop_taggedTemplateLiteral(["Deck of Every Card"])))),
    do: () => {
      (0,external_kolmafia_namespaceObject.cliExecute)("cheat fortune");
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Power Seed",
    completed: () => !have(template_string_$item(boozedrop_templateObject29 || (boozedrop_templateObject29 = boozedrop_taggedTemplateLiteral(["potted power plant"])))) || (0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(boozedrop_templateObject30 || (boozedrop_templateObject30 = boozedrop_taggedTemplateLiteral(["battery (AAA)"])))) < 5 && !have(template_string_$item(boozedrop_templateObject31 || (boozedrop_templateObject31 = boozedrop_taggedTemplateLiteral(["battery (lantern)"])))),
    do: () => {
      if ((0,external_kolmafia_namespaceObject.itemAmount)(template_string_$item(boozedrop_templateObject32 || (boozedrop_templateObject32 = boozedrop_taggedTemplateLiteral(["battery (AAA)"])))) >= 5) (0,external_kolmafia_namespaceObject.create)(template_string_$item(boozedrop_templateObject33 || (boozedrop_templateObject33 = boozedrop_taggedTemplateLiteral(["battery (lantern)"]))), 1);
      (0,external_kolmafia_namespaceObject.use)(template_string_$item(boozedrop_templateObject34 || (boozedrop_templateObject34 = boozedrop_taggedTemplateLiteral(["battery (lantern)"]))), 1);
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Test",
    after: ["Reminisce Factory Worker (female)"],
    prepare: () => {
      var usefulEffects = [$effect(boozedrop_templateObject35 || (boozedrop_templateObject35 = boozedrop_taggedTemplateLiteral(["Blessing of the Bird"]))), $effect(boozedrop_templateObject36 || (boozedrop_templateObject36 = boozedrop_taggedTemplateLiteral(["Fat Leon's Phat Loot Lyric"]))), // $effect`Feeling Lost`,
      $effect(boozedrop_templateObject37 || (boozedrop_templateObject37 = boozedrop_taggedTemplateLiteral(["items.enh"]))), $effect(boozedrop_templateObject38 || (boozedrop_templateObject38 = boozedrop_taggedTemplateLiteral(["One Very Clear Eye"]))), $effect(boozedrop_templateObject39 || (boozedrop_templateObject39 = boozedrop_taggedTemplateLiteral(["Nearly All-Natural"]))), $effect(boozedrop_templateObject40 || (boozedrop_templateObject40 = boozedrop_taggedTemplateLiteral(["The Spirit of Taking"]))), $effect(boozedrop_templateObject41 || (boozedrop_templateObject41 = boozedrop_taggedTemplateLiteral(["Singer's Faithful Ocelot"]))), $effect(boozedrop_templateObject42 || (boozedrop_templateObject42 = boozedrop_taggedTemplateLiteral(["Steely-Eyed Squint"]))), $effect(boozedrop_templateObject43 || (boozedrop_templateObject43 = boozedrop_taggedTemplateLiteral(["Uncucumbered"])))];
      usefulEffects.forEach(ef => tryAcquiringEffect(ef, true));
    },
    completed: () => CommunityService.BoozeDrop.isDone(),
    do: () => CommunityService.BoozeDrop.run(() => logTestSetup(CommunityServiceTests.ITEMTEST), 30),
    outfit: {
      modifier: "Item Drop, -equip broken champagne bottle, switch disembodied hand, -switch left-hand man"
    },
    limit: {
      tries: 1
    }
  }]
};
;// CONCATENATED MODULE: ./src/tasks/hotres.ts
var hotres_templateObject, hotres_templateObject2, hotres_templateObject3, hotres_templateObject4, hotres_templateObject5, hotres_templateObject6, hotres_templateObject7, hotres_templateObject8, hotres_templateObject9, hotres_templateObject10, hotres_templateObject11, hotres_templateObject12, hotres_templateObject13, hotres_templateObject14, hotres_templateObject15, hotres_templateObject16, hotres_templateObject17, hotres_templateObject18, hotres_templateObject19, hotres_templateObject20, hotres_templateObject21, hotres_templateObject22, hotres_templateObject23, hotres_templateObject24, hotres_templateObject25, hotres_templateObject26, hotres_templateObject27, hotres_templateObject28, hotres_templateObject29, hotres_templateObject30, hotres_templateObject31, hotres_templateObject32, hotres_templateObject33, hotres_templateObject34, hotres_templateObject35, hotres_templateObject36, hotres_templateObject37, hotres_templateObject38, hotres_templateObject39, hotres_templateObject40, hotres_templateObject41, hotres_templateObject42, hotres_templateObject43, hotres_templateObject44, hotres_templateObject45, hotres_templateObject46, hotres_templateObject47;

function hotres_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var HotResQuest = {
  name: "Hot Res",
  completed: () => CommunityService.HotRes.isDone(),
  tasks: [{
    name: "Fax Ungulith",
    prepare: () => {
      if (have(template_string_$item(hotres_templateObject || (hotres_templateObject = hotres_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))))) (0,external_kolmafia_namespaceObject.equip)($slot(hotres_templateObject2 || (hotres_templateObject2 = hotres_taggedTemplateLiteral(["weapon"]))), template_string_$item(hotres_templateObject3 || (hotres_templateObject3 = hotres_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))));
      if (have(template_string_$item(hotres_templateObject4 || (hotres_templateObject4 = hotres_taggedTemplateLiteral(["industrial fire extinguisher"]))))) (0,external_kolmafia_namespaceObject.equip)($slot(hotres_templateObject5 || (hotres_templateObject5 = hotres_taggedTemplateLiteral(["offhand"]))), template_string_$item(hotres_templateObject6 || (hotres_templateObject6 = hotres_taggedTemplateLiteral(["industrial fire extinguisher"]))));
      if (have(template_string_$item(hotres_templateObject7 || (hotres_templateObject7 = hotres_taggedTemplateLiteral(["vampyric cloake"]))))) (0,external_kolmafia_namespaceObject.equip)($slot(hotres_templateObject8 || (hotres_templateObject8 = hotres_taggedTemplateLiteral(["back"]))), template_string_$item(hotres_templateObject9 || (hotres_templateObject9 = hotres_taggedTemplateLiteral(["vampyric cloake"]))));
    },
    completed: () => property_get("_photocopyUsed"),
    do: () => {
      (0,external_kolmafia_namespaceObject.cliExecute)("chat");

      if ((have(template_string_$item(hotres_templateObject10 || (hotres_templateObject10 = hotres_taggedTemplateLiteral(["photocopied monster"])))) || (0,external_kolmafia_namespaceObject.faxbot)($monster(hotres_templateObject11 || (hotres_templateObject11 = hotres_taggedTemplateLiteral(["ungulith"]))))) && property_get("photocopyMonster") === $monster(hotres_templateObject12 || (hotres_templateObject12 = hotres_taggedTemplateLiteral(["ungulith"])))) {
        (0,external_kolmafia_namespaceObject.use)(template_string_$item(hotres_templateObject13 || (hotres_templateObject13 = hotres_taggedTemplateLiteral(["photocopied monster"]))));
      }
    },
    outfit: {
      modifier: "myst",
      familiar: template_string_$familiar(hotres_templateObject14 || (hotres_templateObject14 = hotres_taggedTemplateLiteral(["Cookbookbat"])))
    },
    limit: {
      tries: 1
    },
    choices: {
      1387: 3
    },
    combat: new CombatStrategy().macro(combat_Macro.externalIf(have(template_string_$item(hotres_templateObject15 || (hotres_templateObject15 = hotres_taggedTemplateLiteral(["vampyric cloake"])))), combat_Macro.trySkill(template_string_$skill(hotres_templateObject16 || (hotres_templateObject16 = hotres_taggedTemplateLiteral(["Become a Cloud of Mist"]))))).externalIf(have(template_string_$item(hotres_templateObject17 || (hotres_templateObject17 = hotres_taggedTemplateLiteral(["industrial fire extinguisher"])))), combat_Macro.trySkill(template_string_$skill(hotres_templateObject18 || (hotres_templateObject18 = hotres_taggedTemplateLiteral(["Fire Extinguisher: Polar Vortex"])))).externalIf(have(template_string_$item(hotres_templateObject19 || (hotres_templateObject19 = hotres_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))) && property_get("_saberForceUses") < 5, combat_Macro.trySkill(template_string_$skill(hotres_templateObject20 || (hotres_templateObject20 = hotres_taggedTemplateLiteral(["Fire Extinguisher: Foam Yourself"])))).trySkill(template_string_$skill(hotres_templateObject21 || (hotres_templateObject21 = hotres_taggedTemplateLiteral(["Use the Force"])))))).trySkill(template_string_$skill(hotres_templateObject22 || (hotres_templateObject22 = hotres_taggedTemplateLiteral(["Shocking Lick"])))).default())
  }, {
    name: "Drink Booze",
    completed: () => (0,external_kolmafia_namespaceObject.myInebriety)() >= (0,external_kolmafia_namespaceObject.inebrietyLimit)() - 2,
    do: () => {
      if ((0,external_kolmafia_namespaceObject.myInebriety)() < (0,external_kolmafia_namespaceObject.inebrietyLimit)()) {
        tryAcquiringEffect($effect(hotres_templateObject23 || (hotres_templateObject23 = hotres_taggedTemplateLiteral(["Ode to Booze"]))));
        if (have(template_string_$item(hotres_templateObject24 || (hotres_templateObject24 = hotres_taggedTemplateLiteral(["Yeast of Boris"])))) && have(template_string_$item(hotres_templateObject25 || (hotres_templateObject25 = hotres_taggedTemplateLiteral(["bowl of cottage cheese"]))))) (0,external_kolmafia_namespaceObject.create)(template_string_$item(hotres_templateObject26 || (hotres_templateObject26 = hotres_taggedTemplateLiteral(["Boris's beer"]))), 1);
        if (have(template_string_$item(hotres_templateObject27 || (hotres_templateObject27 = hotres_taggedTemplateLiteral(["Boris's beer"]))))) (0,external_kolmafia_namespaceObject.drink)(template_string_$item(hotres_templateObject28 || (hotres_templateObject28 = hotres_taggedTemplateLiteral(["Boris's beer"]))), 1);else if (have(template_string_$item(hotres_templateObject29 || (hotres_templateObject29 = hotres_taggedTemplateLiteral(["distilled fortified wine"]))))) (0,external_kolmafia_namespaceObject.drink)(template_string_$item(hotres_templateObject30 || (hotres_templateObject30 = hotres_taggedTemplateLiteral(["distilled fortified wine"]))), 1);
        uneffect($effect(hotres_templateObject31 || (hotres_templateObject31 = hotres_taggedTemplateLiteral(["Ode to Booze"]))));
      }
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Horsery",
    completed: () => property_get("_horsery") === "pale horse" || !property_get("horseryAvailable"),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("horsery pale"),
    limit: {
      tries: 1
    }
  }, {
    name: "Test",
    prepare: () => {
      (0,external_kolmafia_namespaceObject.cliExecute)("retrocape vampire hold");
      if (property_get("parkaMode") !== "pterodactyl") (0,external_kolmafia_namespaceObject.cliExecute)("parka pterodactyl");
      if (property_get("_kgbClicksUsed") < 22 && have(template_string_$item(hotres_templateObject32 || (hotres_templateObject32 = hotres_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("briefcase e hot");

      if (have(template_string_$skill(hotres_templateObject33 || (hotres_templateObject33 = hotres_taggedTemplateLiteral(["Summon Clip Art"])))) && !have(template_string_$item(hotres_templateObject34 || (hotres_templateObject34 = hotres_taggedTemplateLiteral(["cracker"]))))) {
        if (!have(template_string_$item(hotres_templateObject35 || (hotres_templateObject35 = hotres_taggedTemplateLiteral(["box of Familiar Jacks"]))))) (0,external_kolmafia_namespaceObject.create)(template_string_$item(hotres_templateObject36 || (hotres_templateObject36 = hotres_taggedTemplateLiteral(["box of Familiar Jacks"]))), 1);
        (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(hotres_templateObject37 || (hotres_templateObject37 = hotres_taggedTemplateLiteral(["Exotic Parrot"]))));
        (0,external_kolmafia_namespaceObject.use)(template_string_$item(hotres_templateObject38 || (hotres_templateObject38 = hotres_taggedTemplateLiteral(["box of Familiar Jacks"]))), 1);
      }

      var usefulEffects = [$effect(hotres_templateObject39 || (hotres_templateObject39 = hotres_taggedTemplateLiteral(["Astral Shell"]))), $effect(hotres_templateObject40 || (hotres_templateObject40 = hotres_taggedTemplateLiteral(["Elemental Saucesphere"]))), $effect(hotres_templateObject41 || (hotres_templateObject41 = hotres_taggedTemplateLiteral(["Feeling Peaceful"]))), $effect(hotres_templateObject42 || (hotres_templateObject42 = hotres_taggedTemplateLiteral(["Hot-Headed"]))), $effect(hotres_templateObject43 || (hotres_templateObject43 = hotres_taggedTemplateLiteral(["Rainbowolin"]))), // Famwt Buffs
      $effect(hotres_templateObject44 || (hotres_templateObject44 = hotres_taggedTemplateLiteral(["Blood Bond"]))), $effect(hotres_templateObject45 || (hotres_templateObject45 = hotres_taggedTemplateLiteral(["Empathy"]))), $effect(hotres_templateObject46 || (hotres_templateObject46 = hotres_taggedTemplateLiteral(["Leash of Linguini"])))];
      usefulEffects.forEach(ef => tryAcquiringEffect(ef, true));
      (0,external_kolmafia_namespaceObject.cliExecute)("maximize hot res");
    },
    completed: () => CommunityService.HotRes.isDone(),
    do: () => CommunityService.HotRes.run(() => logTestSetup(CommunityServiceTests.HOTTEST), 35),
    outfit: {
      modifier: "hot res",
      familiar: template_string_$familiar(hotres_templateObject47 || (hotres_templateObject47 = hotres_taggedTemplateLiteral(["Exotic Parrot"])))
    },
    limit: {
      tries: 1
    }
  }]
};
;// CONCATENATED MODULE: ./src/tasks/weapondamage.ts
var weapondamage_templateObject, weapondamage_templateObject2, weapondamage_templateObject3, weapondamage_templateObject4, weapondamage_templateObject5, weapondamage_templateObject6, weapondamage_templateObject7, weapondamage_templateObject8, weapondamage_templateObject9, weapondamage_templateObject10, weapondamage_templateObject11, weapondamage_templateObject12, weapondamage_templateObject13, weapondamage_templateObject14, weapondamage_templateObject15, weapondamage_templateObject16, weapondamage_templateObject17, weapondamage_templateObject18, weapondamage_templateObject19, weapondamage_templateObject20, weapondamage_templateObject21, weapondamage_templateObject22, weapondamage_templateObject23, weapondamage_templateObject24, weapondamage_templateObject25, weapondamage_templateObject26, weapondamage_templateObject27, weapondamage_templateObject28, weapondamage_templateObject29, weapondamage_templateObject30, weapondamage_templateObject31, weapondamage_templateObject32, weapondamage_templateObject33, weapondamage_templateObject34, weapondamage_templateObject35, weapondamage_templateObject36, weapondamage_templateObject37, weapondamage_templateObject38, weapondamage_templateObject39, weapondamage_templateObject40, weapondamage_templateObject41, weapondamage_templateObject42;

function weapondamage_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var WeaponDamageQuest = {
  name: "Weapon Damage",
  completed: () => CommunityService.WeaponDamage.isDone(),
  tasks: [{
    name: "Drink Sockdollager",
    completed: () => (0,external_kolmafia_namespaceObject.myInebriety)() >= (0,external_kolmafia_namespaceObject.inebrietyLimit)() - 1,
    do: () => {
      tryAcquiringEffect($effect(weapondamage_templateObject || (weapondamage_templateObject = weapondamage_taggedTemplateLiteral(["Ode to Booze"]))));
      (0,external_kolmafia_namespaceObject.visitUrl)("clan_viplounge.php?preaction=speakeasydrink&drink=6&pwd=".concat(+(0,external_kolmafia_namespaceObject.myHash)())); // Sockdollager
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Potion of Potency",
    completed: () => have(template_string_$item(weapondamage_templateObject2 || (weapondamage_templateObject2 = weapondamage_taggedTemplateLiteral(["potion of potency"])))) || have($effect(weapondamage_templateObject3 || (weapondamage_templateObject3 = weapondamage_taggedTemplateLiteral(["Pronounced Potency"])))) || !have(template_string_$item(weapondamage_templateObject4 || (weapondamage_templateObject4 = weapondamage_taggedTemplateLiteral(["scrumptious reagent"])))),
    do: () => (0,external_kolmafia_namespaceObject.create)(template_string_$item(weapondamage_templateObject5 || (weapondamage_templateObject5 = weapondamage_taggedTemplateLiteral(["potion of potency"]))), 1),
    limit: {
      tries: 1
    }
  }, {
    name: "Cargo Shorts",
    completed: () => property_get("_cargoPocketEmptied") || !have(template_string_$item(weapondamage_templateObject6 || (weapondamage_templateObject6 = weapondamage_taggedTemplateLiteral(["Cargo Cultist Shorts"])))),
    do: () => {
      (0,external_kolmafia_namespaceObject.visitUrl)("inventory.php?action=pocket");
      (0,external_kolmafia_namespaceObject.visitUrl)("choice.php?whichchoice=1420&option=1&pocket=284");
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Meteor Shower",
    completed: () => have($effect(weapondamage_templateObject7 || (weapondamage_templateObject7 = weapondamage_taggedTemplateLiteral(["Meteor Showered"])))) || !have(template_string_$item(weapondamage_templateObject8 || (weapondamage_templateObject8 = weapondamage_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))) || !have(template_string_$skill(weapondamage_templateObject9 || (weapondamage_templateObject9 = weapondamage_taggedTemplateLiteral(["Meteor Lore"])))) || property_get("_saberForceUses") >= 5,
    do: $location(weapondamage_templateObject10 || (weapondamage_templateObject10 = weapondamage_taggedTemplateLiteral(["The Dire Warren"]))),
    combat: new CombatStrategy().macro(Macro.trySkill(template_string_$skill(weapondamage_templateObject11 || (weapondamage_templateObject11 = weapondamage_taggedTemplateLiteral(["Meteor Shower"])))).trySkill(template_string_$skill(weapondamage_templateObject12 || (weapondamage_templateObject12 = weapondamage_taggedTemplateLiteral(["Use the Force"])))).abort()),
    outfit: {
      weapon: template_string_$item(weapondamage_templateObject13 || (weapondamage_templateObject13 = weapondamage_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
      familiar: template_string_$familiar(weapondamage_templateObject14 || (weapondamage_templateObject14 = weapondamage_taggedTemplateLiteral(["Cookbookbat"])))
    },
    choices: {
      1387: 3
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Test",
    prepare: () => {
      if (have(template_string_$item(weapondamage_templateObject15 || (weapondamage_templateObject15 = weapondamage_taggedTemplateLiteral(["SongBoom\u2122 BoomBox"]))))) setSong("These Fists Were Made for Punchin'");
      if (!have(template_string_$item(weapondamage_templateObject16 || (weapondamage_templateObject16 = weapondamage_taggedTemplateLiteral(["goofily-plumed helmet"]))))) (0,external_kolmafia_namespaceObject.buy)(template_string_$item(weapondamage_templateObject17 || (weapondamage_templateObject17 = weapondamage_taggedTemplateLiteral(["goofily-plumed helmet"]))), 1);
      if (have(template_string_$item(weapondamage_templateObject18 || (weapondamage_templateObject18 = weapondamage_taggedTemplateLiteral(["Ye Wizard's Shack snack voucher"]))))) (0,external_kolmafia_namespaceObject.retrieveItem)(template_string_$item(weapondamage_templateObject19 || (weapondamage_templateObject19 = weapondamage_taggedTemplateLiteral(["wasabi marble soda"]))));
      var usefulEffects = [$effect(weapondamage_templateObject20 || (weapondamage_templateObject20 = weapondamage_taggedTemplateLiteral(["Billiards Belligerence"]))), $effect(weapondamage_templateObject21 || (weapondamage_templateObject21 = weapondamage_taggedTemplateLiteral(["Bow-Legged Swagger"]))), $effect(weapondamage_templateObject22 || (weapondamage_templateObject22 = weapondamage_taggedTemplateLiteral(["Carol of the Bulls"]))), $effect(weapondamage_templateObject23 || (weapondamage_templateObject23 = weapondamage_taggedTemplateLiteral(["Cowrruption"]))), $effect(weapondamage_templateObject24 || (weapondamage_templateObject24 = weapondamage_taggedTemplateLiteral(["Disdain of the War Snapper"]))), $effect(weapondamage_templateObject25 || (weapondamage_templateObject25 = weapondamage_taggedTemplateLiteral(["Faboooo"]))), $effect(weapondamage_templateObject26 || (weapondamage_templateObject26 = weapondamage_taggedTemplateLiteral(["Feeling Punchy"]))), $effect(weapondamage_templateObject27 || (weapondamage_templateObject27 = weapondamage_taggedTemplateLiteral(["Frenzied, Bloody"]))), $effect(weapondamage_templateObject28 || (weapondamage_templateObject28 = weapondamage_taggedTemplateLiteral(["Imported Strength"]))), $effect(weapondamage_templateObject29 || (weapondamage_templateObject29 = weapondamage_taggedTemplateLiteral(["Jackasses' Symphony of Destruction"]))), $effect(weapondamage_templateObject30 || (weapondamage_templateObject30 = weapondamage_taggedTemplateLiteral(["Lack of Body-Building"]))), $effect(weapondamage_templateObject31 || (weapondamage_templateObject31 = weapondamage_taggedTemplateLiteral(["Pronounced Potency"]))), $effect(weapondamage_templateObject32 || (weapondamage_templateObject32 = weapondamage_taggedTemplateLiteral(["Rage of the Reindeer"]))), $effect(weapondamage_templateObject33 || (weapondamage_templateObject33 = weapondamage_taggedTemplateLiteral(["Rictus of Yeg"]))), $effect(weapondamage_templateObject34 || (weapondamage_templateObject34 = weapondamage_taggedTemplateLiteral(["Seeing Red"]))), $effect(weapondamage_templateObject35 || (weapondamage_templateObject35 = weapondamage_taggedTemplateLiteral(["Scowl of the Auk"]))), $effect(weapondamage_templateObject36 || (weapondamage_templateObject36 = weapondamage_taggedTemplateLiteral(["Song of the North"]))), $effect(weapondamage_templateObject37 || (weapondamage_templateObject37 = weapondamage_taggedTemplateLiteral(["Tenacity of the Snapper"]))), $effect(weapondamage_templateObject38 || (weapondamage_templateObject38 = weapondamage_taggedTemplateLiteral(["The Power of LOV"]))), $effect(weapondamage_templateObject39 || (weapondamage_templateObject39 = weapondamage_taggedTemplateLiteral(["Wasabi With You"]))), $effect(weapondamage_templateObject40 || (weapondamage_templateObject40 = weapondamage_taggedTemplateLiteral(["Weapon of Mass Destruction"])))];
      usefulEffects.forEach(ef => tryAcquiringEffect(ef, true));
      if (!have($effect(weapondamage_templateObject41 || (weapondamage_templateObject41 = weapondamage_taggedTemplateLiteral(["Outer Wolf\u2122"])))) && have(template_string_$item(weapondamage_templateObject42 || (weapondamage_templateObject42 = weapondamage_taggedTemplateLiteral(["genie bottle"]))))) (0,external_kolmafia_namespaceObject.cliExecute)("genie effect outer wolf");
    },
    completed: () => CommunityService.WeaponDamage.isDone(),
    do: () => CommunityService.WeaponDamage.run(() => logTestSetup(CommunityServiceTests.WPNTEST), 35),
    outfit: {
      modifier: "weapon dmg, switch disembodied hand, -switch left-hand man"
    },
    limit: {
      tries: 1
    }
  }]
};
;// CONCATENATED MODULE: ./src/tasks/donate.ts
var donate_templateObject, donate_templateObject2, donate_templateObject3;

function donate_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = donate_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function donate_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return donate_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return donate_arrayLikeToArray(o, minLen); }

function donate_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function donate_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






function logPrefUsage(tPref) {
  var pref = tPref.pref;
  var name = tPref.name;
  var n = tPref.maxUses;
  var localPrefValue = property_get("_instant".concat(pref), "").split(",").join(", ");
  var prefValue = property_get(pref);
  var prefValueLength = prefValue.toString() !== "" ? prefValue.toString().split(",").length : 0;
  if (typeof prefValue === "boolean" || prefValue === "true" || prefValue === "false") (0,external_kolmafia_namespaceObject.print)("".concat(name, ": ").concat(prefValue || prefValue === "true" ? n !== null && n !== void 0 ? n : 1 : 0, "/").concat(n !== null && n !== void 0 ? n : "?", " ").concat(localPrefValue));else if (typeof prefValue === "string" && (isNaN(parseInt(prefValue)) || prefValue.includes(",") || parseInt(prefValue) > (n !== null && n !== void 0 ? n : 1))) (0,external_kolmafia_namespaceObject.print)("".concat(name, ": ").concat(prefValueLength > (n !== null && n !== void 0 ? n : 1) ? n !== null && n !== void 0 ? n : 1 : prefValueLength, "/").concat(n !== null && n !== void 0 ? n : "?", " ").concat(localPrefValue));else (0,external_kolmafia_namespaceObject.print)("".concat(name, ": ").concat(prefValue, "/").concat(n !== null && n !== void 0 ? n : "?", " ").concat(localPrefValue));
}

function logResourceUsage() {
  // Track resources used
  // Banishes
  (0,external_kolmafia_namespaceObject.print)("");
  (0,external_kolmafia_namespaceObject.print)("Resource Tracking", "blue");
  [{
    header: "Banishes Used:",
    prefArr: freeBanishPrefs
  }, {
    header: "Free Kills Used:",
    prefArr: freeKillPrefs
  }, {
    header: "Notable Skills Used:",
    prefArr: notableSkillPrefs
  }, {
    header: "Free Fights Used:",
    prefArr: freeFightPrefs
  }, {
    header: "Potentially Free Fights Used:",
    prefArr: potentiallyFreeFightPrefs
  }, {
    header: "Farming Resources:",
    prefArr: farmingResourcePrefs
  }].map(_ref => {
    var header = _ref.header,
        prefArr = _ref.prefArr;
    (0,external_kolmafia_namespaceObject.print)(header);
    prefArr.map(logPrefUsage);
    (0,external_kolmafia_namespaceObject.print)("");
  }); // Organs Used

  (0,external_kolmafia_namespaceObject.print)("Organs Used:");
  (0,external_kolmafia_namespaceObject.print)("Stomach: ".concat((0,external_kolmafia_namespaceObject.myFullness)(), "/").concat((0,external_kolmafia_namespaceObject.fullnessLimit)()));
  (0,external_kolmafia_namespaceObject.print)("Liver: ".concat((0,external_kolmafia_namespaceObject.myInebriety)(), "/").concat((0,external_kolmafia_namespaceObject.inebrietyLimit)()));
  (0,external_kolmafia_namespaceObject.print)("Spleen: ".concat((0,external_kolmafia_namespaceObject.mySpleenUse)(), "/").concat((0,external_kolmafia_namespaceObject.spleenLimit)()));
  (0,external_kolmafia_namespaceObject.print)("Sweat Remaining: ".concat(property_get("sweat"), "/100, Sweat Out Some Booze: ").concat(property_get("_sweatOutSomeBoozeUsed"), "/3")); // Adventures Used

  (0,external_kolmafia_namespaceObject.print)("");
  (0,external_kolmafia_namespaceObject.print)("Test Summary:");
  var tests = Array(CommunityServiceTests.COILTEST, CommunityServiceTests.HOTTEST, CommunityServiceTests.HPTEST, CommunityServiceTests.MUSTEST, CommunityServiceTests.MYSTTEST, CommunityServiceTests.MOXTEST, CommunityServiceTests.COMTEST, CommunityServiceTests.WPNTEST, CommunityServiceTests.SPELLTEST, CommunityServiceTests.FAMTEST, CommunityServiceTests.ITEMTEST);
  tests.forEach(test => {
    var _testNames$get;

    return (0,external_kolmafia_namespaceObject.print)("".concat((_testNames$get = testNames.get(test)) !== null && _testNames$get !== void 0 ? _testNames$get : "Unknown Test", ": ").concat(property_get("_CSTest".concat(test), "?")));
  });
  (0,external_kolmafia_namespaceObject.print)("Leveling: ".concat((0,external_kolmafia_namespaceObject.turnsPlayed)() - sumNumbers(tests.map(test => property_get("_CSTest".concat(test), 0)))));
  (0,external_kolmafia_namespaceObject.print)("Adventures used: ".concat((0,external_kolmafia_namespaceObject.turnsPlayed)()));
  (0,external_kolmafia_namespaceObject.print)("");
}

var DonateQuest = {
  name: "Donate",
  tasks: [{
    name: "Test",
    completed: () => property_get("kingLiberated"),
    do: () => CommunityService.donate(),
    limit: {
      tries: 1
    }
  }, {
    name: "Empty Hagnks",
    completed: () => property_get("lastEmptiedStorage") === (0,external_kolmafia_namespaceObject.myAscensions)(),
    do: () => {
      logResourceUsage();
      (0,external_kolmafia_namespaceObject.print)("Emptying Hagnks!", "purple");
      (0,external_kolmafia_namespaceObject.print)("Please wait for up to 1 minute...", "blue");
      (0,external_kolmafia_namespaceObject.cliExecute)("hagnk all");
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Shrug Negative Effects",
    completed: () => !have($effect(donate_templateObject || (donate_templateObject = donate_taggedTemplateLiteral(["Feeling Lost"])))) && !have($effect(donate_templateObject2 || (donate_templateObject2 = donate_taggedTemplateLiteral(["Cowrruption"])))),
    do: () => {
      var _iterator = donate_createForOfIteratorHelper($effects(donate_templateObject3 || (donate_templateObject3 = donate_taggedTemplateLiteral(["Feeling Lost, Cowrruption, Cold Hearted"])))),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var ef = _step.value;
          if (have(ef)) uneffect(ef);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    limit: {
      tries: 1
    }
  }]
};
;// CONCATENATED MODULE: ./src/tasks/spelldamage.ts
var spelldamage_templateObject, spelldamage_templateObject2, spelldamage_templateObject3, spelldamage_templateObject4, spelldamage_templateObject5, spelldamage_templateObject6, spelldamage_templateObject7, spelldamage_templateObject8, spelldamage_templateObject9, spelldamage_templateObject10, spelldamage_templateObject11, spelldamage_templateObject12, spelldamage_templateObject13, spelldamage_templateObject14, spelldamage_templateObject15, spelldamage_templateObject16, spelldamage_templateObject17, spelldamage_templateObject18, spelldamage_templateObject19, spelldamage_templateObject20, spelldamage_templateObject21, spelldamage_templateObject22, spelldamage_templateObject23, spelldamage_templateObject24, spelldamage_templateObject25, spelldamage_templateObject26;

function spelldamage_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var SpellDamageQuest = {
  name: "Spell Damage",
  completed: () => CommunityService.SpellDamage.isDone(),
  tasks: [{
    name: "Simmer",
    completed: () => have($effect(spelldamage_templateObject || (spelldamage_templateObject = spelldamage_taggedTemplateLiteral(["Simmering"])))) || !have(template_string_$skill(spelldamage_templateObject2 || (spelldamage_templateObject2 = spelldamage_taggedTemplateLiteral(["Simmer"])))),
    do: () => (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(spelldamage_templateObject3 || (spelldamage_templateObject3 = spelldamage_taggedTemplateLiteral(["Simmer"])))),
    limit: {
      tries: 1
    }
  }, {
    name: "Meteor Shower",
    completed: () => have($effect(spelldamage_templateObject4 || (spelldamage_templateObject4 = spelldamage_taggedTemplateLiteral(["Meteor Showered"])))) || !have(template_string_$item(spelldamage_templateObject5 || (spelldamage_templateObject5 = spelldamage_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))) || !have(template_string_$skill(spelldamage_templateObject6 || (spelldamage_templateObject6 = spelldamage_taggedTemplateLiteral(["Meteor Lore"])))) || property_get("_saberForceUses") >= 5,
    do: $location(spelldamage_templateObject7 || (spelldamage_templateObject7 = spelldamage_taggedTemplateLiteral(["The Dire Warren"]))),
    combat: new CombatStrategy().macro(Macro.trySkill(template_string_$skill(spelldamage_templateObject8 || (spelldamage_templateObject8 = spelldamage_taggedTemplateLiteral(["Meteor Shower"])))).trySkill(template_string_$skill(spelldamage_templateObject9 || (spelldamage_templateObject9 = spelldamage_taggedTemplateLiteral(["Use the Force"])))).abort()),
    outfit: {
      weapon: template_string_$item(spelldamage_templateObject10 || (spelldamage_templateObject10 = spelldamage_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
      familiar: template_string_$familiar(spelldamage_templateObject11 || (spelldamage_templateObject11 = spelldamage_taggedTemplateLiteral(["Cookbookbat"])))
    },
    choices: {
      1387: 3
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Test",
    prepare: () => {
      if (!have(template_string_$item(spelldamage_templateObject12 || (spelldamage_templateObject12 = spelldamage_taggedTemplateLiteral(["obsidian nutcracker"]))))) (0,external_kolmafia_namespaceObject.buy)(template_string_$item(spelldamage_templateObject13 || (spelldamage_templateObject13 = spelldamage_taggedTemplateLiteral(["obsidian nutcracker"]))), 1);
      var usefulEffects = [$effect(spelldamage_templateObject14 || (spelldamage_templateObject14 = spelldamage_taggedTemplateLiteral(["AAA-Charged"]))), $effect(spelldamage_templateObject15 || (spelldamage_templateObject15 = spelldamage_taggedTemplateLiteral(["Arched Eyebrow of the Archmage"]))), $effect(spelldamage_templateObject16 || (spelldamage_templateObject16 = spelldamage_taggedTemplateLiteral(["Carol of the Hells"]))), $effect(spelldamage_templateObject17 || (spelldamage_templateObject17 = spelldamage_taggedTemplateLiteral(["Cowrruption"]))), $effect(spelldamage_templateObject18 || (spelldamage_templateObject18 = spelldamage_taggedTemplateLiteral(["Imported Strength"]))), $effect(spelldamage_templateObject19 || (spelldamage_templateObject19 = spelldamage_taggedTemplateLiteral(["Jackasses' Symphony of Destruction"]))), $effect(spelldamage_templateObject20 || (spelldamage_templateObject20 = spelldamage_taggedTemplateLiteral(["Mental A-cue-ity"]))), $effect(spelldamage_templateObject21 || (spelldamage_templateObject21 = spelldamage_taggedTemplateLiteral(["Pisces in the Skyces"]))), $effect(spelldamage_templateObject22 || (spelldamage_templateObject22 = spelldamage_taggedTemplateLiteral(["Song of Sauce"]))), $effect(spelldamage_templateObject23 || (spelldamage_templateObject23 = spelldamage_taggedTemplateLiteral(["Spirit of Peppermint"]))), $effect(spelldamage_templateObject24 || (spelldamage_templateObject24 = spelldamage_taggedTemplateLiteral(["The Magic of LOV"]))), $effect(spelldamage_templateObject25 || (spelldamage_templateObject25 = spelldamage_taggedTemplateLiteral(["Warlock, Warstock, and Warbarrel"]))), $effect(spelldamage_templateObject26 || (spelldamage_templateObject26 = spelldamage_taggedTemplateLiteral(["We're All Made of Starfish"])))];
      usefulEffects.forEach(ef => tryAcquiringEffect(ef, true));
    },
    completed: () => CommunityService.SpellDamage.isDone(),
    do: () => CommunityService.SpellDamage.run(() => logTestSetup(CommunityServiceTests.SPELLTEST), 51),
    outfit: {
      modifier: "spell dmg, switch disembodied hand, -switch left-hand man"
    },
    limit: {
      tries: 1
    }
  }]
};
;// CONCATENATED MODULE: ./src/sim.ts
var sim_templateObject, sim_templateObject2, sim_templateObject3, sim_templateObject4, sim_templateObject5, sim_templateObject6, sim_templateObject7, sim_templateObject8, sim_templateObject9, sim_templateObject10, sim_templateObject11, sim_templateObject12, sim_templateObject13, sim_templateObject14, sim_templateObject15, sim_templateObject16, sim_templateObject17, sim_templateObject18, sim_templateObject19, sim_templateObject20, sim_templateObject21, sim_templateObject22, sim_templateObject23, sim_templateObject24, sim_templateObject25, sim_templateObject26, sim_templateObject27, sim_templateObject28, sim_templateObject29, sim_templateObject30, sim_templateObject31, sim_templateObject32, sim_templateObject33, sim_templateObject34, sim_templateObject35, sim_templateObject36, sim_templateObject37, sim_templateObject38, sim_templateObject39, sim_templateObject40, sim_templateObject41, sim_templateObject42, sim_templateObject43, sim_templateObject44, sim_templateObject45, sim_templateObject46, sim_templateObject47, sim_templateObject48, sim_templateObject49, sim_templateObject50, sim_templateObject51, sim_templateObject52, sim_templateObject53, sim_templateObject54, sim_templateObject55, sim_templateObject56, sim_templateObject57, sim_templateObject58, sim_templateObject59, sim_templateObject60, sim_templateObject61, sim_templateObject62, sim_templateObject63, sim_templateObject64, sim_templateObject65, sim_templateObject66, sim_templateObject67, sim_templateObject68, sim_templateObject69, sim_templateObject70, sim_templateObject71, sim_templateObject72, sim_templateObject73, sim_templateObject74, sim_templateObject75, sim_templateObject76, sim_templateObject77, sim_templateObject78, sim_templateObject79, sim_templateObject80, sim_templateObject81, sim_templateObject82, sim_templateObject83, sim_templateObject84, sim_templateObject85, sim_templateObject86, sim_templateObject87;

function sim_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = sim_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function sim_slicedToArray(arr, i) { return sim_arrayWithHoles(arr) || sim_iterableToArrayLimit(arr, i) || sim_unsupportedIterableToArray(arr, i) || sim_nonIterableRest(); }

function sim_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function sim_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return sim_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return sim_arrayLikeToArray(o, minLen); }

function sim_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function sim_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function sim_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function sim_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function sim_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function sim_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Hardcoded = function Hardcoded(have, name) {
  sim_classCallCheck(this, Hardcoded);

  sim_defineProperty(this, "have", void 0);

  sim_defineProperty(this, "name", void 0);

  this.have = have;
  this.name = name;
};

/**
 * Return: a list of all things required to run the script.
 */
function buildIotmList() {
  return [{
    thing: template_string_$item(sim_templateObject || (sim_templateObject = sim_taggedTemplateLiteral(["Clan VIP Lounge key"]))),
    why: "Many test improvements"
  }, {
    thing: new Hardcoded(have(template_string_$item(sim_templateObject2 || (sim_templateObject2 = sim_taggedTemplateLiteral(["model train set"])))) || (0,external_kolmafia_namespaceObject.getWorkshed)() === template_string_$item(sim_templateObject3 || (sim_templateObject3 = sim_taggedTemplateLiteral(["model train set"]))), "Model train set"),
    why: "Leveling"
  }, {
    thing: new Hardcoded(have(template_string_$item(sim_templateObject4 || (sim_templateObject4 = sim_taggedTemplateLiteral(["cosmic bowling ball"])))) || property_get("cosmicBowlingBallReturnCombats", -1) >= 0, "Cosmic bowling ball"),
    why: "Leveling + banish"
  }, {
    thing: template_string_$familiar(sim_templateObject5 || (sim_templateObject5 = sim_taggedTemplateLiteral(["Cookbookbat"]))),
    why: "Turngen, stat tests"
  }, {
    thing: template_string_$item(sim_templateObject6 || (sim_templateObject6 = sim_taggedTemplateLiteral(["combat lover's locket"]))),
    why: "Summons for various tests"
  }, {
    thing: template_string_$item(sim_templateObject7 || (sim_templateObject7 = sim_taggedTemplateLiteral(["unbreakable umbrella"]))),
    why: "Various leveling and test improvements"
  }, {
    // eslint-disable-next-line libram/verify-constants
    thing: template_string_$item(sim_templateObject8 || (sim_templateObject8 = sim_taggedTemplateLiteral(["closed-circuit pay phone"]))),
    why: "Free fights, Non-combat, Item Drop"
  }, {
    thing: new Hardcoded(property_get("sleazeAirportAlways"), "airplane charter: Spring Break Beach"),
    why: "Scalers for leveling",
    optional: true
  }, {
    thing: new Hardcoded(property_get("spookyAirportAlways"), "airplane charter: Conspiracy Island"),
    why: "Scalers for leveling",
    optional: true
  }, {
    thing: new Hardcoded(property_get("stenchAirportAlways"), "airplane charter: Dinseylandfill"),
    why: "Scalers for leveling",
    optional: true
  }, {
    thing: new Hardcoded(property_get("hotAirportAlways"), "airplane charter: That 70s Volcano"),
    why: "Scalers for leveling",
    optional: true
  }, {
    thing: new Hardcoded(property_get("coldAirportAlways"), "airplane charter: The Glaciest"),
    why: "Scalers for leveling",
    optional: true
  }, {
    thing: new Hardcoded(property_get("neverendingPartyAlways"), "Neverending Party invitation envelope"),
    why: "Free fights, best scalers for leveling",
    optional: true
  }, {
    thing: template_string_$item(sim_templateObject9 || (sim_templateObject9 = sim_taggedTemplateLiteral(["backup camera"]))),
    why: "More fights from locket",
    optional: true
  }, {
    thing: template_string_$item(sim_templateObject10 || (sim_templateObject10 = sim_taggedTemplateLiteral(["January's Garbage Tote"]))),
    why: "XP for leveling",
    optional: true
  }];
}

function buildLocketList() {
  return [{
    thing: $monster(sim_templateObject11 || (sim_templateObject11 = sim_taggedTemplateLiteral(["red skeleton"]))),
    why: "Weapon Damage"
  }, {
    thing: $monster(sim_templateObject12 || (sim_templateObject12 = sim_taggedTemplateLiteral(["factory worker (female)"]))),
    why: "Hot Resistance"
  }, {
    thing: $monster(sim_templateObject13 || (sim_templateObject13 = sim_taggedTemplateLiteral(["ungulith"]))),
    why: "Weapon Damage + Spell Damage",
    optional: true
  }, {
    thing: $monster(sim_templateObject14 || (sim_templateObject14 = sim_taggedTemplateLiteral(["novelty tropical skeleton"]))),
    why: "Saucecrafting",
    optional: true
  }, {
    thing: $monster(sim_templateObject15 || (sim_templateObject15 = sim_taggedTemplateLiteral(["ice concierge"]))),
    why: "+XP% in exotic destinations",
    optional: true
  }, {
    thing: $monster(sim_templateObject16 || (sim_templateObject16 = sim_taggedTemplateLiteral(["Witchess Bishop"]))),
    why: "Item Drop",
    optional: true
  }, {
    thing: $monster(sim_templateObject17 || (sim_templateObject17 = sim_taggedTemplateLiteral(["Witchess King"]))),
    why: "Weapon Damage, Muscle %"
  }, {
    thing: $monster(sim_templateObject18 || (sim_templateObject18 = sim_taggedTemplateLiteral(["Witchess Queen"]))),
    why: "Moxie %, Non-combat",
    optional: true
  }, {
    thing: $monster(sim_templateObject19 || (sim_templateObject19 = sim_taggedTemplateLiteral(["Witchess Witch"]))),
    why: "Myst %, Spell Damage",
    optional: true
  }];
}

function buildMiscList() {
  return [{
    thing: template_string_$familiar(sim_templateObject20 || (sim_templateObject20 = sim_taggedTemplateLiteral(["Disgeist"]))),
    why: "Non-combat"
  }, {
    thing: template_string_$familiar(sim_templateObject21 || (sim_templateObject21 = sim_taggedTemplateLiteral(["Exotic Parrot"]))),
    why: "Hot test"
  }, {
    thing: template_string_$skill(sim_templateObject22 || (sim_templateObject22 = sim_taggedTemplateLiteral(["Inscrutable Gaze"]))),
    why: "Leveling"
  }, {
    thing: template_string_$skill(sim_templateObject23 || (sim_templateObject23 = sim_taggedTemplateLiteral(["Song of Bravado"]))),
    why: "Stat %"
  }, {
    thing: template_string_$skill(sim_templateObject24 || (sim_templateObject24 = sim_taggedTemplateLiteral(["Get Big"]))),
    why: "Stat %"
  }, {
    thing: template_string_$skill(sim_templateObject25 || (sim_templateObject25 = sim_taggedTemplateLiteral(["Stevedave's Shanty of Superiority"]))),
    why: "Stat %"
  }, {
    thing: template_string_$skill(sim_templateObject26 || (sim_templateObject26 = sim_taggedTemplateLiteral(["The Ode to Booze"]))),
    why: "Adventures"
  }, {
    thing: template_string_$skill(sim_templateObject27 || (sim_templateObject27 = sim_taggedTemplateLiteral(["Pizza Lover"]))),
    why: "Adventures + XP"
  }, {
    thing: template_string_$skill(sim_templateObject28 || (sim_templateObject28 = sim_taggedTemplateLiteral(["Empathy of the Newt"]))),
    why: "Familiar weight"
  }, {
    thing: template_string_$skill(sim_templateObject29 || (sim_templateObject29 = sim_taggedTemplateLiteral(["Leash of Linguini"]))),
    why: "Familiar weight"
  }, {
    thing: template_string_$skill(sim_templateObject30 || (sim_templateObject30 = sim_taggedTemplateLiteral(["Amphibian Sympathy"]))),
    why: "Familiar weight"
  }, {
    thing: template_string_$skill(sim_templateObject31 || (sim_templateObject31 = sim_taggedTemplateLiteral(["The Sonata of Sneakiness"]))),
    why: "Non-combat"
  }, {
    thing: template_string_$skill(sim_templateObject32 || (sim_templateObject32 = sim_taggedTemplateLiteral(["Smooth Movement"]))),
    why: "Non-combat"
  }, {
    thing: template_string_$skill(sim_templateObject33 || (sim_templateObject33 = sim_taggedTemplateLiteral(["Asbestos Heart"]))),
    why: "Hot Resistance"
  }, {
    thing: template_string_$skill(sim_templateObject34 || (sim_templateObject34 = sim_taggedTemplateLiteral(["Elemental Saucesphere"]))),
    why: "Hot Resistance"
  }, {
    thing: template_string_$skill(sim_templateObject35 || (sim_templateObject35 = sim_taggedTemplateLiteral(["Tolerance of the Kitchen"]))),
    why: "Hot Resistance"
  }, {
    thing: template_string_$skill(sim_templateObject36 || (sim_templateObject36 = sim_taggedTemplateLiteral(["Astral Shell"]))),
    why: "Hot Resistance"
  }, {
    thing: template_string_$skill(sim_templateObject37 || (sim_templateObject37 = sim_taggedTemplateLiteral(["Crimbo Training: Coal Taster"]))),
    why: "Hot Resistance"
  }, {
    thing: template_string_$skill(sim_templateObject38 || (sim_templateObject38 = sim_taggedTemplateLiteral(["Bow-Legged Swagger"]))),
    why: "Weapon Damage"
  }, {
    thing: template_string_$skill(sim_templateObject39 || (sim_templateObject39 = sim_taggedTemplateLiteral(["Steely-Eyed Squint"]))),
    why: "Item Drop"
  }, {
    thing: template_string_$skill(sim_templateObject40 || (sim_templateObject40 = sim_taggedTemplateLiteral(["Shattering Punch"]))),
    why: "Free kill"
  }, {
    thing: template_string_$skill(sim_templateObject41 || (sim_templateObject41 = sim_taggedTemplateLiteral(["Gingerbread Mob Hit"]))),
    why: "Free kill"
  }, {
    thing: template_string_$skill(sim_templateObject42 || (sim_templateObject42 = sim_taggedTemplateLiteral(["Snokebomb"]))),
    why: "Banish"
  }, {
    thing: template_string_$skill(sim_templateObject43 || (sim_templateObject43 = sim_taggedTemplateLiteral(["Curse of Weaksauce"]))),
    why: "Combat spell"
  }, {
    thing: template_string_$skill(sim_templateObject44 || (sim_templateObject44 = sim_taggedTemplateLiteral(["Saucegeyser"]))),
    why: "Combat spell"
  }, {
    thing: template_string_$skill(sim_templateObject45 || (sim_templateObject45 = sim_taggedTemplateLiteral(["Advanced Saucecrafting"]))),
    why: "Saucecrafting"
  }, {
    thing: template_string_$skill(sim_templateObject46 || (sim_templateObject46 = sim_taggedTemplateLiteral(["The Way of Sauce"]))),
    why: "Saucecrafting"
  }, {
    thing: template_string_$skill(sim_templateObject47 || (sim_templateObject47 = sim_taggedTemplateLiteral(["Impetuous Sauciness"]))),
    why: "Saucecrafting"
  }, {
    thing: template_string_$skill(sim_templateObject48 || (sim_templateObject48 = sim_taggedTemplateLiteral(["Expert Corner-Cutter"]))),
    why: "Saucecrafting"
  }, {
    thing: template_string_$skill(sim_templateObject49 || (sim_templateObject49 = sim_taggedTemplateLiteral(["Prevent Scurvy and Sobriety"]))),
    why: "Saucecrafting + turngen"
  }, {
    thing: template_string_$skill(sim_templateObject50 || (sim_templateObject50 = sim_taggedTemplateLiteral(["Perfect Freeze"]))),
    why: "Turngen"
  }, {
    thing: template_string_$skill(sim_templateObject51 || (sim_templateObject51 = sim_taggedTemplateLiteral(["Drinking to Drink"]))),
    why: "Turngen"
  }, {
    thing: template_string_$skill(sim_templateObject52 || (sim_templateObject52 = sim_taggedTemplateLiteral(["Cannelloni Cocoon"]))),
    why: "HP Regen"
  }, {
    thing: template_string_$skill(sim_templateObject53 || (sim_templateObject53 = sim_taggedTemplateLiteral(["Inner Sauce"]))),
    why: "MP Regen"
  }, {
    thing: template_string_$skill(sim_templateObject54 || (sim_templateObject54 = sim_taggedTemplateLiteral(["Double-Fisted Skull Smashing"]))),
    why: "Stat test"
  }, {
    thing: new Hardcoded( // These unknownRecipe properties are false when the user knows the recipe
    !property_get("unknownRecipe10972"), "Recipe of Yore: Roasted vegetable of Jarlsberg"),
    why: "Food we'll cook in-run"
  }, {
    thing: new Hardcoded(!property_get("unknownRecipe10974"), "Recipe of Yore: Pete's Pete's wily whey bar"),
    why: "Food we'll cook in-run"
  }, {
    thing: new Hardcoded(!property_get("unknownRecipe10975"), "Recipe of Yore: Pete's rich ricotta"),
    why: "Food we'll cook in-run"
  }, {
    thing: new Hardcoded(!property_get("unknownRecipe10976"), "Recipe of Before Yore: Boris's beer"),
    why: "Booze we'll brew in-run"
  }, {
    thing: new Hardcoded(!property_get("unknownRecipe10977"), "Recipe of Yore: honey bun of Boris"),
    why: "Food we'll cook in-run"
  }, {
    thing: new Hardcoded(!property_get("unknownRecipe10978"), "Recipe of Yore: Boris's bread"),
    why: "Food we'll cook in-run"
  }, {
    thing: new Hardcoded(!property_get("unknownRecipe10988"), "Recipe of Yore: baked veggie ricotta casserole"),
    why: "Food we'll cook in-run"
  }, {
    thing: new Hardcoded(!property_get("unknownRecipe10989"), "Recipe of Yore: plain calzone"),
    why: "Food we'll cook in-run"
  }, {
    thing: new Hardcoded(property_get("knownAscensions") >= 10, "Access to all-purpose flower in the Gift Shop"),
    why: "Muscle test"
  }, {
    thing: template_string_$skill(sim_templateObject55 || (sim_templateObject55 = sim_taggedTemplateLiteral(["Pride of the Puffin"]))),
    why: "Monster Level",
    optional: true
  }, {
    thing: template_string_$skill(sim_templateObject56 || (sim_templateObject56 = sim_taggedTemplateLiteral(["Drescher's Annoying Noise"]))),
    why: "Monster Level",
    optional: true
  }, {
    thing: template_string_$skill(sim_templateObject57 || (sim_templateObject57 = sim_taggedTemplateLiteral(["Ur-Kel's Aria of Annoyance"]))),
    why: "Monster Level",
    optional: true
  }, {
    thing: template_string_$skill(sim_templateObject58 || (sim_templateObject58 = sim_taggedTemplateLiteral(["Master Saucier"]))),
    why: "Spell Damage",
    optional: true
  }, {
    thing: template_string_$skill(sim_templateObject59 || (sim_templateObject59 = sim_taggedTemplateLiteral(["Subtle and Quick to Anger"]))),
    why: "Spell Damage",
    optional: true
  }, {
    thing: template_string_$skill(sim_templateObject60 || (sim_templateObject60 = sim_taggedTemplateLiteral(["Simmer"]))),
    why: "Spell Damage"
  }, {
    thing: template_string_$skill(sim_templateObject61 || (sim_templateObject61 = sim_taggedTemplateLiteral(["Always Never Not Guzzling"]))),
    why: "Item Drop"
  }, {
    thing: template_string_$skill(sim_templateObject62 || (sim_templateObject62 = sim_taggedTemplateLiteral(["Fat Leon's Phat Loot Lyric"]))),
    why: "Item Drop",
    optional: true
  }, {
    thing: template_string_$skill(sim_templateObject63 || (sim_templateObject63 = sim_taggedTemplateLiteral(["Mad Looting Skillz"]))),
    why: "Item Drop",
    optional: true
  }, {
    thing: template_string_$skill(sim_templateObject64 || (sim_templateObject64 = sim_taggedTemplateLiteral(["Object Quasi-Permanence"]))),
    why: "Item Drop",
    optional: true
  }, {
    thing: template_string_$skill(sim_templateObject65 || (sim_templateObject65 = sim_taggedTemplateLiteral(["Powers of Observatiogn"]))),
    why: "Item Drop",
    optional: true
  }, {
    thing: template_string_$skill(sim_templateObject66 || (sim_templateObject66 = sim_taggedTemplateLiteral(["Bind Spice Ghost"]))),
    why: "Item Drop",
    optional: true
  }, {
    thing: template_string_$skill(sim_templateObject67 || (sim_templateObject67 = sim_taggedTemplateLiteral(["Thief Among the Honorable"]))),
    why: "Item Drop",
    optional: true
  }, {
    thing: template_string_$skill(sim_templateObject68 || (sim_templateObject68 = sim_taggedTemplateLiteral(["Natural Born Scrabbler"]))),
    why: "Item Drop",
    optional: true
  }, {
    thing: template_string_$skill(sim_templateObject69 || (sim_templateObject69 = sim_taggedTemplateLiteral(["20/20 Vision"]))),
    why: "Item Drop",
    optional: true
  }, {
    thing: template_string_$skill(sim_templateObject70 || (sim_templateObject70 = sim_taggedTemplateLiteral(["Carol of the Bulls"]))),
    why: "Weapon Damage"
  }, {
    thing: template_string_$skill(sim_templateObject71 || (sim_templateObject71 = sim_taggedTemplateLiteral(["Carol of the Hells"]))),
    why: "Spell Damage"
  }, {
    thing: template_string_$skill(sim_templateObject72 || (sim_templateObject72 = sim_taggedTemplateLiteral(["Song of Sauce"]))),
    why: "Spell Damage"
  }, {
    thing: template_string_$skill(sim_templateObject73 || (sim_templateObject73 = sim_taggedTemplateLiteral(["Song of the North"]))),
    why: "Weapon Damage"
  }, {
    thing: template_string_$skill(sim_templateObject74 || (sim_templateObject74 = sim_taggedTemplateLiteral(["Jackasses' Symphony of Destruction"]))),
    why: "Weapon Damage",
    optional: true
  }, {
    thing: template_string_$skill(sim_templateObject75 || (sim_templateObject75 = sim_taggedTemplateLiteral(["Scowl of the Auk"]))),
    why: "Weapon Damage",
    optional: true
  }, {
    thing: template_string_$skill(sim_templateObject76 || (sim_templateObject76 = sim_taggedTemplateLiteral(["Rage of the Reindeer"]))),
    why: "Weapon Damage",
    optional: true
  }, {
    thing: template_string_$skill(sim_templateObject77 || (sim_templateObject77 = sim_taggedTemplateLiteral(["Tenacity of the Snapper"]))),
    why: "Weapon Damage",
    optional: true
  }, {
    thing: template_string_$skill(sim_templateObject78 || (sim_templateObject78 = sim_taggedTemplateLiteral(["Claws of the Walrus"]))),
    why: "Weapon Damage",
    optional: true
  }, {
    thing: template_string_$skill(sim_templateObject79 || (sim_templateObject79 = sim_taggedTemplateLiteral(["Blessing of the War Snapper"]))),
    why: "Weapon Damage",
    optional: true
  }, {
    thing: template_string_$skill(sim_templateObject80 || (sim_templateObject80 = sim_taggedTemplateLiteral(["Evoke Eldritch Horror"]))),
    why: "Free Fight",
    optional: true
  }, {
    thing: new Hardcoded(have(template_string_$item(sim_templateObject81 || (sim_templateObject81 = sim_taggedTemplateLiteral(["one-day ticket to Dinseylandfill"])))) || property_get("stenchAirportAlways"), "one-day ticket to Dinseylandfill"),
    why: "Scalers for leveling"
  }, {
    thing: template_string_$item(sim_templateObject82 || (sim_templateObject82 = sim_taggedTemplateLiteral(["Calzone of Legend"]))),
    why: "Turngen + Stat %"
  }, {
    thing: template_string_$item(sim_templateObject83 || (sim_templateObject83 = sim_taggedTemplateLiteral(["Deep Dish of Legend"]))),
    why: "Turngen + Stat %"
  }, {
    thing: template_string_$item(sim_templateObject84 || (sim_templateObject84 = sim_taggedTemplateLiteral(["Pizza of Legend"]))),
    why: "Turngen + Stat %"
  }, {
    thing: template_string_$item(sim_templateObject85 || (sim_templateObject85 = sim_taggedTemplateLiteral(["borrowed time"]))),
    why: "Turngen"
  }, {
    thing: template_string_$item(sim_templateObject86 || (sim_templateObject86 = sim_taggedTemplateLiteral(["non-Euclidean angle"]))),
    why: "XP %",
    optional: true
  }, {
    thing: template_string_$item(sim_templateObject87 || (sim_templateObject87 = sim_taggedTemplateLiteral(["abstraction: category"]))),
    why: "XP %",
    optional: true
  }];
}

function checkThing(thing) {
  if (thing instanceof Hardcoded) return [thing.have, thing.name];
  if (thing instanceof external_kolmafia_namespaceObject.Familiar) return [have(thing), thing.hatchling.name];
  if (thing instanceof external_kolmafia_namespaceObject.Skill) return [have(thing), thing.name];
  if (thing instanceof external_kolmafia_namespaceObject.Monster) return [new Set(unlockedLocketMonsters()).has(thing), thing.name];
  return [have(thing) || (0,external_kolmafia_namespaceObject.storageAmount)(thing) > 0, thing.name];
}

function check(req) {
  if (Array.isArray(req.thing)) {
    var checks = req.thing.map(checkThing);
    return [checks.find(res => res[0]) !== undefined, checks.map(res => res[1]).join(" OR "), req];
  } else {
    var res = checkThing(req.thing);
    return [res[0], res[1], req];
  }
}

function checkRequirements() {
  var missing_optional = 0;
  var missing = 0;
  var categories = [["IoTMs", buildIotmList().filter(req => !req.optional)], ["Miscellany", buildMiscList().filter(req => !req.optional)], ["IoTMs (Optional)", buildIotmList().filter(req => req.optional)], ["Combat Lover's Locket Monsters (Optional)", buildLocketList()], ["Miscellany (Optional)", buildMiscList().filter(req => req.optional)]];
  (0,external_kolmafia_namespaceObject.printHtml)("Checking your character... Legend: <font color='#888888'>✓ Have</font> / <font color='red'>X Missing & Required</font> / <font color='black'>X Missing & Optional");

  for (var _i = 0, _categories = categories; _i < _categories.length; _i++) {
    var _categories$_i = sim_slicedToArray(_categories[_i], 2),
        name = _categories$_i[0],
        requirements = _categories$_i[1];

    if (requirements.length === 0) continue;
    var requirements_info = requirements.map(check);
    (0,external_kolmafia_namespaceObject.print)(name, "blue");

    var _iterator = sim_createForOfIteratorHelper(requirements_info.sort((a, b) => a[1].localeCompare(b[1]))),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = sim_slicedToArray(_step.value, 3),
            have_it = _step$value[0],
            _name = _step$value[1],
            req = _step$value[2];

        var color = have_it ? "#888888" : req.optional ? "black" : "red";
        var symbol = have_it ? "✓" : "X";
        if (!have_it && req.optional) missing_optional++;
        if (!have_it && !req.optional) missing++;
        (0,external_kolmafia_namespaceObject.print)("".concat(symbol, " ").concat(_name, " - ").concat(req.why), color);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    (0,external_kolmafia_namespaceObject.print)("");
  } // Print the count of missing things


  if (missing > 0) {
    (0,external_kolmafia_namespaceObject.print)("You are missing ".concat(missing, " required things. This script will not yet work for you."), "red");
    if (missing_optional > 0) (0,external_kolmafia_namespaceObject.print)("You are also missing ".concat(missing_optional, " optional things."));
  } else {
    if (missing_optional > 0) {
      (0,external_kolmafia_namespaceObject.print)("You are missing ".concat(missing_optional, " optional things. This script should work, but it could do better."));
    } else {
      (0,external_kolmafia_namespaceObject.print)("You have everything! You are the shiniest star. This script should work great.");
    }
  }
}
;// CONCATENATED MODULE: ./src/main.ts

















var timeProperty = "fullday_elapsedTime";
var args = Args.create("InstantSCCS", "An automated low-shiny SCCS script.", {
  confirm: Args.boolean({
    help: "If the user must confirm execution of each task.",
    default: false
  }),
  sim: Args.flag({
    help: "Check if you have the requirements to run this script.",
    setting: ""
  })
});
function main_main(command) {
  Args.fill(args, command);

  if (args.help) {
    Args.showHelp(args);
    return;
  }

  if (args.sim) {
    checkRequirements();
    return;
  }

  if (runComplete()) {
    (0,external_kolmafia_namespaceObject.print)("Community Service complete!", "purple");
    return;
  }

  var setTimeNow = property_get(timeProperty, -1) === -1;
  if (setTimeNow) _set(timeProperty, (0,external_kolmafia_namespaceObject.gametimeToInt)());
  var tasks = getTasks([RunStartQuest, CoilWireQuest, LevelingQuest, MysticalityQuest, HPQuest, MoxieQuest, MuscleQuest, FamiliarWeightQuest, NoncombatQuest, BoozeDropQuest, HotResQuest, WeaponDamageQuest, SpellDamageQuest, DonateQuest]);
  var engine = new engine_Engine(tasks);
  (0,external_kolmafia_namespaceObject.setAutoAttack)(0);

  while (!runComplete()) {
    var task = engine.getNextTask();
    if (task === undefined) throw "Unable to find available task, but the run is not complete";

    if (args.confirm && !(0,external_kolmafia_namespaceObject.userConfirm)("Executing task ".concat(task.name, ", should we continue?"))) {
      throw "User rejected execution of task ".concat(task.name);
    }

    if (task.ready !== undefined && !task.ready()) throw "Task ".concat(task.name, " is not ready");
    engine.execute(task);
  }

  _set("InstantSCCSTurncount", (0,external_kolmafia_namespaceObject.myTurncount)());
  _set("InstantSCCSRunEnd", (0,external_kolmafia_namespaceObject.gametimeToInt)());
  _set("InstantSCCSDaycount", (0,external_kolmafia_namespaceObject.myDaycount)());
  _set("_InstantSCCSClanFortuneAttempts", property_get("_clanFortuneConsultUses", 0));
  (0,external_kolmafia_namespaceObject.print)("Community Service complete!", "purple");
  (0,external_kolmafia_namespaceObject.print)("Adventures used: ".concat((0,external_kolmafia_namespaceObject.turnsPlayed)()), "purple");
  (0,external_kolmafia_namespaceObject.print)("Adventures remaining: ".concat((0,external_kolmafia_namespaceObject.myAdventures)()), "purple");
  (0,external_kolmafia_namespaceObject.print)("Time: ".concat(convertMilliseconds((0,external_kolmafia_namespaceObject.gametimeToInt)() - property_get(timeProperty, (0,external_kolmafia_namespaceObject.gametimeToInt)())), " since first run today started"), "purple");
  _set(timeProperty, -1);
}

function runComplete() {
  return property_get("kingLiberated") && property_get("lastEmptiedStorage") === (0,external_kolmafia_namespaceObject.myAscensions)();
}
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;