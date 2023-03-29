//store/user.js文件
import { defineStore } from 'pinia'
import ActionHelper from './ActionHelper';
import type ItemData from '@/model/ItemData';
const useDataStore = defineStore('data', {
  state: () => {
    return {
      isShow: false,
      aHelper: new ActionHelper(),
      transMemo: {} as ItemData | null,
      filterCateId: -1
    }
  },
  actions: {
    showEditMemo(editMemo: any) {
      this.transMemo = editMemo
      this.isShow = true
    }
  }
})
export default useDataStore
