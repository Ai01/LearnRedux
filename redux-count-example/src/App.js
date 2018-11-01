import React, { Component } from 'react';
import Count from './components/count';
import Input from './components/input';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Count/>
        </div>
        <div style={{ marginTop: 10 }} >
          <span>redux promise测试</span>
          <Input/>
        </div>
      </div>
    );
  }
}

export default App;
