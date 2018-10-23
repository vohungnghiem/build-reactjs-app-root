import React, { Component } from 'react'
import { connect } from 'react-redux';
import  AddForm  from './AddForm';
import { requestAdd } from '../../../_actions/act_product';
import { requestAll } from '../../../_actions/act_category';

export class AddProduct extends Component {
  constructor(props){
    super(props);
    this.state = {
      category : ''
    }
  }
  componentDidMount(){
   this.props.onCategory()

    
  }
  onAdd = (payload) => {
    this.props.onAdd(payload)
  }
  onClose = () => {
    this.props.history.push('/admin/product')
  }
  render() {
    return (
        <div className="container">
            <h4 className="mt-5">Add Product</h4>
            <AddForm 
              onAdd={this.onAdd}
              category={this.props.category} 
              success={this.props.product.success}
              error={this.props.product.error}
              onClose={this.onClose}
            />
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  product : state.product,
  category : state.category
})

const mapDispatchToProps = dispatch =>({
  onAdd: (payload) => dispatch(requestAdd(payload)),
  onCategory: () => dispatch(requestAll())
})

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)
