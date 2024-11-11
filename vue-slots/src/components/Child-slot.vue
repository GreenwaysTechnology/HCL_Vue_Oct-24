<script setup>
</script>

<template>
  <div>
    <!-- Without fallback-->
    <!-- <slot></slot> -->
    <!-- With fallback -->
    <slot>
      <!-- fallback content -->
      <h2>This is fallback</h2>
    </slot>
  </div>
</template>
<style scoped></style>