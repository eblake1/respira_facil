import Component from '@ember/component';
import Ember from 'ember';
import EmberObject from '@ember/object';
store: Ember.inject.service();

export default Ember.Component.extend({
  selectedOption: null,
  count: null,

  actions: {
    setSelection: function(selected) {
      this.set('selectedOption', selected)
      console.log(this.get('selectedOption'))
    },
    setup: function () {
      this.set('count', 0);
      console.log(this.get('count'))
    },
    tick: function () {
      this.set('count', parseInt(this.get('count'), 10) + 1);
      console.log(this.get('count'))
    },
    submit: function(){
      console.log(this.get('selectedOption'))
      // code to save or sendAction
      // e.g. let selectedOption = this.get('selectedOption')
      // this.sendAction('submit', selectedOption)
    }
  }
});
