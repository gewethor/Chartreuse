import { moduleFor, test } from 'ember-qunit';

moduleFor('route:newfeature', 'Unit | Route | newfeature', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('computedField test', function(assert) {
  var route = this.subject(); 
  var newfield = controller.get('newfield'); 
  controller.set('newfield', 'test'); 
  assert.equal(controller.get('computedField'), 'test/');
});
