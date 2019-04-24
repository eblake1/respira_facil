import Controller from '@ember/controller';

export default Controller.extend({
  positionalParams: ['initial-score'],

  count: 0,
  actions: {
    myheartRateDidChange: function () {
      if (document.getElementById('heartRate').value> 120) {
        this.set('count', parseFloat(this.get('count'), 10) + 1);
        console.log(this.get('count'))
      }
    },

    myrespRateDidChange: function () {
      if (document.getElementById('respRate').value >= 40) {
        this.set('count', parseFloat(this.get('count'), 10) + 2);
        console.log(this.get('count'))
      }
    },

    myoxiSatDidChange: function () {
      if (document.getElementById('oxiSat').value < 90) {
        this.set('count', parseFloat(this.get('count'), 10) + 1);
        console.log(this.get('count'))
      }
    },

    mybloodPressDidChange: function () {
      if (document.getElementById('bloodPressure').value < 70) {
        this.set('count', parseFloat(this.get('count'), 10) + 2);
        console.log(this.get('count'))
      } else if (document.getElementById('bloodPressure') < 60) {
        this.set('count', parseFloat(this.get('count'), 10) + 3);
        console.log(this.get('count'))
      } else if (document.getElementById('bloodPressure') > 80) {
        this.set('count', parseFloat(this.get('count'), 10) + 2);
        console.log(this.get('count'))
      }
    },

    mytempDidChange: function () {
      if (document.getElementById('temperature') < 35 || temperature > 39.9) {
        this.set('count', parseFloat(this.get('count'), 10) + 1.5);
        console.log(this.get('count'))
      }
    }

  }
});
