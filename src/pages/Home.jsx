import React from 'react'
import { NavLink } from 'react-router'

function Home() {
  return (
    <div>
      <h1>HOME</h1>
      
        <NavLink to="/search">
          Search Character
        </NavLink>

    </div>
  )
}

export default Home