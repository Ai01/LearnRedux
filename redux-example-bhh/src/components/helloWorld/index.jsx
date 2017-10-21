import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import allActions from '../../action/index.js';

class HelloWorld extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   message: 'hello'
    // }
  }

  // click = () => {
  //   this.setState({
  //     message: this.state.message === 'hello world' ? 'hellow' : 'hello world'
  //   })
  // }

  render() {
    const { message, click } = this.props;
    return (
      <div>
        <div>{message}</div>
        <button onClick={click} >change</button>
      </div>
    );
  }
}

HelloWorld.protoType = {
  message: PropTypes.string,
  click: PropTypes.func,
}

export default connect(
  (state) => {
    console.log(state);
    return { message: state.hello.message }
  },
  (dispatch) => ({ click: () => dispatch(allActions.helloAction) })
)(HelloWorld);