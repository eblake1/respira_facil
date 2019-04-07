import DS from 'ember-data';

export default DS.Model.extend({
  age: DS.attr('number'),
  cough: DS.attr('number', {defaultValue: 0}),
  chestPain: DS.attr('number', {defaultValue: 0}),
  sputum: DS.attr('number', {defaultValue: 0}),
  chills: DS.attr('number', {defaultValue: 0}),
  breathShort: DS.attr('number', {defaultValue: 0}),
  confusion: DS.attr('number', {defaultValue: 0}),
  PneumoniaShot: DS.attr('number', {defaultValue: 0}),
  flu:DS.attr('number', {defaultValue: 0}),
  heartRate: DS.attr('number', {defaultValue: 0}),
  respRate: DS.attr('number', {defaultValue: 0}),
  oxiSat: DS.attr('number', {defaultValue: 0}),
  bloodPressure: DS.attr('number', {defaultValue: 0}),
  temperature :DS.attr('number', {defaultValue: 0}),
  medication :DS.attr('string'),
  asthma: DS.attr('string'),
  pain: DS.attr('string'),
  organDysfun: DS.attr('boolean'),
  preexisting: DS.attr('boolean'),
  score: DS.attr('number', {defaultValue: 0})

});
