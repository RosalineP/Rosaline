import {
    Body,
    Bound,
    Circle,
    Color,
    Const,
    Create,
    Curve,
    Geom,
    Group,
    Line,
    Num,
    Particle,
    Polygon,
    Pt,
    Rectangle,
    Tempo,
    World,
} from 'pts';
import { QuickStartCanvas } from 'react-pts-canvas';

const range = (start, stop, step) => {
    if (typeof stop === 'undefined') {
        stop = start;
        start = 0;
    }
    if (typeof step === 'undefined') {
        step = 1;
    }
    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }
    const result = [];
    for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }
    return result;
};

export const Computer = () => {
    let u, u1, centerX, centerY, totality, totalityTemp;
    let point1, point1Copy, point2, point2Copy;
    const colors = ['#173f5f', '#20639b', '#3caea3', '#f6d55c', '#ed553b'];

    const onStart = (bound, space) => {
        u = space.size.minValue().value / 50;
        u1 = space.size.minValue().value / 50 + 1;
        centerX = space.center.x;
        centerY = space.center.y;

        const line7 = range(-6, 7, 2).map(i => [centerX + i * u1, centerY - u1 * 12]);
        const line6 = [-3, 15].map(i => [centerX + i * u1, centerY - u1 * 10]);
        const line5 = [-3, 1, 11, 15].map(i => [centerX + i * u1, centerY - u1 * 8]);
        const line4 = [-3, 15].map(i => [centerX + i * u1, centerY - u1 * 6]);
        const line3 = [-3, 15].map(i => [centerX + i * u1, centerY - u1 * 4]);
        const line2 = [-3, 15].map(i => [centerX + i * u1, centerY - u1 * 2]);
        const line1 = range(-6, 7, 2).map(i => [centerX + i * u1, centerY]);

        totality = Group.fromArray([...line1, ...line2, ...line3, ...line4, ...line5, ...line6, ...line7]);
        totalityTemp = totality.clone();

        point1 = new Pt(300, 300);
        point1Copy = new Pt(300, 300);
        point2 = new Pt(310, 310);
        point2Copy = new Pt(310, 310);
    };

    const onAnimate = (space, form, time, ftime) => {
        const r = u * 4;
        form.fill('#fd6').point(space.center, space.size.minValue().value / 2, 'circle');

        if (totality) {
            // if (Circle.withinBound(Circle.fromCenter(space.center, space.size.minValue().value/2), space.pointer)) {
            // inside
            for (let i = 0; i < totality.length; i++) {
                const d = totality[i].$subtract(space.pointer);

                if (d.magnitudeSq() < r * r) {
                    totality[i].to(space.pointer.$add(d.unit().$multiply(r)));
                } else {
                    if (!totality[i].equals(totalityTemp[i], 0.1)) {
                        totality[i].to(Geom.interpolate(totalityTemp[i], totality[i], 0.9));
                    }
                }

                form.fillOnly('black').point(totality[i], u);
            }
            // } else {
            //     if (Math.floor(time/1000) % 2 === 1) {
            //         point1.to( Geom.interpolate( point1, point1Copy, 0.1) );
            //     } else {
            //         point1.to( Geom.interpolate( point2Copy, point1, 0.9) );
            //     }
            //     form.fillOnly('black').point( point1, u);
            //     form.fillOnly('red').point( point2, u);
            // }
        }
    };

    const onAction = (space, form, type, px, py, evt) => {};

    const onResize = (space, form, size, evt) => {
        if (evt) {
            console.log('evt', evt);

            // form.fillOnly('black').point( space.center);
        }
    };

    const styling = { height: '100%', width: '100%' };
    return (
        <QuickStartCanvas
            onStart={(bound, space) => onStart(bound, space)}
            onAnimate={(space, form, time, ftime) => onAnimate(space, form, time, ftime)}
            onAction={(space, form, type, px, py, evt) => onAction(space, form, type, px, py, evt)}
            onResize={(space, form, size, evt) => onResize(space, form, size, evt)}
            resize={true}
            background={'#fff'}
            style={styling}
            canvasStyle={styling}
        />
    );
};
