import Component from '@ember/component';
import Ember from 'ember';


export default Ember.Component.extend({
  selectedOption: null,
  actions: {
    setSelection: function(selected) {
      this.set('selectedOption', selected)
      console.log(this.get('selectedOption'))
    },
    submit: function(){
      console.log(this.get('selectedOption'))
      // code to save or sendAction
      // e.g. let selectedOption = this.get('selectedOption')
      // this.sendAction('submit', selectedOption)
    }
  }
});
