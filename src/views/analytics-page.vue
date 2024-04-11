<template>
  <div class="analytics-page">
    <PageTitle />
    <ScheduleOfVisits />
  </div>
</template>

<script setup>
import PageTitle from "@/components/analytics-page/page-title.vue";
import ScheduleOfVisits from "@/components/analytics-page/schedule-of-visits.vue";
</script>

<style scoped>
.analytics-page {
  display: flex;
  flex-direction: column;
}
</style>
