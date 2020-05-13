import React, { Component } from 'react';

import { getToken } from '../../services/api'

class Login extends Component {
  constructor(props){
    super(props);
    const currentUser = props.currentUser;
    this.state = ({
      
    })
  }

  componentDidMount(){
    // getToken().then((res)=>{
    //   console.log(res);
    // })
  }

  render() {
    return (
      <div>这是login</div>
    );
  }
}

export default Login;
