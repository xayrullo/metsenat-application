import axios from '@/utils/axios.js'
export default {
  state: {
    tariffs: [],
    paymentType: [],
    pending: false
  },
  getters: {
    getTariffs: state => state.tariffs,
    getPaymentType: state => state.paymentType
  },
  mutations: {
    PENDING (state, payload) {
      state.pending = payload
    },
    SET_TARIFFS (state, payload) {
      state.tariffs = payload
    },
    SET_PAYMENT_TYPE (state, payload) {
      state.paymentType = payload
    }
  },
  actions: {
    async getTariffs ({ commit }) {
      commit('PENDING', true)
      return new Promise((resolve, reject) => {
        axios
          .get('/tariff-list/')
          .then(res => {
            commit('SET_TARIFFS', res)
            resolve(res)
          })
          .catch(error => {
            reject(error)
          })
          .finally(() => {
            commit('PENDING', false)
          })
      })
    },
    async getPaymentType ({ commit }) {
      commit('PENDING', true)
      return new Promise((resolve, reject) => {
        axios
          .get('/payment-type-list/')
          .then(res => {
            commit('SET_PAYMENT_TYPE', res)
            resolve(res)
          })
          .catch(error => {
            reject(error)
          })
          .finally(() => {
            commit('PENDING', false)
          })
      })
    }
  }
}
