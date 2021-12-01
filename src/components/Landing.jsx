import { BouncyBalls } from './BouncyBalls';
import { About } from './About';
import { Contact } from './Contact';
import {Portfolio} from "./Portfolio";

export const Landing = () => {
    return (
        <>
            <BouncyBalls />
            <About />
            <Portfolio />
            <Contact />
        </>
    );
};
