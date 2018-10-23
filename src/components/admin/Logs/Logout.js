import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Logout extends Component {
    
  render() {
    window.location.reload();
    return (
      <div>
        {localStorage.removeItem('loginAdmin')}
        <Redirect to="/admin/login"/>
      </div>
    )
  }
}
