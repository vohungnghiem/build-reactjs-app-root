import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestAdd, requestAll, requestDelete, requestOne, requestEdit } from '../../../_actions/act_category';
import AddCategory from './AddCategory';
import EditCategory from './EditCategory';
import Items from './ListItems';

export class ContainerCategory extends Component {
    componentWillMount(){
        this.props.onAll();
    }
    onSubmit = (payload) => {
        this.props.onAdd(payload);
    }
    onDelete = (payload) => {
        this.props.onDelete(payload);
    }
    onOne = (payload) => {
        this.props.onOne(payload);
    }
    onEdit = (payload) => {
        this.props.onEdit(payload);
    }
    render() {
        let categories = [];
        if (this.props.category.all) {
            categories = this.props.category.all
        }else{
            categories = this.props.category;
        }

        return (
        <div className="container">
        <div className="row">
            <div className="col-md-6">
                <Items  onDelete={this.onDelete} onOne={this.onOne} categories={categories} />
            </div>
            <div className="col-md-6">
            {
                this.props.category.edit?
                <EditCategory onEdit={this.onEdit} category={this.props.category.one} categories={categories}/>:
                <AddCategory onSubmit={this.onSubmit} categories={categories}/>
            }
            <br/>
            {categories.success? <div className="alert alert-success">{categories.success}</div>: ''}
            {categories.error? <div className="alert alert-success">{categories.error}</div>: ''}
            </div>
            
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    category : state.category
})
const mapDispatchToProps = dispatch => ({
    onAdd: (payload) => dispatch(requestAdd(payload)),
    onAll: () => dispatch(requestAll()),
    onDelete: (payload) => dispatch(requestDelete(payload)),
    onOne: (payload) => dispatch(requestOne(payload)),
    onEdit: (payload) => dispatch(requestEdit(payload))
  })

export default connect(mapStateToProps, mapDispatchToProps)(ContainerCategory)
