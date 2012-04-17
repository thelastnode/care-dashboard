$(function() {
  "use strict";

  window.Data = window.Data || {};
  window.Models = window.Models || {};

  window.Models.Tab = Backbone.Model.extend({});
  window.Models.Tabs = Backbone.Collection.extend({
    model: window.Models.Tab,
  });

  window.Data.Tabs = new window.Models.Tabs();
  window.Data.Tabs.activeIndex = null;
});
