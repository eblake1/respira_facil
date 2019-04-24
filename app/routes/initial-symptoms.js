import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      initial_symptoms: null,
    }]
  }


});
