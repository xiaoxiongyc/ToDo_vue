<template>
    <section id='real-app'>
        <input
        type="text" 
        class='add-input'
        autofocus
        placeholder="接下去要做什么？"
        v-on:keyup.enter="addTodo">
        <!-- 插入子组件 并传入参数 todo-->
        <Item 
        v-for='todo in filteredTodos'
        :todo="todo" 
        :key='todo.id'
        @del='deleteTodo'
        @todoStatusChange="todoStatusChange"/>

        <Tabs 
        :filter='filter' 
        :todos='todos' 
        @toggle='toggleFilter'
        @clear='clearCompletedTodo'/>
    </section>
</template>

<script>
import Item from'./item.vue';
import Tabs from './tabs.vue';
import Store from 'storejs';

let id = 0;
export default {
    data(){
        return {
            todos:[],
            filter:'all'
        }
    },      
    // 声明要插入的子组件
    components:{
        Item,
        Tabs,
    },
    computed:{
        filteredTodos(){
            if(this.filter === 'all'){
                return this.todos;
            }
            
            const completed = this.filter === 'completed';
            return this.todos.filter(function(todo){
                return todo.completed === completed;
            })
        }
    },
    methods:{
        addTodo(e){
            this.todos.unshift(
                {
                    id:+new Date(),
                    content:e.target.value.trim(),
                    completed:false
                }
            );
            e.target.value = '';
            // TODO:
            Store.set("todos",this.todos);
        },
        deleteTodo(id){
            this.todos = this.todos.filter(function(item){
                return id !== item.id;
            })
            // TODO:
            Store.set("todos",this.todos);
        },
        toggleFilter(state){
            this.filter = state;
        },
        clearCompletedTodo(){
            this.todos = this.todos.filter(function(todo){
                return !todo.completed;
            })
             // TODO:
            Store.set("todos",this.todos);
        },
        todoStatusChange(id){
            // TODO:
            var todos = Store.get("todos").map(function(item){
                if(item.id === id){
                    item.completed = !item.completed;
                }
                return item;
            });
            Store.set("todos",todos);
        },
    },
    beforeMount(){
       this.todos =  Store.get("todos") || [];
    }
}
</script>

<style lang='stylus' scoped> 
    #real-app{
        width:600px;
        margin: 0 auto;
        box-shadow:0 0 5px #666;
        // border: 1px solid #ccc;
        // border-radius 20px;
    }

    .add-input{
        position:relative;
        margin:0;
        width:100%;
        font-size:24px;
        font-family:inherit;
        font-weight:inherit;
        line-height:1.4em;
        border:0;
        outline:none;
        color:inherit;
        padding:6px;
        border:1px soild #999;
        box-shadow:0 -1px 5px rgba(0,0,0,0.3);
        box-sizing border-box;
        padding:16px 16px 16px 60px;
        // border:none;
        box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3) 

    }
</style>


