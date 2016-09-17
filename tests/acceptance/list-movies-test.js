import { test } from 'qunit';
import moduleForAcceptance from 'movies-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list movies');

test('should redirect to spies route', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/movies', 'should redirect automatically');
  });
});

test('should list available movies.', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('.listing').length, 3, 'should see 3 listings');
  });
});

