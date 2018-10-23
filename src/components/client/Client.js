import React, { Component } from 'react';
import Header from './Header/MainMenu';
import Footer from './Footer/MainFooter';
import Routes from '../../_routes/routes';

export default class Client extends Component {
  render() {
    return (
      <React.Fragment>
          <Header/>
            <Routes/>
          <Footer/>
      </React.Fragment>
    )
  }
}
