import * as alt from 'alt-client';
import * as native from 'natives'

// DRAW NOTIFY
alt.onServer('drawNotification', drawNotification);
export function drawNotification(imageName, headerMsg, detailsMsg, message) {
    native.beginTextCommandThefeedPost('STRING');
    native.addTextComponentSubstringPlayerName(message);
    native.endTextCommandThefeedPostMessagetextTu(
        imageName.toUpperCase(),
        imageName.toUpperCase(),
        true,
        7,
        headerMsg,
        detailsMsg,
        0.35,
    );
}