<template>
  <div class="intro-link">
    <IntroTable :apiData = dataArr title="Attributes">
    </IntroTable> 
  </div>
</template>

<script>
import IntroTable from '../../../Common/DemoApi'
export default {
  name: 'linkIntro',
  components: {
    IntroTable
  },
  data(){
      return{
        dataArr:[
            {
                params: "underline",
                describe:"是否下划线",
                type:"Boolean",
                optionValue:"——",
                defaultValue:"true"
            },
            {
                params: "type",
                describe:"类型",
                type:"String",
                optionValue:"default/primary/success/warning/danger/info ",
                defaultValue:"default"
            },
            {
                params: "href",
                describe:"原生属性",
                type:"String",
                optionValue:"——",
                defaultValue:"——"
            },
            {
                params: "disabled",
                describe:"是否禁用状态",
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

