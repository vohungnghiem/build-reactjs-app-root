import React, { Component } from 'react'
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import {  requestEdit } from '../../../_actions/act_product';
import { requestAll } from '../../../_actions/act_category';
import { apiOne } from '../../../_apis/api_product';
import OptionCategory from './OptionCategory';
import { unflatten } from '../../../_helpers/index';
export class EditProduct extends Component {
  constructor(props){
    super(props);
    this.state = {
        fields : {
            name : '', category: '', price : '', sale: '', color: '', 
            detail: '', tag: '', amount: '', video: '', image: ''
        },
        temporary_image: null
    }
  }
  componentDidMount(){
   this.props.onCategory();
   apiOne(this.props.match.params.id).then(response =>{
       this.setState({
           fields: response
       })
   })
  }
  onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let fields = this.state.fields
    fields[name] = value;
    this.setState({
        fields: fields
    })
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
  onEdit = (e) => {
      e.preventDefault();
    this.props.onEdit(this.state)
  }
  onClose = () => {
    this.props.history.push('/admin/product')
  }
  render() {
    let arr = this.props.category;
    let tree = unflatten(arr);
   
    function addChildren(object,dest, tas, id){
        object.forEach(element => {
            dest.push(<OptionCategory key={element.id} id={id} tas={tas} option={element}/>)
            if (element.children.length > 0) {
                addChildren(element.children,dest,tas+"|--",id)
            }
        });
    }
    function buildTree(object, id){
        var dest = [];
        var tas = "|--";
        addChildren(object, dest, tas, id);
        return dest
    }

    let { name, category, detail, tag, video, image } = this.state.fields;

    return (
        <div className="container">
            <h4 className="mt-5">Edit Product</h4>
            <form onSubmit={this.onEdit}>
            <div className="form-group">
                <label>Product name:</label>
                <input type="text" name="name" 
                    onChange={this.onChange} 
                    className="form-control" value={name}
                />
            </div>
            <div className="form-group">
                <label>Category</label>
                <div className="input-group">
                <select name="category" value={category}  onChange={this.onChange} className="custom-select">
                    <option value={0}>root</option>
                    {buildTree(tree,category)}
                </select>
                <div className="input-group-append">
                    <NavLink to="/admin/category" className="btn btn-primary">Add</NavLink>
                </div>
                </div>
            </div>
            
            <div className="form-group">
                <label>Link Video</label>
                <input type="text" name="video" value={video} onChange={this.onChange} className="form-control"/>
            </div>
            <div className="form-group">
                <label>Detail</label>
                <textarea name="detail" value={detail} onChange={this.onChange} cols="6" className="form-control"></textarea>
            </div>
            <div className="form-group">
                <label>Tag</label>
                <input type="text" name="tag" value={tag} onChange={this.onChange} className="form-control"/>
            </div>
            <div className="form-group row col-md ">
                <div className="col-md ">
                    <label htmlFor="avatar"><strong>image</strong></label> <br/>
                    <input type="file" name="avatar" className="inputfile" id="embedpollfileinput" 
                    onChange={this.handleChangeFile}/>
                    <label htmlFor="embedpollfileinput" className="btn bg-warning">
                        <i className="fa fa-upload"> Upload Image </i> 
                    </label>
                </div>
                {!this.state.temporary_image? 
                    <div className="col-md ">
                        <img src={image} alt={name}/>
                    </div>:
                    null
                }
                
                <div className="col-md">
                    <img src={this.state.temporary_image} alt={name}/>
                </div>
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
            <br/>
            <div className="form-group mt-3">
            {this.props.product.success?
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                <button type="button" onClick={this.onClose} className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    <span className="sr-only">Close</span>
                </button>
                <strong>{this.props.product.success}</strong> 
                </div>: null
            }
            {this.props.product.error?
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <button type="button" onClick={this.onClose} className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    <span className="sr-only">Close</span>
                </button>
                <strong>{this.props.product.error}</strong>
                </div>: null
            }
            </div>
        </form>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  product : state.product,
  category : state.category
})

const mapDispatchToProps = dispatch =>({
    onEdit: (payload) => dispatch(requestEdit(payload)),
    onCategory: () => dispatch(requestAll())
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct)
