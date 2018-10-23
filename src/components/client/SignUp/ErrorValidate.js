import React, { Component } from 'react';
export default class ErrorValidate extends Component {
    render() {
        let { errFullname, errUsername, errEmail, errPassword, errPasswordagain, 
        errTelephone, errAddress, errAccepted } = this.props.errors;
    return (
        <div className="modal fade" id="myModal">
            <div className="modal-dialog">
            <div className="modal-content">
                {/* Modal Header */}
                <div className="modal-header bg-danger">
                    <h4 className="modal-title text-white">Some Errors Occurred</h4>
                    <button type="button" className="close" data-dismiss="modal">×</button>
                </div>
                {/* Modal body */}
                <div className="modal-body">
                <div className="text-danger">
                    <h4>You need to fill out the registration form</h4>
                    <p>{errFullname}</p>
                    <p>{errUsername}</p>
                    <p>{errEmail}</p>
                    <p>{errPassword}</p>
                    <p>{errPasswordagain}</p>
                    <p>{errTelephone}</p>
                    <p>{errAddress}</p>
                    <p>{errAccepted}</p>
                </div>
                </div>
                {/* Modal footer */}
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
            </div>
            </div>
        </div>
    )
    }
}
