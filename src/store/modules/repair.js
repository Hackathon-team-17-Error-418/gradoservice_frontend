export default {
  state: {
    RepairCars: []
  },
  getters: {
    getRepairCars: state => state.RepairCars
  },
  mutations: {
    SetPushRepairCars (state, val) {
      state.RepairCars.push(val)
    }
  },
  actions: {
  }
}
