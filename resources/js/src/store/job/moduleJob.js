/*=========================================================================================
  File Name: moduleChat.js
  Description: Chat Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from './moduleJobState.js'
import mutations from './moduleJobMutations.js'
import actions from './moduleJobActions.js'
import getters from './moduleJobGetters.js'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
