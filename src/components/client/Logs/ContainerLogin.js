import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  Redirect } from 'react-router-dom';
import { requestLogin } from '../../../_actions/act_login';
import FormLogin from './FormLogin';
export class ContainerLogin extends Component {

    onSubmit = (payload) => {
        this.props.onLogin(payload);
    }

  render() {
    return (
        <React.Fragment>
            {
                (this.props.login.successlogin || localStorage.getItem('login')) 
                && <Redirect to={'/login'}/>
            }
            <FormLogin onSubmit={this.onSubmit} 
                error={this.props.login.error}
                success={this.props.login.successlogin}
            />
        </React.Fragment> 
    )
  }
}

const mapStateToProps = (state) => ({
    login: state.login,
})

const mapDispatchToProps = dispatch => ({
    onLogin: (payload) => dispatch(requestLogin(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContainerLogin)
