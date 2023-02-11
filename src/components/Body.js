//Importing the React library to be used in this component
import React from 'react';
//Importing the Body.css stylesheet
import './Body.css'

//Creating a Body component that returns the structure of the page
function Body() {
    return (
        //Wrapping the content in a div element with the id 'body'
        <div id="body">
            {/*Wrapping the text blocks into a div element with the id 'body-top'*/}
            <div id="body-top">
                {/*Creating four div elements with the class 'body-block' to contain the different text sections, and rendering their content*/}
                <div className='body-block' id='summary'>
                    <h2>Summary</h2>
                    <p>Highly motivated and enthusiastic Web Developer with a passion for front-end development and a strong desire to learn and grow in the field. Honed skills through personal projects, online courses, and hands-on experience with JavaScript, HTML, and CSS. Fast learner and great team player with a strong work ethic and a desire to continuously improve.</p>
                </div>

                <div className='body-block' id='education'>
                <h2>Education</h2> 
                    <ul>
                        <li>
                            <b>Web Development Skills Bootcamp</b> 
                            <br/>@HyperionDev (Nov. 2022 - Feb. 2023)
                            <br/><i>Web Development Bootcamp (currently enrolled)</i>
                            <br/>Learning HTML, CSS, JavaScript, React, and Node.js.
                        </li>
                        <li>
                            <b>Front-End Engineer Career Path</b>
                            <br/>@Codecademy
                            <br/>Online Web Development Course (currently completing)
                            <br/>Learning HTML, CSS, JavaScript, Git, React, Redux, Jest, Enzyme, Netlify, optimisation with SEO.
                        </li>
                    </ul>
                </div>
                
                <div className='body-block' id='experience'> 
                    <h2>Experience</h2>
                    <ul>
                    Acquired through personal projects and online courses:
                        <li>
                            Proficient in static and dynamic web development and have worked on various web development projects using HTML, CSS, JavaScript.
                        </li>
                        <li>
                            Good understanding of object-oriented programming concepts and have implemented them in projects.
                        </li>
                        <li>
                            Knowledge of functional programming and have used it in projects to improve code efficiency.
                        </li>
                        <li>
                            Hands-on experience in single-page application development using React.js library.
                        </li>
                        <li>
                            Experienced in using source version control systems like Git.
                        </li>
                        <li>
                            Familiar with integrating web APIs to fetch and manipulate data in web applications.
                        </li>
                    </ul>
                </div>
                
                <div className='body-block' id='skills'>
                    <h2>Skills</h2>
                    <ul>
                        <li>
                            <b>Key Skills</b>: HTML5, CSS3, Javascript, React.js
                        </li>
                        <li>
                            <b>Core SKills</b>: communication, teamwork, problem-solving, creativity, leadership, fast learner.
                        </li>
                        <li>
                            <b>Languages</b>: French (Native), English (Bilingual Proficiency), Spanish (Limited Working proficiency)
                        </li>
                    </ul>
                </div>
            </div>
            
            {/*Wrapping the LinkedIn and Github buttons in a div element with the id 'link-buttons*/}
            <div id='link-buttons'>
                {/*Rendering the Github button*/}
                <a href="https://github.com/paulineldb" target={'_blank'} rel="noreferrer">
                <button>Visit my Github Page</button>
                </a>
                {/*Rendering the LinkedIn button*/}
                <a href="https://www.linkedin.com/in/pauline-leli%C3%A8vre-du-broeuille-83a498254/" target={'_blank'} rel="noreferrer">
                <button>Connect on LinkedIn</button>
                </a>
            </div>  
        </div>
    );
};

//Exporting the Body component to be used in other files
export default Body;