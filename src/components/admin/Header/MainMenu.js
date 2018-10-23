import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
//import './custom.css';
import Menus from './Menus';
import { Redirect } from 'react-router-dom';
class MainMenu extends Component {
    constructor(){
        super();
        this.state = {
            account: ""
        }
    }
    componentDidMount(){
        this.apiAcount(localStorage.getItem('loginAdmin'));
    }
    apiAcount(token){
        var self = this;
        axios.get('https://5b31e1e07ad3350014b4349a.mockapi.io/api/users')
        .then(function (response) {
            const abc = _.find(response.data, {'token':token, });
            self.setState({account: abc});
        })
    }
  render() {
    return (
        <React.Fragment>
            {
                (localStorage.getItem('loginAdmin') ) 
                ?<Menus account={this.state.account} />
                :<Redirect to="/admin/login"/>
            }
        </React.Fragment>
    )
  }
}


export default MainMenu;