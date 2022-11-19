import axios from 'axios';

export default class API {
// user API
    // create user
    static async register(user) {
        const res = await axios.post('/user/register', user);
        return res.data;
    }
    // login
    static async login(user) {
        const res = await axios.post('http://localhost:3000/user/login', user);
        return res.data;
    }
    // logout
    static async logout() {
        const res = await axios.get('http://localhost:3000/user/logout', user);
        return res.data;
    }
    // get refresh token
    static async refresh_token(token) {
        const res = await axios.post('http://localhost:3000/user/refresh_token', user);
        return res.data;
    }
    // get user info
    static async infor(token) {
        const res = await axios.post('http://localhost:3000/user/infor', user);
        return res.data;
    }

// products api
    static async getProducts() {
        const res = await axios.get('http://localhost:3000/api/products');
        return res.data;
    }
    
    static async getProduct(id) {
        const res = await axios.get(`http://localhost:3000/api/products/${id}`);
        return res.data;
    }
}   