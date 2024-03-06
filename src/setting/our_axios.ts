import axios from "axios";
axios.defaults.headers.post['Content-Type'] = 'application/json';
let store: any;

export const injectStore = (_store: any) => {
  store = _store;
}

axios.interceptors.request.use(async function (config: any) {
  console.log('API request ', store.getState());
  const authUser = store.getState().auth;
  console.log('API request auth user ', authUser);
  if (authUser.token) {
    config.headers.Authorization = 'Bearer ' + authUser.token;
  }

  return config;
}, function (error: any) {
  console.log("Axios interceptor error ", error);
  return error;
});


export default axios;
