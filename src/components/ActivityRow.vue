<template>
      <tr >
    <td>{{ record.date | shortDate }}</td>
     <td>{{ record.hours }}</td>
    <td>{{ record.type }}</td>
     <td>{{ record.medium }}</td>
     </tr>
</template>


<script>
export default {
    name: 'ActivityRow',
    props: {
        record:Object
    },
    methods: {
    activityRecords(record) {
        this.$emit('activityRecords', record)
    }
    }
}
</script>


<style scoped>

</style>