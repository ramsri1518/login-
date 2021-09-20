<template>
  <div>
      <ul>
          <li v-for="(task,index) in tasks" :key="index" v-text="task"></li>
      </ul>
  </div>
</template>

<script>
export default {
data(){
    return{
        tasks:["weather",
        "music",
        "calcualtor"]
    };
},
created(){
    this.$root.$on('newone',(task) => {
        this.tasks.push(task);
    })
}
}
</script>

<style>

</style>