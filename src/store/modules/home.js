const state = { // 要设置的全局访问的state对象
  carNumber: 0
}

const getters = {
  carNum (state) {
    return state.carNumber
  }
}

const mutations = {
  initCarNum (state, num) {
    state.carNumber = num
  },
  addCarNum (state) {
    state.carNumber = state.carNumber + 1
  },
  reduceCarNum (state) {
    if (state.carNumber > 0) {
      state.carNumber = state.carNumber - 1
    }
  }
}

const actions = {
  getCarNum (context, num) {
    context.commit('initCarNum', num)
  }
}

export default {
  namespaced: true, // 用于在全局引用此文件里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions
}
