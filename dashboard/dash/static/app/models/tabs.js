$(function() {
  "use strict";

  window.Data = window.Data || {};
  window.Models = window.Models || {};

  window.Models.Tab = Backbone.Model.extend({});
  window.Models.Tabs = Backbone.Collection.extend({
    model: window.Models.Tab,

    save: function() {
      $.post('/dashboards', {
        raw: JSON.stringify(this),
      }, function(data) {
        if (data.success) {
          // TODO: show flash message
        }
      });
    },
  });

  window.Data.Tabs = new window.Models.Tabs();
  window.Data.Tabs.activeIndex = null;
});
