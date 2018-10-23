import axios from 'axios';
const url = 'https://5b31e1e07ad3350014b4349a.mockapi.io/api/category/';
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