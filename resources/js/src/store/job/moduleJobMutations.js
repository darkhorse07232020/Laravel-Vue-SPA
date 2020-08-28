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
  UPDATE_STYLESCMATERIAL (state, styles_cmaterial) {
    state.styles_cmaterial = styles_cmaterial;
  },
  UPDATE_DOORS (state, doors) {
    state.doors = doors;
  },
  UPDATE_MATERIALS (state, materials) {
    state.materials = materials;
  },
  UPDATE_COLOURS (state, colors) {
    state.colors = colors;
  },
}

