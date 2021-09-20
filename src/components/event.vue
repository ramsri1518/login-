<template>
<div>
<h3>enter the value to add up</h3>
  <input type="text" placeholder="addvalue" v-model="task" @keypress.enter="addone()" />
  </div>
</template>

<script>
export default {
data() {
    return {
        task:''
    }
},
methods:{
    addone(){
        this.$root.$emit("newone",this.task);
        this.task=""
    }
}
}
</script>

<style>

</style>