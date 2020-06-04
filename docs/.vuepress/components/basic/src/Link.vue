<template>
    <a :href="href"
       :class="[
           type,
           underline ? '' :'no-underline',
           disabled ? 'is-disabled' : ''
    ]">
    <span v-if="$slots.default">
        <slot></slot>
    </span>
    </a>
</template>

<script>
    export default {
        name: 'sp-link',
        props:{
            href:String,
            type:{
                type:String,
                default:'default'
            },
            underline:{
                type:Boolean,
                default:true
            },
            disabled:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return {}
        }
    }
</script>

<style lang="scss" scoped>

</style>
