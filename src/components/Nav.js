import React from 'react';

//This component will be a functional component
//create div with a class of nav-wrapper(this is some kind of shortcut)
//These classes are coming from the materialize CSS framework
//Now go ahead and add a link there and give it a className brandlogo
//We need to include the component into App.js and also export it
//Include it inside the div in App.js
//Our Navbar is completed!!
//Then create the SearchArea.js inside the components folder


const Nav = () => {
   return (
     <nav>
        <div className="nav-wrapper container">
            <a href="/#" className="brand-logo">Movie Finder</a>
        </div>
     </nav>
   )
}

export default Nav;
