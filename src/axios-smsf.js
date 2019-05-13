import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.squirrelsuper.com/'
    // baseURL: 'http://localhost:8000/'
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;