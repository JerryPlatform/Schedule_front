<template>
  <q-page-container>
    <q-page class="items-center flex">
      <q-card class="main-card q-mx-auto">
        <q-card-section class="text-center text-weight-bold text-h4 q-my-lg">
          LOGIN
        </q-card-section>
        <q-card-section class="q-py-none q-px-xl">
          <q-form ref="loginForm" @submit.passive="onSubmit" class="q-gutter-sm">
            <q-input
              placeholder="아이디"
              v-model="userId"
              input-class="q-px-md"
              filled
            >
              <span class="blind"></span>
            </q-input>
            <q-input
              placeholder="비밀번호"
              v-model="userPassword"
              :type="showPasswordFlag ? 'text' : 'password'"
              input-class="q-px-md"
              filled
            >
              <template #append>
                <q-icon
                  :name="showPasswordFlag ? 'visibility' : 'visibility_off'"
                  class="cursor-pointer q-px-md"
                  @click="() => { showPasswordFlag = !showPasswordFlag; }"
                >
                </q-icon>
              </template>
              <span class="blind"></span>
            </q-input>

            <div class="flex justify-center items-center q-px-xl q-pt-lg">
              <q-btn
                label="로그인"
                type="submit"
                color="primary"
                class="full-width text-bold text-subtitle1"
              >

              </q-btn>
            </div>

          </q-form>
        </q-card-section>
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

    const userId = ref('');
    const userPassword = ref('');
    const showPasswordFlag = ref(false);

    function onSubmit() {
      $store
        .login({
          account: userId.value,
          password: userPassword.value
        })
        .then((content) => {
          if (content.token === null) {
            alert("2차 로그인 필요");
          } else {
            $q.notify({
              message: "로그인 되었습니다.",
              icon: "doen_all",
              color: "primary",
            });
            $router.push('/userCalendar')
          }
        })
    }

    return {
      userId,
      userPassword,
      showPasswordFlag,
      onSubmit,
    }
  }
})

</script>

<style lang="scss" scoped>
.main-card {
  width: 500px;
  height: 400px;
}
</style>
