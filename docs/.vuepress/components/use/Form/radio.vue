<template>
    <div>
        <sp-radio v-model="radio" label="1">备选项</sp-radio>
        <sp-radio v-model="radio" label="2">备选项</sp-radio>
    </div>
</template>

<script>
    import spRadio from '../../src/Radio.vue'
    export default {
        name: 'wrapRadio',
        components:{
            spRadio
        },
        data(){
            return {
                radio:'1'
            }
        }
    }
</script>

<style scoped>

</style>
