module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/forum/AddSkypeMoji.js":
/*!***********************************!*\
  !*** ./src/forum/AddSkypeMoji.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/*
 * This file is part of justoverclock/flarum-ext-keywords.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  // Official Skype Emoticons, copyright to Skype.
  var url = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.forum.attribute('baseUrl') + '/assets/extensions/justoverclock-skypemoji/';
  var emoticons = {
    ':happy:': 'happy_40x40',
    ':happyeye:': 'happyeyes_40x40',
    ':headbang:': 'headbang_40x40',
    ':clap:': 'clap_40x40',
    ':finger:': 'finger_40x40',
    ':fear:': 'fearful_40x40',
    ':giggle:': 'giggle_40x40',
    ':hang:': 'hungover_40x40',
    ':hyst:': 'hysterical_40x40',
    ':idea:': 'idea_40x40',
    ':love:': 'inlove_40x40',
    ':heart:': 'hearteyes_40x40',
    ':hi:': 'hi_40x40',
    ':angry:': 'angry_40x40',
    ':bandit:': 'bandit_40x40',
    ':blank:': 'blankface_40x40',
    ':bomb:': 'bomb_40x40',
    ':call:': 'call_40x40',
    ':champagne:': 'champagne_40x40',
    ':devil:': 'devil_40x40',
    ':drunk:': 'drunk_40x40',
    ':dull:': 'dull_40x40',
    ':evil:': 'evilgrin_40x40',
    ':envy:': 'envy_40x40',
    ':emo:': 'emo_40x40',
    ':neutr:': 'expressionless_40x40',
    ':party:': 'festiveparty_40x40',
    ':hphone:': 'headphones_40x40',
    ':holiday:': 'holidayspirit_40x40',
    ':robot:': 'laughrobot_40x40',
    ':monkey:': 'laughmonkey_40x40',
    ':like:': 'like_40x40',
    ':mute:': 'lipssealed_40x40',
    ':cry:': 'loudlycrying_40x40',
    ':makeup:': 'makeup_40x40',
    ':lord:': 'movember_40x40',
    ':ass:': 'mooning_40x40',
    ':mmm:': 'mmm_40x40',
    ':angrys:': 'angryface_40x40',
    ':xmas:': 'xmassarcastic_40x40',
    ':yawn:': 'yawn_40x40',
    ':wtf:': 'wtf_40x40',
    ':xd:': 'xd_40x40',
    ':worry:': 'worry_40x40',
    ':wonder:': 'wonder_40x40',
    ':wink:': 'wink_40x40',
    ':tongue:': 'winktongueout_40x40',
    ':whew:': 'whew_40x40',
    ':whistle:': 'whistle_40x40',
    ':wait:': 'wait_40x40',
    ':conf:': 'veryconfused_40x40',
    ':time:': 'waiting_40x40',
    ':notme:': 'wasntme_40x40',
    ':upd:': 'upsidedownface_40x40',
    ':vamp:': 'vampire_40x40',
    ':mah:': 'unamused_40x40',
    ':tired:': 'tired_40x40',
    ':swear:': 'swear_40x40',
    ':sweat:': 'sweat_40x40',
    ':hand:': 'talktothehand_40x40',
    ':ops:': 'sweatgrinning_40x40',
    ':surpr:': 'surprised_40x40',
    ':star:': 'stareyes_40x40',
    ':snake:': 'snake_40x40',
    ':football:': 'americanfootball2_40x40',
    ':angel:': 'angel_40x40',
    ':banana:': 'banana_40x40',
    ':avocado:': 'avocadolove_40x40',
    ':burger:': 'burger_40x40',
    ':cake:': 'cake_40x40',
    ':pc:': 'computer_40x40',
    ':cool:': 'cool_40x40',
    ':coolmonkey:': 'coolmonkey_40x40',
    ':coolbot:': 'coolrobot_40x40',
    ':tear:': 'cry_40x40',
    ':dia:': 'diamond_40x40',
    ':doh:': 'doh_40x40',
    ':dream:': 'dream_40x40',
    ':facepalm:': 'facepalm_40x40',
    ':crossed:': 'fingerscrossed_40x40',
    ':fire:': 'fire_40x40',
    ':shock:': 'llsshock_40x40',
    ':movie:': 'movie_40x40',
    ':wc:': 'ontheloo_40x40',
    ':penguin:': 'penguin_40x40',
    ':pizza:': 'pizza_40x40',
    ':phone:': 'phone_40x40',
    ':poop:': 'poop_40x40',
    ':puke:': 'puke_40x40',
    ':punch:': 'punch_40x40',
    ':pool:': 'poolparty_40x40',
    ':racoon:': 'racoon_40x40',
    ':rain:': 'rain_40x40',
    ':red:': 'red_40x40',
    ':rock:': 'rock_40x40',
    ':rofl:': 'rofl_40x40',
    ':rudolf:': 'rudolfidea_40x40',
    ':santass:': 'santamooning_40x40',
    ':selfie:': 'selfie_40x40',
    ':shake:': 'shake_40x40',
    ':frozen:': 'shivering_40x40',
    ':zzz:': 'sleepy_40x40',
    ':slap:': 'slap_40x40',
    ':smoke:': 'smoke_40x40',
    ':smirk:': 'smirk_40x40',
    ':snail:': 'snail_40x40',
    ':train:': 'steamtrain_40x40',
    ':stop:': 'stop_40x40',
    ':nerd:': 'tauri_40x40'
  };
  mapIdsToPaths(emoticons, url, '', '');
  document.querySelectorAll('p').forEach(function (e) {
    return e.innerHTML = replaceEmoticons(e.innerHTML, emoticons);
  });

  function replaceEmoticons(text, emotes) {
    return Object.keys(emotes).reduce(function (result, emote) {
      return result.replace(new RegExp(RegExpEscape(emote), 'gi'), function (match) {
        return function (img) {
          return img != null ? '<img src="' + img + '" class="skypemoji"/>' : match;
        }(emotes[match]);
      });
    }, text);
  }

  function RegExpEscape(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }

  function mapIdsToPaths(emotes, url, prefix) {
    Object.keys(emotes).forEach(function (id) {
      emotes[id] = url + prefix + emotes[id] + '.gif';
    });
  }
});

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/CommentPost */ "flarum/forum/components/CommentPost");
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AddSkypeMoji__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddSkypeMoji */ "./src/forum/AddSkypeMoji.js");
/*
 * This file is part of justoverclock/flarum-ext-twitchmoji.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */




flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('justoverclock/flarum-ext-skypemoji', function () {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, ['oncreate', 'onupdate'], _AddSkypeMoji__WEBPACK_IMPORTED_MODULE_3__["default"]);
});

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/CommentPost":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/CommentPost']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/CommentPost'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map