<template>
  <button
      class="button locales"
      @click.stop="toggleLanguage"
  >
    {{ language }}
  </button>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import {ref} from "vue";

const { locale } = useI18n();
const language = ref(locale.value)

function toggleLanguage() {
  locale.value = locale.value === 'ru' ? 'en' : 'ru';
  language.value = locale.value
}
</script>

<style scoped lang="scss">
.button {
  border: 0;
  padding: 0 12px;
  border-radius: 8px;
  width: auto;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  background: var(--main-color);
  color: var(--text-color);
  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
}
</style>
