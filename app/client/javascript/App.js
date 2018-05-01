import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Ranking from './containers/Ranking';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Switch>
            <Route path='/questions' component={Ranking}  />
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;
