<template>
  <q-layout>
    <q-img src="~assets/auth_background.jpg" class="img"></q-img>
    <router-view />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent ({
  name: "AuthLayout"
})
</script>
<style>
.img {
  position: absolute;
  opacity: 0.8;
}
</style>
