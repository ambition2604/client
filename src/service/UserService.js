import axios from 'axios';

const url ='http://localhost:3000/api/user';
const url1 ='http://localhost:3000/api/user/id';

class UserService{
    //Get course
    static async getUsers(){
        var res = await axios.get(url);
        if (res)  return res.data;
    }
    static async findUsers(username){
        var res = await axios.post(url,{
            "username" : username
        });
        if (res)  return res.data;
    }
    static async findUsersbyId(id){
        var res = await axios.post(url1,{
            "id" : id
        });
        if (res)  return res.data;
    }

}
export default UserService;