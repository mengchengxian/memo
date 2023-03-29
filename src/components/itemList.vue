<template>
  <div id="memos" class="container">
    <MemoItem v-for="item in filterMemo()" :key="item.id" :memo="item" />
  </div>
</template>

<script lang="ts" setup>
import type ItemData from "../model/ItemData";
import MemoItem from './memoItem.vue'
import { storeToRefs } from 'pinia'
import useStore from '../store'
const { data } = useStore()
const { aHelper, filterCateId } = storeToRefs(data)
const memoArr: Array<ItemData> = aHelper.value.memoList
function filterMemo() {
  if (filterCateId.value == -1) {
    return memoArr;
  } else {
    return memoArr.filter((item: any) => {
      return item.categoryId == filterCateId.value;
    });
  }
}
</script>