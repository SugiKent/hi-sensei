import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Questions from './containers/Questions';
import QuestionShow from './containers/QuestionShow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Switch>
            <Route path='/questions' component={Questions} />
            <Route
              path="/question/:id"
              render={
                ({match}) => <QuestionShow questionId={match.params.id} />
              }
            />
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;
