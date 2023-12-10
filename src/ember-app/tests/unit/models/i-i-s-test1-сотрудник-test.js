import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test1-сотрудник', 'Unit | Model | i-i-s-test1-сотрудник', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-test1-заказ',
    'model:i-i-s-test1-контрагент',
    'model:i-i-s-test1-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
