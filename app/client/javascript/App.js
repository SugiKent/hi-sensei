import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Questions from './containers/Questions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Switch>
            <Route path='/questions' component={Questions} />
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;
