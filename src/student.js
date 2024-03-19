import React from 'react'
import { useState, useEffect} from 'react';
import Nav from './Nav'
import Axios from 'axios'

export default function Student() {

  // DEFAULT values for the fields
  const [firstName,setFirstName] = useState('');
  const [FamilyName,setFamilyName] = useState('');
  const [dob,setDOB] = useState('mm/dd/yyyy');
  var [students,setStudents] = useState([]);
  useEffect(() => {
    getStudents();
  }, []);

  // calculating todays date
  var today = new Date();
  var year = today.getFullYear() - 10;
  var day = today.getDate();
  var month = today.getMonth()+1;
  // add leading zeros to the dates which require it
  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }
  // concatenating a string for the current day
  let date = year + "-" + month + "-" + day;

  const addStudent = () => {
    Axios.post("http://localhost:3001/addstudent", {
      firstName: firstName,
      familyName: FamilyName,
      dob: dob,
    }).then(() => {
        console.log("success");
    });
  };

  const convert = (value) => {
    let newvalue = value.split("T");
    return newvalue[0];
  }

  const getStudents = () => {
    Axios.get("http://localhost:3001/students").then((response) => {
      console.log(response);
      setStudents(response.data);
    });
  };

  const resetStudents = () => {
    Axios.delete("http://localhost:3001/removestudent").then((response) => {
      window.location.reload();
    });
  };

  const handleSubmit = () => {
    // ensuring conditions are met
    var split = dob.split("-");
    var dobYear = Number(split[0])
    if(firstName === "" || FamilyName === "" || dobYear > year ) {
      return;
    }
    alert("Fields Submitted");
    addStudent();
  }
  return (
    <>
    <header className="bg-gray-950 sticky top-0 z-[20] mx-auto flex w-full items-center border-b border-gray-100 p-8">
    <Nav/>
    </header>
    <div>
      <h1 className='text-center mt-20 text-4xl font-bold'>Students</h1>
    </div>
    <div className='flex justify-center w-full'>
      <form className='flex flex-col items-center w-96 h-96 bg-gray-50 mt-20 border-solid rounded-lg border-2 shadow-md'>
        <label className='mt-20'>First Name:</label>
        <input placeholder="Yousuf" className='w-60 border border-gray-600' type="name" required onChange={event => {setFirstName(event.target.value)}}></input>
        <label>Family Name:</label>
        <input placeholder="Mohiuddin" className='w-60 border border-gray-600' type="name" required onChange={event => {setFamilyName(event.target.value)}} ></input>
        <label >Date of Birth:</label>
        <input className='w-60 border border-gray-600' type="date" required onChange={event => {setDOB(event.target.value)}}  max={date}></input>
        <button className='bg-white rounded-lg w-40 h-10 mt-10 hover:bg-sky-500 hover:text-white' onClick={handleSubmit}>Add Student Info</button>
      </form>
    </div>
    

    <div className='flex justify-center w-full'>
      <button className='bg-sky-500 w-40 rounded-lg  text-white h-10 mt-10 hover:bg-white hover:text-black border border-gray-600' onClick={resetStudents}>Reset Data</button>
    </div>

      {students.length > 0 && (
          <div className='flex justify-center w-full'>
            <table className='w-96 mt-10 mb-10'>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Family Name</th>
                  <th>Date of Birth</th>
                </tr>
              </thead>
              <tbody>
                {students.map((val, key) => (
                  <tr key={key}>
                    <td className="border border-gray-600 p-2">{val.firstname}</td>
                    <td className="border border-gray-600 p-2">{val.lastname}</td>
                    <td className="border border-gray-600 p-2">{convert(val.date)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
    </>

  )
}
