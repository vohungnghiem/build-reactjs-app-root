import axios from 'axios';
import $ from 'jquery';
window.jQuery = window.$ = $;
const url = 'https://5b31e1e07ad3350014b4349a.mockapi.io/api/users/';
export async function apiGetAllUsers() {
    try {
      const response = await axios.get(url);
      return response.data;
      
    } catch (error) {
      
    }
}
export async function apiSignUp(data) {
    try {
      const response = await axios.post(url,data)
      return response.data;
      
    } catch (error) {
        return {error: error.message};
    }
}
export async function apiAddImage(avatar){
  let CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/sodo/image/upload';
  let CLOUDINARY_UPLOAD_PRESET = 'zpfptip4';
  let file = avatar;
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
    return {
      directAvatar: response.data.secure_url,
      errorAvatar: ''
    } ;
  } catch (error) {
    return {
      directAvatar: '',
      errorAvatar: error.message
    } ;
  }
}



