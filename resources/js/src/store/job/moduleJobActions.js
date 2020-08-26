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
  fetchJob ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios.get('/api/docs')
        .then((response) => {
          console.log(response.status);
          resolve(response.status)
        })
        .catch((error) => { reject(error) })
    })
  },
}
