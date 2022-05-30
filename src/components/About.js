import React from 'react';
import sam from '../images/Sam1.jpg'

export const About = () => {
    return (
        <div id="about">
            <div>
                <img src={sam} alt="" id="my-image" />
            </div>
            <div id="about-text">
                <p>Hey everybody, my name is Sam Wallace. Born and raised in San Diego I have worn many hats in my
                    career.
                    After spending 16 years helping the San Diego Comic-Con grow to where it is today, I decided to
                    break
                    off and start a new path. I enojy creating and designing as well as problem solving. I'm always
                    looking for a way to streamline processes and enjoy the challenges that come with that. I hope you
                    enjoy your time on my portfolio page!</p>
            </div>
        </div>
    )
}