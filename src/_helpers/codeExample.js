import React, { Component } from 'react';
import cloudinary from 'cloudinary';
import ReactHtmlParser from 'react-html-parser';
import $ from 'jquery';
window.jQuery = window.$ = $;
export default class ContainerHome extends Component {
  constructor(){
    super()
    this.state = {
      img: ''
    }
  }
  onSubmit = () => {
    cloudinary.config({ 
      cloud_name: 'sodo', 
      api_key: '563896484929275', 
      api_secret: 'pPj5WsBGwnb1VD2WhrJcQQXIdwQ' 
    });
    //cloudinary.v2.uploader.upload("https://www.what-dog.net/Images/faces2/scroll006.jpg", function(error, result) {return result});
    //cloudinary.v2.uploader.destroy('tnd3mopienrzzaygxoqq', function(error, result){console.log(result, error)});
  
    let a = cloudinary.image("tnd3mopienrzzaygxoqq", {secure: true});
    this.setState({
      img : a
    })
    $(document).ready(function(){
      alert('asdf');
})     
  }
  render() {
    
    return (
      <div className="container m-5">
        <h2>this is the home page</h2>
        <button onClick={this.onSubmit} >submit</button>
        { ReactHtmlParser(this.state.img) }
      </div>
    )
  }
}
