import axios from 'axios';


const ClientAPI = {

  login: async (email, password) => {
    return axios
      .post('https://dontnod-server.vercel.app/api/login', {
        email: email,
        password: password
      })
      .then(response => {
        return response.data;
      })
  },
  
  signUp: async (username, email, password) => {
    return axios.post('https://dontnod-server.vercel.app/api/signup', {
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
      const response = await axios.get (`https://dontnod-server.vercel.app/api/user/${userId}`)
      // console.log(response.data);
      return response
    } catch(err) {
      console.error();
    }
  },

  logout: async () => {
    return await axios.post('https://dontnod-server.vercel.app/api/logout')
    .then(response => {
      return response.data
    })
  },

  videogames: () => {
    return axios.get('https://dontnod-server.vercel.app/api/listGames');
  },

  addFavorites: async (gameId, userId) => {
    try {
        const response = await axios.post(`https://dontnod-server.vercel.app/api/listGames/${gameId}/add`, {
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
    const response = await axios.post(`https://dontnod-server.vercel.app/api/listGames/${gameId}/remove`, {
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
      const response = await axios.get(`https://dontnod-server.vercel.app/api/listFavorites/${userId}`)
      return response.data
    } catch(error) {
      console.error();
    }
  },

  minigames: () => {
    return axios.get('https://dontnod-server.vercel.app/api/auth')
  }
};

export default ClientAPI;