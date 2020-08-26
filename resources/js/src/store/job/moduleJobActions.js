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
      axios.get('/api/image')
        .then((response) => {
          console.log(response);
          resolve(response.status)
        })
        .catch((error) => { reject(error) })
    })
  },
}
