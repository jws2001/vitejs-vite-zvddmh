<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { delay, random } from './utils';
import B from './components/B.vue';
import C from './components/C.vue';
import D from './components/D.vue';
import Loding from './components/Loding.vue';
import Error from './components/Error.vue';

const AsyncA = defineAsyncComponent({
  loader: async () => {
    await delay(random(1000, 4000));
    return import('./components/A.vue');
  },
  loadingComponent: Loding,
  delay: 200,
  errorComponent: Error,
});

const AsyncB = defineAsyncComponent({
  loader: async () => {
    await delay(random(1000, 4000));
    return import('./components/B.vue');
  },
  loadingComponent: Loding,
  delay: 2000,
  errorComponent: Error,
});

const AsyncC = defineAsyncComponent({
  loader: async () => {
    await delay(random(1000, 4000));
    return import('./components/C.vue');
  },
  loadingComponent: Loding,
  delay: 2000,
  errorComponent: Error,
});

const AsyncD = defineAsyncComponent({
  loader: async () => {
    await delay(random(1000, 4000));
    return import('./components/D.vue');
  },
  loadingComponent: Loding,
  delay: 2000,
  errorComponent: Error,
});
</script>

<template>
  <div class="demo">
    <aside class="aside"></aside>
    <main class="main">
      <Suspense>
        <AsyncA />
        <template #fallback> <Loding /> </template>
      </Suspense>
      <Suspense>
        <AsyncB />
        <template #fallback> <Loding /> </template>
      </Suspense>
      <Suspense>
        <AsyncC />
        <template #fallback> <Loding /> </template>
      </Suspense>
      <Suspense>
        <AsyncD />
        <template #fallback> <Loding /> </template>
      </Suspense>
    </main>
  </div>
</template>

<style scoped lang="less">
.demo {
  display: grid;
  height: 100vh;
  grid-template-columns: 250px 1fr;
}
.main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}
</style>
