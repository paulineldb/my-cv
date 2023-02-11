// Importing the React library to be used in this component
import React from 'react';
// Importing the App.css stylesheet to style the component
import './App.css';
// Importing the Header component
import Header from './components/Header.js';
// Importing the profile picture file
import ProfilePic from './images/profile-pic.png'
//Importing the Body component
import Body from './components/Body.js'


function App() {
  // Creating a constant "profilePicture" and assigning it the imported profile picture
  const profilePicture = ProfilePic;
  // Creating a constant "name" and assigning it a string value of the name
  const name = 'Pauline Lelievre Du Broeuille';

  return (
    // Wrapping the components in a div with the class "App"
    //Rendering the Header component with the profile picture and name props
    //Rendering the Body component
    <div className="App">
      <Header profilePicture={profilePicture} name={name} />
      <Body />
    </div>
  );
};

// Exporting the App component to be used in other files
export default App;
