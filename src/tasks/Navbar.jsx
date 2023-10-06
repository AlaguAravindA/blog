import React, { useRef, useState } from "react";
import { navicon } from "./demo";
import Profile from "./Profile";
import { arrtitle,content } from "./Content";
export default function Navbar({ children }) {
  const input = useRef(null);
  const [index,setindex]=useState(-1);
  
  function handleSearch(e){
    e.preventDefault();
    const a = arrtitle
    .map((title, index) => {
      if (title.includes(input.current.value)) {
        return index; // Return the index when the condition is met
      }
      return undefined; // Return undefined for non-matching items
    })
    .filter(index => index !== undefined); // Filter out the undefined values
    setindex(a);
  
  
  

 
  }
  return (
    <>
      <nav class='navbar  bg-body-tertiary'>
        <div class='container-fluid'>
          <a class='navbar-brand' href='#'>
          <img src={navicon} alt="Bootstrap" width="44" height="44"/>
          </a>

          <ul class=' me-auto mb-2 mb-lg-0 list-inline'>
            <li class='list-inline-item ms-3'>
              <a class='nav-link active' aria-current='page' href='#'>
                Home
              </a>
            </li>
            <li class='list-inline-item ms-3'>
              <a class='nav-link' href='#'>
                Link
              </a>
            </li>

            <li class='list-inline-item ms-3 dropdown'>
              <a
                class='nav-link dropdown-toggle'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                About
              </a>
              <ul class='dropdown-menu'>
                <li>
                  <a class='dropdown-item' href='#'>
                    Join us
                  </a>
                </li>
                <li>
                  <a class='dropdown-item' href='#'>
                    Donate
                  </a>
                </li>
                <li>
                  <hr class='dropdown-divider' />
                </li>
                <li>
                  <a class='dropdown-item' href='#'>
                    Term of use
                  </a>
                </li>
              </ul>
            </li>

            <li class='list-inline-item ms-3 dropdown'>
              <a
                class='nav-link dropdown-toggle'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                View
              </a>
              <ul class='dropdown-menu'>
                <li>
                  <a class='dropdown-item' href='#'>
                    Most Viewd
                  </a>
                </li>
                <li>
                  <a class='dropdown-item' href='#'>
                    Most Commented
                  </a>
                </li>
                <li>
                  <a class='dropdown-item' href='#'>
                    Most Liked
                  </a>
                </li>
              </ul>
            </li>
            <li class='list-inline-item ms-3'>{children}</li>
          </ul>
          <form class='d-flex' role='search' >
            <input
              class='form-control me-2'
              ref={input}
              type='search'
              id="search"
              placeholder='Search'
              aria-label='Search'
              
            />
            <a href=""  data-bs-toggle="modal" data-bs-target="#exampleModal">

            <button class='btn btn-outline-success' type='submit' onClick={handleSearch}>
              Search
            </button>
            </a>
            
            

            <Profile></Profile>
          </form>
        </div>
     
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">{arrtitle[index]}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       {content[index]}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</nav>
      
    </>
  );
}




