import React from 'react'
import { useState,useEffect} from 'react';
import Nav from './Nav'
import Axios from 'axios'

export default function Courses() {
    const [courseName,setCourseName] = useState('');
    var [courses,setCourses] = useState([]);

    // imported the axios module to allow easy access to database operations
    const addCourse = () => {
        Axios.post("http://localhost:3001/addcourse", {
          courseName: courseName,
        }).then(() => {
            console.log("success");
        });
      };
    
    const getCourses = () => {
    Axios.get("http://localhost:3001/courses").then((response) => {
        console.log(response);
        setCourses(response.data);
    });
    };
    // resets the table
    const resetCourses = () => {
        Axios.delete("http://localhost:3001/removecourse").then((response) => {
          // reload to ensure the table updates
          window.location.reload();
        });
      };
    // send alerts depending on the situation upon submit
    const handleSubmit = () => {
        if(courseName === "") {
          return;
        }
        alert("Fields Submitted");
        addCourse();
    };
    // frequently getting courses to have the most recent value
    useEffect(() => {
        getCourses(); 
      }, []);

  return (
    <>
    <header className="bg-gray-950 sticky top-0 z-[20] mx-auto flex w-full items-center border-b border-gray-100 p-8">
    <Nav/>
    </header>
    <div>
      <h1 className='text-center mt-20 text-4xl font-bold'>Courses</h1>
    </div>
    <div className='flex justify-center w-full'>
      <form className='flex flex-col items-center w-96 h-96 bg-gray-50 mt-20 border-solid rounded-lg border-2 shadow-md'>
        <label className='mt-20 mb-10'>Enter Course</label>
        <input placeholder="Discrete Math" className='w-60 border border-gray-600' type="name" required onChange={event => {setCourseName(event.target.value)}}></input>
        <button className='bg-white rounded-lg w-40 h-10 mt-10 hover:bg-sky-500 hover:text-white' onClick={handleSubmit}>Add Course</button>
      </form>
    </div>

    <div className='flex justify-center w-full'>
      <button className='bg-sky-500 w-40 rounded-lg  text-white h-10 mt-10 hover:bg-white hover:text-black border border-gray-600' onClick={resetCourses}>Reset Data</button>
    </div>

      {courses.length > 0 && (
          <div className='flex justify-center w-full'>
            <table className='w-96 mt-10 mb-10'>
              <thead>
                <tr>
                  <th>Courses</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((val, key) => (
                  <tr key={key}>
                    <td className="border border-gray-600 p-2">{val.coursename}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
    </>
  )
}
