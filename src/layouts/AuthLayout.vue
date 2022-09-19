<template>
  <q-layout class="items-center flex bg-grey-1">
    <q-page-container class="container q-mx-auto">
      <div class="left">
        <q-img src="~assets/auth_background.jpg" class="img"></q-img>
      </div>
      <div class="right">
        <router-view />
      </div>
    </q-page-container>
    <q-footer>

    </q-footer>
  </q-layout>
</template>

<!--
 <q-img src="~assets/auth_background.jpg" class="img"></q-img>
    <router-view />
 -->

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent ({
  name: "AuthLayout"
})
</script>
<style>
.container {
  width: 800px;
  height: 600px;
}
.left {
  width: 50%;
  height: 100%;
  float: left;
  box-sizing: border-box;
}
.right {
  width: 50%;
  height: 100%;
  float: right;
  box-sizing: border-box;
}
.img {
  width: 100%;
  height: 100%;
}
</style>
