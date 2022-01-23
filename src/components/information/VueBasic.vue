<template>
  <v-container>
    <v-banner class="text-h6"> Vue Basics </v-banner>

    <!-- What is vue? -->

    <div class="topicContent">
      <div class="topicTitle format">What is vue?</div>
      <div class="topicDescription format">
        <p>
          Vue js is progressive javascript script used to create dynamic user
          interfaces.Vue js is very easy to learn.In order to work with Vue js
          you just need to add few dynamic features to a website.
        </p>
      </div>
    </div>

    <!-- List some of features of Vue.js -->

    <div class="topicContent">
      <div class="topicTitle format">List some of features of Vue.js</div>
      <div class="topicDescription format">
        <p>Vue js comes with following features</p>
        <v-list-item-group>
          <v-list-item>Templates</v-list-item>
          <v-list-item>Reactivity</v-list-item>
          <v-list-item>Components</v-list-item>
          <v-list-item>Transitions</v-list-item>
          <v-list-item>Routing</v-list-item>
        </v-list-item-group>
      </div>
    </div>

    <!-- Vue Lifecycle -->

    <div class="topicContent">
      <div class="topicTitle format">Vue Lifecycle</div>
      <div class="topicDescription format">
        <v-card>
          <v-tabs vertical>
            <v-tab> beforeCreate </v-tab>
            <v-tab> created </v-tab>
            <v-tab> beforeMount </v-tab>
            <v-tab> mounted </v-tab>
            <v-tab> beforeUpdate </v-tab>
            <v-tab> updated </v-tab>
            <v-tab> beforeDestroy </v-tab>
            <v-tab> destroyed </v-tab>

            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p class="mt-6">
                    The beforeCreate hook runs at the initialization of your
                    component - data has not been made reactive, and events have
                    not been set up yet:
                  </p>
                  <ssh-pre
                    language="js"
                    label="Javascript"
                    copy-button
                    @copied="onCopiedDoSomething"
                  >
                    <template #copy-button>
                      <v-icon class="mr-3 mt-3"> mdi-content-copy </v-icon>
                    </template>
                    export default { beforeCreate() { console.log('At this
                    point, events and lifecycle have been initialized.') } }
                  </ssh-pre>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p class="mt-6">
                    The created hook runs before the templates and Virtual DOM
                    have been mounted or rendered - you are able to access
                    reactive data and events that are active:
                  </p>

                  <ssh-pre
                    language="js"
                    label="Javascript"
                    copy-button
                    @copied="onCopiedDoSomething"
                  >
                    <template #copy-button>
                      <v-icon class="mr-3 mt-3"> mdi-content-copy </v-icon>
                    </template>
                    export default { data() { return { property: 'Example
                    property.' } }, computed: { propertyComputed() { return
                    this.property } }, created() { console.log('At this point,
                    this.property is now reactive and propertyComputed will
                    update.') this.property = 'Example property updated.' } }
                  </ssh-pre>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p class="mt-6">
                    The beforeMount hook runs right before the initial render
                    happens and after the template or render functions have been
                    compiled:
                  </p>
                  <ssh-pre
                    language="js"
                    label="Javascript"
                    copy-button
                    @copied="onCopiedDoSomething"
                  >
                    <template #copy-button>
                      <v-icon class="mr-3 mt-3"> mdi-content-copy </v-icon>
                    </template>
                    export default { beforeMount() { console.log(`At this point,
                    vm.$el has not been created yet.`) } }
                  </ssh-pre>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p class="mt-6">
                    In the mounted hook, you will have full access to the
                    reactive component, templates, and rendered DOM (via
                    this.$el).
                  </p>
                  <p class="mt-3">
                    Use mounted for modifying the DOM—particularly when
                    integrating non-Vue libraries:
                  </p>
                  <ssh-pre
                    language="js"
                    label="Javascript"
                    copy-button
                    @copied="onCopiedDoSomething"
                  >
                    <template #copy-button>
                      <v-icon class="mr-3 mt-3"> mdi-content-copy </v-icon>
                    </template>
                    export default { mounted() { console.log(`At this point,
                    vm.$el has been created and el has been replaced.`);
                    console.log(this.$el.textContent) // Example component. } }
                  </ssh-pre>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p class="mt-6">
                    The beforeUpdate hook runs after data changes on your
                    component and the update cycle begins, right before the DOM
                    is patched and re-rendered.
                  </p>
                  <p class="mt-3">
                    Use beforeUpdate if you need to get the new state of any
                    reactive data on your component before it gets rendered:
                  </p>
                  <ssh-pre
                    language="js"
                    label="Javascript"
                    copy-button
                    @copied="onCopiedDoSomething"
                  >
                    <template #copy-button>
                      <v-icon class="mr-3 mt-3"> mdi-content-copy </v-icon>
                    </template>
                    export default { data() { return { counter: 0 } }, created()
                    { setInterval(() => { this.counter++ }, 1000) },
                    beforeUpdate() { console.log(`At this point, Virtual DOM has
                    not re-rendered or patched yet.`) // Logs the counter value
                    every second, before the DOM updates.
                    console.log(this.counter) } }
                  </ssh-pre>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p class="mt-6">
                    The updated hook runs after data changes on your component
                    and the DOM re-renders.
                  </p>
                  <p class="mt-3">
                    Use updated if you need to access the DOM after a property
                    change:
                  </p>
                  <ssh-pre
                    language="js"
                    label="Javascript"
                    copy-button
                    @copied="onCopiedDoSomething"
                  >
                    <template #copy-button>
                      <v-icon class="mr-3 mt-3"> mdi-content-copy </v-icon>
                    </template>
                    export default { data() { return { counter: 0 } }, created()
                    { setInterval(() => { this.counter++ }, 1000) }, updated() {
                    console.log(`At this point, Virtual DOM has re-rendered and
                    patched.`) // Fired every second, should always be true
                    console.log(+this.$refs['example-element'].textContent ===
                    this.counter) } }
                  </ssh-pre>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p class="mt-6">
                    beforeDestroy is fired right before teardown. Your component
                    will still be fully present and functional.
                  </p>
                  <p class="mt-3">
                    Use beforeDestroy if you need to clean up events or reactive
                    subscriptions:
                  </p>
                  <ssh-pre
                    language="js"
                    label="Javascript"
                    copy-button
                    @copied="onCopiedDoSomething"
                  >
                    <template #copy-button>
                      <v-icon class="mr-3 mt-3"> mdi-content-copy </v-icon>
                    </template>
                    export default { data() { return { exampleLeakyProperty:
                    'This represents a property that will leak memory if not
                    cleaned up.' } }, beforeDestroy() { console.log(`At this
                    point, watchers, child components, and event listeners have
                    not been teared down yet.`) // Perform the teardown
                    procedure for exampleLeakyProperty. // (In this case,
                    effectively nothing) this.exampleLeakyProperty = null delete
                    this.exampleLeakyProperty } }
                  </ssh-pre>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p class="mt-6">
                    By the time you reach the destroyed hook, there’s
                    practically nothing left on your component. Everything that
                    was attached to it has been destroyed.
                  </p>
                  <p class="mt-3"></p>
                  <ssh-pre
                    language="js"
                    label="Javascript"
                    copy-button
                    @copied="onCopiedDoSomething"
                  >
                    <template #copy-button>
                      <v-icon class="mr-3 mt-3"> mdi-content-copy </v-icon>
                    </template>
                    import ExampleAnalyticsService from
                    './example-analytics-service' export default { destroyed() {
                    console.log(`At this point, watchers, child components, and
                    event listeners have been torn down.`) console.log(this)
                    ExampleAnalyticsService.informService('Component
                    destroyed.') } }
                  </ssh-pre>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </div>
    </div>

    <!-- Angular , React or Vue?  -->

    <div class="topicContent">
      <div class="topicTitle format">Angular , React or Vue?</div>
      <div class="topicDescription format">
        <v-card>
          <v-tabs background-color="deep-purple accent-4" horizontal dark>
            <v-tabs-slider></v-tabs-slider>
            <v-tab> Philosophical </v-tab>
            <v-tab> Technical </v-tab>

            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">Criteria</th>
                          <th class="text-left">Angular</th>
                          <th class="text-left">React</th>
                          <th class="text-left">Vue</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Developer</td>
                          <td>Google</td>
                          <td>Facebook</td>
                          <td>Community-driven open-source project</td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <td>Philosophies</td>
                          <td>A lot of built-in features</td>
                          <td>Minimal built in feature</td>
                          <td>Some built-in features</td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <td>Ease of Learning</td>
                          <td>Big learning curve</td>
                          <td>Moderate</td>
                          <td>Easy</td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <td>Performance</td>
                          <td>Good</td>
                          <td>Good</td>
                          <td>Good</td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <td>Popularity (Downloads as on 9 Jan 2022)</td>
                          <td>500,928</td>
                          <td>13,510,805</td>
                          <td>2,639,080</td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <td>Framework Evolution</td>
                          <td>Under active development</td>
                          <td>Under active development</td>
                          <td>Under active development</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">Features</th>
                          <th class="text-left">Angular</th>
                          <th class="text-left">React</th>
                          <th class="text-left">Vue</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>UI / DOM Manipulation</td>
                          <td>Yes</td>
                          <td>Yes</td>
                          <td>Yes</td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <td>State Management</td>
                          <td>Yes</td>
                          <td>Yes but not in all scenarios</td>
                          <td>Yes</td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <td>Routing</td>
                          <td>Yes</td>
                          <td>No</td>
                          <td>Yes</td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <td>Form Validation & handling</td>
                          <td>Yes</td>
                          <td>No</td>
                          <td>No</td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <td>Http Client</td>
                          <td>Yes</td>
                          <td>No</td>
                          <td>No</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";

export default {
  name: "VueBasic",

  components: {
    SshPre,
  },
  data() {
    return {
      differenceCriteria: [
        "Developer",
        "Philosophies",
        "Syntax",
        "Learning",
        "Performance",
        "Popularity",
        "Evolution",
      ],
      differenceInFrameworks: [
        {
          angular: {
            id: 1,
            developer: "Google",
            Philosophies: "A lot of built-in features",
            Syntax: "TypeScript and splits HTML + TypeScript logic apart",
            Learning: "Hard",
            Performance: "Good",
            Popularity: "Most Popular and gaining more",
            Evolution: "Progressive",
          },
        },
        {
          react: {
            id: 2,
            developer: "Facebook",
            Philosophies: "Minimalistic",
            Syntax: '"JSX" (it combines "HTML" and JavaScript logic),',
            Learning: "Moderate",
            Performance: "Good",
            Popularity: "Decent but loosing popularity",
            Evolution: "Progressive",
          },
        },
        {
          vue: {
            id: 3,
            developer: "Community-driven & open-source project",
            Philosophies: "Some built-in features",
            Syntax:
              "Regular JavaScript and splits HTML + JavaScript logic apart.",
            Learning: "Easy",
            Performance: "Good",
            Popularity: "Gaining and have decent popularity",
            Evolution: "Progressive",
          },
        },
      ],
    };
  },
  methods : {
    onCopiedDoSomething : function(){
      console.log("Coppied")
    }
  }
};
</script>


<style lang="scss">
.topicContent {
  .format {
    padding: 25px;
  }

  .topicTitle {
    font-size: 18px;
    background: #f5f5f5;
    margin-top: 30px;
  }
}

.v-application--is-ltr .v-banner__wrapper {
  padding: 36px 8px 36px 24px !important;
}
</style>
