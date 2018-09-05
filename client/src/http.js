import axios from 'axios';
import store from './store/index';

export default () => axios.create({
  baseURL: store.state.baseUrl,
  timeout: 1000,
});
