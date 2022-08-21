<template>
  {{ dat }}
  <q-btn label="테스트" @click="tests"></q-btn>
</template>

<script>
export default {
  name: "userCalendar",
  data() {
    return {
      dat: 'hi',
    }
  },
  methods: {
    async tests() {
      await this.apiController('GET', 'v1/member/all')
        .then(value => {
          this.dat = value;
        })
    }
  }
}
</script>

<style scoped>

</style>
