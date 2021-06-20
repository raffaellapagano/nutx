//  state
export const state = () => ({
  albums: [],
  users: [],
  paginas: [],
  modal: false,
  filteredUsers: [],
  consultedUsers: [],
  consultedAlbums: []
})

//  getter
export const getter = {
  GetAlbums: (state) => {
    return state.albums
  },
  GetModal: (state) => {
    return state.modal
  }
}

//  mutations
export const mutations = {
  SetAlbums (state, albums) {
    state.albums = albums
  },
  SetPaginas (state) {
    for (let index = 0; index < state.albums.length; index + 10) {
      state.paginas.push(index + 1)
    }
  },
  SetUser (state, value) {
    state.consulted.users = value
  },
  SetConsulted (state, userName) {
    state.modal = false
    let verify = false
    const newUser = {
      name: '',
      view: 0
    }

    for (let i = 0; i < state.users.length; i++) {
      if (userName === state.users[i].name) {
        state.modal = true
        if (state.consultedUsers.length === 0) {
          newUser.name = userName
          newUser.view = 1
          state.consultedUsers.push(newUser)
          verify = true
        } else {
          for (let user = 0; user < state.consultedUsers.length; user++) {
            if (userName === state.consultedUsers[user].name) {
              state.consultedUsers[user].view =
                state.consultedUsers[user].view + 1
              verify = true
            }
          }
          if (verify === false) {
            newUser.name = userName
            newUser.view = 1
            state.consultedUsers.push(newUser)
          }
        }
      }
    }

    if (!state.modal) {
      alert('No users')
      state.modal = true
    }
  },
  SetConsultedPictures (state, albumName) {
    let verify = false
    const newAlbum = {
      name: '',
      view: 0
    }

    if (state.consultedAlbums.length === 0) {
      newAlbum.name = albumName
      newAlbum.view = 1
      state.consultedAlbums.push(newAlbum)
      verify = true
    } else {
      for (let i = 0; i < state.consultedAlbums.length; i++) {
        if (albumName === state.consultedAlbums[i].name) {
          state.consultedAlbums[i].view = state.consultedAlbums[i].view + 1
          verify = true
        }
      }
      if (verify === false) {
        newAlbum.name = albumName
        newAlbum.view = 1
        state.consultedAlbums.push(newAlbum)
      }
    }
  },
  SetModal (state, value) {
    state.modal = value
  }
}
