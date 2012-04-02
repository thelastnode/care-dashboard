$(function() {
  "use strict";

  window.Views = window.Views || {};

  window.Views.Login = Backbone.View.extend({
    template: _.template($('#tmpl-login').text()),

    events: {
      'submit form': 'submit',
    },

    initialize: function() {
      this.on('login_failure', this.showError, this);
    },

    render: function() {
      this.$el.html(this.template());
      return this;
    },

    submit: function(e) {
      e.preventDefault();
      var username = this.$el.find('#username').val();
      var password = this.$el.find('#password').val();

      var view = this;

      $.post('/login', {
        username: username,
        password: password,
      }, function(data) {
        if (data.success) {
          view.trigger('login_success', data.user);
        } else {
          view.trigger('login_failure', data.error);
        }
      }, 'json');
    },

    showError: function(msg) {
      var modal = this.$el.find('#modal-login-failed');
      modal.find('.message').text(msg);
      modal.modal();
    },
  });
});
