import axios from 'axios'

const base_url  = '/api/records'

// talks to our server
export default {

    getAllRecords(){
        return axios.get(base_url).then(response => {
            return response.data 
        })

    },

    addRecord(record) {
        return axios.post(base_url, record).then( response => {
            return response.data
        })
    },

    updateRecord(record) {
        return axios.patch(`${base_url}/${record.id}`, record).then(response =>{
            return response.data 
        })
    },
    deleteRecord(record) {
        return axios.delete(`${base_url}/${record.id}`, record).then(response=>{
            return response.data
        })
    }

}