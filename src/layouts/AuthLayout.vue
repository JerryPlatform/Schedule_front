<template>
  <q-layout class="bg-primary">
    <router-view />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent ({
  name: "AuthLayout"
})
</script>

<style lang="sass">
.card-container
  width: 500px
.card-container.modal
  width: 450px
.text-decoration-none
  text-decoration: none
  text-indent: inherit
  color: #000
input[type="number"]::-webkit-inner-spin-button
  -webkit-appearance: none

</style>
