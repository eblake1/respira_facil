import Controller from '@ember/controller';
store: Ember.inject.service();

export default Controller.extend({
  ageController: Ember.inject.controller('age'),
  age: Ember.computed.reads('ageController.selectedOption'),
  count: 0,
  result: null,

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

    myheartRateDidChange: function () {
      if (this.get('age') === "infant") {
        if (document.getElementById('heartRate').value > 150) {
          this.set('count', parseFloat(this.get('count'), 10) + 1);
          console.log(this.get('count'))
        }
      } else if (this.get('age') === "young children") {
        if (document.getElementById('heartRate').value > 120) {
          this.set('count', parseFloat(this.get('count'), 10) + 1);
          console.log(this.get('count'))
        }
      } else if (this.get('age') === "adults") {
        if (document.getElementById('heartRate').value > 125) {
          this.set('count', parseFloat(this.get('count'), 10) + 1);
          console.log(this.get('count'))
        }
      } else {
        if ((document.getElementById('heartRate').value> 100) || (document.getElementById('heartRate').value< 60)) {
          this.set('count', parseFloat(this.get('count'), 10) + 1);
          console.log(this.get('count'))
      }
      }
    },

    myrespRateDidChange: function () {
      if (this.get('age') === "infant") {
        if (document.getElementById('respRate').value >= 50) {
          this.set('count', parseFloat(this.get('count'), 10) + 2);
          console.log(this.get('count'))
        }
      } else if (this.get('age') === "young children") {
        if (document.getElementById('respRate').value >= 40) {
          this.set('count', parseFloat(this.get('count'), 10) + 2);
          console.log(this.get('count'))
        }
      } else {
        if (document.getElementById('respRate').value >= 30) {
          this.set('count', parseFloat(this.get('count'), 10) + 2);
          console.log(this.get('count'))
        }
      }
    },

    myoxiSatDidChange: function () {
        if (document.getElementById('oxiSat').value < 90) {
        this.set('count', parseFloat(this.get('count'), 10) + 1);
        console.log(this.get('count'))
      }
    },

    mysysbloodPressDidChange: function () {
      if (this.get('age') === "infant") {
        if (document.getElementById('sysBloodPressure').value < 70) {
          this.set('count', parseFloat(this.get('count'), 10) + 2);
          console.log(this.get('count'))
        }
      } else if (this.get('age') === "young children") {
          if (document.getElementById('sysBloodPressure').value < 75) {
            this.set('count', parseFloat(this.get('count'), 10) + 2);
            console.log(this.get('count'))
          }
        } else {
            if (document.getElementById('sysBloodPressure').value < 90) {
              this.set('count', parseFloat(this.get('count'), 10) + 2);
              console.log(this.get('count'))
          }
        }
      },

    mydiabloodPressDidChange: function () {
      if (this.get('age') === "infant") {
        if (document.getElementById('diaBloodPressure').value < 40) {
          this.set('count', parseFloat(this.get('count'), 10) + 3);
          console.log(this.get('count'))
        } else if (document.getElementById('diaBloodPressure').value > 60) {
          this.set('count', parseFloat(this.get('count'), 10) + 2);
          console.log(this.get('count'))
        }
      } else if (this.get('age') === "young children") {
        if (document.getElementById('diaBloodPressure').value < 60) {
          this.set('count', parseFloat(this.get('count'), 10) + 3);
          console.log(this.get('count'))
        } else if (document.getElementById('diaBloodPressure').value > 80) {
          this.set('count', parseFloat(this.get('count'), 10) + 2);
          console.log(this.get('count'))
        }
      } else {
        if (document.getElementById('diaBloodPressure').value < 60) {
          this.set('count', parseFloat(this.get('count'), 10) + 3);
          console.log(this.get('count'))
        } else if (document.getElementById('diaBloodPressure').value >= 90) {
          this.set('count', parseFloat(this.get('count'), 10) + 2);
          console.log(this.get('count'))
        }
      }
    },

    mytempDidChange: function () {
      console.log(this.get('age'));
      if (this.get('age') === "infant" || this.get('age') === "elderly") {
        if (document.getElementById('temperature').value > 38) {
          this.set('count', parseFloat(this.get('count'), 10) + 1.5);
          console.log(this.get('count'))
        }
      }else {
        if (document.getElementById('temperature').value < 35 || document.getElementById('temperature').value > 39.9){
          this.set('count', parseFloat(this.get('count'), 10) + 1.5);
          console.log(this.get('count'))
        }
      }
    },

    getResult: function() {
      if (this.get('age') === "infant" || this.get('age') === "elderly") {
        if (this.get('count') < 5) {
          this.set('result', "Tell patient to monitor symptoms and return in 2 days if symptoms persist");
          console.log(this.get('result'));
        }
        else {
          this.set('result', "Advise patient to go to hospital immediately");
          console.log(this.get('result'));
        }
      }
      else {
        if (this.get('count') < 5) {
          this.set('result', "Tell patient to monitor symptoms and return in 2 days if symptoms persist");
          console.log(this.get('result'));
        } else if (this.get('count') < 9) {
          this.set('result', "Give patient medication and tell them to return in 3 days if symptoms persist");
          console.log(this.get('result'));
        } else {
          this.set('result', "Advise patient to go to hospital immediately");
          console.log(this.get('result'));
        }
      }
    }

  }
});
