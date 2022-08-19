import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    
                    <Link to='/' style={{textDecoration:'none'}}>
                    <li class="nav-item" style={{marginRight:'30px',fontSize:'20px'}}>
                    Home
                    </li>
                    </Link>

                    <Link to='/create' style={{textDecoration:'none'}}>
                    <li class="nav-item" style={{marginRight:'30px',fontSize:'20px'}}>
                    Product Create
                    </li>
                    </Link>
    
                    <Link to='/list' style={{textDecoration:'none'}}>
                    <li class="nav-item" style={{marginRight:'30px',fontSize:'20px'}}>
                    Product List
                    </li>
                    </Link>



     
    </ul>
  </div>
</nav>
    </div>
  )
}
