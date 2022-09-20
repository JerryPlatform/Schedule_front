<template>
  <q-layout view="hHh LpR fFf">

    <q-header elevated class="bg-black" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>

          <q-tabs class="q-pa-md" align="center">
            <q-avatar size="md">
              <img src="~/assets/black-icon.png">
            </q-avatar>
            <q-route-tab to="/index" class="cursor-pointer" label="Page One" />
            <q-route-tab to="/userCalendar" label="Page Two" />
            <q-route-tab to="/index" label="Page Three" />
          </q-tabs>

        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
    </q-footer>

  </q-layout>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import { Depth } from 'src/common/type/type.sideNav';
import EssentialLink from 'components/EssentialLink.vue';
import decodeToken from 'src/common/functions/DecodeToken';
import UserInfo from 'src/components/UserInfo.vue';
import { useAuthStore } from "stores/auth-store";
import { useRouter } from "vue-router";

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    UserInfo
  },

  setup () {
    const $store = useAuthStore();
    const $router = useRouter();

    const essentialLinks = ref([]) as Ref<Depth[]>;
    const leftDrawerOpen = ref(false);
    const userChip = ref(false);

    return {
      essentialLinks,
      leftDrawerOpen,
      userChip,
    }
  }
});
</script>

<style lang="sass" scoped>
#q-app
  >.q-layout
    >.q-page-container
      >div
        max-height: calc(100vh - 100px)
        height: calc(100vh - 100px)
        overflow-y: auto
</style>

