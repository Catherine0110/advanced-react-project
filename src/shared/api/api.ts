import axios from 'axios';
import { USER_LOCALS_KEY } from 'shared/const/localStorage';

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    authorization: localStorage.getItem(USER_LOCALS_KEY) || '',
  },
});
