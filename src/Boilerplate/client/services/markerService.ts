import * as alt from 'alt-client';
import * as native from 'natives'

// DRAW MARKER
export function drawMarker(type: number, pos: alt.IVector3, dir: alt.IVector3, rot: alt.IVector3, scale, r, g, b, alpha) {
    native.drawMarker(
        type,
        pos.x,
        pos.y,
        pos.z,
        dir.x,
        dir.y,
        dir.z,
        rot.x,
        rot.y,
        rot.z,
        scale.x,
        scale.y,
        scale.z,
        r,
        g,
        b,
        alpha,
        false,
        true,
        2,
        false,
        undefined,
        undefined,
        false
    );
}
// Create Markers on the Positions
alt.everyTick(() => {
    drawMarker(30, new alt.Vector3(1369.8944091796875, -593.9959106445312, 74.40187072753906), new alt.Vector3(0, 0, 0), new alt.Vector3(0, 0, 0), new alt.Vector3(1, 1, 1), 50, 205, 50, 100);
    drawMarker(20, new alt.Vector3(1364.36669921875, -604.4774169921875, 74.487548828125), new alt.Vector3(0, 0, 0), new alt.Vector3(0, 0, 0), new alt.Vector3(1, 1, 1), 50, 205, 50, 100);
    drawMarker(36, new alt.Vector3(1356.50634765625, -585.0873413085938, 74.49462890625), new alt.Vector3(0, 0, 0), new alt.Vector3(0, 0, 0), new alt.Vector3(1, 1, 1), 50, 205, 50, 100);
});