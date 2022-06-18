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
            title: 'Open Lobby',
            image: process.env.PUBLIC_URL + '/images/open_lobby.png',
            link: 'https://gitgud-open-lobby.herokuapp.com/',
            repo: 'https://github.com/mrmrc182/esports-betting',
        },
        {
            title: 'README Generator',
            image: process.env.PUBLIC_URL + '/images/readme-gen.png',
            link: 'https://github.com/sammymayhem/positive-readme-generator',
            repo: 'https://github.com/sammymayhem/positive-readme-generator',
        },
        {
            title: 'Social Media API',
            image: process.env.PUBLIC_URL + '/images/social-media-api.png',
            link: 'https://github.com/sammymayhem/facespace-social-media-api',
            repo: 'https://github.com/sammymayhem/facespace-social-media-api',
        },
        {
            title: 'Team Generator',
            image: process.env.PUBLIC_URL + '/images/team-gen.png',
            link: 'https://github.com/sammymayhem/team-profile-gen-assemble',
            repo: 'https://github.com/sammymayhem/team-profile-gen-assemble',
        },

    ]

    const renderProject = (projects, index) => {
        return (
            <Card className="text-white card proj-card" key={index}>
                <Card.Img src={projects.image} className="card-image" alt="Card image" />
                <Card.ImgOverlay className="proj-overlay">
                    <Card.Title className="title-text show-proj">{projects.title}</Card.Title>
                    <Card.Text className="show-proj"><a href={projects.link}><FaHome /></a></Card.Text>
                    <Card.Text className="show-proj"><a href={projects.repo}><FaGithub /></a></Card.Text>
                </Card.ImgOverlay>
            </Card>
        );
    };

    return <div className="grid">{projects.map(renderProject)}</div>;


}

export default Project;