import Controller from '@ember/controller';

export default Controller.extend({
  symptomsController: Ember.inject.controller('initial-symptoms'),
  score: Ember.computed.reads('symptomsController.result')

});
