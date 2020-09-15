<template>
    <div>
        <div class="card m-3" style="width: 25rem;">
            <div class="card-body">
                <h5 class="card-title" v-text="thecardtitle"></h5>
                <p class="card-text" v-html="thecardbody"></p>
                <div v-if="parentmessage" class="card-text alert alert-warning" v-html="parentmessage"></div>
                <div v-html="m_id"></div>
                <div class="col-12 col-md-6 col-xl-4 item"
        v-for="(item,index) in items"
        v-bind:item="item"
        v-bind:index="index"
        v-bind:key="item._id">
        <div >
          <img class="img" src="https://cdn.tgdd.vn/Files/2020/05/16/1255894/cach-lam-com-lam-thom-ngon-deo-ngot-don-gian-chuan-vi-tay-bac.jpg" width="60%" height="60%" alt="">
        <h5>{{ item.name }}</h5>

        </div>
        </div>
            </div>
        </div>
    </div>
</template>
 
<script>

    export default {
        props: {
            m_id:Number,
            parentmessage:String
        },
        data() {
            return {
                items:[],
                thecardtitle: 'Child Component!',
                thecardbody: 'I\'m just a child.',
            }
        },
    }
</script>
 
<style>
</style>