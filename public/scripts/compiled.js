(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var events = require('./lib/events.js');
var menu = require('./lib/events.js')();

},{"./lib/events.js":2}],2:[function(require,module,exports){
'use strict';

module.exports = function () {

  var windowWidth = document.body.clientWidth;
  var navInfo = document.querySelectorAll('.nav .data-link');
  var dataList = document.querySelectorAll('.data-list-wrap .list');
  var menuToggle = document.querySelector('#menu-toggle');
  var navWrap = document.querySelector('.nav-wrapper');

  // event listeners
  [].forEach.call(navInfo, function (el, i) {
    el.addEventListener('click', function () {
      dataList[i].classList.toggle('show');
      this.classList.toggle('on');

      if (windowWidth <= 768) {
        if (navWrap.classList.contains('show')) {
          navWrap.classList.remove('show');
        }
        if (menuToggle.classList.contains('on')) {
          menuToggle.classList.remove('on');
        }
      }
    });
  });

  menuToggle.addEventListener('click', function () {
    this.classList.toggle('on');
    navWrap.classList.toggle('show');
  });
};

},{}]},{},[1]);

//# sourceMappingURL=compiled.js.map
