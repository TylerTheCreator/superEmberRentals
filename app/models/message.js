import DS from 'ember-data';

export default DS.Model.extend({
  weather: DS.attr(),
  city: DS.attr(),
  news: DS.attr(),
});
