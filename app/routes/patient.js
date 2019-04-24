import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return [{
      age: null,
      initial_symptoms: null,
      vital_signs: null,
      count: Ember.computed()
    }]
  }
});
