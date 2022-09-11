<template>
  <!--  1 DEPTH  -->
  <q-item
    v-if="expansion.length === 0"
    clickable
    v-ripple
    :href="link"
    active-class="my-menu-link"
    :class="hidden ? 'blind' : ''"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon"></q-icon>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label v-if="!!caption" caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>

  <!-- 2 DEPTH -->
  <q-expansion-item
    v-else
    expand-separator
    clickable
    :content-inset-level="0.5"
    :label="title"
    :icon="icon"
    :caption="caption"
    :hidden="hidden"
    active-class="my-menu-link"
  >
    <div v-for="(item, index) in expansion" :key="`${title}-twoDepth-${index}`" class="items-center">
      <!-- 3 DEPTH -->
      <q-expansion-item
        v-if="item.expansion"
        expand-separator
        clickable
        :content-inset-level="0.5"
        :hidden="item.hidden"
        :label="item.title"
      >
        <q-item
          v-for="(threeDepth, threeDepthIndex) in item.expansion"
          :key="`${item.title}-threeDepth-${threeDepthIndex}`"
          v-bind="threeDepth"
          clickable
          v-ripple
          :href="threeDepth.link"
          active-class="my-menu-link"
          class="item-center items-center"
          :style="threeDepth.hidden ? 'display: none' : ''"
        >
          {{ threeDepth.title }}
        </q-item>
      </q-expansion-item>

      <q-item
        v-else
        v-bind="item"
        clickable
        v-ripple
        :href="item.link"
        active-class="my-menu-link"
        class="items-center"
        :style="expansion[index].hidden ? 'display: none' : ''"
      >
        {{ item.title }}
      </q-item>
    </div>
  </q-expansion-item>
</template>

<script lang="ts">
import { Expansion } from 'src/common/type/type.sideNav';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    hidden: {
      type: Boolean,
      default: false
    },

    link: {
      type: String,
      default: "#"
    },

    icon: {
      type: String,
      default: "",
    },

    threeDepthCheck: {
      type: Boolean,
      default: false
    },

    expansion: {
      type: Array as PropType<Expansion>,
      default: []
    }
  }
});
</script>

<style lang="sass" scoped>
.my-menu-link
  color: $primary
  font-weight: 700
</style>
