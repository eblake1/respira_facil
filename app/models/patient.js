import DS from 'ember-data';

export default DS.Model.extend({
  age: DS.attr(),
  cough: DS.attr(),
  chestPain: DS.attr(),
  sputum: DS.attr(),
  chills: DS.attr(),
  breathShort: DS.attr(),
  confusion: DS.attr(),
  PneumoniaShot: DS.attr(),
  flu:DS.attr(),
  heartRate: DS.attr(),
  respRate: DS.attr(),
  oxiSat: DS.attr(),
  bloodPressure: DS.attr(),
  temperature :DS.attr(),
  medication :DS.attr(),
  asthma: DS.attr(),
  pain: DS.attr(),
  organDysfun: DS.attr(),
  preexisting: DS.attr(),
  score: DS.attr()

});
