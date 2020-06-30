import React from "react";

const NavBar = () => {
  return (
    <nav>
      <div className='nav-wrapper amber darken-4'>
        <a href='#' className='brand-logo'>
          Logo
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a href='sass.html'>Home</a>
          </li>
          <li>
            <a href='badges.html'>About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
