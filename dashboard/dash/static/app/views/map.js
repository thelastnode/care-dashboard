$(function() {
  "use strict";

  window.Views = window.Views || {};

  window.Views.Map = Backbone.View.extend({
    template: _.template($('#tmpl-map').text()),

    initialize: function() {
      this.$el.html(this.template());

      var widget = this;
      $.getJSON('/data', function(data) {
        widget.render(data);
      });
    },

    render: function(data) {
      var shop = data.shops[0];
      var point = new google.maps.LatLng(parseFloat(shop.latitude), parseFloat(shop.longtitude));

      var map = new google.maps.Map(this.$el.find('.map-canvas')[0], {
        center: point,
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      });

      var info = new google.maps.InfoWindow({
        content: $('<b>').text(shop.name).html(),
      });

      var marker = new google.maps.Marker({
        position: point,
        map: map,
        title: shop.name,
      });

      google.maps.event.addListener(marker, 'click', function() {
        info.open(map, marker);
      });
    },
  });
});
