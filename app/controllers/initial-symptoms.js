import Controller from '@ember/controller';
store: Ember.inject.service();

export default Controller.extend({
  count: 0,

actions: {
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
    setup: function () {
      this.set('count', 0);
      console.log(this.get('count'))
    },
    saveCount: function() {
      var store = this.get('store');
      this.store.findRecord('patient', 1).then(function() {
        this.set('initial_symptoms', 'count');
      });
      },
    killCounter: function () {
      Ember.run.cancel(this._counter);
    }.on('willDestroyElement')
  }
});
