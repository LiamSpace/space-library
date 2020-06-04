<template>
  <div class="demo-button">
    <div>
      <sp-button>默认按钮</sp-button>
      <sp-button type="primary">主要按钮</sp-button>
      <sp-button type="success">成功按钮</sp-button>
      <sp-button type="warning">警告按钮</sp-button>
      <sp-button type="danger">危险按钮</sp-button>
      <sp-button type="info">信息按钮</sp-button>
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
  text-align: center;
  div {
    margin: 10px 0;
  }
}
</style>

