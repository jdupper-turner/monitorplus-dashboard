const axios = require('axios').default

export const getReconStatusApi = async () => {
   return await axios.get('http://localhost:5000/ReconStatus')
}