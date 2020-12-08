<template>
  <div id="app">
    
    <new-activity-record></new-activity-record>
    <records-table></records-table>
    <summary></summary>

  </div>
</template>

<script>
import NewActivityRecord from './components/NewActivityRecord.vue'
import RecordsTable from './components/RecordsTable.vue'
import Summary from './components/Summary.vue'


export default {
  name: 'App',
  components: {
    NewActivityRecord,
    RecordsTable,
    Summary
  }
}
</script>

<style>


</style>
