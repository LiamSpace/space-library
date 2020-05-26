<template>
    <button
       class="sp-button"
       :disabled="disabled"
       @click="handleClick"
       :class="[
            type ? 'sp-button--'+ type :'',
            size ? 'sp-button--'+ size :'',
            {
                'is-disabled':disabled,
                'is-round':round,
            }
       ]" 
    >
    <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script>
    export default {
        name:'sp-button',
        props:{
            type:{
                type:String,
                default:'default'
            },
            size:String,
            round: Boolean,
            disabled:Boolean,
        },
        methods:{
            handleClick(event){
                this.$emit('click',event)
            }
        }
    }
</script>