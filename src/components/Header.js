//Importing the React library to be used in this component
import React from 'react';
//Importing the Header.css stylesheet
import './Header.css'
//Importing the email and location icons files
import locationIcon from '../images/location.png'
import emailIcon from '../images/email.png'

//Creating a Header function with 2 props: profilePicture and name
function Header({ profilePicture, name }) {
  return (
    //Wrapping the content in a header element
    <header>
      {/*Rendering the profile picture with the source URL set to the "profilePicture" prop*/}
      <img id="profile-pic" src={profilePicture} alt="Profile Pic" />
      {/*Wrapping the name and location/email information in a div with the id "header-infos"*/}
      <div id="header-infos">
        {/*Rendering the name with the value set to the "name" prop*/}
        <h1>{name}</h1>
        {/*Wrapping the location information in a div with the class "info-line"*/}
        <div className='info-line'>
          {/*Rendering the location icon with the source URL set to the imported "locationIcon"*/}
            <img className="info-icon" src={locationIcon} alt="location icon representing a globe"/>
            {/*Rendering the location information in a paragraph with the class "info-p"*/}
            <p className='info-p'>Newcastle-Upon-Tyne, UK</p>
        </div>
        {/*Wrapping the email information in a div with the class "info-line"*/}
        <div className='info-line'>
          {/*Rendering the email icon with the source URL set to the imported "emailIcon"*/}
            <img className='info-icon' src={emailIcon} alt="email icon representing an enveloppe"/> 
            {/*Rendering the email address as a link with the "mailto" protocol*/}
            <p className='info-p'><a id="email-address" href="mailto:pauline.ldb@gmail.com">pauline.ldb@gmail.com</a></p>
        </div>
        </div>
    </header>
  );
}

//Exporting the Header component to be used in other files
export default Header;
