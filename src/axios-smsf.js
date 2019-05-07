import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.squirrelsuper.com/'
    //baseURL: 'http://localhost:8000/'
});

// instance.defaults.headers.common['Authorization'] = 'Token 619ce70b2280f5c5a0fcccb0172d720351b448d5';
instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;