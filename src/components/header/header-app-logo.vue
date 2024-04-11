<template>
  <img
      src="https://img.hhcdn.ru/employer-logo/3113545.png"
      loading="lazy"
      class="employer-sidebar__logo"
      alt="е.Ком"
      data-qa="company-logo-image"
      @click="welcomePage"
  >
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter();

function welcomePage() {
  router.push({ path: "/" });
}
</script>

<style scoped lang="scss">
.employer-sidebar__logo {
  height: 100%;
  margin: 0 4px 4px;
}
</style>
