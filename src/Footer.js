import React from 'react';
import './notestyle.css';

const Footer =() => {

    const Year = new Date ().getFullYear();

    return(
           <>
             <footer className="end">
              <p>Copyright © {Year}</p>

             </footer>
         </>
);
}
export default Footer;