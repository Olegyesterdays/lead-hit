<template>
  <label>
    <span>
      {{ $t("authorization-page.form.site-ID")}}
    </span>
    <input
        type="text"
        @input="recordID($event.target.value)"
    />
  </label>
</template>

<script setup>
import { defineEmits } from "vue";
const emit = defineEmits()

function recordID(id) {
  emit("update:recordID", id);
}
</script>

<style scoped lang="scss">
label {
  display: flex;
  flex-direction: column;

  span {
    color: var(--text-color-accent);
  }

  input {
    margin: 4px 0;
    width: auto;
    padding: 12px;
    border-radius: 12px;
    border: 2px solid var(--main-color);
    background: var(--background-color);
    color: var(--text-color-accent);
  }
}
</style>
