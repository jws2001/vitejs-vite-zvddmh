<script setup lang="ts">
const handleBlur = () => {
  console.log('失去焦点事件');
};
</script>

<template>
  <input type="text" @blur="handleBlur" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
