import React, { Component } from 'react';
import Validator from 'validatorjs';
import './form.css';
import ErrorValidate from './ErrorValidate';
import MessageAlert from './MessageAlert';
import ShowAvatar from './ShowAvatar';
export default class FormSignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            fields: {
                fullname: '', username: '', email: '', 
                password: '', passwordagain: '', telephone: '', 
                address: '', avatar: '', gender: '', accepted: '',
                emailExist: ''
            },
            errors: {},
            isValid: '',
            loading: false, 
            message: '',
            temporary_avatar: null
        }
    }
    onReset = () => {
        this.setState({
            fields: {
                fullname: '', username: '', email: '', 
                password: '', passwordagain: '', telephone: '', 
                address: '', avatar: '', gender: '', accepted: ''
            },
            errors: {},
            isValid: '',
            loading: false, 
            message: '',
            temporary_avatar: null
        })
    }
    checkExist = (email, username) => {
        if(this.props.allUsers.length > 0 ) {
            let checkExist = '';
            this.props.allUsers.forEach(element => {
                if(element.email === email || element.username === username){
                   checkExist = {
                        emailExist: element.email,
                        usernameExist: element.username
                   }
                }
            });
            return checkExist;
        }
    }
    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let fields = this.state.fields;
        fields[name] = value;
        let checkExist = this.checkExist(fields['email'],fields['username']);
        fields['emailexist'] = checkExist.emailExist;
        fields['usernameexist'] = checkExist.usernameExist;

        let rules = {
            fullname: 'required|min:3',
            username: 'required|different:usernameexist',
            email: ['required','email','different:emailexist'],
            password: 'required|min:1',
            passwordagain: 'required|same:password',
            telephone: 'numeric|min:10',
            accepted: 'accepted'
        }
        Validator.useLang('en');
        let customs = {
            "different.email": " The :attribute already exists!",
            "different.username": " the :attribute already exists!"
        }
        let validation = new Validator(fields, rules, customs );
        this.setState({
            fields: fields,
            isValid: validation.passes(),
            errors : 
            {
                errFullname : validation.errors.get('fullname').toString(),
                errUsername: validation.errors.get('username').toString(),
                errEmail: validation.errors.get('email').toString(),
                errPassword: validation.errors.get('password').toString(),
                errPasswordagain: validation.errors.get('passwordagain').toString(),
                errTelephone: validation.errors.get('telephone').toString(),
                errAccepted: validation.errors.get('accepted').toString(),
            }
        });
        
    }
    handleChangeFile = (e) => {
        let fields = this.state.fields;
        if(e.target.files){
            fields['avatar'] = e.target.files[0];
            if(this.state.fields.avatar){
                this.setState({
                    temporary_avatar: URL.createObjectURL(this.state.fields.avatar)
                });
            }
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({loading: true});
        this.props.onSubmit(this.state);
    }
    
  render() {
    console.log(this.state);
    let haveError = " border-danger";
    let notError = "";     
    let { errFullname, errUsername, errEmail, errPassword, 
    errPasswordagain, errTelephone, errAddress, errAccepted} = this.state.errors;
    let { fullname, username, email, telephone, address, password,passwordagain} = this.state.fields;
    return (
        <div className="row mt-3">
            
            <form onSubmit={this.handleSubmit} className="col-md-6 mx-auto border">
                <div className="header text-center my-4">
                    <h2>Sign Up</h2>
                </div>
                <div className="form-group col-md">
                  <label htmlFor="username"><strong>Username</strong> </label> 
                  <span className="text-danger">{errUsername ? errUsername : notError}</span>
                  <input type="text" className={`form-control ${errUsername ? haveError : notError}`} placeholder="username"
                    name="username" onChange={this.handleChange} value={username} />
                </div>
                <div className="form-group col-md">
                  <label htmlFor="fullname"><strong>Fullname</strong></label>
                  <span className="text-danger">{errFullname ? errFullname : notError}</span>
                  <input type="text" className={`form-control ${errFullname ? haveError : notError}`} placeholder="full name"
                    name="fullname" onChange={this.handleChange} value={fullname} />
                </div>
                <div className="form-group col-md">
                  <label htmlFor="email"><strong>Email</strong></label>
                  <span className="text-danger">{errEmail ? errEmail : notError}</span>
                  <input type="email" className={`form-control ${errEmail ? haveError : notError}`} placeholder="email"
                    name="email" onChange={this.handleChange} value={email} />
                </div>
                <div className="form-group col-md">
                  <label htmlFor="password"><strong>Password</strong></label>
                  <span className="text-danger">{errPassword ? errPassword : notError}</span>
                  <input type="password" className={`form-control ${errPassword ? haveError : notError}`} placeholder="password"
                    name="password" onChange={this.handleChange} value={password} />
                </div>
                <div className="form-group col-md">
                  <label htmlFor="password again"><strong>Password Again</strong></label>
                  <span className="text-danger">{errPasswordagain ? errPasswordagain : notError}</span>
                  <input type="password" className={`form-control ${errPasswordagain ? haveError : notError}`}  placeholder="password again"
                    name="passwordagain" onChange={this.handleChange} value={passwordagain} />
                </div>
                <div className="form-group col-md">
                  <label htmlFor="telephone"><strong>Telephone</strong> </label>
                  <span className="text-danger">{errTelephone ? errTelephone : notError}</span>
                  <input type="text" className={`form-control ${errTelephone ? haveError : notError}`} name="telephone" placeholder="telephone"
                    onChange={this.handleChange} value={telephone} />
                </div>
                <div className="form-group col-md">
                  <label htmlFor="address"><strong>Address</strong></label>
                  <span className="text-warning">{errAddress ? errAddress : notError}</span>
                  <input type="text" className={`form-control ${errAddress ? haveError : notError}`} name="address" placeholder="address"
                    onChange={this.handleChange} value={address} />
                </div>
                <div className="form-group col-md">
                    <label htmlFor="gender"><strong>Gender</strong></label> <br/>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="customRadio" 
                            name="gender" onChange={this.handleChange} value="male"/>
                        <label className="custom-control-label" htmlFor="customRadio">female</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="customRadio2" 
                            name="gender" onChange={this.handleChange} value="female"/>
                        <label className="custom-control-label" htmlFor="customRadio2">male</label>
                    </div> 
                    <br/><span className="text-warning">{errUsername ? errUsername : notError}</span>
                </div>
                <div className="form-group row col-md ">
                    <div className="col-md ">
                        <label htmlFor="avatar"><strong>Avatar</strong></label> <br/>
                        <input type="file" name="avatar" className="inputfile" id="embedpollfileinput" 
                        onChange={this.handleChangeFile}/>
                        <label htmlFor="embedpollfileinput" className="btn bg-warning">
                            <i className="fa fa-upload"> Upload Avatar </i> 
                        </label>
                    </div>
                    <div className="col-md ">
                        <ShowAvatar showAvatar={this.state.temporary_avatar} />
                    </div>
                </div>
                <div className="form-group col-md">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck" 
                            name="accepted" onChange={this.handleChange} />
                        <label className="custom-control-label" htmlFor="customCheck">I agree to the Terms and Conditions</label>
                        <span className="text-danger">{errAccepted ? errAccepted : notError}</span>
                    </div>
                </div>

                {(this.state.isValid === '' || (this.state.isValid !== '' && !this.state.isValid)  ) ? 
                    <div className="form-group col-md">
                        <button type="button" className="btn bg-warning" data-toggle="modal" data-target="#myModal">
                             Submit
                        </button>
                        <ErrorValidate errors={this.state.errors}/>
                    </div>  :
                    <div className="form-group col-md">
                        <button type="submit" className="btn bg-primary">Submit</button>
                    </div>
                }
            </form>
            {   
                this.state.loading ? 
                <MessageAlert messageAlert={this.props.messageAlert} onReset={this.onReset}/> : 
                ''
            }    
        </div>
    )
  }
  
}
