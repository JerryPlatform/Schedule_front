<template>
  <q-card class="main-card q-my-lg">
    <q-card-section class="text-center q-pt-xl text-bold text-h4">
      <a style="cursor: pointer">ππππππ£πππ</a>
    </q-card-section>
    <q-card-section class="q-px-xl">
      <q-form @submit="onSubmit" class="q-gutter-sm">
        <q-input
          placeholder="μ¬μ©μ κ³μ "
          v-model="userId"
          input-class="q-px-md"
          filled
        >
        </q-input>
        <q-input
          placeholder="λΉλ°λ²νΈ"
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
        </q-input>

        <div class="q-pt-md">
          <q-btn
            label="λ‘κ·ΈμΈ"
            type="submit"
            color="light-blue-7"
            class="full-width text-bold text-subtitle1"
          >
          </q-btn>
        </div>
        <div class="line">
          λλ
        </div>
        <div class="text-center">
          <a class="text-bold" style="cursor: pointer; color: darkblue">λΉλ°λ²νΈ μ°ΎκΈ°</a>
        </div>
      </q-form>
    </q-card-section>
  </q-card>
  <q-card class="sub-card">
    <div class="q-pt-md" style="text-align: center">κ³μ μ΄ μμΌμ κ°μ? <a class="text-bold"
                                                                  style="cursor: pointer; color: darkblue;">κ°μνκΈ°</a>
    </div>
  </q-card>
  <div class="sub-card q-pt-md text-center">
    <p>μ±μ λ€μ΄λ‘λ νμΈμ</p>
    <q-img src="~assets/googlePlay-download-icon.png" class="img"/>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {useAuthStore} from "src/stores/auth-store";
import {useQuasar} from "quasar";
import {useRouter} from 'vue-router';

export default defineComponent({
  name: "login",
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
          if (content) {
            $q.notify({
              message: 'λ‘κ·ΈμΈ μ±κ³΅',
              color: 'green-4',
              textColor: 'white',
              icon: 'check_circle',
              position: 'bottom'
            });
            $router.push('/userCalendar');
          } else {
            $q.notify({
              message: 'ν¨μ€μλλ₯Ό μλͺ» μλ ₯νμμ΅λλ€.',
              color: 'red-4',
              textColor: 'white',
              icon: 'error',
              position: 'bottom'
            });
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
  margin-left: 30px;
  width: 400px;
  height: 400px;
}

.sub-card {
  margin-left: 30px;
  width: 400px;
  height: 50px;
}

.line {
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.35);
  margin: 15px 0px;
}

.line::before,
.line::after {
  content: "";
  flex-grow: 1;
  background: rgba(0, 0, 0, 0.35);
  height: 1px;
  margin: 0px 16px;
}

.img {
  border-radius: 10%;
  width: 50%;
  height: 50px;
}
</style>
