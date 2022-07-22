import { createStore } from "vuex"

const axios = require('axios');
const instance = axios.create({
    baseURL: 'http://192.168.1.149:3000/api'
})

let user = localStorage.getItem('user');

if (!user) {
    user = {
        userId: -1,
        token: '',
    };
} else {
    try {
        user = JSON.parse(user);
        instance.defaults.headers.common['Authorization'] = user.token;
    } catch (ex) {
        user = {
            userId: -1,
            token: '',
        };
    }
}

const store = createStore({
    state: {
        status: '',
        user: {
            id: -1,
            token: '',
        },
        userInfos: {
            username: '',
            email: '',
            password: '',
        }
    },
    mutations: {
        setStatus: function (state, status) {
            state.status = status;
        },
        logUser: function (state, user) {
            instance.defaults.headers.common['Authorization'] = user.token;
            localStorage.setItem('user', JSON.stringify(user));
            console.log(user.data, user.token);
            state.user.id = user.data.id;
            state.user.token = user.token;
        },
        logout: function (state) {
            state.user = {
                id: -1,
                token: '',
            }
            localStorage.removeItem('user');
        },
    },
    actions: {
        login: ({ commit }, userInfos) => {
            commit('setStatus', 'loading');
            return new Promise((resolve, reject) => {
                instance.post('/login', { userInfos })
                    .then(function (response) {
                        commit('setStatus', 'loggedIn')
                        commit('logUser', response.data)
                        resolve(response);
                    })
                    .catch(function (error) {
                        commit('setStatus', 'error_login')
                        reject(error);
                    });
            })
        },
        createAccount: ({ commit }, userInfos) => {
            commit('setStatus', 'loading');
            return new Promise((resolve, reject) => {
                instance.post('/register', { userInfos })
                    .then(function (response) {
                        commit('setStatus', 'created')
                        resolve(response);
                    })
                    .catch(function (error) {
                        commit('setStatus', 'error_register')
                        reject(error);
                    });
            })
        },
    }
})

export default store;