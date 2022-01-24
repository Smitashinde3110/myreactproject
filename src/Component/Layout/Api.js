import axios from "axios";


 const url='http://localhost:3000/students';
// const url='92.920.920.920/students';



    export const MyAddStudent=async(student)=>{


    return await axios.post(url,student);
   
}

 export const getStudents= async(studId)=>
 {
   studId=studId||'';
   return await axios.get(`${url}/${studId}`);
  } 
export const MyEditStudent=async(studId,student)=>
{
    return await axios.put(`${url}/${studId}`,student);
}
export const  myDeleteStudent= async(studId)=>
{
    return await axios.delete(`${url}/${studId}`)
}






