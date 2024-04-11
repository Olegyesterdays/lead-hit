<template>
  <div class="menu">
    <button class="button" @click="exit">
      {{ $t("menu.exit") }}
      <span class="mdi mdi-exit-to-app" />
    </button>
  </div>
</template>

<script setup>
import { useStore } from "vuex"
import { useRouter } from "vue-router";
import {computed, defineEmits} from "vue"

const store = useStore()

function exit() {
  store.dispatch("authorizationModule/logOutOfYourAccount")
}
</script>

<style scoped lang="scss">
.menu {
  position: absolute;
  display: flex;
  flex-direction: column;
  background: var(--background-color);
  border-left: 2px solid var(--additional-color);
  overflow: hidden;

  .button {
    padding: 8px;
    margin: 12px 12px 0;
    border-radius: 12px;
    border: 0;
    background: var(--main-color);
    color: var(--text-color);
    display: flex;
    align-items: center;

    &:last-child {
      margin-bottom: 12px;
    }

    .mdi {
      margin-left: 8px;
      font-size: 20px;
      color: var(--text-color);
    }
  }
}
</style>
