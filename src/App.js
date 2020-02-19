import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home'
import List from './List/List'


class App extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        hello
        <Route exact path='/' component={Home} />
        <Route exact path='/list' component={List} />
      </div>
    )
  }

}

export default App;
