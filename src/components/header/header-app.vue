<template>
  <div class="container-header">
    <div class="header">
      <HeaderAppLogo />

      <div class="header-buttons">
        <HeaderAppLocales class="button button-locales" />
        <HeaderAppTheme class="button button-theme" />
        <HeaderAppButtonMenu v-if="isMenuButton" class="button button-menu" />
      </div>
    </div>

    <HeaderAppMenu
        class="button menu"
        v-click-outside="openingAndClosingMenu"
        :class="isMenu ? 'menu__open' : 'menu__close'"
    />
  </div>
</template>

<script setup>
import HeaderAppLogo from "@/components/header/header-app-logo.vue";
import HeaderAppLocales from "@/components/header/header-app-locales.vue";
import HeaderAppTheme from "@/components/header/header-app-theme.vue";
import HeaderAppMenu from "@/components/header/header-app-menu.vue";
import HeaderAppButtonMenu from "@/components/header/header-app-button-menu.vue";
import {useRouter} from 'vue-router';
import {useStore} from 'vuex';
import {ref, computed} from "vue";

const router = useRouter()
const store = useStore()
const isMenu = computed(() => store.getters["authorizationModule/getIsMenu"])
const isMenuButton = ref(true)

router.beforeEach((to, from, next) => {
  isMenuButton.value = to.path === '/analytics';
  next();
});

function openingAndClosingMenu() {
  store.commit("authorizationModule/switchIsMenu", { condition: false })
}
</script>

<style lang="scss" scoped>
.container-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;

  .header {
    display: flex;
    height: 44px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid var(--additional-color);
    box-shadow: 0 4px 6px var(--shadow-color);
    background: var(--background-color);

    &-buttons {
      align-items: center;
      display: flex;
    }
  }

  .menu {
    position: absolute;
    right: 0;
    height: 100vh;
    //width: 100%;
    transition: transform 0.3s;
    background: var(--background-color);

    &__open {
      transform: translateX(0%);
    }

    &__close {
      transform: translateX(100%);
    }
  }
}
</style>
