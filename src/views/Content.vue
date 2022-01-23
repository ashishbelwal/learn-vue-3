<template>
  <v-main id="content">
    <router-view />
  </v-main>
</template>

<script>
export default {
  name: "Content",
  components: {},
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
#content {
  min-height: 100vh;
}
</style>
