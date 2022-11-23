<template>
  <div>
    <HomeHeader v-model="currentTarget"></HomeHeader>
    <div>{{currentTarget}}</div>
  </div>
</template>
<script>
import HomeHeader from './home-header.vue'
import {createNamespacedHelpers} from 'vuex'
import * as Types from '@/store/action-types'
let { mapState: mapHomeState, mapMutations } = createNamespacedHelpers('home')

export default {
  computed: {
    ...mapHomeState(['category']), // 获取vuex状态，绑定到当前实例
    currentTarget: {
      get() {
        return this.category
      },
      set(value) { // 修改值，走mutation
        this[Types.SET_CATEGORY](value)
      }
    }
  },
  data: () => {
    return {
      value: -1
    }
  },
  components: {
    HomeHeader
  },
  methods: {
    ...mapMutations([Types.SET_CATEGORY])
  }
}
</script>
