<template>
  <div class="container" id="course">
    <div>
  <b-button v-b-modal.modal-1><b-icon icon="plus-square"></b-icon></b-button>

  <b-modal id="modal-1" title="Thêm mới">
    <div>
			<form class="form-group">
        <label>Tiêu đề</label><hr>
				<input type="text" name="name_course" v-model="input.title" class="form-control" required>
        <label>Mô tả</label><hr>
				<input type="text" name="des_course" v-model="input.des" class="form-control" required><hr>
        <label>Cửa hàng</label><hr>
        <select id="cars" class="form-control" v-model="selected" >
        <option v-for="(shop,index) in shops"
          v-bind:item="shop"
          v-bind:index="index"
          v-bind:value="shop.id"
          v-bind:key="shop._id" >{{shop.name}}</option>
        </select>
        <hr>
				<button type="button" class="btn btn-primary" v-on:click="add()">Tạo mới</button>
			</form>
		</div>
  </b-modal>
  </div>
      <h1>Course</h1>
      <hr>
      <p class="error" v-if="error">{{ error }}</p>
      <div class="row">
        <div class="col-12 col-md-6 col-xl-4"
        v-for="(post,index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id">

        <p class="text" style="font-weight:bold">Shop : {{ post.title }}</p>
        <p class="text">Description : {{ post.des }}</p>
        <p class="text">Created Date: {{post.createDate}}</p>
        <p class="text">Status: {{post.status}}</p>
        
        </div>
      </div>
  </div>
</template>

<script>
import CourseService from '../service/CourseService'
import ShopService from '../service/ShopService'
import UserService from '../service/UserService'
export default {
  name: 'MyCourse',
  data() {
    return {
      posts: [],
      error: '',
      text: '',
      shops: [],
      selected: '', 
      input: {
                    title: "",
                    des: "",
                    shop_name:""
                }
    } 
  },
  async created() {
    try {
      this.posts = await CourseService.getCourses();
      this.shops = await ShopService.getShop();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async add () {
        var user = JSON.stringify(await UserService.findUsers(localStorage.getItem('username')));
        user = user.toString();
        var host_id = user.substring(7,8);
        try { 
            await CourseService.addCourse(this.input.title,this.input.des,this.selected,host_id);
            location.reload();
        } catch (err) {
            this.error = err.message;
        }
    }
  },
}
</script>
<style scoped>
#course{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.5;
}
.bg-login {
    position: relative;
    width: 100%;
	margin-left: 40%;
    min-height: auto;
    background-position: right 0px top 0px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
     background-size: cover;
    -o-background-size: cover;
  }
  .login-form {
    border: 1px solid #DDD;
    max-width: 400px;
    padding: 20px;
    margin: 100 auto 0 auto;
  }
</style>