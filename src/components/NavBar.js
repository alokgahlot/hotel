import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>

      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <p className="navbar-brand" >
            Hotel Kunj Vihari
          </p>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
             
              <li className="nav-item">
          
                <NavLink className="nav-link" aria-current="page" to="/">
                <button style={{
                  borderWidth:0,
                 backgroundColor:'transparent',
                }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                Home
              </button>
                
                </NavLink>

              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                
                <button style={{
                  borderWidth:0,
                  backgroundColor:'transparent',
                 
                }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
             <p>Aboutus</p>   
              </button>
               
                
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                <button style={{
                  borderWidth:0,
                  backgroundColor:'transparent',

                }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                 >
                Contactus
              </button>
                
                
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="#">Cart</NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                <button style={{
                  borderWidth:0,
                  backgroundColor:'transparent',
                 
                }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                Login
              </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                <button style={{
                  borderWidth:0,
                 backgroundColor:'transparent',
                  
                }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                Registration
              </button>
                </NavLink>
              </li>
            </ul>

          </div>
        </div>
      </nav>

    </div>
  )
}
