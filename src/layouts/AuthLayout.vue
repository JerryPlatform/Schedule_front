<template>
  <q-layout>
    <q-img src="~assets/auth_background.jpg" class="tests"></q-img>
    <router-view style="z-index: -1" />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent ({
  name: "AuthLayout"
})
</script>
<style>
.tests {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.8;
}
</style>
