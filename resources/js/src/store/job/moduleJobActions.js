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

    const {condition} = payload;
    return new Promise((resolve, reject) => {
      axios.get('/api/job/style', {
        params: {
          condition: condition
        }
      })
        .then((response) => {
          commit('UPDATE_STYLESCMATERIAL', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  fetchDoor ({ commit }, payload) {

    const {BrandID_con, GroupID_con} = payload;
    
    return new Promise((resolve, reject) => {
      axios.get('/api/job/door', {
        params: {
          BrandID: BrandID_con,
          GroupID: GroupID_con,
        }
      })
        .then((response) => {
          commit('UPDATE_DOORS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  
  fetchMaterial ({ commit }, payload) {

    const {MaterialID, DrawerStyleID, LgDrawerStyleID} = payload;
    
    return new Promise((resolve, reject) => {
      axios.get('/api/job/material', {
        params: {
          MaterialID: MaterialID,
          DrawerStyleID: DrawerStyleID,
          LgDrawerStyleID: LgDrawerStyleID
        }
      })
        .then((response) => {
          commit('UPDATE_MATERIALS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  fetchColor ({ commit }, payload) {

    const {ColorID} = payload;
    
    return new Promise((resolve, reject) => {
      axios.get('/api/job/color', {
        params: {
          ColorID: ColorID,
        }
      })
        .then((response) => {
          commit('UPDATE_COLOURS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  fetchFinish ({ commit }, payload) {

    const {FinishID} = payload;
    
    return new Promise((resolve, reject) => {
      axios.get('/api/job/finish', {
        params: {
          FinishID: FinishID,
        }
      })
        .then((response) => {
          commit('UPDATE_FINISHS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  fetchEdge ({ commit }, payload) {

    const {MaterialID, ColorID} = payload;
    
    return new Promise((resolve, reject) => {
      axios.get('/api/job/edge', {
        params: {
          MaterialID: MaterialID,
          ColorID: ColorID,
        }
      })
        .then((response) => {
          commit('UPDATE_EDGES', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  fetchProfiles ({ commit }, payload) {

    const {Inside, Outside, CenterPanel, StileRail, Hardware} = payload;
    
    return new Promise((resolve, reject) => {
      axios.get('/api/job/profile', {
        params: {
          Inside: Inside,
          Outside: Outside,
          CenterPanel: CenterPanel,
          StileRail: StileRail,
          Hardware: Hardware,
        }
      })
        .then((response) => {
          commit('UPDATE_PROFILES', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  setDrawerdatas ({ commit }, payload) {
    commit('UPDATE_DRAWERDATAS', payload);
  }
}
