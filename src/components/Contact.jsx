import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
    return (
        <div className="contact">
            <div>
                <div className="contact-header unselectable">
                    .contact
                    <span className="contact-curlyBracketTop">{'{'}</span>
                </div>

                <div className="contact-table">
                    <div className="contact-iconsRow redHover">
                        <a href="https://github.com/RosalineP" className="link">
                            {' '}
                            <FontAwesomeIcon className="icon" icon={faGithubSquare} size="3x" />{' '}
                        </a>
                        <a href="https://github.com/RosalineP" className="link">
                            {' '}
                            <span className="contact-iconsRow-text"> github.com/RosalineP </span>{' '}
                        </a>
                    </div>

                    <div className="contact-iconsRow yellowHover">
                        <a href="mailto:rpyktel@gmail.com" className="link">
                            {' '}
                            <span className="test">
                                <FontAwesomeIcon className="icon" icon={faEnvelopeSquare} size="3x" />
                            </span>{' '}
                        </a>
                        <a href="mailto:rpyktel@gmail.com" className="link">
                            {' '}
                            <span className="contact-iconsRow-text"> rpyktel@gmail.com </span>{' '}
                        </a>
                    </div>

                    <div className="contact-iconsRow greenHover">
                        <a href="https://www.linkedin.com/in/rosaline-pyktel/" className="link">
                            {' '}
                            <FontAwesomeIcon className="icon" icon={faLinkedin} size="3x" />{' '}
                        </a>
                        <a href="https://www.linkedin.com/in/rosaline-pyktel/" className="link">
                            {' '}
                            <span className="contact-iconsRow-text"> linkedin.com/in/rosaline-pyktel </span>{' '}
                        </a>
                    </div>
                </div>

                <div className="contact-header contact-curlyBracketBottom unselectable">{'}'}</div>
            </div>
        </div>
    );
};
