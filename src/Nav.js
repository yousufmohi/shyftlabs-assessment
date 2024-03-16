import React from 'react'

import { Link } from 'react-router-dom'
export default function Nav() {
  return (
    <>
    <Link to="/">
        <p className="text-gray-100 mx-3">Home</p>
    </Link>
    <Link to="/students">
        <p className="text-gray-100 mx-3">Students</p>
    </Link>
    <Link to="/">
        <p className="text-gray-100 mx-3">Courses</p>
    </Link>
    <Link to="/">
        <p className="text-gray-100 mx-3">Results</p>
    </Link>
    </>
    
 )
}
