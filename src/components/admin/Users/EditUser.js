import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestEditUser, requestOne } from '../../../_actions/act-user';
import { apiGetAllUser, apiGetOneUser } from '../../../_apis/api_user';
import Validator from 'validatorjs';
export class EditUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            allusers: '',
            fields: {fullname: '', username: '', email: '', telephone: '', address: '', avatar: '', gender: '',emailExist: ''},
            errors: {},
            isValid: '',
            loading: false, 
            message: '',
            temporary_avatar: null
        }
    }
    componentDidMount(){
        var self = this;
        apiGetAllUser().then(response=>{
            self.setState({
                allusers: response,
            });
        })
        apiGetOneUser(this.props.match.params.id).then(response =>{
            self.setState({
                fields: response
            })
        })
    }

    
    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let fields = this.state.fields;
        fields[name] = value;
        let rules = {
            fullname: 'required|min:3',
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
                errTelephone: validation.errors.get('telephone').toString(),
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
        this.props.onEdit({
            fields: this.state.fields,
            temporary_avatar: this.state.temporary_avatar,
            id: this.props.match.params.id
        });
    }
    onClose = () => {
        this.props.history.push('/admin/user')
    }
    
  render() {
    let haveError = " border-danger";
    let notError = "";     
    let { errFullname, errUsername, errEmail,errTelephone, errAddress} = this.state.errors;
    let { fullname, username, email, telephone, address, gender, avatar} = this.state.fields;
    return (
        <div className="row mt-3">
            <form onSubmit={this.handleSubmit} className="col-md-6 mx-auto border">
                <div className="header text-center my-4">
                    <h2>Edit User</h2>
                </div>
                <div className="form-group col-md">
                  <label htmlFor="username"><strong>Username</strong> </label> 
                  <span className="text-danger">{errUsername ? errUsername : notError}</span>
                  <input type="text" className={`form-control ${errUsername ? haveError : notError}`} placeholder="username"
                    name="username" onChange={this.handleChange} value={username} disabled />
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
                    name="email" onChange={this.handleChange} value={email} disabled />
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
                    <label htmlFor="gender"><strong>Gender </strong></label> <br/>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="customRadio" 
                            name="gender" onChange={this.handleChange} value="male" checked={(gender==='male')?'checked': ''}/>
                        <label className="custom-control-label" htmlFor="customRadio">male</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" className="custom-control-input" id="customRadio2" 
                            name="gender" onChange={this.handleChange} value="female" checked={(gender==='female')?'checked': ''}/>
                        <label className="custom-control-label" htmlFor="customRadio2">female</label>
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
                    {!this.state.temporary_avatar? 
                        <div className="col-md ">
                            <img src={avatar} alt={username}/>
                        </div>:
                        null
                    }
                    
                    <div className="col-md">
                        <img src={this.state.temporary_avatar} alt={username}/>
                    </div>
                </div>
                <div className="form-group col-md">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck" 
                            name="accepted" onChange={this.handleChange} />
                        <label className="custom-control-label" htmlFor="customCheck">I agree</label>

                    </div>
                </div>

                {(this.state.isValid === '' || (this.state.isValid !== '' && !this.state.isValid)  ) ? 
                    <div className="form-group col-md">
                        <button type="button" className="btn bg-danger" disabled>
                             Submit
                        </button>
                    </div>  :
                    <div className="form-group col-md">
                        <button type="submit" className="btn bg-primary">Submit</button>
                    </div>
                }
                <br/>
                {
                    this.props.user.success ? 
                    <div className="alert alert-success alert-dismissible">
                        <button type="button" onClick={this.onClose} className="close" data-dismiss="alert">&times;</button>
                        <strong>{this.props.user.success}</strong> click close (X) to go back
                    </div>: ''
                }
                {
                    this.props.user.error ? 
                    <div className="alert alert-danger alert-dismissible">
                        <button type="button"  className="close" data-dismiss="alert">&times;</button>
                        <strong>{this.props.user.error}</strong> check data and submit again!
                    </div>: ''
                }
            </form>
            
        </div>
    )
  }
  
}
const mapStateToProps = (state) => ({
    user: state.user,
  })
  
const mapDispatchToProps = dispatch => ({
    onOne: (payload) => dispatch(requestOne(payload)),
    onEdit: (payload) => dispatch(requestEditUser(payload)),
})
export default connect(mapStateToProps, mapDispatchToProps)(EditUser)