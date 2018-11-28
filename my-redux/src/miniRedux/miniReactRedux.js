import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from './miniRedux';

// 把store放到context里, 所有的子元素可以直接取到store
export class Provider extends React.Component {
  // 限制数据类型
  static childContextTypes = {
    store: PropTypes.object,
  };
  getChildContext() {
    return { store: this.store };
  }
  constructor(props, context) {
    super(props, context);
    this.store = props.store;
  }
  render() {
    // 返回所有子元素
    return this.props.children;
  }
}

// connect负责链接组件，把redux中的数据放到组件的props中
// 1. 负责接受一个组件，把state里的一些数据放进去，返回一个组件
// 2. 数据变化的时候，能够通知组件

export const connect = (mapStateToProps = state => state, mapDispatchToProps = {}) => WrapComponent => {
  return class ConnectComponent extends React.Component {
    static contextTypes = {
      store: PropTypes.object,
    };
    constructor(props, context) {
      super(props, context);
      this.state = {
        props: {},
      };
    }
    componentDidMount() {
      const { store } = this.context;
      store.subscribe(() => this.update());
      this.update();
    }
    update() {
      // 获取mapStateToProps和mapDispatchToProps 放入this.props里
      const { store } = this.context;
      const stateProps = mapStateToProps(store.getState());
      // 方法不能直接给，因为需要dispatch
      const dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch);
      this.setState({
        props: {
          ...this.state.props,
          ...stateProps,
          ...dispatchProps,
        },
      });
    }
    render() {
      return <WrapComponent {...this.state.props} />;
    }
  };
};
