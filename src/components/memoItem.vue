<template>
  <div class="memo-container">
    <div class="memo">
      <div class="mark"></div>
      <div class="memo-heading">
        <h5 class="title">{{ memo.title }}</h5>
        <ul class="tools">
          <li class="edit" @click="showEdit"></li>
          <li class="delete" @click="doDel"></li>
        </ul>
      </div>
      <h6 class="memo-info">
        <span class="timeStamp">{{ memo.createTime }}</span>
        <span class="category">分类: {{ aHelper.getCategoryName(memo.categoryId) }}</span>
      </h6>
      <div class="content">
        <div class="text">{{ memo.content }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type ItemData from "../model/ItemData";
import { storeToRefs } from 'pinia'
import useStore from '../store'
const { data } = useStore()
const { aHelper } = storeToRefs(data)
const props = defineProps<{
  memo: ItemData
}>()
function doDel(): void {
  if (!confirm(`确认要删除<${props.memo.title}>的笔记吗？`)) return;
  aHelper.value.remove(props.memo.id);
}
function showEdit(): void {
  let newMemo = JSON.parse(JSON.stringify(props.memo));
  data.showEditMemo(newMemo)
}
</script>