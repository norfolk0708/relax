import axios from 'axios';
import { URL_CATEGORIES, URL_PRODUCTS } from './URL';

export default class FetchService {
    static async getAllProducts() {
        const response = await axios.get(`${URL_PRODUCTS}`)
        console.log(response.data)  
        return response.data
    }
    static async getByID(id) {
        const response = await axios.get(`${URL_PRODUCTS}${id}`)
        console.log(response.data)
        return response
    }
    static async addProduct(product) {
        const response = await axios.post(`${URL_PRODUCTS}`, product)
        console.log(response.data)
        return response
    }
    static async updateProduct(id, product) {
        const response = await axios.patch(`${URL_PRODUCTS}/${id}`, product)
        console.log(response.data)
        return response
    }
    static async deleteProduct(id) {
        const response = await axios.delete(`${URL_PRODUCTS}/${id}`)
        console.log(response.data)
        return response
    }
    static async getCategories() {
        const response = await axios.get(`${URL_CATEGORIES}`)
        console.log(response.data)
        return response
    }
}