<template>
  <q-page-container class="flex items-center justify-center text-center q-pa-md">
    <q-page class="card-container">
      <q-card class="card-container q-py-xl q-px-lg">
        <div class="text-h5 text-bold q-pb-lg">
          스마트팜 관리자 시스템
        </div>
        <q-form>
          <q-input
            filled
            v-model="userId"
            label="아이디"
            hint="아이디를 입력해주세요."
            :rules="[
              val => (val && val.length > 0) || '아이디가 입력되지 않았습니다.'
            ]"
          />
          <q-input
            filled
            v-model="userPassword"
            type="password"
            label="비밀번호"
            hint="비밀번호를 입력해주세요"
            :rules="[
              val =>
                (val !== null && val !== '') ||
                '비밀번호가 입력되지 않았습니다.'
            ]"
          />

        </q-form>
      </q-card>

    </q-page>
  </q-page-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useAuthStore } from "src/stores/auth-store";
import { useQuasar } from "quasar";
import { useRouter } from 'vue-router';

export default defineComponent({
  name: "Login",
  setup() {
    const $store = useAuthStore();
    const $router = useRouter();
    const $q = useQuasar();
  },
  data() {
    return {
      userId: "",
      userPassword: ""
    }
  }
})

</script>

<style lang="scss" scoped>
.otp-enter-from{opacity:0;}
.otp-enter-active{transition: all 0.4s;}
.otp-enter-to{opacity:1;}
</style>
