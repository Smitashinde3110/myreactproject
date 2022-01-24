import React from "react";
import { NavLink} from "react-router-dom";

export function Navbar()
{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
       <div className="container">
  
          <NavLink className="navbar-brand"  to="#">Student Managment System</NavLink>
         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <NavLink className="nav-link active"   to="/">Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link "    to="/about">About</NavLink>
              </li>
          
              <li className="nav-item">
                <NavLink className="nav-link "  to="/contact">Contact Us</NavLink>
              </li>
             
            
             
              
            </ul>
        
            
                <NavLink className="btn btn-outline-light" to="/student/add">Add Student</NavLink>
              
          </div>
        </div>

      
      </nav>
    )
}