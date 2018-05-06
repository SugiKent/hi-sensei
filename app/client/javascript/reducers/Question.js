const getQuestions = response => {
  const questions = [];
  const itemLength = response.count;
  for (let index = 0; index < itemLength; index++) {
    const item = response.questions[index + ''];

    questions.push({
      id: item.id,
      title: item.title,
      solved: item.solved,
    })
  }

  return questions;
};

const initialState = {
  questions: undefined,
  error: false
};

// actions/Questionsのdispatch(startRequest(category))などで呼び出される
export default (state = initialState, action) => {
  switch(action.type) {
    case 'START_REQUEST':
      return {
        questions: undefined,
        error: false
      };

    case 'RECEIVE_DATA':
      return action.payload.error
      ? { ...state, error: true }
      : {
        ...state,
        // responseはactionsのreceiveDataメソッドから渡される
        // さらに、このファイルのgetRankingメソッドでresponseのjsonを整形する
        questions: getQuestions(action.payload.response)
      };

    default:
      return state;
  }
}
