<template>
  <div class="content-not-found-page">
    <h1>
      404 - {{ $t("not-found-page.header") }}
    </h1>

    <p>
      {{ $t("not-found-page.description") }}
    </p>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.content-not-found-page {
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 200px;
  }
}
</style>
