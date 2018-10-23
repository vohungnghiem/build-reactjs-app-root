import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { requestAll, requestSearch } from '../../../_actions/act_product';
import Pagination from './Pagination';
import ListItems from './ListItems';
export class ContainerProduct extends Component {
  constructor(props){
    super(props);
    this.state = {
      current_page: 1,
    }
  }
  componentWillMount(){
    this.props.onAll();
  }
  onClick = (current_page, pages) => {
    if (current_page > pages) {
      current_page = current_page - 1;
    } else if(current_page <= 0) {
      current_page = current_page + 1;
    }
    this.setState({
      current_page: current_page
    })
  }
  onSearch = (e) => {
    this.setState({
      current_page: 1,
    })
    this.props.onSearch(e.target.value)
  }
  render() {
    var products = this.props.product;
    const per_page = 4;
    const pages = Math.ceil(products.length / per_page);
    const current_page = this.state.current_page;
    const start_offset = (current_page - 1) * per_page;
    let start_count = 0;
    
    const forpagination = () => {
      let pagination = [];
      for (let page = 1; page <= pages; page++) {
        pagination.push(
          <Pagination key={page} onClick={this.onClick} current_page={current_page} page={page}/>
        )
      }
      return pagination;
    }
    return (
    <div className="container">     
      <div className="row mt-5">
        <div className="col-md-2" >
          <h4>List Products</h4>
        </div>
        <div className="col-md-3" >
          <input type="search" onChange={this.onSearch} className="form-control" name="seach_product" placeholder="search"/>
        </div>
        <div className="col-md-7">
          <NavLink to="/admin/product/add" className="btn btn-primary float-right">Add Product</NavLink>
        </div>
      </div>
      <br/>
      <table className="table table-striped table-responsive">
        <thead className="thead-dark">
          <tr>
            <th>id</th>
            <th>name</th>
            <th>date</th>
            <th>delete</th>
            <th>edit</th>
          </tr>
        </thead>
        <tbody>
        {
          Array.isArray(products)?
            products.map(
              (product, index) =>{
                let item = null
                if (index >= start_offset && start_count < per_page) {
                  start_count++;
                  item = <ListItems key={index} product={product} />;
                }
                return item;
            }): null
            }
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item"><a className="page-link" onClick={()=>this.onClick(current_page - 1)}>Previous</a></li>
            {forpagination()}
            <li className="page-item"><a className="page-link" onClick={()=>this.onClick((current_page + 1),pages)}>nexts</a></li>
          </ul>
        </nav>
    </div>
    )
  }
}
const mapStateToProps = (state) => ({
  product : state.product
})
const mapDispatchToProps = dispatch => ({
  onAll: () => dispatch(requestAll()),
  onSearch: (payload) => dispatch(requestSearch(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContainerProduct)
