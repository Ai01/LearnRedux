// 不使用异步中间件来实现异步的action。用来探究异步中间件的价值
import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import allActions from '../action';

class AsyncApi {
  static getFieldValue() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve(Math.floor(Math.random() * 100));
      }, 1000);
    });
    return promise;
  }
}

class App extends React.Component {
  render() {
    const { field, isWaiting } = this.props.input || {};
    return (
      <div>
        <input value={field} />
        <button disabled={isWaiting} onClick={this.props.update}>
          Fetch
        </button>
        {isWaiting && <div>Waiting...</div>}
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  field: PropTypes.any,
  isWaiting: PropTypes.bool,
};

const ConnectedApp = connect(
  state => {
    return { ...state };
  },
  dispatch => {
    return {
      update: () => {
        dispatch({
          type: allActions.staredUpdate.type,
        });
        AsyncApi.getFieldValue().then(result => {
          dispatch({
            type: allActions.updated.type,
            payload: result,
          });
        });
      },
    };
  },
)(App);

export default ConnectedApp;
