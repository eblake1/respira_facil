import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | homepage', function(hooks) {
  setupApplicationTest(hooks);

  // test('Should link to symptoms page.', async function (assert){});
  //
  // test('Should link to public health information page.', async function (assert){});
  //
  // test('Should link to about page.', async function (assert){});
  //
  // test('Should link to contact information.', async function (assert){});

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });
});
