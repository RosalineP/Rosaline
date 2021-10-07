import {  Line, Util } from 'pts';
import { QuickStartCanvas } from 'react-pts-canvas';

import { BouncyBalls } from './BouncyBalls';
import { Acidity } from './Acidity';

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

export const Landing = () => {
    return (
        <>
            <div className="header">
                <Acidity />
            </div>
        </>
    );
};
