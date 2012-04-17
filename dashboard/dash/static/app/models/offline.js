$(function() {
  "use strict";

  window.Models = window.Models || {};

  window.Models.Offline = function() {
    this.get = function(key) {
      return window.localStorage.getItem(key);
    };

    this.set = function(key, value) {
      window.localStorage.setItem(key, value);
    };

    this.remove = function(key) {
      window.localStorage.removeItem(key);
    };

    this.clear = function() {
      window.localStorage.clear();
    };
  };

  window.Offline = new window.Models.Offline();
});
