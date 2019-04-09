import Component from '@ember/component';
import Ember from 'ember';

export default Ember.Component.extend({
  count: 0,
  actions: {
    tick: function () {
      this.incrementProperty('count');
      console.log(this.get('count'))
    },
    setup: function () {
      this.set('count', 0);
      console.log(this.get('count'))
    },
    killCounter: function () {
      Ember.run.cancel(this._counter);
    }.on('willDestroyElement')
  }
});
