import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class RefreshLogin extends Component {
    
  render() {
    window.location.reload();
    return (
      <div>
        {/* {localStorage.removeItem('loginAdmin')} */}
        <Redirect to="/admin"/>
      </div>
    )
  }
}
