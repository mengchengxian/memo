<script setup lang="ts">
import MenuBar from "./components/menuBar.vue";
import ItemList from "./components/itemList.vue";
import MemoEditor from "./components/memoEditor.vue";
import { storeToRefs } from 'pinia'
import useStore from './store'
const { data } = useStore()
const { isShow } = storeToRefs(data)
</script>

<template>
  <div class="app">
    <MenuBar />
    <ItemList />
    <MemoEditor v-if="isShow" />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
