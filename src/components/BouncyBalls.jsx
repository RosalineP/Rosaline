import { Create, Num, Particle, Pt, World } from 'pts';
import { QuickStartCanvas } from 'react-pts-canvas';

export const BouncyBalls = () => {
    let world;
    const colors = ['#173f5f', '#20639b', '#3caea3', '#f6d55c', '#ed553b']; // todo: decide on palette
    const colors1 = ['#f38181', '#fce38a', '#eaffd0', '#95e1d3'];
    const colors2 = ['#012F46', '#842C2A', '#C23D2A', '#EA8A44', '#B19490'];
    const backColor = '#fff';

    const onStart = (bound, space) => {
        world = new World(space.innerBound, 1, 0);
        const pts = Create.distributeRandom(space.innerBound, 75);

        for (let i = 0, len = pts.length; i < len; i++) {
            const p = new Particle(pts[i]).size(i === 0 ? 30 : 9 + (Math.random() * space.size.x) / 28);
            p.hit(Num.randomRange(-50, 50), Num.randomRange(-25, 25));
            world.add(p);
        }

        world.particle(0).lock = true;
    };

    const onAnimate = (space, form, time, ftime) => {
        if (world) {
            world.drawParticles((p, i) => {
                const color = i === 0 ? backColor : colors[i % colors.length];
                form.fillOnly(color).point(p, p.radius, 'square');
            });

            for (let i = 0; i < 75; i++) {
                world.particle(i).addForce(space.center.$subtract(world.particle(i).previous).divide(11));
            }
            world.update(ftime);
        }
    };

    const onAction = (space, form, type, px, py, evt) => {
        if (world && type === 'move') {
            world.particle(0).position = new Pt(px, py);
        }
    };

    const onResize = (space, form, size, evt) => {
        if (world) {
            world.bound = space.innerBound;
        }
    };

    const styling = { height: '100%', width: '100%' };
    return (
        <div className="header">
            <QuickStartCanvas
                onStart={(bound, space) => onStart(bound, space)}
                onAnimate={(space, form, time, ftime) => onAnimate(space, form, time, ftime)}
                onAction={(space, form, type, px, py, evt) => onAction(space, form, type, px, py, evt)}
                onResize={(space, form, size, evt) => onResize(space, form, size, evt)}
                resize={true}
                background={backColor}
                style={styling}
                canvasStyle={styling}
            />
            <div className="header-text">Rosaline P</div>
            <div className="header-subText">full stack web developer</div>
        </div>
    );
};
