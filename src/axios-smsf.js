import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000/'
});

instance.defaults.headers.common['Authorization'] = 'Token 2b6aa793c895665f1dfae45e730c21953e54d5ac';
instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;