import {connect} from 'react-redux';
import QuestionNew from '../components/questions/QuestionNew';
import * as actions from '../actions/QuestionNew';

// containersのファイルは、配下に多くのcomponentsを抱え、それらの代表として1つの親componentをconnectさせるファイル
// 全てのcomponentでconnectするという冗長性を防ぐ

// Storeが持つ状態(state)をどのようにpropsに混ぜ込むかを決める
// propsはconnectによって'../components/Questions'に渡される
// 引数のstateはただの引数としての名前。第一引数がStoreのstateという決まり
// よって、`state.question.category`のquestionは`reducers/*.js`のファイル名となる。正確には`reducers/index.js`で定義した名前
const mapStateToProps = (state, ownProps) => ({
  error: state.questionEdit.error
});

// Reducerにアクションを通知する関数dispatchをどのようにpropsに混ぜ込むかを決める
const mapDispatchToProps = dispatch => ({
  // onMountとonUpdateはここで初めて定義されている
  // components/Questions.jsで呼び出される
  // componentのファイル内で`actions.fetchRanking(categoryId)`を書いてもいいが、ここで一気に関数を定義してpropsとして渡す。
  toCreate (questionData) {
    dispatch(actions.toCreate(questionData));
  },
});

// ReactのComponentをReduxの流れに乗せる
// StoreやReducerと繋がれるように細工されたComponentが返り値になる
// このQuestionsはcomponents/Questions.jsを指す
export default connect(mapStateToProps, mapDispatchToProps)(QuestionNew);
