<template>
    <div class='helper'>
        <!-- 未完成事件数量 -->
        <span class='left'>{{unFinishedTodoLength}} items left</span>
        <!-- 全部 未完成 已完成  -->
        <span class='tabs'>
            <span 
            v-for='state in states'
            :key='state'
            :class="['state',filter === state ? 'actived' : '']"
            @click='toggleFilter(state)'>
                {{state}}
            </span>
        </span>
        <!-- 清除所有已完成 -->
        <span class="clear" @click='clearAllCompleted'>clear completed</span>

    </div>
</template>

<script>
export default {
  data(){
      return {
          states:['all','active','completed']
      }
  },
 // 计算属性 依赖的数据发生变化时会自动计算 
  computed:{
      // 未完成 todo 的数量
      unFinishedTodoLength(){
          if(this.todos.length === 0){return}
          return this.todos.filter(function(todo){
              return !todo.completed;
          }).length;
      }
  },
  props:{
      filter:{
          type:String,
          reqiured:true,
      },
      todos:{
          type:Array,
          reqiured:true,
      }
  },
  methods:{
      clearAllCompleted(){
          this.$emit('clear')
      },
      toggleFilter(state){
        //   return
          this.$emit('toggle',state);
      }
  }
}
</script>

<style lang='stylus' scoped>
.helper{
    font-weight:100px;
    font-size:14px;
    display:flex;
    justify-content:space-between;
    padding:5px 0;
    line-height:30px;
    background-color:#fff;
    
}
.left, .clear, .tabs{
    padding:0 10px;
    box-sizing:border-box;
}
.left, .clear{
    width:150px;
}
.left{
    text-align:left;
}
.clear{
    text-align:center;
    cursor:pointer;
}
.tabs{
    width:200px;
    display:flex;
    justify-content:space-around;
    *{
        display:inline-block;
        padding:0 10px;
        cursor: pointer;
        border: 1px soild rgba(175,47,47,0)
        &.actived{
            border:1px solid rgba(175,47,47,0.4);
            border-radius:5px;
        }
    }
}
</style>


