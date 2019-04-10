import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  model() {
    return [{
      age: null,
      initial_symptoms: null,
      vital_signs: null,
      additional_conditions: null,
    }]
  }

});
