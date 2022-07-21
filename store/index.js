export const state = () => ({
  isOrderInformationOpen: false,
})

export const getters = {
  getOrderInformationState(state) {
    return state.isOrderInformationOpen
  }
}

export const mutations = {
  changeOrderInformationState(state, isOpen) {
    state.isOrderInformationOpen = !isOpen;
  }
}

export const actions = {
  async exampleAction(state) {
  }
}
