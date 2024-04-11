<template>
  <h1 class="information-about-the-project">
    {{ $t("welcome-page.information-about-the-project.annotation")}}

    <a href="https://docs.google.com/document/d/1kkBaZYmehNVgCMd76jdbvL8zTxgMsg63VWnDWdTdkiY/edit">
      {{ $t("welcome-page.information-about-the-project.the-importance-of-the-project")}}
    </a>

    {{ $t("welcome-page.information-about-the-project.vacancy")}}

    <a href="https://sarmakovo.hh.ru/vacancy/95971662?hhtmFrom=chat">
      {{ $t("welcome-page.information-about-the-project.name-work")}}
    </a>
  </h1>
</template>

<script setup>

</script>

<style scoped lang="scss">
.information-about-the-project {
  color: var(--text-color-accent);

  a {
    text-decoration: none;
    color: var(--main-color);
  }
}
</style>
