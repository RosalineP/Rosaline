import { BouncyBalls } from './BouncyBalls';
import { About } from './About';
import { Contact } from './Contact';

export const Landing = () => {
    return (
        <>
            <BouncyBalls />
            <About />
            <Contact />
            <div className="bottom" />
        </>
    );
};
