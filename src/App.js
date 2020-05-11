import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class App extends Comment {
  render(){
    const { children } = this.props;
    return children
  }
}
export default withRouter(App);
