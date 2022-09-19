<template>
  <q-layout class="items-center flex bg-grey-1">
    <q-page-container class="container q-mx-auto">
      <div class="left">
        <div class="left-img">
          <q-img src="~assets/auth-login-background1.png" class="sub-img" />
          <q-img src="~assets/auth-login-background2.png" class="sub-img" />
          <q-img src="~assets/auth-login-background3.png" class="sub-img" />
        </div>
      </div>
      <div class="right">
        <router-view />
      </div>
    </q-page-container>
    <q-footer>

    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import {defineComponent, onBeforeMount, ref} from 'vue'

export default defineComponent ({
  name: "AuthLayout",

  setup() {
    let imageIndex = 0;
    const imageClass = document.getElementsByClassName("sub-img") as HTMLCollectionOf<HTMLElement>;
    slideShow();

    function slideShow() {
      let i = 0;
      if (imageClass.length > 0) {
        for (i = 0; i < imageClass.length; i++) {
          imageClass[i].style.display = "none";
        }
        imageIndex++;
        if (imageIndex > imageClass.length - 1) {
          imageIndex = 0;
        }
        imageClass[imageIndex].style.display = "block";
      }
      setTimeout(slideShow, 3000);
    }
  },
})
</script>

<style>
.container {
  width: 900px;
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
.left-img {
  height: 100%;
  padding-top: 28px;
  background-image: url("src/assets/phone.png");
}
.sub-img {
  background-color: black;
  display: none;
  margin-left: 150px;
  width: 260px;
  height: 540px;
  border-radius: 5%;
}
</style>
