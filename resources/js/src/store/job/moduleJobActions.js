/*=========================================================================================
  File Name: moduleChatActions.js
  Description: Chat Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from '@/axios.js'

export default {
  // Get contacts from server. Also change in store
  fetchImage ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/job/image')
        .then((response) => {
          commit('UPDATE_IMAGES', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchStyle ({ commit }, payload) {
    const {condition} = payload
    return new Promise((resolve, reject) => {
      axios.get('/api/job/style', {
        params: {
          condition: condition
        }
      })
        .then((response) => {
          commit('UPDATE_STYLES', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
}
