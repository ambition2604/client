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
        <h5 style="font-family: Comic Sans MS;">{{ item.name }}</h5>
         <b-input-group class="button">
  <b-input-group-prepend>
    <b-btn variant="outline-info" @click="decrement(item)">-</b-btn>
  </b-input-group-prepend>

  <b-form-input type="number" v-model="item.quantity" min="0" ></b-form-input>

  <b-input-group-append>
    <b-btn variant="outline-secondary"  @click="increment(item)">+</b-btn>
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
    data() {
        return {
           title: localStorage.getItem('title_course'),
           id:  localStorage.getItem('shop_id'),
           menus:[],
           items:[],
           total: null,
        }
    },
    async created() {
        this.menus = await MenuService.getMenubyID(this.id);
        var c = [{'id':1,'price':2,'quantity':3}];
        var x= {'id':2,'price':2,'quantity':3};
        c.push(x);
        console.log(c);
        localStorage.setItem('c',JSON.stringify(c));
        console.log(JSON.stringify(c));
        console.log(localStorage.getItem('c'));

  
        if(localStorage.getItem('m_id')===null){
          this.items = await ItemService.findItembyMenu(this.menus[0].id);
          this.items.forEach(async (element) => {
             element.quantity = 0;
             console.log(element);
        })
        }
        else{
          this.items = await ItemService.findItembyMenu(localStorage.getItem('m_id'));
          this.items.forEach(async (element) => {
             element.quantity = 0;
             console.log(element);
        })
        }
        
    },
    methods: {
      async menuSelected(id){
          localStorage.setItem('m_id',id);
          this.items = await ItemService.findItembyMenu(id);
          this.items.forEach(async (element) => {
             element.quantity = 0;
             console.log(element);
        })
      },
      increment(item) {
        item.quantity ++;
        console.log(JSON.stringify(item));
        var c = [];
        c.push(JSON.stringify(item));
        console.log(c);
      },
      decrement(item  ) {
      if (item.quantity == 0) {
        item.quantity = 0;

      } else {
        item.quantity --;
        this.total -= item.quantity*item.price;
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
    padding-right: 270px;
  }
</style>