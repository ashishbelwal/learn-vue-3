<template>
  <v-container>
    <v-banner class="text-h6"> My first Vue</v-banner>

    <!-- What is vue? -->

    <div class="topicContent">
      <div class="topicTitle format">Installation</div>
      <div class="topicDescription format">
        <p>To run vue js using cli we need two things. Node.js and text editor. Click following link if you don't have these.</p>
        <v-btn
          color="deep-purple accent-4"
          dark
          elevation="2"
          link
          href="https://nodejs.org/en/" target="_blank"
        >Install Node</v-btn>
        <v-btn
          color="deep-purple accent-4"
          dark
          elevation="2"
          link
          href="https://code.visualstudio.com/" target="_blank"
        >Install VS Code</v-btn>
        <p class="mt-3"> Note : Install Vetur extention in VS code for Vue.js. It help in in code snippet, code autocomplete, formatting and others.</p>
        <p class="mt3">Open Terminal or CMD prompt and go to the folder where you want to create the project.</p>
        <p class="mt-10">Install Vue CLI globally - </p>
        <ssh-pre
          language="js"
          label="Javascript"
          copy-button
          @copied="onCopiedDoSomething"
        >
          <template #copy-button>
            <v-icon class="mr-3 mt-3"> mdi-content-copy </v-icon>
          </template>
      npm install -g @vue/cli
        </ssh-pre>
        <p class="mt-10">Create vue project </p>
        <ssh-pre
          language="js"
          label="Javascript"
          copy-button
          @copied="onCopiedDoSomething"
        >
          <template #copy-button>
            <v-icon class="mr-3 mt-3"> mdi-content-copy </v-icon>
          </template>
      vue create project-name
        </ssh-pre>
        <p class="mt-10">Go to preject directory </p>
        <ssh-pre
          language="js"
          label="Javascript"
          copy-button
          @copied="onCopiedDoSomething"
        >
          <template #copy-button>
            <v-icon class="mr-3 mt-3"> mdi-content-copy </v-icon>
          </template>
      cd project-name
        </ssh-pre>
        <p class="mt-10">Start Development Server </p>
        <ssh-pre
          language="js"
          label="Javascript"
          copy-button
          @copied="onCopiedDoSomething"
        >
          <template #copy-button>
            <v-icon class="mr-3 mt-3"> mdi-content-copy </v-icon>
          </template>
      npm run serve
        </ssh-pre>

        <p class="mt-9">If you didn't follow go check out this video</p>
        <v-btn
          color="deep-purple accent-4"
          dark
          elevation="2"
          link
          href="https://www.youtube.com/watch?v=5uX80VI0xLE" target="_blank"
        >Video Link</v-btn>

        <p class="mt-10">Open Development Server on your browser</p>
        <ssh-pre
          language="js"
          label="Javascript"
          copy-button
          @copied="onCopiedDoSomething"
        >
          <template #copy-button>
            <v-icon class="mr-3 mt-3"> mdi-content-copy </v-icon>
          </template>
      http://localhost:8080/
        </ssh-pre>
        <p class="mt-3">Do not forget to check the port ie :8080</p>
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
