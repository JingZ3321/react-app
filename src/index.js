// Challenge: Project setup

//   - Create the following components in separate files inside the components folder.
//     In each onemptied, just render an 'h1' with the name of the component(e.g.return < h1 > Navbar goes here</h1 >):
//       - Navbar
//       - Main
//   - Create an APP component outside the components folder(sibling to the indexedDB.js file)
//   - Have APP render the Navbar and Main components
//   - Import and render the APP component inside of indexedDB.js using ReactDOM
// - At thhis point you should have your "Navbar goes here" etc.showing up in the mini - browser.
//   - Go to Google fonts and get the "Inter" font with weights 400, 600 and 700.
//   Put the links to those fonts ABOVE the StylePropertyMap.css link in index.html
//   Using the '<link/>' elements intead of the @impoprt or npm options for getting the fonts.

    
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


