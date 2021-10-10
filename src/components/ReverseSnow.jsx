import {Bound, Circle, Const, Create, Group, Line, Num, Particle, Pt, Rectangle, World} from 'pts';
import { QuickStartCanvas } from 'react-pts-canvas';

export const ReverseSnow = () => {
    const colors1 = [
        "#252934", "#FF3F8E", "#04C2C9", "#2E55C1"
    ];
    const colors = [
        "#003049", "#d62828", "#f77f00", "#fcbf49", "#eae2b7"
    ];

    const onStart = (bound, space) => {
    };

    let pts;
    let radius = Array.from({length: 100}, () => Num.randomRange(2,10));

    const onAnimate = (space, form, time, ftime) => {
        const min = Math.max(space.size.x, space.size.y);
        const bound = Bound.fromGroup(Rectangle.fromCenter(space.center, min, min));

        const orbitCenter = new Pt(650,200);
        const groups = [];

        if (!pts) pts = Create.distributeRandom( bound, 120 );
        pts.forEach( (p, i) => {
            p.rotate2D(Const.one_degree / 20, space.center);
            form.fillOnly(colors[i % (colors.length - 1) + 1]).point( p, radius[i], "circle");

            groups.push(new Group( p, orbitCenter ));
        });

        form.strokeOnly("#fff", 0.3).lines( groups );
    };

    const onAction = (space, form, type, px, py, evt) => {

    };

    const onResize = (space, form, size, evt) => {
        console.log("innerBound", space.innerBound);
        console.log("size", size);
        // space.outerBound = size;
    };

    const styling = { height: '100%', width: '100%' };
    return (
        <>
            <QuickStartCanvas
                onStart={(bound, space) => onStart(bound, space)}
                onAnimate={(space, form, time, ftime) => onAnimate(space, form, time, ftime)}
                onAction={(space, form, type, px, py, evt) => onAction(space, form, type, px, py, evt)}
                onResize={(space, form, size, evt) => onResize(space, form, size, evt)}
                resize={true}
                background={colors[0]}
                style={styling}
                canvasStyle={styling}
            />
            <div className="header-text">Rosaline P</div>
            <div className="header-subText">full stack web developer</div>
        </>
    );
};
