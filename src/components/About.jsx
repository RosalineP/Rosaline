import React, { useEffect, useRef, useState } from 'react';

import { Computer } from './Computer';

export const About = () => {
    const [expositionHeight, setExpositionHeight] = useState(0);
    const ref = useRef();

    useEffect(() => {
        if (ref && ref.current) {
            setExpositionHeight(ref.current.clientHeight);
        }

        const handleResize = () => {
            setExpositionHeight(ref.current.clientHeight);
        };
        window.addEventListener('resize', handleResize);
    }, []);

    return (
        <div className="about">
            <div className="about-computer" style={{ minHeight: expositionHeight }}>
                <Computer />
            </div>

            <div className="about-exposition" ref={ref}>
                <div className="about-exposition-holder">
                    <div className="about-closure">
                        <span className="about-angleBracket"> {'<'} </span>
                        <span className="about-closure-text"> about </span>
                        <span className="about-angleBracket about-angleBracket-end"> {'>'} </span>
                    </div>

                    <div className="about-text">
                        <p>
                            Hello! My name is Rosaline Pyktel, and I’m a programmer based in Seattle. I’m a passionate
                            and creative developer, and I'm happiest when building out intuitive, performant, and
                            elegant user experiences.
                        </p>
                        <p>
                            I work in biomedical research software at LabKey, where you'll find me contributing to
                            solutions in areas such as data integration, workflow management, and biologics bioregistry.
                        </p>
                        <p>
                            While I love designing and building with front-end tools such as React and jQuery, I’m also
                            comfy with server-side technologies such as Java, NodeJS, and Express, as well as SQL and
                            MongoDB on the database layer. (Stay tuned to see if I end up adding hobbyist-level UI/UX
                            skills to my toolset this year!)
                        </p>
                        <p>
                            In my spare time, you’ll find me writing speculative fic stories, dabbling in planted-tank
                            ecology, falling off my skateboard, etc.
                        </p>
                    </div>

                    <div className="about-closure">
                        <span className="about-angleBracket"> {'<'} </span>
                        <span className="about-closure-text"> about </span>
                        <span className="about-angleBracket"> {'/>'} </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
