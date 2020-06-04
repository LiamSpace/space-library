<template>
    <div>
        <sp-link>默认链接</sp-link>
        <sp-link type="primary">主要链接</sp-link>
        <sp-link type="success">成功链接</sp-link>
        <sp-link type="warning">警告链接</sp-link>
        <sp-link type="danger">危险链接</sp-link>
        <sp-link type="info">信息链接</sp-link>
    </div>
</template>

<script>
    import spLink from '../../src/Link.vue'
    export default {
        name: 'wrapLink',
        components:{
            spLink
        },
        data(){
            return {

            }
        }
    }
</script>

<style scoped>

</style>
