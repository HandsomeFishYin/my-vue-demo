

<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div v-for="n in 10" class="vue" v-bind:title="title">{{msg}}</div>

    <!--&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#;-->
    <hr>
    <div v-if="isSee">
        now you can see me!
    </div>
    <div v-on:click="reverseShowDiv" class = "demo-show-button">
        click here to hide the div!
    </div>

    <!-- -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#&#45;&45;&#45;&#45;&#45;&#45;&#45;&#45;-->
    <hr>
    <div>
        <ol>
            <li v-for="item in aaa">
                {{ item.text }}
            </li>
        </ol>
    </div>

    <!-- -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#445;&#45;&#45;&#45;&#45;-->
    <hr>
    <p>{{inputContainer}}</p>
    <input type="text" v-model="inputContainer">

    <!--&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#4;-->

    <test-props v-bind:todo="aaa" />

</template>

<script>
    export default {
        data () {
            return {
                msg: 'Hello World!',
                title:'this is title',
                isSee:true,
                aaa: [
                    { text: 'Learn JavaScript!!!!!' },
                    { text: 'Learn Vue' },
                    { text: 'Build something awesome' },
                    { text: 'what is your name ?'}
                ],
                inputContainer:""
            }
        },
        methods:{
            reverseShowDiv: function(){
                this.isSee = !this.isSee;
            }
        },
        components: {
            'test-props': require('./test-props.vue'),
        },
    }
</script>

<style>
    .vue{
        color: red;
    }

</style>
