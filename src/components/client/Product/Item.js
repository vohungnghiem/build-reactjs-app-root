import React, { Component } from 'react';
import { apiOne } from '../../../_apis/api_product';
import './product.css';
export default class Item extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: ''
        }
    }
    componentDidMount(){
        var self = this;
        apiOne(this.props.match.params.id).then(response=>{
            self.setState({
                product: response,
            });
        })
    }
    render() {
        let product = this.state.product;
        let video = ''
        if (product.video) {
            let str = product.video;
            video = str.replace("watch?v=", "embed/");
        }
        let create_date = ''
        if (product.create_date) {
            let av = product.create_date;
            create_date = new Date(av);
        }
        
        
    return (
      <div className="container">
        <h2> {product.name} </h2>
        <iframe title={product.name}  frameBorder="1" allowFullScreen
        src={video}>
        
        </iframe>
        <p> {product.detail}  </p>
        <p>update: {create_date.toString()}</p>
      </div>
    )
  }
}
