import React, { Component } from 'react';
import { connect } from 'react-redux';

import { add, remove } from './useMiniRedux';

class App extends Component {
  render() {
    return (
      <div>
        <p>
          初始值为
          {this.props.num}
        </p>
        <button onClick={this.props.add}>Add</button>
        <button onClick={this.props.remove}>Remove</button>
      </div>
    );
  }
}

App = connect(state => ({num: state}), {add, remove})(App);

export default App;
