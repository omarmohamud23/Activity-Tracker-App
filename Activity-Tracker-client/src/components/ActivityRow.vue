<template>
      <tr >
    <td>{{ record.date | shortDate }}</td>
     <td>{{ record.hours }}</td>
    <td>{{ record.type }}</td>
     <td>{{ record.medium }}</td>
     <td v-show="edit"><img v-on:click="deleteRecord" src="@/assets/delete.png"></td>
     </tr>
</template>


<script>
export default {
    name: 'ActivityRow',
    props: {
        record:Object,
        edit:Boolean
    },
    methods: {
    activityRecords(record) {
        this.$emit('activityRecords', record)
    },
    deleteRecord() {
        if(confirm(`Delete ${this.record}?`))
        this.$emit('delete-record', this.record)
    }
    }
}
</script>


<style scoped>
img{
    height:30px;
}
</style>