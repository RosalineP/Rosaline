import {Create, Line, Num, Particle, Pt, Util, World} from "pts";
import {QuickStartCanvas} from "react-pts-canvas";

export const ConcentricRectangles = () => {
    return(
        <QuickStartCanvas onAnimate={ (space, form, time) => {
            let subs = space.innerBound.map(
                p => Line.subpoints( [p, space.pointer], 30 )
            );
            form.strokeOnly("#FDC", 2).rects( Util.zip( subs ) );
        }} />
    );
};

export const BouncyBalls = () => {
    let world;

    const onStart = (bound, space) => {
        // Create world and 100 random points
        world = new World( space.innerBound, 1, 0 );
        let pts = Create.distributeRandom( space.innerBound, 100 );

        // Create particles and hit them with a random impulse
        for (let i=0, len=pts.length; i<len; i++) {
            let p = new Particle( pts[i] ).size( (i===0) ? 30 : 3+Math.random()*space.size.x/50 );
            p.hit( Num.randomRange(-50,50), Num.randomRange(-25, 25) );
            world.add( p );
        }

        world.particle( 0 ).lock = true; // lock it to move it by pointer later on
    };

    const onAnimate = (space, form, time, ftime) => {
        if (world) {
            world.drawParticles( (p, i) => {
                let color = (i===0) ? "#fff" : ["#ff2d5d", "#42dc8e", "#2e43eb", "#ffe359"][i%4];
                form.fillOnly( color ).point( p, p.radius, "circle" )
            });

            world.update( ftime );
        }
    };

    const onAction = (space, form, type, px, py, evt) => {
        if (world && type === "move") {
            world.particle( 0 ).position = new Pt(px, py);
        }
    };

    const onResize = (space, form, size, evt) => {
        if (world) {
            world.bound = space.innerBound;
        }
    };
    
    const styling = {height: "100%", width: "100%"};
    return(
        <QuickStartCanvas
            onStart={(bound, space) => onStart(bound, space)}
            onAnimate={(space, form, time, ftime) => onAnimate(space, form, time, ftime)}
            onAction={(space, form, type, px, py, evt) => onAction(space, form, type, px, py, evt)}
            onResize={(space, form, size, evt) => onResize(space, form, size, evt)}
            resize={false}
            background={'#fff'}
            style={styling}
            canvasStyle={styling}
        />
    );
};

export const Landing = () => {
    return(
        <div className="header">
            <BouncyBalls/>
        </div>
    );
};
