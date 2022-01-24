import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from "@material-ui/core";
import { MyEditStudent } from "../Component/Layout/Api";
import { useParams } from "react-router-dom";
import { getStudents } from "../Component/Layout/Api";

const usestyle=makeStyles({
  container:{
    width:'50%',
    margin:'5% 0 0 25%',
    '&>*':{
      marginTop:20
    }
  }
})

const initialValues={
  name:"",
  dept:"",
  standard:"",
  year:""

}

export const EditStudent = () => {

 const [student,setStudent]=useState(initialValues);
 const {name,dept,standard,year}=student;
 const {studId}=useParams();
  const classes=usestyle();
  const navi=useNavigate();

  useEffect(()=>
  {
    loadStudentData();

  });
  const loadStudentData= async() =>
  {
  const response=await getStudents(studId);
  setStudent(response.data);
  }
 


  const onValueChange=(e) =>
  {
    
    setStudent({...student, [e.target.name]:e.target.value})
  }

  const editStudentDetails= async()=>
  {
    await MyEditStudent(studId,student)
  }

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Edit Student</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='name' value={name}/>
      </FormControl>

      <FormControl>
        <InputLabel>Department</InputLabel>
        <Input   onChange={(e)=>onValueChange(e)}  name='dept' value={dept}/>
      </FormControl>

      <FormControl>
        <InputLabel>Standard</InputLabel>
        <Input   onChange={(e)=>onValueChange(e)} value={standard}  name='standard'/>
      </FormControl>

      <FormControl>
        <InputLabel>Year</InputLabel>
        <Input  onChange={(e)=>onValueChange(e)} value={year} name='year'/>
      </FormControl>
{/* <Button variant="contained" onClick={()=>addStudentDetails()} color="primary">Submit</Button> */}
<Button variant="contained" onClick={() => { editStudentDetails(); navi("/");}} color="primary">Submit</Button>

    </FormGroup>
  );
};


