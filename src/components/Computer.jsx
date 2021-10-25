import { Circle, Geom, Group } from 'pts';
import { QuickStartCanvas } from 'react-pts-canvas';

export const Computer = () => {
    let u, centerX, centerY, totalityA, totalityB, totalityAClone;
    let line1a, line1aa, line1b;
    let line2a, line2aa, line2b;
    let line3a, line3aa, line3b;
    let line4a, line4aa, line4b;
    let line5a, line5aa, line5b;
    let line6a, line6aa, line6b;
    let line7a, line7aa, line7b;
    let line8a, line8aa, line8b;
    let line9a, line9aa, line9b;
    let line10a, line10aa, line10b;
    let line11a, line11aa, line11b;
    let line12a, line12aa, line12b;
    let line13a, line13aa, line13b;
    let line14a, line14aa, line14b;
    let line15a, line15aa, line15b;
    let line16a, line16aa, line16b;
    let line17a, line17aa, line17b;
    let dot1a, dot1aa, dot1b;
    let dot2a, dot2aa, dot2b;

    let hasPointerBeenOutside = false;

    const colors = ['#173f5f', '#20639b', '#3caea3', '#ed553b']; // '#f6d55c'

    const getXLine = (arr, y) => {
        return arr.map(i => [centerX + i * u, centerY - u * y]);
    };

    const getYLine = (arr, x) => {
        return arr.map(i => [centerX + u * x, centerY - i * u]);
    };

    const onStart = (bound, space) => {
        u = space.size.minValue().value / 70;
        centerX = space.center.x;
        centerY = space.center.y;

        line1a = getXLine([-12, -10, -8, -6, -6, -4, -2, 0, 2, 2, 4, 6, 8, 10, 10, 12], 20);
        line1b = getXLine([-13, -11, -9, -7, -5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 15, 17], 18);
        line1aa = Group.fromArray(line1a).clone();

        line2a = getXLine([-14, 12, 14], 18);
        line2b = getXLine([-15, 17, 19], 16);
        line2aa = Group.fromArray(line2a).clone();

        line3a = getXLine([-16, -14, -12, -10, -8, -8, -6, -4, -2, 0, 2, 2, 4, 6, 8, 9.5, 9.5, 14], 16);
        line3b = getXLine([-17, -15, -13, -11, -9, -7, -5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 15, 19], 14);
        line3aa = Group.fromArray(line3a).clone();

        // Monitor left
        line4a = getYLine([-2.5, -2, 0, 2, 4, 6, 8, 10, 12, 14], -16);
        line4b = getYLine([-4, -4, -2, 0, 2, 4, 6, 8, 10, 12], -17);
        line4aa = Group.fromArray(line4a).clone();
        // Chassis right
        line5a = getYLine([-2, 0, 2, 4, 6, 8, 10, 12, 14], 14);
        line5b = getYLine([-3.5, -2, 0, 2, 4, 6, 8, 10, 12], 19);
        line5aa = Group.fromArray(line5a).clone();
        // Monitor bottom
        line6a = getXLine([-16, -14, -12, -10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 9.5, 9.5, 9.5], -4);
        line6b = getXLine([-17, -15, -13, -11, -9, -7, -5, -3, -1, 1, 3, 5, 7, 9, 11, 13], -5.5);
        line6aa = Group.fromArray(line6a).clone();

        // box top
        line7a = getXLine([-20, -18, -16, -14, -12, -10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10, 12, 12], -8);
        line7b = getXLine([-21, -19, -17, -15, -13, -11, -9, -7, -5, -3, -1, 1, 3, 5, 7, 9, 11, 13], -9.5);
        line7aa = Group.fromArray(line7a).clone();
        // box bottom
        line8a = getXLine([-20, -18, -16, -14, -12, -10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10, 12, 14, 14], -18);
        line8b = getXLine([-21, -19, -17, -15, -13, -11, -9, -7, -5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 15], -18);
        line8aa = Group.fromArray(line8a).clone();
        // box left
        line9a = getYLine([-16, -14, -12, -10], -20);
        line9b = getYLine([-16, -15, -13, -11], -21);
        line9aa = Group.fromArray(line9a).clone();
        // box right
        line10a = getYLine([-16, -14, -12, -10], 12);
        line10b = getYLine([-16, -15, -13, -11], 13);
        line10aa = Group.fromArray(line10a).clone();

        // face top
        line11a = getXLine([-12, -10, -8, -8, -6, -4, -2, -2, 0, 2, 4, 4, 5.5], 11.5);
        line11b = getXLine([-13, -11, -9, -7, -5, -3, -1, 1, 3, 5, 7, 9, 11], 10);
        line11aa = Group.fromArray(line11a).clone();
        // face bottom
        line12a = getXLine([-12, -10, -8, -8, -6, -4, -2, -2, 0, 2, 4, 4, 5.5], -0);
        line12b = getXLine([-13, -11, -9, -7, -5, -3, -1, 1, 3, 5, 7, 9, 11], -1.5);
        line12aa = Group.fromArray(line12a).clone();
        // face left
        line13a = getYLine([1.5, 3.5, 5.5, 7.5, 9.5], -12);
        line13b = getYLine([0, 2, 4, 6, 8], -13);
        line13aa = Group.fromArray(line13a).clone();
        // face right
        line14a = getYLine([1.5, 3.5, 5.5, 7.5, 9.5], 5.5);
        line14b = getYLine([0, 2, 4, 6, 8], 11);
        line14aa = Group.fromArray(line14a).clone();

        // Monitor right
        line15a = getYLine([-2, 0, 2, 4, 6, 8, 10, 12, 14], 9.5);
        line15b = getYLine([-3.5, -2, 0, 2, 4, 6, 8, 10, 12], 15);
        line15aa = Group.fromArray(line15a).clone();

        dot1a = [
            [centerX + -18 * u, centerY - -6 * u],
            [centerX + 14 * u, centerY - -6 * u],
            [centerX + 14 * u, centerY - -6 * u],
            [centerX + 16 * u, centerY - -4 * u],
            [centerX + 16 * u, centerY - -16 * u],
            [centerX + 16 * u, centerY - -16 * u],
        ];
        dot1b = [
            [centerX + -19 * u, centerY - -7.5 * u],
            [centerX + 17 * u, centerY - -5.5 * u],
            [centerX + 15 * u, centerY - -7.5 * u],
            [centerX + 21 * u, centerY - -5.5 * u],
            [centerX + 17 * u, centerY - -16 * u],
            [centerX + 19 * u, centerY - -14 * u],
        ];
        dot1aa = Group.fromArray(dot1a).clone();

        // box rightmost
        line16a = getYLine([-4, -6, -8, -10, -12, -14], 18);
        line16b = getYLine([-5.5, -6.5, -8.5, -10.5, -12, -12], 21);
        line16aa = Group.fromArray(line16a).clone();

        // face
        dot2a = [
            [centerX + -8 * u, centerY - 7.5 * u],
            [centerX + u, centerY - 7.5 * u],
            [centerX + -6 * u, centerY - 4 * u],
            [centerX + -5 * u, centerY - 3.5 * u],
            [centerX + -3 * u, centerY - 3.5 * u],
            [centerX + -1.5 * u, centerY - 3.5 * u],
            [centerX + -1.5 * u, centerY - 3.5 * u],
            [centerX + -0.5 * u, centerY - 4 * u],
            [centerX + -15.5 * u, centerY - -14 * u],
            [centerX + 4 * u, centerY - -14 * u],
        ];
        dot2b = [
            [centerX + -7.5 * u, centerY - 6.5 * u],
            [centerX + 3.5 * u, centerY - 6.5 * u],
            [centerX + -5.5 * u, centerY - 3 * u],
            [centerX + -4.5 * u, centerY - 2 * u],
            [centerX + -2.5 * u, centerY - 2 * u],
            [centerX + -0.5 * u, centerY - 2 * u],
            [centerX + 0.5 * u, centerY - 2 * u],
            [centerX + 1.5 * u, centerY - 3 * u],
            [centerX + -15 * u, centerY - -14.5 * u],
            [centerX + 4.5 * u, centerY - -14.5 * u],
        ];
        dot2aa = Group.fromArray(dot2a).clone();

        line17a = getXLine([-4, -2, 0, 2, 4, 6], -12);
        line17b = getXLine([-3, -2.5, -0.5, 1.5, 3.5, 5.5], -13.5);
        line17aa = Group.fromArray(line17a).clone();

        totalityA = Group.fromArray([
            ...line1a,
            ...line2a,
            ...line3a,
            ...line4a,
            ...line5a,
            ...line6a,
            ...line7a,
            ...line8a,
            ...line9a,
            ...line10a,
            ...line11a,
            ...line12a,
            ...line13a,
            ...line14a,
            ...line15a,
            ...line16a,
            ...line17a,
            ...dot1a,
            ...dot2a,
        ]);
        totalityB = Group.fromArray([
            ...line1b,
            ...line2b,
            ...line3b,
            ...line4b,
            ...line5b,
            ...line6b,
            ...line7b,
            ...line8b,
            ...line9b,
            ...line10b,
            ...line11b,
            ...line12b,
            ...line13b,
            ...line14b,
            ...line15b,
            ...line16b,
            ...line17b,
            ...dot1b,
            ...dot2b,
        ]);
        totalityAClone = Group.fromArray([
            ...line1aa,
            ...line2aa,
            ...line3aa,
            ...line4aa,
            ...line5aa,
            ...line6aa,
            ...line7aa,
            ...line8aa,
            ...line9aa,
            ...line10aa,
            ...line11aa,
            ...line12aa,
            ...line13aa,
            ...line14aa,
            ...line15aa,
            ...line16aa,
            ...line17aa,
            ...dot1aa,
            ...dot2aa,
        ]);
    };

    const onAnimate = (space, form, time, ftime) => {
        const r = u * 4;
        form.strokeOnly('#fd6', 15).point(space.center, space.size.minValue().value / 2 - 10, 'circle');

        if (totalityA) {
            if (
                hasPointerBeenOutside &&
                Circle.withinBound(Circle.fromCenter(space.center, space.size.minValue().value / 2), space.pointer)
            ) {
                // inside
                for (let i = 0; i < totalityA.length; i++) {
                    const d = totalityA[i].$subtract(space.pointer);

                    if (d.magnitudeSq() < r * r) {
                        totalityA[i].to(space.pointer.$add(d.unit().$multiply(r)));
                    } else {
                        if (!totalityA[i].equals(totalityAClone[i], 0.1)) {
                            totalityA[i].to(Geom.interpolate(totalityAClone[i], totalityA[i], 0.9));
                        }
                    }

                    form.fill('#fd6').stroke('#fd6', 2).point(totalityA[i], u);
                }
            } else if (
                !Circle.withinBound(Circle.fromCenter(space.center, space.size.minValue().value / 2), space.pointer)
            ) {
                hasPointerBeenOutside = true;
                if (Math.floor(time / 1000) % 2 === 1) {
                    for (let i = 0; i < totalityA.length; i++) {
                        totalityA[i].to(Geom.interpolate(totalityA[i], totalityAClone[i], 0.1));
                    }
                } else {
                    for (let i = 0; i < totalityA.length; i++) {
                        totalityA[i].to(Geom.interpolate(totalityA[i], totalityB[i], 0.1));
                    }
                }

                form.fill('#fd6').stroke('#fd6', 2).points(totalityA, u);
            } else {
                if (Math.floor(time / 1000) % 2 === 1) {
                    for (let i = 0; i < totalityA.length; i++) {
                        totalityA[i].to(Geom.interpolate(totalityA[i], totalityAClone[i], 0.1));
                    }
                } else {
                    for (let i = 0; i < totalityA.length; i++) {
                        totalityA[i].to(Geom.interpolate(totalityA[i], totalityB[i], 0.1));
                    }
                }

                form.fill('#fd6').stroke('#fd6', 2).points(totalityA, u);
            }
        }
    };

    const onAction = (space, form, type, px, py, evt) => {};

    const onResize = (space, form, size, evt) => {
        if (evt) {
            console.log('evt', evt);
            // form.fill('#fd6').point(space.center, space.size.minValue().value / 2 - 10, 'circle');

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
