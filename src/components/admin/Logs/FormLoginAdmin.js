import React, { Component } from 'react';
export default class FormLoginAdmin extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '', 
            password: '',
            remember: ''
        }
    }

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }
  render() {
    
    let {email , password } = this.state;
    return (
        <div className="row mt-3">
            
            <form onSubmit={this.handleSubmit} className="col-md-6 mx-auto border">
                <div className="header text-center my-4">
                    <h2>LOGIN ADMIN</h2>
                </div>
                <div className="form-group col-md">
                  <label htmlFor="email"><strong>Email</strong></label>
                  <span className="text-danger"></span>
                  <input type="email" className="form-control" placeholder="email"
                    name="email" onChange={this.handleChange} value={email} />
                </div>
                <div className="form-group col-md">
                  <label htmlFor="password"><strong>Password</strong></label>
                  <span className="text-danger"></span>
                  <input type="password" className="form-control" placeholder="password"
                    name="password" onChange={this.handleChange} value={password} />
                </div>
                <div className="form-group col-md">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck" 
                            name="remember" onChange={this.handleChange} />
                        <label className="custom-control-label" htmlFor="customCheck">remember me</label>
                        <span className="text-danger"></span>
                    </div>
                </div>
                <div className="form-group col-md">
                    <button type="submit" className="btn bg-primary">Login</button>
                </div>
                
                {   this.props.error ? 
                    <div className="alert alert-danger">
                        <strong>Not success!</strong> 
                    </div>: ''
                }
            </form>
        </div>
    )
  }
}
