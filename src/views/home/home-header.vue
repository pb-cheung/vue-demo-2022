<template>
  <div class="wrapper">
    <div class="home-header">
      <img src="@/assets/logo.png">
      <van-dropdown-menu>
        <van-dropdown-item :value="value" :options="categories" @change="change"></van-dropdown-item>
      </van-dropdown-menu>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: Number
  },
  data() {
    return {
      categories: [
        { text: '全部课程', value: -1 },
        { text: 'node', value: 0 },
        { text: 'React', value: 1 },
        { text: 'Vue', value: 2}
      ]
    }
  },
  methods: {
    change(newVal) {
      this.$emit('input', newVal)
    }
  }
}
</script>
<style lang="scss">
.wrapper {
  padding-top: 48px;
}
.home-header {
  display: flex;
  justify-content: space-between;
  height: 48px;
  background-color: $background;
  padding: 0 20px;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  img {
    width: 30px;
    height: 30px;
  }
}
</style>
