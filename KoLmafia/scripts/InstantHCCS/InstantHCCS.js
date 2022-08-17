/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 1762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LE": () => (/* binding */ Macro),
/* harmony export */   "t$": () => (/* binding */ StrictMacro)
/* harmony export */ });
/* unused harmony exports getMacroId, InvalidMacroError, adventureMacro, adventureMacroAuto */
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7530);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3311);
/* harmony import */ var _property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2474);
/* harmony import */ var _template_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(678);
var _templateObject, _templateObject2;

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var MACRO_NAME = "Script Autoattack Macro";
/**
 * Get the KoL native ID of the macro with name name.
 *
 * @category Combat
 * @returns {number} The macro ID.
 */

function getMacroId() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MACRO_NAME;
  var macroMatches = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.xpath)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("account_combatmacros.php"), "//select[@name=\"macroid\"]/option[text()=\"".concat(name, "\"]/@value"));

  if (macroMatches.length === 0) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("account_combatmacros.php?action=new");
    var newMacroText = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("account_combatmacros.php?macroid=0&name=".concat(name, "&macrotext=abort&action=save"));
    return parseInt((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.xpath)(newMacroText, "//input[@name=macroid]/@value")[0], 10);
  } else {
    return parseInt(macroMatches[0], 10);
  }
}

function itemOrNameToItem(itemOrName) {
  return typeof itemOrName === "string" ? kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.get(itemOrName) : itemOrName;
}

var substringCombatItems = (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$items */ .vS)(_templateObject || (_templateObject = _taggedTemplateLiteral(["spider web, really sticky spider web, dictionary, NG, Cloaca-Cola, yo-yo, top, ball, kite, yo, red potion, blue potion, adder, red button, pile of sand, mushroom, deluxe mushroom"])));
var substringCombatSkills = (0,_template_string__WEBPACK_IMPORTED_MODULE_1__/* .$skills */ .nx)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Shoot, Thrust-Smack, Headbutt, Toss, Sing, Disarm, LIGHT, BURN, Extract, Meteor Shower, Cleave, Boil, Slice, Rainbow"])));

function itemOrItemsBallsMacroName(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroName).join(", ");
  } else {
    var item = itemOrNameToItem(itemOrItems);
    return !substringCombatItems.includes(item) ? item.name : (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(item).toString();
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
    return kolmafia__WEBPACK_IMPORTED_MODULE_0__.Skill.get(skillOrName);
  } else {
    return skillOrName;
  }
}

function skillBallsMacroName(skillOrName) {
  var skill = skillOrNameToSkill(skillOrName);
  return skill.name.match(/^[A-Za-z ]+$/) && !substringCombatSkills.includes(skill) ? skill.name : (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(skill);
}

var InvalidMacroError = /*#__PURE__*/function (_Error) {
  _inherits(InvalidMacroError, _Error);

  var _super = _createSuper(InvalidMacroError);

  function InvalidMacroError() {
    _classCallCheck(this, InvalidMacroError);

    return _super.apply(this, arguments);
  }

  return InvalidMacroError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * BALLS macro builder for direct submission to KoL.
 * Create a new macro with `new Macro()` and add steps using the instance methods.
 * Uses a fluent interface, so each step returns the object for easy chaining of steps.
 * Each method is also defined as a static method that creates a new Macro with only that step.
 * For example, you can do `Macro.skill('Saucestorm').attack()`.
 */

var Macro = /*#__PURE__*/function () {
  function Macro() {
    _classCallCheck(this, Macro);

    _defineProperty(this, "components", []);

    _defineProperty(this, "name", MACRO_NAME);
  }

  _createClass(Macro, [{
    key: "toString",
    value:
    /**
     * Convert macro to string.
     */
    function toString() {
      return this.components.join(";");
    }
    /**
     * Gives your macro a new name to be used when saving an autoattack.
     * @param name The name to be used when saving as an autoattack.
     * @returns The previous name assigned to this macro.
     */

  }, {
    key: "rename",
    value: function rename(name) {
      var returnValue = this.name;
      this.name = name;
      return returnValue;
    }
    /**
     * Save a macro to a Mafia property for use in a consult script.
     */

  }, {
    key: "save",
    value: function save() {
      (0,_property__WEBPACK_IMPORTED_MODULE_2__/* .set */ .t8)(Macro.SAVED_MACRO_PROPERTY, this.toString());
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
      var _ref;

      for (var _len = arguments.length, nextSteps = new Array(_len), _key = 0; _key < _len; _key++) {
        nextSteps[_key] = arguments[_key];
      }

      var nextStepsStrings = (_ref = []).concat.apply(_ref, _toConsumableArray(nextSteps.map(x => x instanceof Macro ? x.components : [x])));

      this.components = [].concat(_toConsumableArray(this.components), _toConsumableArray(nextStepsStrings.filter(s => s.length > 0)));
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
      return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("fight.php?action=macro&macrotext=".concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.urlEncode)(final)), true, true);
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

      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getAutoAttack)() === 99000000 + id && this.toString() === Macro.cachedAutoAttacks.get(this.name)) {
        // This macro is already set. Don"t make the server request.
        return;
      }

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&name=").concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.urlEncode)(this.name), "&macrotext=").concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.urlEncode)(this.toString()), "&action=save"), true, true);
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("account.php?am=1&action=autoattack&value=".concat(99000000 + id, "&ajax=1"));
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
      var ballsCondition = "";

      if (condition instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Monster) {
        ballsCondition = "monsterid ".concat(condition.id);
      } else if (condition instanceof Array) {
        ballsCondition = condition.map(mon => "monsterid ".concat(mon.id)).join(" || ");
        ballsCondition = "(".concat(ballsCondition, ")");
      } else if (condition instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Effect) {
        ballsCondition = "haseffect ".concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(condition));
      } else if (condition instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Skill) {
        ballsCondition = "hasskill ".concat(skillBallsMacroName(condition));
      } else if (condition instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item) {
        if (!condition.combat) {
          throw new InvalidMacroError("Item ".concat(condition, " cannot be made a valid BALLS predicate (it is not combat-usable)"));
        }

        ballsCondition = "hascombatitem ".concat(itemOrItemsBallsMacroName(condition));
      } else if (condition instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Location) {
        var snarfblat = condition.id;

        if (snarfblat < 1) {
          throw new InvalidMacroError("Location ".concat(condition, " cannot be made a valid BALLS predicate (it has no location id)"));
        }

        ballsCondition = "snarfblat ".concat(snarfblat);
      } else if (condition instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Class) {
        if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(condition) > 6) {
          throw new InvalidMacroError("Class ".concat(condition, " cannot be made a valid BALLS predicate (it is not a standard class)"));
        }

        ballsCondition = condition.toString().replaceAll(" ", "").toLowerCase();
      } else if (condition instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Stat) {
        ballsCondition = "".concat(condition.toString().toLowerCase(), "class");
      } else {
        ballsCondition = condition;
      }

      return this.step("if ".concat(ballsCondition)).step(ifTrue).step("endif");
    }
    /**
     * Create a new macro with an "if" statement.
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

      return this.step.apply(this, _toConsumableArray(skills.map(skill => {
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

      return this.step.apply(this, _toConsumableArray(skills.map(skill => {
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

      return this.step.apply(this, _toConsumableArray(skills.map(skill => {
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

      return this.step.apply(this, _toConsumableArray(items.map(itemOrItems => {
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

      return this.step.apply(this, _toConsumableArray(items.map(item => {
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
      var todaysWanderers = (0,_lib__WEBPACK_IMPORTED_MODULE_3__/* .getTodaysHolidayWanderers */ .UL)();
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
      var todaysWanderers = (0,_lib__WEBPACK_IMPORTED_MODULE_3__/* .getTodaysHolidayWanderers */ .UL)();
      if (todaysWanderers.length === 0) return this.step(macro);
      return this.if_(todaysWanderers.map(monster => "!monsterid ".concat(monster.id)).join(" && "), macro);
    }
    /**
     * Create a new macro starting with an ifNotHolidayWanderer step.
     * @param macro The macro to place inside the if_ statement
     */

  }], [{
    key: "load",
    value: function load() {
      var _this;

      return (_this = new this()).step.apply(_this, _toConsumableArray((0,_property__WEBPACK_IMPORTED_MODULE_2__/* .get */ .U2)(Macro.SAVED_MACRO_PROPERTY).split(";")));
    }
    /**
     * Clear the saved macro in the Mafia property.
     */

  }, {
    key: "clearSaved",
    value: function clearSaved() {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.removeProperty)(Macro.SAVED_MACRO_PROPERTY);
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
      var _iterator = _createForOfIteratorHelper(Macro.cachedAutoAttacks.keys()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _Macro$cachedMacroIds;

          var name = _step.value;
          var id = (_Macro$cachedMacroIds = Macro.cachedMacroIds.get(name)) !== null && _Macro$cachedMacroIds !== void 0 ? _Macro$cachedMacroIds : getMacroId(name);
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&action=edit&what=Delete&confirm=1"));
          Macro.cachedAutoAttacks.delete(name);
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
    key: "if_",
    value: function if_(condition, ifTrue) {
      return new this().if_(condition, ifTrue);
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

_defineProperty(Macro, "SAVED_MACRO_PROPERTY", "libram_savedMacro");

_defineProperty(Macro, "cachedMacroIds", new Map());

_defineProperty(Macro, "cachedAutoAttacks", new Map());

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
  _inherits(StrictMacro, _Macro);

  var _super2 = _createSuper(StrictMacro);

  function StrictMacro() {
    _classCallCheck(this, StrictMacro);

    return _super2.apply(this, arguments);
  }

  _createClass(StrictMacro, [{
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

      return (_get2 = _get(_getPrototypeOf(StrictMacro.prototype), "skill", this)).call.apply(_get2, [this].concat(skills));
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

      return (_get3 = _get(_getPrototypeOf(StrictMacro.prototype), "item", this)).call.apply(_get3, [this].concat(items));
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

      return (_get4 = _get(_getPrototypeOf(StrictMacro.prototype), "trySkill", this)).call.apply(_get4, [this].concat(skills));
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

      return (_get5 = _get(_getPrototypeOf(StrictMacro.prototype), "tryItem", this)).call.apply(_get5, [this].concat(items));
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

      return (_get6 = _get(_getPrototypeOf(StrictMacro.prototype), "trySkillRepeat", this)).call.apply(_get6, [this].concat(skills));
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

/***/ }),

/***/ 3311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ie": () => (/* binding */ Wanderer),
/* harmony export */   "Lo": () => (/* binding */ uneffect),
/* harmony export */   "UL": () => (/* binding */ getTodaysHolidayWanderers),
/* harmony export */   "_D": () => (/* binding */ getFoldGroup),
/* harmony export */   "aY": () => (/* binding */ haveWandererCounter),
/* harmony export */   "lf": () => (/* binding */ have),
/* harmony export */   "pq": () => (/* binding */ ensureEffect),
/* harmony export */   "rU": () => (/* binding */ isSong),
/* harmony export */   "ve": () => (/* binding */ getKramcoWandererChance)
/* harmony export */ });
/* unused harmony exports getSongLimit, getActiveEffects, getActiveSongs, getSongCount, canRememberSong, getMonsterLocations, getRemainingLiver, getRemainingStomach, getRemainingSpleen, haveInCampground, haveCounter, isVoteWandererNow, isWandererNow, getFamiliarWandererChance, getWandererChance, isCurrentFamiliar, getZapGroup, getBanishedMonsters, canUse, noneToNull, getAverage, getAverageAdventures, getPlayerFromIdOrName, questStep, EnsureError, getSaleValue, Environment, findLeprechaunMultiplier, findFairyMultiplier, holidayWanderers, canVisitUrl, damageTakenByElement, telescope */
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4875);
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_features_array_flat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2580);
/* harmony import */ var core_js_features_array_flat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_features_array_flat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7530);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2474);
/* harmony import */ var _template_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(678);
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  if (skillOrEffect instanceof kolmafia__WEBPACK_IMPORTED_MODULE_2__.Effect && skillOrEffect.attributes.includes("song")) {
    return true;
  } else {
    var skill = skillOrEffect instanceof kolmafia__WEBPACK_IMPORTED_MODULE_2__.Effect ? (0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.toSkill)(skillOrEffect) : skillOrEffect;
    return skill.class === (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$class */ ._$)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Accordion Thief"]))) && skill.buff;
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

  if (thing instanceof kolmafia__WEBPACK_IMPORTED_MODULE_2__.Effect) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.haveEffect)(thing) >= quantity;
  }

  if (thing instanceof kolmafia__WEBPACK_IMPORTED_MODULE_2__.Familiar) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.haveFamiliar)(thing);
  }

  if (thing instanceof kolmafia__WEBPACK_IMPORTED_MODULE_2__.Item) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.availableAmount)(thing) >= quantity;
  }

  if (thing instanceof kolmafia__WEBPACK_IMPORTED_MODULE_2__.Servant) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.haveServant)(thing);
  }

  if (thing instanceof kolmafia__WEBPACK_IMPORTED_MODULE_2__.Skill) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.haveSkill)(thing);
  }

  if (thing instanceof kolmafia__WEBPACK_IMPORTED_MODULE_2__.Thrall) {
    var thrall = (0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.myThrall)();
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
  return Object.keys(getCampground()).map(i => Item.get(i)).includes(item);
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
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.getCounters)(counterName, minTurns, maxTurns) === counterName;
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
  return totalTurnsPlayed() % 11 == 1;
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

  if (wanderer == Wanderer.Kramco) {
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
  var fights = (0,_property__WEBPACK_IMPORTED_MODULE_4__/* .get */ .U2)("_sausageFights");
  var lastFight = (0,_property__WEBPACK_IMPORTED_MODULE_4__/* .get */ .U2)("_lastSausageMonsterTurn");
  var totalTurns = (0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.totalTurnsPlayed)();

  if (fights < 1) {
    return lastFight === totalTurns && (0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.myTurncount)() < 1 ? 0.5 : 1.0;
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
  return Object.entries((0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.getRelated)(item, "fold")).sort((_ref, _ref2) => {
    var _ref3 = _slicedToArray(_ref, 2),
        a = _ref3[1];

    var _ref4 = _slicedToArray(_ref2, 2),
        b = _ref4[1];

    return a - b;
  }).map(_ref5 => {
    var _ref6 = _slicedToArray(_ref5, 1),
        i = _ref6[0];

    return kolmafia__WEBPACK_IMPORTED_MODULE_2__.Item.get(i);
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

  var _iterator = _createForOfIteratorHelper(banishes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          foe = _step$value[0],
          banisher = _step$value[1];

      if (foe === undefined || banisher === undefined) break; // toItem doesn"t error if the item doesn"t exist, so we have to use that.

      var banisherItem = toItem(banisher);

      if (banisher.toLowerCase() === "saber force") {
        result.set($skill(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Use the Force"]))), Monster.get(foe));
      } else if ([Item.get("none"), Item.get("training scroll:  Snokebomb"), Item.get("tomayohawk-style reflex hammer"), null].includes(banisherItem)) {
        if (Skill.get(banisher) === $skill(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["none"])))) {
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

  if (path !== "Nuclear Autumn") {
    if ($items(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Shrieking Weasel holo-record, Power-Guy 2000 holo-record, Lucky Strikes holo-record, EMD holo-record, Superdrifter holo-record, The Pigs holo-record, Drunk Uncles holo-record"]))).includes(item)) {
      return false;
    }
  }

  if (path === "G-Lover") {
    if (!item.name.toLowerCase().includes("g")) return false;
  }

  if (path === "Bees Hate You") {
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
    return thing === Effect.get("none") ? null : thing;
  }

  if (thing instanceof Familiar) {
    return thing === Familiar.get("none") ? null : thing;
  }

  if (thing instanceof Item) {
    return thing === Item.get("none") ? null : thing;
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
      _ref8 = _slicedToArray(_ref7, 3),
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
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.cliExecute)("uneffect ".concat(effect.name));
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

    _classCallCheck(this, EnsureError);

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

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.haveEffect)(ef) < turns) {
    if (ef.default === null) {
      throw new EnsureError(ef, "No default action");
    }

    if (!(0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.cliExecute)(ef.default) || (0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.haveEffect)(ef) === 0) {
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
    return numericModifier(familiar, "Leprechaun Effectiveness", 1, $item(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["none"]))));
  }

  if (familiar === $familiar(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Reanimated Reanimator"])))) return 0;
  var meatBonus = numericModifier(familiar, "Meat Drop", 1, $item(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["none"]))));
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
  if (familiar === $familiar(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Mutant Fire Ant"])))) {
    return numericModifier(familiar, "Fairy Effectiveness", 1, $item(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["none"]))));
  }

  if (familiar === $familiar(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["Reanimated Reanimator"])))) return 0;
  var itemBonus = numericModifier(familiar, "Item Drop", 1, $item(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["none"]))));
  if (itemBonus === 0) return 0;
  return Math.pow(Math.sqrt(itemBonus + 55 / 4 + 3) - Math.sqrt(55) / 2, 2);
}
var holidayWanderers = new Map([["El Dia De Los Muertos Borrachos", (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$monsters */ .fr)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Novia Cad\xE1ver, Novio Cad\xE1ver, Padre Cad\xE1ver, Persona Inocente Cad\xE1ver"])))], ["Feast of Boris", (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$monsters */ .fr)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Candied Yam Golem, Malevolent Tofurkey, Possessed Can of Cranberry Sauce, Stuffing Golem"])))], ["Talk Like a Pirate Day", (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$monsters */ .fr)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["ambulatory pirate, migratory pirate, peripatetic pirate"])))]]);
function getTodaysHolidayWanderers() {
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_2__.holiday)().split("/").map(holiday => {
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
var telescopeStats = new Map([["standing around flexing their muscles and using grip exercisers", (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$stat */ .Ri)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["Muscle"])))], ["sitting around playing chess and solving complicated-looking logic puzzles", (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$stat */ .Ri)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["Mysticality"])))], ["all wearing sunglasses and dancing", (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$stat */ .Ri)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["Moxie"])))]]);
var telescopeElements = new Map([["people, all of whom appear to be on fire", (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$element */ .SS)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["hot"])))], ["people, surrounded by a cloud of eldritch mist", (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$element */ .SS)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["spooky"])))], ["greasy-looking people furtively skulking around", (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$element */ .SS)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["sleaze"])))], ["people, surrounded by garbage and clouds of flies", (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$element */ .SS)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["stench"])))], ["people, clustered around a group of igloos", (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$element */ .SS)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap1 = new Map([["smoldering bushes on the outskirts of a hedge maze", (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$element */ .SS)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["hot"])))], ["creepy-looking black bushes on the outskirts of a hedge maze", (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$element */ .SS)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["spooky"])))], ["purplish, greasy-looking hedges", (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$element */ .SS)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["sleaze"])))], ["nasty-looking, dripping green bushes on the outskirts of a hedge maze", (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$element */ .SS)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["stench"])))], ["frost-rimed bushes on the outskirts of a hedge maze", (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$element */ .SS)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap2 = new Map([["smoke rising from deeper within the maze", (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$element */ .SS)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["hot"])))], ["a miasma of eldritch vapors rising from deeper within the maze", (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$element */ .SS)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["spooky"])))], ["a greasy purple cloud hanging over the center of the maze", (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$element */ .SS)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["sleaze"])))], ["a cloud of green gas hovering over the maze", (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$element */ .SS)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["stench"])))], ["wintry mists rising from deeper within the maze", (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$element */ .SS)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap3 = new Map([["with lava slowly oozing out of it", (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$element */ .SS)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["hot"])))], ["surrounded by creepy black mist", (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$element */ .SS)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["spooky"])))], ["that occasionally vomits out a greasy ball of hair", (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$element */ .SS)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["sleaze"])))], ["disgorging a really surprising amount of sewage", (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$element */ .SS)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["stench"])))], ["occasionally disgorging a bunch of ice cubes", (0,_template_string__WEBPACK_IMPORTED_MODULE_3__/* .$element */ .SS)(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["cold"])))]]);
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

/***/ }),

/***/ 2474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Jr": () => (/* binding */ PropertiesManager),
  "U2": () => (/* binding */ get),
  "t8": () => (/* binding */ _set)
});

// UNUSED EXPORTS: getBoolean, getBounty, getClass, getCoinmaster, getCommaSeparated, getEffect, getElement, getFamiliar, getItem, getLocation, getMonster, getNumber, getPhylum, getServant, getSkill, getSlot, getStat, getString, getThrall, setProperties, withChoice, withChoices, withProperties, withProperty

// EXTERNAL MODULE: ./node_modules/libram/node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__(4875);
// EXTERNAL MODULE: ./node_modules/libram/node_modules/core-js/modules/es.object.from-entries.js
var es_object_from_entries = __webpack_require__(8819);
// EXTERNAL MODULE: external "kolmafia"
var external_kolmafia_ = __webpack_require__(7530);
;// CONCATENATED MODULE: ./node_modules/libram/dist/propertyTypes.js
/** THIS FILE IS AUTOMATICALLY GENERATED. See tools/parseDefaultProperties.ts for more information */
var booleanProperties = ["addChatCommandLine", "addCreationQueue", "addStatusBarToFrames", "allowCloseableDesktopTabs", "allowNegativeTally", "allowNonMoodBurning", "allowSummonBurning", "autoHighlightOnFocus", "broadcastEvents", "cacheMallSearches", "chatBeep", "chatLinksUseRelay", "compactChessboard", "copyAsHTML", "customizedTabs", "debugBuy", "debugConsequences", "debugFoxtrotRemoval", "debugPathnames", "gapProtection", "gitInstallDependencies", "gitShowCommitMessages", "gitUpdateOnLogin", "greenScreenProtection", "guiUsesOneWindow", "hideServerDebugText", "logAcquiredItems", "logBattleAction", "logBrowserInteractions", "logChatMessages", "logChatRequests", "logCleanedHTML", "logDecoratedResponses", "logFamiliarActions", "logGainMessages", "logReadableHTML", "logPreferenceChange", "logMonsterHealth", "logReverseOrder", "logStatGains", "logStatusEffects", "logStatusOnLogin", "macroDebug", "macroLens", "mementoListActive", "mergeHobopolisChat", "printStackOnAbort", "protectAgainstOverdrink", "proxySet", "relayAddSounds", "relayAddsCustomCombat", "relayAddsDiscoHelper", "relayAddsGraphicalCLI", "relayAddsQuickScripts", "relayAddsRestoreLinks", "relayAddsUpArrowLinks", "relayAddsUseLinks", "relayAddsWikiLinks", "relayAllowRemoteAccess", "relayBrowserOnly", "relayFormatsChatText", "relayHidesJunkMallItems", "relayMaintainsEffects", "relayMaintainsHealth", "relayMaintainsMana", "relayOverridesImages", "relayRunsAfterAdventureScript", "relayRunsBeforeBattleScript", "relayRunsBeforePVPScript", "relayScriptButtonFirst", "relayTextualizesEffects", "relayTrimsZapList", "relayUsesInlineLinks", "relayUsesIntegratedChat", "relayWarnOnRecoverFailure", "removeMalignantEffects", "saveSettingsOnSet", "sharePriceData", "showAllRequests", "showExceptionalRequests", "stealthLogin", "svnInstallDependencies", "svnShowCommitMessages", "svnUpdateOnLogin", "switchEquipmentForBuffs", "syncAfterSvnUpdate", "useChatToolbar", "useContactsFrame", "useDevProxyServer", "useDockIconBadge", "useHugglerChannel", "useImageCache", "useLastUserAgent", "useSystemTrayIcon", "useTabbedChatFrame", "useToolbars", "useZoneComboBox", "verboseSpeakeasy", "verboseFloundry", "wrapLongLines", "_announcementShown", "_gitUpdated", "_svnRepoFileFetched", "_svnUpdated", "antagonisticSnowmanKitAvailable", "arcadeGameHints", "armoryUnlocked", "autoForbidIgnoringStores", "autoCraft", "autoQuest", "autoEntangle", "autoGarish", "autoManaRestore", "autoFillMayoMinder", "autoPinkyRing", "autoPlantHardcore", "autoPlantSoftcore", "autoPotionID", "autoRepairBoxServants", "autoSatisfyWithCloset", "autoSatisfyWithCoinmasters", "autoSatisfyWithMall", "autoSatisfyWithNPCs", "autoSatisfyWithStash", "autoSatisfyWithStorage", "autoSetConditions", "autoSphereID", "autoSteal", "autoTuxedo", "backupCameraReverserEnabled", "badMoonEncounter01", "badMoonEncounter02", "badMoonEncounter03", "badMoonEncounter04", "badMoonEncounter05", "badMoonEncounter06", "badMoonEncounter07", "badMoonEncounter08", "badMoonEncounter09", "badMoonEncounter10", "badMoonEncounter11", "badMoonEncounter12", "badMoonEncounter13", "badMoonEncounter14", "badMoonEncounter15", "badMoonEncounter16", "badMoonEncounter17", "badMoonEncounter18", "badMoonEncounter19", "badMoonEncounter20", "badMoonEncounter21", "badMoonEncounter22", "badMoonEncounter23", "badMoonEncounter24", "badMoonEncounter25", "badMoonEncounter26", "badMoonEncounter27", "badMoonEncounter28", "badMoonEncounter29", "badMoonEncounter30", "badMoonEncounter31", "badMoonEncounter32", "badMoonEncounter33", "badMoonEncounter34", "badMoonEncounter35", "badMoonEncounter36", "badMoonEncounter37", "badMoonEncounter38", "badMoonEncounter39", "badMoonEncounter40", "badMoonEncounter41", "badMoonEncounter42", "badMoonEncounter43", "badMoonEncounter44", "badMoonEncounter45", "badMoonEncounter46", "badMoonEncounter47", "badMoonEncounter48", "barrelShrineUnlocked", "bigBrotherRescued", "blackBartsBootyAvailable", "bondAdv", "bondBeach", "bondBeat", "bondBooze", "bondBridge", "bondDesert", "bondDR", "bondDrunk1", "bondDrunk2", "bondHoney", "bondHP", "bondInit", "bondItem1", "bondItem2", "bondItem3", "bondJetpack", "bondMartiniDelivery", "bondMartiniPlus", "bondMartiniTurn", "bondMeat", "bondMox1", "bondMox2", "bondMPregen", "bondMus1", "bondMus2", "bondMys1", "bondMys2", "bondSpleen", "bondStat", "bondStat2", "bondStealth", "bondStealth2", "bondSymbols", "bondWar", "bondWeapon2", "bondWpn", "booPeakLit", "bootsCharged", "breakfastCompleted", "burrowgrubHiveUsed", "canteenUnlocked", "chaosButterflyThrown", "chatbotScriptExecuted", "chateauAvailable", "chatLiterate", "chatServesUpdates", "checkJackassHardcore", "checkJackassSoftcore", "clanAttacksEnabled", "coldAirportAlways", "considerShadowNoodles", "controlRoomUnlock", "concertVisited", "controlPanel1", "controlPanel2", "controlPanel3", "controlPanel4", "controlPanel5", "controlPanel6", "controlPanel7", "controlPanel8", "controlPanel9", "corralUnlocked", "dailyDungeonDone", "dampOldBootPurchased", "daycareOpen", "demonSummoned", "dinseyAudienceEngagement", "dinseyGarbagePirate", "dinseyRapidPassEnabled", "dinseyRollercoasterNext", "dinseySafetyProtocolsLoose", "doghouseBoarded", "dontStopForCounters", "drippingHallUnlocked", "drippyShieldUnlocked", "edUsedLash", "eldritchFissureAvailable", "eldritchHorrorAvailable", "essenceOfAnnoyanceAvailable", "essenceOfBearAvailable", "expressCardUsed", "falloutShelterChronoUsed", "falloutShelterCoolingTankUsed", "fireExtinguisherBatHoleUsed", "fireExtinguisherChasmUsed", "fireExtinguisherCyrptUsed", "fireExtinguisherDesertUsed", "fireExtinguisherHaremUsed", "fistTeachingsHaikuDungeon", "fistTeachingsPokerRoom", "fistTeachingsBarroomBrawl", "fistTeachingsConservatory", "fistTeachingsBatHole", "fistTeachingsFunHouse", "fistTeachingsMenagerie", "fistTeachingsSlums", "fistTeachingsFratHouse", "fistTeachingsRoad", "fistTeachingsNinjaSnowmen", "flickeringPixel1", "flickeringPixel2", "flickeringPixel3", "flickeringPixel4", "flickeringPixel5", "flickeringPixel6", "flickeringPixel7", "flickeringPixel8", "frAlways", "frCemetaryUnlocked", "friarsBlessingReceived", "frMountainsUnlocked", "frSwampUnlocked", "frVillageUnlocked", "frWoodUnlocked", "getawayCampsiteUnlocked", "ghostPencil1", "ghostPencil2", "ghostPencil3", "ghostPencil4", "ghostPencil5", "ghostPencil6", "ghostPencil7", "ghostPencil8", "ghostPencil9", "gingerAdvanceClockUnlocked", "gingerBlackmailAccomplished", "gingerbreadCityAvailable", "gingerExtraAdventures", "gingerNegativesDropped", "gingerSewersUnlocked", "gingerSubwayLineUnlocked", "gingerRetailUnlocked", "glitchItemAvailable", "grabCloversHardcore", "grabCloversSoftcore", "guideToSafariAvailable", "guyMadeOfBeesDefeated", "hardcorePVPWarning", "harvestBatteriesHardcore", "harvestBatteriesSoftcore", "hasBartender", "hasChef", "hasCocktailKit", "hasCosmicBowlingBall", "hasDetectiveSchool", "hasMaydayContract", "hasOven", "hasRange", "hasShaker", "hasSushiMat", "haveBoxingDaydreamHardcore", "haveBoxingDaydreamSoftcore", "hermitHax0red", "holidayHalsBookAvailable", "horseryAvailable", "hotAirportAlways", "implementGlitchItem", "itemBoughtPerAscension637", "itemBoughtPerAscension8266", "itemBoughtPerAscension10790", "itemBoughtPerAscension10794", "itemBoughtPerAscension10795", "itemBoughtPerCharacter6423", "itemBoughtPerCharacter6428", "itemBoughtPerCharacter6429", "kingLiberated", "lastPirateInsult1", "lastPirateInsult2", "lastPirateInsult3", "lastPirateInsult4", "lastPirateInsult5", "lastPirateInsult6", "lastPirateInsult7", "lastPirateInsult8", "lawOfAveragesAvailable", "leafletCompleted", "libraryCardUsed", "lockPicked", "logBastilleBattalionBattles", "loginRecoveryHardcore", "loginRecoverySoftcore", "lovebugsUnlocked", "loveTunnelAvailable", "lowerChamberUnlock", "makePocketWishesHardcore", "makePocketWishesSoftcore", "manualOfNumberologyAvailable", "mappingMonsters", "mapToAnemoneMinePurchased", "mapToKokomoAvailable", "mapToMadnessReefPurchased", "mapToTheDiveBarPurchased", "mapToTheMarinaraTrenchPurchased", "mapToTheSkateParkPurchased", "maraisBeaverUnlock", "maraisCorpseUnlock", "maraisDarkUnlock", "maraisVillageUnlock", "maraisWildlifeUnlock", "maraisWizardUnlock", "maximizerAlwaysCurrent", "maximizerCreateOnHand", "maximizerCurrentMallPrices", "maximizerFoldables", "maximizerIncludeAll", "maximizerNoAdventures", "middleChamberUnlock", "milkOfMagnesiumActive", "moonTuned", "neverendingPartyAlways", "odeBuffbotCheck", "oilPeakLit", "oscusSodaUsed", "outrageousSombreroUsed", "pathedSummonsHardcore", "pathedSummonsSoftcore", "popularTartUnlocked", "prAlways", "prayedForGlamour", "prayedForProtection", "prayedForVigor", "primaryLabCheerCoreGrabbed", "pyramidBombUsed", "ROMOfOptimalityAvailable", "rageGlandVented", "readManualHardcore", "readManualSoftcore", "relayShowSpoilers", "relayShowWarnings", "rememberDesktopSize", "restUsingChateau", "restUsingCampAwayTent", "requireBoxServants", "requireSewerTestItems", "safePickpocket", "schoolOfHardKnocksDiplomaAvailable", "scriptCascadingMenus", "serverAddsCustomCombat", "SHAWARMAInitiativeUnlocked", "showForbiddenStores", "showGainsPerUnit", "showIgnoringStorePrices", "showNoSummonOnly", "showTurnFreeOnly", "sleazeAirportAlways", "snojoAvailable", "sortByRoom", "spacegateAlways", "spacegateVaccine1", "spacegateVaccine2", "spacegateVaccine3", "spaceInvaderDefeated", "spelunkyHints", "spiceMelangeUsed", "spookyAirportAlways", "stenchAirportAlways", "stopForFixedWanderer", "stopForUltraRare", "styxPixieVisited", "suppressInappropriateNags", "suppressPowerPixellation", "suppressMallPriceCacheMessages", "telegraphOfficeAvailable", "telescopeLookedHigh", "timeTowerAvailable", "trackLightsOut", "trackVoteMonster", "uneffectWithHotTub", "universalSeasoningActive", "universalSeasoningAvailable", "useCrimboToysHardcore", "useCrimboToysSoftcore", "verboseMaximizer", "visitLoungeHardcore", "visitLoungeSoftcore", "visitRumpusHardcore", "visitRumpusSoftcore", "voteAlways", "wildfireBarrelCaulked", "wildfireDusted", "wildfireFracked", "wildfirePumpGreased", "wildfireSprinkled", "yearbookCameraPending", "youRobotScavenged", "_affirmationCookieEaten", "_affirmationHateUsed", "_airFryerUsed", "_akgyxothUsed", "_alienAnimalMilkUsed", "_alienPlantPodUsed", "_allYearSucker", "_aprilShower", "_armyToddlerCast", "_authorsInkUsed", "_baconMachineUsed", "_bagOfCandy", "_bagOfCandyUsed", "_bagOTricksUsed", "_ballastTurtleUsed", "_ballInACupUsed", "_ballpit", "_barrelPrayer", "_bastilleLastBattleWon", "_beachCombing", "_bendHellUsed", "_blankoutUsed", "_bonersSummoned", "_borrowedTimeUsed", "_bowleggedSwaggerUsed", "_bowlFullOfJellyUsed", "_boxOfHammersUsed", "_brainPreservationFluidUsed", "_brassDreadFlaskUsed", "_cameraUsed", "_canSeekBirds", "_carboLoaded", "_cargoPocketEmptied", "_ceciHatUsed", "_chateauDeskHarvested", "_chateauMonsterFought", "_chronerCrossUsed", "_chronerTriggerUsed", "_chubbyAndPlumpUsed", "_circleDrumUsed", "_clanFortuneBuffUsed", "_claraBellUsed", "_coalPaperweightUsed", "_cocoaDispenserUsed", "_cocktailShakerUsed", "_coldAirportToday", "_coldOne", "_communismUsed", "_confusingLEDClockUsed", "_controlPanelUsed", "_corruptedStardustUsed", "_cosmicSixPackConjured", "_crappyCameraUsed", "_creepyVoodooDollUsed", "_crimboTree", "_cursedKegUsed", "_cursedMicrowaveUsed", "_dailyDungeonMalwareUsed", "_darkChocolateHeart", "_daycareFights", "_daycareNap", "_daycareSpa", "_daycareToday", "_defectiveTokenChecked", "_defectiveTokenUsed", "_dinseyGarbageDisposed", "_discoKnife", "_distentionPillUsed", "_dnaHybrid", "_docClocksThymeCocktailDrunk", "_drippingHallDoor1", "_drippingHallDoor2", "_drippingHallDoor3", "_drippingHallDoor4", "_drippyCaviarUsed", "_drippyNuggetUsed", "_drippyPilsnerUsed", "_drippyPlumUsed", "_drippyWineUsed", "_eldritchHorrorEvoked", "_eldritchTentacleFought", "_entauntaunedToday", "_envyfishEggUsed", "_essentialTofuUsed", "_etchedHourglassUsed", "_eternalCarBatteryUsed", "_everfullGlassUsed", "_eyeAndATwistUsed", "_fancyChessSetUsed", "_falloutShelterSpaUsed", "_fancyHotDogEaten", "_farmerItemsCollected", "_favoriteBirdVisited", "_firedJokestersGun", "_fireExtinguisherRefilled", "_fireStartingKitUsed", "_fireworksShop", "_fireworksShopHatBought", "_fireworksShopEquipmentBought", "_fireworkUsed", "_fishyPipeUsed", "_floundryItemCreated", "_floundryItemUsed", "_freePillKeeperUsed", "_frToday", "_fudgeSporkUsed", "_garbageItemChanged", "_gingerBiggerAlligators", "_gingerbreadCityToday", "_gingerbreadClockAdvanced", "_gingerbreadClockVisited", "_gingerbreadColumnDestroyed", "_gingerbreadMobHitUsed", "_glennGoldenDiceUsed", "_glitchItemImplemented", "_gnollEyeUsed", "_grimBuff", "_guildManualUsed", "_guzzlrQuestAbandoned", "_hardKnocksDiplomaUsed", "_hippyMeatCollected", "_hobbyHorseUsed", "_holidayFunUsed", "_holoWristCrystal", "_hotAirportToday", "_hungerSauceUsed", "_hyperinflatedSealLungUsed", "_iceHotelRoomsRaided", "_iceSculptureUsed", "_incredibleSelfEsteemCast", "_infernoDiscoVisited", "_internetDailyDungeonMalwareBought", "_internetGallonOfMilkBought", "_internetPlusOneBought", "_internetPrintScreenButtonBought", "_internetViralVideoBought", "_interviewIsabella", "_interviewMasquerade", "_interviewVlad", "_inquisitorsUnidentifiableObjectUsed", "_ironicMoustache", "_jackassPlumberGame", "_jarlsCheeseSummoned", "_jarlsCreamSummoned", "_jarlsDoughSummoned", "_jarlsEggsSummoned", "_jarlsFruitSummoned", "_jarlsMeatSummoned", "_jarlsPotatoSummoned", "_jarlsVeggiesSummoned", "_jingleBellUsed", "_jukebox", "_kgbFlywheelCharged", "_kgbLeftDrawerUsed", "_kgbOpened", "_kgbRightDrawerUsed", "_kolConSixPackUsed", "_kolhsCutButNotDried", "_kolhsIsskayLikeAnAshtray", "_kolhsPoeticallyLicenced", "_kolhsSchoolSpirited", "_kudzuSaladEaten", "_latteBanishUsed", "_latteCopyUsed", "_latteDrinkUsed", "_legendaryBeat", "_licenseToChillUsed", "_lookingGlass", "_loveTunnelUsed", "_luckyGoldRingVolcoino", "_lunchBreak", "_lupineHormonesUsed", "_lyleFavored", "_madLiquorDrunk", "_madTeaParty", "_mafiaMiddleFingerRingUsed", "_managerialManipulationUsed", "_mansquitoSerumUsed", "_maydayDropped", "_mayoDeviceRented", "_mayoTankSoaked", "_meatballMachineUsed", "_meatifyMatterUsed", "_milkOfMagnesiumUsed", "_mimeArmyShotglassUsed", "_missGravesVermouthDrunk", "_missileLauncherUsed", "_momFoodReceived", "_mrBurnsgerEaten", "_muffinOrderedToday", "_mushroomGardenVisited", "_neverendingPartyToday", "_newYouQuestCompleted", "_olympicSwimmingPool", "_olympicSwimmingPoolItemFound", "_overflowingGiftBasketUsed", "_partyHard", "_pastaAdditive", "_perfectFreezeUsed", "_perfectlyFairCoinUsed", "_petePartyThrown", "_peteRiotIncited", "_photocopyUsed", "_pickyTweezersUsed", "_pirateBellowUsed", "_pirateForkUsed", "_pixelOrbUsed", "_plumbersMushroomStewEaten", "_pneumaticityPotionUsed", "_potatoAlarmClockUsed", "_pottedTeaTreeUsed", "_prToday", "_psychoJarFilled", "_psychoJarUsed", "_psychokineticHugUsed", "_rainStickUsed", "_redwoodRainStickUsed", "_requestSandwichSucceeded", "_rhinestonesAcquired", "_seaJellyHarvested", "_setOfJacksUsed", "_sewingKitUsed", "_sexChanged", "_shrubDecorated", "_silverDreadFlaskUsed", "_skateBuff1", "_skateBuff2", "_skateBuff3", "_skateBuff4", "_skateBuff5", "_sleazeAirportToday", "_sobrieTeaUsed", "_softwareGlitchTurnReceived", "_spacegateMurderbot", "_spacegateRuins", "_spacegateSpant", "_spacegateToday", "_spacegateVaccine", "_spaghettiBreakfast", "_spaghettiBreakfastEaten", "_spinmasterLatheVisited", "_spinningWheel", "_spookyAirportToday", "_stabonicScrollUsed", "_steelyEyedSquintUsed", "_stenchAirportToday", "_stinkyCheeseBanisherUsed", "_streamsCrossed", "_stuffedPocketwatchUsed", "_styxSprayUsed", "_summonAnnoyanceUsed", "_summonCarrotUsed", "_summonResortPassUsed", "_sweetToothUsed", "_syntheticDogHairPillUsed", "_tacoFlierUsed", "_templeHiddenPower", "_tempuraAirUsed", "_thesisDelivered", "_timeSpinnerReplicatorUsed", "_toastSummoned", "_tonicDjinn", "_treasuryEliteMeatCollected", "_treasuryHaremMeatCollected", "_trivialAvocationsGame", "_tryptophanDartUsed", "_turtlePowerCast", "_twelveNightEnergyUsed", "_ultraMegaSourBallUsed", "_victorSpoilsUsed", "_villainLairCanLidUsed", "_villainLairColorChoiceUsed", "_villainLairDoorChoiceUsed", "_villainLairFirecrackerUsed", "_villainLairSymbologyChoiceUsed", "_villainLairWebUsed", "_vmaskBanisherUsed", "_voraciTeaUsed", "_volcanoItemRedeemed", "_volcanoSuperduperheatedMetal", "_voteToday", "_VYKEACafeteriaRaided", "_VYKEALoungeRaided", "_walfordQuestStartedToday", "_warbearBankUsed", "_warbearBreakfastMachineUsed", "_warbearGyrocopterUsed", "_warbearSodaMachineUsed", "_wildfireBarrelHarvested", "_witchessBuff", "_workshedItemUsed", "_zombieClover", "_preventScurvy", "lockedItem4637", "lockedItem4638", "lockedItem4639", "lockedItem4646", "lockedItem4647", "unknownRecipe3542", "unknownRecipe3543", "unknownRecipe3544", "unknownRecipe3545", "unknownRecipe3546", "unknownRecipe3547", "unknownRecipe3548", "unknownRecipe3749", "unknownRecipe3751", "unknownRecipe4172", "unknownRecipe4173", "unknownRecipe4174", "unknownRecipe5060", "unknownRecipe5061", "unknownRecipe5062", "unknownRecipe5063", "unknownRecipe5064", "unknownRecipe5066", "unknownRecipe5067", "unknownRecipe5069", "unknownRecipe5070", "unknownRecipe5072", "unknownRecipe5073", "unknownRecipe5670", "unknownRecipe5671", "unknownRecipe6501", "unknownRecipe6564", "unknownRecipe6565", "unknownRecipe6566", "unknownRecipe6567", "unknownRecipe6568", "unknownRecipe6569", "unknownRecipe6570", "unknownRecipe6571", "unknownRecipe6572", "unknownRecipe6573", "unknownRecipe6574", "unknownRecipe6575", "unknownRecipe6576", "unknownRecipe6577", "unknownRecipe6578", "unknownRecipe7752", "unknownRecipe7753", "unknownRecipe7754", "unknownRecipe7755", "unknownRecipe7756", "unknownRecipe7757", "unknownRecipe7758"];
var numericProperties = ["charsheetDropdown", "chatStyle", "coinMasterIndex", "dailyDeedsVersion", "defaultDropdown1", "defaultDropdown2", "defaultDropdownSplit", "defaultLimit", "fixedThreadPoolSize", "itemManagerIndex", "lastBuffRequestType", "lastGlobalCounterDay", "lastImageCacheClear", "lastRssUpdate", "previousUpdateRevision", "relayDelayForSVN", "relaySkillButtonCount", "scriptButtonPosition", "statusDropdown", "svnThreadPoolSize", "toolbarPosition", "_g9Effect", "addingScrolls", "affirmationCookiesEaten", "aminoAcidsUsed", "antagonisticSnowmanKitCost", "autoAbortThreshold", "autoAntidote", "autoBuyPriceLimit", "availableCandyCredits", "availableDimes", "availableFunPoints", "availableQuarters", "availableStoreCredits", "availableSwagger", "averageSwagger", "awolMedicine", "awolPointsBeanslinger", "awolPointsCowpuncher", "awolPointsSnakeoiler", "awolDeferredPointsBeanslinger", "awolDeferredPointsCowpuncher", "awolDeferredPointsSnakeoiler", "awolVenom", "bagOTricksCharges", "ballpitBonus", "bankedKarma", "barrelGoal", "bartenderTurnsUsed", "basementMallPrices", "basementSafetyMargin", "batmanFundsAvailable", "batmanBonusInitialFunds", "batmanTimeLeft", "bearSwagger", "beeCounter", "beGregariousCharges", "beGregariousFightsLeft", "birdformCold", "birdformHot", "birdformRoc", "birdformSleaze", "birdformSpooky", "birdformStench", "blackBartsBootyCost", "blackPuddingsDefeated", "blackForestProgress", "blankOutUsed", "bloodweiserDrunk", "bondPoints", "bondVillainsDefeated", "boneAbacusVictories", "booPeakProgress", "borisPoints", "breakableHandling", "breakableHandling1964", "breakableHandling9691", "breakableHandling9692", "breakableHandling9699", "breathitinCharges", "brodenBacteria", "brodenSprinkles", "buffBotMessageDisposal", "buffBotPhilanthropyType", "buffJimmyIngredients", "burnoutsDefeated", "burrowgrubSummonsRemaining", "camelSpit", "camerasUsed", "campAwayDecoration", "carboLoading", "catBurglarBankHeists", "cellarLayout", "charitableDonations", "chasmBridgeProgress", "chefTurnsUsed", "chessboardsCleared", "chilledToTheBone", "cinderellaMinutesToMidnight", "cinderellaScore", "cocktailSummons", "commerceGhostCombats", "controlPanelOmega", "cornucopiasOpened", "cosmicBowlingBallReturnCombats", "cozyCounter6332", "cozyCounter6333", "cozyCounter6334", "crimbo16BeardChakraCleanliness", "crimbo16BootsChakraCleanliness", "crimbo16BungChakraCleanliness", "crimbo16CrimboHatChakraCleanliness", "crimbo16GutsChakraCleanliness", "crimbo16HatChakraCleanliness", "crimbo16JellyChakraCleanliness", "crimbo16LiverChakraCleanliness", "crimbo16NippleChakraCleanliness", "crimbo16NoseChakraCleanliness", "crimbo16ReindeerChakraCleanliness", "crimbo16SackChakraCleanliness", "crimboTreeDays", "cubelingProgress", "currentExtremity", "currentHedgeMazeRoom", "currentMojoFilters", "currentNunneryMeat", "cursedMagnifyingGlassCount", "cyrptAlcoveEvilness", "cyrptCrannyEvilness", "cyrptNicheEvilness", "cyrptNookEvilness", "cyrptTotalEvilness", "darkGyfftePoints", "daycareEquipment", "daycareInstructors", "daycareLastScavenge", "daycareToddlers", "dbNemesisSkill1", "dbNemesisSkill2", "dbNemesisSkill3", "desertExploration", "desktopHeight", "desktopWidth", "dinseyFilthLevel", "dinseyFunProgress", "dinseyNastyBearsDefeated", "dinseySocialJusticeIProgress", "dinseySocialJusticeIIProgress", "dinseyTouristsFed", "dinseyToxicMultiplier", "doctorBagQuestLights", "doctorBagUpgrades", "dreadScroll1", "dreadScroll2", "dreadScroll3", "dreadScroll4", "dreadScroll5", "dreadScroll6", "dreadScroll7", "dreadScroll8", "dripAdventuresSinceAscension", "drippingHallAdventuresSinceAscension", "drippingTreesAdventuresSinceAscension", "drippyBatsUnlocked", "drippyJuice", "drippyOrbsClaimed", "drunkenSwagger", "edDefeatAbort", "edPoints", "eldritchTentaclesFought", "electricKoolAidEaten", "encountersUntilDMTChoice", "encountersUntilNEPChoice", "ensorceleeLevel", "entauntaunedColdRes", "essenceOfAnnoyanceCost", "essenceOfBearCost", "extraRolloverAdventures", "falloutShelterLevel", "fingernailsClipped", "fistSkillsKnown", "flyeredML", "fossilB", "fossilD", "fossilN", "fossilP", "fossilS", "fossilW", "fratboysDefeated", "frenchGuardTurtlesFreed", "garbageChampagneCharge", "garbageFireProgress", "garbageShirtCharge", "garbageTreeCharge", "garlandUpgrades", "gingerDigCount", "gingerLawChoice", "gingerMuscleChoice", "gingerTrainScheduleStudies", "gladiatorBallMovesKnown", "gladiatorBladeMovesKnown", "gladiatorNetMovesKnown", "glitchItemCost", "glitchItemImplementationCount", "glitchItemImplementationLevel", "glitchSwagger", "gloverPoints", "gnasirProgress", "goldenMrAccessories", "gongPath", "gooseDronesRemaining", "goreCollected", "gourdItemCount", "greyYouPoints", "grimoire1Summons", "grimoire2Summons", "grimoire3Summons", "grimstoneCharge", "guardTurtlesFreed", "guideToSafariCost", "guyMadeOfBeesCount", "guzzlrBronzeDeliveries", "guzzlrDeliveryProgress", "guzzlrGoldDeliveries", "guzzlrPlatinumDeliveries", "haciendaLayout", "heavyRainsStartingThunder", "heavyRainsStartingRain", "heavyRainsStartingLightning", "heroDonationBoris", "heroDonationJarlsberg", "heroDonationSneakyPete", "hiddenApartmentProgress", "hiddenBowlingAlleyProgress", "hiddenHospitalProgress", "hiddenOfficeProgress", "hiddenTavernUnlock", "highTopPumped", "hippiesDefeated", "holidayHalsBookCost", "holidaySwagger", "homemadeRobotUpgrades", "homebodylCharges", "hpAutoRecovery", "hpAutoRecoveryTarget", "iceSwagger", "item9084", "jarlsbergPoints", "jungCharge", "junglePuns", "knownAscensions", "kolhsTotalSchoolSpirited", "lastAnticheeseDay", "lastArcadeAscension", "lastBadMoonReset", "lastBangPotionReset", "lastBarrelSmashed", "lastBattlefieldReset", "lastBeardBuff", "lastBreakfast", "lastCastleGroundUnlock", "lastCastleTopUnlock", "lastCellarReset", "lastChanceThreshold", "lastChasmReset", "lastColosseumRoundWon", "lastCouncilVisit", "lastCounterDay", "lastDesertUnlock", "lastDispensaryOpen", "lastDMTDuplication", "lastDwarfFactoryReset", "lastEVHelmetValue", "lastEVHelmetReset", "lastEasterEggBalloon", "lastEmptiedStorage", "lastFilthClearance", "lastGoofballBuy", "lastGuildStoreOpen", "lastGuyMadeOfBeesReset", "lastFratboyCall", "lastFriarCeremonyAscension", "lastHippyCall", "lastIslandUnlock", "lastKeyotronUse", "lastKingLiberation", "lastLightsOutTurn", "lastMushroomPlot", "lastMiningReset", "lastNemesisReset", "lastPaperStripReset", "lastPirateEphemeraReset", "lastPirateInsultReset", "lastPlusSignUnlock", "lastQuartetAscension", "lastQuartetRequest", "lastSecondFloorUnlock", "lastSkateParkReset", "lastStillBeatingSpleen", "lastTavernAscension", "lastTavernSquare", "lastTelescopeReset", "lastTempleAdventures", "lastTempleButtonsUnlock", "lastTempleUnlock", "lastThingWithNoNameDefeated", "lastTr4pz0rQuest", "lastVioletFogMap", "lastVoteMonsterTurn", "lastWartDinseyDefeated", "lastWuTangDefeated", "lastYearbookCameraAscension", "lastZapperWand", "lastZapperWandExplosionDay", "lawOfAveragesCost", "libramSummons", "lightsOutAutomation", "louvreDesiredGoal", "louvreGoal", "lovebugsAridDesert", "lovebugsBeachBuck", "lovebugsBooze", "lovebugsChroner", "lovebugsCoinspiracy", "lovebugsCyrpt", "lovebugsFreddy", "lovebugsFunFunds", "lovebugsHoboNickel", "lovebugsItemDrop", "lovebugsMeat", "lovebugsMeatDrop", "lovebugsMoxie", "lovebugsMuscle", "lovebugsMysticality", "lovebugsOilPeak", "lovebugsOrcChasm", "lovebugsPowder", "lovebugsWalmart", "lttQuestDifficulty", "lttQuestStageCount", "manaBurnSummonThreshold", "manaBurningThreshold", "manaBurningTrigger", "manorDrawerCount", "manualOfNumberologyCost", "mapToKokomoCost", "masksUnlocked", "maximizerMRUSize", "maximizerCombinationLimit", "maximizerEquipmentLevel", "maximizerEquipmentScope", "maximizerMaxPrice", "maximizerPriceLevel", "maxManaBurn", "mayflyExperience", "mayoLevel", "meansuckerPrice", "merkinVocabularyMastery", "miniAdvClass", "miniMartinisDrunk", "moleTunnelLevel", "mothershipProgress", "mpAutoRecovery", "mpAutoRecoveryTarget", "munchiesPillsUsed", "mushroomGardenCropLevel", "nextParanormalActivity", "nextQuantumFamiliarOwnerId", "nextQuantumFamiliarTurn", "noobPoints", "noobDeferredPoints", "noodleSummons", "nsContestants1", "nsContestants2", "nsContestants3", "numericSwagger", "nunsVisits", "oilPeakProgress", "optimalSwagger", "optimisticCandleProgress", "palindomeDudesDefeated", "parasolUsed", "pendingMapReflections", "pirateSwagger", "plantingDay", "plumberBadgeCost", "plumberCostumeCost", "plumberPoints", "poolSharkCount", "poolSkill", "primaryLabGooIntensity", "prismaticSummons", "procrastinatorLanguageFluency", "promptAboutCrafting", "puzzleChampBonus", "pyramidPosition", "rockinRobinProgress", "ROMOfOptimalityCost", "quantumPoints", "reagentSummons", "reanimatorArms", "reanimatorLegs", "reanimatorSkulls", "reanimatorWeirdParts", "reanimatorWings", "recentLocations", "redSnapperProgress", "relocatePygmyJanitor", "relocatePygmyLawyer", "rumpelstiltskinTurnsUsed", "rumpelstiltskinKidsRescued", "safariSwagger", "sausageGrinderUnits", "schoolOfHardKnocksDiplomaCost", "schoolSwagger", "scrapbookCharges", "scriptMRULength", "seaodesFound", "SeasoningSwagger", "sexChanges", "shenInitiationDay", "shockingLickCharges", "singleFamiliarRun", "skillBurn3", "skillBurn90", "skillBurn153", "skillBurn154", "skillBurn155", "skillBurn1019", "skillBurn5017", "skillBurn6014", "skillBurn6015", "skillBurn6016", "skillBurn6020", "skillBurn6021", "skillBurn6022", "skillBurn6023", "skillBurn6024", "skillBurn6026", "skillBurn6028", "skillBurn7323", "skillBurn14008", "skillBurn14028", "skillBurn14038", "skillBurn15011", "skillBurn15028", "skillBurn17005", "skillBurn22034", "skillBurn22035", "skillBurn23301", "skillBurn23302", "skillBurn23303", "skillBurn23304", "skillBurn23305", "skillBurn23306", "skillLevel46", "skillLevel47", "skillLevel48", "skillLevel117", "skillLevel118", "skillLevel121", "skillLevel128", "skillLevel134", "skillLevel144", "skillLevel180", "skillLevel188", "skillLevel7254", "slimelingFullness", "slimelingStacksDropped", "slimelingStacksDue", "smoresEaten", "smutOrcNoncombatProgress", "sneakyPetePoints", "snojoMoxieWins", "snojoMuscleWins", "snojoMysticalityWins", "sourceAgentsDefeated", "sourceEnlightenment", "sourceInterval", "sourcePoints", "sourceTerminalGram", "sourceTerminalPram", "sourceTerminalSpam", "spaceBabyLanguageFluency", "spacePirateLanguageFluency", "spelunkyNextNoncombat", "spelunkySacrifices", "spelunkyWinCount", "spookyPuttyCopiesMade", "statbotUses", "sugarCounter4178", "sugarCounter4179", "sugarCounter4180", "sugarCounter4181", "sugarCounter4182", "sugarCounter4183", "sugarCounter4191", "summonAnnoyanceCost", "sweat", "tacoDanCocktailSauce", "tacoDanFishMeat", "tavernLayout", "telescopeUpgrades", "tempuraSummons", "timeSpinnerMedals", "timesRested", "tomeSummons", "totalCharitableDonations", "turtleBlessingTurns", "twinPeakProgress", "unicornHornInflation", "universalSeasoningCost", "usable1HWeapons", "usable1xAccs", "usable2HWeapons", "usable3HWeapons", "usableAccessories", "usableHats", "usableOffhands", "usableOther", "usablePants", "usableShirts", "valueOfAdventure", "valueOfInventory", "valueOfStill", "valueOfTome", "vintnerCharge", "vintnerWineLevel", "violetFogGoal", "walfordBucketProgress", "warehouseProgress", "welcomeBackAdv", "writingDesksDefeated", "xoSkeleltonXProgress", "xoSkeleltonOProgress", "yearbookCameraAscensions", "yearbookCameraUpgrades", "youRobotBody", "youRobotBottom", "youRobotLeft", "youRobotPoints", "youRobotRight", "youRobotTop", "zeppelinProtestors", "zigguratLianas", "zombiePoints", "_absintheDrops", "_abstractionDropsCrown", "_aguaDrops", "_xenomorphCharge", "_ancestralRecallCasts", "_antihangoverBonus", "_astralDrops", "_backUpUses", "_badlyRomanticArrows", "_badgerCharge", "_balefulHowlUses", "_banderRunaways", "_bastilleCheese", "_bastilleGames", "_bastilleGameTurn", "_bastilleLastCheese", "_beanCannonUses", "_bearHugs", "_beerLensDrops", "_bellydancerPickpockets", "_benettonsCasts", "_birdsSoughtToday", "_boomBoxFights", "_boomBoxSongsLeft", "_bootStomps", "_boxingGloveArrows", "_brickoEyeSummons", "_brickoFights", "_campAwayCloudBuffs", "_campAwaySmileBuffs", "_candySummons", "_captainHagnkUsed", "_carnieCandyDrops", "_carrotNoseDrops", "_catBurglarCharge", "_catBurglarHeistsComplete", "_cheerleaderSteam", "_chestXRayUsed", "_chipBags", "_chocolateCigarsUsed", "_chocolateSculpturesUsed", "_chocolatesUsed", "_chronolithActivations", "_chronolithNextCost", "_clanFortuneConsultUses", "_clipartSummons", "_coldMedicineConsults", "_coldMedicineEquipmentTaken", "_companionshipCasts", "_cosmicBowlingSkillsUsed", "_crimbo21ColdResistance", "_dailySpecialPrice", "_daycareGymScavenges", "_daycareRecruits", "_deckCardsDrawn", "_deluxeKlawSummons", "_demandSandwich", "_detectiveCasesCompleted", "_disavowed", "_dnaPotionsMade", "_donhosCasts", "_dreamJarDrops", "_drunkPygmyBanishes", "_edDefeats", "_edLashCount", "_elronsCasts", "_enamorangs", "_energyCollected", "_expertCornerCutterUsed", "_favorRareSummons", "_feastUsed", "_feelinTheRhythm", "_feelPrideUsed", "_feelExcitementUsed", "_feelHatredUsed", "_feelLonelyUsed", "_feelNervousUsed", "_feelEnvyUsed", "_feelDisappointedUsed", "_feelSuperiorUsed", "_feelLostUsed", "_feelNostalgicUsed", "_feelPeacefulUsed", "_fingertrapArrows", "_fireExtinguisherCharge", "_fragrantHerbsUsed", "_freeBeachWalksUsed", "_frButtonsPressed", "_fudgeWaspFights", "_gapBuffs", "_garbageFireDropsCrown", "_genieFightsUsed", "_genieWishesUsed", "_gibbererAdv", "_gibbererCharge", "_gingerbreadCityTurns", "_glarkCableUses", "_glitchMonsterFights", "_gnomeAdv", "_godLobsterFights", "_goldenMoneyCharge", "_gongDrops", "_gothKidCharge", "_gothKidFights", "_grimBrotherCharge", "_grimFairyTaleDrops", "_grimFairyTaleDropsCrown", "_grimoireConfiscatorSummons", "_grimoireGeekySummons", "_grimstoneMaskDrops", "_grimstoneMaskDropsCrown", "_grooseCharge", "_grooseDrops", "_guzzlrDeliveries", "_guzzlrGoldDeliveries", "_guzzlrPlatinumDeliveries", "_hareAdv", "_hareCharge", "_highTopPumps", "_hipsterAdv", "_hoardedCandyDropsCrown", "_hoboUnderlingSummons", "_holoWristDrops", "_holoWristProgress", "_hotAshesDrops", "_hotJellyUses", "_hotTubSoaks", "_humanMuskUses", "_iceballUses", "_inigosCasts", "_jerksHealthMagazinesUsed", "_jiggleCheese", "_jiggleCream", "_jiggleLife", "_jiggleSteak", "_jitbCharge", "_juneCleaverFightsLeft", "_juneCleaverEncounters", "_juneCleaverStench", "_juneCleaverSpooky", "_juneCleaverSleaze", "_juneCleaverHot", "_juneCleaverCold", "_juneCleaverSkips", "_jungDrops", "_kgbClicksUsed", "_kgbDispenserUses", "_kgbTranquilizerDartUses", "_klawSummons", "_kloopCharge", "_kloopDrops", "_kolhsAdventures", "_kolhsSavedByTheBell", "_lastDailyDungeonRoom", "_lastSausageMonsterTurn", "_lastZomboEye", "_latteRefillsUsed", "_leafblowerML", "_legionJackhammerCrafting", "_llamaCharge", "_longConUsed", "_lovebugsBeachBuck", "_lovebugsChroner", "_lovebugsCoinspiracy", "_lovebugsFreddy", "_lovebugsFunFunds", "_lovebugsHoboNickel", "_lovebugsWalmart", "_loveChocolatesUsed", "_lynyrdSnareUses", "_machineTunnelsAdv", "_macrometeoriteUses", "_mafiaThumbRingAdvs", "_mayflowerDrops", "_mayflySummons", "_mediumSiphons", "_meteoriteAdesUsed", "_meteorShowerUses", "_micrometeoriteUses", "_miniMartiniDrops", "_monstersMapped", "_mushroomGardenFights", "_nanorhinoCharge", "_navelRunaways", "_neverendingPartyFreeTurns", "_newYouQuestSharpensDone", "_newYouQuestSharpensToDo", "_nextColdMedicineConsult", "_nextQuantumAlignment", "_nightmareFuelCharges", "_noobSkillCount", "_nuclearStockpileUsed", "_oilExtracted", "_olfactionsUsed", "_optimisticCandleDropsCrown", "_oreDropsCrown", "_otoscopeUsed", "_oysterEggsFound", "_pantsgivingBanish", "_pantsgivingCount", "_pantsgivingCrumbs", "_pantsgivingFullness", "_pasteDrops", "_peteJukeboxFixed", "_peteJumpedShark", "_petePeeledOut", "_pieDrops", "_piePartsCount", "_pixieCharge", "_pocketProfessorLectures", "_poisonArrows", "_pokeGrowFertilizerDrops", "_poolGames", "_powderedGoldDrops", "_powderedMadnessUses", "_powerfulGloveBatteryPowerUsed", "_powerPillDrops", "_powerPillUses", "_precisionCasts", "_radlibSummons", "_raindohCopiesMade", "_rapidPrototypingUsed", "_raveStealCount", "_reflexHammerUsed", "_resolutionAdv", "_resolutionRareSummons", "_riftletAdv", "_roboDrops", "_rogueProgramCharge", "_romanticFightsLeft", "_saberForceMonsterCount", "_saberForceUses", "_saberMod", "_saltGrainsConsumed", "_sandwormCharge", "_saplingsPlanted", "_sausageFights", "_sausagesEaten", "_sausagesMade", "_sealFigurineUses", "_sealScreeches", "_sealsSummoned", "_shatteringPunchUsed", "_shortOrderCookCharge", "_shrubCharge", "_sloppyDinerBeachBucks", "_smilesOfMrA", "_smithsnessSummons", "_snojoFreeFights", "_snojoParts", "_snokebombUsed", "_snowconeSummons", "_snowglobeDrops", "_snowSuitCount", "_sourceTerminalDigitizeMonsterCount", "_sourceTerminalDigitizeUses", "_sourceTerminalDuplicateUses", "_sourceTerminalEnhanceUses", "_sourceTerminalExtrudes", "_sourceTerminalPortscanUses", "_spaceFurDropsCrown", "_spacegatePlanetIndex", "_spacegateTurnsLeft", "_spaceJellyfishDrops", "_speakeasyDrinksDrunk", "_spelunkerCharges", "_spelunkingTalesDrops", "_spookyJellyUses", "_stackLumpsUses", "_steamCardDrops", "_stickerSummons", "_stinkyCheeseCount", "_stressBallSqueezes", "_sugarSummons", "_sweatOutSomeBoozeUsed", "_taffyRareSummons", "_taffyYellowSummons", "_thanksgettingFoodsEaten", "_thingfinderCasts", "_thinknerdPackageDrops", "_thorsPliersCrafting", "_timeHelmetAdv", "_timeSpinnerMinutesUsed", "_tokenDrops", "_transponderDrops", "_turkeyBlastersUsed", "_turkeyBooze", "_turkeyMuscle", "_turkeyMyst", "_turkeyMoxie", "_unaccompaniedMinerUsed", "_unconsciousCollectiveCharge", "_universalSeasoningsUsed", "_universeCalculated", "_universeImploded", "_usedReplicaBatoomerang", "_vampyreCloakeFormUses", "_villainLairProgress", "_vitachocCapsulesUsed", "_vmaskAdv", "_voidFreeFights", "_volcanoItem1", "_volcanoItem2", "_volcanoItem3", "_volcanoItemCount1", "_volcanoItemCount2", "_volcanoItemCount3", "_voteFreeFights", "_VYKEACompanionLevel", "_warbearAutoAnvilCrafting", "_whiteRiceDrops", "_witchessFights", "_xoHugsUsed", "_yellowPixelDropsCrown", "_zapCount"];
var monsterProperties = ["beGregariousMonster", "cameraMonster", "chateauMonster", "clumsinessGroveBoss", "crappyCameraMonster", "crudeMonster", "enamorangMonster", "envyfishMonster", "glacierOfJerksBoss", "iceSculptureMonster", "lastCopyableMonster", "longConMonster", "maelstromOfLoversBoss", "makeFriendsMonster", "merkinLockkeyMonster", "nosyNoseMonster", "olfactedMonster", "photocopyMonster", "rainDohMonster", "romanticTarget", "screencappedMonster", "spookyPuttyMonster", "stenchCursedMonster", "superficiallyInterestedMonster", "waxMonster", "yearbookCameraTarget", "_gallapagosMonster", "_jiggleCreamedMonster", "_latteMonster", "_nanorhinoBanishedMonster", "_newYouQuestMonster", "_relativityMonster", "_saberForceMonster", "_sourceTerminalDigitizeMonster", "_voteMonster"];
var locationProperties = ["currentJunkyardLocation", "doctorBagQuestLocation", "ghostLocation", "guzzlrQuestLocation", "nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "sourceOracleTarget", "_floundryBassLocation", "_floundryCarpLocation", "_floundryCodLocation", "_floundryHatchetfishLocation", "_floundryTroutLocation", "_floundryTunaLocation"];
var stringProperties = ["autoLogin", "browserBookmarks", "chatFontSize", "combatHotkey0", "combatHotkey1", "combatHotkey2", "combatHotkey3", "combatHotkey4", "combatHotkey5", "combatHotkey6", "combatHotkey7", "combatHotkey8", "combatHotkey9", "commandLineNamespace", "cookies.inventory", "dailyDeedsOptions", "defaultBorderColor", "displayName", "externalEditor", "getBreakfast", "headerStates", "highlightList", "http.proxyHost", "http.proxyPassword", "http.proxyPort", "http.proxyUser", "https.proxyHost", "https.proxyPassword", "https.proxyPort", "https.proxyUser", "initialDesktop", "initialFrames", "lastRelayUpdate", "lastRssVersion", "lastUserAgent", "lastUsername", "logPreferenceChangeFilter", "loginScript", "loginServerName", "loginWindowLogo", "logoutScript", "previousNotifyList", "previousUpdateVersion", "saveState", "saveStateActive", "scriptList", "swingLookAndFeel", "userAgent", "afterAdventureScript", "autoOlfact", "autoPutty", "backupCameraMode", "banishedMonsters", "banishingShoutMonsters", "barrelLayout", "batmanStats", "batmanZone", "batmanUpgrades", "battleAction", "beachHeadsUnlocked", "beforePVPScript", "betweenBattleScript", "boomBoxSong", "breakfastAlways", "breakfastHardcore", "breakfastSoftcore", "buffBotCasting", "buyScript", "cargoPocketsEmptied", "cargoPocketScraps", "chatbotScript", "chatPlayerScript", "choiceAdventureScript", "chosenTrip", "clanFortuneReply1", "clanFortuneReply2", "clanFortuneReply3", "clanFortuneWord1", "clanFortuneWord2", "clanFortuneWord3", "commerceGhostItem", "counterScript", "copperheadClubHazard", "crimbotChassis", "crimbotArm", "crimbotPropulsion", "crystalBallPredictions", "csServicesPerformed", "currentEasyBountyItem", "currentHardBountyItem", "currentHippyStore", "currentJunkyardTool", "currentMood", "currentPVPSeason", "currentPvpVictories", "currentSpecialBountyItem", "customCombatScript", "cyrusAdjectives", "defaultFlowerLossMessage", "defaultFlowerWinMessage", "demonName1", "demonName2", "demonName3", "demonName4", "demonName5", "demonName6", "demonName7", "demonName8", "demonName9", "demonName10", "demonName11", "demonName12", "demonName13", "dinseyGatorStenchDamage", "dinseyRollercoasterStats", "doctorBagQuestItem", "dolphinItem", "edPiece", "enamorangMonsterTurn", "ensorcelee", "EVEDirections", "extraCosmeticModifiers", "familiarScript", "forbiddenStores", "gameProBossSpecialPower", "gooseReprocessed", "grimoireSkillsHardcore", "grimoireSkillsSoftcore", "grimstoneMaskPath", "guzzlrQuestClient", "guzzlrQuestBooze", "guzzlrQuestTier", "harvestGardenHardcore", "harvestGardenSoftcore", "hpAutoRecoveryItems", "invalidBuffMessage", "jickSwordModifier", "juneCleaverQueue", "kingLiberatedScript", "lassoTraining", "lastAdventure", "lastBangPotion819", "lastBangPotion820", "lastBangPotion821", "lastBangPotion822", "lastBangPotion823", "lastBangPotion824", "lastBangPotion825", "lastBangPotion826", "lastBangPotion827", "lastChanceBurn", "lastChessboard", "lastCombatEnvironments", "lastDwarfDiceRolls", "lastDwarfDigitRunes", "lastDwarfEquipmentRunes", "lastDwarfFactoryItem118", "lastDwarfFactoryItem119", "lastDwarfFactoryItem120", "lastDwarfFactoryItem360", "lastDwarfFactoryItem361", "lastDwarfFactoryItem362", "lastDwarfFactoryItem363", "lastDwarfFactoryItem364", "lastDwarfFactoryItem365", "lastDwarfFactoryItem910", "lastDwarfFactoryItem3199", "lastDwarfOfficeItem3208", "lastDwarfOfficeItem3209", "lastDwarfOfficeItem3210", "lastDwarfOfficeItem3211", "lastDwarfOfficeItem3212", "lastDwarfOfficeItem3213", "lastDwarfOfficeItem3214", "lastDwarfOreRunes", "lastDwarfHopper1", "lastDwarfHopper2", "lastDwarfHopper3", "lastDwarfHopper4", "lastEncounter", "lastMacroError", "lastMessageId", "lastPaperStrip3144", "lastPaperStrip4138", "lastPaperStrip4139", "lastPaperStrip4140", "lastPaperStrip4141", "lastPaperStrip4142", "lastPaperStrip4143", "lastPaperStrip4144", "lastPirateEphemera", "lastPorkoBoard", "lastPorkoPayouts", "lastPorkoExpected", "lastSlimeVial3885", "lastSlimeVial3886", "lastSlimeVial3887", "lastSlimeVial3888", "lastSlimeVial3889", "lastSlimeVial3890", "lastSlimeVial3891", "lastSlimeVial3892", "lastSlimeVial3893", "lastSlimeVial3894", "lastSlimeVial3895", "lastSlimeVial3896", "latteModifier", "latteUnlocks", "libramSkillsHardcore", "libramSkillsSoftcore", "louvreOverride", "lovePotion", "lttQuestName", "maximizerList", "maximizerMRUList", "mayoInMouth", "mayoMinderSetting", "merkinQuestPath", "mineLayout1", "mineLayout2", "mineLayout3", "mineLayout4", "mineLayout5", "mineLayout6", "mpAutoRecoveryItems", "muffinOnOrder", "nextAdventure", "nextQuantumFamiliarName", "nextQuantumFamiliarOwner", "nsChallenge2", "nsChallenge3", "nsChallenge4", "nsChallenge5", "nsTowerDoorKeysUsed", "oceanAction", "oceanDestination", "pastaThrall1", "pastaThrall2", "pastaThrall3", "pastaThrall4", "pastaThrall5", "pastaThrall6", "pastaThrall7", "pastaThrall8", "peteMotorbikeTires", "peteMotorbikeGasTank", "peteMotorbikeHeadlight", "peteMotorbikeCowling", "peteMotorbikeMuffler", "peteMotorbikeSeat", "pieStuffing", "plantingDate", "plantingLength", "plantingScript", "plumberCostumeWorn", "pokefamBoosts", "postAscensionScript", "preAscensionScript", "retroCapeSuperhero", "retroCapeWashingInstructions", "questClumsinessGrove", "questDoctorBag", "questECoBucket", "questESlAudit", "questESlBacteria", "questESlCheeseburger", "questESlCocktail", "questESlDebt", "questESlFish", "questESlMushStash", "questESlSalt", "questESlSprinkles", "questESpEVE", "questESpJunglePun", "questESpGore", "questESpClipper", "questESpFakeMedium", "questESpSerum", "questESpSmokes", "questESpOutOfOrder", "questEStFishTrash", "questEStGiveMeFuel", "questEStNastyBears", "questEStSocialJusticeI", "questEStSocialJusticeII", "questEStSuperLuber", "questEStWorkWithFood", "questEStZippityDooDah", "questEUNewYou", "questF01Primordial", "questF02Hyboria", "questF03Future", "questF04Elves", "questF05Clancy", "questG01Meatcar", "questG02Whitecastle", "questG03Ego", "questG04Nemesis", "questG05Dark", "questG06Delivery", "questG07Myst", "questG08Moxie", "questG09Muscle", "questGlacierOfJerks", "questGuzzlr", "questI01Scapegoat", "questI02Beat", "questL02Larva", "questL03Rat", "questL04Bat", "questL05Goblin", "questL06Friar", "questL07Cyrptic", "questL08Trapper", "questL09Topping", "questL10Garbage", "questL11MacGuffin", "questL11Black", "questL11Business", "questL11Curses", "questL11Desert", "questL11Doctor", "questL11Manor", "questL11Palindome", "questL11Pyramid", "questL11Ron", "questL11Shen", "questL11Spare", "questL11Worship", "questL12War", "questL12HippyFrat", "questL13Final", "questL13Warehouse", "questLTTQuestByWire", "questM01Untinker", "questM02Artist", "questM03Bugbear", "questM05Toot", "questM06Gourd", "questM07Hammer", "questM08Baker", "questM09Rocks", "questM10Azazel", "questM11Postal", "questM12Pirate", "questM13Escape", "questM14Bounty", "questM15Lol", "questM16Temple", "questM17Babies", "questM18Swamp", "questM19Hippy", "questM20Necklace", "questM21Dance", "questM22Shirt", "questM23Meatsmith", "questM24Doc", "questM25Armorer", "questM26Oracle", "questMaelstromOfLovers", "questPAGhost", "questS01OldGuy", "questS02Monkees", "raveCombo1", "raveCombo2", "raveCombo3", "raveCombo4", "raveCombo5", "raveCombo6", "recoveryScript", "relayCounters", "royalty", "scriptMRUList", "seahorseName", "shenQuestItem", "shrubGarland", "shrubGifts", "shrubLights", "shrubTopper", "sideDefeated", "sidequestArenaCompleted", "sidequestFarmCompleted", "sidequestJunkyardCompleted", "sidequestLighthouseCompleted", "sidequestNunsCompleted", "sidequestOrchardCompleted", "skateParkStatus", "snowsuit", "sourceTerminalChips", "sourceTerminalEducate1", "sourceTerminalEducate2", "sourceTerminalEnquiry", "sourceTerminalEducateKnown", "sourceTerminalEnhanceKnown", "sourceTerminalEnquiryKnown", "sourceTerminalExtrudeKnown", "spadingData", "spadingScript", "spelunkyStatus", "spelunkyUpgrades", "spookyravenRecipeUsed", "stationaryButton1", "stationaryButton2", "stationaryButton3", "stationaryButton4", "stationaryButton5", "streamCrossDefaultTarget", "sweetSynthesisBlacklist", "telescope1", "telescope2", "telescope3", "telescope4", "telescope5", "testudinalTeachings", "textColors", "thanksMessage", "tomeSkillsHardcore", "tomeSkillsSoftcore", "trapperOre", "umbrellaState", "umdLastObtained", "vintnerWineEffect", "vintnerWineName", "vintnerWineType", "violetFogLayout", "volcanoMaze1", "volcanoMaze2", "volcanoMaze3", "volcanoMaze4", "volcanoMaze5", "walfordBucketItem", "warProgress", "workteaClue", "yourFavoriteBird", "yourFavoriteBirdMods", "youRobotCPUUpgrades", "_bastilleBoosts", "_bastilleChoice1", "_bastilleChoice2", "_bastilleChoice3", "_bastilleCurrentStyles", "_bastilleEnemyCastle", "_bastilleEnemyName", "_bastilleLastBattleResults", "_bastilleLastEncounter", "_bastilleStats", "_beachHeadsUsed", "_beachLayout", "_beachMinutes", "_birdOfTheDay", "_birdOfTheDayMods", "_bittycar", "_campAwaySmileBuffSign", "_cloudTalkMessage", "_cloudTalkSmoker", "_coatOfPaintModifier", "_dailySpecial", "_deckCardsSeen", "_feastedFamiliars", "_floristPlantsUsed", "_frAreasUnlocked", "_frHoursLeft", "_frMonstersKilled", "_horsery", "_horseryCrazyMox", "_horseryCrazyMus", "_horseryCrazyMys", "_horseryCrazyName", "_horseryCurrentName", "_horseryDarkName", "_horseryNormalName", "_horseryPaleName", "_jickJarAvailable", "_jiggleCheesedMonsters", "_lastCombatStarted", "_LastPirateRealmIsland", "_locketMonstersFought", "_mummeryMods", "_mummeryUses", "_newYouQuestSkill", "_noHatModifier", "_pantogramModifier", "_pottedPowerPlant", "_questESp", "_questPartyFair", "_questPartyFairProgress", "_questPartyFairQuest", "_roboDrinks", "_roninStoragePulls", "_spacegateAnimalLife", "_spacegateCoordinates", "_spacegateHazards", "_spacegateIntelligentLife", "_spacegatePlanetName", "_spacegatePlantLife", "_stolenAccordions", "_tempRelayCounters", "_timeSpinnerFoodAvailable", "_unknownEasyBountyItem", "_unknownHardBountyItem", "_unknownSpecialBountyItem", "_untakenEasyBountyItem", "_untakenHardBountyItem", "_untakenSpecialBountyItem", "_userMods", "_villainLairColor", "_villainLairKey", "_voteLocal1", "_voteLocal2", "_voteLocal3", "_voteLocal4", "_voteMonster1", "_voteMonster2", "_voteModifier", "_VYKEACompanionType", "_VYKEACompanionRune", "_VYKEACompanionName"];
var numericOrStringProperties = ["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing", "choiceAdventure2", "choiceAdventure3", "choiceAdventure4", "choiceAdventure5", "choiceAdventure6", "choiceAdventure7", "choiceAdventure8", "choiceAdventure9", "choiceAdventure10", "choiceAdventure11", "choiceAdventure12", "choiceAdventure14", "choiceAdventure15", "choiceAdventure16", "choiceAdventure17", "choiceAdventure18", "choiceAdventure19", "choiceAdventure20", "choiceAdventure21", "choiceAdventure22", "choiceAdventure23", "choiceAdventure24", "choiceAdventure25", "choiceAdventure26", "choiceAdventure27", "choiceAdventure28", "choiceAdventure29", "choiceAdventure40", "choiceAdventure41", "choiceAdventure42", "choiceAdventure45", "choiceAdventure46", "choiceAdventure47", "choiceAdventure71", "choiceAdventure72", "choiceAdventure73", "choiceAdventure74", "choiceAdventure75", "choiceAdventure76", "choiceAdventure77", "choiceAdventure86", "choiceAdventure87", "choiceAdventure88", "choiceAdventure89", "choiceAdventure90", "choiceAdventure91", "choiceAdventure105", "choiceAdventure106", "choiceAdventure107", "choiceAdventure108", "choiceAdventure109", "choiceAdventure110", "choiceAdventure111", "choiceAdventure112", "choiceAdventure113", "choiceAdventure114", "choiceAdventure115", "choiceAdventure116", "choiceAdventure117", "choiceAdventure118", "choiceAdventure120", "choiceAdventure123", "choiceAdventure125", "choiceAdventure126", "choiceAdventure127", "choiceAdventure129", "choiceAdventure131", "choiceAdventure132", "choiceAdventure135", "choiceAdventure136", "choiceAdventure137", "choiceAdventure138", "choiceAdventure139", "choiceAdventure140", "choiceAdventure141", "choiceAdventure142", "choiceAdventure143", "choiceAdventure144", "choiceAdventure145", "choiceAdventure146", "choiceAdventure147", "choiceAdventure148", "choiceAdventure149", "choiceAdventure151", "choiceAdventure152", "choiceAdventure153", "choiceAdventure154", "choiceAdventure155", "choiceAdventure156", "choiceAdventure157", "choiceAdventure158", "choiceAdventure159", "choiceAdventure160", "choiceAdventure161", "choiceAdventure162", "choiceAdventure163", "choiceAdventure164", "choiceAdventure165", "choiceAdventure166", "choiceAdventure167", "choiceAdventure168", "choiceAdventure169", "choiceAdventure170", "choiceAdventure171", "choiceAdventure172", "choiceAdventure177", "choiceAdventure178", "choiceAdventure180", "choiceAdventure181", "choiceAdventure182", "choiceAdventure184", "choiceAdventure185", "choiceAdventure186", "choiceAdventure187", "choiceAdventure188", "choiceAdventure189", "choiceAdventure191", "choiceAdventure197", "choiceAdventure198", "choiceAdventure199", "choiceAdventure200", "choiceAdventure201", "choiceAdventure202", "choiceAdventure203", "choiceAdventure204", "choiceAdventure205", "choiceAdventure206", "choiceAdventure207", "choiceAdventure208", "choiceAdventure211", "choiceAdventure212", "choiceAdventure213", "choiceAdventure214", "choiceAdventure215", "choiceAdventure216", "choiceAdventure217", "choiceAdventure218", "choiceAdventure219", "choiceAdventure220", "choiceAdventure221", "choiceAdventure222", "choiceAdventure223", "choiceAdventure224", "choiceAdventure225", "choiceAdventure230", "choiceAdventure272", "choiceAdventure273", "choiceAdventure276", "choiceAdventure277", "choiceAdventure278", "choiceAdventure279", "choiceAdventure280", "choiceAdventure281", "choiceAdventure282", "choiceAdventure283", "choiceAdventure284", "choiceAdventure285", "choiceAdventure286", "choiceAdventure287", "choiceAdventure288", "choiceAdventure289", "choiceAdventure290", "choiceAdventure291", "choiceAdventure292", "choiceAdventure293", "choiceAdventure294", "choiceAdventure295", "choiceAdventure296", "choiceAdventure297", "choiceAdventure298", "choiceAdventure299", "choiceAdventure302", "choiceAdventure303", "choiceAdventure304", "choiceAdventure305", "choiceAdventure306", "choiceAdventure307", "choiceAdventure308", "choiceAdventure309", "choiceAdventure310", "choiceAdventure311", "choiceAdventure317", "choiceAdventure318", "choiceAdventure319", "choiceAdventure320", "choiceAdventure321", "choiceAdventure322", "choiceAdventure326", "choiceAdventure327", "choiceAdventure328", "choiceAdventure329", "choiceAdventure330", "choiceAdventure331", "choiceAdventure332", "choiceAdventure333", "choiceAdventure334", "choiceAdventure335", "choiceAdventure336", "choiceAdventure337", "choiceAdventure338", "choiceAdventure339", "choiceAdventure340", "choiceAdventure341", "choiceAdventure342", "choiceAdventure343", "choiceAdventure344", "choiceAdventure345", "choiceAdventure346", "choiceAdventure347", "choiceAdventure348", "choiceAdventure349", "choiceAdventure350", "choiceAdventure351", "choiceAdventure352", "choiceAdventure353", "choiceAdventure354", "choiceAdventure355", "choiceAdventure356", "choiceAdventure357", "choiceAdventure358", "choiceAdventure360", "choiceAdventure361", "choiceAdventure362", "choiceAdventure363", "choiceAdventure364", "choiceAdventure365", "choiceAdventure366", "choiceAdventure367", "choiceAdventure372", "choiceAdventure376", "choiceAdventure387", "choiceAdventure388", "choiceAdventure389", "choiceAdventure390", "choiceAdventure391", "choiceAdventure392", "choiceAdventure393", "choiceAdventure395", "choiceAdventure396", "choiceAdventure397", "choiceAdventure398", "choiceAdventure399", "choiceAdventure400", "choiceAdventure401", "choiceAdventure402", "choiceAdventure403", "choiceAdventure423", "choiceAdventure424", "choiceAdventure425", "choiceAdventure426", "choiceAdventure427", "choiceAdventure428", "choiceAdventure429", "choiceAdventure430", "choiceAdventure431", "choiceAdventure432", "choiceAdventure433", "choiceAdventure435", "choiceAdventure438", "choiceAdventure439", "choiceAdventure442", "choiceAdventure444", "choiceAdventure445", "choiceAdventure446", "choiceAdventure447", "choiceAdventure448", "choiceAdventure449", "choiceAdventure451", "choiceAdventure452", "choiceAdventure453", "choiceAdventure454", "choiceAdventure455", "choiceAdventure456", "choiceAdventure457", "choiceAdventure458", "choiceAdventure460", "choiceAdventure461", "choiceAdventure462", "choiceAdventure463", "choiceAdventure464", "choiceAdventure465", "choiceAdventure467", "choiceAdventure468", "choiceAdventure469", "choiceAdventure470", "choiceAdventure471", "choiceAdventure472", "choiceAdventure473", "choiceAdventure474", "choiceAdventure475", "choiceAdventure477", "choiceAdventure478", "choiceAdventure480", "choiceAdventure483", "choiceAdventure484", "choiceAdventure485", "choiceAdventure486", "choiceAdventure488", "choiceAdventure489", "choiceAdventure490", "choiceAdventure491", "choiceAdventure496", "choiceAdventure497", "choiceAdventure502", "choiceAdventure503", "choiceAdventure504", "choiceAdventure505", "choiceAdventure506", "choiceAdventure507", "choiceAdventure509", "choiceAdventure510", "choiceAdventure511", "choiceAdventure512", "choiceAdventure513", "choiceAdventure514", "choiceAdventure515", "choiceAdventure517", "choiceAdventure518", "choiceAdventure519", "choiceAdventure521", "choiceAdventure522", "choiceAdventure523", "choiceAdventure527", "choiceAdventure528", "choiceAdventure529", "choiceAdventure530", "choiceAdventure531", "choiceAdventure532", "choiceAdventure533", "choiceAdventure534", "choiceAdventure535", "choiceAdventure536", "choiceAdventure538", "choiceAdventure539", "choiceAdventure542", "choiceAdventure543", "choiceAdventure544", "choiceAdventure546", "choiceAdventure548", "choiceAdventure549", "choiceAdventure550", "choiceAdventure551", "choiceAdventure552", "choiceAdventure553", "choiceAdventure554", "choiceAdventure556", "choiceAdventure557", "choiceAdventure558", "choiceAdventure559", "choiceAdventure560", "choiceAdventure561", "choiceAdventure562", "choiceAdventure563", "choiceAdventure564", "choiceAdventure565", "choiceAdventure566", "choiceAdventure567", "choiceAdventure568", "choiceAdventure569", "choiceAdventure571", "choiceAdventure572", "choiceAdventure573", "choiceAdventure574", "choiceAdventure575", "choiceAdventure576", "choiceAdventure577", "choiceAdventure578", "choiceAdventure579", "choiceAdventure581", "choiceAdventure582", "choiceAdventure583", "choiceAdventure584", "choiceAdventure594", "choiceAdventure595", "choiceAdventure596", "choiceAdventure597", "choiceAdventure598", "choiceAdventure599", "choiceAdventure600", "choiceAdventure603", "choiceAdventure604", "choiceAdventure616", "choiceAdventure634", "choiceAdventure640", "choiceAdventure654", "choiceAdventure655", "choiceAdventure656", "choiceAdventure657", "choiceAdventure658", "choiceAdventure664", "choiceAdventure669", "choiceAdventure670", "choiceAdventure671", "choiceAdventure672", "choiceAdventure673", "choiceAdventure674", "choiceAdventure675", "choiceAdventure676", "choiceAdventure677", "choiceAdventure678", "choiceAdventure679", "choiceAdventure681", "choiceAdventure683", "choiceAdventure684", "choiceAdventure685", "choiceAdventure686", "choiceAdventure687", "choiceAdventure688", "choiceAdventure689", "choiceAdventure690", "choiceAdventure691", "choiceAdventure692", "choiceAdventure693", "choiceAdventure694", "choiceAdventure695", "choiceAdventure696", "choiceAdventure697", "choiceAdventure698", "choiceAdventure700", "choiceAdventure701", "choiceAdventure705", "choiceAdventure706", "choiceAdventure707", "choiceAdventure708", "choiceAdventure709", "choiceAdventure710", "choiceAdventure711", "choiceAdventure712", "choiceAdventure713", "choiceAdventure714", "choiceAdventure715", "choiceAdventure716", "choiceAdventure717", "choiceAdventure721", "choiceAdventure725", "choiceAdventure729", "choiceAdventure733", "choiceAdventure737", "choiceAdventure741", "choiceAdventure745", "choiceAdventure749", "choiceAdventure753", "choiceAdventure771", "choiceAdventure778", "choiceAdventure780", "choiceAdventure781", "choiceAdventure783", "choiceAdventure784", "choiceAdventure785", "choiceAdventure786", "choiceAdventure787", "choiceAdventure788", "choiceAdventure789", "choiceAdventure791", "choiceAdventure793", "choiceAdventure794", "choiceAdventure795", "choiceAdventure796", "choiceAdventure797", "choiceAdventure803", "choiceAdventure805", "choiceAdventure808", "choiceAdventure809", "choiceAdventure813", "choiceAdventure815", "choiceAdventure830", "choiceAdventure832", "choiceAdventure833", "choiceAdventure834", "choiceAdventure835", "choiceAdventure837", "choiceAdventure838", "choiceAdventure839", "choiceAdventure840", "choiceAdventure841", "choiceAdventure842", "choiceAdventure851", "choiceAdventure852", "choiceAdventure853", "choiceAdventure854", "choiceAdventure855", "choiceAdventure856", "choiceAdventure857", "choiceAdventure858", "choiceAdventure866", "choiceAdventure873", "choiceAdventure875", "choiceAdventure876", "choiceAdventure877", "choiceAdventure878", "choiceAdventure879", "choiceAdventure880", "choiceAdventure881", "choiceAdventure882", "choiceAdventure888", "choiceAdventure889", "choiceAdventure918", "choiceAdventure919", "choiceAdventure920", "choiceAdventure921", "choiceAdventure923", "choiceAdventure924", "choiceAdventure925", "choiceAdventure926", "choiceAdventure927", "choiceAdventure928", "choiceAdventure929", "choiceAdventure930", "choiceAdventure931", "choiceAdventure932", "choiceAdventure940", "choiceAdventure941", "choiceAdventure942", "choiceAdventure943", "choiceAdventure944", "choiceAdventure945", "choiceAdventure946", "choiceAdventure950", "choiceAdventure955", "choiceAdventure957", "choiceAdventure958", "choiceAdventure959", "choiceAdventure960", "choiceAdventure961", "choiceAdventure962", "choiceAdventure963", "choiceAdventure964", "choiceAdventure965", "choiceAdventure966", "choiceAdventure970", "choiceAdventure973", "choiceAdventure974", "choiceAdventure975", "choiceAdventure976", "choiceAdventure977", "choiceAdventure979", "choiceAdventure980", "choiceAdventure981", "choiceAdventure982", "choiceAdventure983", "choiceAdventure988", "choiceAdventure989", "choiceAdventure993", "choiceAdventure998", "choiceAdventure1000", "choiceAdventure1003", "choiceAdventure1005", "choiceAdventure1006", "choiceAdventure1007", "choiceAdventure1008", "choiceAdventure1009", "choiceAdventure1010", "choiceAdventure1011", "choiceAdventure1012", "choiceAdventure1013", "choiceAdventure1015", "choiceAdventure1016", "choiceAdventure1017", "choiceAdventure1018", "choiceAdventure1019", "choiceAdventure1020", "choiceAdventure1021", "choiceAdventure1022", "choiceAdventure1023", "choiceAdventure1026", "choiceAdventure1027", "choiceAdventure1028", "choiceAdventure1029", "choiceAdventure1030", "choiceAdventure1031", "choiceAdventure1032", "choiceAdventure1033", "choiceAdventure1034", "choiceAdventure1035", "choiceAdventure1036", "choiceAdventure1037", "choiceAdventure1038", "choiceAdventure1039", "choiceAdventure1040", "choiceAdventure1041", "choiceAdventure1042", "choiceAdventure1044", "choiceAdventure1045", "choiceAdventure1046", "choiceAdventure1048", "choiceAdventure1051", "choiceAdventure1052", "choiceAdventure1053", "choiceAdventure1054", "choiceAdventure1055", "choiceAdventure1056", "choiceAdventure1057", "choiceAdventure1059", "choiceAdventure1060", "choiceAdventure1061", "choiceAdventure1062", "choiceAdventure1065", "choiceAdventure1067", "choiceAdventure1068", "choiceAdventure1069", "choiceAdventure1070", "choiceAdventure1071", "choiceAdventure1073", "choiceAdventure1077", "choiceAdventure1080", "choiceAdventure1081", "choiceAdventure1082", "choiceAdventure1083", "choiceAdventure1084", "choiceAdventure1085", "choiceAdventure1091", "choiceAdventure1094", "choiceAdventure1095", "choiceAdventure1096", "choiceAdventure1097", "choiceAdventure1102", "choiceAdventure1106", "choiceAdventure1107", "choiceAdventure1108", "choiceAdventure1110", "choiceAdventure1114", "choiceAdventure1115", "choiceAdventure1116", "choiceAdventure1118", "choiceAdventure1119", "choiceAdventure1120", "choiceAdventure1121", "choiceAdventure1122", "choiceAdventure1123", "choiceAdventure1171", "choiceAdventure1172", "choiceAdventure1173", "choiceAdventure1174", "choiceAdventure1175", "choiceAdventure1193", "choiceAdventure1195", "choiceAdventure1196", "choiceAdventure1197", "choiceAdventure1198", "choiceAdventure1199", "choiceAdventure1202", "choiceAdventure1203", "choiceAdventure1204", "choiceAdventure1205", "choiceAdventure1206", "choiceAdventure1207", "choiceAdventure1208", "choiceAdventure1209", "choiceAdventure1210", "choiceAdventure1211", "choiceAdventure1212", "choiceAdventure1213", "choiceAdventure1214", "choiceAdventure1215", "choiceAdventure1219", "choiceAdventure1222", "choiceAdventure1223", "choiceAdventure1224", "choiceAdventure1225", "choiceAdventure1226", "choiceAdventure1227", "choiceAdventure1228", "choiceAdventure1229", "choiceAdventure1236", "choiceAdventure1237", "choiceAdventure1238", "choiceAdventure1239", "choiceAdventure1240", "choiceAdventure1241", "choiceAdventure1242", "choiceAdventure1243", "choiceAdventure1244", "choiceAdventure1245", "choiceAdventure1246", "choiceAdventure1247", "choiceAdventure1248", "choiceAdventure1249", "choiceAdventure1250", "choiceAdventure1251", "choiceAdventure1252", "choiceAdventure1253", "choiceAdventure1254", "choiceAdventure1255", "choiceAdventure1256", "choiceAdventure1266", "choiceAdventure1280", "choiceAdventure1281", "choiceAdventure1282", "choiceAdventure1283", "choiceAdventure1284", "choiceAdventure1285", "choiceAdventure1286", "choiceAdventure1287", "choiceAdventure1288", "choiceAdventure1289", "choiceAdventure1290", "choiceAdventure1291", "choiceAdventure1292", "choiceAdventure1293", "choiceAdventure1294", "choiceAdventure1295", "choiceAdventure1296", "choiceAdventure1297", "choiceAdventure1298", "choiceAdventure1299", "choiceAdventure1300", "choiceAdventure1301", "choiceAdventure1302", "choiceAdventure1303", "choiceAdventure1304", "choiceAdventure1305", "choiceAdventure1307", "choiceAdventure1310", "choiceAdventure1312", "choiceAdventure1313", "choiceAdventure1314", "choiceAdventure1315", "choiceAdventure1316", "choiceAdventure1317", "choiceAdventure1318", "choiceAdventure1319", "choiceAdventure1321", "choiceAdventure1322", "choiceAdventure1323", "choiceAdventure1324", "choiceAdventure1325", "choiceAdventure1326", "choiceAdventure1327", "choiceAdventure1328", "choiceAdventure1332", "choiceAdventure1333", "choiceAdventure1335", "choiceAdventure1340", "choiceAdventure1341", "choiceAdventure1345", "choiceAdventure1389", "choiceAdventure1392", "choiceAdventure1397", "choiceAdventure1399", "choiceAdventure1405", "choiceAdventure1411", "choiceAdventure1415", "choiceAdventure1427", "choiceAdventure1428", "choiceAdventure1429", "choiceAdventure1430", "choiceAdventure1431", "choiceAdventure1432", "choiceAdventure1433", "choiceAdventure1434", "choiceAdventure1436", "choiceAdventure1460", "choiceAdventure1461", "choiceAdventure1467", "choiceAdventure1468", "choiceAdventure1469", "choiceAdventure1470", "choiceAdventure1471", "choiceAdventure1472", "choiceAdventure1473", "choiceAdventure1474", "choiceAdventure1475"];
var familiarProperties = ["commaFamiliar", "nextQuantumFamiliar", "preBlackbirdFamiliar"];
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
  var value = (0,external_kolmafia_.getProperty)(property);

  if (default_ !== undefined && value === "") {
    return default_;
  }

  return transform(value, property);
};

var createMafiaClassPropertyGetter = (Type, toType) => createPropertyGetter(value => {
  if (value === "") return null;
  var v = toType(value);
  return v === Type.get("none") ? null : v;
});

var getString = createPropertyGetter(value => value);
var getCommaSeparated = createPropertyGetter(value => value.split(/, ?/));
var getBoolean = createPropertyGetter(value => value === "true");
var getNumber = createPropertyGetter(value => Number(value));
var getBounty = createMafiaClassPropertyGetter(external_kolmafia_.Bounty, external_kolmafia_.toBounty);
var getClass = createMafiaClassPropertyGetter(external_kolmafia_.Class, external_kolmafia_.toClass);
var getCoinmaster = createMafiaClassPropertyGetter(external_kolmafia_.Coinmaster, external_kolmafia_.toCoinmaster);
var getEffect = createMafiaClassPropertyGetter(external_kolmafia_.Effect, external_kolmafia_.toEffect);
var getElement = createMafiaClassPropertyGetter(external_kolmafia_.Element, external_kolmafia_.toElement);
var getFamiliar = createMafiaClassPropertyGetter(external_kolmafia_.Familiar, external_kolmafia_.toFamiliar);
var getItem = createMafiaClassPropertyGetter(external_kolmafia_.Item, external_kolmafia_.toItem);
var getLocation = createMafiaClassPropertyGetter(external_kolmafia_.Location, external_kolmafia_.toLocation);
var getMonster = createMafiaClassPropertyGetter(external_kolmafia_.Monster, external_kolmafia_.toMonster);
var getPhylum = createMafiaClassPropertyGetter(external_kolmafia_.Phylum, external_kolmafia_.toPhylum);
var getServant = createMafiaClassPropertyGetter(external_kolmafia_.Servant, external_kolmafia_.toServant);
var getSkill = createMafiaClassPropertyGetter(external_kolmafia_.Skill, external_kolmafia_.toSkill);
var getSlot = createMafiaClassPropertyGetter(external_kolmafia_.Slot, external_kolmafia_.toSlot);
var getStat = createMafiaClassPropertyGetter(external_kolmafia_.Stat, external_kolmafia_.toStat);
var getThrall = createMafiaClassPropertyGetter(external_kolmafia_.Thrall, external_kolmafia_.toThrall);
function get(property, _default) {
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


  if (_default instanceof external_kolmafia_.Location) {
    return getLocation(property, _default);
  } else if (_default instanceof external_kolmafia_.Monster) {
    return getMonster(property, _default);
  } else if (_default instanceof external_kolmafia_.Familiar) {
    return getFamiliar(property, _default);
  } else if (_default instanceof external_kolmafia_.Stat) {
    return getStat(property, _default);
  } else if (_default instanceof external_kolmafia_.Phylum) {
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
  (0,external_kolmafia_.setProperty)(property, stringValue);
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

    return [prop, get(prop)];
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
          this.properties[propertyName] = get(propertyName);
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
      if (get(property, 0) < value) {
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
      if (get(property, 0) > value) {
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
      var start = get(property);
      this.setMinimumValue(property, min);
      this.setMaximumValue(property, max);
      return start !== get(property);
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

/***/ }),

/***/ 678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HP": () => (/* binding */ $familiar),
/* harmony export */   "Jh": () => (/* binding */ $slot),
/* harmony export */   "O4": () => (/* binding */ $monster),
/* harmony export */   "PG": () => (/* binding */ $location),
/* harmony export */   "Ri": () => (/* binding */ $stat),
/* harmony export */   "SS": () => (/* binding */ $element),
/* harmony export */   "_$": () => (/* binding */ $class),
/* harmony export */   "_G": () => (/* binding */ $effect),
/* harmony export */   "ei": () => (/* binding */ $slots),
/* harmony export */   "ev": () => (/* binding */ $thrall),
/* harmony export */   "fr": () => (/* binding */ $monsters),
/* harmony export */   "gw": () => (/* binding */ $stats),
/* harmony export */   "lh": () => (/* binding */ $effects),
/* harmony export */   "nx": () => (/* binding */ $skills),
/* harmony export */   "tm": () => (/* binding */ $skill),
/* harmony export */   "vS": () => (/* binding */ $items),
/* harmony export */   "xr": () => (/* binding */ $item)
/* harmony export */ });
/* unused harmony exports $bounty, $bounties, $classes, $coinmaster, $coinmasters, $elements, $familiars, $locations, $phylum, $phyla, $servant, $servants, $thralls */
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7530);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8588);



var concatTemplateString = function concatTemplateString(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    placeholders[_key - 1] = arguments[_key];
  }

  return literals.raw.reduce((acc, literal, i) => {
    var _placeholders$i;

    return acc + literal + ((_placeholders$i = placeholders[i]) !== null && _placeholders$i !== void 0 ? _placeholders$i : "");
  }, "");
};

var createSingleConstant = Type => function (literals) {
  for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    placeholders[_key2 - 1] = arguments[_key2];
  }

  var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
  return Type.get(input);
};

var createPluralConstant = Type => function (literals) {
  for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    placeholders[_key3 - 1] = arguments[_key3];
  }

  var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));

  if (input === "") {
    return Type.all();
  }

  return Type.get((0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .splitByCommasWithEscapes */ .ZQ)(input));
};
/**
 * A Bounty specified by name.
 *
 * @category In-game constant
 */


var $bounty = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Bounty);
/**
 * A list of Bounties specified by a comma-separated list of names.
 * For a list of all possible Bounties, leave the template string blank.
 *
 * @category In-game constant
 */

var $bounties = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Bounty);
/**
 * A Class specified by name.
 *
 * @category In-game constant
 */

var $class = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Class);
/**
 * A list of Classes specified by a comma-separated list of names.
 * For a list of all possible Classes, leave the template string blank.
 *
 * @category In-game constant
 */

var $classes = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Class);
/**
 * A Coinmaster specified by name.
 *
 * @category In-game constant
 */

var $coinmaster = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Coinmaster);
/**
 * A list of Coinmasters specified by a comma-separated list of names.
 * For a list of all possible Coinmasters, leave the template string blank.
 *
 * @category In-game constant
 */

var $coinmasters = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Coinmaster);
/**
 * An Effect specified by name.
 *
 * @category In-game constant
 */

var $effect = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Effect);
/**
 * A list of Effects specified by a comma-separated list of names.
 * For a list of all possible Effects, leave the template string blank.
 *
 * @category In-game constant
 */

var $effects = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Effect);
/**
 * An Element specified by name.
 *
 * @category In-game constant
 */

var $element = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Element);
/**
 * A list of Elements specified by a comma-separated list of names.
 * For a list of all possible Elements, leave the template string blank.
 *
 * @category In-game constant
 */

var $elements = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Element);
/**
 * A Familiar specified by name.
 *
 * @category In-game constant
 */

var $familiar = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Familiar);
/**
 * A list of Familiars specified by a comma-separated list of names.
 * For a list of all possible Familiars, leave the template string blank.
 *
 * @category In-game constant
 */

var $familiars = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Familiar);
/**
 * An Item specified by name.
 *
 * @category In-game constant
 */

var $item = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item);
/**
 * A list of Items specified by a comma-separated list of names.
 * For a list of all possible Items, leave the template string blank.
 *
 * @category In-game constant
 */

var $items = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item);
/**
 * A Location specified by name.
 *
 * @category In-game constant
 */

var $location = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Location);
/**
 * A list of Locations specified by a comma-separated list of names.
 * For a list of all possible Locations, leave the template string blank.
 *
 * @category In-game constant
 */

var $locations = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Location);
/**
 * A Monster specified by name.
 *
 * @category In-game constant
 */

var $monster = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Monster);
/**
 * A list of Monsters specified by a comma-separated list of names.
 * For a list of all possible Monsters, leave the template string blank.
 *
 * @category In-game constant
 */

var $monsters = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Monster);
/**
 * A Phylum specified by name.
 *
 * @category In-game constant
 */

var $phylum = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Phylum);
/**
 * A list of Phyla specified by a comma-separated list of names.
 * For a list of all possible Phyla, leave the template string blank.
 *
 * @category In-game constant
 */

var $phyla = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Phylum);
/**
 * A Servant specified by name.
 *
 * @category In-game constant
 */

var $servant = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Servant);
/**
 * A list of Servants specified by a comma-separated list of names.
 * For a list of all possible Servants, leave the template string blank.
 *
 * @category In-game constant
 */

var $servants = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Servant);
/**
 * A Skill specified by name.
 *
 * @category In-game constant
 */

var $skill = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Skill);
/**
 * A list of Skills specified by a comma-separated list of names.
 * For a list of all possible Skills, leave the template string blank.
 *
 * @category In-game constant
 */

var $skills = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Skill);
/**
 * A Slot specified by name.
 *
 * @category In-game constant
 */

var $slot = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Slot);
/**
 * A list of Slots specified by a comma-separated list of names.
 * For a list of all possible Slots, leave the template string blank.
 *
 * @category In-game constant
 */

var $slots = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Slot);
/**
 * A Stat specified by name.
 *
 * @category In-game constant
 */

var $stat = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Stat);
/**
 * A list of Stats specified by a comma-separated list of names.
 * For a list of all possible Stats, leave the template string blank.
 *
 * @category In-game constant
 */

var $stats = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Stat);
/**
 * A Thrall specified by name.
 *
 * @category In-game constant
 */

var $thrall = createSingleConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Thrall);
/**
 * A list of Thralls specified by a comma-separated list of names.
 * For a list of all possible Thralls, leave the template string blank.
 *
 * @category In-game constant
 */

var $thralls = createPluralConstant(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Thrall);

/***/ }),

/***/ 8588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$x": () => (/* binding */ setEqual),
/* harmony export */   "IA": () => (/* binding */ arrayContains),
/* harmony export */   "N3": () => (/* binding */ countedMapToString),
/* harmony export */   "Nf": () => (/* binding */ notNull),
/* harmony export */   "Sm": () => (/* binding */ sum),
/* harmony export */   "Y8": () => (/* binding */ countedMapToArray),
/* harmony export */   "ZQ": () => (/* binding */ splitByCommasWithEscapes),
/* harmony export */   "p3": () => (/* binding */ parseNumber),
/* harmony export */   "tv": () => (/* binding */ arrayToCountedMap),
/* harmony export */   "uZ": () => (/* binding */ clamp)
/* harmony export */ });
/* unused harmony exports chunk, sumNumbers, invertMap, createStringUnionTypeGuardFunction */
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

function chunk(array, chunkSize) {
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
    var _ref3 = _slicedToArray(_ref2, 2),
        item = _ref3[0],
        quantity = _ref3[1];

    return Array(quantity).fill(item);
  })));
}
function countedMapToString(map) {
  return _toConsumableArray(map).map(_ref4 => {
    var _ref5 = _slicedToArray(_ref4, 2),
        item = _ref5[0],
        quantity = _ref5[1];

    return "".concat(quantity, " x ").concat(item);
  }).join(", ");
}
/**
 * Sum an array of numbers.
 * @param addends Addends to sum.
 * @param mappingFunction function to turn elements into numbers
 */

function sum(addends, mappingFunction) {
  return addends.reduce((subtotal, element) => subtotal + mappingFunction(element), 0);
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

function arrayContains(item, array) {
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
      var _step$value = _slicedToArray(_step.value, 2),
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
 * Creates a Type Guard function for a string union type defined via an array as const.
 */

function createStringUnionTypeGuardFunction(array) {
  return function (x) {
    return array.includes(x);
  };
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

/***/ }),

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

var global = __webpack_require__(2328); // eslint-disable-next-line es-x/no-object-defineproperty -- safe


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
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function get() {
      return 7;
    }
  })[1] != 7;
});

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(1575);

module.exports = getBuiltIn('navigator', 'userAgent') || '';

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

var uncurryThis = __webpack_require__(1824);

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
  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
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

var FunctionPrototype = Function.prototype; // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe

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

/***/ 1824:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_BIND = __webpack_require__(708);

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);
module.exports = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
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

var Iterators = __webpack_require__(9759);

var wellKnownSymbol = __webpack_require__(7457);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return getMethod(it, ITERATOR) || getMethod(it, '@@iterator') || Iterators[classof(it)];
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

var aCallable = __webpack_require__(5618); // `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod


module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};

/***/ }),

/***/ 2328:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var check = function check(it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


module.exports = // eslint-disable-next-line es-x/no-global-this -- safe
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
// eslint-disable-next-line es-x/no-object-hasown -- safe

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
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
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

var NATIVE_WEAK_MAP = __webpack_require__(1770);

var global = __webpack_require__(2328);

var uncurryThis = __webpack_require__(1824);

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
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);

  set = function set(it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };

  get = function get(it) {
    return wmget(store, it) || {};
  };

  has = function has(it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;

  set = function set(it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
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
// eslint-disable-next-line es-x/no-array-isarray -- safe


module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};

/***/ }),

/***/ 1438:
/***/ ((module) => {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
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

/***/ 2949:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(1438);

module.exports = function (it) {
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

var fails = __webpack_require__(8901);

var isCallable = __webpack_require__(1438);

var hasOwn = __webpack_require__(6957);

var DESCRIPTORS = __webpack_require__(2171);

var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(9411).CONFIGURABLE);

var inspectSource = __webpack_require__(7599);

var InternalStateModule = __webpack_require__(4081);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get; // eslint-disable-next-line es-x/no-object-defineproperty -- safe

var defineProperty = Object.defineProperty;
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () {
    /* empty */
  }, 'length', {
    value: 8
  }).length !== 8;
});
var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
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
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
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
// eslint-disable-next-line es-x/no-math-trunc -- safe

module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};

/***/ }),

/***/ 4938:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es-x/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(2912);

var fails = __webpack_require__(8901); // eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing


module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/***/ }),

/***/ 1770:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var isCallable = __webpack_require__(1438);

var inspectSource = __webpack_require__(7599);

var WeakMap = global.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));

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
// eslint-disable-next-line es-x/no-object-create -- safe

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
// eslint-disable-next-line es-x/no-object-defineproperties -- safe


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

var $TypeError = TypeError; // eslint-disable-next-line es-x/no-object-defineproperty -- safe

var $defineProperty = Object.defineProperty; // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe

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

var IE8_DOM_DEFINE = __webpack_require__(2674); // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe


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
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

/***/ }),

/***/ 5863:
/***/ ((__unused_webpack_module, exports) => {

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
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
// eslint-disable-next-line es-x/no-object-keys -- safe


module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

/***/ }),

/***/ 7395:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


var $propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe

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
/***/ ((module) => {

var $TypeError = TypeError; // `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible

module.exports = function (it) {
  if (it == undefined) throw $TypeError("Can't call method on " + it);
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
  version: '3.24.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
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

/* eslint-disable es-x/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(4938);

module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';

/***/ }),

/***/ 882:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(2171);

var fails = __webpack_require__(8901); // V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334


module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () {
    /* empty */
  }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

/***/ }),

/***/ 7457:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(2328);

var shared = __webpack_require__(8849);

var hasOwn = __webpack_require__(6957);

var uid = __webpack_require__(858);

var NATIVE_SYMBOL = __webpack_require__(4938);

var USE_SYMBOL_AS_UID = __webpack_require__(4719);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;

    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
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

/***/ }),

/***/ 4223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Macro)
/* harmony export */ });
/* unused harmony export main */
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7530);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var libram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(678);
/* harmony import */ var libram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1762);
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Macro = /*#__PURE__*/function (_StrictMacro) {
  _inherits(Macro, _StrictMacro);

  var _super = _createSuper(Macro);

  function Macro() {
    _classCallCheck(this, Macro);

    return _super.apply(this, arguments);
  }

  _createClass(Macro, [{
    key: "delevel",
    value: function delevel() {
      return this.trySkill((0,libram__WEBPACK_IMPORTED_MODULE_1__/* .$skill */ .tm)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Curse of Weaksauce"])))).trySkill((0,libram__WEBPACK_IMPORTED_MODULE_1__/* .$skill */ .tm)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Micrometeorite"])))).tryItem((0,libram__WEBPACK_IMPORTED_MODULE_1__/* .$item */ .xr)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Time-Spinner"])))).trySkill((0,libram__WEBPACK_IMPORTED_MODULE_1__/* .$skill */ .tm)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Summon Love Gnats"]))));
    }
  }, {
    key: "sing",
    value: function sing() {
      return this.skill((0,libram__WEBPACK_IMPORTED_MODULE_1__/* .$skill */ .tm)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Sing Along"]))));
    }
  }, {
    key: "kill",
    value: function kill() {
      return this.while_("!mpbelow ".concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.mpCost)((0,libram__WEBPACK_IMPORTED_MODULE_1__/* .$skill */ .tm)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Saucegeyser"]))))), Macro.skill((0,libram__WEBPACK_IMPORTED_MODULE_1__/* .$skill */ .tm)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Saucegeyser"]))))).while_("!mpbelow ".concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.mpCost)((0,libram__WEBPACK_IMPORTED_MODULE_1__/* .$skill */ .tm)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Saucestorm"]))))), Macro.skill((0,libram__WEBPACK_IMPORTED_MODULE_1__/* .$skill */ .tm)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Saucestorm"]))))).attack().repeat();
    }
  }, {
    key: "default",
    value: function _default() {
      return this.delevel().sing().kill();
    }
  }], [{
    key: "delevel",
    value: function delevel() {
      return new Macro().delevel();
    }
  }, {
    key: "sing",
    value: function sing() {
      return new Macro().sing();
    }
  }, {
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
}(libram__WEBPACK_IMPORTED_MODULE_2__/* .StrictMacro */ .t$);


function main() {
  Macro.load().submit();
}

/***/ }),

/***/ 7530:
/***/ ((module) => {

"use strict";
module.exports = require("kolmafia");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
  "main": () => (/* binding */ main)
});

// EXTERNAL MODULE: external "kolmafia"
var external_kolmafia_ = __webpack_require__(7530);
// EXTERNAL MODULE: ./node_modules/libram/dist/template-string.js
var template_string = __webpack_require__(678);
// EXTERNAL MODULE: ./node_modules/libram/dist/property.js + 2 modules
var property = __webpack_require__(2474);
// EXTERNAL MODULE: ./node_modules/libram/dist/lib.js
var lib = __webpack_require__(3311);
;// CONCATENATED MODULE: ./src/lib.ts
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



function debug(message, color) {
  if (color) {
    (0,external_kolmafia_.print)(message, color);
  } else {
    (0,external_kolmafia_.print)(message);
  }
} // From phccs

function convertMilliseconds(milliseconds) {
  var seconds = milliseconds / 1000;
  var minutes = Math.floor(seconds / 60);
  var secondsLeft = Math.round((seconds - minutes * 60) * 1000) / 1000;
  var hours = Math.floor(minutes / 60);
  var minutesLeft = Math.round(minutes - hours * 60);
  return (hours !== 0 ? "".concat(hours, " hours, ") : "") + (minutesLeft !== 0 ? "".concat(minutesLeft, " minutes, ") : "") + (secondsLeft !== 0 ? "".concat(secondsLeft, " seconds") : "");
} // From phccs

function mapMonster(location, monster) {
  (0,external_kolmafia_.useSkill)((0,template_string/* $skill */.tm)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Map the Monsters"]))));
  if (!(0,property/* get */.U2)("mappingMonsters")) throw new Error("I am not actually mapping anything. Weird!");else {
    while ((0,property/* get */.U2)("mappingMonsters")) {
      (0,external_kolmafia_.visitUrl)((0,external_kolmafia_.toUrl)(location));
      (0,external_kolmafia_.runChoice)(1, "heyscriptswhatsupwinkwink=".concat(monster.id));
    }
  }
}
function tryUse(item) {
  if ((0,lib/* have */.lf)(item)) (0,external_kolmafia_.use)(item);
}
var crimboCarols = (0,template_string/* $effects */.lh)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Do You Crush What I Crush?, Holiday Yoked, Let It Snow/Boil/Stink/Frighten/Grease, All I Want For Crimbo Is Stuff, Crimbo Wrapping"])));
var shavingsBuffs = (0,template_string/* $effects */.lh)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Barbell Moustache, Cowboy Stache, Friendly Chops, Grizzly Beard, Gull-Wing Moustache, Musician's Musician's Moustache, Pointy Wizard Beard, Space Warlord's Beard, Spectacle Moustache, Surrealist's Moustache, Toiletbrush Moustache"])));

function replaceAll(str, searchValue, replaceValue) {
  var newStr = str.replace(searchValue, replaceValue);
  if (newStr === str) return newStr;
  return replaceAll(newStr, searchValue, replaceValue);
}

function printModtrace(modifiers, baseModifier) {
  if (typeof modifiers === "string") {
    return printModtrace([modifiers], modifiers);
  } else {
    if (!baseModifier) {
      var baseModifiers = new Map(modifiers.map(key => {
        return [key, 1];
      }));
      modifiers.forEach(keyThis => {
        var _iterator = _createForOfIteratorHelper(modifiers),
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

          var _iterator2 = _createForOfIteratorHelper(modifiers),
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
        var htmlOutput = (0,external_kolmafia_.cliExecuteOutput)("modtrace ".concat(baseModifier));
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
          (0,external_kolmafia_.print)("Could not find exact string match of ".concat(baseModifier, " in ").concat(modifiers.toString()), "red");
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
          totalVal += (0,external_kolmafia_.familiarWeight)((0,external_kolmafia_.myFamiliar)());
          (0,external_kolmafia_.print)("[Familiar Weight] Base weight (".concat(totalVal, ")"));
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
              (0,external_kolmafia_.print)("[".concat(headers[idx], "] ").concat(rowArr[1], " (").concat(val.toFixed(1), ")"));
            }
          });
          htmlOutput = htmlOutput.substring(idxEnd + 5);
        };

        while (htmlOutput.length > 0) {
          var _ret2 = _loop();

          if (_ret2 === "break") break;
        }

        var total = 0.0;

        var _iterator3 = _createForOfIteratorHelper(headers),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var modifier = _step3.value;

            if (lowerCaseModifiers.includes(modifier.toLowerCase())) {
              var _modifierVals$get2;

              var _totalVal = (_modifierVals$get2 = modifierVals.get(modifier)) !== null && _modifierVals$get2 !== void 0 ? _modifierVals$get2 : 0;

              if (modifier.toLowerCase() === "weapon damage") {
                if ((0,lib/* have */.lf)((0,template_string/* $effect */._G)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Bow-Legged Swagger"]))))) {
                  (0,external_kolmafia_.print)("[Weapon Damage] Bow-Legged Swagger (".concat(_totalVal.toFixed(1), ")"));
                  _totalVal += _totalVal;
                }
              } else if (modifier.toLowerCase() === "weapon damage percent") {
                if ((0,lib/* have */.lf)((0,template_string/* $effect */._G)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Bow-Legged Swagger"]))))) {
                  (0,external_kolmafia_.print)("[Weapon Damage Percent] Bow-Legged Swagger (".concat(_totalVal.toFixed(1), ")"));
                  _totalVal += _totalVal;
                }
              }

              (0,external_kolmafia_.print)("".concat(modifier, " => ").concat(_totalVal.toFixed(1)), "purple");
              total += _totalVal;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        (0,external_kolmafia_.print)("Total ".concat(baseModifier, ": ").concat(total.toFixed(1)), "blue");
      }();

      if (typeof _ret === "object") return _ret.v;
    }
  }
}
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/args.js
function args_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = args_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function args_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return args_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return args_arrayLikeToArray(o, minLen); }

function args_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Args = /*#__PURE__*/function () {
  function Args() {
    _classCallCheck(this, Args);
  }

  _createClass(Args, null, [{
    key: "custom",
    value: function custom(spec, parser, valueHelpName) {
      if ("default" in spec && spec.options) {
        if (!spec.options.map(option => option[0]).includes(spec.default)) {
          throw "Invalid default value ".concat(spec.default);
        }
      }

      return _objectSpread(_objectSpread({}, spec), {}, {
        valueHelpName: valueHelpName,
        parser: parser
      });
    }
  }, {
    key: "string",
    value: function string(spec) {
      return this.custom(spec, value => value, "TEXT");
    }
  }, {
    key: "number",
    value: function number(spec) {
      return this.custom(spec, value => isNaN(Number(value)) ? undefined : Number(value), "NUMBER");
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
    key: "flag",
    value: function flag(spec) {
      return this.custom(spec, value => {
        if (value.toLowerCase() === "true") return true;
        if (value.toLowerCase() === "false") return false;
        return undefined;
      }, "FLAG");
    }
    /**
     * Create a set of input arguments for a script.
     * @param scriptName Prefix for property names; often the name of the script.
     * @param scriptHelp Brief description of this script, for the help message.
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others).
     * @returns An object which can hold parsed argument values. The keys of this
     *    object are identical to the keys in 'args'.
     */

  }, {
    key: "create",
    value: function create(scriptName, scriptHelp, args) {
      var _res;

      var _a, _b;

      for (var k in args) {
        if (k === "help" || args[k].key === "help") throw "help is a reserved argument name";
      }

      var argsWithHelp = _objectSpread(_objectSpread({}, args), {}, {
        help: this.flag({
          help: "Show this message and exit.",
          setting: ""
        })
      });

      var res = (_res = {}, _defineProperty(_res, specSymbol, argsWithHelp), _defineProperty(_res, scriptSymbol, scriptName), _defineProperty(_res, scriptHelpSymbol, scriptHelp), _res); // Fill the default values for each argument.

      for (var _k in argsWithHelp) {
        var v = argsWithHelp[_k];
        if ("default" in v) res[_k] = v["default"];else res[_k] = undefined;
      } // Parse values from settings.


      for (var _k2 in argsWithHelp) {
        var setting = (_a = argsWithHelp[_k2].setting) !== null && _a !== void 0 ? _a : "".concat(scriptName, "_").concat((_b = argsWithHelp[_k2].key) !== null && _b !== void 0 ? _b : _k2);
        if (setting === "") continue; // no setting

        var value_str = (0,property/* get */.U2)(setting, "");
        if (value_str === "") continue;
        res[_k2] = parseAndValidate(argsWithHelp[_k2], "Setting ".concat(setting), value_str);
      }

      return res;
    }
    /**
     * Parse the command line input into the provided script arguments.
     * @param args An object to hold the parsed argument values, from Args.create(*).
     * @param command The command line input.
     */

  }, {
    key: "fill",
    value: function fill(args, command) {
      var _a, _b, _c;

      if (command === undefined || command === "") return;
      var spec = args[specSymbol];
      var keys = new Set();
      var flags = new Set();

      for (var k in spec) {
        if (spec[k].valueHelpName === "FLAG") flags.add((_a = spec[k].key) !== null && _a !== void 0 ? _a : k);else keys.add((_b = spec[k].key) !== null && _b !== void 0 ? _b : k);
      } // Parse new argments from the command line


      var parsed = new CommandParser(command, keys, flags).parse();

      for (var _k3 in spec) {
        var key = (_c = spec[_k3].key) !== null && _c !== void 0 ? _c : _k3;
        var value_str = parsed.get(key);
        if (value_str === undefined) continue; // eslint-disable-next-line @typescript-eslint/no-explicit-any

        args[_k3] = parseAndValidate(spec[_k3], "Argument ".concat(key), value_str);
      }
    }
    /**
     * Parse command line input into a new set of script arguments.
     * @param scriptName Prefix to use in property names; typically the name of the script.
     * @param scriptHelp Brief description of this script, for the help message.
     * @param spec An object specifying the script arguments.
     * @param command The command line input.
     */

  }, {
    key: "parse",
    value: function parse(scriptName, scriptHelp, spec, command) {
      var args = this.create(scriptName, scriptHelp, spec);
      this.fill(args, command);
      return args;
    }
    /**
     * Print a description of the script arguments to the CLI.
     * @param args An object of parsed arguments, from Args.create(*).
     * @param maxOptionsToDisplay If given, do not list more than this many options for each arg.
     */

  }, {
    key: "showHelp",
    value: function showHelp(args, maxOptionsToDisplay) {
      var _a, _b, _c, _d, _e;

      var spec = args[specSymbol];
      var scriptName = args[scriptSymbol];
      var scriptHelp = args[scriptHelpSymbol];
      (0,external_kolmafia_.printHtml)("".concat(scriptHelp));
      (0,external_kolmafia_.printHtml)("<font color='blue'><b>Options:</b></font>");

      for (var k in spec) {
        var arg = spec[k];
        if (arg.hidden) continue;
        var nameText = "<font color='blue'>".concat((_a = arg.key) !== null && _a !== void 0 ? _a : k, "</font>");
        var valueText = arg.valueHelpName === "FLAG" ? "" : "<font color='purple'>".concat(arg.valueHelpName, "</font>");
        var helpText = (_b = arg.help) !== null && _b !== void 0 ? _b : "";
        var defaultText = "default" in arg ? "<font color='#888888'>[default: ".concat(arg.default, "]</font>") : "";
        var settingText = arg.setting === "" ? "" : "<font color='#888888'>[setting: ".concat((_c = arg.setting) !== null && _c !== void 0 ? _c : "".concat(scriptName, "_").concat((_d = arg.key) !== null && _d !== void 0 ? _d : k), "]</font>");
        (0,external_kolmafia_.printHtml)("&nbsp;&nbsp;".concat([nameText, valueText, "-", helpText, defaultText, settingText].join(" ")));
        var valueOptions = (_e = arg.options) !== null && _e !== void 0 ? _e : [];

        if (valueOptions.length < (maxOptionsToDisplay !== null && maxOptionsToDisplay !== void 0 ? maxOptionsToDisplay : Number.MAX_VALUE)) {
          var _iterator = args_createForOfIteratorHelper(valueOptions),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var option = _step.value;

              if (option.length === 1) {
                (0,external_kolmafia_.printHtml)("&nbsp;&nbsp;&nbsp;&nbsp;<font color='blue'>".concat(nameText, "</font> ").concat(option[0]));
              } else {
                (0,external_kolmafia_.printHtml)("&nbsp;&nbsp;&nbsp;&nbsp;<font color='blue'>".concat(nameText, "</font> ").concat(option[0], " - ").concat(option[1]));
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }
    }
  }]);

  return Args;
}();
/**
 * Metadata for the parsed arguments.
 *
 * This information is hidden within the parsed argument object so that it
 * is invisible to the user but available to fill(*) and showHelp(*).
 */

var specSymbol = Symbol("spec");
var scriptSymbol = Symbol("script");
var scriptHelpSymbol = Symbol("scriptHelp");
/**
 * Parse a string into a value for a given argument, throwing if the parsing fails.
 * @param arg An argument that takes values in T.
 * @param source A description of where this value came from, for the error message.
 * @param value The value to parse.
 * @returns the parsed value.
 */

function parseAndValidate(arg, source, value) {
  var parsed_value = arg.parser(value);
  if (parsed_value === undefined) throw "".concat(source, " could not parse value: ").concat(value);
  var options = arg.options;

  if (options) {
    if (!options.map(option => option[0]).includes(parsed_value)) {
      throw "".concat(source, " received invalid value: ").concat(value);
    }
  }

  return parsed_value;
}
/**
 * A parser to extract key/value pairs from a command line input.
 * @member command The command line input.
 * @member keys The set of valid keys that can appear.
 * @member flags The set of valid flags that can appear.
 * @member index An internal marker for the progress of the parser over the input.
 */


var CommandParser = /*#__PURE__*/function () {
  function CommandParser(command, keys, flags) {
    _classCallCheck(this, CommandParser);

    this.command = command;
    this.index = 0;
    this.keys = keys;
    this.flags = flags;
  }
  /**
   * Perform the parsing of (key, value) pairs.
   * @returns The set of extracted (key, value) pairs.
   */


  _createClass(CommandParser, [{
    key: "parse",
    value: function parse() {
      this.index = 0; // reset the parser

      var result = new Map();

      while (!this.finished()) {
        // A flag F may appear as !F to be parsed as false.
        var parsing_negative_flag = false;

        if (this.peek() === "!") {
          parsing_negative_flag = true;
          this.consume(["!"]);
        }

        var key = this.parseKey();

        if (result.has(key)) {
          throw "Duplicate key: ".concat(key);
        }

        if (this.flags.has(key)) {
          // The key corresponds to a flag.
          // Parse [key] as true and ![key] as false.
          result.set(key, parsing_negative_flag ? "false" : "true");
          if (this.peek() === "=") throw "Flag ".concat(key, " cannot be assigned a value");
          if (!this.finished()) this.consume([" "]);
        } else {
          // Parse [key]=[value] or [key] [value]
          this.consume(["=", " "]);
          var value = this.parseValue();
          if (!this.finished()) this.consume([" "]);
          result.set(key, value);
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

      var _iterator2 = args_createForOfIteratorHelper(searchValue),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var value = _step2.value;
          var index = this.command.indexOf(value, this.index);
          if (index !== -1 && index < result) result = index;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
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

      if (!this.keys.has(key) && !this.flags.has(key)) {
        throw "Unknown key: ".concat(key);
      }

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
// EXTERNAL MODULE: ./node_modules/libram/dist/combat.js
var combat = __webpack_require__(1762);
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/combat.js
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || combat_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return combat_arrayLikeToArray(arr); }

function combat_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = combat_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function combat_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return combat_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return combat_arrayLikeToArray(o, minLen); }

function combat_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function combat_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function combat_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function combat_createClass(Constructor, protoProps, staticProps) { if (protoProps) combat_defineProperties(Constructor.prototype, protoProps); if (staticProps) combat_defineProperties(Constructor, staticProps); return Constructor; }




function undelay(macro) {
  if (macro instanceof combat/* Macro */.LE) return macro;else return macro();
}
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
 * 1. The macro given in .startingMacro().
 * 2. The monster-specific macro(s) from .macro().
 * 3. The monster-specific action from .action().
 * 4. The general macro(s) from .macro().
 * 5. The general action from .action().
 */


var CombatStrategy = /*#__PURE__*/function () {
  function CombatStrategy() {
    combat_classCallCheck(this, CombatStrategy);

    this.macros = new Map();
    this.actions = new Map();
  }
  /**
   * Add a macro to perform for this monster. If multiple macros are given
   * for the same monster, they are concatinated.
   *
   * @param macro The macro to perform.
   * @param monsters Which monsters to use the macro on. If not given, add the
   *  macro as a general macro.
   * @param prepend If true, add the macro before all previous macros for
   *    the same monster.
   * @returns this
   */


  combat_createClass(CombatStrategy, [{
    key: "macro",
    value: function macro(_macro, monsters, prepend) {
      var _a, _b;

      if (monsters === undefined) {
        if (this.default_macro === undefined) this.default_macro = [];
        if (prepend) this.default_macro.unshift(_macro);else this.default_macro.push(_macro);
      } else {
        if (monsters instanceof external_kolmafia_.Monster) monsters = [monsters];

        var _iterator = combat_createForOfIteratorHelper(monsters),
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
     * Add a macro to perform at the start of combat.
     * @param macro The macro to perform.
     * @returns this
     */

  }, {
    key: "startingMacro",
    value: function startingMacro(macro) {
      this.starting_macro = macro;
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
      } else if (monsters instanceof external_kolmafia_.Monster) {
        this.actions.set(monsters, _action);
      } else {
        var _iterator2 = combat_createForOfIteratorHelper(monsters),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var monster = _step2.value;
            this.actions.set(monster, _action);
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
      result.starting_macro = this.starting_macro;
      result.default_action = this.default_action;
      if (this.default_macro) result.default_macro = _toConsumableArray(this.default_macro);

      var _iterator3 = combat_createForOfIteratorHelper(this.macros),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var pair = _step3.value;
          result.macros.set(pair[0], _toConsumableArray(pair[1]));
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      var _iterator4 = combat_createForOfIteratorHelper(this.actions),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _pair = _step4.value;
          result.actions.set(_pair[0], _pair[1]);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
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

      var result = new combat/* Macro */.LE(); // If there is macro precursor, do it now

      if (this.starting_macro) {
        result.step(undelay(this.starting_macro));
      } // Perform any monster-specific macros (these may or may not end the fight)


      var monster_macros = new CompressedMacro();
      this.macros.forEach((value, key) => {
        var _Macro;

        monster_macros.add(key, (_Macro = new combat/* Macro */.LE()).step.apply(_Macro, _toConsumableArray(value.map(undelay))));
      });
      result.step(monster_macros.compile()); // Perform any monster-specific actions

      var monster_actions = new CompressedMacro();
      this.actions.forEach((action, key) => {
        var _a, _b;

        var macro = (_a = resources.getMacro(action)) !== null && _a !== void 0 ? _a : (_b = defaults === null || defaults === void 0 ? void 0 : defaults[action]) === null || _b === void 0 ? void 0 : _b.call(defaults, key);
        if (macro) monster_actions.add(key, new combat/* Macro */.LE().step(macro));
      });
      result.step(monster_actions.compile()); // Perform the non-monster specific macro

      if (this.default_macro) result.step.apply(result, _toConsumableArray(this.default_macro.map(undelay))); // Perform the non-monster specific action

      if (this.default_action) {
        var macro = (_a = resources.getMacro(this.default_action)) !== null && _a !== void 0 ? _a : (_b = defaults === null || defaults === void 0 ? void 0 : defaults[this.default_action]) === null || _b === void 0 ? void 0 : _b.call(defaults, location);
        if (macro) result.step(macro);
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
        _inherits(CombatStrategyWithActions, _this);

        var _super = _createSuper(CombatStrategyWithActions);

        function CombatStrategyWithActions() {
          combat_classCallCheck(this, CombatStrategyWithActions);

          return _super.apply(this, arguments);
        }

        return CombatStrategyWithActions;
      }(this); // eslint-disable-next-line @typescript-eslint/no-explicit-any


      var proto = CombatStrategyWithActions.prototype;

      var _iterator5 = combat_createForOfIteratorHelper(actions),
          _step5;

      try {
        var _loop = function _loop() {
          var action = _step5.value;

          proto[action] = function (monsters) {
            return this.action(action, monsters);
          };
        };

        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          _loop();
        } // eslint-disable-next-line @typescript-eslint/no-explicit-any

      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
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
    combat_classCallCheck(this, CompressedMacro);

    this.components = new Map();
  }
  /**
   * Set the macro for a given monster (replacing any previous macros).
   */


  combat_createClass(CompressedMacro, [{
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
      var result = new combat/* Macro */.LE();
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
    combat_classCallCheck(this, CombatResources);

    this.resources = new Map();
  }
  /**
   * Use the provided resource to fulfil the provided action.
   * (If the resource is undefined, this does nothing).
   */


  combat_createClass(CombatResources, [{
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
      if (resource.do instanceof external_kolmafia_.Item) return new combat/* Macro */.LE().item(resource.do);
      if (resource.do instanceof external_kolmafia_.Skill) return new combat/* Macro */.LE().skill(resource.do);
      return resource.do;
    }
  }]);

  return CombatResources;
}();
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/task.js

var outfitSlots = ["hat", "back", "weapon", "offhand", "shirt", "pants", "acc1", "acc2", "acc3", "famequip"];
/**
 * Returns the state of a quest as a numeric value as follows:
 *   "unstarted" => -1
 *   "started" => 0
 *   "stepNUM" => NUM
 *   "finished" => 999
 */

function step(questName) {
  var stringStep = get(questName);
  if (stringStep === "unstarted") return -1;else if (stringStep === "started") return 0;else if (stringStep === "finished") return 999;else {
    if (stringStep.substring(0, 4) !== "step") {
      throw "Quest state parsing error.";
    }

    return parseInt(stringStep.substring(4), 10);
  }
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/logger.js
function logger_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function logger_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function logger_createClass(Constructor, protoProps, staticProps) { if (protoProps) logger_defineProperties(Constructor.prototype, protoProps); if (staticProps) logger_defineProperties(Constructor, staticProps); return Constructor; }

function logger_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var defaultHandlers = {
  info: message => (0,external_kolmafia_.printHtml)("<b>[Libram]</b> ".concat(message)),
  warning: message => (0,external_kolmafia_.printHtml)("<span style=\"background: orange; color: white;\"><b>[Libram]</b> ".concat(message, "</span>")),
  error: _error => (0,external_kolmafia_.printHtml)("<span style=\"background: red; color: white;\"><b>[Libram]</b> ".concat(_error.toString(), "</span>"))
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
// EXTERNAL MODULE: ./node_modules/libram/dist/utils.js
var utils = __webpack_require__(8588);
;// CONCATENATED MODULE: ./node_modules/libram/dist/maximize.js
var maximize_templateObject, maximize_templateObject2, maximize_templateObject3, maximize_templateObject4, maximize_templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || maximize_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function maximize_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = maximize_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function maximize_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function maximize_createClass(Constructor, protoProps, staticProps) { if (protoProps) maximize_defineProperties(Constructor.prototype, protoProps); if (staticProps) maximize_defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function maximize_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function maximize_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function maximize_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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
  var _addendums$updateOnFa, _addendums$updateOnCa, _addendums$useOutfitC, _addendums$forceEquip, _addendums$preventEqu, _addendums$bonusEquip, _addendums$onlySlot, _addendums$preventSlo, _addendums$forceUpdat;

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
    forceUpdate: (_addendums$forceUpdat = addendums.forceUpdate) !== null && _addendums$forceUpdat !== void 0 ? _addendums$forceUpdat : defaultOptions.forceUpdate
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
  forceUpdate: false
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
} // Subset of slots that are valid for caching.

var cachedSlots = (0,template_string/* $slots */.ei)(maximize_templateObject || (maximize_templateObject = maximize_taggedTemplateLiteral(["hat, weapon, off-hand, back, shirt, pants, acc1, acc2, acc3, familiar"])));

var CacheEntry = function CacheEntry(equipment, rider, familiar, canEquipItemCount) {
  maximize_classCallCheck(this, CacheEntry);

  maximize_defineProperty(this, "equipment", void 0);

  maximize_defineProperty(this, "rider", void 0);

  maximize_defineProperty(this, "familiar", void 0);

  maximize_defineProperty(this, "canEquipItemCount", void 0);

  this.equipment = equipment;
  this.rider = rider;
  this.familiar = familiar;
  this.canEquipItemCount = canEquipItemCount;
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
  }]);

  return OutfitLRUCache;
}();
/**
 * Save current equipment as KoL-native outfit.
 * @param name Name of new outfit.
 */


maximize_defineProperty(OutfitLRUCache, "OUTFIT_PREFIX", "Script Outfit");

function saveOutfit(name) {
  (0,external_kolmafia_.cliExecute)("outfit save ".concat(name));
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
  var stats = (0,template_string/* $stats */.gw)(maximize_templateObject2 || (maximize_templateObject2 = maximize_taggedTemplateLiteral(["Muscle, Mysticality, Moxie"]))).map(stat => Math.min((0,external_kolmafia_.myBasestat)(stat), 300));

  if (stats.every((value, index) => value === cachedStats[index])) {
    return cachedCanEquipItemCount;
  }

  cachedStats = stats;
  cachedCanEquipItemCount = external_kolmafia_.Item.all().filter(item => (0,external_kolmafia_.canEquip)(item)).length;
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

  if (options.updateOnFamiliarChange && (0,external_kolmafia_.myFamiliar)() !== entry.familiar) {
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
    if (!(0,external_kolmafia_.isWearingOutfit)(outfitName)) {
      (0,external_kolmafia_.outfit)(outfitName);
    }

    var familiarEquip = entry.equipment.get((0,template_string/* $slot */.Jh)(maximize_templateObject3 || (maximize_templateObject3 = maximize_taggedTemplateLiteral(["familiar"]))));
    if (familiarEquip) (0,external_kolmafia_.equip)((0,template_string/* $slot */.Jh)(maximize_templateObject4 || (maximize_templateObject4 = maximize_taggedTemplateLiteral(["familiar"]))), familiarEquip);
  } else {
    var _iterator = maximize_createForOfIteratorHelper(entry.equipment),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
            slot = _step$value[0],
            item = _step$value[1];

        if ((0,external_kolmafia_.equippedItem)(slot) !== item && (0,external_kolmafia_.availableAmount)(item) > 0) {
          (0,external_kolmafia_.equip)(slot, item);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (verifyCached(entry) && options.useOutfitCaching) {
      var _outfitName = outfitCache.insert(entry);

      logger.info("Saving equipment to outfit ".concat(_outfitName, "."));
      saveOutfit(_outfitName);
    }
  }

  if ((0,external_kolmafia_.equippedAmount)((0,template_string/* $item */.xr)(maximize_templateObject5 || (maximize_templateObject5 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))) > 0 && entry.rider.get((0,template_string/* $item */.xr)(_templateObject6 || (_templateObject6 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))))) {
    (0,external_kolmafia_.enthroneFamiliar)(entry.rider.get((0,template_string/* $item */.xr)(_templateObject7 || (_templateObject7 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))) || (0,template_string/* $familiar */.HP)(_templateObject8 || (_templateObject8 = maximize_taggedTemplateLiteral(["none"]))));
  }

  if ((0,external_kolmafia_.equippedAmount)((0,template_string/* $item */.xr)(_templateObject9 || (_templateObject9 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))) > 0 && entry.rider.get((0,template_string/* $item */.xr)(_templateObject10 || (_templateObject10 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))))) {
    (0,external_kolmafia_.bjornifyFamiliar)(entry.rider.get((0,template_string/* $item */.xr)(_templateObject11 || (_templateObject11 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))) || (0,template_string/* $familiar */.HP)(_templateObject12 || (_templateObject12 = maximize_taggedTemplateLiteral(["none"]))));
  }
}

var slotStructure = [(0,template_string/* $slots */.ei)(_templateObject13 || (_templateObject13 = maximize_taggedTemplateLiteral(["hat"]))), (0,template_string/* $slots */.ei)(_templateObject14 || (_templateObject14 = maximize_taggedTemplateLiteral(["back"]))), (0,template_string/* $slots */.ei)(_templateObject15 || (_templateObject15 = maximize_taggedTemplateLiteral(["shirt"]))), (0,template_string/* $slots */.ei)(_templateObject16 || (_templateObject16 = maximize_taggedTemplateLiteral(["weapon, off-hand"]))), (0,template_string/* $slots */.ei)(_templateObject17 || (_templateObject17 = maximize_taggedTemplateLiteral(["pants"]))), (0,template_string/* $slots */.ei)(_templateObject18 || (_templateObject18 = maximize_taggedTemplateLiteral(["acc1, acc2, acc3"]))), (0,template_string/* $slots */.ei)(_templateObject19 || (_templateObject19 = maximize_taggedTemplateLiteral(["familiar"])))];
/**
 * Verifies that a CacheEntry was applied successfully.
 * @param entry The CacheEntry to verify
 * @returns If all desired equipment was appliedn in the correct slots.
 */

function verifyCached(entry) {
  var success = true;

  var _iterator2 = maximize_createForOfIteratorHelper(slotStructure),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var slotGroup = _step2.value;
      var desiredSlots = slotGroup.map(slot => {
        var _entry$equipment$get;

        return [slot, (_entry$equipment$get = entry.equipment.get(slot)) !== null && _entry$equipment$get !== void 0 ? _entry$equipment$get : null];
      }).filter(_ref => {
        var _ref2 = _slicedToArray(_ref, 2),
            item = _ref2[1];

        return item !== null;
      });
      var desiredSet = desiredSlots.map(_ref3 => {
        var _ref4 = _slicedToArray(_ref3, 2),
            item = _ref4[1];

        return item;
      });
      var equippedSet = desiredSlots.map(_ref5 => {
        var _ref6 = _slicedToArray(_ref5, 1),
            slot = _ref6[0];

        return (0,external_kolmafia_.equippedItem)(slot);
      });

      if (!(0,utils/* setEqual */.$x)(desiredSet, equippedSet)) {
        logger.warning("Failed to apply cached ".concat(desiredSet.join(", "), " in ").concat(slotGroup.join(", "), "."));
        success = false;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  if ((0,external_kolmafia_.equippedAmount)((0,template_string/* $item */.xr)(_templateObject20 || (_templateObject20 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))) > 0 && entry.rider.get((0,template_string/* $item */.xr)(_templateObject21 || (_templateObject21 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))))) {
    if (entry.rider.get((0,template_string/* $item */.xr)(_templateObject22 || (_templateObject22 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))) !== (0,external_kolmafia_.myEnthronedFamiliar)()) {
      logger.warning("Failed to apply ".concat(entry.rider.get((0,template_string/* $item */.xr)(_templateObject23 || (_templateObject23 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))), " in ").concat((0,template_string/* $item */.xr)(_templateObject24 || (_templateObject24 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))), "."));
      success = false;
    }
  }

  if ((0,external_kolmafia_.equippedAmount)((0,template_string/* $item */.xr)(_templateObject25 || (_templateObject25 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))) > 0 && entry.rider.get((0,template_string/* $item */.xr)(_templateObject26 || (_templateObject26 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))))) {
    if (entry.rider.get((0,template_string/* $item */.xr)(_templateObject27 || (_templateObject27 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))) !== (0,external_kolmafia_.myBjornedFamiliar)()) {
      logger.warning("Failed to apply".concat(entry.rider.get((0,template_string/* $item */.xr)(_templateObject28 || (_templateObject28 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))), " in ").concat((0,template_string/* $item */.xr)(_templateObject29 || (_templateObject29 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))), "."));
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

  var _iterator3 = maximize_createForOfIteratorHelper(cachedSlots),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _slot2 = _step3.value;
      equipment.set(_slot2, (0,external_kolmafia_.equippedItem)(_slot2));
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  if ((0,external_kolmafia_.equippedAmount)((0,template_string/* $item */.xr)(_templateObject30 || (_templateObject30 = maximize_taggedTemplateLiteral(["card sleeve"])))) > 0) {
    equipment.set((0,template_string/* $slot */.Jh)(_templateObject31 || (_templateObject31 = maximize_taggedTemplateLiteral(["card-sleeve"]))), (0,external_kolmafia_.equippedItem)((0,template_string/* $slot */.Jh)(_templateObject32 || (_templateObject32 = maximize_taggedTemplateLiteral(["card-sleeve"])))));
  }

  if ((0,external_kolmafia_.equippedAmount)((0,template_string/* $item */.xr)(_templateObject33 || (_templateObject33 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))) > 0) {
    rider.set((0,template_string/* $item */.xr)(_templateObject34 || (_templateObject34 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))), (0,external_kolmafia_.myEnthronedFamiliar)());
  }

  if ((0,external_kolmafia_.equippedAmount)((0,template_string/* $item */.xr)(_templateObject35 || (_templateObject35 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))) > 0) {
    rider.set((0,template_string/* $item */.xr)(_templateObject36 || (_templateObject36 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))), (0,external_kolmafia_.myBjornedFamiliar)());
  }

  if (options.preventSlot && options.preventSlot.length > 0) {
    var _iterator4 = maximize_createForOfIteratorHelper(options.preventSlot),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var slot = _step4.value;
        equipment.delete(slot);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    if (options.preventSlot.includes((0,template_string/* $slot */.Jh)(_templateObject37 || (_templateObject37 = maximize_taggedTemplateLiteral(["buddy-bjorn"]))))) {
      rider.delete((0,template_string/* $item */.xr)(_templateObject38 || (_templateObject38 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))));
    }

    if (options.preventSlot.includes((0,template_string/* $slot */.Jh)(_templateObject39 || (_templateObject39 = maximize_taggedTemplateLiteral(["crown-of-thrones"]))))) {
      rider.delete((0,template_string/* $item */.xr)(_templateObject40 || (_templateObject40 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))));
    }
  }

  if (options.onlySlot && options.onlySlot.length > 0) {
    var _iterator5 = maximize_createForOfIteratorHelper(external_kolmafia_.Slot.all()),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _slot = _step5.value;

        if (!options.onlySlot.includes(_slot)) {
          equipment.delete(_slot);
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    if (!options.onlySlot.includes((0,template_string/* $slot */.Jh)(_templateObject41 || (_templateObject41 = maximize_taggedTemplateLiteral(["buddy-bjorn"]))))) {
      rider.delete((0,template_string/* $item */.xr)(_templateObject42 || (_templateObject42 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))));
    }

    if (!options.onlySlot.includes((0,template_string/* $slot */.Jh)(_templateObject43 || (_templateObject43 = maximize_taggedTemplateLiteral(["crown-of-thrones"]))))) {
      rider.delete((0,template_string/* $item */.xr)(_templateObject44 || (_templateObject44 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))));
    }
  }

  var entry = new CacheEntry(equipment, rider, (0,external_kolmafia_.myFamiliar)(), canEquipItemCount());
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

  var objective = [].concat(maximize_toConsumableArray(objectives.sort()), maximize_toConsumableArray(forceEquip.map(item => "equip ".concat(item)).sort()), maximize_toConsumableArray(preventEquip.map(item => "-equip ".concat(item)).sort()), maximize_toConsumableArray(onlySlot.map(slot => "".concat(slot)).sort()), maximize_toConsumableArray(preventSlot.map(slot => "-".concat(slot)).sort()), maximize_toConsumableArray(Array.from(bonusEquip.entries()).filter(_ref7 => {
    var _ref8 = _slicedToArray(_ref7, 2),
        bonus = _ref8[1];

    return bonus !== 0;
  }).map(_ref9 => {
    var _ref10 = _slicedToArray(_ref9, 2),
        item = _ref10[0],
        bonus = _ref10[1];

    return "".concat(Math.round(bonus * 100) / 100, " bonus ").concat(item);
  }).sort())).join(", ");
  var cacheEntry = checkCache(objective, fullOptions);

  if (cacheEntry && !forceUpdate) {
    logger.info("Equipment found in maximize cache, equipping...");
    applyCached(cacheEntry, fullOptions);

    if (verifyCached(cacheEntry)) {
      logger.info("Equipped cached ".concat(objective));
      return true;
    }

    logger.warning("Maximize cache application failed, maximizing...");
  }

  var result = (0,external_kolmafia_.maximize)(objective, false);
  saveCached(objective, fullOptions);
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
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/outfit.js
var outfit_templateObject, outfit_templateObject2, outfit_templateObject3, outfit_templateObject4, outfit_templateObject5, outfit_templateObject6, outfit_templateObject7, outfit_templateObject8, outfit_templateObject9, outfit_templateObject10, outfit_templateObject11, outfit_templateObject12, outfit_templateObject13, outfit_templateObject14, outfit_templateObject15, outfit_templateObject16, outfit_templateObject17, outfit_templateObject18, outfit_templateObject19, outfit_templateObject20, outfit_templateObject21, outfit_templateObject22, outfit_templateObject23, outfit_templateObject24, outfit_templateObject25, outfit_templateObject26, outfit_templateObject27, outfit_templateObject28, outfit_templateObject29, outfit_templateObject30, outfit_templateObject31, outfit_templateObject32, outfit_templateObject33, outfit_templateObject34, outfit_templateObject35;

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




var weaponHands = i => i ? (0,external_kolmafia_.weaponHands)(i) : 0;

var Outfit = /*#__PURE__*/function () {
  function Outfit() {
    outfit_classCallCheck(this, Outfit);

    this.equips = new Map();
    this.accessories = [];
    this.skipDefaults = false;
  }

  outfit_createClass(Outfit, [{
    key: "countEquipped",
    value: function countEquipped(item) {
      return [].concat(outfit_toConsumableArray(this.equips.values()), outfit_toConsumableArray(this.accessories)).filter(i => i === item).length;
    }
  }, {
    key: "isAvailable",
    value: function isAvailable(item) {
      var _a;

      if ((_a = this.avoid) === null || _a === void 0 ? void 0 : _a.includes(item)) return false;
      if (!(0,lib/* have */.lf)(item, this.countEquipped(item) + 1)) return false;
      if ((0,external_kolmafia_.booleanModifier)(item, "Single Equip") && this.countEquipped(item) > 0) return false;
      return true;
    }
  }, {
    key: "haveEquipped",
    value: function haveEquipped(item, slot) {
      if (slot === undefined) return this.countEquipped(item) > 0;
      if ((0,template_string/* $slots */.ei)(outfit_templateObject || (outfit_templateObject = outfit_taggedTemplateLiteral(["acc1, acc2, acc3"]))).includes(slot)) return this.accessories.includes(item); // TODO handle equipping multiple of an accessory

      return this.equips.get(slot) === item;
    }
  }, {
    key: "equipItemNone",
    value: function equipItemNone(item, slot) {
      if (item !== (0,template_string/* $item */.xr)(outfit_templateObject2 || (outfit_templateObject2 = outfit_taggedTemplateLiteral(["none"])))) return false;
      if (slot === undefined) return true;
      if (this.equips.has(slot)) return false;
      this.equips.set(slot, item);
      return true;
    }
  }, {
    key: "equipNonAccessory",
    value: function equipNonAccessory(item, slot) {
      if ((0,template_string/* $slots */.ei)(outfit_templateObject3 || (outfit_templateObject3 = outfit_taggedTemplateLiteral(["acc1, acc2, acc3"]))).includes((0,external_kolmafia_.toSlot)(item))) return false;
      if (slot !== undefined && slot !== (0,external_kolmafia_.toSlot)(item)) return false;
      if (this.equips.has((0,external_kolmafia_.toSlot)(item))) return false;

      switch ((0,external_kolmafia_.toSlot)(item)) {
        case (0,template_string/* $slot */.Jh)(outfit_templateObject4 || (outfit_templateObject4 = outfit_taggedTemplateLiteral(["off-hand"]))):
          if (this.equips.has((0,template_string/* $slot */.Jh)(outfit_templateObject5 || (outfit_templateObject5 = outfit_taggedTemplateLiteral(["weapon"])))) && weaponHands(this.equips.get((0,template_string/* $slot */.Jh)(outfit_templateObject6 || (outfit_templateObject6 = outfit_taggedTemplateLiteral(["weapon"]))))) !== 1) {
            return false;
          }

          break;

        case (0,template_string/* $slot */.Jh)(outfit_templateObject7 || (outfit_templateObject7 = outfit_taggedTemplateLiteral(["familiar"]))):
          if (this.familiar !== undefined && !(0,external_kolmafia_.canEquip)(this.familiar, item)) return false;
      }

      if ((0,external_kolmafia_.toSlot)(item) !== (0,template_string/* $slot */.Jh)(outfit_templateObject8 || (outfit_templateObject8 = outfit_taggedTemplateLiteral(["familiar"]))) && !(0,external_kolmafia_.canEquip)(item)) return false;
      this.equips.set((0,external_kolmafia_.toSlot)(item), item);
      return true;
    }
  }, {
    key: "equipAccessory",
    value: function equipAccessory(item, slot) {
      if (![undefined].concat(outfit_toConsumableArray((0,template_string/* $slots */.ei)(outfit_templateObject9 || (outfit_templateObject9 = outfit_taggedTemplateLiteral(["acc1, acc2, acc3"]))))).includes(slot)) return false;
      if ((0,external_kolmafia_.toSlot)(item) !== (0,template_string/* $slot */.Jh)(outfit_templateObject10 || (outfit_templateObject10 = outfit_taggedTemplateLiteral(["acc1"])))) return false;
      if (this.accessories.length >= 3) return false;
      if (!(0,external_kolmafia_.canEquip)(item)) return false;
      this.accessories.push(item);
      return true;
    }
  }, {
    key: "equipUsingDualWield",
    value: function equipUsingDualWield(item, slot) {
      if (![undefined, (0,template_string/* $slot */.Jh)(outfit_templateObject11 || (outfit_templateObject11 = outfit_taggedTemplateLiteral(["off-hand"])))].includes(slot)) return false;
      if ((0,external_kolmafia_.toSlot)(item) !== (0,template_string/* $slot */.Jh)(outfit_templateObject12 || (outfit_templateObject12 = outfit_taggedTemplateLiteral(["weapon"])))) return false;

      if (this.equips.has((0,template_string/* $slot */.Jh)(outfit_templateObject13 || (outfit_templateObject13 = outfit_taggedTemplateLiteral(["weapon"])))) && weaponHands(this.equips.get((0,template_string/* $slot */.Jh)(outfit_templateObject14 || (outfit_templateObject14 = outfit_taggedTemplateLiteral(["weapon"]))))) !== 1) {
        return false;
      }

      if (this.equips.has((0,template_string/* $slot */.Jh)(outfit_templateObject15 || (outfit_templateObject15 = outfit_taggedTemplateLiteral(["off-hand"]))))) return false;
      if (!(0,lib/* have */.lf)((0,template_string/* $skill */.tm)(outfit_templateObject16 || (outfit_templateObject16 = outfit_taggedTemplateLiteral(["Double-Fisted Skull Smashing"]))))) return false;
      if (weaponHands(item) !== 1) return false;
      if (!(0,external_kolmafia_.canEquip)(item)) return false;
      this.equips.set((0,template_string/* $slot */.Jh)(outfit_templateObject17 || (outfit_templateObject17 = outfit_taggedTemplateLiteral(["off-hand"]))), item);
      return true;
    }
  }, {
    key: "getHoldingFamiliar",
    value: function getHoldingFamiliar(item) {
      switch ((0,external_kolmafia_.toSlot)(item)) {
        case (0,template_string/* $slot */.Jh)(outfit_templateObject18 || (outfit_templateObject18 = outfit_taggedTemplateLiteral(["weapon"]))):
          return (0,template_string/* $familiar */.HP)(outfit_templateObject19 || (outfit_templateObject19 = outfit_taggedTemplateLiteral(["Disembodied Hand"])));

        case (0,template_string/* $slot */.Jh)(outfit_templateObject20 || (outfit_templateObject20 = outfit_taggedTemplateLiteral(["off-hand"]))):
          return (0,template_string/* $familiar */.HP)(outfit_templateObject21 || (outfit_templateObject21 = outfit_taggedTemplateLiteral(["Left-Hand Man"])));

        default:
          return undefined;
      }
    }
  }, {
    key: "equipUsingFamiliar",
    value: function equipUsingFamiliar(item, slot) {
      if (![undefined, (0,template_string/* $slot */.Jh)(outfit_templateObject22 || (outfit_templateObject22 = outfit_taggedTemplateLiteral(["familiar"])))].includes(slot)) return false;
      if (this.equips.has((0,template_string/* $slot */.Jh)(outfit_templateObject23 || (outfit_templateObject23 = outfit_taggedTemplateLiteral(["familiar"]))))) return false;
      if ((0,external_kolmafia_.booleanModifier)(item, "Single Equip")) return false;
      var familiar = this.getHoldingFamiliar(item);
      if (familiar === undefined || !this.equip(familiar)) return false;
      this.equips.set((0,template_string/* $slot */.Jh)(outfit_templateObject24 || (outfit_templateObject24 = outfit_taggedTemplateLiteral(["familiar"]))), item);
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
      if (familiar !== (0,template_string/* $familiar */.HP)(outfit_templateObject25 || (outfit_templateObject25 = outfit_taggedTemplateLiteral(["none"]))) && !(0,lib/* have */.lf)(familiar)) return false;
      var item = this.equips.get((0,template_string/* $slot */.Jh)(outfit_templateObject26 || (outfit_templateObject26 = outfit_taggedTemplateLiteral(["familiar"]))));
      if (item !== undefined && item !== (0,template_string/* $item */.xr)(outfit_templateObject27 || (outfit_templateObject27 = outfit_taggedTemplateLiteral(["none"]))) && !(0,external_kolmafia_.canEquip)(familiar, item)) return false;
      this.familiar = familiar;
      return true;
    }
  }, {
    key: "equip",
    value: function equip(item, slot) {
      if (Array.isArray(item)) {
        if (slot !== undefined) return item.some(val => this.equip(val, slot));
        return item.every(val => this.equip(val));
      }

      return item instanceof external_kolmafia_.Item ? this.equipItem(item, slot) : this.equipFamiliar(item);
    }
  }, {
    key: "canEquip",
    value: function canEquip(item) {
      var outfit = this.clone();
      if (!Array.isArray(item)) item = [item];
      return item.every(val => outfit.equip(val));
    }
  }, {
    key: "dress",
    value: function dress() {
      if (this.familiar) (0,external_kolmafia_.useFamiliar)(this.familiar);
      var targetEquipment = Array.from(this.equips.values());
      var accessorySlots = (0,template_string/* $slots */.ei)(outfit_templateObject28 || (outfit_templateObject28 = outfit_taggedTemplateLiteral(["acc1, acc2, acc3"])));

      var _iterator = outfit_createForOfIteratorHelper((0,template_string/* $slots */.ei)(outfit_templateObject32 || (outfit_templateObject32 = outfit_taggedTemplateLiteral(["weapon, off-hand, hat, shirt, pants, familiar, buddy-bjorn, crown-of-thrones, back"])))),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var slot = _step.value;
          if (targetEquipment.includes((0,external_kolmafia_.equippedItem)(slot)) && this.equips.get(slot) !== (0,external_kolmafia_.equippedItem)(slot)) (0,external_kolmafia_.equip)(slot, (0,template_string/* $item */.xr)(outfit_templateObject33 || (outfit_templateObject33 = outfit_taggedTemplateLiteral(["none"]))));
        } //Order is anchored here to prevent DFSS shenanigans

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = outfit_createForOfIteratorHelper((0,template_string/* $slots */.ei)(outfit_templateObject34 || (outfit_templateObject34 = outfit_taggedTemplateLiteral(["weapon, off-hand, hat, back, shirt, pants, familiar, buddy-bjorn, crown-of-thrones"])))),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _slot = _step2.value;
          var equipment = this.equips.get(_slot);
          if (equipment) (0,external_kolmafia_.equip)(_slot, equipment);
        } //We don't care what order accessories are equipped in, just that they're equipped

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var accessoryEquips = this.accessories;

      var _iterator3 = outfit_createForOfIteratorHelper(accessorySlots),
          _step3;

      try {
        var _loop = function _loop() {
          var slot = _step3.value;
          var toEquip = accessoryEquips.find(equip => (0,external_kolmafia_.equippedAmount)(equip) < accessoryEquips.filter(accessory => accessory === equip).length);
          if (!toEquip) return "break";
          var currentEquip = (0,external_kolmafia_.equippedItem)(slot); //We never want an empty accessory slot

          if (currentEquip === (0,template_string/* $item */.xr)(outfit_templateObject35 || (outfit_templateObject35 = outfit_taggedTemplateLiteral(["none"]))) || (0,external_kolmafia_.equippedAmount)(currentEquip) > accessoryEquips.filter(accessory => accessory === currentEquip).length) {
            (0,external_kolmafia_.equip)(slot, toEquip);
          }
        };

        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _ret = _loop();

          if (_ret === "break") break;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      if (this.modifier) {
        // Handle familiar equipment manually to avoid weird Left-Hand Man behavior
        var fam_equip = this.equips.get((0,template_string/* $slot */.Jh)(outfit_templateObject29 || (outfit_templateObject29 = outfit_taggedTemplateLiteral(["familiar"]))));

        if (fam_equip !== undefined) {
          var index = targetEquipment.indexOf(fam_equip);
          if (index > -1) targetEquipment.splice(index, 1);
        }

        var requirements = Requirement.merge([new Requirement([this.modifier], {
          forceEquip: targetEquipment.concat.apply(targetEquipment, outfit_toConsumableArray(accessoryEquips))
        })]);

        if (fam_equip !== undefined) {
          requirements = Requirement.merge([requirements, new Requirement([], {
            preventSlot: [(0,template_string/* $slot */.Jh)(outfit_templateObject30 || (outfit_templateObject30 = outfit_taggedTemplateLiteral(["familiar"])))]
          })]);
        }

        if (this.avoid !== undefined) {
          requirements = Requirement.merge([requirements, new Requirement([], {
            preventEquip: this.avoid
          })]);
        }

        if (!requirements.maximize()) {
          throw "Unable to maximize ".concat(this.modifier);
        }
      }

      if (this.familiar !== undefined && (0,external_kolmafia_.myFamiliar)() !== this.familiar || !outfit_toConsumableArray(this.equips).every(_ref => {
        var _ref2 = outfit_slicedToArray(_ref, 2),
            slot = _ref2[0],
            item = _ref2[1];

        return (0,external_kolmafia_.equippedItem)(slot) === item;
      }) || !this.accessories.every(item => (0,template_string/* $slots */.ei)(outfit_templateObject31 || (outfit_templateObject31 = outfit_taggedTemplateLiteral(["acc1, acc2, acc3"]))).some(slot => (0,external_kolmafia_.equippedItem)(slot) === item))) {
        throw "Failed to fully dress";
      }
    }
  }, {
    key: "clone",
    value: function clone() {
      var result = new Outfit();
      result.equips = new Map(this.equips);
      result.accessories = outfit_toConsumableArray(this.accessories);
      result.skipDefaults = this.skipDefaults;
      result.familiar = this.familiar;
      result.modifier = this.modifier;
      result.avoid = this.avoid;
      return result;
    }
  }]);

  return Outfit;
}();
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/engine.js
var engine_templateObject, engine_templateObject2, engine_templateObject3;

function engine_toConsumableArray(arr) { return engine_arrayWithoutHoles(arr) || engine_iterableToArray(arr) || engine_unsupportedIterableToArray(arr) || engine_nonIterableSpread(); }

function engine_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function engine_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function engine_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return engine_arrayLikeToArray(arr); }

function engine_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function engine_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = engine_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function engine_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return engine_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return engine_arrayLikeToArray(o, minLen); }

function engine_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function engine_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function engine_createClass(Constructor, protoProps, staticProps) { if (protoProps) engine_defineProperties(Constructor.prototype, protoProps); if (staticProps) engine_defineProperties(Constructor, staticProps); return Constructor; }

function engine_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var EngineOptions = function EngineOptions() {
  engine_classCallCheck(this, EngineOptions);
};
var Engine = /*#__PURE__*/function () {
  /**
   * Create the engine.
   * @param tasks A list of tasks for looking up task dependencies.
   * @param options Basic configuration of the engine.
   */
  function Engine(tasks, options) {
    engine_classCallCheck(this, Engine);

    this.attempts = {};
    this.propertyManager = new property/* PropertiesManager */.Jr();
    this.tasks_by_name = new Map();
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
      var _a, _b, _c, _d;

      (0,external_kolmafia_.print)("");
      (0,external_kolmafia_.print)("Executing ".concat(task.name), "blue"); // Acquire any items and effects first, possibly for later execution steps.

      this.acquireItems(task);
      this.acquireEffects(task); // Prepare the outfit, with resources.

      var task_combat = (_b = (_a = task.combat) === null || _a === void 0 ? void 0 : _a.clone()) !== null && _b !== void 0 ? _b : new CombatStrategy();
      var outfit = this.createOutfit(task);
      var task_resources = new CombatResources();
      this.customize(task, outfit, task_combat, task_resources);
      this.dress(task, outfit); // Prepare combat and choices

      var macro = task_combat.compile(task_resources, (_c = this.options) === null || _c === void 0 ? void 0 : _c.combat_defaults, task.do instanceof external_kolmafia_.Location ? task.do : undefined);
      macro.save();
      this.setChoices(task, this.propertyManager); // Actually perform the task

      var _iterator3 = engine_createForOfIteratorHelper(task_resources.all()),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var resource = _step3.value;
          (_d = resource.prepare) === null || _d === void 0 ? void 0 : _d.call(resource);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      this.prepare(task);
      this.do(task);

      while (this.shouldRepeatAdv(task)) {
        (0,property/* set */.t8)("lastEncounter", "");
        this.do(task);
      }

      this.post(task); // Mark that we tried the task, and apply limits

      this.markAttempt(task);
      if (!task.completed()) this.checkLimits(task);
    }
    /**
     * Acquire all items for the task.
     * @param task The current executing task.
     */

  }, {
    key: "acquireItems",
    value: function acquireItems(task) {
      var _a;

      var _iterator4 = engine_createForOfIteratorHelper(task.acquire || []),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var to_get = _step4.value;
          var num_needed = (_a = to_get.num) !== null && _a !== void 0 ? _a : 1;
          var num_have = (0,external_kolmafia_.itemAmount)(to_get.item) + (0,external_kolmafia_.equippedAmount)(to_get.item);
          if (num_needed <= num_have) continue;
          if (to_get.useful !== undefined && !to_get.useful()) continue;

          if (to_get.get) {
            to_get.get();
          } else if (to_get.price !== undefined) {
            (0,external_kolmafia_.buy)(to_get.item, num_needed - num_have, to_get.price);
          } else if (Object.keys((0,external_kolmafia_.getRelated)(to_get.item, "fold")).length > 0) {
            (0,external_kolmafia_.cliExecute)("fold ".concat(to_get.item));
          } else {
            (0,external_kolmafia_.retrieveItem)(to_get.item, num_needed);
          }

          if ((0,external_kolmafia_.itemAmount)(to_get.item) + (0,external_kolmafia_.equippedAmount)(to_get.item) < num_needed && !to_get.optional) {
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
      var _a, _b, _c;

      var songs = (_b = (_a = task.effects) === null || _a === void 0 ? void 0 : _a.filter(effect => (0,lib/* isSong */.rU)(effect))) !== null && _b !== void 0 ? _b : [];
      if (songs.length > maxSongs()) throw "Too many AT songs";
      var extraSongs = Object.keys((0,external_kolmafia_.myEffects)()).map(effectName => (0,external_kolmafia_.toEffect)(effectName)).filter(effect => (0,lib/* isSong */.rU)(effect) && !songs.includes(effect));

      while (songs.length + extraSongs.length > maxSongs()) {
        var toRemove = extraSongs.pop();

        if (toRemove === undefined) {
          break;
        } else {
          (0,lib/* uneffect */.Lo)(toRemove);
        }
      }

      var _iterator5 = engine_createForOfIteratorHelper((_c = task.effects) !== null && _c !== void 0 ? _c : []),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var effect = _step5.value;
          (0,lib/* ensureEffect */.pq)(effect);
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
      var _a, _b, _c;

      var spec = typeof task.outfit === "function" ? task.outfit() : task.outfit;
      var outfit = new Outfit();

      if (spec !== undefined) {
        var _iterator6 = engine_createForOfIteratorHelper(outfitSlots),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var slotName = _step6.value;
            var slot = (_a = new Map([["famequip", (0,template_string/* $slot */.Jh)(engine_templateObject || (engine_templateObject = engine_taggedTemplateLiteral(["familiar"])))], ["offhand", (0,template_string/* $slot */.Jh)(engine_templateObject2 || (engine_templateObject2 = engine_taggedTemplateLiteral(["off-hand"])))]]).get(slotName)) !== null && _a !== void 0 ? _a : (0,external_kolmafia_.toSlot)(slotName);
            var itemOrItems = spec[slotName];

            if (itemOrItems !== undefined && !outfit.equip(itemOrItems, slot)) {
              throw "Unable to equip one of [".concat(itemOrItems, "] in slot ").concat(slot);
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }

        var _iterator7 = engine_createForOfIteratorHelper((_b = spec === null || spec === void 0 ? void 0 : spec.equip) !== null && _b !== void 0 ? _b : []),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var item = _step7.value;
            if (!outfit.equip(item)) throw "Unable to equip item ".concat(item);
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }

        if ((spec === null || spec === void 0 ? void 0 : spec.familiar) !== undefined) {
          if (!outfit.equip(spec.familiar)) throw "Unable to equip familiar ".concat(spec.familiar);
        }

        outfit.avoid = spec === null || spec === void 0 ? void 0 : spec.avoid;
        outfit.skipDefaults = (_c = spec === null || spec === void 0 ? void 0 : spec.skipDefaults) !== null && _c !== void 0 ? _c : false;
        outfit.modifier = spec === null || spec === void 0 ? void 0 : spec.modifier;
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
        if (typeof choice === "number") choices[choice_id] = choice;else choices[choice_id] = choice();
      }

      manager.setChoices(choices);
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
        (0,external_kolmafia_.adv1)(task.do, 0, "");
      }

      (0,external_kolmafia_.runCombat)();

      while ((0,external_kolmafia_.inMultiFight)()) {
        (0,external_kolmafia_.runCombat)();
      }

      if ((0,external_kolmafia_.choiceFollowsFight)()) (0,external_kolmafia_.runChoice)(-1);
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
      return task.do instanceof external_kolmafia_.Location && lastEncounterWasWanderingNC();
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
    value: function checkLimits(task) {
      if (!task.limit) return;
      var failureMessage = task.limit.message ? " ".concat(task.limit.message) : "";
      if (task.limit.tries && this.attempts[task.name] >= task.limit.tries) throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.tries, " attempts. Please check what went wrong.").concat(failureMessage);
      if (task.limit.soft && this.attempts[task.name] >= task.limit.soft) throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.soft, " attempts. Please check what went wrong (you may just be unlucky).").concat(failureMessage);
      if (task.limit.turns && task.do instanceof external_kolmafia_.Location && task.do.turnsSpent >= task.limit.turns) throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.turns, " turns. Please check what went wrong.").concat(failureMessage);
    }
    /**
     * Initialize properties for the script.
     * @param manager The properties manager to use.
     */

  }, {
    key: "initPropertiesManager",
    value: function initPropertiesManager(manager) {
      // Properties adapted from garbo
      manager.set({
        logPreferenceChange: true,
        logPreferenceChangeFilter: engine_toConsumableArray(new Set([].concat(engine_toConsumableArray((0,property/* get */.U2)("logPreferenceChangeFilter").split(",")), ["libram_savedMacro", "maximizerMRUList", "testudinalTeachings", "_lastCombatStarted"]))).sort().filter(a => a).join(","),
        battleAction: "custom combat script",
        autoSatisfyWithMall: true,
        autoSatisfyWithNPCs: true,
        autoSatisfyWithCoinmasters: true,
        autoSatisfyWithStash: false,
        dontStopForCounters: true,
        maximizerFoldables: true,
        hpAutoRecovery: "0.0",
        hpAutoRecoveryTarget: "0.0",
        mpAutoRecovery: "0.0",
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
    }
  }]);

  return Engine;
}();
function maxSongs() {
  return (0,lib/* have */.lf)((0,template_string/* $skill */.tm)(engine_templateObject3 || (engine_templateObject3 = engine_taggedTemplateLiteral(["Mariachi Memory"])))) ? 4 : 3;
}
var wanderingNCs = new Set(["Wooof! Wooooooof!", "Playing Fetch*", "A Pound of Cure", "Aunts not Ants", "Bath Time", "Beware of Aligator", "Delicious Sprouts", "Hypnotic Master", "Lost and Found", "Poetic Justice", "Summer Days", "Teacher's Pet"]);
/**
 * Return true if the last adv was one of:
 *   1. Halloweener dog noncombats,
 *   2. June cleaver noncombats, or
 *   3. Lil' Doctor™ bag noncombt.
 */

function lastEncounterWasWanderingNC() {
  return wanderingNCs.has((0,property/* get */.U2)("lastEncounter"));
}
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/route.js
function route_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = route_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function route_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return route_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return route_arrayLikeToArray(o, minLen); }

function route_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
          _task2.name = "".concat(quest.name, "/").concat(_task2.name);
          _task2.after = (_a = _task2.after) === null || _a === void 0 ? void 0 : _a.map(after => after.includes("/") ? after : "".concat(quest.name, "/").concat(after)); // Include previous task as a dependency

          if (implicitAfter && _task2.after === undefined && result.length > 0) _task2.after = [result[result.length - 1].name]; // Include quest completion in task completion

          if (questCompleted !== undefined) {
            (function () {
              var taskCompleted = _task2.completed;

              _task2.completed = () => questCompleted() || taskCompleted();
            })();
          }

          result.push(_task2);
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






;// CONCATENATED MODULE: ./src/engine/outfit.ts
var engine_outfit_templateObject, engine_outfit_templateObject2, engine_outfit_templateObject3, engine_outfit_templateObject4, engine_outfit_templateObject5, engine_outfit_templateObject6, engine_outfit_templateObject7, engine_outfit_templateObject8, engine_outfit_templateObject9, engine_outfit_templateObject10, engine_outfit_templateObject11, engine_outfit_templateObject12, engine_outfit_templateObject13, engine_outfit_templateObject14, engine_outfit_templateObject15, engine_outfit_templateObject16, engine_outfit_templateObject17, engine_outfit_templateObject18;

function engine_outfit_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


function equipDefaults(outfit) {
  outfit.equip((0,template_string/* $item */.xr)(engine_outfit_templateObject || (engine_outfit_templateObject = engine_outfit_taggedTemplateLiteral(["Daylight Shavings Helmet"]))), (0,template_string/* $slot */.Jh)(engine_outfit_templateObject2 || (engine_outfit_templateObject2 = engine_outfit_taggedTemplateLiteral(["hat"]))));
  outfit.equip((0,template_string/* $item */.xr)(engine_outfit_templateObject3 || (engine_outfit_templateObject3 = engine_outfit_taggedTemplateLiteral(["fresh coat of paint"]))), (0,template_string/* $slot */.Jh)(engine_outfit_templateObject4 || (engine_outfit_templateObject4 = engine_outfit_taggedTemplateLiteral(["shirt"]))));
  outfit.equip((0,template_string/* $items */.vS)(engine_outfit_templateObject5 || (engine_outfit_templateObject5 = engine_outfit_taggedTemplateLiteral(["weeping willow wand, Fourth of May Cosplay Saber"]))), (0,template_string/* $slot */.Jh)(engine_outfit_templateObject6 || (engine_outfit_templateObject6 = engine_outfit_taggedTemplateLiteral(["weapon"]))));
  outfit.equip((0,template_string/* $item */.xr)(engine_outfit_templateObject7 || (engine_outfit_templateObject7 = engine_outfit_taggedTemplateLiteral(["unbreakable umbrella"]))), (0,template_string/* $slot */.Jh)(engine_outfit_templateObject8 || (engine_outfit_templateObject8 = engine_outfit_taggedTemplateLiteral(["off-hand"]))));
  outfit.equip((0,template_string/* $item */.xr)(engine_outfit_templateObject9 || (engine_outfit_templateObject9 = engine_outfit_taggedTemplateLiteral(["designer sweatpants"]))), (0,template_string/* $slot */.Jh)(engine_outfit_templateObject10 || (engine_outfit_templateObject10 = engine_outfit_taggedTemplateLiteral(["pants"]))));
  outfit.equip((0,template_string/* $item */.xr)(engine_outfit_templateObject11 || (engine_outfit_templateObject11 = engine_outfit_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"]))), (0,template_string/* $slot */.Jh)(engine_outfit_templateObject12 || (engine_outfit_templateObject12 = engine_outfit_taggedTemplateLiteral(["acc1"]))));
  outfit.equip((0,template_string/* $items */.vS)(engine_outfit_templateObject13 || (engine_outfit_templateObject13 = engine_outfit_taggedTemplateLiteral(["dorky glasses, Eight Days a Week Pill Keeper"]))), (0,template_string/* $slot */.Jh)(engine_outfit_templateObject14 || (engine_outfit_templateObject14 = engine_outfit_taggedTemplateLiteral(["acc2"]))));
  outfit.equip((0,template_string/* $item */.xr)(engine_outfit_templateObject15 || (engine_outfit_templateObject15 = engine_outfit_taggedTemplateLiteral(["backup camera"]))), (0,template_string/* $slot */.Jh)(engine_outfit_templateObject16 || (engine_outfit_templateObject16 = engine_outfit_taggedTemplateLiteral(["acc3"]))));
  outfit.equip((0,template_string/* $item */.xr)(engine_outfit_templateObject17 || (engine_outfit_templateObject17 = engine_outfit_taggedTemplateLiteral(["tiny stillsuit"]))), (0,template_string/* $slot */.Jh)(engine_outfit_templateObject18 || (engine_outfit_templateObject18 = engine_outfit_taggedTemplateLiteral(["familiar"]))));
}
;// CONCATENATED MODULE: ./src/engine/engine.ts
var engine_engine_templateObject, engine_engine_templateObject2, engine_engine_templateObject3;

function engine_engine_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function engine_engine_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function engine_engine_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function engine_engine_createClass(Constructor, protoProps, staticProps) { if (protoProps) engine_engine_defineProperties(Constructor.prototype, protoProps); if (staticProps) engine_engine_defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = engine_getPrototypeOf(object); if (object === null) break; } return object; }

function engine_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) engine_setPrototypeOf(subClass, superClass); }

function engine_setPrototypeOf(o, p) { engine_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return engine_setPrototypeOf(o, p); }

function engine_createSuper(Derived) { var hasNativeReflectConstruct = engine_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = engine_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = engine_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return engine_possibleConstructorReturn(this, result); }; }

function engine_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return engine_assertThisInitialized(self); }

function engine_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function engine_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function engine_getPrototypeOf(o) { engine_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return engine_getPrototypeOf(o); }






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
      this.checkLimits(task);

      _get(engine_getPrototypeOf(Engine.prototype), "execute", this).call(this, task);

      if ((0,lib/* have */.lf)((0,template_string/* $effect */._G)(engine_engine_templateObject || (engine_engine_templateObject = engine_engine_taggedTemplateLiteral(["Beaten Up"]))))) {
        if ((0,property/* get */.U2)("lastEncounter") === "Sssshhsssblllrrggghsssssggggrrgglsssshhssslblgl") (0,lib/* uneffect */.Lo)((0,template_string/* $effect */._G)(engine_engine_templateObject2 || (engine_engine_templateObject2 = engine_engine_taggedTemplateLiteral(["Beaten Up"]))));else throw "Fight was lost; stop.";
      }

      if (task.completed()) {
        debug("".concat(task.name, " completed!"), "blue");
      } else {
        debug("".concat(task.name, " not completed!"), "blue");
      }
    }
  }, {
    key: "dress",
    value: function dress(task, outfit) {
      if (task.combat !== undefined && !outfit.skipDefaults) equipDefaults(outfit);

      _get(engine_getPrototypeOf(Engine.prototype), "dress", this).call(this, task, outfit);
    }
  }, {
    key: "prepare",
    value: function prepare(task) {
      _get(engine_getPrototypeOf(Engine.prototype), "prepare", this).call(this, task);

      if (task.combat !== undefined && (0,external_kolmafia_.myHp)() < (0,external_kolmafia_.myMaxhp)() * 0.9) (0,external_kolmafia_.useSkill)((0,template_string/* $skill */.tm)(engine_engine_templateObject3 || (engine_engine_templateObject3 = engine_engine_taggedTemplateLiteral(["Cannelloni Cocoon"]))));
    }
  }, {
    key: "initPropertiesManager",
    value: function initPropertiesManager(manager) {
      _get(engine_getPrototypeOf(Engine.prototype), "initPropertiesManager", this).call(this, manager);

      manager.set({
        hpAutoRecovery: -0.05,
        mpAutoRecovery: -0.05
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
  if ((0,utils/* arrayContains */.IA)(name, modifierTypes_booleanModifiers)) {
    return subject === undefined ? (0,external_kolmafia_.booleanModifier)(name) : (0,external_kolmafia_.booleanModifier)(subject, name);
  }

  if ((0,utils/* arrayContains */.IA)(name, classModifiers)) {
    return (0,external_kolmafia_.classModifier)(subject, name);
  }

  if ((0,utils/* arrayContains */.IA)(name, effectModifiers)) {
    return (0,external_kolmafia_.effectModifier)(subject, name);
  }

  if ((0,utils/* arrayContains */.IA)(name, monsterModifiers)) {
    return (0,external_kolmafia_.monsterModifier)(subject, name);
  }

  if ((0,utils/* arrayContains */.IA)(name, modifierTypes_numericModifiers)) {
    return subject === undefined ? (0,external_kolmafia_.numericModifier)(name) : (0,external_kolmafia_.numericModifier)(subject, name);
  }

  if ((0,utils/* arrayContains */.IA)(name, skillModifiers)) {
    return (0,external_kolmafia_.skillModifier)(subject, name);
  }

  if ((0,utils/* arrayContains */.IA)(name, stringModifiers)) {
    return subject === undefined ? (0,external_kolmafia_.stringModifier)(name) : (0,external_kolmafia_.stringModifier)(subject, name);
  }

  if ((0,utils/* arrayContains */.IA)(name, statModifiers)) {
    return (0,external_kolmafia_.statModifier)(subject, name);
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
  var entries = (0,property/* get */.U2)("_mummeryMods").split(",");
  var returnValue = new Map();
  var regExp = new RegExp(/([^:]+): \[(d+)\*fam\(([^)]+)\)\]/);

  var _iterator = MummingTrunk_createForOfIteratorHelper(entries),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var entry = _step.value;
      var matcher = entry.match(regExp);

      if (matcher) {
        returnValue.set((0,external_kolmafia_.toFamiliar)(matcher[3]), [toModifier(matcher[1]), parseInt(matcher[2])]);
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
var CommunityService_templateObject, CommunityService_templateObject2, CommunityService_templateObject3, CommunityService_templateObject4, CommunityService_templateObject5, CommunityService_templateObject6, CommunityService_templateObject7, CommunityService_templateObject8, CommunityService_templateObject9, CommunityService_templateObject10, CommunityService_templateObject11, CommunityService_templateObject12, CommunityService_templateObject13, CommunityService_templateObject14, CommunityService_templateObject15, CommunityService_templateObject16, CommunityService_templateObject17, CommunityService_templateObject18, CommunityService_templateObject19, CommunityService_templateObject20, CommunityService_templateObject21, CommunityService_templateObject22, CommunityService_templateObject23, CommunityService_templateObject24, CommunityService_templateObject25, CommunityService_templateObject26, CommunityService_templateObject27, CommunityService_templateObject28;

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









var thralls = new Map([[(0,template_string/* $stat */.Ri)(CommunityService_templateObject || (CommunityService_templateObject = CommunityService_taggedTemplateLiteral(["muscle"]))), (0,template_string/* $thrall */.ev)(CommunityService_templateObject2 || (CommunityService_templateObject2 = CommunityService_taggedTemplateLiteral(["Elbow Macaroni"])))], [(0,template_string/* $stat */.Ri)(CommunityService_templateObject3 || (CommunityService_templateObject3 = CommunityService_taggedTemplateLiteral(["moxie"]))), (0,template_string/* $thrall */.ev)(CommunityService_templateObject4 || (CommunityService_templateObject4 = CommunityService_taggedTemplateLiteral(["Penne Dreadful"])))]]);

var statCommunityServicePredictor = stat => {
  return () => 60 - Math.floor(1 / 30 * ((0,external_kolmafia_.myBuffedstat)(stat) - (0,external_kolmafia_.myBasestat)(thralls.get(stat) === (0,external_kolmafia_.myThrall)() && !(0,lib/* have */.lf)((0,template_string/* $effect */._G)(CommunityService_templateObject5 || (CommunityService_templateObject5 = CommunityService_taggedTemplateLiteral(["Expert Oiliness"])))) ? (0,template_string/* $stat */.Ri)(CommunityService_templateObject6 || (CommunityService_templateObject6 = CommunityService_taggedTemplateLiteral(["mysticality"]))) : stat)));
};

var visitCouncil = () => (0,external_kolmafia_.visitUrl)("council.php");

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
      return (0,property/* get */.U2)("csServicesPerformed").includes(this.property);
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
      if ((0,property/* get */.U2)("csServicesPerformed").trim().length === 0) visitCouncil();
      visitCouncil();
      var councilText = (0,external_kolmafia_.runChoice)(this.choice);
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
      var startTurns = (0,external_kolmafia_.myTurncount)();
      var additionalTurns;

      try {
        var _prepare;

        additionalTurns = (_prepare = prepare()) !== null && _prepare !== void 0 ? _prepare : 0;
      } catch (_unused) {
        return "failed";
      }

      var prediction = this.predictor();
      var council = visitCouncil();

      var turns = this._actualCost(council);

      if (!turns) return "already completed";

      if (turns > Math.min(maxTurns, (0,external_kolmafia_.myAdventures)())) {
        return "failed";
      }

      if (!this.do()) return "failed";
      CommunityService.log[this.property] = {
        predictedTurns: prediction + additionalTurns,
        turnCost: (0,external_kolmafia_.myTurncount)() - startTurns,
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
      var startTurns = (0,external_kolmafia_.myTurncount)();
      var estimatedTurns = (_action = action()) !== null && _action !== void 0 ? _action : 0;
      CommunityService.log[name] = {
        type: "task",
        turnCost: (0,external_kolmafia_.myTurncount)() - startTurns,
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
          (0,external_kolmafia_.print)("We predicted the ".concat(testName, " test would take ").concat(predictedTurns, " turns, ").concat(predictedTurns === turnCost ? "and" : "but", " it took ").concat(turnCost, " turns."), colour);
          (0,external_kolmafia_.print)("".concat(testName, " took ").concat(seconds.toFixed(1), " seconds."), colour);
        } else {
          if (!(predictedTurns === 0 && turnCost === 0)) {
            (0,external_kolmafia_.print)("We predicted the task ".concat(testName, " would take ").concat(predictedTurns, " turns, ").concat(predictedTurns === turnCost ? "and" : "but", " it took ").concat(turnCost, " turns."), colour);
          }

          (0,external_kolmafia_.print)("The task ".concat(testName, " took ").concat(seconds.toFixed(1), " seconds."), colour);
        }
      }

      var totalTime = (0,utils/* sum */.Sm)(logEntries, _ref => {
        var _ref2 = CommunityService_slicedToArray(_ref, 2),
            testEntry = _ref2[1];

        return testEntry.seconds;
      });
      (0,external_kolmafia_.print)("All together, you have spent ".concat(totalTime.toFixed(1), " seconds during this Community Service run"), colour);
    } // Below, we have the tests themselves.

  }]);

  return CommunityService;
}();

CommunityService_defineProperty(CommunityService, "log", {});

CommunityService_defineProperty(CommunityService, "HP", new CommunityService(1, "HP", "Donate Blood", () => 60 - Math.floor(((0,external_kolmafia_.myMaxhp)() - (0,external_kolmafia_.myBuffedstat)((0,template_string/* $stat */.Ri)(CommunityService_templateObject7 || (CommunityService_templateObject7 = CommunityService_taggedTemplateLiteral(["muscle"])))) - 3) / 30), new Requirement(["HP"], {})));

CommunityService_defineProperty(CommunityService, "Muscle", new CommunityService(2, "Muscle", "Feed The Children", statCommunityServicePredictor((0,template_string/* $stat */.Ri)(CommunityService_templateObject8 || (CommunityService_templateObject8 = CommunityService_taggedTemplateLiteral(["Muscle"])))), new Requirement(["Muscle"], {})));

CommunityService_defineProperty(CommunityService, "Mysticality", new CommunityService(3, "Mysticality", "Build Playground Mazes", statCommunityServicePredictor((0,template_string/* $stat */.Ri)(CommunityService_templateObject9 || (CommunityService_templateObject9 = CommunityService_taggedTemplateLiteral(["Mysticality"])))), new Requirement(["Mysticality"], {})));

CommunityService_defineProperty(CommunityService, "Moxie", new CommunityService(4, "Moxie", "Feed Conspirators", statCommunityServicePredictor((0,template_string/* $stat */.Ri)(CommunityService_templateObject10 || (CommunityService_templateObject10 = CommunityService_taggedTemplateLiteral(["Moxie"])))), new Requirement(["Moxie"], {})));

CommunityService_defineProperty(CommunityService, "FamiliarWeight", new CommunityService(5, "Familiar Weight", "Breed More Collies", () => 60 - Math.floor(((0,external_kolmafia_.familiarWeight)((0,external_kolmafia_.myFamiliar)()) + (0,external_kolmafia_.weightAdjustment)()) / 5), new Requirement(["Familiar Weight"], {})));

CommunityService_defineProperty(CommunityService, "WeaponDamage", new CommunityService(6, "Weapon Damage", "Reduce Gazelle Population", () => {
  var weaponPower = (0,external_kolmafia_.getPower)((0,external_kolmafia_.equippedItem)((0,template_string/* $slot */.Jh)(CommunityService_templateObject11 || (CommunityService_templateObject11 = CommunityService_taggedTemplateLiteral(["weapon"])))));
  var offhandPower = (0,external_kolmafia_.toSlot)((0,external_kolmafia_.equippedItem)((0,template_string/* $slot */.Jh)(CommunityService_templateObject12 || (CommunityService_templateObject12 = CommunityService_taggedTemplateLiteral(["off-hand"]))))) === (0,template_string/* $slot */.Jh)(CommunityService_templateObject13 || (CommunityService_templateObject13 = CommunityService_taggedTemplateLiteral(["weapon"]))) ? (0,external_kolmafia_.getPower)((0,external_kolmafia_.equippedItem)((0,template_string/* $slot */.Jh)(CommunityService_templateObject14 || (CommunityService_templateObject14 = CommunityService_taggedTemplateLiteral(["off-hand"]))))) : 0;
  var familiarPower = (0,external_kolmafia_.toSlot)((0,external_kolmafia_.equippedItem)((0,template_string/* $slot */.Jh)(CommunityService_templateObject15 || (CommunityService_templateObject15 = CommunityService_taggedTemplateLiteral(["familiar"]))))) === (0,template_string/* $slot */.Jh)(CommunityService_templateObject16 || (CommunityService_templateObject16 = CommunityService_taggedTemplateLiteral(["weapon"]))) ? (0,external_kolmafia_.getPower)((0,external_kolmafia_.equippedItem)((0,template_string/* $slot */.Jh)(CommunityService_templateObject17 || (CommunityService_templateObject17 = CommunityService_taggedTemplateLiteral(["familiar"]))))) : 0; // mafia does not currently count swagger

  var multiplier = (0,lib/* have */.lf)((0,template_string/* $effect */._G)(CommunityService_templateObject18 || (CommunityService_templateObject18 = CommunityService_taggedTemplateLiteral(["Bow-Legged Swagger"])))) ? 2 : 1; // We add 0.001 because the floor function sometimes introduces weird rounding errors

  return 60 - Math.floor(multiplier * (modifier_get("Weapon Damage") - 0.15 * (weaponPower + offhandPower + familiarPower)) / 50 + 0.001) - Math.floor(multiplier * modifier_get("Weapon Damage Percent") / 50 + 0.001);
}, new Requirement(["Weapon Damage", "Weapon Damage Percent"], {})));

CommunityService_defineProperty(CommunityService, "SpellDamage", new CommunityService(7, "Spell Damage", "Make Sausage", () => {
  var dragonfishDamage = (0,external_kolmafia_.myFamiliar)() === (0,template_string/* $familiar */.HP)(CommunityService_templateObject19 || (CommunityService_templateObject19 = CommunityService_taggedTemplateLiteral(["Magic Dragonfish"]))) ? (0,external_kolmafia_.numericModifier)((0,template_string/* $familiar */.HP)(CommunityService_templateObject20 || (CommunityService_templateObject20 = CommunityService_taggedTemplateLiteral(["Magic Dragonfish"]))), "Spell Damage Percent", (0,external_kolmafia_.familiarWeight)((0,template_string/* $familiar */.HP)(CommunityService_templateObject21 || (CommunityService_templateObject21 = CommunityService_taggedTemplateLiteral(["Magic Dragonfish"])))) + (0,external_kolmafia_.weightAdjustment)(), (0,template_string/* $item */.xr)(CommunityService_templateObject22 || (CommunityService_templateObject22 = CommunityService_taggedTemplateLiteral(["none"])))) : 0; // We add 0.001 because the floor function sometimes introduces weird rounding errors

  return 60 - Math.floor(modifier_get("Spell Damage") / 50 + 0.001) - Math.floor((modifier_get("Spell Damage Percent") - dragonfishDamage) / 50 + 0.001);
}, new Requirement(["Spell Damage", "Spell Damage Percent"], {})));

CommunityService_defineProperty(CommunityService, "Noncombat", new CommunityService(8, "Non-Combat", "Be a Living Statue", () => {
  var noncombatRate = -1 * modifier_get("Combat Rate");
  var unsoftcappedRate = noncombatRate > 25 ? 25 + (noncombatRate - 25) * 5 : noncombatRate;
  return 60 - 3 * Math.floor(unsoftcappedRate / 5);
}, new Requirement(["-combat"], {})));

CommunityService_defineProperty(CommunityService, "BoozeDrop", new CommunityService(9, "Item Drop", "Make Margaritas", () => {
  var mummingCostume = currentCostumes().get((0,external_kolmafia_.myFamiliar)());
  var mummingBuff = mummingCostume && mummingCostume[0] === "Item Drop" ? mummingCostume[1] : 0;
  var familiarItemDrop = (0,external_kolmafia_.numericModifier)((0,external_kolmafia_.myFamiliar)(), "Item Drop", (0,external_kolmafia_.familiarWeight)((0,external_kolmafia_.myFamiliar)()) + (0,external_kolmafia_.weightAdjustment)(), (0,external_kolmafia_.equippedItem)((0,template_string/* $slot */.Jh)(CommunityService_templateObject23 || (CommunityService_templateObject23 = CommunityService_taggedTemplateLiteral(["familiar"]))))) + mummingBuff - (0,external_kolmafia_.numericModifier)((0,external_kolmafia_.equippedItem)((0,template_string/* $slot */.Jh)(CommunityService_templateObject24 || (CommunityService_templateObject24 = CommunityService_taggedTemplateLiteral(["familiar"])))), "Item Drop");
  var familiarBoozeDrop = (0,external_kolmafia_.numericModifier)((0,external_kolmafia_.myFamiliar)(), "Booze Drop", (0,external_kolmafia_.familiarWeight)((0,external_kolmafia_.myFamiliar)()) + (0,external_kolmafia_.weightAdjustment)(), (0,external_kolmafia_.equippedItem)((0,template_string/* $slot */.Jh)(CommunityService_templateObject25 || (CommunityService_templateObject25 = CommunityService_taggedTemplateLiteral(["familiar"]))))) - (0,external_kolmafia_.numericModifier)((0,external_kolmafia_.equippedItem)((0,template_string/* $slot */.Jh)(CommunityService_templateObject26 || (CommunityService_templateObject26 = CommunityService_taggedTemplateLiteral(["familiar"])))), "Booze Drop"); // Champagne doubling does NOT count for CS, so we undouble

  var multiplier = (0,external_kolmafia_.haveEquipped)((0,template_string/* $item */.xr)(CommunityService_templateObject27 || (CommunityService_templateObject27 = CommunityService_taggedTemplateLiteral(["broken champagne bottle"])))) && (0,property/* get */.U2)("garbageChampagneCharge") > 0 ? 0.5 : 1; // We add 0.001 because the floor function sometimes introduces weird rounding errors

  return 60 - Math.floor(multiplier * (modifier_get("Item Drop") - familiarItemDrop) / 30 + 0.001) - Math.floor((modifier_get("Booze Drop") - familiarBoozeDrop) / 15 + 0.001);
}, new Requirement(["Item Drop", "2 Booze Drop"], {
  preventEquip: (0,template_string/* $items */.vS)(CommunityService_templateObject28 || (CommunityService_templateObject28 = CommunityService_taggedTemplateLiteral(["broken champagne bottle"])))
})));

CommunityService_defineProperty(CommunityService, "HotRes", new CommunityService(10, "Hot Resistance", "Clean Steam Tunnels", () => 60 - modifier_get("Hot Resistance"), new Requirement(["Hot Resistance"], {})));

CommunityService_defineProperty(CommunityService, "CoilWire", new CommunityService(11, "Coil Wire", "Coil Wire", () => 60, new Requirement([], {})));

CommunityService_defineProperty(CommunityService, "donate", () => {
  visitCouncil();
  (0,external_kolmafia_.visitUrl)("choice.php?whichchoice=1089&option=30");
});


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

var locket = (0,template_string/* $item */.xr)(CombatLoversLocket_templateObject || (CombatLoversLocket_templateObject = CombatLoversLocket_taggedTemplateLiteral(["Combat Lover's Locket"])));
function have() {
  return (0,lib/* have */.lf)(locket);
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
  return Object.entries(getLocketMonsters()).map(_ref5 => {
    var _ref6 = CombatLoversLocket_slicedToArray(_ref5, 1),
        name = _ref6[0];

    return toMonster(name);
  });
}

function parseLocketProperty() {
  return (0,property/* get */.U2)("_locketMonstersFought").split(",").filter(id => id.trim().length > 0);
}
/**
 * Determines how many reminisces remain by parsing the _locketMonstersFought property.
 * @returns The number of reminisces a player has available; 0 if they lack the Locket.
 */


function reminiscesLeft() {
  return have() ? (0,utils/* clamp */.uZ)(3 - parseLocketProperty().length, 0, 3) : 0;
}
/**
 * Determines which monsters were reminisced today by parsing the _locketMonstersFought property.
 * @returns An array consisting of the Monsters reminisced today.
 */

function monstersReminisced() {
  return parseLocketProperty().map(id => (0,external_kolmafia_.toMonster)(id));
}
/**
 * Fight a Monster using the Combat Lover's Locket
 * @param monster The Monster to fight
 * @returns false if we are unable to reminisce about this monster. Else, returns whether, at the end of all things, we have reminisced about this monster.
 */

function reminisce(monster) {
  if (!have() || reminiscesLeft() === 0 || !(0,external_kolmafia_.getLocketMonsters)()[monster.name]) {
    return false;
  }

  (0,external_kolmafia_.cliExecute)("reminisce ".concat(monster));
  (0,external_kolmafia_.runCombat)();
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
  if (!have() || reminiscesLeft() === 0) return null;
  var options = availableLocketMonsters().filter(criteria);
  if (!options.length) return null;
  return options.reduce((a, b) => value(a) > value(b) ? a : b);
}
// EXTERNAL MODULE: ./src/combat.ts
var src_combat = __webpack_require__(4223);
;// CONCATENATED MODULE: ./src/tasks/boozedrop.ts
var boozedrop_templateObject, boozedrop_templateObject2, boozedrop_templateObject3, boozedrop_templateObject4, boozedrop_templateObject5, boozedrop_templateObject6, boozedrop_templateObject7, boozedrop_templateObject8, boozedrop_templateObject9, boozedrop_templateObject10, boozedrop_templateObject11, boozedrop_templateObject12, boozedrop_templateObject13, boozedrop_templateObject14, boozedrop_templateObject15, boozedrop_templateObject16, boozedrop_templateObject17, boozedrop_templateObject18, boozedrop_templateObject19, boozedrop_templateObject20, boozedrop_templateObject21, boozedrop_templateObject22, boozedrop_templateObject23, boozedrop_templateObject24, boozedrop_templateObject25;

function boozedrop_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = boozedrop_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function boozedrop_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return boozedrop_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return boozedrop_arrayLikeToArray(o, minLen); }

function boozedrop_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function boozedrop_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var BoozeDropQuest = {
  name: "Booze Drop",
  completed: () => CommunityService.BoozeDrop.isDone(),
  tasks: [{
    name: "Medley of Buffs",
    completed: () => monstersReminisced().includes((0,template_string/* $monster */.O4)(boozedrop_templateObject || (boozedrop_templateObject = boozedrop_taggedTemplateLiteral(["Black Crayon Elemental"])))),
    do: () => reminisce((0,template_string/* $monster */.O4)(boozedrop_templateObject2 || (boozedrop_templateObject2 = boozedrop_taggedTemplateLiteral(["Black Crayon Elemental"])))),
    combat: new CombatStrategy().macro(src_combat["default"].skill((0,template_string/* $skill */.tm)(boozedrop_templateObject3 || (boozedrop_templateObject3 = boozedrop_taggedTemplateLiteral(["Become a Bat"])))).skill((0,template_string/* $skill */.tm)(boozedrop_templateObject4 || (boozedrop_templateObject4 = boozedrop_taggedTemplateLiteral(["Bowl Straight Up"])))).default()),
    outfit: {
      hat: (0,template_string/* $item */.xr)(boozedrop_templateObject5 || (boozedrop_templateObject5 = boozedrop_taggedTemplateLiteral(["Daylight Shavings Helmet"]))),
      back: (0,template_string/* $item */.xr)(boozedrop_templateObject6 || (boozedrop_templateObject6 = boozedrop_taggedTemplateLiteral(["vampyric cloake"]))),
      pants: (0,template_string/* $item */.xr)(boozedrop_templateObject7 || (boozedrop_templateObject7 = boozedrop_taggedTemplateLiteral(["designer sweatpants"]))),
      familiar: (0,template_string/* $familiar */.HP)(boozedrop_templateObject8 || (boozedrop_templateObject8 = boozedrop_taggedTemplateLiteral(["Ghost of Crimbo Carols"]))),
      famequip: (0,template_string/* $item */.xr)(boozedrop_templateObject9 || (boozedrop_templateObject9 = boozedrop_taggedTemplateLiteral(["none"])))
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Test",
    prepare: () => {
      var _iterator = boozedrop_createForOfIteratorHelper((0,template_string/* $items */.vS)(boozedrop_templateObject10 || (boozedrop_templateObject10 = boozedrop_taggedTemplateLiteral(["lavender candy heart, resolution: be happier, pulled yellow taffy, resolution: be luckier"])))),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var it = _step.value;
          if ((0,lib/* have */.lf)(it)) (0,lib/* ensureEffect */.pq)((0,external_kolmafia_.effectModifier)(it, "effect"));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    completed: () => CommunityService.BoozeDrop.isDone(),
    do: () => CommunityService.BoozeDrop.run(() => printModtrace(["Item Drop", "Booze Drop"]), 2),
    outfit: {
      modifier: "Item Drop, -equip broken champagne bottle",
      familiar: (0,template_string/* $familiar */.HP)(boozedrop_templateObject11 || (boozedrop_templateObject11 = boozedrop_taggedTemplateLiteral(["Trick-or-Treating Tot"])))
    },
    effects: [(0,template_string/* $effect */._G)(boozedrop_templateObject12 || (boozedrop_templateObject12 = boozedrop_taggedTemplateLiteral(["Blessing of the Bird"]))), (0,template_string/* $effect */._G)(boozedrop_templateObject13 || (boozedrop_templateObject13 = boozedrop_taggedTemplateLiteral(["El Aroma de Salsa"]))), (0,template_string/* $effect */._G)(boozedrop_templateObject14 || (boozedrop_templateObject14 = boozedrop_taggedTemplateLiteral(["Fat Leon's Phat Loot Lyric"]))), (0,template_string/* $effect */._G)(boozedrop_templateObject15 || (boozedrop_templateObject15 = boozedrop_taggedTemplateLiteral(["Feeling Lost"]))), (0,template_string/* $effect */._G)(boozedrop_templateObject16 || (boozedrop_templateObject16 = boozedrop_taggedTemplateLiteral(["items.enh"]))), (0,template_string/* $effect */._G)(boozedrop_templateObject17 || (boozedrop_templateObject17 = boozedrop_taggedTemplateLiteral(["I See Everything Thrice!"]))), (0,template_string/* $effect */._G)(boozedrop_templateObject18 || (boozedrop_templateObject18 = boozedrop_taggedTemplateLiteral(["Nearly All-Natural"]))), (0,template_string/* $effect */._G)(boozedrop_templateObject19 || (boozedrop_templateObject19 = boozedrop_taggedTemplateLiteral(["The Spirit of Taking"]))), (0,template_string/* $effect */._G)(boozedrop_templateObject20 || (boozedrop_templateObject20 = boozedrop_taggedTemplateLiteral(["Singer's Faithful Ocelot"]))), (0,template_string/* $effect */._G)(boozedrop_templateObject21 || (boozedrop_templateObject21 = boozedrop_taggedTemplateLiteral(["Spice Haze"]))), (0,template_string/* $effect */._G)(boozedrop_templateObject22 || (boozedrop_templateObject22 = boozedrop_taggedTemplateLiteral(["Steely-Eyed Squint"]))), (0,template_string/* $effect */._G)(boozedrop_templateObject23 || (boozedrop_templateObject23 = boozedrop_taggedTemplateLiteral(["The Spirit of Taking"]))), (0,template_string/* $effect */._G)(boozedrop_templateObject24 || (boozedrop_templateObject24 = boozedrop_taggedTemplateLiteral(["Uncucumbered"])))],
    acquire: [{
      item: (0,template_string/* $item */.xr)(boozedrop_templateObject25 || (boozedrop_templateObject25 = boozedrop_taggedTemplateLiteral(["wad of used tape"])))
    }],
    limit: {
      tries: 1
    }
  }]
};
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2014/CrimboShrub.js
var CrimboShrub_templateObject, CrimboShrub_templateObject2, CrimboShrub_templateObject3, CrimboShrub_templateObject4;

function CrimboShrub_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





function CrimboShrub_have() {
  return (0,lib/* have */.lf)((0,template_string/* $familiar */.HP)(CrimboShrub_templateObject || (CrimboShrub_templateObject = CrimboShrub_taggedTemplateLiteral(["Crimbo Shrub"]))));
}
var Toppers = {
  Muscle: 1,
  Mysticality: 2,
  Moxie: 3
};
var Lights = {
  "Prismatic Damage": 1,
  "Hot Damage": 2,
  "Cold Damage": 3,
  "Stench Damage": 4,
  "Spooky Damage": 5,
  "Sleaze Damage": 6
};
var Garland = {
  "HP Regen": 1,
  "PvP Fights": 2,
  Blocking: 3
};
var Gifts = {
  "Yellow Ray": 1,
  "Red Ray": 2,
  Gifts: 3
};
var Prefs = {
  Muscle: "Muscle",
  Mysticality: "Mysticality",
  Moxie: "Moxie",
  Prismatic: "Prismatic Damage",
  Hot: "Hot Damage",
  Cold: "Cold Damage",
  Stench: "Stench Damage",
  Spooky: "Spooky Damage",
  Sleaze: "Sleaze Damage",
  HP: "HP Regen",
  PvP: "PvP Fights",
  blocking: "Blocking",
  yellow: "Yellow Ray",
  meat: "Red Ray",
  gifts: "Gifts"
};

function isDecoratedWith(topper, lights, garland, gifts) {
  var decorations = [(0,property/* get */.U2)("shrubTopper"), (0,property/* get */.U2)("shrubLights"), (0,property/* get */.U2)("shrubGarland"), (0,property/* get */.U2)("shrubGifts")].map(x => Prefs[x]);
  return [topper, lights, garland, gifts].every((x, i) => x === decorations[i]);
}

function decorate(topper, lights, garland, gifts) {
  if (!CrimboShrub_have()) return false;
  if ((0,property/* get */.U2)("_shrubDecorated")) return isDecoratedWith(topper, lights, garland, gifts);

  if (!(0,lib/* have */.lf)((0,template_string/* $item */.xr)(CrimboShrub_templateObject2 || (CrimboShrub_templateObject2 = CrimboShrub_taggedTemplateLiteral(["box of old Crimbo decorations"]))))) {
    (0,external_kolmafia_.useFamiliar)((0,template_string/* $familiar */.HP)(CrimboShrub_templateObject3 || (CrimboShrub_templateObject3 = CrimboShrub_taggedTemplateLiteral(["Crimbo Shrub"]))));
  }

  (0,external_kolmafia_.visitUrl)("inv_use.php?pwd=&which=99&whichitem=".concat((0,external_kolmafia_.toInt)((0,template_string/* $item */.xr)(CrimboShrub_templateObject4 || (CrimboShrub_templateObject4 = CrimboShrub_taggedTemplateLiteral(["box of old Crimbo decorations"]))))));
  (0,external_kolmafia_.visitUrl)("choice.php?whichchoice=999&pwd=&option=1&topper=".concat(Toppers[topper], "&lights=").concat(Lights[lights], "&garland=").concat(Garland[garland], "&gift=").concat(Gifts[gifts]));
  return true;
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2011/StompingBoots.js
var StompingBoots_templateObject;

function StompingBoots_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var familiar = (0,template_string/* $familiar */.HP)(StompingBoots_templateObject || (StompingBoots_templateObject = StompingBoots_taggedTemplateLiteral(["Pair of Stomping Boots"])));
/**
 * Returns true if the player has the Pair of Stomping Boots in their
 * terrarium
 */

function StompingBoots_have() {
  return (0,lib/* have */.lf)(familiar);
}
/**
 * Returns the number of free runaways that have already been used
 * @see Bandersnatch with which the Stomping Boots shares a counter
 */

function getRunaways() {
  return (0,property/* get */.U2)("_banderRunaways");
}
/**
 * Returns the total number of free runaways that the player can
 * get from their Stomping Boots
 *
 * @param considerWeightAdjustment Include familiar weight modifiers
 */

function getMaxRunaways() {
  var considerWeightAdjustment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var weightBuffs = considerWeightAdjustment ? (0,external_kolmafia_.weightAdjustment)() : 0;
  return Math.floor(((0,external_kolmafia_.familiarWeight)(familiar) + weightBuffs) / 5);
}
/**
 * Returns the number of remaining free runaways the player can
 * get from their Stomping Boots
 *
 * @param considerWeightAdjustment
 */

function getRemainingRunaways() {
  var considerWeightAdjustment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return Math.max(0, getMaxRunaways(considerWeightAdjustment) - getRunaways());
}
/**
 * Returns true if the player could use their Stomping Boots to
 * get a free run in theory
 *
 * @param considerWeightAdjustment Include familiar weight modifiers
 */

function couldRunaway() {
  var considerWeightAdjustment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return StompingBoots_have() && getRemainingRunaways(considerWeightAdjustment) > 0;
}
/**
 * Returns true if the player can use their Stomping Boots to get a
 * free run right now
 */

function canRunaway() {
  return isCurrentFamiliar(familiar) && couldRunaway();
}
/**
 * Prepare a Stomping Boots runaway.
 *
 * This will take your Stomping Boots with you.
 * If any of those steps fail, it will return false.
 */

function prepareRunaway() {
  return useFamiliar(familiar);
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/counter.js

/**
 * Returns Infinity for counters that do not exist, and otherwise returns the duration of the counter
 * @param counter The name of the counter in question
 * @returns Infinity if the counter does not exist; otherwise returns the duration of the counter
 */

function counter_get(counter) {
  var value = (0,external_kolmafia_.getCounter)(counter); // getCounter returns -1 for counters that don't exist, but it also returns -1 for counters whose value is -1

  if (value === -1) {
    // if we have a counter with value -1, we check to see if that counter exists via getCounters()
    // We return null if it doesn't exist
    return (0,external_kolmafia_.getCounters)(counter, -1, -1).trim() === "" ? Infinity : -1;
  }

  return value;
}
/**
 * The world is everything that is the case. This determines which counters are the case.
 * @param counter The name of the counter in question
 * @returns True for counters which currently exist; false for those which do not
 */

function exists(counter) {
  return getCounter(counter) !== -1 || getCounters(counter, -1, -1).trim() !== "";
}
/**
 * Creates a manual counter with specified name and duration
 * @param counter Name of the counter to manually create
 * @param duration Duration of counter to manually set
 * @returns Whether the counter was successfully set
 */

function set(counter, duration) {
  cliExecute("counters add ".concat(duration, " ").concat(counter));
  return counter_get(counter) !== null;
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/Clan.js
function Clan_toConsumableArray(arr) { return Clan_arrayWithoutHoles(arr) || Clan_iterableToArray(arr) || Clan_unsupportedIterableToArray(arr) || Clan_nonIterableSpread(); }

function Clan_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Clan_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function Clan_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return Clan_arrayLikeToArray(arr); }

function Clan_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = Clan_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function Clan_slicedToArray(arr, i) { return Clan_arrayWithHoles(arr) || Clan_iterableToArrayLimit(arr, i) || Clan_unsupportedIterableToArray(arr, i) || Clan_nonIterableRest(); }

function Clan_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Clan_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Clan_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Clan_arrayLikeToArray(o, minLen); }

function Clan_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Clan_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Clan_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Clan_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Clan_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Clan_createClass(Constructor, protoProps, staticProps) { if (protoProps) Clan_defineProperties(Constructor.prototype, protoProps); if (staticProps) Clan_defineProperties(Constructor, staticProps); return Constructor; }

function Clan_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _wrapRegExp() { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, undefined, groups); }; var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, flags, groups) { var _this = new RegExp(re, flags); _groups.set(_this, groups || _groups.get(re)); return Clan_setPrototypeOf(_this, BabelRegExp.prototype); } Clan_inherits(BabelRegExp, RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === "string") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } else if (typeof substitution === "function") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = arguments; if (typeof args[args.length - 1] !== "object") { args = [].slice.call(args); args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }

function Clan_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Clan_setPrototypeOf(subClass, superClass); }

function Clan_setPrototypeOf(o, p) { Clan_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Clan_setPrototypeOf(o, p); }





var clanIdCache = {};

var toPlayerId = player => typeof player === "string" ? (0,external_kolmafia_.getPlayerId)(player) : player;

var LOG_FAX_PATTERN = /*#__PURE__*/_wrapRegExp(/([0-9]{2}\/[0-9]{2}\/[0-9]{2}, [0-9]{2}:[0-9]{2}(?:AM|PM): )<a (?:(?!>)[\s\S])+>((?:(?!<)[\s\S])+)<\/a>(?: faxed in a (.*?))<br>/, {
  monster: 3
});

var WHITELIST_DEGREE_PATTERN = /*#__PURE__*/_wrapRegExp(/(.*?) \(\xB0([0-9]+)\)/, {
  name: 1,
  degree: 2
});

var Clan = /*#__PURE__*/function () {
  function Clan(id, name) {
    Clan_classCallCheck(this, Clan);

    Clan_defineProperty(this, "id", void 0);

    Clan_defineProperty(this, "name", void 0);

    this.id = id;
    this.name = name;
  }

  Clan_createClass(Clan, [{
    key: "_check",
    value: function _check() {
      if (this.id !== (0,external_kolmafia_.getClanId)()) {
        throw new Error("You are no longer a member of this clan");
      }
    }
    /**
     * Join clan
     */

  }, {
    key: "join",
    value: function join() {
      return Clan.join(this.id);
    }
  }, {
    key: "check",
    value: function check() {
      return (0,external_kolmafia_.visitUrl)("clan_hall.php").includes("<b>".concat(this.name, "</b>"));
    }
    /**
     * Return the monster that is currently in the current clan's fax machine if any
     */

  }, {
    key: "getCurrentFax",
    value: function getCurrentFax() {
      this._check();

      var logs = (0,external_kolmafia_.visitUrl)("clan_log.php");
      var lastFax = logs.match(LOG_FAX_PATTERN);
      if (!lastFax) return null;

      var _lastFax = Clan_slicedToArray(lastFax, 4),
          monsterName = _lastFax[3];

      if (!monsterName) return null;
      return external_kolmafia_.Monster.get(monsterName);
    }
    /**
     * List available ranks (name, degree and id) from the current clan
     */

  }, {
    key: "getRanks",
    value: function getRanks() {
      this._check();

      var page = (0,external_kolmafia_.visitUrl)("clan_whitelist.php");
      return (0,external_kolmafia_.xpath)(page, '//select[@name="level"]//option').map(option => {
        var validHtml = "<select>".concat(option, "</select>");
        var match = (0,external_kolmafia_.xpath)(validHtml, "//text()")[0].match(WHITELIST_DEGREE_PATTERN);
        var id = (0,external_kolmafia_.xpath)(validHtml, "//@value")[0];
        if (!match || !id) return null;

        var _match = Clan_slicedToArray(match, 3),
            name = _match[1],
            degree = _match[2];

        return {
          name: name,
          degree: Number.parseInt(degree),
          id: Number.parseInt(id)
        };
      }).filter(utils/* notNull */.Nf);
    }
    /**
     * Add a player to the current clan's whitelist.
     * If the player is already in the whitelist this will change their rank or title.
     * @param player Player id or name
     * @param rankName Rank to give the player. If not provided they will be given the lowest rank
     * @param title Title to give the player. If not provided, will be blank
     */

  }, {
    key: "addPlayerToWhitelist",
    value: function addPlayerToWhitelist(player, rankName) {
      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

      this._check();

      var playerId = toPlayerId(player);
      var ranks = this.getRanks();
      var rank = rankName ? ranks.find(r => r.name === rankName) : ranks.sort((a, b) => a.degree - b.degree)[0];
      if (!rank) return false;
      var result = (0,external_kolmafia_.visitUrl)("clan_whitelist.php?action=add&pwd&addwho=".concat(playerId, "&level=").concat(rank.id, "&title=").concat(title));
      return result.includes("added to whitelist.") || result.includes("That player is already on the whitelist");
    }
    /**
     * Remove a player from the current clan's whitelist
     * @param player Player id or name
     */

  }, {
    key: "removePlayerFromWhitelist",
    value: function removePlayerFromWhitelist(player) {
      this._check();

      var playerId = toPlayerId(player);
      var result = (0,external_kolmafia_.visitUrl)("clan_whitelist.php?action=updatewl&pwd&who=".concat(playerId, "&remove=Remove"));
      return result.includes("Whitelist updated.");
    }
    /**
     * Return the amount of meat in the current clan's coffer.
     */

  }, {
    key: "getMeatInCoffer",
    value: function getMeatInCoffer() {
      this._check();

      var page = (0,external_kolmafia_.visitUrl)("clan_stash.php");

      var _ref = page.match(/Your <b>Clan Coffer<\/b> contains ([\d,]+) Meat./) || ["0", "0"],
          _ref2 = Clan_slicedToArray(_ref, 2),
          meat = _ref2[1];

      return (0,utils/* parseNumber */.p3)(meat);
    }
    /**
     * Add the given amount of meat to the current clan's coffer.
     * @param amount Amount of meat to put in coffer
     */

  }, {
    key: "putMeatInCoffer",
    value: function putMeatInCoffer(amount) {
      this._check();

      var result = (0,external_kolmafia_.visitUrl)("clan_stash.php?pwd&action=contribute&howmuch=".concat(amount));
      return result.includes("You contributed");
    }
  }, {
    key: "take",
    value: function take(items) {
      this._check();

      var map = (0,utils/* arrayToCountedMap */.tv)(items);
      map.forEach((quantity, item) => {
        var needed = Math.max(0, quantity - (0,external_kolmafia_.availableAmount)(item));

        if (needed === 0) {
          return map.set(item, 0);
        }

        var foldGroup = (0,lib/* getFoldGroup */._D)(item);

        var _iterator = Clan_createForOfIteratorHelper(foldGroup),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var foldable = _step.value;
            var quantityToFold = Math.min(needed, (0,external_kolmafia_.availableAmount)(foldable));

            for (var _i3 = 0; _i3 < quantityToFold; _i3++) {
              (0,external_kolmafia_.cliExecute)("fold ".concat(item.name));
              needed--;
            }

            return map.set(item, needed);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        (0,external_kolmafia_.refreshStash)();

        for (var _i2 = 0, _arr2 = [item].concat(Clan_toConsumableArray(foldGroup)); _i2 < _arr2.length; _i2++) {
          var matchingItem = _arr2[_i2];
          var quantityToTake = Math.min(needed, (0,external_kolmafia_.stashAmount)(matchingItem));
          if (quantityToTake === 0) continue; // If we can't take from the stash, there's no sense in iterating through the whole fold group

          if (!(0,external_kolmafia_.takeStash)(quantityToTake, matchingItem)) return;

          if (matchingItem === item) {
            needed -= quantityToTake;
          } else {
            for (var i = 0; i < quantityToTake; i++) {
              (0,external_kolmafia_.cliExecute)("fold ".concat(matchingItem.name));
              needed--;
            }
          }
        }
      });
      return Array.isArray(items) ? (0,utils/* countedMapToArray */.Y8)(map) : map;
    }
  }, {
    key: "put",
    value: function put(items) {
      this._check();

      var map = (0,utils/* arrayToCountedMap */.tv)(items);
      if (!this.check()) throw new Error("Wanted to return ".concat((0,utils/* countedMapToString */.N3)(map), " to ").concat(this.name, " but KoLmafia's clan data is out of sync"));
      map.forEach((quantity, item) => {
        (0,external_kolmafia_.retrieveItem)(quantity, item);
        var returned = Math.min(quantity, (0,external_kolmafia_.availableAmount)(item));
        (0,external_kolmafia_.putStash)(returned, item);
        map.set(item, quantity - returned);
      });
      return Array.isArray(items) ? (0,utils/* countedMapToArray */.Y8)(map) : map;
    }
  }, {
    key: "withStash",
    value: function withStash(items, callback // eslint-disable-line @typescript-eslint/no-explicit-any
    ) {
      this._check();

      var map = (0,utils/* arrayToCountedMap */.tv)(items);
      return Clan._withStash(() => this.take(map), borrowed => this.put(borrowed), callback);
    }
  }], [{
    key: "_join",
    value: function _join(id) {
      var result = (0,external_kolmafia_.visitUrl)("showclan.php?recruiter=1&whichclan=".concat(id, "&pwd&whichclan=").concat(id, "&action=joinclan&apply=Apply+to+this+Clan&confirm=on"));

      if (!result.includes("clanhalltop.gif")) {
        throw new Error("Could not join clan");
      }

      return Clan.get();
    }
  }, {
    key: "_withStash",
    value: function _withStash(borrowFn, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    returnFn, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callback) {
      var borrowed = borrowFn();
      var map = (0,utils/* arrayToCountedMap */.tv)(borrowed);

      try {
        return callback(borrowed);
      } finally {
        if (map.size > 0) {
          var returned = (0,utils/* arrayToCountedMap */.tv)(returnFn(borrowed));
          map.forEach((quantity, item) => {
            var remaining = quantity - (returned.get(item) || 0);

            if (remaining > 0) {
              map.set(item, remaining);
            } else {
              map.delete(item);
            }
          });

          if (map.size > 0) {
            logger.error("Failed to return <b>".concat((0,utils/* countedMapToString */.N3)(map), "</b> to <b>").concat(this.name, "</b> stash"));
          }
        }
      }
    }
    /**
     * Join a clan and return its instance
     * @param clanIdOrName Clan id or name
     */

  }, {
    key: "join",
    value: function join(clanIdOrName) {
      var clanId;

      if (typeof clanIdOrName === "string") {
        var clanName = clanIdOrName.toLowerCase();

        if (clanName === (0,external_kolmafia_.getClanName)().toLowerCase()) {
          return Clan.get();
        }

        if (!(clanName in clanIdCache)) {
          var clan = Clan.getWhitelisted().find(c => c.name.toLowerCase() === clanName);

          if (!clan) {
            throw new Error("Player is not whitelisted to clan");
          }

          clanIdCache[clanName] = clan.id;
        }

        clanId = clanIdCache[clanName];
      } else {
        clanId = clanIdOrName;

        if (clanId === (0,external_kolmafia_.getClanId)()) {
          return Clan.get();
        }
      }

      return Clan._join(clanId);
    }
    /**
     * Execute callback as a member of a clan
     * and then restore prior membership
     * @param clanIdOrName Clan id or name
     */

  }, {
    key: "with",
    value: function _with(clanIdOrName, callback) {
      var startingClan = Clan.get();
      var clan = Clan.join(clanIdOrName);

      try {
        return callback(clan);
      } finally {
        startingClan.join();
      }
    }
  }, {
    key: "withStash",
    value: function withStash(clanIdOrName, items, // eslint-disable-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    callback // eslint-disable-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    ) {
      return Clan._withStash(() => Clan.with(clanIdOrName, clan => clan.take(items)), borrowed => Clan.with(clanIdOrName, clan => clan.put(borrowed)), callback);
    }
    /**
     * Return player's current Clan
     */

  }, {
    key: "get",
    value: function get() {
      return new Clan((0,external_kolmafia_.getClanId)(), (0,external_kolmafia_.getClanName)());
    }
    /**
     * Get list of clans to which the player is whitelisted
     */

  }, {
    key: "getWhitelisted",
    value: function getWhitelisted() {
      var page = (0,external_kolmafia_.visitUrl)("clan_signup.php");
      return (0,external_kolmafia_.xpath)(page, '//select[@name="whichclan"]//option').map(option => {
        var validHtml = "<select>".concat(option, "</select>");
        var id = Number.parseInt((0,external_kolmafia_.xpath)(validHtml, "//@value")[0]);
        var name = (0,external_kolmafia_.xpath)(validHtml, "//text()")[0];
        return new Clan(id, name);
      });
    }
  }]);

  return Clan;
}();
;// CONCATENATED MODULE: ./src/tasks/common.ts
var common_templateObject, common_templateObject2, common_templateObject3, common_templateObject4, common_templateObject5, common_templateObject6, common_templateObject7, common_templateObject8, common_templateObject9, common_templateObject10, common_templateObject11, common_templateObject12, common_templateObject13, common_templateObject14, common_templateObject15, common_templateObject16, common_templateObject17, common_templateObject18, common_templateObject19, common_templateObject20, common_templateObject21, common_templateObject22, common_templateObject23, common_templateObject24, common_templateObject25, common_templateObject26, common_templateObject27, common_templateObject28, common_templateObject29, common_templateObject30, common_templateObject31, common_templateObject32, common_templateObject33, common_templateObject34, common_templateObject35, common_templateObject36, common_templateObject37, common_templateObject38, common_templateObject39, common_templateObject40, common_templateObject41, common_templateObject42, common_templateObject43;

function common_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var MOTHERSLIME_CLAN = "The Genius Clan";
var VIP_CLAN = "Bonus Adventures From Hell";
var holidayRunawayTask = {
  name: "Holiday Runaway",
  ready: () => couldRunaway(),
  completed: () => {
    var _Counter$get;

    return ((_Counter$get = counter_get("Holiday Monster window begin")) !== null && _Counter$get !== void 0 ? _Counter$get : Infinity) > 0;
  },
  do: (0,template_string/* $location */.PG)(common_templateObject || (common_templateObject = common_taggedTemplateLiteral(["Noob Cave"]))),
  combat: new CombatStrategy().macro(src_combat["default"].ifHolidayWanderer(src_combat["default"].runaway()).abort()),
  outfit: {
    familiar: (0,template_string/* $familiar */.HP)(common_templateObject2 || (common_templateObject2 = common_taggedTemplateLiteral(["Pair of Stomping Boots"])))
  },
  limit: {
    tries: 1
  }
};
var innerElfTask = {
  name: "Inner Elf",
  ready: () => (0,external_kolmafia_.myLevel)() >= 13 && (0,property/* get */.U2)("_kgbTranquilizerDartUses") < 3,
  prepare: () => {
    Clan.join(MOTHERSLIME_CLAN);
    if (!(0,property/* get */.U2)("_photocopyUsed") && !(0,lib/* have */.lf)((0,template_string/* $item */.xr)(common_templateObject3 || (common_templateObject3 = common_taggedTemplateLiteral(["photocopied monster"]))))) (0,external_kolmafia_.cliExecute)("fax receive");
  },
  completed: () => (0,lib/* have */.lf)((0,template_string/* $effect */._G)(common_templateObject4 || (common_templateObject4 = common_taggedTemplateLiteral(["Inner Elf"])))),
  do: (0,template_string/* $location */.PG)(common_templateObject5 || (common_templateObject5 = common_taggedTemplateLiteral(["The Slime Tube"]))),
  post: () => Clan.join(VIP_CLAN),
  combat: new CombatStrategy().macro(src_combat["default"].skill((0,template_string/* $skill */.tm)(common_templateObject6 || (common_templateObject6 = common_taggedTemplateLiteral(["KGB tranquilizer dart"]))))),
  choices: {
    326: 1
  },
  effects: [(0,template_string/* $effect */._G)(common_templateObject7 || (common_templateObject7 = common_taggedTemplateLiteral(["Blood Bubble"])))],
  outfit: {
    acc1: (0,template_string/* $item */.xr)(common_templateObject8 || (common_templateObject8 = common_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"]))),
    acc2: (0,template_string/* $item */.xr)(common_templateObject9 || (common_templateObject9 = common_taggedTemplateLiteral(["Eight Days a Week Pill Keeper"]))),
    pants: (0,template_string/* $item */.xr)(common_templateObject10 || (common_templateObject10 = common_taggedTemplateLiteral(["designer sweatpants"]))),
    familiar: (0,template_string/* $familiar */.HP)(common_templateObject11 || (common_templateObject11 = common_taggedTemplateLiteral(["Machine Elf"])))
  },
  limit: {
    tries: 1
  }
};
var meteorShowerTask = {
  name: "Meteor Shower",
  ready: () => (0,property/* get */.U2)("_meteorShowerUses") < 5 && (0,property/* get */.U2)("_saberForceUses") < 5,
  completed: () => (0,lib/* have */.lf)((0,template_string/* $effect */._G)(common_templateObject12 || (common_templateObject12 = common_taggedTemplateLiteral(["Meteor Showered"])))),
  do: (0,template_string/* $location */.PG)(common_templateObject13 || (common_templateObject13 = common_taggedTemplateLiteral(["The Dire Warren"]))),
  combat: new CombatStrategy().macro(src_combat["default"].skill((0,template_string/* $skill */.tm)(common_templateObject14 || (common_templateObject14 = common_taggedTemplateLiteral(["Meteor Shower"])))).skill((0,template_string/* $skill */.tm)(common_templateObject15 || (common_templateObject15 = common_taggedTemplateLiteral(["Use the Force"]))))),
  choices: {
    1387: 3
  },
  outfit: {
    weapon: (0,template_string/* $item */.xr)(common_templateObject16 || (common_templateObject16 = common_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
    familiar: (0,template_string/* $familiar */.HP)(common_templateObject17 || (common_templateObject17 = common_taggedTemplateLiteral(["Melodramedary"])))
  },
  limit: {
    tries: 1
  }
};

function mystSynthAttainable() {
  if ((0,lib/* have */.lf)((0,template_string/* $item */.xr)(common_templateObject18 || (common_templateObject18 = common_taggedTemplateLiteral(["yellow candy heart"])))) && (0,lib/* have */.lf)((0,template_string/* $item */.xr)(common_templateObject19 || (common_templateObject19 = common_taggedTemplateLiteral(["Crimbo peppermint bark"])))) || (0,lib/* have */.lf)((0,template_string/* $item */.xr)(common_templateObject20 || (common_templateObject20 = common_taggedTemplateLiteral(["orange candy heart"])))) && ((0,lib/* have */.lf)((0,template_string/* $item */.xr)(common_templateObject21 || (common_templateObject21 = common_taggedTemplateLiteral(["Crimbo candied pecan"])))) || (0,lib/* have */.lf)((0,template_string/* $item */.xr)(common_templateObject22 || (common_templateObject22 = common_taggedTemplateLiteral(["peppermint sprout"]))))) || (0,lib/* have */.lf)((0,template_string/* $item */.xr)(common_templateObject23 || (common_templateObject23 = common_taggedTemplateLiteral(["pink candy heart"])))) && ((0,lib/* have */.lf)((0,template_string/* $item */.xr)(common_templateObject24 || (common_templateObject24 = common_taggedTemplateLiteral(["peppermint sprout"])))) || (0,lib/* have */.lf)((0,template_string/* $item */.xr)(common_templateObject25 || (common_templateObject25 = common_taggedTemplateLiteral(["peppermint twist"]))))) || (0,lib/* have */.lf)((0,template_string/* $item */.xr)(common_templateObject26 || (common_templateObject26 = common_taggedTemplateLiteral(["lavender candy heart"])))) && (0,lib/* have */.lf)((0,template_string/* $item */.xr)(common_templateObject27 || (common_templateObject27 = common_taggedTemplateLiteral(["Crimbo fudge"]))))) return true;
  return false;
}

function chooseLibram() {
  var needLoveSong = (0,external_kolmafia_.itemAmount)((0,template_string/* $item */.xr)(common_templateObject28 || (common_templateObject28 = common_taggedTemplateLiteral(["love song of icy revenge"])))) + Math.floor((0,external_kolmafia_.haveEffect)((0,template_string/* $effect */._G)(common_templateObject29 || (common_templateObject29 = common_taggedTemplateLiteral(["Cold Hearted"])))) / 5) < 4;

  if (!(0,lib/* have */.lf)((0,template_string/* $effect */._G)(common_templateObject30 || (common_templateObject30 = common_taggedTemplateLiteral(["Synthesis: Smart"])))) && !mystSynthAttainable()) {
    return (0,template_string/* $skill */.tm)(common_templateObject31 || (common_templateObject31 = common_taggedTemplateLiteral(["Summon Candy Heart"])));
  } else if (!(0,lib/* have */.lf)((0,template_string/* $item */.xr)(common_templateObject32 || (common_templateObject32 = common_taggedTemplateLiteral(["resolution: be happier"])))) && !(0,lib/* have */.lf)((0,template_string/* $effect */._G)(common_templateObject33 || (common_templateObject33 = common_taggedTemplateLiteral(["Joyful Resolve"])))) || !(0,lib/* have */.lf)((0,template_string/* $item */.xr)(common_templateObject34 || (common_templateObject34 = common_taggedTemplateLiteral(["resolution: be feistier"])))) && !(0,lib/* have */.lf)((0,template_string/* $effect */._G)(common_templateObject35 || (common_templateObject35 = common_taggedTemplateLiteral(["Destructive Resolve"]))))) {
    return (0,template_string/* $skill */.tm)(common_templateObject36 || (common_templateObject36 = common_taggedTemplateLiteral(["Summon Resolutions"])));
  } else if (!(0,lib/* have */.lf)((0,template_string/* $item */.xr)(common_templateObject37 || (common_templateObject37 = common_taggedTemplateLiteral(["green candy heart"])))) && !(0,lib/* have */.lf)((0,template_string/* $effect */._G)(common_templateObject38 || (common_templateObject38 = common_taggedTemplateLiteral(["Heart of Green"])))) || !(0,lib/* have */.lf)((0,template_string/* $item */.xr)(common_templateObject39 || (common_templateObject39 = common_taggedTemplateLiteral(["lavender candy heart"])))) && !(0,lib/* have */.lf)((0,template_string/* $effect */._G)(common_templateObject40 || (common_templateObject40 = common_taggedTemplateLiteral(["Heart of Lavender"]))))) {
    return (0,template_string/* $skill */.tm)(common_templateObject41 || (common_templateObject41 = common_taggedTemplateLiteral(["Summon Candy Heart"])));
  } else if (needLoveSong) {
    return (0,template_string/* $skill */.tm)(common_templateObject42 || (common_templateObject42 = common_taggedTemplateLiteral(["Summon Love Song"])));
  }

  return (0,template_string/* $skill */.tm)(common_templateObject43 || (common_templateObject43 = common_taggedTemplateLiteral(["Summon Taffy"])));
}

function burnLibram(saveMp) {
  while ((0,external_kolmafia_.myMp)() >= (0,external_kolmafia_.mpCost)(chooseLibram()) + saveMp) {
    (0,external_kolmafia_.useSkill)(chooseLibram());
  }
}
;// CONCATENATED MODULE: ./src/tasks/coilwire.ts
var coilwire_templateObject, coilwire_templateObject2, coilwire_templateObject3, coilwire_templateObject4, coilwire_templateObject5, coilwire_templateObject6, coilwire_templateObject7, coilwire_templateObject8, coilwire_templateObject9, coilwire_templateObject10, coilwire_templateObject11;

function coilwire_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function coilwire_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function coilwire_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { coilwire_ownKeys(Object(source), true).forEach(function (key) { coilwire_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { coilwire_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function coilwire_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var CoilWireQuest = {
  name: "Coil Wire",
  completed: () => CommunityService.CoilWire.isDone(),
  tasks: [coilwire_objectSpread({}, holidayRunawayTask), {
    name: "Kramco with Shrub",
    ready: () => (0,lib/* getKramcoWandererChance */.ve)() >= 1.0,
    prepare: () => {
      decorate("Mysticality", "Spooky Damage", "Blocking", "Red Ray");
      if ((0,external_kolmafia_.myHp)() < (0,external_kolmafia_.myMaxhp)()) (0,external_kolmafia_.cliExecute)("hottub");
      if ((0,property/* get */.U2)("umbrellaState") !== "broken") (0,external_kolmafia_.cliExecute)("umbrella ml");
    },
    completed: () => (0,property/* get */.U2)("_sausageFights") > 0 || (0,lib/* have */.lf)((0,template_string/* $effect */._G)(coilwire_templateObject || (coilwire_templateObject = coilwire_taggedTemplateLiteral(["Everything Looks Red"])))),
    do: (0,template_string/* $location */.PG)(coilwire_templateObject2 || (coilwire_templateObject2 = coilwire_taggedTemplateLiteral(["Noob Cave"]))),
    combat: new CombatStrategy().macro(src_combat["default"].skill((0,template_string/* $skill */.tm)(coilwire_templateObject3 || (coilwire_templateObject3 = coilwire_taggedTemplateLiteral(["Open a Big Red Present"])))).skill((0,template_string/* $skill */.tm)(coilwire_templateObject4 || (coilwire_templateObject4 = coilwire_taggedTemplateLiteral(["Micrometeorite"])))).attack().repeat()),
    outfit: {
      hat: (0,template_string/* $item */.xr)(coilwire_templateObject5 || (coilwire_templateObject5 = coilwire_taggedTemplateLiteral(["Daylight Shavings Helmet"]))),
      back: (0,template_string/* $item */.xr)(coilwire_templateObject6 || (coilwire_templateObject6 = coilwire_taggedTemplateLiteral(["protonic accelerator pack"]))),
      offhand: (0,template_string/* $item */.xr)(coilwire_templateObject7 || (coilwire_templateObject7 = coilwire_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))),
      pants: (0,template_string/* $item */.xr)(coilwire_templateObject8 || (coilwire_templateObject8 = coilwire_taggedTemplateLiteral(["designer sweatpants"]))),
      familiar: (0,template_string/* $familiar */.HP)(coilwire_templateObject9 || (coilwire_templateObject9 = coilwire_taggedTemplateLiteral(["Crimbo Shrub"])))
    },
    post: () => (0,external_kolmafia_.useSkill)(Math.floor((0,external_kolmafia_.mySoulsauce)() / 5), (0,template_string/* $skill */.tm)(coilwire_templateObject10 || (coilwire_templateObject10 = coilwire_taggedTemplateLiteral(["Soul Food"])))),
    limit: {
      tries: 1
    }
  }, {
    name: "Test",
    completed: () => CommunityService.CoilWire.isDone(),
    do: () => CommunityService.CoilWire.run(() => undefined),
    outfit: {
      familiar: (0,template_string/* $familiar */.HP)(coilwire_templateObject11 || (coilwire_templateObject11 = coilwire_taggedTemplateLiteral(["Left-Hand Man"]))),
      modifier: "mp, mp regen, switch disembodied hand"
    }
  }]
};
;// CONCATENATED MODULE: ./src/tasks/donate.ts
var donate_templateObject, donate_templateObject2, donate_templateObject3;

function donate_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = donate_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function donate_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return donate_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return donate_arrayLikeToArray(o, minLen); }

function donate_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function donate_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var DonateQuest = {
  name: "Donate",
  tasks: [{
    name: "Test",
    completed: () => (0,property/* get */.U2)("kingLiberated"),
    do: () => CommunityService.donate(),
    limit: {
      tries: 1
    }
  }, {
    name: "Empty Hagnks",
    completed: () => (0,property/* get */.U2)("lastEmptiedStorage") === (0,external_kolmafia_.myAscensions)(),
    do: () => {
      debug("Emptying Hagnks!", "purple");
      debug("Please wait for up to 1 minute...", "blue");
      (0,external_kolmafia_.cliExecute)("hagnk all");
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Shrug Negative Effects",
    completed: () => !(0,lib/* have */.lf)((0,template_string/* $effect */._G)(donate_templateObject || (donate_templateObject = donate_taggedTemplateLiteral(["Feeling Lost"])))) && !(0,lib/* have */.lf)((0,template_string/* $effect */._G)(donate_templateObject2 || (donate_templateObject2 = donate_taggedTemplateLiteral(["Cowrruption"])))),
    do: () => {
      var _iterator = donate_createForOfIteratorHelper((0,template_string/* $effects */.lh)(donate_templateObject3 || (donate_templateObject3 = donate_taggedTemplateLiteral(["Feeling Lost, Cowrruption, Cold Hearted"])))),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var ef = _step.value;
          if ((0,lib/* have */.lf)(ef)) (0,lib/* uneffect */.Lo)(ef);
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
;// CONCATENATED MODULE: ./src/tasks/familiarweight.ts
var familiarweight_templateObject, familiarweight_templateObject2, familiarweight_templateObject3, familiarweight_templateObject4, familiarweight_templateObject5, familiarweight_templateObject6, familiarweight_templateObject7, familiarweight_templateObject8, familiarweight_templateObject9, familiarweight_templateObject10, familiarweight_templateObject11, familiarweight_templateObject12, familiarweight_templateObject13, familiarweight_templateObject14, familiarweight_templateObject15, familiarweight_templateObject16, familiarweight_templateObject17, familiarweight_templateObject18, familiarweight_templateObject19, familiarweight_templateObject20, familiarweight_templateObject21, familiarweight_templateObject22, familiarweight_templateObject23, familiarweight_templateObject24, familiarweight_templateObject25, familiarweight_templateObject26, familiarweight_templateObject27, familiarweight_templateObject28, familiarweight_templateObject29, familiarweight_templateObject30, familiarweight_templateObject31, familiarweight_templateObject32, familiarweight_templateObject33, familiarweight_templateObject34, familiarweight_templateObject35, familiarweight_templateObject36, familiarweight_templateObject37, familiarweight_templateObject38, familiarweight_templateObject39, familiarweight_templateObject40, familiarweight_templateObject41, familiarweight_templateObject42, familiarweight_templateObject43, familiarweight_templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58;

function familiarweight_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function familiarweight_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { familiarweight_ownKeys(Object(source), true).forEach(function (key) { familiarweight_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { familiarweight_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function familiarweight_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function familiarweight_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var FamiliarWeightQuest = {
  name: "Familiar Weight",
  completed: () => CommunityService.FamiliarWeight.isDone(),
  tasks: [{
    name: "Anticheese",
    completed: () => (0,property/* get */.U2)("lastAnticheeseDay") === 1,
    do: () => (0,external_kolmafia_.visitUrl)("place.php?whichplace=desertbeach&action=db_nukehouse"),
    limit: {
      tries: 1
    }
  }, {
    name: "DRINK ME",
    completed: () => (0,property/* get */.U2)("_lookingGlass"),
    do: () => (0,external_kolmafia_.visitUrl)("clan_viplounge.php?action=lookingglass&whichfloor=2"),
    limit: {
      tries: 1
    }
  }, {
    name: "Buffs",
    ready: () => !(0,property/* get */.U2)("moonTuned"),
    completed: () => (0,external_kolmafia_.mySign)() === "Platypus",
    do: () => {
      if ((0,lib/* have */.lf)((0,template_string/* $item */.xr)(familiarweight_templateObject || (familiarweight_templateObject = familiarweight_taggedTemplateLiteral(["green candy heart"]))))) (0,lib/* ensureEffect */.pq)((0,template_string/* $effect */._G)(familiarweight_templateObject2 || (familiarweight_templateObject2 = familiarweight_taggedTemplateLiteral(["Heart of Green"]))));
      if ((0,lib/* have */.lf)((0,template_string/* $item */.xr)(familiarweight_templateObject3 || (familiarweight_templateObject3 = familiarweight_taggedTemplateLiteral(["love song of icy revenge"]))))) (0,external_kolmafia_.use)(Math.min(4 - Math.floor((0,external_kolmafia_.haveEffect)((0,template_string/* $effect */._G)(familiarweight_templateObject4 || (familiarweight_templateObject4 = familiarweight_taggedTemplateLiteral(["Cold Hearted"])))) / 5), (0,external_kolmafia_.itemAmount)((0,template_string/* $item */.xr)(familiarweight_templateObject5 || (familiarweight_templateObject5 = familiarweight_taggedTemplateLiteral(["love song of icy revenge"]))))), (0,template_string/* $item */.xr)(familiarweight_templateObject6 || (familiarweight_templateObject6 = familiarweight_taggedTemplateLiteral(["love song of icy revenge"]))));
      if ((0,lib/* have */.lf)((0,template_string/* $item */.xr)(familiarweight_templateObject7 || (familiarweight_templateObject7 = familiarweight_taggedTemplateLiteral(["resolution: be kinder"]))))) (0,lib/* ensureEffect */.pq)((0,template_string/* $effect */._G)(familiarweight_templateObject8 || (familiarweight_templateObject8 = familiarweight_taggedTemplateLiteral(["Kindly Resolve"]))));
      (0,external_kolmafia_.cliExecute)("spoon platypus");
    },
    effects: [(0,template_string/* $effect */._G)(familiarweight_templateObject9 || (familiarweight_templateObject9 = familiarweight_taggedTemplateLiteral(["Billiards Belligerence"]))), (0,template_string/* $effect */._G)(familiarweight_templateObject10 || (familiarweight_templateObject10 = familiarweight_taggedTemplateLiteral(["Blood Bond"]))), (0,template_string/* $effect */._G)(familiarweight_templateObject11 || (familiarweight_templateObject11 = familiarweight_taggedTemplateLiteral(["Do I Know You From Somewhere?"]))), (0,template_string/* $effect */._G)(familiarweight_templateObject12 || (familiarweight_templateObject12 = familiarweight_taggedTemplateLiteral(["Empathy"]))), (0,template_string/* $effect */._G)(familiarweight_templateObject13 || (familiarweight_templateObject13 = familiarweight_taggedTemplateLiteral(["Fidoxene"]))), (0,template_string/* $effect */._G)(familiarweight_templateObject14 || (familiarweight_templateObject14 = familiarweight_taggedTemplateLiteral(["Leash of Linguini"]))), (0,template_string/* $effect */._G)(familiarweight_templateObject15 || (familiarweight_templateObject15 = familiarweight_taggedTemplateLiteral(["Puzzle Champ"]))), (0,template_string/* $effect */._G)(familiarweight_templateObject16 || (familiarweight_templateObject16 = familiarweight_taggedTemplateLiteral(["Robot Friends"]))), (0,template_string/* $effect */._G)(familiarweight_templateObject17 || (familiarweight_templateObject17 = familiarweight_taggedTemplateLiteral(["Shortly Stacked"]))), (0,template_string/* $effect */._G)(familiarweight_templateObject18 || (familiarweight_templateObject18 = familiarweight_taggedTemplateLiteral(["You Can Really Taste the Dormouse"])))],
    limit: {
      tries: 1
    }
  }, {
    name: "Set Gingerbread Clock",
    completed: () => (0,property/* get */.U2)("_gingerbreadCityTurns") > 0,
    do: (0,template_string/* $location */.PG)(familiarweight_templateObject19 || (familiarweight_templateObject19 = familiarweight_taggedTemplateLiteral(["Gingerbread Civic Center"]))),
    outfit: {
      hat: (0,template_string/* $item */.xr)(familiarweight_templateObject20 || (familiarweight_templateObject20 = familiarweight_taggedTemplateLiteral(["Daylight Shavings Helmet"]))),
      offhand: (0,template_string/* $item */.xr)(familiarweight_templateObject21 || (familiarweight_templateObject21 = familiarweight_taggedTemplateLiteral(["familiar scrapbook"]))),
      pants: (0,template_string/* $item */.xr)(familiarweight_templateObject22 || (familiarweight_templateObject22 = familiarweight_taggedTemplateLiteral(["designer sweatpants"]))),
      acc1: (0,template_string/* $item */.xr)(familiarweight_templateObject23 || (familiarweight_templateObject23 = familiarweight_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"]))),
      acc3: (0,template_string/* $item */.xr)(familiarweight_templateObject24 || (familiarweight_templateObject24 = familiarweight_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]))),
      familiar: (0,external_kolmafia_.itemAmount)((0,template_string/* $item */.xr)(familiarweight_templateObject25 || (familiarweight_templateObject25 = familiarweight_taggedTemplateLiteral(["sprinkles"])))) >= 50 ? (0,template_string/* $familiar */.HP)(familiarweight_templateObject26 || (familiarweight_templateObject26 = familiarweight_taggedTemplateLiteral(["Pair of Stomping Boots"]))) : (0,template_string/* $familiar */.HP)(familiarweight_templateObject27 || (familiarweight_templateObject27 = familiarweight_taggedTemplateLiteral(["Chocolate Lab"])))
    },
    choices: {
      1215: 1
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Gingerbread Earn Sprinkles",
    completed: () => (0,external_kolmafia_.itemAmount)((0,template_string/* $item */.xr)(familiarweight_templateObject28 || (familiarweight_templateObject28 = familiarweight_taggedTemplateLiteral(["sprinkles"])))) >= 50 || (0,property/* get */.U2)("_gingerbreadCityTurns") >= 4 || (0,lib/* have */.lf)((0,template_string/* $item */.xr)(familiarweight_templateObject29 || (familiarweight_templateObject29 = familiarweight_taggedTemplateLiteral(["gingerbread spice latte"])))) || (0,lib/* have */.lf)((0,template_string/* $effect */._G)(familiarweight_templateObject30 || (familiarweight_templateObject30 = familiarweight_taggedTemplateLiteral(["Whole Latte Love"])))) || (0,property/* get */.U2)("_chestXRayUsed") >= 3 || (0,property/* get */.U2)("_banderRunaways") >= ((0,external_kolmafia_.familiarWeight)((0,external_kolmafia_.myFamiliar)()) + (0,external_kolmafia_.weightAdjustment)()) / 5,
    do: (0,template_string/* $location */.PG)(familiarweight_templateObject31 || (familiarweight_templateObject31 = familiarweight_taggedTemplateLiteral(["Gingerbread Upscale Retail District"]))),
    outfit: {
      hat: (0,template_string/* $item */.xr)(familiarweight_templateObject32 || (familiarweight_templateObject32 = familiarweight_taggedTemplateLiteral(["Daylight Shavings Helmet"]))),
      offhand: (0,template_string/* $item */.xr)(familiarweight_templateObject33 || (familiarweight_templateObject33 = familiarweight_taggedTemplateLiteral(["familiar scrapbook"]))),
      pants: (0,template_string/* $item */.xr)(familiarweight_templateObject34 || (familiarweight_templateObject34 = familiarweight_taggedTemplateLiteral(["designer sweatpants"]))),
      acc1: (0,template_string/* $item */.xr)(familiarweight_templateObject35 || (familiarweight_templateObject35 = familiarweight_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"]))),
      acc3: (0,template_string/* $item */.xr)(familiarweight_templateObject36 || (familiarweight_templateObject36 = familiarweight_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]))),
      familiar: (0,template_string/* $familiar */.HP)(familiarweight_templateObject37 || (familiarweight_templateObject37 = familiarweight_taggedTemplateLiteral(["Chocolate Lab"])))
    },
    combat: new CombatStrategy().macro(src_combat["default"].externalIf((0,external_kolmafia_.itemAmount)((0,template_string/* $item */.xr)(familiarweight_templateObject38 || (familiarweight_templateObject38 = familiarweight_taggedTemplateLiteral(["sprinkles"])))) < 50 && (0,property/* get */.U2)("_chestXRayUsed") < 3, src_combat["default"].if_((0,template_string/* $monster */.O4)(familiarweight_templateObject39 || (familiarweight_templateObject39 = familiarweight_taggedTemplateLiteral(["gingerbread finance bro"]))) || (0,template_string/* $monster */.O4)(familiarweight_templateObject40 || (familiarweight_templateObject40 = familiarweight_taggedTemplateLiteral(["gingerbread tech bro"]))), src_combat["default"].skill((0,template_string/* $skill */.tm)(familiarweight_templateObject41 || (familiarweight_templateObject41 = familiarweight_taggedTemplateLiteral(["Chest X-Ray"]))))).trySkill((0,template_string/* $skill */.tm)(familiarweight_templateObject42 || (familiarweight_templateObject42 = familiarweight_taggedTemplateLiteral(["Feel Hatred"])))).trySkill((0,template_string/* $skill */.tm)(familiarweight_templateObject43 || (familiarweight_templateObject43 = familiarweight_taggedTemplateLiteral(["Reflex Hammer"])))).trySkill((0,template_string/* $skill */.tm)(familiarweight_templateObject44 || (familiarweight_templateObject44 = familiarweight_taggedTemplateLiteral(["Snokebomb"])))).trySkill((0,template_string/* $skill */.tm)(_templateObject45 || (_templateObject45 = familiarweight_taggedTemplateLiteral(["KGB tranquilizer dart"])))).abort()).abort()),
    limit: {
      tries: 3
    }
  }, {
    name: "Gingerbread Get Latte",
    ready: () => (0,external_kolmafia_.itemAmount)((0,template_string/* $item */.xr)(_templateObject46 || (_templateObject46 = familiarweight_taggedTemplateLiteral(["sprinkles"])))) >= 50 && (0,property/* get */.U2)("_banderRunaways") < ((0,external_kolmafia_.familiarWeight)((0,external_kolmafia_.myFamiliar)()) + (0,external_kolmafia_.weightAdjustment)()) / 5,
    completed: () => (0,property/* get */.U2)("_gingerbreadCityTurns") >= 5 || (0,lib/* have */.lf)((0,template_string/* $item */.xr)(_templateObject47 || (_templateObject47 = familiarweight_taggedTemplateLiteral(["gingerbread spice latte"])))) || (0,lib/* have */.lf)((0,template_string/* $effect */._G)(_templateObject48 || (_templateObject48 = familiarweight_taggedTemplateLiteral(["Whole Latte Love"])))),
    do: (0,template_string/* $location */.PG)(_templateObject49 || (_templateObject49 = familiarweight_taggedTemplateLiteral(["Gingerbread Upscale Retail District"]))),
    outfit: {
      hat: (0,template_string/* $item */.xr)(_templateObject50 || (_templateObject50 = familiarweight_taggedTemplateLiteral(["Daylight Shavings Helmet"]))),
      offhand: (0,template_string/* $item */.xr)(_templateObject51 || (_templateObject51 = familiarweight_taggedTemplateLiteral(["familiar scrapbook"]))),
      pants: (0,template_string/* $item */.xr)(_templateObject52 || (_templateObject52 = familiarweight_taggedTemplateLiteral(["designer sweatpants"]))),
      acc1: (0,template_string/* $item */.xr)(_templateObject53 || (_templateObject53 = familiarweight_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"]))),
      acc3: (0,template_string/* $item */.xr)(_templateObject54 || (_templateObject54 = familiarweight_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]))),
      familiar: (0,template_string/* $familiar */.HP)(_templateObject55 || (_templateObject55 = familiarweight_taggedTemplateLiteral(["Pair of Stomping Boots"])))
    },
    combat: new CombatStrategy().macro(src_combat["default"].runaway()),
    choices: {
      1208: 3
    },
    post: () => {
      if ((0,lib/* have */.lf)((0,template_string/* $item */.xr)(_templateObject56 || (_templateObject56 = familiarweight_taggedTemplateLiteral(["gingerbread spice latte"]))))) (0,lib/* ensureEffect */.pq)((0,template_string/* $effect */._G)(_templateObject57 || (_templateObject57 = familiarweight_taggedTemplateLiteral(["Whole Latte Love"]))));
    },
    limit: {
      tries: 3
    }
  }, familiarweight_objectSpread({}, meteorShowerTask), {
    name: "Test",
    completed: () => CommunityService.FamiliarWeight.isDone(),
    do: () => CommunityService.FamiliarWeight.run(() => printModtrace("Familiar Weight"), 19),
    outfit: {
      modifier: "familiar weight",
      familiar: (0,template_string/* $familiar */.HP)(_templateObject58 || (_templateObject58 = familiarweight_taggedTemplateLiteral(["Exotic Parrot"])))
    },
    limit: {
      tries: 1
    }
  }]
};
;// CONCATENATED MODULE: ./src/tasks/hotres.ts
var hotres_templateObject, hotres_templateObject2, hotres_templateObject3, hotres_templateObject4, hotres_templateObject5, hotres_templateObject6, hotres_templateObject7, hotres_templateObject8, hotres_templateObject9, hotres_templateObject10, hotres_templateObject11, hotres_templateObject12, hotres_templateObject13, hotres_templateObject14, hotres_templateObject15, hotres_templateObject16, hotres_templateObject17;

function hotres_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var HotResQuest = {
  name: "Hot Res",
  completed: () => CommunityService.HotRes.isDone(),
  tasks: [{
    name: "Foam Suit",
    ready: () => (0,property/* get */.U2)("_fireExtinguisherCharge") >= 10 && (0,property/* get */.U2)("_saberForceUses") < 5,
    completed: () => (0,lib/* have */.lf)((0,template_string/* $effect */._G)(hotres_templateObject || (hotres_templateObject = hotres_taggedTemplateLiteral(["Fireproof Foam Suit"])))),
    do: (0,template_string/* $location */.PG)(hotres_templateObject2 || (hotres_templateObject2 = hotres_taggedTemplateLiteral(["The Dire Warren"]))),
    combat: new CombatStrategy().macro(src_combat["default"].skill((0,template_string/* $skill */.tm)(hotres_templateObject3 || (hotres_templateObject3 = hotres_taggedTemplateLiteral(["Become a Cloud of Mist"])))).skill((0,template_string/* $skill */.tm)(hotres_templateObject4 || (hotres_templateObject4 = hotres_taggedTemplateLiteral(["Fire Extinguisher: Foam Yourself"])))).skill((0,template_string/* $skill */.tm)(hotres_templateObject5 || (hotres_templateObject5 = hotres_taggedTemplateLiteral(["Use the Force"]))))),
    choices: {
      1387: 3
    },
    outfit: {
      weapon: (0,template_string/* $item */.xr)(hotres_templateObject6 || (hotres_templateObject6 = hotres_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
      back: (0,template_string/* $item */.xr)(hotres_templateObject7 || (hotres_templateObject7 = hotres_taggedTemplateLiteral(["vampyric cloake"]))),
      offhand: (0,template_string/* $item */.xr)(hotres_templateObject8 || (hotres_templateObject8 = hotres_taggedTemplateLiteral(["industrial fire extinguisher"]))),
      familiar: (0,template_string/* $familiar */.HP)(hotres_templateObject9 || (hotres_templateObject9 = hotres_taggedTemplateLiteral(["Melodramedary"])))
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Test",
    prepare: () => (0,external_kolmafia_.cliExecute)("retrocape vampire hold"),
    completed: () => CommunityService.HotRes.isDone(),
    do: () => CommunityService.HotRes.run(() => printModtrace("Hot Resistance"), 1),
    outfit: {
      modifier: "hot res",
      familiar: (0,template_string/* $familiar */.HP)(hotres_templateObject10 || (hotres_templateObject10 = hotres_taggedTemplateLiteral(["Exotic Parrot"])))
    },
    effects: [(0,template_string/* $effect */._G)(hotres_templateObject11 || (hotres_templateObject11 = hotres_taggedTemplateLiteral(["Astral Shell"]))), (0,template_string/* $effect */._G)(hotres_templateObject12 || (hotres_templateObject12 = hotres_taggedTemplateLiteral(["Elemental Saucesphere"]))), (0,template_string/* $effect */._G)(hotres_templateObject13 || (hotres_templateObject13 = hotres_taggedTemplateLiteral(["Empathy"]))), (0,template_string/* $effect */._G)(hotres_templateObject14 || (hotres_templateObject14 = hotres_taggedTemplateLiteral(["Feeling Peaceful"]))), (0,template_string/* $effect */._G)(hotres_templateObject15 || (hotres_templateObject15 = hotres_taggedTemplateLiteral(["Hot-Headed"]))), (0,template_string/* $effect */._G)(hotres_templateObject16 || (hotres_templateObject16 = hotres_taggedTemplateLiteral(["Leash of Linguini"]))), (0,template_string/* $effect */._G)(hotres_templateObject17 || (hotres_templateObject17 = hotres_taggedTemplateLiteral(["Sleazy Hands"])))],
    limit: {
      tries: 1
    }
  }]
};
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
  return (0,lib/* have */.lf)((0,template_string/* $item */.xr)(TunnelOfLove_templateObject || (TunnelOfLove_templateObject = TunnelOfLove_taggedTemplateLiteral(["LOV Enamorang"]))));
}
function getLovEnamorangUses() {
  return (0,property/* get */.U2)("_enamorangs");
}
function couldUseLoveEnamorang() {
  return !(0,lib/* haveWandererCounter */.aY)(lib/* Wanderer.Enamorang */.Ie.Enamorang) && getLovEnamorangUses() < 3 && haveLovEnamorang();
}
function getLovEnamorangMonster() {
  return (0,property/* get */.U2)("enamorangMonster");
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
  (0,property/* set */.t8)("choiceAdventure1222", 1); // Entrance

  (0,property/* set */.t8)("choiceAdventure1223", 1); // Fight LOV Enforcer

  (0,property/* set */.t8)("choiceAdventure1224", equipmentChoice(equipment));
  (0,property/* set */.t8)("choiceAdventure1225", 1); // Fight LOV Engineer

  (0,property/* set */.t8)("choiceAdventure1226", effectChoice(effect));
  (0,property/* set */.t8)("choiceAdventure1227", 1); // Fight LOV Equivocator

  (0,property/* set */.t8)("choiceAdventure1228", extraChoice(extra));
  (0,external_kolmafia_.adv1)((0,template_string/* $location */.PG)(TunnelOfLove_templateObject2 || (TunnelOfLove_templateObject2 = TunnelOfLove_taggedTemplateLiteral(["The Tunnel of L.O.V.E."]))), 0, "");
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2016/Witchess.js
var Witchess_templateObject;

function Witchess_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var item = (0,template_string/* $item */.xr)(Witchess_templateObject || (Witchess_templateObject = Witchess_taggedTemplateLiteral(["Witchess Set"])));
function Witchess_have() {
  return haveInCampground(item);
}
function fightsDone() {
  return get("_witchessFights");
}
var pieces = external_kolmafia_.Monster.get(["Witchess Pawn", "Witchess Knight", "Witchess Bishop", "Witchess Rook", "Witchess Queen", "Witchess King", "Witchess Witch", "Witchess Ox"]);
function fightPiece(piece) {
  if (!pieces.includes(piece)) throw new Error("That is not a valid piece.");

  if (!(0,external_kolmafia_.visitUrl)("campground.php?action=witchess").includes("whichchoice value=1181")) {
    throw new Error("Failed to open Witchess.");
  }

  if (!(0,external_kolmafia_.runChoice)(1).includes("whichchoice=1182")) {
    throw new Error("Failed to visit shrink ray.");
  }

  if (!(0,external_kolmafia_.visitUrl)("choice.php?option=1&pwd=".concat((0,external_kolmafia_.myHash)(), "&whichchoice=1182&piece=").concat((0,external_kolmafia_.toInt)(piece)), false).includes(piece.name)) {
    throw new Error("Failed to start fight.");
  }

  return (0,external_kolmafia_.runCombat)();
}
;// CONCATENATED MODULE: ./src/tasks/leveling.ts
var leveling_templateObject, leveling_templateObject2, leveling_templateObject3, leveling_templateObject4, leveling_templateObject5, leveling_templateObject6, leveling_templateObject7, leveling_templateObject8, leveling_templateObject9, leveling_templateObject10, leveling_templateObject11, leveling_templateObject12, leveling_templateObject13, leveling_templateObject14, leveling_templateObject15, leveling_templateObject16, leveling_templateObject17, leveling_templateObject18, leveling_templateObject19, leveling_templateObject20, leveling_templateObject21, leveling_templateObject22, leveling_templateObject23, leveling_templateObject24, leveling_templateObject25, leveling_templateObject26, leveling_templateObject27, leveling_templateObject28, leveling_templateObject29, leveling_templateObject30, leveling_templateObject31, leveling_templateObject32, leveling_templateObject33, leveling_templateObject34, leveling_templateObject35, leveling_templateObject36, leveling_templateObject37, leveling_templateObject38, leveling_templateObject39, leveling_templateObject40, leveling_templateObject41, leveling_templateObject42, leveling_templateObject43, leveling_templateObject44, leveling_templateObject45, leveling_templateObject46, leveling_templateObject47, leveling_templateObject48, leveling_templateObject49, leveling_templateObject50, leveling_templateObject51, leveling_templateObject52, leveling_templateObject53, leveling_templateObject54, leveling_templateObject55, leveling_templateObject56, leveling_templateObject57, leveling_templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94, _templateObject95, _templateObject96, _templateObject97, _templateObject98, _templateObject99, _templateObject100, _templateObject101, _templateObject102, _templateObject103, _templateObject104, _templateObject105;

function leveling_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function leveling_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { leveling_ownKeys(Object(source), true).forEach(function (key) { leveling_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { leveling_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function leveling_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function leveling_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var LevelingQuest = {
  name: "Leveling",
  completed: () => (0,property/* get */.U2)("csServicesPerformed").split(",").length > 1,
  tasks: [{
    name: "Pilsners",
    ready: () => (0,external_kolmafia_.myLevel)() >= 11,
    prepare: () => {
      tryUse((0,template_string/* $item */.xr)(leveling_templateObject || (leveling_templateObject = leveling_taggedTemplateLiteral(["astral six-pack"]))));
      (0,lib/* uneffect */.Lo)((0,template_string/* $effect */._G)(leveling_templateObject2 || (leveling_templateObject2 = leveling_taggedTemplateLiteral(["Aloysius' Antiphon of Aptitude"]))));
    },
    completed: () => (0,external_kolmafia_.myInebriety)() >= 4,
    do: () => (0,external_kolmafia_.drink)(4 - (0,external_kolmafia_.myInebriety)(), (0,template_string/* $item */.xr)(leveling_templateObject3 || (leveling_templateObject3 = leveling_taggedTemplateLiteral(["astral pilsner"])))),
    effects: (0,template_string/* $effects */.lh)(leveling_templateObject4 || (leveling_templateObject4 = leveling_taggedTemplateLiteral(["Ode to Booze"]))),
    post: () => (0,lib/* uneffect */.Lo)((0,template_string/* $effect */._G)(leveling_templateObject5 || (leveling_templateObject5 = leveling_taggedTemplateLiteral(["Ode to Booze"])))),
    limit: {
      tries: 1
    }
  }, leveling_objectSpread({}, innerElfTask), {
    name: "Early Snojo",
    prepare: () => {
      if ((0,property/* get */.U2)("snojoSetting") === null) {
        (0,external_kolmafia_.visitUrl)("place.php?whichplace=snojo&action=snojo_controller");
        (0,external_kolmafia_.runChoice)(1);
      }

      (0,external_kolmafia_.useFamiliar)((0,template_string/* $familiar */.HP)(leveling_templateObject6 || (leveling_templateObject6 = leveling_taggedTemplateLiteral(["Galloping Grill"]))));
      (0,external_kolmafia_.useFamiliar)((0,template_string/* $familiar */.HP)(leveling_templateObject7 || (leveling_templateObject7 = leveling_taggedTemplateLiteral(["Shorter-Order Cook"]))));
      if ((0,property/* get */.U2)("umbrellaState") !== "broken") (0,external_kolmafia_.cliExecute)("umbrella ml");
    },
    completed: () => (0,property/* get */.U2)("_snojoFreeFights") >= 5,
    do: (0,template_string/* $location */.PG)(leveling_templateObject8 || (leveling_templateObject8 = leveling_taggedTemplateLiteral(["The X-32-F Combat Training Snowman"]))),
    combat: new CombatStrategy().macro(src_combat["default"].trySkill((0,template_string/* $skill */.tm)(leveling_templateObject9 || (leveling_templateObject9 = leveling_taggedTemplateLiteral(["Giant Growth"])))).if_((0,template_string/* $item */.xr)(leveling_templateObject10 || (leveling_templateObject10 = leveling_taggedTemplateLiteral(["blue rocket"]))), src_combat["default"].item((0,template_string/* $item */.xr)(leveling_templateObject11 || (leveling_templateObject11 = leveling_taggedTemplateLiteral(["blue rocket"]))))).default()),
    outfit: {
      familiar: (0,template_string/* $familiar */.HP)(leveling_templateObject12 || (leveling_templateObject12 = leveling_taggedTemplateLiteral(["Shorter-Order Cook"])))
    },
    limit: {
      tries: 5
    }
  }, {
    name: "Snojo for Newspaper",
    prepare: () => {
      if ((0,property/* get */.U2)("snojoSetting") === null) {
        (0,external_kolmafia_.visitUrl)("place.php?whichplace=snojo&action=snojo_controller");
        (0,external_kolmafia_.runChoice)(1);
      }

      if ((0,property/* get */.U2)("umbrellaState") !== "broken") (0,external_kolmafia_.cliExecute)("umbrella ml");
    },
    completed: () => (0,lib/* have */.lf)((0,template_string/* $item */.xr)(leveling_templateObject13 || (leveling_templateObject13 = leveling_taggedTemplateLiteral(["burning newspaper"])))) || (0,property/* get */.U2)("_snojoFreeFights") >= 10,
    do: (0,template_string/* $location */.PG)(leveling_templateObject14 || (leveling_templateObject14 = leveling_taggedTemplateLiteral(["The X-32-F Combat Training Snowman"]))),
    post: () => {
      if ((0,lib/* have */.lf)((0,template_string/* $item */.xr)(leveling_templateObject15 || (leveling_templateObject15 = leveling_taggedTemplateLiteral(["burning newspaper"]))))) (0,external_kolmafia_.cliExecute)("create burning paper crane");
      if ((0,property/* get */.U2)("_snojoFreeFights") >= 10) (0,external_kolmafia_.cliExecute)("hottub"); // Clean -stat effects
    },
    combat: new CombatStrategy().macro(src_combat["default"].trySkill((0,template_string/* $skill */.tm)(leveling_templateObject16 || (leveling_templateObject16 = leveling_taggedTemplateLiteral(["Giant Growth"])))).if_((0,template_string/* $item */.xr)(leveling_templateObject17 || (leveling_templateObject17 = leveling_taggedTemplateLiteral(["blue rocket"]))), src_combat["default"].item((0,template_string/* $item */.xr)(leveling_templateObject18 || (leveling_templateObject18 = leveling_taggedTemplateLiteral(["blue rocket"]))))).default()),
    outfit: {
      familiar: (0,template_string/* $familiar */.HP)(leveling_templateObject19 || (leveling_templateObject19 = leveling_taggedTemplateLiteral(["Garbage Fire"])))
    },
    limit: {
      tries: 5
    }
  }, {
    name: "LOV Tunnel",
    prepare: () => {
      if ((0,property/* get */.U2)("umbrellaState") !== "broken") (0,external_kolmafia_.cliExecute)("umbrella ml");
    },
    completed: () => (0,property/* get */.U2)("_loveTunnelUsed"),
    do: () => fightAll("LOV Epaulettes", "Open Heart Surgery", "LOV Extraterrestrial Chocolate"),
    combat: new CombatStrategy().macro(src_combat["default"].if_((0,template_string/* $monster */.O4)(leveling_templateObject20 || (leveling_templateObject20 = leveling_taggedTemplateLiteral(["LOV Enforcer"]))), src_combat["default"].attack().repeat()).if_((0,template_string/* $monster */.O4)(leveling_templateObject21 || (leveling_templateObject21 = leveling_taggedTemplateLiteral(["LOV Engineer"]))), src_combat["default"].skill((0,template_string/* $skill */.tm)(leveling_templateObject22 || (leveling_templateObject22 = leveling_taggedTemplateLiteral(["Saucegeyser"])))).repeat()).if_((0,template_string/* $monster */.O4)(leveling_templateObject23 || (leveling_templateObject23 = leveling_taggedTemplateLiteral(["LOV Equivocator"]))), src_combat["default"]["default"]())),
    outfit: {
      weapon: (0,template_string/* $item */.xr)(leveling_templateObject24 || (leveling_templateObject24 = leveling_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
      shirt: (0,template_string/* $item */.xr)(leveling_templateObject25 || (leveling_templateObject25 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"]))),
      familiar: (0,template_string/* $familiar */.HP)(leveling_templateObject26 || (leveling_templateObject26 = leveling_taggedTemplateLiteral(["Melodramedary"])))
    },
    acquire: [{
      item: (0,template_string/* $item */.xr)(leveling_templateObject27 || (leveling_templateObject27 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"])))
    }],
    limit: {
      tries: 1
    },
    post: () => {
      (0,external_kolmafia_.use)(1, (0,template_string/* $item */.xr)(leveling_templateObject28 || (leveling_templateObject28 = leveling_taggedTemplateLiteral(["LOV Elixir #3"]))));
    }
  }, {
    name: "Eldritch Tentacle",
    prepare: () => {
      if ((0,property/* get */.U2)("umbrellaState") !== "broken") (0,external_kolmafia_.cliExecute)("umbrella ml");
    },
    completed: () => (0,property/* get */.U2)("_eldritchHorrorEvoked"),
    do: () => (0,external_kolmafia_.useSkill)((0,template_string/* $skill */.tm)(leveling_templateObject29 || (leveling_templateObject29 = leveling_taggedTemplateLiteral(["Evoke Eldritch Horror"])))),
    post: () => {
      if ((0,lib/* have */.lf)((0,template_string/* $effect */._G)(leveling_templateObject30 || (leveling_templateObject30 = leveling_taggedTemplateLiteral(["Beaten Up"]))))) (0,external_kolmafia_.cliExecute)("hottub");
    },
    combat: new CombatStrategy().macro(src_combat["default"]["default"]()),
    outfit: {
      shirt: (0,template_string/* $item */.xr)(leveling_templateObject31 || (leveling_templateObject31 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"]))),
      familiar: (0,template_string/* $familiar */.HP)(leveling_templateObject32 || (leveling_templateObject32 = leveling_taggedTemplateLiteral(["Galloping Grill"])))
    },
    acquire: [{
      item: (0,template_string/* $item */.xr)(leveling_templateObject33 || (leveling_templateObject33 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"])))
    }],
    limit: {
      tries: 1
    }
  }, {
    name: "Witchess Knight",
    prepare: () => {
      (0,external_kolmafia_.useFamiliar)((0,template_string/* $familiar */.HP)(leveling_templateObject34 || (leveling_templateObject34 = leveling_taggedTemplateLiteral(["Galloping Grill"]))));
      (0,external_kolmafia_.useFamiliar)((0,template_string/* $familiar */.HP)(leveling_templateObject35 || (leveling_templateObject35 = leveling_taggedTemplateLiteral(["Shorter-Order Cook"]))));
      if ((0,property/* get */.U2)("umbrellaState") !== "broken") (0,external_kolmafia_.cliExecute)("umbrella ml");
    },
    completed: () => (0,property/* get */.U2)("_witchessFights") >= 3,
    do: () => fightPiece((0,template_string/* $monster */.O4)(leveling_templateObject36 || (leveling_templateObject36 = leveling_taggedTemplateLiteral(["Witchess Knight"])))),
    combat: new CombatStrategy().macro(src_combat["default"]["default"]()),
    outfit: {
      shirt: (0,template_string/* $item */.xr)(leveling_templateObject37 || (leveling_templateObject37 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"]))),
      familiar: (0,template_string/* $familiar */.HP)(leveling_templateObject38 || (leveling_templateObject38 = leveling_taggedTemplateLiteral(["Shorter-Order Cook"])))
    },
    acquire: [{
      item: (0,template_string/* $item */.xr)(leveling_templateObject39 || (leveling_templateObject39 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"])))
    }],
    limit: {
      tries: 3
    }
  }, {
    name: "Reminisce Knight",
    prepare: () => {
      (0,external_kolmafia_.useFamiliar)((0,template_string/* $familiar */.HP)(leveling_templateObject40 || (leveling_templateObject40 = leveling_taggedTemplateLiteral(["Galloping Grill"]))));
      (0,external_kolmafia_.useFamiliar)((0,template_string/* $familiar */.HP)(leveling_templateObject41 || (leveling_templateObject41 = leveling_taggedTemplateLiteral(["Shorter-Order Cook"]))));
      if ((0,property/* get */.U2)("umbrellaState") !== "broken") (0,external_kolmafia_.cliExecute)("umbrella ml");
    },
    completed: () => monstersReminisced().includes((0,template_string/* $monster */.O4)(leveling_templateObject42 || (leveling_templateObject42 = leveling_taggedTemplateLiteral(["Witchess Knight"])))),
    do: () => reminisce((0,template_string/* $monster */.O4)(leveling_templateObject43 || (leveling_templateObject43 = leveling_taggedTemplateLiteral(["Witchess Knight"])))),
    combat: new CombatStrategy().macro(src_combat["default"]["default"]()),
    outfit: {
      shirt: (0,template_string/* $item */.xr)(leveling_templateObject44 || (leveling_templateObject44 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"]))),
      familiar: (0,template_string/* $familiar */.HP)(leveling_templateObject45 || (leveling_templateObject45 = leveling_taggedTemplateLiteral(["Shorter-Order Cook"])))
    },
    acquire: [{
      item: (0,template_string/* $item */.xr)(leveling_templateObject46 || (leveling_templateObject46 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"])))
    }],
    limit: {
      tries: 1
    }
  }, {
    name: "Witchess King",
    prepare: () => {
      (0,external_kolmafia_.useFamiliar)((0,template_string/* $familiar */.HP)(leveling_templateObject47 || (leveling_templateObject47 = leveling_taggedTemplateLiteral(["Galloping Grill"]))));
      (0,external_kolmafia_.useFamiliar)((0,template_string/* $familiar */.HP)(leveling_templateObject48 || (leveling_templateObject48 = leveling_taggedTemplateLiteral(["Shorter-Order Cook"]))));
      if ((0,property/* get */.U2)("umbrellaState") !== "broken") (0,external_kolmafia_.cliExecute)("umbrella ml");
    },
    completed: () => (0,lib/* have */.lf)((0,template_string/* $item */.xr)(leveling_templateObject49 || (leveling_templateObject49 = leveling_taggedTemplateLiteral(["dented scepter"])))),
    do: () => fightPiece((0,template_string/* $monster */.O4)(leveling_templateObject50 || (leveling_templateObject50 = leveling_taggedTemplateLiteral(["Witchess King"])))),
    combat: new CombatStrategy().macro(src_combat["default"].delevel().attack().repeat()),
    outfit: {
      weapon: (0,template_string/* $item */.xr)(leveling_templateObject51 || (leveling_templateObject51 = leveling_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
      shirt: (0,template_string/* $item */.xr)(leveling_templateObject52 || (leveling_templateObject52 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"]))),
      familiar: (0,template_string/* $familiar */.HP)(leveling_templateObject53 || (leveling_templateObject53 = leveling_taggedTemplateLiteral(["Shorter-Order Cook"])))
    },
    acquire: [{
      item: (0,template_string/* $item */.xr)(leveling_templateObject54 || (leveling_templateObject54 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"])))
    }],
    limit: {
      tries: 1
    }
  }, {
    name: "Witchess Witch",
    prepare: () => {
      (0,external_kolmafia_.useFamiliar)((0,template_string/* $familiar */.HP)(leveling_templateObject55 || (leveling_templateObject55 = leveling_taggedTemplateLiteral(["Galloping Grill"]))));
      (0,external_kolmafia_.useFamiliar)((0,template_string/* $familiar */.HP)(leveling_templateObject56 || (leveling_templateObject56 = leveling_taggedTemplateLiteral(["Shorter-Order Cook"]))));
    },
    completed: () => (0,lib/* have */.lf)((0,template_string/* $item */.xr)(leveling_templateObject57 || (leveling_templateObject57 = leveling_taggedTemplateLiteral(["battle broom"])))),
    do: () => fightPiece((0,template_string/* $monster */.O4)(leveling_templateObject58 || (leveling_templateObject58 = leveling_taggedTemplateLiteral(["Witchess Witch"])))),
    combat: new CombatStrategy().macro(src_combat["default"].trySkill((0,template_string/* $skill */.tm)(_templateObject59 || (_templateObject59 = leveling_taggedTemplateLiteral(["Curse of Weaksauce"])))).attack().repeat()),
    outfit: {
      weapon: (0,template_string/* $item */.xr)(_templateObject60 || (_templateObject60 = leveling_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
      offhand: (0,template_string/* $item */.xr)(_templateObject61 || (_templateObject61 = leveling_taggedTemplateLiteral(["dented scepter"]))),
      shirt: (0,template_string/* $item */.xr)(_templateObject62 || (_templateObject62 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"]))),
      familiar: (0,template_string/* $familiar */.HP)(_templateObject63 || (_templateObject63 = leveling_taggedTemplateLiteral(["Shorter-Order Cook"])))
    },
    acquire: [{
      item: (0,template_string/* $item */.xr)(_templateObject64 || (_templateObject64 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"])))
    }],
    limit: {
      tries: 1
    }
  }, {
    name: "God Lobster",
    prepare: () => {
      if ((0,property/* get */.U2)("umbrellaState") !== "broken") (0,external_kolmafia_.cliExecute)("umbrella ml");
    },
    completed: () => (0,property/* get */.U2)("_godLobsterFights") >= 3,
    do: () => (0,external_kolmafia_.visitUrl)("main.php?fightgodlobster=1"),
    combat: new CombatStrategy().macro(src_combat["default"]["default"]()),
    choices: {
      1310: () => (0,lib/* have */.lf)((0,template_string/* $item */.xr)(_templateObject65 || (_templateObject65 = leveling_taggedTemplateLiteral(["God Lobster's Ring"])))) ? 2 : 1
    },
    // Get -combat on last fight
    outfit: {
      shirt: (0,template_string/* $item */.xr)(_templateObject66 || (_templateObject66 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"]))),
      famequip: (0,template_string/* $items */.vS)(_templateObject67 || (_templateObject67 = leveling_taggedTemplateLiteral(["God Lobster's Ring, God Lobster's Scepter, none"]))),
      familiar: (0,template_string/* $familiar */.HP)(_templateObject68 || (_templateObject68 = leveling_taggedTemplateLiteral(["God Lobster"])))
    },
    acquire: [{
      item: (0,template_string/* $item */.xr)(_templateObject69 || (_templateObject69 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"])))
    }],
    limit: {
      tries: 3
    }
  }, {
    name: "Neverending Party",
    prepare: () => {
      if ((0,property/* get */.U2)("umbrellaState") !== "broken") (0,external_kolmafia_.cliExecute)("umbrella ml");
    },
    completed: () => (0,property/* get */.U2)("_neverendingPartyFreeTurns") >= 10,
    do: (0,template_string/* $location */.PG)(_templateObject70 || (_templateObject70 = leveling_taggedTemplateLiteral(["The Neverending Party"]))),
    choices: {
      1324: 5
    },
    combat: new CombatStrategy().macro(src_combat["default"].trySkill((0,template_string/* $skill */.tm)(_templateObject71 || (_templateObject71 = leveling_taggedTemplateLiteral(["Bowl Sideways"])))).default()),
    outfit: {
      shirt: (0,template_string/* $item */.xr)(_templateObject72 || (_templateObject72 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"]))),
      familiar: (0,template_string/* $familiar */.HP)(_templateObject73 || (_templateObject73 = leveling_taggedTemplateLiteral(["Galloping Grill"])))
    },
    acquire: [{
      item: (0,template_string/* $item */.xr)(_templateObject74 || (_templateObject74 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"])))
    }],
    limit: {
      tries: 11
    }
  }, {
    name: "Retrieve Bowling Ball",
    completed: () => (0,lib/* have */.lf)((0,template_string/* $item */.xr)(_templateObject75 || (_templateObject75 = leveling_taggedTemplateLiteral(["cosmic bowling ball"])))) || (0,property/* get */.U2)("_banderRunaways") >= 10 || (0,property/* get */.U2)("_banderRunaways") >= ((0,external_kolmafia_.familiarWeight)((0,external_kolmafia_.myFamiliar)()) + (0,external_kolmafia_.weightAdjustment)()) / 5 || (0,property/* get */.U2)("_feelPrideUsed") > 0,
    do: (0,template_string/* $location */.PG)(_templateObject76 || (_templateObject76 = leveling_taggedTemplateLiteral(["Noob Cave"]))),
    combat: new CombatStrategy().macro(src_combat["default"].runaway()),
    outfit: {
      familiar: (0,template_string/* $familiar */.HP)(_templateObject77 || (_templateObject77 = leveling_taggedTemplateLiteral(["Pair of Stomping Boots"]))),
      modifier: "familiar weight"
    }
  }, {
    name: "Free Kills",
    completed: () => (0,property/* get */.U2)("_shatteringPunchUsed") >= 3 && (0,property/* get */.U2)("_gingerbreadMobHitUsed"),
    do: (0,template_string/* $location */.PG)(_templateObject78 || (_templateObject78 = leveling_taggedTemplateLiteral(["Uncle Gator's Country Fun-Time Liquid Waste Sluice"]))),
    outfit: {
      shirt: (0,template_string/* $item */.xr)(_templateObject79 || (_templateObject79 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"]))),
      familiar: (0,template_string/* $familiar */.HP)(_templateObject80 || (_templateObject80 = leveling_taggedTemplateLiteral(["Galloping Grill"])))
    },
    combat: new CombatStrategy().macro(src_combat["default"].trySkill((0,template_string/* $skill */.tm)(_templateObject81 || (_templateObject81 = leveling_taggedTemplateLiteral(["Feel Pride"])))).trySkill((0,template_string/* $skill */.tm)(_templateObject82 || (_templateObject82 = leveling_taggedTemplateLiteral(["Bowl Sideways"])))).trySkill((0,template_string/* $skill */.tm)(_templateObject83 || (_templateObject83 = leveling_taggedTemplateLiteral(["Shattering Punch"])))).trySkill((0,template_string/* $skill */.tm)(_templateObject84 || (_templateObject84 = leveling_taggedTemplateLiteral(["Gingerbread Mob Hit"])))).abort()),
    acquire: [{
      item: (0,template_string/* $item */.xr)(_templateObject85 || (_templateObject85 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"])))
    }],
    limit: {
      tries: 5
    }
  }, {
    name: "Sausage Goblin",
    prepare: () => {
      if ((0,property/* get */.U2)("umbrellaState") !== "broken") (0,external_kolmafia_.cliExecute)("umbrella ml");
      (0,external_kolmafia_.cliExecute)("terminal educate portscan");
    },
    completed: () => (0,property/* get */.U2)("_sausageFights") > 1,
    ready: () => (0,lib/* getKramcoWandererChance */.ve)() >= 1.0,
    do: (0,template_string/* $location */.PG)(_templateObject86 || (_templateObject86 = leveling_taggedTemplateLiteral(["The Neverending Party"]))),
    choices: {
      1322: 1
    },
    combat: new CombatStrategy().macro(src_combat["default"].if_((0,template_string/* $monster */.O4)(_templateObject87 || (_templateObject87 = leveling_taggedTemplateLiteral(["sausage goblin"]))), src_combat["default"].trySkill((0,template_string/* $skill */.tm)(_templateObject88 || (_templateObject88 = leveling_taggedTemplateLiteral(["Portscan"])))).default()).abort()),
    outfit: {
      offhand: (0,template_string/* $item */.xr)(_templateObject89 || (_templateObject89 = leveling_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))),
      shirt: (0,template_string/* $item */.xr)(_templateObject90 || (_templateObject90 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"]))),
      familiar: (0,template_string/* $familiar */.HP)(_templateObject91 || (_templateObject91 = leveling_taggedTemplateLiteral(["Galloping Grill"])))
    },
    acquire: [{
      item: (0,template_string/* $item */.xr)(_templateObject92 || (_templateObject92 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"])))
    }],
    limit: {
      tries: 1
    },
    post: () => (0,external_kolmafia_.eat)((0,external_kolmafia_.itemAmount)((0,template_string/* $item */.xr)(_templateObject93 || (_templateObject93 = leveling_taggedTemplateLiteral(["magical sausage"])))) + (0,external_kolmafia_.itemAmount)((0,template_string/* $item */.xr)(_templateObject94 || (_templateObject94 = leveling_taggedTemplateLiteral(["magical sausage casing"])))), (0,template_string/* $item */.xr)(_templateObject95 || (_templateObject95 = leveling_taggedTemplateLiteral(["magical sausage"]))))
  }, {
    name: "DMT",
    prepare: () => {
      if ((0,property/* get */.U2)("umbrellaState") !== "broken") (0,external_kolmafia_.cliExecute)("umbrella ml");
    },
    completed: () => (0,property/* get */.U2)("_machineTunnelsAdv") >= 5,
    do: () => {
      burnLibram(300);
      (0,external_kolmafia_.adv1)((0,template_string/* $location */.PG)(_templateObject96 || (_templateObject96 = leveling_taggedTemplateLiteral(["The Deep Machine Tunnels"]))), -1);
      if ((0,property/* get */.U2)("_latteRefillsUsed") < 3) (0,external_kolmafia_.cliExecute)("latte refill cinnamon pumpkin vanilla");
    },
    combat: new CombatStrategy().macro(src_combat["default"].trySkill((0,template_string/* $skill */.tm)(_templateObject97 || (_templateObject97 = leveling_taggedTemplateLiteral(["Gulp Latte"])))).if_((0,template_string/* $monster */.O4)(_templateObject98 || (_templateObject98 = leveling_taggedTemplateLiteral(["Government agent"]))), src_combat["default"].trySkill((0,template_string/* $skill */.tm)(_templateObject99 || (_templateObject99 = leveling_taggedTemplateLiteral(["Feel Envy"])))).default()).default()),
    outfit: {
      shirt: (0,template_string/* $item */.xr)(_templateObject100 || (_templateObject100 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"]))),
      offhand: (0,template_string/* $item */.xr)(_templateObject101 || (_templateObject101 = leveling_taggedTemplateLiteral(["latte lovers member's mug"]))),
      familiar: (0,template_string/* $familiar */.HP)(_templateObject102 || (_templateObject102 = leveling_taggedTemplateLiteral(["Machine Elf"])))
    },
    acquire: [{
      item: (0,template_string/* $item */.xr)(_templateObject103 || (_templateObject103 = leveling_taggedTemplateLiteral(["makeshift garbage shirt"])))
    }],
    limit: {
      tries: 5
    },
    post: () => {
      (0,lib/* uneffect */.Lo)((0,template_string/* $effect */._G)(_templateObject104 || (_templateObject104 = leveling_taggedTemplateLiteral(["Aloysius' Antiphon of Aptitude"]))));
      (0,lib/* uneffect */.Lo)((0,template_string/* $effect */._G)(_templateObject105 || (_templateObject105 = leveling_taggedTemplateLiteral(["Ur-Kel's Aria of Annoyance"]))));
    }
  }]
};
;// CONCATENATED MODULE: ./src/tasks/noncombat.ts
var noncombat_templateObject, noncombat_templateObject2, noncombat_templateObject3, noncombat_templateObject4, noncombat_templateObject5, noncombat_templateObject6, noncombat_templateObject7, noncombat_templateObject8, noncombat_templateObject9, noncombat_templateObject10;

function noncombat_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var NoncombatQuest = {
  name: "Noncombat",
  completed: () => CommunityService.Noncombat.isDone(),
  tasks: [{
    name: "Test",
    completed: () => CommunityService.Noncombat.isDone(),
    do: () => CommunityService.Noncombat.run(() => printModtrace("Combat Rate"), 1),
    outfit: {
      familiar: (0,template_string/* $familiar */.HP)(noncombat_templateObject || (noncombat_templateObject = noncombat_taggedTemplateLiteral(["Disgeist"]))),
      modifier: "-combat"
    },
    effects: [(0,template_string/* $effect */._G)(noncombat_templateObject2 || (noncombat_templateObject2 = noncombat_taggedTemplateLiteral(["Blessing of the Bird"]))), (0,template_string/* $effect */._G)(noncombat_templateObject3 || (noncombat_templateObject3 = noncombat_taggedTemplateLiteral(["Feeling Lonely"]))), (0,template_string/* $effect */._G)(noncombat_templateObject4 || (noncombat_templateObject4 = noncombat_taggedTemplateLiteral(["Gummed Shoes"]))), (0,template_string/* $effect */._G)(noncombat_templateObject5 || (noncombat_templateObject5 = noncombat_taggedTemplateLiteral(["Invisible Avatar"]))), (0,template_string/* $effect */._G)(noncombat_templateObject6 || (noncombat_templateObject6 = noncombat_taggedTemplateLiteral(["Silent Running"]))), (0,template_string/* $effect */._G)(noncombat_templateObject7 || (noncombat_templateObject7 = noncombat_taggedTemplateLiteral(["Smooth Movements"]))), (0,template_string/* $effect */._G)(noncombat_templateObject8 || (noncombat_templateObject8 = noncombat_taggedTemplateLiteral(["The Sonata of Sneakiness"]))), (0,template_string/* $effect */._G)(noncombat_templateObject9 || (noncombat_templateObject9 = noncombat_taggedTemplateLiteral(["Throwing Some Shade"])))],
    post: () => {
      (0,lib/* uneffect */.Lo)((0,template_string/* $effect */._G)(noncombat_templateObject10 || (noncombat_templateObject10 = noncombat_taggedTemplateLiteral(["The Sonata of Sneakiness"]))));
      burnLibram(300);
    },
    limit: {
      tries: 1
    }
  }]
};
;// CONCATENATED MODULE: ./src/tasks/postcoil.ts
var postcoil_templateObject, postcoil_templateObject2, postcoil_templateObject3, postcoil_templateObject4, postcoil_templateObject5, postcoil_templateObject6, postcoil_templateObject7, postcoil_templateObject8, postcoil_templateObject9, postcoil_templateObject10, postcoil_templateObject11, postcoil_templateObject12, postcoil_templateObject13, postcoil_templateObject14, postcoil_templateObject15, postcoil_templateObject16, postcoil_templateObject17, postcoil_templateObject18, postcoil_templateObject19, postcoil_templateObject20, postcoil_templateObject21, postcoil_templateObject22, postcoil_templateObject23, postcoil_templateObject24, postcoil_templateObject25, postcoil_templateObject26, postcoil_templateObject27, postcoil_templateObject28, postcoil_templateObject29, postcoil_templateObject30, postcoil_templateObject31, postcoil_templateObject32, postcoil_templateObject33, postcoil_templateObject34, postcoil_templateObject35, postcoil_templateObject36, postcoil_templateObject37, postcoil_templateObject38, postcoil_templateObject39, postcoil_templateObject40, postcoil_templateObject41, postcoil_templateObject42, postcoil_templateObject43, postcoil_templateObject44, postcoil_templateObject45, postcoil_templateObject46, postcoil_templateObject47, postcoil_templateObject48, postcoil_templateObject49, postcoil_templateObject50, postcoil_templateObject51, postcoil_templateObject52, postcoil_templateObject53, postcoil_templateObject54, postcoil_templateObject55, postcoil_templateObject56, postcoil_templateObject57, postcoil_templateObject58, postcoil_templateObject59, postcoil_templateObject60, postcoil_templateObject61, postcoil_templateObject62, postcoil_templateObject63, postcoil_templateObject64, postcoil_templateObject65, postcoil_templateObject66, postcoil_templateObject67, postcoil_templateObject68, postcoil_templateObject69, postcoil_templateObject70, postcoil_templateObject71, postcoil_templateObject72, postcoil_templateObject73, postcoil_templateObject74, postcoil_templateObject75, postcoil_templateObject76, postcoil_templateObject77, postcoil_templateObject78, postcoil_templateObject79, postcoil_templateObject80, postcoil_templateObject81, postcoil_templateObject82, postcoil_templateObject83, postcoil_templateObject84, postcoil_templateObject85, postcoil_templateObject86, postcoil_templateObject87, postcoil_templateObject88, postcoil_templateObject89, postcoil_templateObject90, postcoil_templateObject91, postcoil_templateObject92, postcoil_templateObject93, postcoil_templateObject94, postcoil_templateObject95, postcoil_templateObject96, postcoil_templateObject97, postcoil_templateObject98, postcoil_templateObject99, postcoil_templateObject100, postcoil_templateObject101, postcoil_templateObject102, postcoil_templateObject103, postcoil_templateObject104, postcoil_templateObject105, _templateObject106, _templateObject107, _templateObject108, _templateObject109, _templateObject110, _templateObject111, _templateObject112, _templateObject113, _templateObject114, _templateObject115, _templateObject116, _templateObject117, _templateObject118, _templateObject119, _templateObject120, _templateObject121, _templateObject122, _templateObject123, _templateObject124, _templateObject125, _templateObject126, _templateObject127, _templateObject128, _templateObject129, _templateObject130, _templateObject131, _templateObject132, _templateObject133, _templateObject134, _templateObject135, _templateObject136, _templateObject137, _templateObject138, _templateObject139, _templateObject140, _templateObject141, _templateObject142, _templateObject143, _templateObject144, _templateObject145, _templateObject146, _templateObject147, _templateObject148, _templateObject149, _templateObject150, _templateObject151, _templateObject152, _templateObject153, _templateObject154, _templateObject155, _templateObject156, _templateObject157, _templateObject158, _templateObject159, _templateObject160, _templateObject161, _templateObject162, _templateObject163, _templateObject164, _templateObject165, _templateObject166, _templateObject167, _templateObject168, _templateObject169, _templateObject170, _templateObject171, _templateObject172, _templateObject173, _templateObject174, _templateObject175, _templateObject176, _templateObject177, _templateObject178, _templateObject179, _templateObject180, _templateObject181, _templateObject182, _templateObject183, _templateObject184, _templateObject185, _templateObject186;

function postcoil_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function postcoil_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { postcoil_ownKeys(Object(source), true).forEach(function (key) { postcoil_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { postcoil_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function postcoil_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function postcoil_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var statGainBuffs = [(0,template_string/* $effect */._G)(postcoil_templateObject || (postcoil_templateObject = postcoil_taggedTemplateLiteral(["Inscrutable Gaze"]))), (0,template_string/* $effect */._G)(postcoil_templateObject2 || (postcoil_templateObject2 = postcoil_taggedTemplateLiteral(["Thaumodynamic"])))];
var levelingBuffs = [// Skill
(0,template_string/* $effect */._G)(postcoil_templateObject3 || (postcoil_templateObject3 = postcoil_taggedTemplateLiteral(["Big"]))), (0,template_string/* $effect */._G)(postcoil_templateObject4 || (postcoil_templateObject4 = postcoil_taggedTemplateLiteral(["Blood Bond"]))), (0,template_string/* $effect */._G)(postcoil_templateObject5 || (postcoil_templateObject5 = postcoil_taggedTemplateLiteral(["Blood Bubble"]))), (0,template_string/* $effect */._G)(postcoil_templateObject6 || (postcoil_templateObject6 = postcoil_taggedTemplateLiteral(["Carol of the Bulls"]))), (0,template_string/* $effect */._G)(postcoil_templateObject7 || (postcoil_templateObject7 = postcoil_taggedTemplateLiteral(["Carol of the Hells"]))), (0,template_string/* $effect */._G)(postcoil_templateObject8 || (postcoil_templateObject8 = postcoil_taggedTemplateLiteral(["Carol of the Thrills"]))), (0,template_string/* $effect */._G)(postcoil_templateObject9 || (postcoil_templateObject9 = postcoil_taggedTemplateLiteral(["Feeling Excited"]))), (0,template_string/* $effect */._G)(postcoil_templateObject10 || (postcoil_templateObject10 = postcoil_taggedTemplateLiteral(["Feeling Peaceful"]))), (0,template_string/* $effect */._G)(postcoil_templateObject11 || (postcoil_templateObject11 = postcoil_taggedTemplateLiteral(["Frenzied, Bloody"]))), (0,template_string/* $effect */._G)(postcoil_templateObject12 || (postcoil_templateObject12 = postcoil_taggedTemplateLiteral(["Ruthlessly Efficient"]))), (0,template_string/* $effect */._G)(postcoil_templateObject13 || (postcoil_templateObject13 = postcoil_taggedTemplateLiteral(["Song of Bravado"]))), (0,template_string/* $effect */._G)(postcoil_templateObject14 || (postcoil_templateObject14 = postcoil_taggedTemplateLiteral(["Triple-Sized"]))), // Class Skill
(0,template_string/* $effect */._G)(postcoil_templateObject15 || (postcoil_templateObject15 = postcoil_taggedTemplateLiteral(["Astral Shell"]))), (0,template_string/* $effect */._G)(postcoil_templateObject16 || (postcoil_templateObject16 = postcoil_taggedTemplateLiteral(["Aloysius' Antiphon of Aptitude"]))), (0,template_string/* $effect */._G)(postcoil_templateObject17 || (postcoil_templateObject17 = postcoil_taggedTemplateLiteral(["Elemental Saucesphere"]))), (0,template_string/* $effect */._G)(postcoil_templateObject18 || (postcoil_templateObject18 = postcoil_taggedTemplateLiteral(["Empathy"]))), (0,template_string/* $effect */._G)(postcoil_templateObject19 || (postcoil_templateObject19 = postcoil_taggedTemplateLiteral(["Ghostly Shell"]))), (0,template_string/* $effect */._G)(postcoil_templateObject20 || (postcoil_templateObject20 = postcoil_taggedTemplateLiteral(["Inscrutable Gaze"]))), (0,template_string/* $effect */._G)(postcoil_templateObject21 || (postcoil_templateObject21 = postcoil_taggedTemplateLiteral(["Leash of Linguini"]))), (0,template_string/* $effect */._G)(postcoil_templateObject22 || (postcoil_templateObject22 = postcoil_taggedTemplateLiteral(["Stevedave's Shanty of Superiority"]))), (0,template_string/* $effect */._G)(postcoil_templateObject23 || (postcoil_templateObject23 = postcoil_taggedTemplateLiteral(["[1458]Blood Sugar Sauce Magic"]))), // ML
(0,template_string/* $effect */._G)(postcoil_templateObject24 || (postcoil_templateObject24 = postcoil_taggedTemplateLiteral(["Drescher's Annoying Noise"]))), (0,template_string/* $effect */._G)(postcoil_templateObject25 || (postcoil_templateObject25 = postcoil_taggedTemplateLiteral(["Ur-Kel's Aria of Annoyance"]))), (0,template_string/* $effect */._G)(postcoil_templateObject26 || (postcoil_templateObject26 = postcoil_taggedTemplateLiteral(["Pride of the Puffin"]))), // Beach Comb
(0,template_string/* $effect */._G)(postcoil_templateObject27 || (postcoil_templateObject27 = postcoil_taggedTemplateLiteral(["Do I Know You From Somewhere?"]))), (0,template_string/* $effect */._G)(postcoil_templateObject28 || (postcoil_templateObject28 = postcoil_taggedTemplateLiteral(["Lack of Body-Building"]))), (0,template_string/* $effect */._G)(postcoil_templateObject29 || (postcoil_templateObject29 = postcoil_taggedTemplateLiteral(["Resting Beach Face"]))), (0,template_string/* $effect */._G)(postcoil_templateObject30 || (postcoil_templateObject30 = postcoil_taggedTemplateLiteral(["We're All Made of Starfish"]))), (0,template_string/* $effect */._G)(postcoil_templateObject31 || (postcoil_templateObject31 = postcoil_taggedTemplateLiteral(["You Learned Something Maybe!"]))), // Items
(0,template_string/* $effect */._G)(postcoil_templateObject32 || (postcoil_templateObject32 = postcoil_taggedTemplateLiteral(["Glittering Eyelashes"]))), // Other
(0,template_string/* $effect */._G)(postcoil_templateObject33 || (postcoil_templateObject33 = postcoil_taggedTemplateLiteral(["Billiards Belligerence"]))), (0,template_string/* $effect */._G)(postcoil_templateObject34 || (postcoil_templateObject34 = postcoil_taggedTemplateLiteral(["Blessing of your favorite Bird"]))), // Set up for +75% myst, +2 hot resist, -5% combat freq, +100 weapon dmg%, +20 weapon dmg
(0,template_string/* $effect */._G)(postcoil_templateObject35 || (postcoil_templateObject35 = postcoil_taggedTemplateLiteral(["Broad-Spectrum Vaccine"]))), (0,template_string/* $effect */._G)(postcoil_templateObject36 || (postcoil_templateObject36 = postcoil_taggedTemplateLiteral(["Favored by Lyle"]))), (0,template_string/* $effect */._G)(postcoil_templateObject37 || (postcoil_templateObject37 = postcoil_taggedTemplateLiteral(["Grumpy and Ornery"]))), (0,template_string/* $effect */._G)(postcoil_templateObject38 || (postcoil_templateObject38 = postcoil_taggedTemplateLiteral(["Starry-Eyed"]))), (0,template_string/* $effect */._G)(postcoil_templateObject39 || (postcoil_templateObject39 = postcoil_taggedTemplateLiteral(["Total Protonic Reversal"]))), (0,template_string/* $effect */._G)(postcoil_templateObject40 || (postcoil_templateObject40 = postcoil_taggedTemplateLiteral(["Uncucumbered"])))];
var PostCoilQuest = {
  name: "PostCoil",
  completed: () => (0,property/* get */.U2)("csServicesPerformed").split(",").length > 1,
  tasks: [{
    name: "Mayday",
    completed: () => !(0,lib/* have */.lf)((0,template_string/* $item */.xr)(postcoil_templateObject41 || (postcoil_templateObject41 = postcoil_taggedTemplateLiteral(["MayDay\u2122 supply package"])))),
    do: () => {
      (0,external_kolmafia_.use)((0,template_string/* $item */.xr)(postcoil_templateObject42 || (postcoil_templateObject42 = postcoil_taggedTemplateLiteral(["MayDay\u2122 supply package"]))));
      if ((0,lib/* have */.lf)((0,template_string/* $item */.xr)(postcoil_templateObject43 || (postcoil_templateObject43 = postcoil_taggedTemplateLiteral(["space blanket"]))))) (0,external_kolmafia_.autosell)(1, (0,template_string/* $item */.xr)(postcoil_templateObject44 || (postcoil_templateObject44 = postcoil_taggedTemplateLiteral(["space blanket"]))));
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Chewing Gum",
    completed: () => (0,external_kolmafia_.myMeat)() < 1000 || (0,lib/* have */.lf)((0,template_string/* $item */.xr)(postcoil_templateObject45 || (postcoil_templateObject45 = postcoil_taggedTemplateLiteral(["turtle totem"])))) && (0,lib/* have */.lf)((0,template_string/* $item */.xr)(postcoil_templateObject46 || (postcoil_templateObject46 = postcoil_taggedTemplateLiteral(["saucepan"])))) && (0,lib/* have */.lf)((0,template_string/* $item */.xr)(postcoil_templateObject47 || (postcoil_templateObject47 = postcoil_taggedTemplateLiteral(["mariachi hat"])))),
    do: () => {
      (0,external_kolmafia_.buy)(1, (0,template_string/* $item */.xr)(postcoil_templateObject48 || (postcoil_templateObject48 = postcoil_taggedTemplateLiteral(["chewing gum on a string"]))));
      (0,external_kolmafia_.use)(1, (0,template_string/* $item */.xr)(postcoil_templateObject49 || (postcoil_templateObject49 = postcoil_taggedTemplateLiteral(["chewing gum on a string"]))));
    },
    outfit: {
      pants: (0,template_string/* $item */.xr)(postcoil_templateObject50 || (postcoil_templateObject50 = postcoil_taggedTemplateLiteral(["designer sweatpants"])))
    },
    acquire: [{
      item: (0,template_string/* $item */.xr)(postcoil_templateObject51 || (postcoil_templateObject51 = postcoil_taggedTemplateLiteral(["toy accordion"])))
    }],
    limit: {
      tries: 50
    }
  }, {
    name: "Meatcar",
    completed: () => (0,lib/* have */.lf)((0,template_string/* $item */.xr)(postcoil_templateObject52 || (postcoil_templateObject52 = postcoil_taggedTemplateLiteral(["bitchin' meatcar"])))),
    do: () => (0,external_kolmafia_.create)(1, (0,template_string/* $item */.xr)(postcoil_templateObject53 || (postcoil_templateObject53 = postcoil_taggedTemplateLiteral(["bitchin' meatcar"])))),
    outfit: {
      pants: (0,template_string/* $item */.xr)(postcoil_templateObject54 || (postcoil_templateObject54 = postcoil_taggedTemplateLiteral(["designer sweatpants"])))
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Range",
    completed: () => (0,property/* get */.U2)("hasRange"),
    do: () => (0,external_kolmafia_.use)((0,template_string/* $item */.xr)(postcoil_templateObject55 || (postcoil_templateObject55 = postcoil_taggedTemplateLiteral(["Dramatic\u2122 range"])))),
    acquire: [{
      item: (0,template_string/* $item */.xr)(postcoil_templateObject56 || (postcoil_templateObject56 = postcoil_taggedTemplateLiteral(["Dramatic\u2122 range"])))
    }],
    outfit: {
      pants: (0,template_string/* $item */.xr)(postcoil_templateObject57 || (postcoil_templateObject57 = postcoil_taggedTemplateLiteral(["designer sweatpants"])))
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Underground Fireworks Shop",
    prepare: () => (0,external_kolmafia_.visitUrl)("clan_viplounge.php?action=fwshop&whichfloor=2", false),
    completed: () => (0,lib/* have */.lf)((0,template_string/* $item */.xr)(postcoil_templateObject58 || (postcoil_templateObject58 = postcoil_taggedTemplateLiteral(["oversized sparkler"])))),
    do: () => {
      (0,external_kolmafia_.buy)(1, (0,template_string/* $item */.xr)(postcoil_templateObject59 || (postcoil_templateObject59 = postcoil_taggedTemplateLiteral(["blue rocket"]))));
      (0,external_kolmafia_.buy)(1, (0,template_string/* $item */.xr)(postcoil_templateObject60 || (postcoil_templateObject60 = postcoil_taggedTemplateLiteral(["oversized sparkler"]))));
      (0,external_kolmafia_.buy)(1, (0,template_string/* $item */.xr)(postcoil_templateObject61 || (postcoil_templateObject61 = postcoil_taggedTemplateLiteral(["sombrero-mounted sparkler"]))));
    },
    outfit: {
      pants: (0,template_string/* $item */.xr)(postcoil_templateObject62 || (postcoil_templateObject62 = postcoil_taggedTemplateLiteral(["designer sweatpants"])))
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Fortune Teller Consult",
    completed: () => (0,property/* get */.U2)("_clanFortuneConsultUses", 0) >= 3,
    do: () => {
      switch ((0,property/* get */.U2)("_clanFortuneConsultsUses", 0)) {
        case 0:
          (0,external_kolmafia_.cliExecute)("fortune cheesefax bad bad bad");
          break;

        case 1:
          (0,external_kolmafia_.cliExecute)("fortune cheesefax bad bad bad");
          break;

        case 2:
          (0,external_kolmafia_.cliExecute)("fortune cheesefax pizza batman thick");
          break;

        default:
          break;
      }

      (0,external_kolmafia_.wait)(5);
    },
    limit: {
      tries: 3
    }
  }, {
    name: "Detuned Radio",
    completed: () => (0,lib/* have */.lf)((0,template_string/* $item */.xr)(postcoil_templateObject63 || (postcoil_templateObject63 = postcoil_taggedTemplateLiteral(["detuned radio"])))),
    do: () => {
      (0,external_kolmafia_.buy)(1, (0,template_string/* $item */.xr)(postcoil_templateObject64 || (postcoil_templateObject64 = postcoil_taggedTemplateLiteral(["detuned radio"]))));
      (0,external_kolmafia_.changeMcd)(10);
    },
    outfit: {
      pants: (0,template_string/* $item */.xr)(postcoil_templateObject65 || (postcoil_templateObject65 = postcoil_taggedTemplateLiteral(["designer sweatpants"])))
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Obsidian Nutcracker",
    completed: () => (0,lib/* have */.lf)((0,template_string/* $item */.xr)(postcoil_templateObject66 || (postcoil_templateObject66 = postcoil_taggedTemplateLiteral(["obsidian nutcracker"])))),
    do: () => (0,external_kolmafia_.retrieveItem)((0,template_string/* $item */.xr)(postcoil_templateObject67 || (postcoil_templateObject67 = postcoil_taggedTemplateLiteral(["obsidian nutcracker"])))),
    outfit: {
      pants: (0,template_string/* $item */.xr)(postcoil_templateObject68 || (postcoil_templateObject68 = postcoil_taggedTemplateLiteral(["designer sweatpants"])))
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Cloud-Talk",
    completed: () => (0,lib/* have */.lf)((0,template_string/* $effect */._G)(postcoil_templateObject69 || (postcoil_templateObject69 = postcoil_taggedTemplateLiteral(["That's Just Cloud-Talk, Man"])))),
    do: () => (0,external_kolmafia_.visitUrl)("place.php?whichplace=campaway&action=campaway_sky"),
    limit: {
      tries: 1
    }
  }, {
    name: "Crimbo Candy",
    completed: () => (0,property/* get */.U2)("_candySummons", 0) > 0,
    do: () => (0,external_kolmafia_.useSkill)((0,template_string/* $skill */.tm)(postcoil_templateObject70 || (postcoil_templateObject70 = postcoil_taggedTemplateLiteral(["Summon Crimbo Candy"]))))
  }, {
    name: "Synth Learning",
    completed: () => (0,lib/* have */.lf)((0,template_string/* $effect */._G)(postcoil_templateObject71 || (postcoil_templateObject71 = postcoil_taggedTemplateLiteral(["Synthesis: Learning"])))),
    do: () => {
      if ((0,external_kolmafia_.itemAmount)((0,template_string/* $item */.xr)(postcoil_templateObject72 || (postcoil_templateObject72 = postcoil_taggedTemplateLiteral(["Crimbo fudge"])))) >= 2) {
        (0,external_kolmafia_.sweetSynthesis)((0,template_string/* $item */.xr)(postcoil_templateObject73 || (postcoil_templateObject73 = postcoil_taggedTemplateLiteral(["Crimbo fudge"]))), (0,template_string/* $item */.xr)(postcoil_templateObject74 || (postcoil_templateObject74 = postcoil_taggedTemplateLiteral(["Crimbo fudge"]))));
      } else if ((0,lib/* have */.lf)((0,template_string/* $item */.xr)(postcoil_templateObject75 || (postcoil_templateObject75 = postcoil_taggedTemplateLiteral(["Crimbo peppermint bark"])))) && (0,lib/* have */.lf)((0,template_string/* $item */.xr)(postcoil_templateObject76 || (postcoil_templateObject76 = postcoil_taggedTemplateLiteral(["Crimbo candied pecan"]))))) {
        (0,external_kolmafia_.sweetSynthesis)((0,template_string/* $item */.xr)(postcoil_templateObject77 || (postcoil_templateObject77 = postcoil_taggedTemplateLiteral(["Crimbo peppermint bark"]))), (0,template_string/* $item */.xr)(postcoil_templateObject78 || (postcoil_templateObject78 = postcoil_taggedTemplateLiteral(["Crimbo candied pecan"]))));
      } else if ((0,lib/* have */.lf)((0,template_string/* $item */.xr)(postcoil_templateObject79 || (postcoil_templateObject79 = postcoil_taggedTemplateLiteral(["Crimbo peppermint bark"])))) && (0,lib/* have */.lf)((0,template_string/* $item */.xr)(postcoil_templateObject80 || (postcoil_templateObject80 = postcoil_taggedTemplateLiteral(["peppermint sprout"]))))) {
        (0,external_kolmafia_.sweetSynthesis)((0,template_string/* $item */.xr)(postcoil_templateObject81 || (postcoil_templateObject81 = postcoil_taggedTemplateLiteral(["Crimbo peppermint bark"]))), (0,template_string/* $item */.xr)(postcoil_templateObject82 || (postcoil_templateObject82 = postcoil_taggedTemplateLiteral(["peppermint sprout"]))));
      } else if ((0,external_kolmafia_.itemAmount)((0,template_string/* $item */.xr)(postcoil_templateObject83 || (postcoil_templateObject83 = postcoil_taggedTemplateLiteral(["peppermint sprout"])))) >= 3) {
        (0,external_kolmafia_.use)(1, (0,template_string/* $item */.xr)(postcoil_templateObject84 || (postcoil_templateObject84 = postcoil_taggedTemplateLiteral(["peppermint sprout"]))));
        (0,external_kolmafia_.use)(2, (0,template_string/* $item */.xr)(postcoil_templateObject85 || (postcoil_templateObject85 = postcoil_taggedTemplateLiteral(["peppermint sprout"]))));
        (0,external_kolmafia_.sweetSynthesis)((0,template_string/* $item */.xr)(postcoil_templateObject86 || (postcoil_templateObject86 = postcoil_taggedTemplateLiteral(["peppermint twist"]))), (0,template_string/* $item */.xr)(postcoil_templateObject87 || (postcoil_templateObject87 = postcoil_taggedTemplateLiteral(["peppermint patty"]))));
      } else if ((0,external_kolmafia_.itemAmount)((0,template_string/* $item */.xr)(postcoil_templateObject88 || (postcoil_templateObject88 = postcoil_taggedTemplateLiteral(["peppermint sprout"])))) >= 2 && (0,lib/* have */.lf)((0,template_string/* $item */.xr)(postcoil_templateObject89 || (postcoil_templateObject89 = postcoil_taggedTemplateLiteral(["peppermint twist"]))))) {
        (0,external_kolmafia_.use)(2, (0,template_string/* $item */.xr)(postcoil_templateObject90 || (postcoil_templateObject90 = postcoil_taggedTemplateLiteral(["peppermint sprout"]))));
        (0,external_kolmafia_.sweetSynthesis)((0,template_string/* $item */.xr)(postcoil_templateObject91 || (postcoil_templateObject91 = postcoil_taggedTemplateLiteral(["peppermint twist"]))), (0,template_string/* $item */.xr)(postcoil_templateObject92 || (postcoil_templateObject92 = postcoil_taggedTemplateLiteral(["peppermint patty"]))));
      } else if ((0,lib/* have */.lf)((0,template_string/* $item */.xr)(postcoil_templateObject93 || (postcoil_templateObject93 = postcoil_taggedTemplateLiteral(["peppermint patty"])))) && (0,lib/* have */.lf)((0,template_string/* $item */.xr)(postcoil_templateObject94 || (postcoil_templateObject94 = postcoil_taggedTemplateLiteral(["peppermint sprout"]))))) {
        (0,external_kolmafia_.use)(1, (0,template_string/* $item */.xr)(postcoil_templateObject95 || (postcoil_templateObject95 = postcoil_taggedTemplateLiteral(["peppermint sprout"]))));
        (0,external_kolmafia_.sweetSynthesis)((0,template_string/* $item */.xr)(postcoil_templateObject96 || (postcoil_templateObject96 = postcoil_taggedTemplateLiteral(["peppermint twist"]))), (0,template_string/* $item */.xr)(postcoil_templateObject97 || (postcoil_templateObject97 = postcoil_taggedTemplateLiteral(["peppermint patty"]))));
      } else if ((0,lib/* have */.lf)((0,template_string/* $item */.xr)(postcoil_templateObject98 || (postcoil_templateObject98 = postcoil_taggedTemplateLiteral(["peppermint patty"])))) && (0,lib/* have */.lf)((0,template_string/* $item */.xr)(postcoil_templateObject99 || (postcoil_templateObject99 = postcoil_taggedTemplateLiteral(["peppermint twist"]))))) {
        (0,external_kolmafia_.sweetSynthesis)((0,template_string/* $item */.xr)(postcoil_templateObject100 || (postcoil_templateObject100 = postcoil_taggedTemplateLiteral(["peppermint twist"]))), (0,template_string/* $item */.xr)(postcoil_templateObject101 || (postcoil_templateObject101 = postcoil_taggedTemplateLiteral(["peppermint patty"]))));
      }
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Remaining Stat Gain Multipliers",
    completed: () => statGainBuffs.every(ef => (0,lib/* have */.lf)(ef)),
    do: () => statGainBuffs.forEach(ef => (0,lib/* ensureEffect */.pq)(ef)),
    outfit: {
      pants: (0,template_string/* $item */.xr)(postcoil_templateObject102 || (postcoil_templateObject102 = postcoil_taggedTemplateLiteral(["designer sweatpants"]))),
      acc1: (0,template_string/* $item */.xr)(postcoil_templateObject103 || (postcoil_templateObject103 = postcoil_taggedTemplateLiteral(["Powerful Glove"]))),
      modifier: "mp"
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Bastille",
    completed: () => (0,property/* get */.U2)("_bastilleGames") > 0,
    do: () => (0,external_kolmafia_.cliExecute)("bastille.ash mainstat brutalist"),
    outfit: {
      offhand: (0,template_string/* $item */.xr)(postcoil_templateObject104 || (postcoil_templateObject104 = postcoil_taggedTemplateLiteral(["familiar scrapbook"])))
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Ten-Percent Bonus",
    completed: () => !(0,lib/* have */.lf)((0,template_string/* $item */.xr)(postcoil_templateObject105 || (postcoil_templateObject105 = postcoil_taggedTemplateLiteral(["a ten-percent bonus"])))),
    do: () => (0,external_kolmafia_.use)((0,template_string/* $item */.xr)(_templateObject106 || (_templateObject106 = postcoil_taggedTemplateLiteral(["a ten-percent bonus"])))),
    outfit: {
      offhand: (0,template_string/* $item */.xr)(_templateObject107 || (_templateObject107 = postcoil_taggedTemplateLiteral(["familiar scrapbook"])))
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Buffs",
    completed: () => (0,external_kolmafia_.myMeat)() <= 1000 || levelingBuffs.every(ef => (0,lib/* have */.lf)(ef)) || (0,property/* get */.U2)("_feelPrideUsed") > 0,
    do: () => levelingBuffs.forEach(ef => {
      if ((0,external_kolmafia_.myMeat)() >= 1000) (0,lib/* ensureEffect */.pq)(ef);
      if ((0,external_kolmafia_.myMp)() <= 100 && ((0,lib/* have */.lf)((0,template_string/* $item */.xr)(_templateObject108 || (_templateObject108 = postcoil_taggedTemplateLiteral(["magical sausage"])))) || (0,lib/* have */.lf)((0,template_string/* $item */.xr)(_templateObject109 || (_templateObject109 = postcoil_taggedTemplateLiteral(["magical sausage casing"])))))) (0,external_kolmafia_.eat)(1, (0,template_string/* $item */.xr)(_templateObject110 || (_templateObject110 = postcoil_taggedTemplateLiteral(["magical sausage"]))));
    }),
    outfit: {
      pants: (0,template_string/* $item */.xr)(_templateObject111 || (_templateObject111 = postcoil_taggedTemplateLiteral(["designer sweatpants"]))),
      acc1: (0,template_string/* $item */.xr)(_templateObject112 || (_templateObject112 = postcoil_taggedTemplateLiteral(["Powerful Glove"]))),
      modifier: "mp"
    }
  }, {
    name: "Tome Summons",
    completed: () => (0,property/* get */.U2)("tomeSummons") >= 3,
    do: () => {
      (0,external_kolmafia_.create)(1, (0,template_string/* $item */.xr)(_templateObject113 || (_templateObject113 = postcoil_taggedTemplateLiteral(["box of Familiar Jacks"]))));
      (0,external_kolmafia_.use)(1, (0,template_string/* $item */.xr)(_templateObject114 || (_templateObject114 = postcoil_taggedTemplateLiteral(["box of Familiar Jacks"]))));
      (0,external_kolmafia_.useSkill)((0,template_string/* $skill */.tm)(_templateObject115 || (_templateObject115 = postcoil_taggedTemplateLiteral(["Summon Sugar Sheets"]))));
      (0,external_kolmafia_.create)(1, (0,template_string/* $item */.xr)(_templateObject116 || (_templateObject116 = postcoil_taggedTemplateLiteral(["sugar chapeau"]))));
    },
    outfit: {
      familiar: (0,template_string/* $familiar */.HP)(_templateObject117 || (_templateObject117 = postcoil_taggedTemplateLiteral(["Exotic Parrot"])))
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Alice Army",
    completed: () => (0,property/* get */.U2)("grimoire3Summons") > 0,
    do: () => (0,external_kolmafia_.useSkill)((0,template_string/* $skill */.tm)(_templateObject118 || (_templateObject118 = postcoil_taggedTemplateLiteral(["Summon Alice's Army Cards"]))))
  }, {
    name: "Confiscator's Grimoire",
    completed: () => (0,property/* get */.U2)("_grimoireConfiscatorSummons") > 0,
    do: () => (0,external_kolmafia_.useSkill)((0,template_string/* $skill */.tm)(_templateObject119 || (_templateObject119 = postcoil_taggedTemplateLiteral(["Summon Confiscated Things"]))))
  }, {
    name: "Detective School",
    completed: () => (0,property/* get */.U2)("_detectiveCasesCompleted", 0) >= 3,
    do: () => (0,external_kolmafia_.cliExecute)("Detective Solver")
  }, {
    name: "Breakfast",
    completed: () => (0,property/* get */.U2)("lastAnticheeseDay") > 0,
    do: () => {
      (0,external_kolmafia_.cliExecute)("breakfast");
      (0,external_kolmafia_.cliExecute)("refresh all");
    }
  }, postcoil_objectSpread({}, holidayRunawayTask), {
    name: "Ninja Costume",
    ready: () => (0,property/* get */.U2)("_monstersMapped") < 3 && (0,property/* get */.U2)("_chestXRayUsed") < 3,
    completed: () => (0,lib/* have */.lf)((0,template_string/* $item */.xr)(_templateObject120 || (_templateObject120 = postcoil_taggedTemplateLiteral(["li'l ninja costume"])))),
    do: () => mapMonster((0,template_string/* $location */.PG)(_templateObject121 || (_templateObject121 = postcoil_taggedTemplateLiteral(["The Haiku Dungeon"]))), (0,template_string/* $monster */.O4)(_templateObject122 || (_templateObject122 = postcoil_taggedTemplateLiteral(["amateur ninja"])))),
    post: () => (0,external_kolmafia_.visitUrl)("questlog.php?which=1"),
    // Check quest log for protonic ghost location
    combat: new CombatStrategy().macro(src_combat["default"].skill((0,template_string/* $skill */.tm)(_templateObject123 || (_templateObject123 = postcoil_taggedTemplateLiteral(["Chest X-Ray"]))))),
    outfit: {
      hat: (0,template_string/* $item */.xr)(_templateObject124 || (_templateObject124 = postcoil_taggedTemplateLiteral(["Daylight Shavings Helmet"]))),
      back: (0,template_string/* $item */.xr)(_templateObject125 || (_templateObject125 = postcoil_taggedTemplateLiteral(["protonic accelerator pack"]))),
      offhand: (0,template_string/* $item */.xr)(_templateObject126 || (_templateObject126 = postcoil_taggedTemplateLiteral(["weeping willow wand"]))),
      pants: (0,template_string/* $item */.xr)(_templateObject127 || (_templateObject127 = postcoil_taggedTemplateLiteral(["designer sweatpants"]))),
      acc1: (0,template_string/* $item */.xr)(_templateObject128 || (_templateObject128 = postcoil_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]))),
      familiar: (0,template_string/* $familiar */.HP)(_templateObject129 || (_templateObject129 = postcoil_taggedTemplateLiteral(["Melodramedary"])))
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Nanobrainy",
    ready: () => (0,property/* get */.U2)("ghostLocation") !== (0,template_string/* $location */.PG)(_templateObject130 || (_templateObject130 = postcoil_taggedTemplateLiteral(["none"]))) && (0,property/* get */.U2)("_nanorhinoCharge") >= 100,
    completed: () => (0,lib/* have */.lf)((0,template_string/* $effect */._G)(_templateObject131 || (_templateObject131 = postcoil_taggedTemplateLiteral(["Nanobrainy"])))),
    do: () => (0,external_kolmafia_.adv1)((0,property/* get */.U2)("ghostLocation", (0,template_string/* $location */.PG)(_templateObject132 || (_templateObject132 = postcoil_taggedTemplateLiteral(["none"])))), 0, ""),
    combat: new CombatStrategy().macro(src_combat["default"].skill((0,template_string/* $skill */.tm)(_templateObject133 || (_templateObject133 = postcoil_taggedTemplateLiteral(["Entangling Noodles"])))) // Myst skill to trigger nanorhino buff
    .trySkill((0,template_string/* $skill */.tm)(_templateObject134 || (_templateObject134 = postcoil_taggedTemplateLiteral(["Giant Growth"])))).if_((0,template_string/* $item */.xr)(_templateObject135 || (_templateObject135 = postcoil_taggedTemplateLiteral(["blue rocket"]))), src_combat["default"].item((0,template_string/* $item */.xr)(_templateObject136 || (_templateObject136 = postcoil_taggedTemplateLiteral(["blue rocket"]))))).skill((0,template_string/* $skill */.tm)(_templateObject137 || (_templateObject137 = postcoil_taggedTemplateLiteral(["Shoot Ghost"])))).skill((0,template_string/* $skill */.tm)(_templateObject138 || (_templateObject138 = postcoil_taggedTemplateLiteral(["Shoot Ghost"])))).skill((0,template_string/* $skill */.tm)(_templateObject139 || (_templateObject139 = postcoil_taggedTemplateLiteral(["Shoot Ghost"])))).skill((0,template_string/* $skill */.tm)(_templateObject140 || (_templateObject140 = postcoil_taggedTemplateLiteral(["Trap Ghost"]))))),
    outfit: {
      back: (0,template_string/* $item */.xr)(_templateObject141 || (_templateObject141 = postcoil_taggedTemplateLiteral(["protonic accelerator pack"]))),
      offhand: (0,template_string/* $item */.xr)(_templateObject142 || (_templateObject142 = postcoil_taggedTemplateLiteral(["weeping willow wand"]))),
      pants: (0,template_string/* $item */.xr)(_templateObject143 || (_templateObject143 = postcoil_taggedTemplateLiteral(["designer sweatpants"]))),
      familiar: (0,template_string/* $familiar */.HP)(_templateObject144 || (_templateObject144 = postcoil_taggedTemplateLiteral(["Nanorhino"])))
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Skeleton Fruits",
    ready: () => (0,property/* get */.U2)("_monstersMapped") < 3 && (0,property/* get */.U2)("_chestXRayUsed") < 3,
    completed: () => (0,lib/* have */.lf)((0,template_string/* $item */.xr)(_templateObject145 || (_templateObject145 = postcoil_taggedTemplateLiteral(["cherry"])))) || (0,lib/* have */.lf)((0,template_string/* $item */.xr)(_templateObject146 || (_templateObject146 = postcoil_taggedTemplateLiteral(["oil of expertise"])))) || (0,lib/* have */.lf)((0,template_string/* $effect */._G)(_templateObject147 || (_templateObject147 = postcoil_taggedTemplateLiteral(["Expert Oiliness"])))),
    do: () => mapMonster((0,template_string/* $location */.PG)(_templateObject148 || (_templateObject148 = postcoil_taggedTemplateLiteral(["The Skeleton Store"]))), (0,template_string/* $monster */.O4)(_templateObject149 || (_templateObject149 = postcoil_taggedTemplateLiteral(["novelty tropical skeleton"])))),
    combat: new CombatStrategy().macro(src_combat["default"].skill((0,template_string/* $skill */.tm)(_templateObject150 || (_templateObject150 = postcoil_taggedTemplateLiteral(["Feel Envy"])))).skill((0,template_string/* $skill */.tm)(_templateObject151 || (_templateObject151 = postcoil_taggedTemplateLiteral(["Chest X-Ray"]))))),
    outfit: {
      pants: (0,template_string/* $item */.xr)(_templateObject152 || (_templateObject152 = postcoil_taggedTemplateLiteral(["designer sweatpants"]))),
      acc3: (0,template_string/* $item */.xr)(_templateObject153 || (_templateObject153 = postcoil_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]))),
      familiar: (0,template_string/* $familiar */.HP)(_templateObject154 || (_templateObject154 = postcoil_taggedTemplateLiteral(["Melodramedary"])))
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Saucecraft",
    prepare: () => (0,template_string/* $skills */.nx)(_templateObject155 || (_templateObject155 = postcoil_taggedTemplateLiteral(["Advanced Saucecrafting"]))).forEach(s => (0,external_kolmafia_.useSkill)(s)),
    completed: () => (0,lib/* have */.lf)((0,template_string/* $effect */._G)(_templateObject156 || (_templateObject156 = postcoil_taggedTemplateLiteral(["Mystically Oiled"])))),
    do: () => (0,template_string/* $items */.vS)(_templateObject157 || (_templateObject157 = postcoil_taggedTemplateLiteral(["oil of expertise, ointment of the occult, cordial of concentration"]))).forEach(item => (0,external_kolmafia_.retrieveItem)(item)),
    post: () => {
      (0,external_kolmafia_.use)(1, (0,template_string/* $item */.xr)(_templateObject158 || (_templateObject158 = postcoil_taggedTemplateLiteral(["oil of expertise"]))));
      (0,external_kolmafia_.use)(1, (0,template_string/* $item */.xr)(_templateObject159 || (_templateObject159 = postcoil_taggedTemplateLiteral(["ointment of the occult"]))));
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Chateau",
    completed: () => (0,property/* get */.U2)("timesRested") >= (0,external_kolmafia_.totalFreeRests)(),
    do: () => {
      (0,external_kolmafia_.visitUrl)("place.php?whichplace=chateau&action=chateau_restbox");
      burnLibram(100);
    },
    outfit: {
      offhand: (0,template_string/* $item */.xr)(_templateObject160 || (_templateObject160 = postcoil_taggedTemplateLiteral(["familiar scrapbook"])))
    },
    limit: {
      tries: 40
    }
  }, {
    name: "Synth Smart",
    completed: () => (0,lib/* have */.lf)((0,template_string/* $effect */._G)(_templateObject161 || (_templateObject161 = postcoil_taggedTemplateLiteral(["Synthesis: Smart"])))),
    do: () => {
      if ((0,lib/* have */.lf)((0,template_string/* $item */.xr)(_templateObject162 || (_templateObject162 = postcoil_taggedTemplateLiteral(["yellow candy heart"])))) && (0,lib/* have */.lf)((0,template_string/* $item */.xr)(_templateObject163 || (_templateObject163 = postcoil_taggedTemplateLiteral(["Crimbo peppermint bark"]))))) {
        (0,external_kolmafia_.sweetSynthesis)((0,template_string/* $item */.xr)(_templateObject164 || (_templateObject164 = postcoil_taggedTemplateLiteral(["yellow candy heart"]))), (0,template_string/* $item */.xr)(_templateObject165 || (_templateObject165 = postcoil_taggedTemplateLiteral(["Crimbo peppermint bark"]))));
      } else if ((0,lib/* have */.lf)((0,template_string/* $item */.xr)(_templateObject166 || (_templateObject166 = postcoil_taggedTemplateLiteral(["orange candy heart"])))) && (0,lib/* have */.lf)((0,template_string/* $item */.xr)(_templateObject167 || (_templateObject167 = postcoil_taggedTemplateLiteral(["Crimbo candied pecan"]))))) {
        (0,external_kolmafia_.sweetSynthesis)((0,template_string/* $item */.xr)(_templateObject168 || (_templateObject168 = postcoil_taggedTemplateLiteral(["orange candy heart"]))), (0,template_string/* $item */.xr)(_templateObject169 || (_templateObject169 = postcoil_taggedTemplateLiteral(["Crimbo candied pecan"]))));
      } else if ((0,lib/* have */.lf)((0,template_string/* $item */.xr)(_templateObject170 || (_templateObject170 = postcoil_taggedTemplateLiteral(["orange candy heart"])))) && (0,lib/* have */.lf)((0,template_string/* $item */.xr)(_templateObject171 || (_templateObject171 = postcoil_taggedTemplateLiteral(["peppermint sprout"]))))) {
        (0,external_kolmafia_.sweetSynthesis)((0,template_string/* $item */.xr)(_templateObject172 || (_templateObject172 = postcoil_taggedTemplateLiteral(["orange candy heart"]))), (0,template_string/* $item */.xr)(_templateObject173 || (_templateObject173 = postcoil_taggedTemplateLiteral(["peppermint sprout"]))));
      } else if ((0,lib/* have */.lf)((0,template_string/* $item */.xr)(_templateObject174 || (_templateObject174 = postcoil_taggedTemplateLiteral(["pink candy heart"])))) && (0,lib/* have */.lf)((0,template_string/* $item */.xr)(_templateObject175 || (_templateObject175 = postcoil_taggedTemplateLiteral(["peppermint sprout"]))))) {
        (0,external_kolmafia_.use)(1, (0,template_string/* $item */.xr)(_templateObject176 || (_templateObject176 = postcoil_taggedTemplateLiteral(["peppermint sprout"]))));
        (0,external_kolmafia_.sweetSynthesis)((0,template_string/* $item */.xr)(_templateObject177 || (_templateObject177 = postcoil_taggedTemplateLiteral(["pink candy heart"]))), (0,template_string/* $item */.xr)(_templateObject178 || (_templateObject178 = postcoil_taggedTemplateLiteral(["peppermint twist"]))));
      } else if ((0,lib/* have */.lf)((0,template_string/* $item */.xr)(_templateObject179 || (_templateObject179 = postcoil_taggedTemplateLiteral(["pink candy heart"])))) && (0,lib/* have */.lf)((0,template_string/* $item */.xr)(_templateObject180 || (_templateObject180 = postcoil_taggedTemplateLiteral(["peppermint twist"]))))) {
        (0,external_kolmafia_.sweetSynthesis)((0,template_string/* $item */.xr)(_templateObject181 || (_templateObject181 = postcoil_taggedTemplateLiteral(["pink candy heart"]))), (0,template_string/* $item */.xr)(_templateObject182 || (_templateObject182 = postcoil_taggedTemplateLiteral(["peppermint twist"]))));
      } else if ((0,lib/* have */.lf)((0,template_string/* $item */.xr)(_templateObject183 || (_templateObject183 = postcoil_taggedTemplateLiteral(["lavender candy heart"])))) && (0,lib/* have */.lf)((0,template_string/* $item */.xr)(_templateObject184 || (_templateObject184 = postcoil_taggedTemplateLiteral(["Crimbo fudge"]))))) {
        (0,external_kolmafia_.sweetSynthesis)((0,template_string/* $item */.xr)(_templateObject185 || (_templateObject185 = postcoil_taggedTemplateLiteral(["lavender candy heart"]))), (0,template_string/* $item */.xr)(_templateObject186 || (_templateObject186 = postcoil_taggedTemplateLiteral(["Crimbo fudge"]))));
      }
    },
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




var pantogram = (0,template_string/* $item */.xr)(Pantogram_templateObject || (Pantogram_templateObject = Pantogram_taggedTemplateLiteral(["portable pantogram"])));
var pants = (0,template_string/* $item */.xr)(Pantogram_templateObject2 || (Pantogram_templateObject2 = Pantogram_taggedTemplateLiteral(["pantogram pants"])));
function Pantogram_have() {
  return haveItem(pantogram);
}
function havePants() {
  return (0,lib/* have */.lf)(pants);
}
var Alignment = (_Alignment = {}, Pantogram_defineProperty(_Alignment, "Muscle", 1), Pantogram_defineProperty(_Alignment, "Mysticality", 2), Pantogram_defineProperty(_Alignment, "Moxie", 3), _Alignment);
var Element = (_Element = {}, Pantogram_defineProperty(_Element, "Hot Resistance: 2", 1), Pantogram_defineProperty(_Element, "Cold Resistance: 2", 2), Pantogram_defineProperty(_Element, "Spooky Resistance: 2", 3), Pantogram_defineProperty(_Element, "Sleaze Resistance: 2", 4), Pantogram_defineProperty(_Element, "Stench Resistance: 2", 5), _Element);
var LeftSacrifice = (_LeftSacrifice = {}, Pantogram_defineProperty(_LeftSacrifice, "Maximum HP: 40", [-1, 0]), Pantogram_defineProperty(_LeftSacrifice, "Maximum MP: 20", [-2, 0]), Pantogram_defineProperty(_LeftSacrifice, "HP Regen Max: 10", [(0,template_string/* $item */.xr)(Pantogram_templateObject3 || (Pantogram_templateObject3 = Pantogram_taggedTemplateLiteral(["red pixel potion"]))), 1]), Pantogram_defineProperty(_LeftSacrifice, "HP Regen Max: 15", [(0,template_string/* $item */.xr)(Pantogram_templateObject4 || (Pantogram_templateObject4 = Pantogram_taggedTemplateLiteral(["royal jelly"]))), 1]), Pantogram_defineProperty(_LeftSacrifice, "HP Regen Max: 20", [(0,template_string/* $item */.xr)(Pantogram_templateObject5 || (Pantogram_templateObject5 = Pantogram_taggedTemplateLiteral(["scented massage oil"]))), 1]), Pantogram_defineProperty(_LeftSacrifice, "MP Regen Max: 10", [(0,template_string/* $item */.xr)(Pantogram_templateObject6 || (Pantogram_templateObject6 = Pantogram_taggedTemplateLiteral(["Cherry Cloaca Cola"]))), 1]), Pantogram_defineProperty(_LeftSacrifice, "MP Regen Max: 15", [(0,template_string/* $item */.xr)(Pantogram_templateObject7 || (Pantogram_templateObject7 = Pantogram_taggedTemplateLiteral(["bubblin' crude"]))), 1]), Pantogram_defineProperty(_LeftSacrifice, "MP Regen Max: 20", [(0,template_string/* $item */.xr)(Pantogram_templateObject8 || (Pantogram_templateObject8 = Pantogram_taggedTemplateLiteral(["glowing New Age crystal"]))), 1]), Pantogram_defineProperty(_LeftSacrifice, "Mana Cost: -3", [(0,template_string/* $item */.xr)(Pantogram_templateObject9 || (Pantogram_templateObject9 = Pantogram_taggedTemplateLiteral(["baconstone"]))), 1]), _LeftSacrifice);

function getLeftSacPair(mod) {
  return LeftSacrifice[mod];
}

var MiddleSacrifice = (_MiddleSacrifice = {}, Pantogram_defineProperty(_MiddleSacrifice, "Combat Rate: -5", [-1, 0]), Pantogram_defineProperty(_MiddleSacrifice, "Combat Rate: 5", [-2, 0]), Pantogram_defineProperty(_MiddleSacrifice, "Critical Hit Percent: 10", [(0,template_string/* $item */.xr)(Pantogram_templateObject10 || (Pantogram_templateObject10 = Pantogram_taggedTemplateLiteral(["hamethyst"]))), 1]), Pantogram_defineProperty(_MiddleSacrifice, "Initiative: 50", [(0,template_string/* $item */.xr)(Pantogram_templateObject11 || (Pantogram_templateObject11 = Pantogram_taggedTemplateLiteral(["bar skin"]))), 1]), Pantogram_defineProperty(_MiddleSacrifice, "Familiar Weight: 10", [(0,template_string/* $item */.xr)(Pantogram_templateObject12 || (Pantogram_templateObject12 = Pantogram_taggedTemplateLiteral(["lead necklace"]))), 11]), Pantogram_defineProperty(_MiddleSacrifice, "Candy Drop: 100", [(0,template_string/* $item */.xr)(Pantogram_templateObject13 || (Pantogram_templateObject13 = Pantogram_taggedTemplateLiteral(["huge bowl of candy"]))), 1]), Pantogram_defineProperty(_MiddleSacrifice, "Item Drop Penalty: -10", [(0,template_string/* $item */.xr)(Pantogram_templateObject14 || (Pantogram_templateObject14 = Pantogram_taggedTemplateLiteral(["sea salt crystal"]))), 11]), Pantogram_defineProperty(_MiddleSacrifice, "Fishing Skill: 5", [(0,template_string/* $item */.xr)(Pantogram_templateObject15 || (Pantogram_templateObject15 = Pantogram_taggedTemplateLiteral(["wriggling worm"]))), 1]), Pantogram_defineProperty(_MiddleSacrifice, "Pool Skill: 5", [(0,template_string/* $item */.xr)(Pantogram_templateObject16 || (Pantogram_templateObject16 = Pantogram_taggedTemplateLiteral(["8-ball"]))), 15]), Pantogram_defineProperty(_MiddleSacrifice, "Avatar: Purple", [(0,template_string/* $item */.xr)(Pantogram_templateObject17 || (Pantogram_templateObject17 = Pantogram_taggedTemplateLiteral(["moxie weed"]))), 99]), Pantogram_defineProperty(_MiddleSacrifice, "Drops Items: true", [(0,template_string/* $item */.xr)(Pantogram_templateObject18 || (Pantogram_templateObject18 = Pantogram_taggedTemplateLiteral(["ten-leaf clover"]))), 1]), _MiddleSacrifice);

function getMiddleSacPair(mod) {
  return MiddleSacrifice[mod];
}

var RightSacrifice = (_RightSacrifice = {}, Pantogram_defineProperty(_RightSacrifice, "Weapon Damage: 20", [-1, 0]), Pantogram_defineProperty(_RightSacrifice, "Spell Damage Percent: 20", [-2, 0]), Pantogram_defineProperty(_RightSacrifice, "Meat Drop: 30", [(0,template_string/* $item */.xr)(Pantogram_templateObject19 || (Pantogram_templateObject19 = Pantogram_taggedTemplateLiteral(["taco shell"]))), 1]), Pantogram_defineProperty(_RightSacrifice, "Meat Drop: 60", [(0,template_string/* $item */.xr)(Pantogram_templateObject20 || (Pantogram_templateObject20 = Pantogram_taggedTemplateLiteral(["porquoise"]))), 1]), Pantogram_defineProperty(_RightSacrifice, "Item Drop: 15", [(0,template_string/* $item */.xr)(Pantogram_templateObject21 || (Pantogram_templateObject21 = Pantogram_taggedTemplateLiteral(["fairy gravy boat"]))), 1]), Pantogram_defineProperty(_RightSacrifice, "Item Drop: 30", [(0,template_string/* $item */.xr)(Pantogram_templateObject22 || (Pantogram_templateObject22 = Pantogram_taggedTemplateLiteral(["tiny dancer"]))), 1]), Pantogram_defineProperty(_RightSacrifice, "Muscle Experience: 3", [(0,template_string/* $item */.xr)(Pantogram_templateObject23 || (Pantogram_templateObject23 = Pantogram_taggedTemplateLiteral(["Knob Goblin firecracker"]))), 3]), Pantogram_defineProperty(_RightSacrifice, "Mysticality Experience: 3", [(0,template_string/* $item */.xr)(Pantogram_templateObject24 || (Pantogram_templateObject24 = Pantogram_taggedTemplateLiteral(["razor-sharp can lid"]))), 3]), Pantogram_defineProperty(_RightSacrifice, "Moxie Experience: 3", [(0,template_string/* $item */.xr)(Pantogram_templateObject25 || (Pantogram_templateObject25 = Pantogram_taggedTemplateLiteral(["spider web"]))), 3]), Pantogram_defineProperty(_RightSacrifice, "Muscle Experience Percent: 25", [(0,template_string/* $item */.xr)(Pantogram_templateObject26 || (Pantogram_templateObject26 = Pantogram_taggedTemplateLiteral(["synthetic marrow"]))), 5]), Pantogram_defineProperty(_RightSacrifice, "Mysticality Experience Percent: 25", [(0,template_string/* $item */.xr)(Pantogram_templateObject27 || (Pantogram_templateObject27 = Pantogram_taggedTemplateLiteral(["haunted battery"]))), 5]), Pantogram_defineProperty(_RightSacrifice, "Moxie Experience Percent: 25", [(0,template_string/* $item */.xr)(Pantogram_templateObject28 || (Pantogram_templateObject28 = Pantogram_taggedTemplateLiteral(["the funk"]))), 5]), _RightSacrifice);

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

    if (sacrifice instanceof external_kolmafia_.Item) {
      returnValue.set(sacrifice, quantity);
    }
  }

  if (rightSac) {
    var _getRightSacPair = getRightSacPair(rightSac),
        _getRightSacPair2 = Pantogram_slicedToArray(_getRightSacPair, 2),
        _sacrifice = _getRightSacPair2[0],
        _quantity = _getRightSacPair2[1];

    if (_sacrifice instanceof external_kolmafia_.Item) {
      returnValue.set(_sacrifice, _quantity);
    }
  }

  if (middleSac) {
    var _getMiddleSacPair = getMiddleSacPair(middleSac),
        _getMiddleSacPair2 = Pantogram_slicedToArray(_getMiddleSacPair, 2),
        _sacrifice2 = _getMiddleSacPair2[0],
        _quantity2 = _getMiddleSacPair2[1];

    if (_sacrifice2 instanceof external_kolmafia_.Item) {
      returnValue.set(_sacrifice2, _quantity2);
    }
  }

  return returnValue;
}

function sacrificePairToURL(pair) {
  var _pair = Pantogram_slicedToArray(pair, 2),
      rawSacrifice = _pair[0],
      quantity = _pair[1];

  var sacrifice = rawSacrifice instanceof external_kolmafia_.Item ? (0,external_kolmafia_.toInt)(rawSacrifice) : rawSacrifice;
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
  if ((0,lib/* have */.lf)(pants) || !(0,lib/* have */.lf)(pantogram)) return false;
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

    return !(0,lib/* have */.lf)(item, quantity);
  })) {
    return false;
  }

  var s1 = sacrificePairToURL(getLeftSacPair(leftSac));
  var s2 = sacrificePairToURL(getRightSacPair(rightSac));
  var s3 = sacrificePairToURL(getMiddleSacPair(middleSac));
  var url = "choice.php?whichchoice=1270&pwd&option=1&m=".concat(Alignment[alignment], "&e=").concat(Element[element], "&s1=").concat(s1, "&s2=").concat(s2, "&s3=").concat(s3);
  (0,external_kolmafia_.visitUrl)("inv_use.php?pwd&whichitem=9573");
  (0,external_kolmafia_.visitUrl)(url);
  return (0,lib/* have */.lf)(pants);
}
/**
 * Creates a pair of pants from a Pants object.
 * @param pants An object consisting of the modifiers you'd like the pants to give you.
 * @returns Whether or not you successfully created a pair of pants. False if you don't own the pantogram or if you already have pantogram pants.
 */

function makePantsFromObject(pants) {
  return makePants(pants.alignment, pants.element, pants.leftSac, pants.middleSac, pants.rightSac);
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2018/SongBoom.js
var SongBoom_templateObject;

function SongBoom_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var SongBoom_item = (0,template_string/* $item */.xr)(SongBoom_templateObject || (SongBoom_templateObject = SongBoom_taggedTemplateLiteral(["SongBoom\u2122 BoomBox"])));
function SongBoom_have() {
  return haveItem(SongBoom_item);
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
  var stored = (0,property/* get */.U2)("boomBoxSong");
  return songBoomSongs.has(stored) ? stored : null;
}
/**
 * Song changes left today.
 */

function songChangesLeft() {
  return (0,property/* get */.U2)("_boomBoxSongsLeft");
}
/**
 * Change the song.
 * @param newSong Song to change to.
 */

function setSong(newSong) {
  if (song() !== newSong) {
    if (songChangesLeft() === 0) throw new Error("Out of song changes!");
    (0,external_kolmafia_.cliExecute)("boombox ".concat(newSong ? keywords[newSong] : "none"));
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
;// CONCATENATED MODULE: ./src/tasks/runstart.ts
var runstart_templateObject, runstart_templateObject2, runstart_templateObject3, runstart_templateObject4, runstart_templateObject5, runstart_templateObject6, runstart_templateObject7, runstart_templateObject8, runstart_templateObject9, runstart_templateObject10, runstart_templateObject11, runstart_templateObject12, runstart_templateObject13, runstart_templateObject14, runstart_templateObject15;

function runstart_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var RunStartQuest = {
  name: "Run Start",
  tasks: [{
    name: "Council",
    completed: () => (0,property/* get */.U2)("lastCouncilVisit") > 0,
    do: () => (0,external_kolmafia_.visitUrl)("council.php")
  }, {
    name: "Toot",
    prepare: () => (0,external_kolmafia_.visitUrl)("tutorial.php?action=toot"),
    completed: () => (0,property/* get */.U2)("questM05Toot") === "finished" && !(0,lib/* have */.lf)((0,template_string/* $item */.xr)(runstart_templateObject || (runstart_templateObject = runstart_taggedTemplateLiteral(["letter from King Ralph XI"])))),
    do: () => (0,external_kolmafia_.use)((0,template_string/* $item */.xr)(runstart_templateObject2 || (runstart_templateObject2 = runstart_taggedTemplateLiteral(["letter from King Ralph XI"])))),
    limit: {
      tries: 1
    }
  }, {
    name: "Skeleton Store",
    completed: () => (0,property/* get */.U2)("questM23Meatsmith") !== "unstarted",
    do: () => {
      (0,external_kolmafia_.visitUrl)("shop.php?whichshop=meatsmith&action=talk");
      (0,external_kolmafia_.runChoice)(1);
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Overgrown Lot",
    completed: () => (0,property/* get */.U2)("questM24Doc") !== "unstarted",
    do: () => {
      (0,external_kolmafia_.visitUrl)("shop.php?whichshop=doc&action=talk");
      (0,external_kolmafia_.runChoice)(1);
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Madness Bakery",
    completed: () => (0,property/* get */.U2)("questM25Armorer") !== "unstarted",
    do: () => {
      (0,external_kolmafia_.visitUrl)("shop.php?whichshop=armory&action=talk");
      (0,external_kolmafia_.runChoice)(1);
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Numberology",
    ready: () => Object.keys((0,external_kolmafia_.reverseNumberology)()).includes("69"),
    completed: () => (0,property/* get */.U2)("_universeCalculated") >= (0,property/* get */.U2)("skillLevel144"),
    do: () => (0,external_kolmafia_.cliExecute)("numberology 69"),
    limit: {
      tries: 4
    }
  }, {
    name: "Borrowed Time",
    completed: () => (0,property/* get */.U2)("_borrowedTimeUsed"),
    do: () => (0,external_kolmafia_.use)((0,template_string/* $item */.xr)(runstart_templateObject3 || (runstart_templateObject3 = runstart_taggedTemplateLiteral(["borrowed time"])))),
    acquire: [{
      item: (0,template_string/* $item */.xr)(runstart_templateObject4 || (runstart_templateObject4 = runstart_taggedTemplateLiteral(["borrowed time"])))
    }],
    limit: {
      tries: 1
    }
  }, {
    name: "Chateau Desk",
    completed: () => (0,property/* get */.U2)("_chateauDeskHarvested"),
    do: () => (0,external_kolmafia_.visitUrl)("place.php?whichplace=chateau&action=chateau_desk"),
    limit: {
      tries: 1
    }
  }, {
    name: "Deck",
    ready: () => (0,property/* get */.U2)("_deckCardsDrawn") === 0,
    completed: () => (0,property/* get */.U2)("_deckCardsDrawn") >= 15,
    do: () => {
      (0,external_kolmafia_.cliExecute)("cheat island");
      (0,external_kolmafia_.cliExecute)("cheat ancestral recall");
      (0,external_kolmafia_.cliExecute)("cheat forest");
    },
    limit: {
      tries: 1
    },
    post: () => {
      while ((0,lib/* have */.lf)((0,template_string/* $item */.xr)(runstart_templateObject5 || (runstart_templateObject5 = runstart_taggedTemplateLiteral(["blue mana"])))) && (0,property/* get */.U2)("_ancestralRecallCasts") < 10) {
        (0,external_kolmafia_.useSkill)((0,template_string/* $skill */.tm)(runstart_templateObject6 || (runstart_templateObject6 = runstart_taggedTemplateLiteral(["Ancestral Recall"]))));
      }
    }
  }, {
    name: "Cowboy Boots",
    completed: () => (0,lib/* have */.lf)((0,template_string/* $item */.xr)(runstart_templateObject7 || (runstart_templateObject7 = runstart_taggedTemplateLiteral(["your cowboy boots"])))),
    do: () => (0,external_kolmafia_.visitUrl)("place.php?whichplace=town_right&action=townright_ltt"),
    limit: {
      tries: 1
    }
  }, {
    name: "Detective Badge",
    completed: () => (0,lib/* have */.lf)((0,template_string/* $item */.xr)(runstart_templateObject8 || (runstart_templateObject8 = runstart_taggedTemplateLiteral(["gold detective badge"])))),
    do: () => (0,external_kolmafia_.visitUrl)("place.php?whichplace=town_wrong&action=townwrong_precinct"),
    limit: {
      tries: 1
    }
  }, {
    name: "Pantogramming",
    completed: () => havePants(),
    do: () => {
      makePants("Mysticality", "Hot Resistance: 2", "Maximum HP: 40", "Combat Rate: -5", "Spell Damage Percent: 20");
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Mummery",
    completed: () => (0,property/* get */.U2)("_mummeryMods").includes("Experience (Mysticality)"),
    do: () => (0,external_kolmafia_.cliExecute)("mummery myst"),
    outfit: {
      familiar: (0,template_string/* $familiar */.HP)(runstart_templateObject9 || (runstart_templateObject9 = runstart_taggedTemplateLiteral(["Galloping Grill"])))
    },
    limit: {
      tries: 1
    }
  }, {
    name: "BoomBox",
    completed: () => song() === "Total Eclipse of Your Meat",
    do: () => setSong("Total Eclipse of Your Meat"),
    limit: {
      tries: 1
    }
  }, {
    name: "Horsery",
    completed: () => (0,property/* get */.U2)("_horsery") === "dark horse",
    do: () => (0,external_kolmafia_.cliExecute)("horsery dark"),
    limit: {
      tries: 1
    }
  }, {
    name: "Vote",
    completed: () => (0,lib/* have */.lf)((0,template_string/* $item */.xr)(runstart_templateObject10 || (runstart_templateObject10 = runstart_taggedTemplateLiteral(["\"I Voted!\" sticker"])))),
    do: () => (0,external_kolmafia_.cliExecute)("VotingBooth.ash"),
    limit: {
      tries: 1
    }
  }, {
    name: "Scavenge",
    completed: () => (0,property/* get */.U2)("_daycareGymScavenges") > 0,
    do: () => {
      (0,external_kolmafia_.visitUrl)("place.php?whichplace=town_wrong&action=townwrong_boxingdaycare");
      (0,external_kolmafia_.runChoice)(3);
      (0,external_kolmafia_.runChoice)(2);
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Cosplay Saber",
    completed: () => (0,property/* get */.U2)("_saberMod") > 0,
    do: () => (0,external_kolmafia_.cliExecute)("saber familiar"),
    limit: {
      tries: 1
    }
  }, {
    name: "Bird Calendar",
    completed: () => (0,lib/* have */.lf)((0,template_string/* $skill */.tm)(runstart_templateObject11 || (runstart_templateObject11 = runstart_taggedTemplateLiteral(["Seek out a Bird"])))),
    do: () => (0,external_kolmafia_.use)((0,template_string/* $item */.xr)(runstart_templateObject12 || (runstart_templateObject12 = runstart_taggedTemplateLiteral(["Bird-a-Day calendar"])))),
    limit: {
      tries: 1
    }
  }, {
    name: "Lathe",
    prepare: () => (0,external_kolmafia_.visitUrl)("shop.php?whichshop=lathe"),
    completed: () => (0,lib/* have */.lf)((0,template_string/* $item */.xr)(runstart_templateObject13 || (runstart_templateObject13 = runstart_taggedTemplateLiteral(["weeping willow wand"])))),
    do: () => (0,external_kolmafia_.retrieveItem)((0,template_string/* $item */.xr)(runstart_templateObject14 || (runstart_templateObject14 = runstart_taggedTemplateLiteral(["weeping willow wand"])))),
    limit: {
      tries: 1
    }
  }, {
    name: "Backup Camera",
    completed: () => (0,property/* get */.U2)("backupCameraMode") === "ml",
    do: () => (0,external_kolmafia_.cliExecute)("backupcamera ml"),
    limit: {
      tries: 1
    }
  }, {
    name: "Backup Camera Reverser",
    completed: () => (0,property/* get */.U2)("backupCameraReverserEnabled"),
    do: () => (0,external_kolmafia_.cliExecute)("backupcamera reverser"),
    limit: {
      tries: 1
    }
  }, {
    name: "Garden",
    completed: () => (0,external_kolmafia_.getCampground)()[(0,template_string/* $item */.xr)(runstart_templateObject15 || (runstart_templateObject15 = runstart_taggedTemplateLiteral(["peppermint sprout"]))).name] === 0,
    do: () => (0,external_kolmafia_.cliExecute)("garden pick"),
    limit: {
      tries: 1
    }
  }]
};
;// CONCATENATED MODULE: ./src/tasks/spelldamage.ts
var spelldamage_templateObject, spelldamage_templateObject2, spelldamage_templateObject3, spelldamage_templateObject4, spelldamage_templateObject5, spelldamage_templateObject6, spelldamage_templateObject7, spelldamage_templateObject8, spelldamage_templateObject9, spelldamage_templateObject10, spelldamage_templateObject11, spelldamage_templateObject12, spelldamage_templateObject13, spelldamage_templateObject14, spelldamage_templateObject15, spelldamage_templateObject16, spelldamage_templateObject17, spelldamage_templateObject18, spelldamage_templateObject19, spelldamage_templateObject20, spelldamage_templateObject21, spelldamage_templateObject22, spelldamage_templateObject23, spelldamage_templateObject24, spelldamage_templateObject25, spelldamage_templateObject26, spelldamage_templateObject27;

function spelldamage_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = spelldamage_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function spelldamage_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return spelldamage_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return spelldamage_arrayLikeToArray(o, minLen); }

function spelldamage_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function spelldamage_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function spelldamage_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { spelldamage_ownKeys(Object(source), true).forEach(function (key) { spelldamage_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { spelldamage_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function spelldamage_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function spelldamage_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var SpellDamageQuest = {
  name: "Spell Damage",
  completed: () => CommunityService.SpellDamage.isDone(),
  tasks: [{
    name: "Simmer",
    completed: () => (0,lib/* have */.lf)((0,template_string/* $effect */._G)(spelldamage_templateObject || (spelldamage_templateObject = spelldamage_taggedTemplateLiteral(["Simmering"])))),
    do: () => (0,lib/* ensureEffect */.pq)((0,template_string/* $effect */._G)(spelldamage_templateObject2 || (spelldamage_templateObject2 = spelldamage_taggedTemplateLiteral(["Simmering"])))),
    limit: {
      tries: 1
    }
  }, spelldamage_objectSpread({}, innerElfTask), spelldamage_objectSpread({}, meteorShowerTask), {
    name: "Deep Dark",
    completed: () => (0,lib/* have */.lf)((0,template_string/* $effect */._G)(spelldamage_templateObject3 || (spelldamage_templateObject3 = spelldamage_taggedTemplateLiteral(["Visions of the Deep Dark Deeps"])))),
    prepare: () => {
      if ((0,lib/* have */.lf)((0,template_string/* $effect */._G)(spelldamage_templateObject4 || (spelldamage_templateObject4 = spelldamage_taggedTemplateLiteral(["[1458]Blood Sugar Sauce Magic"]))))) (0,external_kolmafia_.useSkill)((0,template_string/* $skill */.tm)(spelldamage_templateObject5 || (spelldamage_templateObject5 = spelldamage_taggedTemplateLiteral(["Blood Sugar Sauce Magic"]))));
    },
    do: () => {
      var resist = 1 - (0,external_kolmafia_.elementalResistance)((0,template_string/* $element */.SS)(spelldamage_templateObject6 || (spelldamage_templateObject6 = spelldamage_taggedTemplateLiteral(["spooky"])))) / 100;
      var neededHp = Math.max(500, (0,external_kolmafia_.myMaxhp)() * 4 * resist);
      if ((0,external_kolmafia_.myMaxhp)() < neededHp) throw "Not enough HP for Deep Dark Visions.";

      while ((0,external_kolmafia_.myHp)() < neededHp) {
        (0,external_kolmafia_.useSkill)((0,template_string/* $skill */.tm)(spelldamage_templateObject7 || (spelldamage_templateObject7 = spelldamage_taggedTemplateLiteral(["Cannelloni Cocoon"]))));
      }

      (0,external_kolmafia_.useSkill)((0,template_string/* $skill */.tm)(spelldamage_templateObject8 || (spelldamage_templateObject8 = spelldamage_taggedTemplateLiteral(["Deep Dark Visions"]))));
    },
    outfit: {
      modifier: "HP 500max, Spooky Resistance",
      familiar: (0,template_string/* $familiar */.HP)(spelldamage_templateObject9 || (spelldamage_templateObject9 = spelldamage_taggedTemplateLiteral(["Exotic Parrot"])))
    },
    effects: (0,template_string/* $effects */.lh)(spelldamage_templateObject10 || (spelldamage_templateObject10 = spelldamage_taggedTemplateLiteral(["Astral Shell, Elemental Saucesphere"]))),
    post: () => {
      if (!(0,lib/* have */.lf)((0,template_string/* $effect */._G)(spelldamage_templateObject11 || (spelldamage_templateObject11 = spelldamage_taggedTemplateLiteral(["[1458]Blood Sugar Sauce Magic"]))))) (0,external_kolmafia_.useSkill)((0,template_string/* $skill */.tm)(spelldamage_templateObject12 || (spelldamage_templateObject12 = spelldamage_taggedTemplateLiteral(["Blood Sugar Sauce Magic"]))));
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Test",
    prepare: () => {
      var _iterator = spelldamage_createForOfIteratorHelper((0,template_string/* $items */.vS)(spelldamage_templateObject13 || (spelldamage_templateObject13 = spelldamage_taggedTemplateLiteral(["confiscated cell phone, Bettie page, resolution: be luckier"])))),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var it = _step.value;
          if ((0,lib/* have */.lf)(it)) (0,lib/* ensureEffect */.pq)((0,external_kolmafia_.effectModifier)(it, "effect"));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    completed: () => CommunityService.SpellDamage.isDone(),
    do: () => CommunityService.SpellDamage.run(() => printModtrace(["Spell Damage", "Spell Damage Percent"]), 22),
    outfit: {
      modifier: "spell dmg",
      familiar: (0,template_string/* $familiar */.HP)(spelldamage_templateObject14 || (spelldamage_templateObject14 = spelldamage_taggedTemplateLiteral(["Disembodied Hand"])))
    },
    effects: [(0,template_string/* $effect */._G)(spelldamage_templateObject15 || (spelldamage_templateObject15 = spelldamage_taggedTemplateLiteral(["Arched Eyebrow of the Archmage"]))), (0,template_string/* $effect */._G)(spelldamage_templateObject16 || (spelldamage_templateObject16 = spelldamage_taggedTemplateLiteral(["Carol of the Hells"]))), (0,template_string/* $effect */._G)(spelldamage_templateObject17 || (spelldamage_templateObject17 = spelldamage_taggedTemplateLiteral(["Concentration"]))), (0,template_string/* $effect */._G)(spelldamage_templateObject18 || (spelldamage_templateObject18 = spelldamage_taggedTemplateLiteral(["Cowrruption"]))), (0,template_string/* $effect */._G)(spelldamage_templateObject19 || (spelldamage_templateObject19 = spelldamage_taggedTemplateLiteral(["Jackasses' Symphony of Destruction"]))), (0,template_string/* $effect */._G)(spelldamage_templateObject20 || (spelldamage_templateObject20 = spelldamage_taggedTemplateLiteral(["Mental A-cue-ity"]))), (0,template_string/* $effect */._G)(spelldamage_templateObject21 || (spelldamage_templateObject21 = spelldamage_taggedTemplateLiteral(["Pisces in the Skyces"]))), (0,template_string/* $effect */._G)(spelldamage_templateObject22 || (spelldamage_templateObject22 = spelldamage_taggedTemplateLiteral(["Song of Sauce"]))), (0,template_string/* $effect */._G)(spelldamage_templateObject23 || (spelldamage_templateObject23 = spelldamage_taggedTemplateLiteral(["Spirit of Peppermint"]))), (0,template_string/* $effect */._G)(spelldamage_templateObject24 || (spelldamage_templateObject24 = spelldamage_taggedTemplateLiteral(["The Magic of LOV"]))), (0,template_string/* $effect */._G)(spelldamage_templateObject25 || (spelldamage_templateObject25 = spelldamage_taggedTemplateLiteral(["We're All Made of Starfish"]))), (0,template_string/* $effect */._G)(spelldamage_templateObject26 || (spelldamage_templateObject26 = spelldamage_taggedTemplateLiteral(["Warlock, Warstock, and Warbarrel"])))],
    post: () => {
      burnLibram(300);
      (0,external_kolmafia_.useSkill)((0,template_string/* $skill */.tm)(spelldamage_templateObject27 || (spelldamage_templateObject27 = spelldamage_taggedTemplateLiteral(["Spirit of Nothing"]))));
    },
    limit: {
      tries: 1
    }
  }]
};
;// CONCATENATED MODULE: ./src/tasks/stat.ts
var stat_templateObject, stat_templateObject2, stat_templateObject3, stat_templateObject4, stat_templateObject5, stat_templateObject6, stat_templateObject7, stat_templateObject8, stat_templateObject9, stat_templateObject10, stat_templateObject11, stat_templateObject12, stat_templateObject13, stat_templateObject14, stat_templateObject15, stat_templateObject16, stat_templateObject17, stat_templateObject18, stat_templateObject19, stat_templateObject20, stat_templateObject21, stat_templateObject22, stat_templateObject23, stat_templateObject24, stat_templateObject25, stat_templateObject26, stat_templateObject27, stat_templateObject28, stat_templateObject29, stat_templateObject30, stat_templateObject31, stat_templateObject32, stat_templateObject33, stat_templateObject34, stat_templateObject35, stat_templateObject36;

function stat_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var HPQuest = {
  name: "HP",
  tasks: [{
    name: "Test",
    prepare: () => {
      if ((0,lib/* have */.lf)((0,template_string/* $effect */._G)(stat_templateObject || (stat_templateObject = stat_taggedTemplateLiteral(["[1458]Blood Sugar Sauce Magic"]))))) (0,external_kolmafia_.useSkill)((0,template_string/* $skill */.tm)(stat_templateObject2 || (stat_templateObject2 = stat_taggedTemplateLiteral(["Blood Sugar Sauce Magic"]))));
    },
    completed: () => CommunityService.HP.isDone(),
    do: () => CommunityService.HP.run(() => printModtrace(["Maximum HP", "Maximum HP Percent"]), 1),
    outfit: {
      modifier: "HP",
      familiar: (0,template_string/* $familiar */.HP)(stat_templateObject3 || (stat_templateObject3 = stat_taggedTemplateLiteral(["Disembodied Hand"])))
    },
    effects: [(0,template_string/* $effect */._G)(stat_templateObject4 || (stat_templateObject4 = stat_taggedTemplateLiteral(["A Few Extra Pounds"]))), (0,template_string/* $effect */._G)(stat_templateObject5 || (stat_templateObject5 = stat_taggedTemplateLiteral(["Mariachi Mood"]))), (0,template_string/* $effect */._G)(stat_templateObject6 || (stat_templateObject6 = stat_taggedTemplateLiteral(["Patience of the Tortoise"]))), (0,template_string/* $effect */._G)(stat_templateObject7 || (stat_templateObject7 = stat_taggedTemplateLiteral(["Power Ballad of the Arrowsmith"]))), (0,template_string/* $effect */._G)(stat_templateObject8 || (stat_templateObject8 = stat_taggedTemplateLiteral(["Quiet Determination"]))), (0,template_string/* $effect */._G)(stat_templateObject9 || (stat_templateObject9 = stat_taggedTemplateLiteral(["Reptilian Fortitude"]))), (0,template_string/* $effect */._G)(stat_templateObject10 || (stat_templateObject10 = stat_taggedTemplateLiteral(["Saucemastery"]))), (0,template_string/* $effect */._G)(stat_templateObject11 || (stat_templateObject11 = stat_taggedTemplateLiteral(["Seal Clubbing Frenzy"]))), (0,template_string/* $effect */._G)(stat_templateObject12 || (stat_templateObject12 = stat_taggedTemplateLiteral(["Song of Starch"])))],
    post: () => {
      if (!(0,lib/* have */.lf)((0,template_string/* $effect */._G)(stat_templateObject13 || (stat_templateObject13 = stat_taggedTemplateLiteral(["[1458]Blood Sugar Sauce Magic"]))))) (0,external_kolmafia_.useSkill)((0,template_string/* $skill */.tm)(stat_templateObject14 || (stat_templateObject14 = stat_taggedTemplateLiteral(["Blood Sugar Sauce Magic"]))));
      burnLibram(300);
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
    prepare: () => (0,external_kolmafia_.useSkill)((0,template_string/* $skill */.tm)(stat_templateObject15 || (stat_templateObject15 = stat_taggedTemplateLiteral(["Bind Undead Elbow Macaroni"])))),
    completed: () => CommunityService.Muscle.isDone(),
    do: () => CommunityService.Muscle.run(() => printModtrace(["Muscle", "Muscle Percent"]), 1),
    outfit: {
      modifier: "Muscle",
      familiar: (0,template_string/* $familiar */.HP)(stat_templateObject16 || (stat_templateObject16 = stat_taggedTemplateLiteral(["Disembodied Hand"])))
    },
    effects: [(0,template_string/* $effect */._G)(stat_templateObject17 || (stat_templateObject17 = stat_taggedTemplateLiteral(["Go Get 'Em, Tiger!"]))), (0,template_string/* $effect */._G)(stat_templateObject18 || (stat_templateObject18 = stat_taggedTemplateLiteral(["Quiet Determination"]))), (0,template_string/* $effect */._G)(stat_templateObject19 || (stat_templateObject19 = stat_taggedTemplateLiteral(["Power Ballad of the Arrowsmith"]))), (0,template_string/* $effect */._G)(stat_templateObject20 || (stat_templateObject20 = stat_taggedTemplateLiteral(["Rage of the Reindeer"]))), (0,template_string/* $effect */._G)(stat_templateObject21 || (stat_templateObject21 = stat_taggedTemplateLiteral(["Song of Bravado"])))],
    post: () => {
      (0,lib/* uneffect */.Lo)((0,template_string/* $effect */._G)(stat_templateObject22 || (stat_templateObject22 = stat_taggedTemplateLiteral(["Power Ballad of the Arrowsmith"]))));
      burnLibram(300);
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
    do: () => CommunityService.Mysticality.run(() => printModtrace(["Mysticality", "Mysticality Percent"]), 1),
    outfit: {
      modifier: "Mysticality",
      familiar: (0,template_string/* $familiar */.HP)(stat_templateObject23 || (stat_templateObject23 = stat_taggedTemplateLiteral(["Disembodied Hand"])))
    },
    effects: [(0,template_string/* $effect */._G)(stat_templateObject24 || (stat_templateObject24 = stat_taggedTemplateLiteral(["Glittering Eyelashes"]))), (0,template_string/* $effect */._G)(stat_templateObject25 || (stat_templateObject25 = stat_taggedTemplateLiteral(["The Magical Mojomuscular Melody"]))), (0,template_string/* $effect */._G)(stat_templateObject26 || (stat_templateObject26 = stat_taggedTemplateLiteral(["Pasta Oneness"]))), (0,template_string/* $effect */._G)(stat_templateObject27 || (stat_templateObject27 = stat_taggedTemplateLiteral(["Quiet Judgement"])))],
    post: () => {
      (0,lib/* uneffect */.Lo)((0,template_string/* $effect */._G)(stat_templateObject28 || (stat_templateObject28 = stat_taggedTemplateLiteral(["The Magical Mojomuscular Melody"]))));
      burnLibram(300);
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
    do: () => CommunityService.Moxie.run(() => printModtrace(["Moxie", "Moxie Percent"]), 1),
    outfit: {
      modifier: "Moxie",
      familiar: (0,template_string/* $familiar */.HP)(stat_templateObject29 || (stat_templateObject29 = stat_taggedTemplateLiteral(["Disembodied Hand"])))
    },
    effects: [(0,template_string/* $effect */._G)(stat_templateObject30 || (stat_templateObject30 = stat_taggedTemplateLiteral(["Blubbered Up"]))), (0,template_string/* $effect */._G)(stat_templateObject31 || (stat_templateObject31 = stat_taggedTemplateLiteral(["Butt-Rock Hair"]))), (0,template_string/* $effect */._G)(stat_templateObject32 || (stat_templateObject32 = stat_taggedTemplateLiteral(["Disco Fever"]))), (0,template_string/* $effect */._G)(stat_templateObject33 || (stat_templateObject33 = stat_taggedTemplateLiteral(["Disco State of Mind"]))), (0,template_string/* $effect */._G)(stat_templateObject34 || (stat_templateObject34 = stat_taggedTemplateLiteral(["The Moxious Madrigal"]))), (0,template_string/* $effect */._G)(stat_templateObject35 || (stat_templateObject35 = stat_taggedTemplateLiteral(["Pomp & Circumsands"]))), (0,template_string/* $effect */._G)(stat_templateObject36 || (stat_templateObject36 = stat_taggedTemplateLiteral(["Quiet Desperation"])))],
    post: () => burnLibram(300),
    limit: {
      tries: 1
    }
  }]
};
;// CONCATENATED MODULE: ./src/tasks/weapondamage.ts
var weapondamage_templateObject, weapondamage_templateObject2, weapondamage_templateObject3, weapondamage_templateObject4, weapondamage_templateObject5, weapondamage_templateObject6, weapondamage_templateObject7, weapondamage_templateObject8, weapondamage_templateObject9, weapondamage_templateObject10, weapondamage_templateObject11, weapondamage_templateObject12, weapondamage_templateObject13, weapondamage_templateObject14, weapondamage_templateObject15, weapondamage_templateObject16, weapondamage_templateObject17, weapondamage_templateObject18, weapondamage_templateObject19, weapondamage_templateObject20, weapondamage_templateObject21, weapondamage_templateObject22, weapondamage_templateObject23, weapondamage_templateObject24, weapondamage_templateObject25, weapondamage_templateObject26, weapondamage_templateObject27, weapondamage_templateObject28, weapondamage_templateObject29, weapondamage_templateObject30, weapondamage_templateObject31, weapondamage_templateObject32, weapondamage_templateObject33, weapondamage_templateObject34;

function weapondamage_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = weapondamage_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function weapondamage_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return weapondamage_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return weapondamage_arrayLikeToArray(o, minLen); }

function weapondamage_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function weapondamage_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function weapondamage_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { weapondamage_ownKeys(Object(source), true).forEach(function (key) { weapondamage_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { weapondamage_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function weapondamage_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function weapondamage_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var WeaponDamageQuest = {
  name: "Weapon Damage",
  completed: () => CommunityService.WeaponDamage.isDone(),
  tasks: [{
    name: "Carol",
    ready: () => crimboCarols.every(ef => !(0,lib/* have */.lf)(ef)) && (0,property/* get */.U2)("_reflexHammerUsed") < 3,
    completed: () => (0,lib/* have */.lf)((0,template_string/* $effect */._G)(weapondamage_templateObject || (weapondamage_templateObject = weapondamage_taggedTemplateLiteral(["Do You Crush What I Crush?"])))),
    do: (0,template_string/* $location */.PG)(weapondamage_templateObject2 || (weapondamage_templateObject2 = weapondamage_taggedTemplateLiteral(["The Dire Warren"]))),
    combat: new CombatStrategy().macro(combat/* Macro.skill */.LE.skill((0,template_string/* $skill */.tm)(weapondamage_templateObject3 || (weapondamage_templateObject3 = weapondamage_taggedTemplateLiteral(["Reflex Hammer"]))))),
    outfit: {
      pants: (0,template_string/* $item */.xr)(weapondamage_templateObject4 || (weapondamage_templateObject4 = weapondamage_taggedTemplateLiteral(["designer sweatpants"]))),
      acc1: (0,template_string/* $item */.xr)(weapondamage_templateObject5 || (weapondamage_templateObject5 = weapondamage_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]))),
      familiar: (0,template_string/* $familiar */.HP)(weapondamage_templateObject6 || (weapondamage_templateObject6 = weapondamage_taggedTemplateLiteral(["Ghost of Crimbo Carols"]))),
      famequip: (0,template_string/* $item */.xr)(weapondamage_templateObject7 || (weapondamage_templateObject7 = weapondamage_taggedTemplateLiteral(["none"])))
    },
    limit: {
      tries: 1
    }
  }, weapondamage_objectSpread({}, innerElfTask), {
    name: "Ungulith",
    ready: () => (0,property/* get */.U2)("photocopyMonster") === (0,template_string/* $monster */.O4)(weapondamage_templateObject8 || (weapondamage_templateObject8 = weapondamage_taggedTemplateLiteral(["ungulith"]))) && (0,property/* get */.U2)("_meteorShowerUses") < 5 && (0,property/* get */.U2)("_saberForceUses") < 5,
    prepare: () => (0,external_kolmafia_.useFamiliar)((0,template_string/* $familiar */.HP)(weapondamage_templateObject9 || (weapondamage_templateObject9 = weapondamage_taggedTemplateLiteral(["Disembodied Hand"])))),
    completed: () => (0,lib/* have */.lf)((0,template_string/* $effect */._G)(weapondamage_templateObject10 || (weapondamage_templateObject10 = weapondamage_taggedTemplateLiteral(["Meteor Showered"])))) && ((0,lib/* have */.lf)((0,template_string/* $item */.xr)(weapondamage_templateObject11 || (weapondamage_templateObject11 = weapondamage_taggedTemplateLiteral(["corrupted marrow"])))) || (0,lib/* have */.lf)((0,template_string/* $effect */._G)(weapondamage_templateObject12 || (weapondamage_templateObject12 = weapondamage_taggedTemplateLiteral(["Cowrruption"]))))),
    do: () => (0,external_kolmafia_.use)((0,template_string/* $item */.xr)(weapondamage_templateObject13 || (weapondamage_templateObject13 = weapondamage_taggedTemplateLiteral(["photocopied monster"])))),
    combat: new CombatStrategy().macro(combat/* Macro.skill */.LE.skill((0,template_string/* $skill */.tm)(weapondamage_templateObject14 || (weapondamage_templateObject14 = weapondamage_taggedTemplateLiteral(["Meteor Shower"])))).skill((0,template_string/* $skill */.tm)(weapondamage_templateObject15 || (weapondamage_templateObject15 = weapondamage_taggedTemplateLiteral(["Use the Force"]))))),
    choices: {
      1387: 3
    },
    outfit: {
      weapon: (0,template_string/* $item */.xr)(weapondamage_templateObject16 || (weapondamage_templateObject16 = weapondamage_taggedTemplateLiteral(["none"]))),
      offhand: (0,template_string/* $item */.xr)(weapondamage_templateObject17 || (weapondamage_templateObject17 = weapondamage_taggedTemplateLiteral(["none"]))),
      famequip: (0,template_string/* $item */.xr)(weapondamage_templateObject18 || (weapondamage_templateObject18 = weapondamage_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))
    },
    limit: {
      tries: 1
    }
  }, {
    name: "Test",
    prepare: () => {
      setSong("These Fists Were Made for Punchin'");

      var _iterator = weapondamage_createForOfIteratorHelper((0,template_string/* $items */.vS)(weapondamage_templateObject19 || (weapondamage_templateObject19 = weapondamage_taggedTemplateLiteral(["Fabiotion, resolution: be feistier"])))),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var it = _step.value;
          if ((0,lib/* have */.lf)(it)) (0,lib/* ensureEffect */.pq)((0,external_kolmafia_.effectModifier)(it, "effect"));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    completed: () => CommunityService.WeaponDamage.isDone(),
    do: () => CommunityService.WeaponDamage.run(() => printModtrace(["Weapon Damage", "Weapon Damage Percent"]), 1),
    outfit: {
      modifier: "weapon dmg",
      familiar: (0,template_string/* $familiar */.HP)(weapondamage_templateObject20 || (weapondamage_templateObject20 = weapondamage_taggedTemplateLiteral(["Disembodied Hand"])))
    },
    effects: [(0,template_string/* $effect */._G)(weapondamage_templateObject21 || (weapondamage_templateObject21 = weapondamage_taggedTemplateLiteral(["Billiards Belligerence"]))), (0,template_string/* $effect */._G)(weapondamage_templateObject22 || (weapondamage_templateObject22 = weapondamage_taggedTemplateLiteral(["Bow-Legged Swagger"]))), (0,template_string/* $effect */._G)(weapondamage_templateObject23 || (weapondamage_templateObject23 = weapondamage_taggedTemplateLiteral(["Carol of the Bulls"]))), (0,template_string/* $effect */._G)(weapondamage_templateObject24 || (weapondamage_templateObject24 = weapondamage_taggedTemplateLiteral(["Cowrruption"]))), (0,template_string/* $effect */._G)(weapondamage_templateObject25 || (weapondamage_templateObject25 = weapondamage_taggedTemplateLiteral(["Disdain of the War Snapper"]))), (0,template_string/* $effect */._G)(weapondamage_templateObject26 || (weapondamage_templateObject26 = weapondamage_taggedTemplateLiteral(["Frenzied, Bloody"]))), (0,template_string/* $effect */._G)(weapondamage_templateObject27 || (weapondamage_templateObject27 = weapondamage_taggedTemplateLiteral(["Jackasses' Symphony of Destruction"]))), (0,template_string/* $effect */._G)(weapondamage_templateObject28 || (weapondamage_templateObject28 = weapondamage_taggedTemplateLiteral(["Lack of Body-Building"]))), (0,template_string/* $effect */._G)(weapondamage_templateObject29 || (weapondamage_templateObject29 = weapondamage_taggedTemplateLiteral(["Rage of the Reindeer"]))), (0,template_string/* $effect */._G)(weapondamage_templateObject30 || (weapondamage_templateObject30 = weapondamage_taggedTemplateLiteral(["Scowl of the Auk"]))), (0,template_string/* $effect */._G)(weapondamage_templateObject31 || (weapondamage_templateObject31 = weapondamage_taggedTemplateLiteral(["Song of the North"]))), (0,template_string/* $effect */._G)(weapondamage_templateObject32 || (weapondamage_templateObject32 = weapondamage_taggedTemplateLiteral(["Tenacity of the Snapper"]))), (0,template_string/* $effect */._G)(weapondamage_templateObject33 || (weapondamage_templateObject33 = weapondamage_taggedTemplateLiteral(["The Power of LOV"])))],
    acquire: [{
      item: (0,template_string/* $item */.xr)(weapondamage_templateObject34 || (weapondamage_templateObject34 = weapondamage_taggedTemplateLiteral(["broken champagne bottle"])))
    }],
    post: () => {
      setSong("Total Eclipse of Your Meat");
      burnLibram(300);
    },
    limit: {
      tries: 1
    }
  }]
};
;// CONCATENATED MODULE: ./src/main.ts
var main_templateObject, main_templateObject2;

function main_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


















var timeProperty = "fullday_elapsedTime";
var args = Args.create("InstantHCCS", "A full-day wrapper script.", {
  confirm: Args.boolean({
    help: "If the user must confirm execution of each task.",
    default: false
  })
});
function main(command) {
  Args.fill(args, command);

  if (args.help) {
    Args.showHelp(args);
    return;
  }

  if (runComplete()) {
    (0,external_kolmafia_.print)("Community Service complete!", "purple");
    return;
  }

  var setTimeNow = (0,property/* get */.U2)(timeProperty, -1) === -1;
  if (setTimeNow) (0,property/* set */.t8)(timeProperty, (0,external_kolmafia_.gametimeToInt)());
  var tasks = getTasks([RunStartQuest, CoilWireQuest, PostCoilQuest, LevelingQuest, HotResQuest, HPQuest, MuscleQuest, MysticalityQuest, MoxieQuest, NoncombatQuest, WeaponDamageQuest, SpellDamageQuest, FamiliarWeightQuest, BoozeDropQuest, DonateQuest]);
  var engine = new engine_Engine(tasks);
  (0,external_kolmafia_.setAutoAttack)(0);
  (0,external_kolmafia_.cliExecute)("ccs InstantHCCS");
  (0,property/* set */.t8)("InstantHCCSRunStart", (0,external_kolmafia_.gametimeToInt)());

  while (!runComplete()) {
    var task = engine.getNextTask();
    if (task === undefined) throw "Unable to find available task, but the run is not complete";

    if (args.confirm && !(0,external_kolmafia_.userConfirm)("Executing task ".concat(task.name, ", should we continue?"))) {
      throw "User rejected execution of task ".concat(task.name);
    }

    if (task.ready !== undefined && !task.ready()) throw "Task ".concat(task.name, " is not ready");
    engine.execute(task);
  }

  (0,property/* set */.t8)("InstantHCCSTurncount", (0,external_kolmafia_.myTurncount)());
  (0,property/* set */.t8)("InstantHCCSRunEnd", (0,external_kolmafia_.gametimeToInt)());
  (0,property/* set */.t8)("InstantHCCSDaycount", (0,external_kolmafia_.myDaycount)());
  (0,external_kolmafia_.print)("Community Service complete!", "purple");
  (0,external_kolmafia_.print)("Adventures used: ".concat((0,external_kolmafia_.turnsPlayed)()), "purple");
  (0,external_kolmafia_.print)("Adventures remaining: ".concat((0,external_kolmafia_.myAdventures)()), "purple");
  if (setTimeNow) (0,external_kolmafia_.print)("Time: ".concat(convertMilliseconds((0,external_kolmafia_.gametimeToInt)() - (0,property/* get */.U2)(timeProperty, (0,external_kolmafia_.gametimeToInt)()))), "purple");else (0,external_kolmafia_.print)("Time: ".concat(convertMilliseconds((0,external_kolmafia_.gametimeToInt)() - (0,property/* get */.U2)(timeProperty, (0,external_kolmafia_.gametimeToInt)())), " since first run today started"), "purple");
}

function runComplete() {
  return (0,property/* get */.U2)("kingLiberated") && (0,property/* get */.U2)("lastEmptiedStorage") === (0,external_kolmafia_.myAscensions)() && !(0,lib/* have */.lf)((0,template_string/* $effect */._G)(main_templateObject || (main_templateObject = main_taggedTemplateLiteral(["Feeling Lost"])))) && !(0,lib/* have */.lf)((0,template_string/* $effect */._G)(main_templateObject2 || (main_templateObject2 = main_taggedTemplateLiteral(["Cowrruption"]))));
}
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;