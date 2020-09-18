<template>
<div>
<h1 style='text-align:center;font-family: Comic Sans MS;'>Bag</h1> 
<hr>
<div class="row" style="margin-left:100px;margin-right:100px">

    <div
        v-for="(item,index) in items"
        v-bind:item="item"
        v-bind:index="index"
        v-bind:key="item._id">
        <div class="col-md-8">
            <div style="font-family: Comic Sans MS;" class="row  border border-black  border-item">
                    <div class="column" v-if="item.id != 0">Course :{{ item.course_id }}</div>
                    <div class="column" v-if="item.name != 0">Name :{{ item.name }}</div>
                    <div class="column" v-if="item.name != 0">Host :{{ item.host_name }}</div>
                    <div class="column" v-if="item.quantity != 0">Quantity: {{ item.quantity }}</div>
                    <button v-if="item.id != 0"  @click="decrement(item)">-</button>
                    <button v-if="item.id != 0"  @click="increment(item)">+</button>
                   
                    
            </div>
        </div>

    </div>
    <hr>
    <div  style="font-family: Comic Sans MS;">
    <h3>Count : {{count}}</h3> 
    <h3>Total : {{total}} VND</h3>
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