import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <div>
        <nav class="navbar navbar-expand-lg bg-warning">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">Travel Itenary</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Add Travel details</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/ViewTravel">View Travel details</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Search">Search Travel details</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Delete"> Delete travel details</Link>
        </li>
       
      
          
      </ul>
    
    </div>
    </div>
    </nav>
    </div>
    )
    }