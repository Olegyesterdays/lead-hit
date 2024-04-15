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
import {onBeforeMount} from "vue";
import {useStore} from "vuex";

const store = useStore();

onBeforeMount(() => {
  store.dispatch("authorizationModule/installingTheTheme")
})
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--background-color);

  .content {
    margin-top: 200px;
  }
}
</style>
