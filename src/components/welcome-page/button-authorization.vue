<template>
  <button @click="authorization">
    {{ $t("welcome-page.button-authorization") }}

    <span class="mdi mdi-account-circle-outline" />
  </button>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter();

function authorization() {
  router.push({ path: "/authorization" });
}
</script>

<style scoped lang="scss">
button {
  width: 100%;
  font-size: 40px;
  height: 64px;
  border: 0;
  border-radius: 24px;
  background: var(--main-color);
  color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  text-align: center;

  .mdi {
    margin-left: 16px;
    font-size: 40px;
    color: var(--text-color);
  }
}

@media screen and (max-width: 1012px) {
  button {
    width: auto;
  }
}
</style>
