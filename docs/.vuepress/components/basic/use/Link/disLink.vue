<template>
    <div>
        <sp-link disabled>默认链接</sp-link>
        <sp-link type="primary" disabled>主要链接</sp-link>
        <sp-link type="success" disabled>成功链接</sp-link>
        <sp-link type="warning" disabled>警告链接</sp-link>
        <sp-link type="danger" disabled>危险链接</sp-link>
        <sp-link type="info" disabled>信息链接</sp-link>
    </div>
</template>

<script>
    import spLink from '../../src/Link.vue'
    export default {
        name: 'wrapDisLink',
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
