import axios from 'axios';

//be2c7e923924c8b308334fd23e95e6b4

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;