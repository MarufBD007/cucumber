const axios = require("axios");
let config = {
    headers: {
        'Content-Type': 'application/json'
    }
}
module.exports = {
    publicPost: (url, data) => {
        return axios.post(url, data, config);
    },
    publicGet: (url) => {
        return axios.get(url, config);
    },
    privatePost: async(url, data) => {
        config['headers'] ={
            'Authorization': `Bearer ${token}`
        };
        return axios.post(url, data, config);
    },
    privateGet: async(url, token) => {
        config['headers'] = {
            'Authorization': `Bearer ${token}`
        };
        return axios.get(url, config);
    }
};