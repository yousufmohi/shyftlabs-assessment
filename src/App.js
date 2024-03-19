import Nav from './Nav';
import './index.css';
import { Link } from 'react-router-dom'
function App() {
  return (
    <>
    <header className="bg-gray-950 sticky top-0 z-[20] mx-auto flex w-full items-center p-8">
    <Nav/>
    </header>
    <div className='w-full bg-violet-600 h-3/6 fixed justify-center'>
      <h1 className='text-center text-5xl mt-20 text-white'>Welcome to the Student Management System</h1>
      <p className='text-center text-1xl mt-10 text-white'>On the top left you should see a navbar, which lets you add students, courses, and scores, to a database.</p>
      <div className='flex flex-row justify-center'>
      <Link to="/students">
        <button className='mx-20 mt-20 w-40 h-10 rounded-2xl bg-white hover:bg-violet-600 hover:text-white hover:border-gray-100 border-transparent border-2'>Students</button>
      </Link>
      <Link to="/courses">
        <button className='mx-20 mt-20 w-40 h-10 rounded-2xl bg-white hover:bg-violet-600 hover:text-white hover:border-gray-100 border-transparent border-2'>Courses</button>
      </Link>
      <Link to="/results">
        <button className='mx-20 mt-20 w-40 h-10 rounded-2xl bg-white hover:bg-violet-600 hover:text-white hover:border-gray-100 border-transparent border-2'>Results</button>
      </Link>
      </div>
    </div>
    </> 
  );
}

export default App;
