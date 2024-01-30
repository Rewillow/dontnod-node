import axios from 'axios';


const ClientAPI = {

  login: async (email, password) => {
    return axios
      .post('/api/login', {
        email: email,
        password: password
      })
      .then(response => {
        return response.data;
      })
  },
  
  signUp: async (username, email, password) => {
    return axios.post('/api/signup', {
        username: username,
        email: email,
        password: password
      })
      .then(response => {
        return response.data;
      })
  },

  user: async (userId) => {
    try {
      const response = await axios.get (`/api/user/${userId}`)
      // console.log(response.data);
      return response
    } catch(err) {
      console.error();
    }
  },

  logout: async () => {
    return await axios.post('/api/logout')
    .then(response => {
      return response.data
    })
  },

  videogames: () => {
    return axios.get('/api/listGames');
  },

  addFavorites: async (gameId, userId) => {
    try {
        const response = await axios.post(`/api/listGames/${gameId}/add`, {
            userId: userId
        });
        return response.data;
    } catch (error) {
        console.error('Errore durante l\'aggiunta ai preferiti:', error.message);
        throw error;
    }
},

 removeFavorites: async(gameId, userId) => {
  try {
    const response = await axios.post(`/api/listGames/${gameId}/remove`, {
      userId: userId
    })
    return response.data
  } catch(error) {
    console.error("Errore durante la rimozione dai preferiti", error.message);
    throw error
  }
 },
  
  // rememberFavorites: () => {
  //   return axios.get('/api/listFavorites')
  // },

  rememberFavorites: async(userId) => {
    try {
      const response = await axios.get(`/api/listFavorites/${userId}`)
      return response.data
    } catch(error) {
      console.error();
    }
  },

  minigames: () => {
    return axios.get('/api/auth')
  }
};

export default ClientAPI;