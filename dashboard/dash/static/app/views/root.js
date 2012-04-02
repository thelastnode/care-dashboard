$(function() {
  "use strict";

  window.Views = window.Views || {};

  window.Views.Root = Backbone.View.extend({
    initialize: function() {
      this.login_view = new window.Views.Login();
      this.login_view.on('login_success', this.loggedIn, this);

      this.active_view = this.login_view;
    },

    render: function() {
      this.active_view.render();
      this.$el.empty();
      this.$el.append(this.active_view.$el);
    },

    loggedIn: function() {
      // TODO: this is a temporary view, will actually show app in future
      this.active_view = {
        '$el': $('<div>'),
        render: function() {
        },
      };
      this.render();
    },
  });

  new window.Views.Root({
    el: $('#app')
  }).render();
});
