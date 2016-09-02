import test from 'tape';
import { home } from '../reducer';

const initialState = { photoPath: '', currentPosition: {} };

test('Home reducer', assert => {
  /**
   * Assert that, without a blank action, the same state get's returned
   */
  const initActual = home(undefined, {});
  const initExpected = initialState;
  assert.deepEqual(initActual, initExpected,
    'Should return initial state without action');
  assert.end();

  /**
   * Assert that the position get's updated
   */
  const position = { coords: {
    latitude: 4.624335,
    longitude: -74.063644,
  } };
  const updatePosAction = {
    type: 'UPDATE_POSITION',
    position,
  };
  const updatePosActual = home(initialState, updatePosAction);
  const updatePosExpected = { photoPath: '', currentPosition: position };
  assert.deepEqual(updatePosActual, updatePosExpected,
  'Should update with a new location');

  /**
   * Assert that the photo path get's updated
   */
  const photoPath = 'media://photos/a_photo.jpg';
  const updatePhotoAction = {
    type: 'UPDATE_PHOTO',
    photoPath,
  };
  const updatePhotoActual = home(updatePosExpected, updatePhotoAction);
  const updatePhotoExpected = { photoPath, currentPosition: position };
  assert.deepEqual(updatePhotoActual, updatePhotoExpected,
  'Should add a path for a photo');
});
