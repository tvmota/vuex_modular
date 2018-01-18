import axios from 'axios'

const setList = async ({ commit }, obj) => {
  const list = (await axios.get('https://jsonplaceholder.typicode.com/users')).data
  commit('SET_LIST', { list })
}

export default {
  setList
}
