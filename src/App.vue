<template>
  <div class="container">
    <HeaderApp />

    <router-view class="content" />

    <FooterApp />
  </div>
</template>

<script setup>
import HeaderApp from "@/components/header/header-app.vue";
import FooterApp from "@/components/footer/footer-app.vue";
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--background-color);

  .content {
    margin-top: 200px;
  }
}
</style>
