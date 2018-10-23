import React, { Component } from 'react';
import { connect } from 'react-redux';
import { request, requestAll } from '../../../_actions/act_signup';
import FormSignUp from './FormSignUp';

class ContainerSignUp extends Component {

  componentDidMount(){
    this.props.onRequestAll();
  }

  onSubmit = (payload) => {
    this.props.onRequest(payload);
  }
  
  render() {
    return (
      <div className="container">
        <FormSignUp 
          onSubmit={this.onSubmit}
          allUsers = {this.props.signup}
          messageAlert={this.props.signup}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  signup: state.signup
})

const mapDispatchToProps = dispatch => ({
  onRequest: (payload) => dispatch(request(payload)),
  onRequestAll: () => dispatch(requestAll()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContainerSignUp)
