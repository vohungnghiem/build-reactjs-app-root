import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  Redirect } from 'react-router-dom';
import { request } from '../../../_actions/act_login';
import FormLoginAdmin from './FormLoginAdmin';
export class ContainerLogin extends Component {

    onSubmit = (payload) => {
        this.props.onLogin(payload);
    }

  render() {
    return (
        <React.Fragment>
            {
                (this.props.login.successlogin || localStorage.getItem('loginAdmin')) 
                && <Redirect to="/admin/refreshlogin"/>
            }
            <FormLoginAdmin onSubmit={this.onSubmit} error={this.props.login.error}/>
        </React.Fragment> 
    )
  }
}

const mapStateToProps = (state) => ({
    login: state.login,
})

const mapDispatchToProps = dispatch => ({
    onLogin: (payload) => dispatch(request(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContainerLogin)
