import {Bound, Circle, Const, Create, Group, Line, Num, Particle, Pt, Rectangle, Util, World} from 'pts';
import { QuickStartCanvas } from 'react-pts-canvas';

export const ReverseSnow = () => {
    const colors1 = ['#252934', '#FF3F8E', '#04C2C9', '#2E55C1'];
    const colors = ['#003049', '#d62828', '#f77f00', '#fcbf49', '#eae2b7'];

    const onStart = (bound, space) => {};

    let pts;
    const radius = Array.from({ length: 100 }, () => Num.randomRange(2, 10));

    const onAnimate = (space, form, time, ftime) => {
        const min = Math.max(space.size.x, space.size.y);
        const bound = Bound.fromGroup(Rectangle.fromCenter(space.center, min, min));

        const orbitCenter = new Pt(650, 200);
        const groups = [];

        if (!pts) pts = Create.distributeRandom(bound, 120);
        pts.forEach((p, i) => {
            p.rotate2D(Const.one_degree / 20, space.center);
            form.fillOnly(colors[(i % (colors.length - 1)) + 1]).point(p, radius[i], 'circle');

            groups.push(new Group(p, orbitCenter));
        });

        form.strokeOnly('#fff', 0.3).lines(groups);
    };

    const onAction = (space, form, type, px, py, evt) => {};

    const onResize = (space, form, size, evt) => {
        console.log('innerBound', space.innerBound);
        console.log('size', size);
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

export const Acidity = () => {
    let waves = [];
    let gradients = [];
    const nums = 20;

    const getColors = () => {
        const cs = [
            [0, 255, 50],
            [255, 255, 50],
            [255, 0, 50],
            [255, 50, 255],
            [50, 0, 255],
            [50, 255, 255],
        ];
        const a = [...cs[Math.floor(Math.random() * cs.length)], 0.7];
        const b = [...cs[Math.floor(Math.random() * cs.length)], 0.7];
        const c = b.slice();
        c[3] = 0;
        const stops = [0.1, 0.4, 1];
        return [a, b, c].map((p, i) => [stops[i], `rgba(${p[0]}, ${p[1]}, ${p[2]}, ${p[3]})`]);
    };

    const getGradients = space => {
        gradients = [];
        for (let i = 0; i < nums; i++) {
            gradients.push(space.getForm().gradient(getColors()));
        }
    };

    const onStart = (bound, space) => {
        // Create two lines and convert to `Noise` points
        const ln1 = Create.distributeLinear(
            [new Pt(0, space.size.y * 0.3), new Pt(space.width, space.size.y * 0.3)],
            nums
        );
        const ln2 = Create.distributeLinear(
            [new Pt(0, space.size.y * 0.6), new Pt(space.width, space.size.y * 0.6)],
            nums
        );
        waves = [Create.noisePts(ln1, 0.1, 0.1), Create.noisePts(ln2, 0.1, 0.1)];

        getGradients(space);
    };

    const onAnimate = (space, form, time, ftime) => {
        form.fill(`rgb(${80},${80},${80})`).rect(space.innerBound);

        const nps = waves.map(nl => {
            return nl.map(p => p.$add(0, p.step(0.01, 0).noise2D() * space.size.y));
        });

        form.composite('overlay');

        for (let k = 0, klen = nps.length; k < klen; k++) {
            for (let i = 0; i < nums; i++) {
                const c1 = Circle.fromCenter(nps[k][i], space.size.minValue().value * 0.2);
                const c2 = Circle.fromCenter(nps[k][i], space.size.minValue().value * 0.7);
                const grad = gradients[k === 0 ? i : nums - i - 1];
                form.fillOnly(grad(c1, c2)).circle(c2);
            }
        }
    };

    const onAction = (space, form, type, px, py, evt) => {
        if (type === 'up') getGradients(space);
    };

    const onResize = (space, form, size, evt) => {};

    const styling = { height: '100%', width: '100%' };
    return (
        <>
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
            <div className="header-text">Rosaline P</div>
            <div className="header-subText">full stack web developer</div>
        </>
    );
};
