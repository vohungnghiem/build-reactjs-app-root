import React, { Component } from 'react';
import  $ from 'jquery';
import { connect } from 'react-redux';
import { requestDelete } from '../../../_actions/act_product';

export class DeleteUser extends Component {
    onClose = () => {
      this.props.history.push('/admin/product')
    }
    onDelete = () => {
      this.props.onDelete(this.props.match.params.id);
      this.props.history.push('/admin/product')
    }
  render() {
    $(document).ready(function(){
      $('.open-del-user').click();
    });

    return (
      <div className="container">
      
      <span type="button" className="open-del-user" data-toggle="modal" data-target="#myModal">
      </span>
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
          
            <div className="modal-header">
              <h4 className="modal-title">Delete</h4>
              <button type="button" onClick={this.onClose} className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body">
              are you sure delete this user? 
            </div>

            <div className="modal-footer">
              <button type="button" onClick={this.onDelete} className="btn btn-success" data-dismiss="modal">I agree</button>
              <button type="button" onClick={this.onClose} className="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
            
          </div>
        </div>
      </div>
  
</div>
    )
  }
}
const mapStateToProps = (state) => ({
  product: state.product,
})

const mapDispatchToProps = dispatch => ({
  onDelete: (payload) => dispatch(requestDelete(payload)),
})
export default connect(mapStateToProps, mapDispatchToProps)(DeleteUser)