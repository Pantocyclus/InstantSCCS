'use strict';

var kolmafia = require('kolmafia');

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

/**
 * Find the best element of an array, where "best" is defined by some given criteria.
 *
 * @param array The array to traverse and find the best element of.
 * @param optimizer Either a key on the objects we're looking at that corresponds to numerical values, or a function for mapping these objects to numbers. Essentially, some way of assigning value to the elements of the array.
 * @param reverse Make this true to find the worst element of the array, and false to find the best. Defaults to false.
 * @returns Best element by optimizer function
 */
function maxBy(array, optimizer) {
  var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!array.length) throw new Error("Cannot call maxBy on an empty array!");
  if (typeof optimizer === "function") {
    return _toConsumableArray(array).reduce((_ref6, other) => {
      var value = _ref6.value,
        item = _ref6.item;
      var otherValue = optimizer(other);
      return value >= otherValue !== reverse ? {
        value,
        item
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

var DART_PERKS = ["Bullseyes do not impress you much", "You are less impressed by bullseyes", "25% better chance to hit bullseyes", "25% More Accurate bullseye targeting", "25% Better bullseye targeting", "Butt awareness", "Extra stats from stats targets", "Expand your dart capacity by 1", "Throw a second dart quickly", "Increase Dart Deleveling from deleveling targets", "Deal 25-50% more damage", "Add Hot Damage", "Add Cold Damage", "Add Sleaze Damage", "Add Spooky Damage", "Add Stench Damage", "Deal 25-50% extra damage", "Deal 25-50% greater damage"];
function getBestDartsOption() {
  return Number(maxBy(Object.entries(kolmafia.availableChoiceOptions()), _ref => {
    var _ref2 = _slicedToArray(_ref, 1),
      text = _ref2[0];
    return DART_PERKS.includes(text) ? -DART_PERKS.indexOf(text) : -Infinity;
  }, true)[0]);
}
function getMobiusOption() {
  var desiredChoices = ["Go back and take a 20-year-long nap", "Go back and set an alarm"];
  return Number(maxBy(Object.entries(kolmafia.availableChoiceOptions()), _ref3 => {
    var _ref4 = _slicedToArray(_ref3, 1),
      text = _ref4[0];
    return desiredChoices.includes(text) ? -desiredChoices.indexOf(text) : -Infinity;
  }, true)[0]);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
var main = (choiceNumber, pageText) => {
  switch (choiceNumber) {
    case 1525:
      return void kolmafia.runChoice(getBestDartsOption());
    case 1562:
      return void kolmafia.runChoice(getMobiusOption());
  }
};

exports.getMobiusOption = getMobiusOption;
exports.main = main;
