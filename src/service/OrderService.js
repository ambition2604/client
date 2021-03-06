import axios from 'axios';

const url3 ='http://localhost:3000/api/order';
const url4 ='http://localhost:3000/api/order/list';

class OrderService{
    //Get course
    static async getOrder(user_id){
        var res = await axios.post(url3,{
            "user_id":user_id
        });
        
        if (res)  return res.data;
    }
    static async getOrderList(user_id,course_id){
        var res = await axios.post(url4,{
            "user_id":user_id,
            "course_id":course_id
        });
        
        if (res)  return res.data;
    }

}

export default OrderService;