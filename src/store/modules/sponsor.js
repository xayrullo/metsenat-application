// import axios from '@/utils/axios.js'
export default {
  state: {
    isSubmittedToSponsor: false,
    sponsorPending: false
  },
  getters: {},
  mutations: {
    PENDING (state, payload) {
      state.pending = payload
    },
  },
  actions: {}
}
