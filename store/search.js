export const state = () => ({
	lastsearchs: []
})

// getters
export const getters = {
	lastsearchs(state) {
		return state.lastsearchs
	}
}

// mutations
export const mutations = {
	GET_LASTSEARCHES(state) {
      state.lastsearchs = JSON.parse(localStorage.getItem('lastsearchs'))
	},
	SAVE_LASTSEARCHES(state) {
      const parsed = JSON.stringify(state.lastsearchs)
      localStorage.setItem('lastsearchs', parsed)
	},
	DELETE_LASTSEARCHES(state) {
      localStorage.removeItem('lastsearchs')
      state.lastsearchs=[]
	},
	ADDTO_LASTSEARCHES(state, newSearch) {
      state.lastsearchs.push(newSearch)
	},
	REMOVE_LASTSEARCHES(state, x) {
    for (var i = 0; i < state.lastsearchs.length; i++)
      if (state.lastsearchs[i] === x) { 
          state.lastsearchs.splice(i, 1)
          break
      }

    if(state.lastsearchs.length>5)
      state.lastsearchs.shift()
	}
}

// actions
export const actions = {
    GetLastSearchs({ commit }) {
	    if (localStorage.getItem('lastsearchs')) {
	      try {
	      	commit('GET_LASTSEARCHES')
	      } catch(e) {
	      	commit('DELETE_LASTSEARCHES')
	      }
	    }
    },
    addSearch({ commit }, newSearch) {
      if (!newSearch) {
        return
      }
      commit('REMOVE_LASTSEARCHES',newSearch)
      commit('ADDTO_LASTSEARCHES',newSearch)
      commit('SAVE_LASTSEARCHES')
    },
    removeSearch({ commit }, x) {
      commit('REMOVE_LASTSEARCHES',x)
      commit('SAVE_LASTSEARCHES')
    }
}
