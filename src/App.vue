<template>
  <div id="app">
    
    <new-activity-record v-on:record-added="newRecordAdded"></new-activity-record>
    <records-table v-bind:records="records"></records-table>
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
      records: []
    }
  },
  methods:{
    newRecordAdded(record) {
      this.records.push(record)
      this.records.sort(function(r1,r2){
      return r2.date.getTime() - r1.date.getTime()
      })
       }
    }
  }
</script>

<style>


</style>
