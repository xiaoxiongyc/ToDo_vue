<template>
  <div id='app'>
      <div id="cover"></div>
      <Header></Header>
      <Todo></Todo>
      <Footer></Footer>
  </div>
</template>

<script>
import Header from './todo/header.vue';
import Footer from './todo/footer.vue';
import Todo from './todo/todo.vue';
export default{
    // 声明 Header 组件 这样就可以在 template 中使用
    components:{
        Header,
        Footer,
        Todo,
    },
    data(){
        return {}
    },
    
}
</script>


<style lang='stylus' scoped>
#app{
    position: absolute;
    left:0;
    bottom:0;
    right:0;
    top:0;
}
#cover{
    position: absolute;
    left:0;
    bottom:0;
    right:0;
    top:0;
    // background-color: #999;
    // opacity: 0.7;
    z-index: -1;
}

</style>