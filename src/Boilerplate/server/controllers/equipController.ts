import * as alt from 'alt-server';
import { EquipColShape } from '../services/colShapeService'
import * as weaponService from '../services/weaponService'

const identifier = 'Equip-Colshape'
const ColShape = new alt.ColshapeCylinder(EquipColShape.x, EquipColShape.y, EquipColShape.z, 1, 1);

ColShape.playersOnly = true;
ColShape['identifier'] = identifier;

function equipPlayer(colshape: alt.Colshape, player: alt.Player) {
    if (colshape['identifier'] !== identifier) {
        return;
    }
    player.health = 200;
    player.armour = 200;
    // ADD WEAPONS
    player.giveWeapon(weaponService.RifleHash, 9999, true)
    player.giveWeapon(weaponService.PistolHash, 9999, true);
    player.giveWeapon(weaponService.SmgHash, 9999, false);
    // ADD FOR RIFLE WEAPON COMPONENTS
    player.addWeaponComponent(weaponService.RifleHash, 0x7BC4CDDC);
    player.addWeaponComponent(weaponService.RifleHash, 0xB3688B0F);
    player.addWeaponComponent(weaponService.RifleHash, 0xAA2C45B4);
    player.addWeaponComponent(weaponService.RifleHash, 0x837445AA);
    player.addWeaponComponent(weaponService.RifleHash, 0xC164F53);
    // ADD RIFLEHASH TINT
    player.setWeaponTintIndex(weaponService.RifleHash, 2);
    // NOTIFY
    alt.emitClient(player, 'drawNotification', 'CHAR_LAMAR', 'Equipment', 'Equipped succesfully!', '');
}
alt.on('entityEnterColshape', equipPlayer);