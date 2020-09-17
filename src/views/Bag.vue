<template>
<div>
<h1 style='text-align:center'>Bag</h1>
<hr>
<div class="row" style="margin-left:200px;margin-right:200px">

    <div 
        v-for="(item,index) in items"
        v-bind:item="item"
        v-bind:index="index"
        v-bind:key="item.quantity">
        <div>
        <h2 style="font-family: Comic Sans MS;" v-if="item.id != 0">Menu :{{ item.menu_id }}</h2>
        <h2 style="font-family: Comic Sans MS;" v-if="item.name != 0">{{ item.name }}</h2>
        <h2 style="font-family: Comic Sans MS;" v-if="item.quantity != 0">{{ item.quantity }}</h2>
        </div>

    </div>
    <hr>
    <div>
    <h3  style="font-family: Comic Sans MS;">Count : {{count}}</h3> 
    <h3  style="font-family: Comic Sans MS;">Total : {{total}}</h3>
    <button style="width:100%;height:50%;font-size:20px;">Checkout</button>
    </div>
    
</div>  
</div>  
</template>
<script>
    export default {
        data() {
            return {
                items: JSON.parse(localStorage.getItem('items')),
                count:localStorage.getItem('count'),
                total:localStorage.getItem('total'),
            }
        },
    
    }
</script>
 
<style>
</style>