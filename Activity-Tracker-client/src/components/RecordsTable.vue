<template>
    <div>
     <!-- HTML HERE -->
        
        <div class="card">
            <h2 class="card-header">Activity Records</h2>

            <div class="card-body">
            
             <div class="edit-table-toggle form-check">
               <input id="edit-Record" type="checkbox" class="form-check" v-model="editRecord">
               <label for="edit-Record" class="form-check-label">Edit Record?</label>
           </div>
           
           

                <h3> {{ totalRecords }} </h3>

                <div id="records">
                    <table class="table table-hover">
                        <tr>
                            <th>Date</th>
                            <th>How many hours?</th>
                            <th>Type</th>
                            <th>Media</th>
                            <th v-show="editRecord">Delete</th>
                        </tr>
                     <activity-row 
                     v-for="record in records"
                     v-bind:key="record.id"
                     v-bind:record="record"
                     v-on:delete-record="deleteRecord"
                     v-bind:edit="editRecord">
                            <td>{{ record.date }}</td>
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
    data(){
        return{
            editRecord: false
        }
    },
    methods: {
        activityRecords(){
            //emit message to parent(app.vue)
            this.$emit('new-record-added', this.record)
       },
       deleteRecord(){
           this.$emit('delete-record', record)
       }
    },
       computed: {
        totalRecords() {
        if (this.records.length == 1) {
        return '1 record'
         } else {
        return this.records.length + ' records '
         }
        }
        },
    filters:{
        lowercase(text) {
        return text.toLowerCase()
         },
        shortDate(date) {
       return new Intl.DateTimeFormat('en-US', { timeZone: 'UTC'}).format(date)
        }
    }
}
</script>

<style scoped>

</style>