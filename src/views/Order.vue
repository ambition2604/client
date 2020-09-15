<template>
<div>
  <h1>{{ $route.params.u }}</h1>
  <div class="card m-2" style="width: 40rem;">
            <div class="card-body">
                <h5 class="card-title" v-text="thecardtitle"></h5>
                <div class="col-12 col-md-6 col-xl-4 menu"
        v-for="(menu,index) in menus"
        v-bind:item="menu"
        v-bind:index="index"
        v-bind:key="menu._id">
        <div >
        <h5 class="text" @click="sendMessage(menu.id)">{{ menu.name }}</h5>
        </div>
        </div>
        <child :parentmessage="parentmessage"></child>
        <child :m_id="m_id"></child>
            </div>
        </div>
</div>
</template>
<script>
    import Child from './Child.vue';
    import MenuService from '../service/MenuService'

    export default {
        mounted() {
          console.log('Component mounted.')
        },
        components: {
          Child
          },
        data() {
            return {
                items:[],
                thecardtitle: 'Parent Component!',
                parentmessage: '',
                m_id:null,
                menus:[],
                
            }
        },
        async created(){
              this.id =  localStorage.getItem('shop_id');
              this.menus = await MenuService.getMenubyID(this.id);
        },
        methods: {
            async sendMessage(item) {
                this.parentmessage = '<b>Message From Parent:</b> Do Your Homework';
                this.m_id = item;
            }
        }
    }
</script>
 
<style>
</style>