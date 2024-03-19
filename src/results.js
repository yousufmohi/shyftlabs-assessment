import React from 'react'
import { useState,useEffect} from 'react';
import Nav from './Nav'
import Axios from 'axios'
export default function Results() {

    var scores = ['A','B','C','D','E','F'];
    var [courses,setCourses] = useState([]);
    var [students,setStudents] = useState([]);
    var [name,setName] = useState('');
    var [course,setCourse] = useState('');
    var [score,setScore] = useState('');
    var [results,setResults] = useState([]);

    const addResult = () => {
        Axios.post("http://localhost:3001/addresult", {
          name: name,
          course: course,
          score: score,
        }).then(() => {
            console.log("success");
            setName('');
            setCourse('');
            setScore('');
        });
      };

      const getResults = () => {
        Axios.get("http://localhost:3001/results").then((response) => {
          console.log(response);
          setResults(response.data);
        });
      };

      const resetResults = () => {
        Axios.delete("http://localhost:3001/removeresults").then((response) => {
          window.location.reload();
        });
      };

    const getStudents = () => {
        Axios.get("http://localhost:3001/students").then((response) => {
          console.log(response);
          setStudents(response.data);
        });
      };

    const getCourses = () => {
    Axios.get("http://localhost:3001/courses").then((response) => {
        console.log(response);
        setCourses(response.data);
    });
    };

    const handleSubmit = () => {
        if(name === "" || course === "" || score === "") {
            alert("Please Fill Out Each Field");
            return;
        }
        alert("Fields Submitted");
        addResult();
    };

    useEffect(() => {
        getCourses();
        getStudents(); 
        getResults();
      }, []);

  return (
    <>
    <header className="bg-gray-950 sticky top-0 z-[20] mx-auto flex w-full items-center border-b border-gray-100 p-8">
    <Nav/>
    </header>

    <div>
      <h1 className='text-center mt-20 text-4xl font-bold'>Results</h1>
    </div>
    <div className='flex justify-center w-full'>
      <form className='flex flex-col items-center w-96 h-96 bg-gray-50 mt-10 border-solid rounded-lg border-2 shadow-md'>
        <label className='mt-10'>Courses</label>
        <select className='w-40 mt-3'  required onChange={(event) => setCourse(event.target.value)}>
            <option></option>
            {courses.map((val, key) => (
                  <option key={key} value={val.coursename}>
                    {val.coursename}
                  </option>
            ))}
        </select>
        <label className='mt-5'>Students</label>
        <select className='w-40 mt-3'  required onChange={(event) => setName(event.target.value)}>
        <option></option>
            {students.map((val, key) => (
                <option key={key} value={`${val.firstname} ${val.lastname}`}>
                    {val.firstname} {val.lastname}
                </option>
            ))}
        </select>
        
        <label className='mt-5'>Score</label>
        <select className='w-40 mt-3' onChange={(event) => setScore(event.target.value)}>
        <option></option>
        {scores.map((val, key) => (
            <option key={key} value={scores.score}>
                {val}
            </option>
        ))}        
        </select>
        <button className='bg-white rounded-lg w-40 h-10 mt-10 hover:bg-sky-500 hover:text-white' onClick={handleSubmit}>Submit</button>
      </form>
    </div>

    <div className='flex justify-center w-full'>
      <button className='bg-sky-500 w-40 rounded-lg  text-white h-10 mt-10 hover:bg-white hover:text-black border border-gray-600' onClick={resetResults}>Reset Data</button>
    </div>

      {results.length > 0 && (
          <div className='flex justify-center w-full'>
            <table className='w-96 mt-10 mb-10'>
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Student</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {results.map((val, key) => (
                  <tr key={key}>
                    <td className="border border-gray-600 p-2">{val.coursename}</td>
                    <td className="border border-gray-600 p-2">{val.studentname}</td>
                    <td className="border border-gray-600 p-2">{val.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
    </>
    
  )
}
