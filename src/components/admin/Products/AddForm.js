import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import OptionCategory from './OptionCategory';
import ShowImage from './ShowImage';
import { unflatten } from '../../../_helpers/index';
export default class AddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            fields: { image: ''},
            temporary_imaage: null
        }
    }
    onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let fields = this.state.fields;
        fields[name] = value
        this.setState({
            fields: fields
        })
    }
    onAdd = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.fields)
    }
    onClose = () => {
        this.props.onClose()
    }
    handleChangeFile = (e) => {
        let fields = this.state.fields;
        if(e.target.files){
            fields['image'] = e.target.files[0];
            if(this.state.fields.image){
                this.setState({
                    temporary_image: URL.createObjectURL(this.state.fields.image)
                });
            }
        }
    }
  render() {
    let arr = this.props.category;
    let tree = unflatten(arr);
    function addChildren(object,dest, tas){
        object.forEach(element => {
            dest.push(<OptionCategory key={element.id} tas={tas} option={element}/>)
            if (element.children.length > 0) {
                addChildren(element.children,dest,tas+"|--")
            }
        });
    }
    function buildTree(object){
        var dest = [];
        var tas = "|--";
        addChildren(object, dest, tas);
        return dest
    }
    return (
        <form onSubmit={this.onAdd}>
            <div className="form-group">
                <label>Product name:</label>
                <input type="text" name="name" onChange={this.onChange} className="form-control" />
            </div>
            <div className="form-group">
                <label>Category</label>
                <div className="input-group">
                <select name="category" onChange={this.onChange} className="custom-select">
                    <option value={0}>root</option>
                    {buildTree(tree)}
                </select>
                <div className="input-group-append">
                    <NavLink to="/admin/category" className="btn btn-primary">Add</NavLink>
                </div>
                </div>
            </div>
            {/* <div className="input-group mb-3">
                <div className="input-group-prepend">
                <span className="input-group-text">Price</span>
                </div>
                <input type="text" name="price" onChange={this.onChange} className="form-control" placeholder="price"/>
                <input type="text" name="sale" onChange={this.onChange} className="form-control" placeholder="sale (%)"/>
            </div>
            <div className="form-group">
                <label>Color</label>
                <input type="text" name="color" onChange={this.onChange} className="form-control"/>
            </div>
            <div className="form-group">
                <label>amount</label>
                <input type="number" name="amount" onChange={this.onChange} className="form-control"/>
            </div> */}
            <div className="form-group">
                <label>Link Video</label>
                <input type="text" name="video" onChange={this.onChange} className="form-control"/>
            </div>
            <div className="form-group">
                <label>Detail</label>
                <textarea name="detail" onChange={this.onChange} cols="6" className="form-control"></textarea>
            </div>
            <div className="form-group">
                <label>Tag</label>
                <input type="text" name="tag" onChange={this.onChange} className="form-control"/>
            </div>
            <div className="form-group row col-md ">
                <div className="col-md ">
                    <label htmlFor="image"><strong>Image</strong></label> <br/>
                    <input type="file" name="image" className="inputfile" id="embedpollfileinput" 
                    onChange={this.handleChangeFile}/>
                    <label htmlFor="embedpollfileinput" className="btn bg-warning">
                        <i className="fa fa-upload"> Upload Image </i> 
                    </label>
                </div>
                <div className="col-md ">
                    <ShowImage showImage={this.state.temporary_image} />
                </div>
                <div className="progress">
                    <div className="progress-bar" >
                        <span className="progress-content">%</span>
                    </div>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <br/>
            <div className="form-group mt-3">
            {this.props.success?
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                <button type="button" onClick={this.onClose} className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    <span className="sr-only">Close</span>
                </button>
                <strong>{this.props.success}</strong> 
                </div>: null
            }
            {this.props.error?
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <button type="button" onClick={this.onClose} className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    <span className="sr-only">Close</span>
                </button>
                <strong>{this.props.error}</strong>
                </div>: null
            }
            
            </div>
        </form>
    )
  }
}
