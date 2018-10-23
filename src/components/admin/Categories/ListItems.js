import React, { Component } from 'react'
import Item from './Item';
import { unflatten } from '../../../_helpers';
export default class ListItems extends Component {
  onDelete = (id) => {
    this.props.onDelete(id)
  }
  onOne = (id) => {
    this.props.onOne(id)
  }
  render() {
    let arr = this.props.categories;
    let tree = unflatten(arr);
    function addChildren(object,dest, tas){
        object.forEach(element => {
            dest.push({
                id:element.id, 
                tas: tas, 
                parent: element.parent,
                title: element.title 
            })
            if (element.children.length > 0) {
                addChildren(element.children,dest,tas+"|--")
            }
        });
    }
    function buildTree(object){
        var dest = [];
        var tas = "";
        addChildren(object, dest, tas);
        return dest
    }
    let custom = buildTree(tree);
    return (
        <React.Fragment>
        
            <table className="table mt-5 table-striped">
                <thead className="thead-dark">
                <tr>
                    <th>title</th>
                    <th>delete</th>
                    <th>edit</th>
                </tr>
                </thead>
                <tbody>
                {
                    Array.isArray(custom)?
                    custom.map(
                        (category, index) =>{
                            return <Item key={index} 
                                onDelete={this.onDelete}
                                onOne={this.onOne} 
                                category={category} />;
                        }): null
                    }
                </tbody>
            </table>
        </React.Fragment>
    )
  }
}
