import Ember from 'ember';

export default Ember.View.extend({
  //TODO: This should be done using {{ember-knob }}
  // helper in template...
  didInsertElement: function() {

    this.$('.mixer-knob')
    .attr('data-min', '-100')
    .attr('data-max', '100')
    .attr('data-angleOffset', '-180')
    .attr('data-width', '75')
    .attr('data-cursor', true)
    .attr('data-fgColor', '#333')
    .attr('data-bgColor', '#aaa')
    .attr('data-displayInput', false)
    .knob();

    var volume = this.get('controller.masterVolume');
    var _this = this;
    this.$('.volume-slider').slider({
      orientation: 'vertical',
      range: 'min',
      min: 0,
      max: 120,
      value: volume,
      stop: function(evt, ui) {
        _this.set('controller.masterVolume', ui.value);
      }
    });
  }
});
