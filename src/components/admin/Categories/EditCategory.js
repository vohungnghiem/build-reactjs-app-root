import React, { Component } from 'react'
import OptionCategory from './OptionCategory';
import { unflatten } from '../../../_helpers';
export default class EditCategory extends Component {
    constructor(){
        super();
        this.state = {
            id: '',
            title : '',
            parent : 0
        }
    }
    componentDidMount(){
        this.setState({
            id: this.props.category.id,
            title: this.props.category.title,
            parent: this.props.category.parent
        })
    }
    componentWillReceiveProps(nextProps){
        if (nextProps && nextProps.category) {
            this.setState({
                id: nextProps.category.id,
                title: nextProps.category.title,
                parent: nextProps.category.parent
            })
        } 
    }
    onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        }) 
    }
    onEdit = (e) => {
        e.preventDefault();
        this.props.onEdit(this.state)
    }
  render() {
    let arr = this.props.categories;
    
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
    return (
      <div>
        <h4 className="mt-5">Edit Category</h4>
            <form onSubmit={this.onEdit}>
                <select name="parent" value={this.props.category.parent}  onChange={this.onChange} className="custom-select custom-select mb-3">
                    <option value="0" >Root</option>
                    {buildTree(tree,this.props.category.id)}
                </select>
                <div className="input-group">
                    <input type="text" name="title" value={this.state.title} onChange={this.onChange} className="form-control" placeholder=""/>
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">Edit</button> 
                    </div>
                </div>
            </form>
      </div>
    )
  }
}
