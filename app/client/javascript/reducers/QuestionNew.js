const initialState = {
  error: false
};

// actions/Questionsのdispatch(startRequest(category))などで呼び出される
export default (state = initialState, action) => {
  switch(action.type) {
    case 'START_REQUEST':
      return {
        error: false
      };

    case 'RECEIVE_DATA':
      return action.payload.error
      ? { ...state, error: true }
      : {
        ...state,
      };

    default:
      return state;
  }
}
