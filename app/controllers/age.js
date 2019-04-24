import Controller from '@ember/controller';

export default Controller.extend({
  selectedOption: null,
  count: null,

  actions: {
    setSelection: function (selected) {
      this.set('selectedOption', selected)
      console.log(this.get('selectedOption'))
    },
    setup: function () {
      this.set('count', 0);
      console.log(this.get('count'))
    },
    submit: function () {
      // var patient_age = this.store.createRecord('age', {age: this.get('selectedOption')});
      console.log(this.get('selectedOption'))
    }
  },


  });
