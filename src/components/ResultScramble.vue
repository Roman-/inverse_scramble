<script setup>
import {computed, ref} from "vue";
import {inverse_scramble} from "@/inverser";

const scramble = ref("");
const inversed = computed(() => inverse_scramble(scramble.value));
const copiedText = ref("");
const clipIconName = computed(() => {
  return copiedText.value.length > 0
  && copiedText.value === inversed.value
      ? "bi-clipboard-check-fill"
      : "bi-clipboard"
});
const copyScramble = ()=>{
  navigator.clipboard.writeText(inversed.value).then(
      ()=>{copiedText.value = inversed.value},
      ()=>{copiedText.value = ""},
  );
}

</script>

<template>
  <input
      type="text"
      v-model.trim="scramble"
      placeholder="Enter scramble, press Enter…"
      @keyup.enter="copyScramble"
      autofocus
  >
  <div class="container">
    <div class="text-wrap">
      <div class="text">{{inversed}}</div>
    </div>
    <button @click="copyScramble">
      <v-icon :name="clipIconName" class="copyBtn" scale="1.5"/>
    </button>
  </div>
</template>

<style scoped>
input {
  width: 100%;
  border: 1px solid #181818;
  font-size: 2em;
  border-radius: 5px;
}
.container {
  background-color: #f5f5f5;
  display: flex;
  margin-top: 0.5em;
  border-radius: 3px;
}
.text-wrap {
  flex: 1;
  color: #181818;
}
.text {
  margin: 0.3em 0.3em;
  font-size: 2em;
  min-height: 1em;
}
.copyBtn {
  color: #181818;
  margin: 0 0.5em;
  cursor: pointer;
}
</style>