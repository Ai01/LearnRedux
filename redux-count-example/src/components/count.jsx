import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import allActions from '../action/index.js';

class Count extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { number, add, subtraction } = this.props;
    return (
      <div>
        <div>{number}</div>
        <button onClick={add}>add</button>
        <button onClick={subtraction}>sub</button>
      </div>
    );
  }
}

Count.protoType = {
  message: PropTypes.string,
  click: PropTypes.func,
};

export default connect(
  state => {
    return { number: state.count.number };
  },
  dispatch => ({ add: () => dispatch(allActions.add), subtraction: () => dispatch(allActions.subtraction) }),
)(Count);
