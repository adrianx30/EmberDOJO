import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr(),
    clasification: DS.attr(),
    category: DS.attr(),
    image: DS.attr()
});
