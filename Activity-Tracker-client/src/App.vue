<template>
  <div id="app">
    
    <new-activity-record 
    v-on:record-added="newRecordAdded" 
    v-bind:types="types" 
    v-bind:media="media" 
    v-bind:activity="activity">
    </new-activity-record>
    <records-table v-bind:records="records" 
     v-on:delete-record="recordDeleted"></records-table>
    <activity-row></activity-row>
    <summary-message></summary-message>

  </div>
</template>

<script>
import NewActivityRecord from './components/NewActivityRecord.vue'
import RecordsTable from './components/RecordsTable.vue'
import ActivityRow from  './components/ActivityRow.vue'
import SummaryMessage from './components/SummaryMessage.vue'



export default {
  name: 'App',
  components: {
    NewActivityRecord,
    RecordsTable,
    SummaryMessage,
    ActivityRow
  },
  data(){
    return{
      records: [],
      activity: 'Dog Activities',
      types: ['Tour the City', 'Swim Together', 'Walk on the balcony', 'Go To the Park'],
      media: {Indoor:'Indoor Activities',  Outdoor: 'Outdoor Activities'}
    }
  },
  methods:{
    newRecordAdded(record) {
      this.records.push(record)
      this.records.sort(function(r1,r2){
      return r2.date.getTime() - r1.date.getTime()
      })
       },
       recordDeleted(record){
         //filter return a new array of all records
        this.records = this.records.filter(function(s){
          if (s != record) {
            return true
          }
        })
       }
    }
  }
</script>

<style>


</style>
