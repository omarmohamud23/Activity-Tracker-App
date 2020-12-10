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
                        <!-- TODO use v-for to create one table row for each activity record -->

                        <tr v-for="record in activityRecords">
                            <td>{{ record.date | shortDate }}</td>
                            <td>{{ record.hours }}</td>
                            <td>{{ record.type }}</td>
                            <td>{{ record.medium }}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>




    </div>
</template>

<script>
export default {
    //create component here 
    name: 'RecordsTable',
    props: {
        //display list of records
        record: Array
    },
    methods: {
        activityRecords(){
            //emit message to parent(app.vue)
        }
    }
}
</script>

<style scoped>

</style>