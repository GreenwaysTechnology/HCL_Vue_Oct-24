<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <header>
    <h1>Site Header</h1>
    <!-- Menu Bar -->
    <nav>
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>
        <li>
          <RouterLink to="/review">Review</RouterLink>
        </li>
        <li>
          <RouterLink to="/posts">Posts</RouterLink>
        </li>
      </ul>

    </nav>
  </header>
  <!-- Body section to display menu content -->
  <RouterView></RouterView>
  <footer>
    <p>Footer</p>
  </footer>
</template>