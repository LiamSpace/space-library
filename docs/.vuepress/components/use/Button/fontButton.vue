<template>
  <div class="demo-button">
    <div>
      <sp-button type="text">文字按钮</sp-button>
      <sp-button type="text" disabled>文字按钮</sp-button>
    </div>
  </div>
</template>

<script>
import SpButton from '../../src/Button'
export default {
  name: 'buttonWrap',
  components: {
    SpButton
  }
}
</script>

<style lang="scss" scoped>
.demo-button{
  width: 100%;
  text-align: left;
  div {
    margin: 5px 0;
  }
}
</style>
