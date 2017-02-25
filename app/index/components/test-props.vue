<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <ol>
        <!-- Create an instance of the todo-item component -->
        <li v-for="item in todo">{{item.text}}</li>
    </ol>
</template>

<script>

    module.exports = {

        props: ['todo'],

        methods : {

        }

    }
</script>