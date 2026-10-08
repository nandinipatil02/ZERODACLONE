import React from "react";
function Navbar() {
  return (
    
      <nav class="navbar navbar-expand-lg border-bottom bg-body-tertiary" style={{ backgroundColor:'#fff'}}>
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="media/images/logo.svg" alt="Logo" style={{ width: '100px', margin: '20px 0' }} />
          </a>
          
            
          <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginLeft: '500px' }}>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Signup
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                Product
                </a>
              </li>
               <li class="nav-item">
                <a class="nav-link active" href="#">
                Pricing
                </a>
              </li>
               <li class="nav-item">
                <a class="nav-link active" href="#">
                Support
                </a>
              </li>




              
            </ul>
            
          </div>
        </div>
      </nav>
   
  );
}

export default Navbar;
