<template>
  <button
      class="button-menu"
      :class="isMenu ? 'button-menu__open' : ''"
      @click.stop="openingAndClosingMenu"
  >
    <span />
  </button>
</template>

<script setup>
import { computed } from "vue"
import { useStore } from 'vuex';

const store = useStore()
const isMenu = computed(() => store.getters["authorizationModule/getIsMenu"])

function openingAndClosingMenu() {
  store.commit("authorizationModule/switchIsMenu", { condition: !isMenu.value })
  console.log("OK")
}
</script>

<style lang="scss" scoped>
.button-menu {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--main-color);
  border-radius: 8px;
  width: 32px;
  height: 32px;
  margin-right: 12px;
  border: 0;

  span {
    transition-duration: 0s;
    transition-delay: 0.2s;

    &:before, &:after {
      transition-property: margin, transform;
      transition-duration: 0.2s;
      transition-delay: 0.2s, 0s;
      position: absolute;
      content: '';
    }

    &, &:before, &:after {
      width: 16px;
      height: 2px;
      background-color: var(--text-color);
      display: block;
    }

    &:before {
      margin-top: -8px;
    }

    &:after {
      margin-top: 8px;
    }
  }

  &__open span {
    background-color: rgba(0, 0, 0, 0.0);

    &:before {
      margin-top: 0;
      transform: rotate(45deg);
      transition-delay: 0s, 0.2s;
    }

    &:after {
      margin-top: 0;
      transform: rotate(-45deg);
      transition-delay: 0s, 0.2s;
    }
  }
}
</style>
