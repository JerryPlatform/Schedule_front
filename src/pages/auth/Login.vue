<template>
  <q-page-container>
    <q-page>

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


  }
})

</script>

<style lang="sass" scoped>

</style>
