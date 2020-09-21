<template>
<div style="text-align:center;font-family: Comic Sans MS;">
    <h1>Order</h1>
    <div v-for="(order,index) in orders"
        v-bind:item="order"
        v-bind:index="index"
        v-bind:key="order._id">
        
        <div >Course:  {{order.title}} : {{order.status}} : {{order.username}} ::: <button v-b-modal.modal-2>Xem</button></div>

    </div>
    <b-modal id="modal-2" hide-footer="true" title="Add Course">
    <div>
			
        <label>Title</label><hr>
        <div v-for="(list,index) in list_order"
        v-bind:item="list"
        v-bind:index="index"
        v-bind:key="list._id">
        
        <div>CreateDate: {{list.id}}</div>

    </div>
		<button type="button" class="btn btn-primary" v-on:click="add()">Create</button>
			
		</div>
  </b-modal>
</div>    
</template>
<script>
import OrderService from '../service/OrderService'
    export default {
        data() {
            return {
                 orders: [],
                 list_order:[]
            }
        },
        async created() {
            this.orders = await OrderService.getOrder(localStorage.getItem('host_id'));
            this.list_order = await OrderService.getOrderList(localStorage.getItem('host_id'),1);
            console.log(this.orders);
        },
    }
</script>
 