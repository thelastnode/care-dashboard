$(function() {
  "use strict";

  window.Views = window.Views || {};

  window.Views.Root = Backbone.View.extend({
    initialize: function() {
      this.switchToLoginView();
    },

    render: function() {
      this.$el.children().detach();
      this.active_view.render();
      this.$el.append(this.active_view.$el);
    },

    loggedIn: function(user) {
      window.user = new window.Models.User({
        raw_user: user,
      });
      this.switchToAppView();
    },

    loggedOut: function() {
      delete window.user;
      this.switchToLoginView();
    },

    switchToLoginView: function() {
      this.offActiveView();
      this.active_view = new window.Views.Login();
      this.active_view.on('login_success', this.loggedIn, this);
      this.render();
    },

    switchToAppView: function() {
      this.offActiveView();
      this.active_view = new window.Views.App();
      this.active_view.on('logout', this.loggedOut, this);
      this.render();
    },

    offActiveView: function() {
      if (this.active_view) {
        this.active_view.off();
      }
    },
  });

  var app = new window.Views.Root({
    el: $('#app'),
  });
});
