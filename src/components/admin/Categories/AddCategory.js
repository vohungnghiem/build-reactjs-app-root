import React, { Component } from 'react'
import OptionCategory from './OptionCategory';
import { unflatten } from '../../../_helpers/index';
export default class AddCategory extends Component {
    constructor(){
        super();
        this.state = {
            title : '',
            parent : 0
        }
    }
    onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        }) 
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state)
    }
  render() {
    let arr = this.props.categories;
    
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
        <div>
            <h4 className="mt-5">Add Category</h4>
                <form onSubmit={this.onSubmit}>
                    <select name="parent" onChange={this.onChange} className="custom-select custom-select mb-3">
                        <option value={0}>Root</option>
                        {buildTree(tree)}
                    </select>
                    <div className="input-group">
                        <input type="text" name="title" value={this.state.title} onChange={this.onChange} className="form-control" placeholder=""/>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="submit">Add</button> 
                        </div>
                    </div>
                </form>
        </div>
    )
  }
}
