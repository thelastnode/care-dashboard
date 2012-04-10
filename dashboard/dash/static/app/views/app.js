$(function() {
  "use strict";

  window.Views = window.Views || {};

  window.Views.App = Backbone.View.extend({
    template: _.template($('#tmpl-app').text()),

    initialize: function() {
      this.header = new window.Views.Header();

      // propagate the logout event to the root
      this.header.on('logout', function() { this.trigger('logout'); }, this);
    },

    render: function() {
      this.$el.children().detach();
      this.header.render();

      this.$el.append(this.template({}));
      this.$el.find('.header').append(this.header.$el);
    },
  });
});
