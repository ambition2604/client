import axios from 'axios';


const url ='http://localhost:3000/api/login';
const url1 ='http://localhost:3000/api/login/checktoken';
 class AuthenticationService{
    static async check(name,pass){
        var res = await axios.post(url,{
            "username" : name,
            "password" : pass
        });
        if (res)  return res.data;
    }
    static async verify(token){
        var res = await axios.post(url1,{
            "token" : token
        });
        if (res)  return res.data;
    }
 }
export default AuthenticationService;