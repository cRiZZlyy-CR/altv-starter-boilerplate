import * as alt from 'alt-server';
import { VehicleOutParkColShape } from '../services/colShapeService'
import { VehicleNPCColShape } from '../services/colShapeService'

const identifier = 'VehicleSpawn-Colshape'
const ColShape = new alt.ColshapeCylinder(VehicleNPCColShape.x, VehicleNPCColShape.y, VehicleNPCColShape.z, 1, 1);

ColShape.playersOnly = true;
ColShape['identifier'] = identifier;

function spawnVehicle(colshape: alt.Colshape, player: alt.Player) {
    if (colshape['identifier'] !== identifier) {
        return;
    }
    // SPAWN VEHICLE
    const veh = new alt.Vehicle(alt.hash("Zentorno"), VehicleOutParkColShape.x, VehicleOutParkColShape.y, VehicleOutParkColShape.z, 0, 0, 0);
    player.setIntoVehicle(veh, 1)
    // ENGINE ON
    veh.engineOn = true
    // NUMBERPLATE
    veh.numberPlateText = "CRIZZLY"
    // NOTIFY
    alt.emitClient(player, 'drawNotification', 'CHAR_CARSITE', 'Vehicle', 'Vehicle spawned', 'Have a Seat!');
}
alt.on('entityEnterColshape', spawnVehicle);