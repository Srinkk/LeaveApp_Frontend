import React from 'react'
import NavBar from './NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div>
    <NavBar/>
      <div className='home_background'>
          <div className='home_overlay'>
            <h1 className='c_h1'>The</h1> 
            <h1 className='c_h1'>easiest way </h1>
            <h1 className='c_h1'> to deal with </h1>
            <h1 className='c_h1'>leave applications</h1>
       
      
        <div className='writing_box'>
        
          <div className='home_writing'>LeaveApp is an application which provides an interface to write and view leave applicatons.This site is exclusively designed for school and college students as well as the faculties and teachers. SignUp or Login to know more. Don't know how to use <a href='/manual'>Click here</a></div>
          </div>
     </div>
     </div>
     </div>
   
  )
}

export default Home
