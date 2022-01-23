<template>
  <div>
    <Header />
    <Sidebar />
    <Content />
  </div>

</template>

<script>
import Header from '../components/Header.vue'
import Content from './Content.vue'
import Sidebar from '../components/Sidebar.vue'

  export default {
    name: 'Home',

    components: {
        Sidebar,
        Header,
        Content,
    },
  }
</script>
