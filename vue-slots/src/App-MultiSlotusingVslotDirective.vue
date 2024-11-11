<script setup>
import Layout from './components/Layout.vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

</script>
<template>
  <Layout>
    <template v-slot:header>
      <Header />
    </template>
    <template v-slot:main>
      <Main />
    </template>
    <template v-slot:footer>
      <Footer />
    </template>
  </Layout>
</template>