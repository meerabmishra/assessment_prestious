import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
  return (
    <div className='home-links'>
      <Link to="/about">About</Link>
      <Link to="/head-tail">Head & Tail</Link>
      
    </div>
  )
}

export default Home