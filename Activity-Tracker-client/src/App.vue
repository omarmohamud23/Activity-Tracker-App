<template>
  <div id="app">
    
    <!-- listing all the 3 componenets -->
    <new-activity-record 
    v-on:record-added="newRecordAdded" 
    v-bind:types="types" 
    v-bind:media="media" 
   >
    </new-activity-record>
    <records-table v-bind:records="records" 
     v-on:delete-record="recordDeleted"
     ></records-table>
    <summary-message v-bind:records="records" ></summary-message>

  </div>
</template>

<script>

//import 3 new files that we just made 
import NewActivityRecord from './components/NewActivityRecord.vue'
import RecordsTable from './components/RecordsTable.vue'
import SummaryMessage from './components/SummaryMessage.vue'



export default {
  name: 'App',
  components: {
    //list all of the child componenets here
    NewActivityRecord,
    RecordsTable,
    SummaryMessage
    
  },
  data(){
    return{
      records: [],
      activity: 'Dog Activities',
      types: ['Tour the City', 'Swim Together', 'Walk on the balcony', 'Go To the Park'],
      media: {Indoor:'Indoor Activities',  Outdoor: 'Outdoor Activities'}
    }
  },
    mounted(){
      this.updateRecord()
    },
    methods:{
    newRecordAdded(record){
      //tell server to add new record
      console.log(record)
    this.$record_api.addRecord(record).then( record => {
      this.updateRecord()
    }).catch(err => {
     let message = err.response.data.join(',')
    alert('Error adding  your record, Please add a different one', message)
        })
      },
       recordDeleted(record){
      this.$record_api.deleteRecord(record).then ( () =>{
        this.updateRecord()
      })
    },
    updateRecord(){
      this.$record_api.getAllRecords().then( records =>{
        this.records = records
      })
    }
    }
    
  
      }
    
</script>

<style>


</style>
