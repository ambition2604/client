<template>

    <div class="row">
        <div class="col-12 col-md-6 col-xl-4 menu"
        v-for="(menu,index) in menus"
        v-bind:item="menu"
        v-bind:index="index"
        v-bind:key="menu._id">
        <div >
        <h5 class="text" v-on:click="menuSelected(menu.id)">{{ menu.name }}</h5>
        </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4 item"
        v-for="(item,index) in items"
        v-bind:item="item"
        v-bind:index="index"
        v-bind:key="item._id">
        <div >
          <img class="img" src="https://cdn.tgdd.vn/Files/2020/05/16/1255894/cach-lam-com-lam-thom-ngon-deo-ngot-don-gian-chuan-vi-tay-bac.jpg" width="60%" height="60%" alt="">
        <h5>{{ item.name }}</h5>
         <b-input-group class="button">
  <b-input-group-prepend>
    <b-btn variant="outline-info" @click="decrement()">-</b-btn>
  </b-input-group-prepend>

  <b-form-input type="number" v-model="quantity"></b-form-input>

  <b-input-group-append>
    <b-btn variant="outline-secondary"  @click="increment()">+</b-btn>
  </b-input-group-append>
</b-input-group>

        </div>
        </div>
      </div>
      
</template>
<script>
import MenuService from '../service/MenuService'
import ItemService from '../service/ItemService'
export default {
    components:{
    },
    data() {
        return {
           title:'',
           id: null,
           menus:[],
           n:[],
           items:[],
           quantity: null
        }
    },
    async created() {
        this.title =  localStorage.getItem('title_course');
        this.id =  localStorage.getItem('shop_id');
        this.menus = await MenuService.getMenubyID(this.id);
        this.items = await ItemService.getItem();
        this.menus.forEach(async (element) => {
             this.n[element.name] = JSON.stringify(element);
        });
        console.log(this.n);

    },
    methods: {
      async menuSelected(id){
          console.log(id);
          this.items = await ItemService.findItembyMenu(id);
      },
       increment() {
      this.quantity++;
      },
      decrement() {
      if (this.quantity === 0) {
        this.quantity = 0;
      } else {
        this.quantity--;
      }
      }
    },
}
</script>
<style scoped>
  .menu{
    padding-right: 1px;
    padding-left: 1px;
    margin-bottom: 0px;
    text-align: center;
    box-sizing: border-box;
  }
  .text{
    
    background-color: skyblue;
    padding-top: 8px;
    padding-bottom: 8px;
    font-family: Comic Sans MS;
  }
  .img{
    
  }
  .item{
    padding-left: 200px;
    padding-bottom: 30px;
    padding-top: 30px;
  }
  .button{
    padding-right: 240px;
    padding-left: 60px;
  }
</style>