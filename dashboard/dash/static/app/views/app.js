$(function() {
  "use strict";

  window.Views = window.Views || {};

  window.Views.App = Backbone.View.extend({
    template: _.template($('#tmpl-app').text()),

    events: {
      'click .add-dashboard-button': 'openNewTabModal',
      'click .cancel-button': 'hideNewTabModal',
      'click .create-button': 'submitNewTabModal',
      'submit .modal form': 'submitNewTabModal',
    },

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

      this.modal = this.$el.find('.modal');
    },

    openNewTabModal: function() {
      this.modal.modal('show');
    },

    hideNewTabModal: function() {
      this.modal.modal('hide');
      this.modal.find('input').val('');
    },

    submitNewTabModal: function(e) {
      e.preventDefault();
      var name = this.modal.find('input').val();

      // TODO: make new tab

      hideNewTabModal();
    },
  });
});
