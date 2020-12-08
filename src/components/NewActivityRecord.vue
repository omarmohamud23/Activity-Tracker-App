<template>
    <div>
     <!-- HTML HERE -->

        <!-- TODO display the name of the activity -->
        <h1 class="text-center"> {{activity}} Time Tracker</h1>

        <div id="add-hours" class="card">

            <h2 class="card-header">Add Records</h2>
            <div class="card-body">
               
                <!-- TODO use v-show to show this if there are validation errors -->
                <div class="alert alert-danger" v-show="errors.length > 0">
                    <!-- TODO show a list of validation errors from form -->
                    <li v-for="error in errors">{{ error }}</li>


                </div>

                <div class="form-group">
                    <!-- TODO display name of activity in the label -->
                    <!-- TODO use a filter to display the name of activity in lowercase -->
                    <label class="form-label" for="date">What date did you {{ activity | lowercase }}?</label>
                    <!-- TODO use v-model to connect this input to dateString data -->
                    <input id="date" class="form-control" type="date" v-model="dateString">
                    <small id="date-help" class="form-text text-muted">
                        Date must be today or in the past.
                    </small>
                </div>

                <div class="form-group">
                    <label class="form-label" for="hours">How many hours did you practice for?</label>
                    <!-- TODO use v-model to connect this input to hours data -->
                    <input id="hours" class="form-control" type="number" min="0" max="24" v-model.number="hours">
                    <small id="hours-help" class="form-text text-muted">
                        Enter a number of hours, more than 0, up to a maximum of 24
                    </small>
                </div>

                <div class="form-group">
                    <label class="form-label" for="type">What type?</label>
                    <!-- TODO Create select element, use v-model to connect to the types -->
                    <select class="form-control" v-model="type">
                        <option v-for="type in types">{{ type }}</option>
                    </select>
                    <!-- TODO Use v-for to create option elements, one for each type -->
                </div>

                <div class="form-label pb-2">
                    What media?
                </div>

                <div class="form-check-inline">
                    <!-- TODO v-model and v-bind media -->
                    <input id="media1" class="form-check-input" type="radio" v-bind:value="media.traditional"  v-model="medium">
                    <label class="form-check-label" for="media1">  {{ media.traditional }} </label>
                </div>

                <div class="form-check-inline">
                    <!-- TODO v-model and v-bind media -->
                    <input id="media2" class="form-check-input" type="radio" v-bind:value="media.digital" v-model="medium">
                    <label class="form-check-label" for="media2"> {{ media.digital }}  </label>
                </div>

                <div>
                    <!-- TODO Add v-on:click -->
                    <button class="btn btn-primary mt-2" type="button" v-on:click="submit">Add record</button>
                </div>
                
            </div>
        </div>


    </div>
</template>

<script>
export default {
    //create component here 
}
</script>

<style scoped>

</style>