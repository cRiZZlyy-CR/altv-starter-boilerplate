import * as alt from 'alt-client';
import { PedBuilder } from '../../client/config/pedBuilder';
import { GaragePed } from '../config/pedLocations';

// CREATE A PED
const garagePed = await PedBuilder
    .forModel("A_M_Y_Indian_01")
    .withPosition(new alt.Vector3(GaragePed.x, GaragePed.y, GaragePed.z))
    .withHeading(0)
    .isDumb()
    .build();