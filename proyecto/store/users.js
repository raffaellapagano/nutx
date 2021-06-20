//  state
export const state = () => ({
  users: []
})

//  actions
export const actions = {
  async loadUsers ({ commit }) {
    const { data } = await this.$axios.get(
      'http://jsonplaceholder.typicode.com/users'
    )
    console.log(data)
    commit('setUsers', data)
  }
  // loadAlbums({ commit }) {
  //   axios
  //     .get("http://jsonplaceholder.typicode.com/photos", {
  //       headers: {
  //         "Ocp-Apim-Subscription-Key": "your key"
  //       }
  //     })
  //     .then(response => response.data)
  //     .then(albums => {
  //       commit("SetAlbums", albums);
  //     });
  // }
}

// Getters
export const getters = {
  getUsers (state) {
    return state.users
  }
}

// Mutaciones
export const mutations = {
  setUsers (state, users) {
    state.users = users
  }
}
