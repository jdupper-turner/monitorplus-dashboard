const axios = require('axios').default

export const getNetworksApi = async () => {
   return await axios.get('http://localhost:5000/Networks')
}