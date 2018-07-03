<template>
    <div id='footer'>
        <span>Written by {{author}}</span>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                author:'Yu wen',
            }
        }
    }
</script>

<style lang='stylus' scoped>
#footer{
    margin-top: 40px;
    text-align:center;
    color:#bfbfbf;
    font-size :10px;
}
</style>


