import Vue from 'vue'
/* eslint-disable */

export const state = () => ({
  sections: {},
  services: {}
})

export const mutations = {
  setSections(state, { serviceType, sections }) {
    Vue.set(state.sections, serviceType, sections)
  },
  setServices(state, { sectionId, services }) {
    Vue.set(state.services, sectionId, services)
  }
}

export const actions = {
  setSections({ commit }, { serviceType, sections }) {
    commit('setSections', { serviceType, sections })
  },
  setServices({ commit }, { sectionId, services }) {
    commit('setServices', { sectionId, services })
  }
}

export const getters = {
  sectionsByServiceType: state => serviceType => state.sections[serviceType],
  servicesBySectionId: state => sectionId => state.services[sectionId]
}
