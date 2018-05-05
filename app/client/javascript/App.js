import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Questions from './containers/Questions';
import QuestionEdit from './containers/QuestionEdit';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Switch>
            <Route path='/questions' component={Questions} />
            <Route
              path="/question/:id/edit"
              render={
                ({match}) => <QuestionEdit questionId={match.params.id} />
              }
            />
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;
