import axios from 'axios';

const url ='http://localhost:3000/api/course';

class CourseService{
    //Get course
    static async getCourses(){
        var res = await axios.get(url);
        if (res)  return res.data;
    }

    //Create course
    static insertCourse(text)   {
        return axios.post(url,{
            text
        });
    }
    //Delete course
    static deleteCourse(id) {
        return axios.delete(`${url}${id}`);
    }
}
export default CourseService;