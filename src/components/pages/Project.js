import React from 'react';
import { Card } from 'react-bootstrap';
import { FaGithub, FaHome } from 'react-icons/fa';
import '../../styles/Project.css'


const Project = () => {
    const projects = [
        {
            title: 'SpaceX LaunchPad',
            image: process.env.PUBLIC_URL + '/images/launchpad.png',
            link: 'https://sammymayhem.github.io/launchpad-gp-1/',
            repo: 'https://github.com/sammymayhem/launchpad-gp-1',
        },
        {
            title: 'Augur',
            image: process.env.PUBLIC_URL + '/images/augur.png',
            link: 'https://augur-app.herokuapp.com/',
            repo: 'https://github.com/sammymayhem/the-coin-flips',
        },
        {
            title: 'JATE Text Editor',
            image: process.env.PUBLIC_URL + '/images/jate.png',
            link: 'https://goat-text-edit.herokuapp.com/',
            repo: 'https://github.com/sammymayhem/goat-note-taker',
        },
        {
            title: 'README Generator',
            image: process.env.PUBLIC_URL + '/images/readme-gen.png',
            link: 'https://goat-text-edit.herokuapp.com/',
            repo: 'https://github.com/sammymayhem/goat-note-taker',
        },
        {
            title: 'Social Media API',
            image: process.env.PUBLIC_URL + '/images/social-media-api.png',
            link: 'https://goat-text-edit.herokuapp.com/',
            repo: 'https://github.com/sammymayhem/goat-note-taker',
        },
        {
            title: 'Team Generator',
            image: process.env.PUBLIC_URL + '/images/team-gen.png',
            link: 'https://goat-text-edit.herokuapp.com/',
            repo: 'https://github.com/sammymayhem/goat-note-taker',
        },

    ]

    const renderProject = (projects, index) => {
        return (
            <Card className="text-white card proj-card" key={index}>
                <Card.Img src={projects.image} className="card-image" alt="Card image" />
                <Card.ImgOverlay className="overlay">
                    <Card.Title className="title-text show">{projects.title}</Card.Title>
                    <Card.Text className="show"><a href={projects.link}><FaHome /></a></Card.Text>
                    <Card.Text className="show"><a href={projects.repo}><FaGithub /></a></Card.Text>
                </Card.ImgOverlay>
            </Card>
        );
    };

    return <div className="grid">{projects.map(renderProject)}</div>;
}

export default Project;