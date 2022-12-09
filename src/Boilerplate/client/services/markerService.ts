import * as alt from 'alt-client';

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