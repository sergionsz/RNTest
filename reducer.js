const homeInitialState = { photoPath: '', currentPosition: {} };

/**
 * Redux reducer for home
 * @param  {object} state=homeInitialState    Original state, before changes
 * @param  {object} action          Action with type and piece of thestate to change
 * @return {object}                 The modified state
 */
function home(state = homeInitialState, action) {
  switch (action.type) {
    case 'UPDATE_POSITION':
      return Object.assign({}, state, { currentPosition: action.position });
    case 'UPDATE_PHOTO':
      return Object.assign({}, state, { photoPath: action.photoPath });
    default:
      return state;
  }
}

export default home;
