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

  render() {
    return (
      <div>这是home</div>
    );
  }
}

export default Home;
