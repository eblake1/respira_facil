import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | vital-signs', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:vital-signs');
    assert.ok(controller);
  });
});
