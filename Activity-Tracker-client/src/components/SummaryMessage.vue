<template>
    <div>
     <!-- HTML HERE -->

     <div class="card">
            <h2 class="card-header">Summary</h2>

            <div class="card-body">

                <!-- TODO add computed property to calculate the total hours -->
                <p>You have practiced a total of {{ totalHours }} hours</p>

                
          
            </div>
        </div>
    </div>
</template>

<script>

export default {
    //create component here
    name: 'SummaryMessage',
    props: {
        records: Object   // make sure this contains the records array
    }

    // add computed property totalHours here
}
</script>

<style scoped>

</style>