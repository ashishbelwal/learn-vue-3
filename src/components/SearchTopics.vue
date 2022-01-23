<template>
  <div class="search">
    <v-autocomplete
      v-model="model"
      :items="items"
      :loading="isLoading"
      :search-input.sync="search"
      chips
      dense
      filled
      clearable
      hide-details
      hide-selected
      item-text="name"
      item-value="symbol"
      label="Search topics"
    >
      <template v-slot:no-data>
        <v-list-item>
          <v-list-item-title> Enter Vue topic name... </v-list-item-title>
        </v-list-item>
      </template>

      <template v-slot:item="{ item }" class="searchDropdown">
        <v-list-item-content>
          <v-list-item-title v-text="item.name"></v-list-item-title>
        </v-list-item-content>
      </template>
    </v-autocomplete>
  </div>
</template>

<script>
export default {
  name: "SearchTopics",
  data: () => ({
    isLoading: false,
    items: [],
    model: null,
    search: null,
    tab: null,
  }),

  watch: {
    model(val) {
      if (val != null) this.tab = 0;
      else this.tab = null;
    },
    search() {
      // Items have already been loaded
      if (this.items.length > 0) return;

      this.isLoading = true;

      // Lazily load input items
      fetch("https://api.coingecko.com/api/v3/coins/list")
        .then((res) => res.clone().json())
        .then((res) => {
          this.items = res;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>
<style lang="scss">
.v-menu__content {
  max-width: 282px !important;
  min-width: 0;
  margin-left: 0px;
  max-width: 0%;
}
.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
  border-color: rgb(102 69 234) !important;
}
.theme--light.v-text-field--filled > .v-input__control > .v-input__slot {
  background: rgb(245 245 245) !important;
}
.search .primary--text {
  color: #6645ea !important;
  caret-color: #6645ea !important;
}
</style>
