<template>
  <div class="content-form-auth">
    <h1>
      LeadHit
    </h1>
    <InputID @update:recordID="recordID($event)" @keyup.enter="pushID"/>
    <div class="error-message" v-if="!correctID">
      {{ $t(`authorization-page.form.error-message.${typeError}`)}}
    </div>
    <SendButton @click="pushID"/>
  </div>
</template>

<script setup>
import InputID from "@/components/authorization-page/input-ID.vue";
import SendButton from "@/components/authorization-page/send-button.vue";
import {ref} from "vue";
import {useStore} from "vuex";

const store = useStore();
const iDEnteredByTheUser = ref("");
const errorMessage = ref("");
const typeError = ref("")
const correctID = ref(true)

function recordID(id) {
  iDEnteredByTheUser.value = id
  correctID.value = true
}

function checkString(inputString) {
  if (inputString.length !== 24) {
    return typeError.value = "id-length";
  }

  const regex = /^(?=.*[0-9])(?=.*[a-z])[0-9a-z]{24}$/;

  if (!regex.test(inputString)) {
    return typeError.value = "invalid-id";
  }

  return "";
}

function pushID() {
  errorMessage.value = checkString(iDEnteredByTheUser.value)

  if (errorMessage.value === "") {
    store.dispatch("authorizationModule/logInToYourAccount", iDEnteredByTheUser.value);
  } else {
    correctID.value = false
  }
}
</script>

<style scoped lang="scss">
.content-form-auth {
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-radius: 12px;
  margin: 64px auto;
  width: 500px;
  border: 4px solid var(--main-color);

  h1 {
    margin: 4px auto 12px;
    color: var(--text-color-accent);
  }

  .error-message {
    margin: auto;
    color: var(--accent-color);
  }
}
</style>
