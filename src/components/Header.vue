<template>
  <v-app-bar id="app-bar" absolute app color="white" flat height="57">
    <v-container fluid>
      <v-row justify="space-between" align="center" no-gutters>
        <v-col lg="2">
          <v-btn class="mr-3" elevation="0" fab small @click="toggleSidebar">
            <v-icon> mdi-dots-vertical </v-icon>
          </v-btn>
        </v-col>
        <v-col md="auto">
          <v-row>
            <v-img
              lazy-src="@/assets/logo.png"
              max-width="35px"
              src="@/assets/logo.png"
            ></v-img>
            <div class="mb-0 ml-4 text-h5 font-weight-medium text--primary">
              Learn Vue
            </div>
          </v-row>
        </v-col>
        <v-col lg="3">
          <SearchTopics />
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import eventBus from "../eventBus";
import SearchTopics from "./SearchTopics";
export default {
  name: "Header",
  components: {
    SearchTopics,
  },

  data: () => ({
    drawer: true,
    items: [
      { title: "Home", icon: "mdi-home-city" },
      { title: "My Account", icon: "mdi-account" },
      { title: "Users", icon: "mdi-account-group-outline" },
    ],
    mini: true,
  }),
  methods: {
    toggleSidebar: function () {
      eventBus.$emit("fireToggleSidebar");
    },
  },
};
</script>

<style lang="scss" scoped>
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #f5f5f5 !important;
}
</style>
