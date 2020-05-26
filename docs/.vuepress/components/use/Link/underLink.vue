<template>
    <div>
       <sp-link :underline="false">无下划线</sp-link>
       <sp-link >有下划线</sp-link>
    </div>
</template>

<script>
    import spLink from '../../src/Link.vue'
    export default {
        name: 'wrapUnderLink',
        components:{
            spLink
        },
        data(){
            return {
                isFalse:false
            }
        }
    }
</script>

<style scoped>

</style>
