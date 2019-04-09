import Component from '@ember/component';
import Ember from 'ember';


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
    submit: function(){
      console.log(this.get('selectedOption'))
      // code to save or sendAction
      // e.g. let selectedOption = this.get('selectedOption')
      // this.sendAction('submit', selectedOption)
    }
  }
});
