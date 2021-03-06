import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default {
  state: {
    stageWidth: window.innerWidth - 600,
    stageHeight: 350,
  },
  getters: {
    getStageWidth: (state) => state.stageWidth,
    getStageHeight: (state) => state.stageHeight,
  },
  mutations: {
    setStageWidth: (state, stageWidth) => (state.stageWidth = stageWidth),
    setStageHeight: (state, stageHeight) => (state.stageHeight = stageHeight),
  },
  actions: {
    setStageWidth({ commit }, stageWidth) {
      commit('setStageWidth', stageWidth);
    },
    setStageHeight({ commit }, stageHeight) {
      commit('setStageHeight', stageHeight);
    },
  },
};
