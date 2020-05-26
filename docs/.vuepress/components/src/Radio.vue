<template>
    <label for=""
           v-if="$slots.default"
           class="[
                sp-radio,


           ]" >
        <span class="sp-radio-input">
            <span class="sp-radio-inner"></span>
            <input type="radio" class="sp-radio-origin">
        </span>
        <span class="sp-radio-label">
            <slot></slot>
        </span>
    </label>
</template>

<script>
    export default {
        name: 'sp-radio',
        porps:{
            value:{}
        },
        computed:{
        },
        data(){
            return {}
        }
    }
</script>

<style scoped>

</style>
