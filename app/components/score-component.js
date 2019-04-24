import Component from '@ember/component';
import Ember from 'ember';

export default Ember.Component.extend({
  count: 0,
    actions: {
      setup: function () {
        this.set('count', 0);
        console.log(this.get('count'))
      },
      addOne: function () {
        this.set('count', parseFloat(this.get('count'), 10) + 1);
        console.log(this.get('count'))
      },
      addOneandHalf: function () {
        this.set('count', parseFloat(this.get('count'), 10) + 1.5);
        console.log(this.get('count'))
      },
      addTwo: function () {
        this.set('count', parseFloat(this.get('count'), 10) + 2);
        console.log(this.get('count'))
      },
      minusOne: function () {
        this.set('count', parseFloat(this.get('count'), 10) - 1);
        console.log(this.get('count'))
      },
      displayScore: function () {
        console.log(this.get('count'))
        return this.get('count');
      },
      tick: function () {
        this.set('count', parseInt(this.get('count'), 10) + 1);
        console.log(this.get('count'))
      },
      click: function () {
        this.sendAction();

      },
      getResult: function() {
          console.log("Tell patient to monitor symptoms and return in 3 days if symptoms persist");
      }
  }
});
