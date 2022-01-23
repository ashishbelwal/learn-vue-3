<template>
  <v-card>
    <v-navigation-drawer
      id="core-navigation-drawer"
      v-model="drawer"
      :right="$vuetify.rtl"
      app
      width="260"
      class="deep-purple accent-4"
      dark
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <v-btn icon @click="toggleSidebar">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import eventBus from "../eventBus";
export default {
  name: "Sidebar",

  data: () => ({
    drawer: true,
    items: [
      { title: "Vue Basics", to: "/" },
      { title: "Hello World", to: "/hello-world" },
      { title: "Project Structure", to: "/project-structure" },
      // { title: "Single File Component", to: "/" },
      { title: "Binding Text", to: "/binding-directives" },
      { title: "Binding HTML", to: "/" },
      { title: "Binding to Attributes", to: "/" },
      { title: "Binding to Classes", to: "/" },
      { title: "Binding to Styles", to: "/" },
      { title: "Conditional Rendering", to: "/" },
      { title: "List Rendering", to: "/" },
      { title: "Methods", to: "/" },
      { title: "Event Handling", to: "/" },
      { title: "Form Handling", to: "/" },
      { title: "Modifiers", to: "/" },
      { title: "Computed Properties", to: "/" },
      { title: "Watchers", to: "/" },
      { title: "Immidiate and Deep Watchers", to: "/" },
      { title: "Components", to: "/" },
      { title: "Component Props", to: "/" },
      { title: "Prop Types and Validations", to: "/" },
      { title: "Non Props Attributes", to: "/" },
      { title: "Provide and Inject", to: "/" },
      { title: "Component Event", to: "/" },
      { title: "Validating Emmited Events", to: "/" },
      { title: "Components and v-model", to: "/" },
      { title: "Slots", to: "/" },
      { title: "Component Styles", to: "/" },
      { title: "Dynamic Components", to: "/" },
      { title: "Teleport Component", to: "/" },
      { title: "HTTP and Vue", to: "/" },
      { title: "Lifecycle Hooks" },
      { title: "Get Request on Page Load", to: "/" },
      { title: "Template Refs", to: "/" },
      { title: "Reusability with Mixins", to: "/" },
      { title: "Composition API", to: "/" },
      { title: "Replacing Data with Ref", to: "/" },
      { title: "Replacing Data with Reactive", to: "/" },
      { title: "Reactivity and toRefs", to: "/" },
      { title: "Replacing methods", to: "/" },
      { title: "v-model and Composition API", to: "/" },
      { title: "Replacing Computed Properties", to: "/" },
      { title: "Replacing Watchers", to: "/" },
      { title: "Replacing Provide/Inject", to: "/" },
      { title: "Replacing Lifecycle Hooks", to: "/" },
      { title: "Template Refs and Composition API", to: "/" },
      { title: "Props and Composition API", to: "/" },
      { title: "Custom Events and Composition API", to: "/" },
      { title: "Reusability with Composition API", to: "/" },
      { title: "Deploying Vue Application", to: "/" },
    ],
  }),
  mounted() {
    eventBus.$on("fireToggleSidebar", () => {
      this.toggleSidebar();
    });
  },
  beforeDestroy() {
    // removing eventBus listener
    eventBus.$off("fireToggleSidebar");
  },
  methods: {
    toggleSidebar: function () {
      this.drawer == true ? (this.drawer = false) : (this.drawer = true);
    },
  },
};
</script>
<style lang="scss" scoped>
.v-navigation-drawer {
  border-radius: 0 !important;
}
</style>
