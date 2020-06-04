<template>
  <div class="intro-button">
    <IntroTable :apiData = dataArr title="Attributes">
    </IntroTable> 
  </div>
</template>

<script>
import IntroTable from '../../../Common/DemoApi'
export default {
  name: 'buttonIntro',
  components: {
    IntroTable
  },
  data(){
      return{
        dataArr:[
            {
                params: "size",
                describe:"尺寸",
                type:"String",
                optionValue:"mini/small/medium",
                defaultValue:"——"
            },
            {
                params: "type",
                describe:"类型",
                type:"String",
                optionValue:"default/primary/success/warning/danger/info ",
                defaultValue:"default"
            },
            {
                params: "round",
                describe:"圆角",
                type:"Boolean",
                optionValue:"——",
                defaultValue:"false"
            },
            {
                params: "disabled",
                describe:"禁用",
                type:"Boolean",
                optionValue:"——",
                defaultValue:"false"
            }
        ]
      }
  }
}
</script>

<style lang="scss" scoped>
</style>

