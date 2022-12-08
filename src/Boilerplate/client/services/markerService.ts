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
function createMarkers() {
    // EQUIP MARKER
    const markers = new alt.Utils.Marker(new alt.Vector3(1369.8944091796875, -593.9959106445312, 74.40187072753906),
        {
            type: 30, color: new alt.RGBA(50, 205, 50, 100),
            scale: new alt.Vector3(1, 1, 1)
        })
    // CLOTHE MARKER
    new alt.Utils.Marker(new alt.Vector3(1364.36669921875, -604.4774169921875, 74.487548828125),
        {
            type: 20, color: new alt.RGBA(50, 205, 50, 100),
            scale: new alt.Vector3(1, 1, 1)
        })
    // VEHICLE SPAWN MARKER
    new alt.Utils.Marker(new alt.Vector3(1356.50634765625, -585.0873413085938, 74.49462890625),
        {
            type: 36, color: new alt.RGBA(50, 205, 50, 100),
            scale: new alt.Vector3(1, 1, 1)
        })
}
createMarkers()