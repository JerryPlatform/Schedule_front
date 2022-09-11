<template>
  <q-layout view="lHh Lpr lFf" @mousedown="downMouse">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <span @click="$router.push('/')" class="cursor-pointer">
            Condition
          </span>
        </q-toolbar-title>

        <q-btn class="bg-white" text-color="dark" icon="account_circle" @click.prevent="() => {userChip = !userChip}">
          <span class="q-mx-sm text-weight-bold">
            {{decodeToken().name}} 님 반갑습니다.
          </span>

          <q-menu :offset="[-2, 5]">
            <UserInfo />
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey">
      <q-toolbar class="text-caption">
        Copyright 2022. JerryPlatform
      </q-toolbar>
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

const linksList: Array<Depth> = [
  {
    title: '컨디션',
    caption: 'quasar.dev',
    icon: 'edit_calendar',
    expansion: [
      {
        title: '달력1',
        link: '/userCalendar1'
      },
      {
        title: '달력2',
        link: '/userCalendar2'
      }
    ]
  },
  {
    title: '옵션2',
    caption: 'quasar.dev',
    icon: 'content_paste_search',
    link: '/userCalendar'
  },
  {
    title: '옵션3',
    caption: 'quasar.dev',
    icon: 'content_paste_search',
    link: '/userCalendar'
  }
];

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

    essentialLinks.value = linksList;

    function toggleLeftDrawer () {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    async function downMouse() {

      if(!$store.isValidity) {
        await $store.logout();
        await $router.push({name: 'Login'});
        alert("인증이 만료되었습니다. 다시 로그인해 주세요.");
      }
    }

    return {
      essentialLinks,
      leftDrawerOpen,
      userChip,

      toggleLeftDrawer,
      downMouse

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

