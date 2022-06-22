import React from 'react';
import '../../styles/Resume.css'

export const Resume = () => {
    return (
        <div id="resume">
            <h1 className="res-title">Resume</h1>
            <div className="res-down">
                <h5>Download my resume <a href="https://www.dropbox.com/s/8zlcq3k0it5kpbo/Sam%20Wallace%20Resume.pdf?dl=0">here</a></h5>
            </div>
            <div className="fe-header">
                <h3>Front-end Proficiencies</h3>
            </div>
            <ul className="fe-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <div className="be-header">
                <h3>Back-end Proficiencies</h3>
            </div>
            <ul className="be-list">
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </div>
    )
}