import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    arrayToSort: [],
    swaps: 0,
    steps: 0,
    sorting: false,
    sorted: false,
    forceStop: false,
    paused: true,
    selectedSortSpeed: 50,
  },
  getters: {
    getArrayToSort: (state) => {
      return state.arrayToSort;
    },
    getSwaps: (state) => {
      return state.swaps;
    },
    getSteps: (state) => {
      return state.steps;
    },
    isSorting: (state) => {
      return state.sorting;
    },
    isSorted: (state) => {
      return state.sorted;
    },
    isForceStop: (state) => {
      return state.forceStop;
    },
    isPaused: (state) => {
      return state.paused;
    },
  },
  mutations: {
    setArray: (state, arrayToSort) => (state.arrayToSort = arrayToSort),
    setSortSpeed: (state, sortSpeed) => (state.selectedSortSpeed = sortSpeed),
    setIsSorting: (state, isSorting) => (state.sorting = isSorting),
    setIsSorted: (state, isSorted) => (state.sorted = isSorted),
    setIsForceStop: (state, isForceStop) => (state.forceStop = isForceStop),
    setIsPaused: (state, isPaused) => (state.paused = isPaused),
    incrementSteps: (state) => state.steps++,
    incrementSwaps: (state) => state.swaps++,
    resetSteps: (state) => (state.steps = 0),
    resetSwaps: (state) => (state.swaps = 0),
    changeColor: (state, { index, color }) =>
      (state.arrayToSort[index].stroke = color),
    changeAllColors: (state, color) => [
      ...state.arrayToSort.map((pos) => (pos.stroke = color)),
    ],
  },
  actions: {
    setArray({ commit, dispatch }, arrayToSort) {
      dispatch('resetCounters');
      commit('setIsSorted', false);
      commit('setArray', arrayToSort);
    },
    initSort({ commit, dispatch, getters }) {
      commit('setIsSorting', true);
      commit('setIsSorted', false);

      if (getters.isPaused) {
        commit('setIsPaused', false);
        commit('setIsForceStop', false);
      } else {
        dispatch('resetCounters', null);
      }

      return getters.getArrayToSort.map((z) => z.y); // convert y values in objects to an array
    },
    forceStop({ commit }) {
      commit('setIsForceStop', true);
    },
    resetCounters({ commit }) {
      commit('resetSteps');
      commit('resetSwaps');
    },
    changeColor({ commit }, { index, color }) {
      commit('changeColor', { index, color });
    },
    changeAllColors({ commit }, color) {
      console.log(color);
      commit('changeColor', color);
    },
    timer(_, ms) {
      return new Promise((res) => setTimeout(res, ms));
    },
  },
};
