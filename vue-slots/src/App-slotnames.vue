<script setup>
import Layout from './components/Layout.vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

</script>
<template>
  <Layout>
    <template #header>
      <Header />
    </template>
    <template #main>
      <Main />
    </template>
    <template #footer>
      <Footer />
    </template>
  </Layout>
</template>