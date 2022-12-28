const backend = ({ get, post, put, getById}) => ({

    getData: (route) => get(route),
    getDataById: (route, id) => getById(route, id),
    putData: (route, id, data) => put(route, id, data),
    postData: (route, data) => post(route, data)
});

export default backend;