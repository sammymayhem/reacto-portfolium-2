import React from 'react';
import { Card } from 'react-bootstrap';
import { FaGithub, FaHome } from 'react-icons/fa';
import '../../styles/Project.css'


const Project = () => {
    const projects = [
        {
            title: 'SpaceX LaunchPad',
            image: '',
            link: 'https://sammymayhem.github.io/launchpad-gp-1/',
            repo: 'https://github.com/sammymayhem/launchpad-gp-1',
        },
        {
            title: 'Augur',
            image: 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg',
            link: 'https://augur-app.herokuapp.com/',
            repo: 'https://github.com/sammymayhem/the-coin-flips',
        },
        {
            title: 'JATE Text Editor',
            image: 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg',
            link: 'https://goat-text-edit.herokuapp.com/',
            repo: 'https://github.com/sammymayhem/goat-note-taker',
        },
        {
            title: 'JATE Text Editor',
            image: 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg',
            link: 'https://goat-text-edit.herokuapp.com/',
            repo: 'https://github.com/sammymayhem/goat-note-taker',
        },
        {
            title: 'JATE Text Editor',
            image: 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg',
            link: 'https://goat-text-edit.herokuapp.com/',
            repo: 'https://github.com/sammymayhem/goat-note-taker',
        },
        {
            title: 'JATE Text Editor',
            image: 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg',
            link: 'https://goat-text-edit.herokuapp.com/',
            repo: 'https://github.com/sammymayhem/goat-note-taker',
        },

    ]

    const renderProject = (projects, index) => {
        return (
            <Card className="text-white card proj-card" key={index}>
                <Card.Img src={projects.image} alt="Card image" />
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