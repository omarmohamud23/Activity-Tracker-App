<template>
    <div>
     <!-- HTML HERE -->
        
        <div class="card">
            <h2 class="card-header">Activity Records</h2>

            <div class="card-body">

                <h3> {{ totalRecords }} </h3>

                <div id="records">
                    <table class="table table-hover">
                        <tr>
                            <th>Date</th>
                            <th>How many hours?</th>
                            <th>Type</th>
                            <th>Media</th>
                        </tr>
                        <activity-row v-for="record in records" v-bind:record="record">
                            <td>{{ record.date | shortDate }}</td>
                            <td>{{ record.hours }}</td>
                            <td>{{ record.type }}</td>
                            <td>{{ record.medium }}</td>
                        </activity-row>
                    </table>
                </div>
            </div>
        </div>




    </div>
</template>

<script>
import ActivityRow from './ActivityRow.vue'
export default {
  components: { ActivityRow },
    //create component here 
    name: 'RecordsTable',
    props: {
        //display list of records
        records: Array
    },
    methods: {
        // activityRecords(){
        //     //emit message to parent(app.vue)
        //     this.$emit('new-record-added', this.record)
        // }
    }
}
</script>

<style scoped>

</style>