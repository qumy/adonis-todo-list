import axios from 'axios';
import store from './store/index';

export default () => axios.create({
  baseURL: store.state.baseUrl,
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${store.state.authentication.token}`,
  },
});
