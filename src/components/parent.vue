<template>
<div>
  <h1>child</h1>
  
      <child name="srirm" @showmsg="getdata($event)"/>
      <h1>result:{{result}}</h1>
</div>
</template>

<script>
import child from './child.vue'
export default {
components:{
    child,
},
data(){
    return{
        result:""
    }
},
methods:{
    getdata(data){
        this.result= data
    }
}
}
</script>

<style>

</style>
 

 