import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div class="container">
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><Link to="/" class="nav-link px-2 text-body-secondary">Home</Link></li>
        <li class="nav-item"><Link to="/about" class="nav-link px-2 text-body-secondary">About</Link></li>
        <li class="nav-item"><Link to="/service" class="nav-link px-2 text-body-secondary"> Course</Link></li>
        <li class="nav-item"><Link to="/log" class="nav-link px-2 text-body-secondary">Login</Link></li>
        <li class="nav-item"><Link to="/RS" class="nav-link px-2 text-body-secondary">Signup</Link></li>
      </ul>
      <p class="text-center text-body-secondary">&copy; 2023 , Inc</p>
    </footer>
  </div>
  )
}
