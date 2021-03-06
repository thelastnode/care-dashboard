$(function() {
  "use strict";

  window.Views = window.Views || {};

  window.Views.App = Backbone.View.extend({
    template: _.template($('#tmpl-app').text()),
    tabTemplate: _.template($('#tmpl-app-tab').text()),

    events: {
      'click .add-dashboard-button': 'openNewTabModal',
      'click .cancel-button': 'hideNewTabModal',
      'click .create-button': 'submitNewTabModal',
      'submit .modal form': 'submitNewTabModal',

      'click ul.nav-tabs li': 'switchActiveTab',
    },

    initialize: function() {
      window.Data.Tabs.on('add remove change', this.render, this);
      this.header = new window.Views.Header();

      // propagate the logout event to the root
      this.header.on('logout', function() { this.trigger('logout'); }, this);
    },

    render: function() {
      this.hideNewTabModal();
      this.$el.children().detach();
      this.header.render();

      this.$el.append(this.template({}));
      this.$el.find('.header').append(this.header.$el);

      var add_button = this.$el.find('ul.nav-tabs li');;
      var tabTemplate = this.tabTemplate;

      window.Data.Tabs.forEach(function(t, i) {
        var tab = $(tabTemplate({
          name: t.get('name'),
        }));
        if (i === window.Data.Tabs.activeIndex) {
          tab.addClass('active');
        }
        add_button.before(tab);
      });

      this.modal = this.$el.find('.modal');
    },

    openNewTabModal: function() {
      if (!this.modal) return;

      this.modal.modal('show');
      this.modal.find('input').focus();
    },

    hideNewTabModal: function() {
      if (!this.modal) return;

      this.modal.modal('hide');
      this.modal.find('input').val('');
    },

    submitNewTabModal: function(e) {
      e.preventDefault();
      var name = this.modal.find('input').val();

      window.Data.Tabs.add(new window.Models.Tab({
        name: name,
      }));

      this.hideNewTabModal();
    },

    switchActiveTab: function(e) {
      var src = $(e.srcElement);
      if (src.hasClass('add-dashboard-button')
          || src.parent().hasClass('add-dashboard-button')) {
        return;
      }

      // select parent 'li' instead of 'a' tag to find index
      src = src.parent();
      window.Data.Tabs.activeIndex = src.index();
      this.render();
    },
  });
});
