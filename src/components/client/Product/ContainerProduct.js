import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestAll } from '../../../_actions/act_product';
import { apiOne } from '../../../_apis/api_category';
import ListItems from './ListItems';
import Pagination from './Pagination';
import './product.css';
export class ContainerProduct extends Component {
  constructor(props){
    super(props);
    this.state = {
      current_page: 1,
      fields: {}
    }
  }
  componentDidMount(){
    this.props.onAll();
    apiOne(this.props.match.params.id).then(response =>{
      this.setState({
          fields: response
      })
    })
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
  componentWillReceiveProps(nextProps){
    if (nextProps) {
      apiOne(nextProps.match.params.id).then(response =>{
        this.setState({
            fields: response
        })
      })
  } 
  }
  render() {
    let id = this.props.match.params.id
    let products = this.props.products.filter(data=> data.category===id);
    let per_page = 4;
    let pages = Math.ceil(products.length / per_page);
    let current_page = this.state.current_page;
    let start_offset = (current_page - 1) * per_page;
    let start_count = 0;
    
    let forpagination = () => {
      let pagination = [];
      for (let page = 1; page <= pages; page++) {
        pagination.push(
          <Pagination key={page} onClick={this.onClick} current_page={current_page} page={page}/>
        )
      }
      return pagination;
    }
    return (
      <div className="container mt-5" >
        <h2>{this.state.fields?this.state.fields.title:''}</h2>
        <div className="row">
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
        </div>
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
  products: state.product
})

const mapDispatchToProps = dispatch => ({
  onAll : ()=>dispatch(requestAll())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContainerProduct)
