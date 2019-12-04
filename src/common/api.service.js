import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import {API_URL} from "@/common/config";

const ApiService = {
    init() {
        Vue.use(VueAxios, axios);
        Vue.axios.defaults.baseURL = API_URL;
        return this;
    },

    getToken() {
        return window.localStorage.getItem('token');
    },

    query(resource, params) {
        return Vue.axios.get(resource, params).catch(error => {
            throw new Error(`[MFS] ApiService ${error}`);
        });
    },

    get(resource) {
        let headers = {'headers': {'Authorization': this.getToken()}};
        return Vue.axios.get(`${resource}`, headers).catch(error => {
            throw new Error(`[MFS] ApiService ${error}`);
        });
    },

    getById(resource, id) {
        let headers = {'headers': {'Authorization': this.getToken()}};
        return Vue.axios.get(`${resource}/${id}`, headers).catch(error => {
            throw new Error(`[MFS] ApiService ${error}`);
        });
    },

    post(resource, request) {
        let headers = {'headers': {'Authorization': this.getToken()}};
        return Vue.axios.post(`${resource}`, request, headers);
    },

    register(resource, request) {
        return Vue.axios.post(`${resource}`, request);
    },

    postPathId(resource, id, request) {
        let headers = {'headers': {'Authorization': this.getToken()}};
        return Vue.axios.post(`${resource}/${id}`, request, headers);
    },

    put(resource, id, request) {
        let headers = {'headers': {'Authorization': this.getToken()}};
        return Vue.axios.put(`${resource}/${id}`, request, headers);
    },

    deleteById(resource, id) {
        let headers = {'headers': {'Authorization': this.getToken()}};
        return Vue.axios.delete(`${resource}/${id}`, headers).catch(error => {
            throw new Error(`[MFS] ApiService ${error}`);
        });
    }
};

export default ApiService.init();