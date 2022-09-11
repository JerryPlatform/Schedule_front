<template>
  <q-card class="main-card">
    <q-card-section class="card-header flex items-center relative">
      <div class="card-header__img-box q-pa-sm">
        <q-icon name="person" color="grey-7" size="4rem" ></q-icon>
      </div>
      <div class="card-header__info">
        <div class="card-header__info-name fs-175 text-weight-bold text-white">
          {{decodeToken().name}}
        </div>
        <div class="card-header__info-account fs-110 text-grey-4 text-weight-midium">
          <i>{{decodeToken().account}}</i>
        </div>
      </div>
    </q-card-section>
    <!-- <q-card-section>
      {{decodeToken()}}
    </q-card-section> -->
    <q-card-section class="text-center q-gutter-xs q-pa-xs">
      <q-btn
        dense
        outline
        label="마이페이지"
        color="primary"
        class="q-px-sm"
        size="0.8em"
        @click="onClickMypage()"
        v-if="!(this.deviceDetector().mobile)"
      >

      </q-btn>
      <q-btn
        dense
        label="로그아웃"
        color="primary"
        class="q-px-sm"
        size="0.8em"
        @click="onClickLogout"
      >

      </q-btn>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAuthStore } from 'src/stores/auth-store'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar';
import decodeToken from 'src/common/functions/DecodeToken';

export default defineComponent({
  name: 'UserInfo',
  setup() {
    const $store = useAuthStore();
    const $router = useRouter();
    const $q = useQuasar();

    function onClickLogout() {
      $store
        .logout()
        .then(() => {
          $q.notify({
            message: '로그아웃 되었습니다.',
            icon: 'done_all',
            color: 'primary'
          })
          $router.push({name: 'Login'});
        })
    }

    function onClickMypage() {
      $router.push({ path: '/user/save', query: { id: decodeToken().id } });
    }

    return {
      onClickLogout,
      onClickMypage
    }
  }
})
</script>

<style lang="sass" scoped>
.main-card
  width: 400px
  height: 145px
.card-header
  background: $teal-4
  &__img-box
    width: 80px
    height: 80px
    border-radius: 40px
    background: $grey-4
    display: flex
    align-items: center
    justify-content: center
    overflow: hidden
    border: 4px solid #fff
    margin-left: 8px
  &__info
    margin-left: 16px
  &__info-account
    margin-left: 4px
</style>
