import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { getStudents, myDeleteStudent } from "./Layout/Api";
export function Home()
{
    const[students,setStudents]=useState([]);

    useEffect(() => {
      loadStudents();
    }, []);


      const loadStudents= async()=>{
         const result=await axios.get("http://localhost:3003/students");
         console.log(result);
 setStudents(result.data);
     }

     const deleteStudent= async(studId)=>
     {
await myDeleteStudent(studId);
loadStudents();
     }


    return(
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table className="table border shadow">
  <thead className="table-dark">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Department</th>
      <th scope="col">Standard</th>
      <th scope="col">Year</th>
      <th scope="col">Details</th>
    </tr>
  </thead>
  <tbody>
    {
        students.map((student,index)=>(
            <tr>
            <th scope="row">{index+1}</th>
            <td>{student.name}</td>
            <td>{student.dept}</td>
            <td>{student.standard}</td>
            <td>{student.year}</td>
              <td>
             <Button variant="contained" color="primary"style={{marginRight:10}} component={Link} to={`/edit/${student.studId}`}  >EDIT</Button>
             < Button variant="contained" color="secondary" onClick={()=>deleteStudent(student.studId)} >DELETE</Button>
              </td>
            </tr>
        ))}
        
    
  </tbody>
</table>

            </div>
        </div>
    )
}