import React, { Component } from 'react';

import { getToken } from '../../services/api'

class Home extends Component {
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

  toLogin(){
    this.props.history.push({ pathname: '/login' });
  }

  render() {
    return (
      <div>这是homess

        <div onClick={()=>{this.toLogin()}}>点击跳转</div>
      </div>
      
    );
  }
}

export default Home;
