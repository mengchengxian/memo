<template>
  <!-- 便签新增/编辑区 -->
  <div>
    <div class="cover-layer"></div>
    <div id="new-markdown" class="editor-layer">
      <div class="editor-top">
        <input class="editor-title form-control" type="text" placeholder="标题" v-model="memo.title" />
        <div class="dropdown select-category">
          <button class="btn btn-default dropdown-toggle" data-toggle="dropdown">
            <span class="category">{{ aHelper.getCategoryName(memo.categoryId) }}</span>
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li @click="memo.categoryId = 0">
              <a>工作</a>
            </li>
            <li @click="memo.categoryId = 1">
              <a>生活</a>
            </li>
            <li @click="memo.categoryId = 2">
              <a>学习</a>
            </li>
          </ul>
        </div>
        <ul class="tools">
          <li class="save" @click="saveNew"></li>
          <li class="cancel" @click="closeWin"></li>
        </ul>
      </div>
      <textarea class="text-content form-control" placeholder="内容" v-model="memo.content"></textarea>
    </div>
  </div>
</template>
<script lang="ts" setup>
import ItemData from "../model/ItemData";
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'
import useStore from '../store'
const { data } = useStore()
const { aHelper, transMemo, isShow } = storeToRefs(data)
let memo: ItemData = reactive(new ItemData(-1, 0))
memo = transMemo.value as ItemData
function closeWin() {
  isShow.value = false;
}
function saveNew() {
  // 校验
  if (
    memo &&
    memo.categoryId > -1 &&
    memo.title.trim().length > 0 &&
    memo.content.trim().length > 0
  ) {
    if (memo.id <= -1) {
      // 新建
      aHelper.value.add(memo);
    } else {
      // 修改
      aHelper.value.edit(memo);
    }
    isShow.value = false;
  } else {
    alert("对不起，输入错误~~！");
  }
}
</script>