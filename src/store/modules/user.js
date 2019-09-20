import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
  token: getToken(),
  userid: '',
  username: '',
  online: false,
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USERNAME: (state, username) => {
    state.username = username
  },
  SET_USERID: (state, userid) => {
    state.userid = userid
  },
  SET_ONLINE: (state, online) => {
    state.online = online
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  login({ commit }, userInfo) {
    const { userid, password } = userInfo
    if (userid == 'jiuchou' && password == '123456') {
      return new Promise((resolve) => {
        const token = 'Token-jiuchou'
        commit('SET_TOKEN', token)
        setToken(token)
        commit('SET_USERNAME', 'yang')
        commit('SET_USERID', 'jiuchou')
        commit('SET_ONLINE', true)
        commit('SET_ROLES', ['devops'])
        resolve()
      })
    }
  },

  // get user info
  getInfo({ commit }) {
    return new Promise(() => {
      const { roles } = ['devops']
      commit('SET_ROLES', roles)
    })
  },

  logout({ commit }) {
    return new Promise((resolve) => {
      commit('SET_ONLINE', false)
      commit('SET_ROLES', [])
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
