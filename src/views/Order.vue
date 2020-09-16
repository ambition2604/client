<template>
<div>
    <h1>{{ title }}</h1>
    <child></child>

</div>    
</template>
<script>
    import Child from './Child.vue';
    export default {
        data() {
            return {
                title:'sadad'
            }
        },
        components: {'child': Child}
    }
</script>
 
<style>
</style>