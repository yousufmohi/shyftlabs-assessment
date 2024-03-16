import React from 'react'
import { useState } from 'react';
import Nav from './Nav'


export default function Student() {

  const [firstName,setFirstName] = useState('');
  const [FamilyName,setFamilyName] = useState('');
  const [dob,setDOB] = useState('mm/dd/yyyy');
  
  return (
    <>
    <header className="bg-gray-950 sticky top-0 z-[20] mx-auto flex w-full items-center border-b border-gray-100 p-8">
    <Nav/>
    </header>
    <div className='flex justify-center w-full'>
    <div className='flex flex-col items-center w-96 h-96 bg-amber-50 mt-40'>
        <label className='mt-20'>First Name:</label>
        <input placeholder="Yousuf" className='w-60 border border-gray-600' type="name" required onChange={event => {setFirstName(event.target.value)}}></input>
        <label>Family Name:</label>
        <input placeholder="Mohiuddin" className='w-60 border border-gray-600' type="name"></input>
        <label >Date of Birth:</label>
        <input className='w-60 border border-gray-600' type="date"></input>
        <button >Add Student Info</button>
    </div>
    </div>
    </>

  )
}
