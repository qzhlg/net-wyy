<template>
    <header class="head">
        <div class="headLeft" @click="goBack">&lt;</div>
        <div class="headCenter">{{titleMes.name}}</div>
        <div class="headRight"></div>
    </header>
</template>
<script lang="ts">
import Vue from 'vue'
import './index.css'
export default Vue.extend({
    name:'goodhead',
    components:{

    },
    props:['titleMes'],
    mounted(){
        // console.log(props)
    },
    methods:{
        goBack(){
            console.log(this.$router)
            // this.$router.replace('/categorys')
        }
    }
})
</script>
