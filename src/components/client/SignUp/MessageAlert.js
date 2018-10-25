import React, { Component } from 'react';
import $ from 'jquery';
window.jQuery = window.$ = $;

export default class MessageAlert extends Component {
    onReset = () => {
        localStorage.setItem('login',this.props.messageAlert.successstorage.token);
        
        this.props.onReset()
        
    }
    render() {  
    return (
        <div className="overlay" onClick={this.onReset}>
        <div className="container">
        <div className="overlay-content">
            <div className="modal-content mt-5">
                    {/* Modal Header */}
                    <div className="modal-header bg-info">
                        <h4 className="modal-title text-white">Alert</h4>
                        <a href="/" onClick={this.onReset} className=" close btn btn-default"> x </a>
                    </div>
                    {/* Modal body */}
                    <div className="modal-body">
                    <div className="text-info">
                    <div className="row">
                        <div className="col-md-4">upload avatar </div>
                        <div className="col-md-8">
                            <div className="progress">
                                <div className="progress-bar" >
                                    <span className="progress-content">%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h6 className="text-danger">{this.props.messageAlert.erroravatar? this.props.messageAlert.erroravatar:""}</h6>
                    <h6 className="text-danger">{this.props.messageAlert.error? this.props.messageAlert.error:""}</h6>
                    <h6 className="text-success">{this.props.messageAlert.success? this.props.messageAlert.success:""}</h6>
                    
                        
                    </div>
                    </div>
                    {/* Modal footer */}
                    <div className="modal-footer">
                        <a href="/" onClick={this.onReset} className="btn btn-default">
                           close
                        </a>
                    </div>
                </div>
        </div>
        </div>
    </div>
    )
    }
}
