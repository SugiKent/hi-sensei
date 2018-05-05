const initialState = {
  question: undefined,
  error: false
};

// actions/Questionsのdispatch(startRequest(category))などで呼び出される
export default (state = initialState, action) => {
  switch(action.type) {
    case 'START_REQUEST':
      return {
        question: undefined,
        error: false
      };

    case 'RECEIVE_DATA':
      return action.payload.error
      ? { ...state, error: true }
      : {
        ...state,
        // responseはactionsのreceiveDataメソッドから渡される
        // さらに、このファイルのgetRankingメソッドでresponseのjsonを整形する
        question: action.payload.response.question
      };

    default:
      return state;
  }
}
