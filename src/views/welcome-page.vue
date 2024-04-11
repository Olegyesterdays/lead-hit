<template>
  <div class="content-welcome-page">
    <div class="information">
      <InformationAboutMe />
      <InformationAboutTheProject />
    </div>

    <ButtonAuthorization />
  </div>
</template>

<script setup>
import InformationAboutMe from "@/components/welcome-page/information-about-me.vue";
import InformationAboutTheProject from "@/components/welcome-page/information-about-the-project.vue";
import ButtonAuthorization from "@/components/welcome-page/button-authorization.vue";
</script>

<style lang="scss" scoped>
.content-welcome-page {
  margin: auto;
  width: 1000px;
  display: flex;
  align-items: center;

  .information {
    margin-right: 20px;
    display: flex;
    flex-direction: column;
  }
}

@media screen and (max-width: 1012px) {
  .content-welcome-page {
    width: 100%;
    margin: 0 12px;
    flex-direction: column;

    .information {
      text-align: center;
    }
  }
}
</style>
