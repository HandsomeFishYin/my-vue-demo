require("../style/main.css")

<template>
    <div v-for="n in 10">div</div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Hello World!'
            }
        }
    }
</script>

<style>
    .vue{
        color: red;
    }
</style>
