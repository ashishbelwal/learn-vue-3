<template>
  <v-container>

    <v-banner class="text-h6"> Vue Project Structure </v-banner>

    <div class="topicContent">
      <div class="topicTitle format"></div>
      <div class="topicDescription format mt-6">
          
          <v-card-text>
            <p class="mt-6">
            </p>

            <ssh-pre
            language="js"
            label="Project Structure"
            >
            <template #copy-button>
            </template>
                    
        ├── build/                      # webpack config files
        │   └── ...
        ├── config/
        │   ├── index.js                # main project config
        │   └── ...
        ├── src/
        │   ├── main.js                 # app entry file
        │   ├── App.vue                 # main app component
        │   ├── components/             # ui components
        │   │   └── ...
        │   └── assets/                 # module assets (processed by webpack)
        │       └── ...
        ├── static/                     # pure static assets (directly copied)
        ├── test/
        │   └── unit/                   # unit tests
        │   │   ├── specs/              # test spec files
        │   │   ├── eslintrc            # config file for eslint with extra settings only for unit tests
        │   │   ├── index.js            # test build entry file
        │   │   ├── jest.conf.js        # Config file when using Jest for unit tests
        │   │   └── karma.conf.js       # test runner config file when using Karma for unit tests
        │   │   ├── setup.js            # file that runs before Jest runs your unit tests
        │   └── e2e/                    # e2e tests
        │   │   ├── specs/              # test spec files
        │   │   ├── custom-assertions/  # custom assertions for e2e tests
        │   │   ├── runner.js           # test runner script
        │   │   └── nightwatch.conf.js  # test runner config file
        ├── .babelrc                    # babel config
        ├── .editorconfig               # indentation, spaces/tabs and similar settings for your editor
        ├── .eslintrc.js                # eslint config
        ├── .eslintignore               # eslint ignore rules
        ├── .gitignore                  # sensible defaults for gitignore
        ├── .postcssrc.js               # postcss config
        ├── index.html                  # index.html template
        ├── package.json                # build scripts and dependencies
        └── README.md                   # Default README file
            </ssh-pre>
        </v-card-text>
          


      </div>
    </div>
  </v-container>
</template>

<script>
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";
export default {
    components: {
        SshPre,
    },
}
</script>

<style>

</style>