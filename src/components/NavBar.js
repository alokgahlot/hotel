import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>

      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <p className="navbar-brand" >
            Hotel Kunj Vihari
          </p>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" href="#">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="#">About Us</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" href="#">Contact Us</NavLink>
              </li>
              {/* <li className="nav-item">
          <NavLink className="nav-link" href="#">Cart</NavLink>
        </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" href="#">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="#">Registration</NavLink>
              </li>
            </ul>

          </div>
        </div>
      </nav>

    </div>
  )
}
