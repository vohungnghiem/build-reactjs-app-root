import axios from 'axios';
const url = 'https://5b31e1e07ad3350014b4349a.mockapi.io/api/users/';
export async function apiGetAllUser() {
    try {
        const response = await axios.get(url);
        return response.data
    } 
    catch (error) {
        console.log(error);
    }
}

export async function apiGetOneUser(id) {
    try {
        const response = await axios.get(url+id);
        return response.data
    } 
    catch (error) {
        console.log(error);
    }
}   

export async function apiEditUser(id, data) {
    try {
        const response = await axios.put(url+id, data);
        return response.data
    } 
    catch (error) {
        console.log(error);
    }
}
export async function apiDeleteUser(id){
    try {
        const response = await axios.delete(url+id);
        return response.data
    } 
    catch (error) {
        console.log(error);
    }
}  