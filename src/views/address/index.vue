<template>
    <div>
        this is address page
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {mapState} from 'vuex'
export default Vue.extend({
    name:'address',
    computed:{
        ...mapState({
            defaultlist:state=>state.data.data
        })
    },
    mounted(){
        this.getlist()
    },
    methods:{
        getlist(){
            this.$store.dispatch('getAddress')
        }
    }
})
</script>