import * as alt from 'alt-client'
import { KeyCode } from '../enums/keys';

// F5 -> GET POSITION
alt.on('keydown', (key: number) => {
    if (key === KeyCode.F5) {
        const { x: pX, y: pY, z: pZ } = alt.Player.local.pos;
        alt.log("Pos:", `${pX}, ${pY}, ${pZ}`);
        const { x: rX, y: rY, z: rZ } = alt.Player.local.rot;
        alt.log("Rot:", `${rX}, ${rY}, ${rZ}`);
    }
})
