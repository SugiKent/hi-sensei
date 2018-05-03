import {connect} from 'react-redux';
import Questions from '../components/Questions';
import * as actions from '../actions/Question';

// containersのファイルは、配下に多くのcomponentsを抱え、それらの代表として1つの親componentをconnectさせるファイル
// 全てのcomponentでconnectするという冗長性を防ぐ

// Storeが持つ状態(state)をどのようにpropsに混ぜ込むかを決める
// propsはconnectによって'../components/Questions'に渡される
// 引数のstateはただの引数としての名前。第一引数がStoreのstateという決まり
// よって、`state.question.category`のquestionは`reducers/*.js`のファイル名となる
const mapStateToProps = (state, ownProps) => ({
  categoryId: ownProps.categoryId,
  category: state.question.category,
  ranking: state.question.ranking,
  error: state.question.error
});

// Reducerにアクションを通知する関数dispatchをどのようにpropsに混ぜ込むかを決める
const mapDispatchToProps = dispatch => ({
  // onMountとonUpdateはここで初めて定義されている
  // components/Questions.jsで呼び出される
  // componentのファイル内で`actions.fetchRanking(categoryId)`を書いてもいいが、ここで一気に関数を定義してpropsとして渡す。
  onMount (categoryId) {
    dispatch(actions.fetchRanking(categoryId));
  },
  onUpdate (categoryId) {
    dispatch(actions.fetchRanking(categoryId));
  }
});

// ReactのComponentをReduxの流れに乗せる
// StoreやReducerと繋がれるように細工されたComponentが返り値になる
// このQuestionsはcomponents/Questions.jsを指す
export default connect(mapStateToProps, mapDispatchToProps)(Questions);
