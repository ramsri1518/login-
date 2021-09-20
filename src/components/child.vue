<template>
  <div>
      
      <button @click="showdata">click</button>
  </div>
</template>

<script>
export default {
    name:"child",
   
    data(){
        return{

        }
    },
    methods:{
        showdata(){
            this.$emit('showmsg',this.name)
        }
    }
    

}
</script>

<style>

</style>