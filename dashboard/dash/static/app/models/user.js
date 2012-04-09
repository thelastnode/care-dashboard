$(function() {
  "use strict";

  window.Models = window.Models || {};

  window.Models.User = Backbone.Model.extend({
    initialize: function() {
      var raw_user = this.get('raw_user');

      this.set('username', raw_user.username);
      this.set('email', raw_user.email);
      this.set('first_name', raw_user.first_name);
      this.set('last_name', raw_user.last_name);
    },
  });
});
