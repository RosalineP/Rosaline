import {  Line, Util } from 'pts';
import { QuickStartCanvas } from 'react-pts-canvas';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BouncyBalls } from './BouncyBalls';
import { Acidity } from './Acidity';
import {ReverseSnow} from "./ReverseSnow";
import {faGithubSquare, faLinkedin, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faEnvelopeSquare} from "@fortawesome/free-solid-svg-icons";

export const ConcentricRectangles = () => {
    return (
        <QuickStartCanvas
            onAnimate={(space, form, time) => {
                const subs = space.innerBound.map(p => Line.subpoints([p, space.pointer], 30));
                form.strokeOnly('#FDC', 2).rects(Util.zip(subs));
            }}
        />
    );
};

export const About = () => {
    return(
        <div className="about">
            <div className="about-header"> {"{"}about{"}"} </div>

            <div className="about-text">
                Hello! My name is Rosaline Pyktel, and I’m a programmer based in Seattle. I’m a passionate and creative developer, and I want to help companies grow by using innovative technologies to create intuitive, reactive, and elegant user experiences.
                While I love designing and building with front-end tools such as React and jQuery, I’m also comfortable with back-end tech such as NodeJS, MongoDB, and SQL.
                In my spare time, you’ll find me writing scifi short stories and enjoying Seattle’s gloomy weather.
            </div>
        </div>
    );
};

export const Contact = () => {
    return(
        <div className="contact">
            <div>
                <div className="contact-header unselectable">
                    .contact
                    <span className="contact-curlyBracketTop">
                         {"{"}
                    </span>
                </div>

                <div className="contact-table">
                    <div className="contact-iconsRow redHover">
                        <a href="https://github.com/RosalineP" className="link"> <FontAwesomeIcon className="icon" icon={faGithubSquare} size="3x"/> </a>
                        <a href="https://github.com/RosalineP" className="link"> <span className="contact-iconsRow-text"> github.com/RosalineP </span> </a>
                    </div>

                    <div className="contact-iconsRow yellowHover">
                        <a href="mailto:rpyktel@gmail.com" className="link"> <FontAwesomeIcon className="icon" icon={faEnvelopeSquare} size="3x"/> </a>
                        <a href="mailto:rpyktel@gmail.com" className="link"> <span className="contact-iconsRow-text"> rpyktel@gmail.com </span> </a>
                    </div>

                    <div className="contact-iconsRow greenHover">
                        <a href="https://www.linkedin.com/in/rosaline-pyktel/" className="link"> <FontAwesomeIcon className="icon" icon={faLinkedin} size="3x"/> </a>
                        <a href="https://www.linkedin.com/in/rosaline-pyktel/" className="link"> <span className="contact-iconsRow-text"> linkedin.com/in/rosaline-pyktel </span> </a>
                    </div>
                </div>

                <div className="contact-header contact-curlyBracketBottom unselectable">
                    {"}"}
                </div>
            </div>
        </div>
    );
};

export const Landing = () => {
    return (
        <>
            <div className="header">
                <BouncyBalls />
            </div>

            <Contact/>

            <div className="bottom"/>
        </>
    );
};
