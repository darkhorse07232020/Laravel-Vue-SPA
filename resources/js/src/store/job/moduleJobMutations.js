/*=========================================================================================
  File Name: moduleChatMutations.js
  Description: Chat Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'

export default {
  UPDATE_IMAGES (state, images) {
    state.images = images
  },
  UPDATE_STYLES (state, styles) {
    state.styles = styles;
  }
}

