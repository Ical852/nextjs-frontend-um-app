import store from '../store';

export const BASE_URL = "http://localhost:5000";
const state = store.getState();
const token = state.session.token;
export const getHeader = () => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }
}