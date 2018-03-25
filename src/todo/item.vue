<template>
    <div :class="['todo-item',todo.completed ? 'completed':'']">
        <!-- 动态 class -->
        <!-- checkbox -->
        <input 
        type='checkbox'
        class='toggle'
        v-model='todo.completed'
        @click="statusChange">

        <!-- 内容 -->
        <label>{{todo.content}}</label>

        <!-- 关闭选项 -->
        <button class='destory' @click="deleteTodo"></button>

    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    // 声明传入此组件的属性 其中有一个类型为 Object 的 todo
    props:{
        todo:{
            type:Object,
            required:true
        }
    },
    methods:{
        deleteTodo(){
            // 触发 del 事件，并传入 id
            this.$emit('del',this.todo.id)
        },
        statusChange(){
            this.$emit('todoStatusChange',this.todo.id);
        }
    }
  
}
</script>

<style lang='stylus' scoped>
.todo-item{
    position:relative;
    background-color #fff;
    font-size:24px;
    border-bottom:1px soild rgba(0,0,0,0.06);

    &:hover{
        .destory:after{
            content:'x';
            color:#999;
        }
    }

    label{
        white-space:pre-line;
        word-break:break-all;
        padding:15px 60px 15px 15px;
        margin-left:45px;
        display:block;
        line-height :1.2;
        transition:color 0.4s;
    }

    &.completed{
        label{
            color:#d9d9d9;
            text-decoration:line-through;
        }
    }
}

.toggle{
    text-align:center;
    width:20px;
    height:50px;
    line-height:50px;
    position:absolute;
    top:5px;
    bottom:0;
    left:10px;
    margin:0 auto;
    border:none;
    outline:none;
}

.destory{
    position:absolute;
    right:10px;
    top:4px;
    bottom:0;
    width:40px;
    height:50px;
    margin: 0 auto;
    font-size:30px;
    color:#cc9a9a;
    margin-bottom:11px;
    transition:color 0.2s ease-out;
    background-color transparent;
    appearance:none;
    border-width:0;
    cursor:pointer;
    outline:none;

}

</style>

