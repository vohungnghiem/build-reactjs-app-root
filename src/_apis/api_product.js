import axios from 'axios';
import $ from 'jquery';
window.jQuery = window.$ = $;
const url = 'https://5b31e1e07ad3350014b4349a.mockapi.io/api/products/';
// const fake = 'http://a'
export async function apiAdd(data) {
    try {
        const response = await axios.post(url, data);
        return response.data
    } 
    catch (error) {
        console.log(error);
    }
}

export async function apiAll() {
    try {
        const response = await axios.get(url);
        return response.data
    } 
    catch (error) {
        console.log(error);
    }
}
export async function apiOne(id) {
    try {
        const response = await axios.get(url+id);
        return response.data
    } 
    catch (error) {
        console.log(error);
    }
}
export async function apiDelete(id) {
    try {
        const response = await axios.delete(url+id);
        return response.data
    } 
    catch (error) {
        console.log(error);
    }
}

export async function apiEdit(id, data) {
    try {
        const response = await axios.put(url+id, data);
        return response.data
    } 
    catch (error) {
        console.log(error);
    }
}

export async function apiAddImage(image){
    let CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/sodo/image/upload';
    let CLOUDINARY_UPLOAD_PRESET = 'zpfptip4';
    let file = image;
    let formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    const config = {
      onUploadProgress: progressEvent => {
        let process = Math.round(progressEvent.loaded / progressEvent.total * 100 ); 
        $(document).ready(function(){
          $(".progress-bar").css("width", process + '%');
          $( ".progress-content" ).html( process);
        })    
     }
    }
    try {
      const response = await axios.post(CLOUDINARY_URL,formData,config)
      return response.data.secure_url;
    } catch (error) {
      console.log(error)
    }
  }