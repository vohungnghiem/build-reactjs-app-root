import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'font-awesome/css/font-awesome.css';

import Client from './components/client/Client';
import Admin from './components/admin/Admin';

class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <React.Fragment>
        {
          (location.pathname.substr(0,6) === "/admin") 
          ? <Admin/> : <Client/>
        }
      </React.Fragment>
    )
  }
}
export default withRouter(App);