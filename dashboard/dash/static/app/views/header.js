$(function() {
  "use strict";

  window.Views = window.Views || {};

  window.Views.Header = Backbone.View.extend({
    template: _.template($('#tmpl-header').text()),

    events: {
      'click .logout-button': 'logout',
    },

    render: function() {
      this.$el.children().detach();
      this.$el.append(this.template({
        name: window.user.get('first_name') + ' '
          + window.user.get('last_name'),
      }));
    },

    logout: function() {
      this.trigger('logout');
      $.getJSON('/logout');
    },
  });
});
