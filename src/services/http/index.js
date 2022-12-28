import errorMessage from "funtions/errorMessage";
import backend from "./backend";

const catcher = (callback) => {
  try {
    return callback;
  } catch (e) {
    return errorMessage(console.log)(e);
  }
}

const getFunctions = (http, baseUrl, wrapper) => {

  return {
    get: /*async*/ url => wrapper(catcher(http(`${baseUrl}${url}`))),
    getById:  (url, id) =>  wrapper(catcher(http(`${baseUrl}${url}/${id}`))),
    put: /*async*/ (url, id, data) => wrapper(catcher(http(`${baseUrl}${url}/${id}`,
    {
      method: 'put',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify( data )
    }))),
    post: /*async*/ (url, data) => wrapper(catcher(http(`${baseUrl}${url}`,
    {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify( data )
    })))
  }
}

const api = (http, wrapper) => ({
  backend: backend(getFunctions(http,  process.env.REACT_APP_SERVER, wrapper)),
});

export default api