import * as alt from 'alt-server';
import { ClothesColShape } from '../services/colShapeService'

const identifier = 'Clothes-Colshape'
const Coleshape = new alt.ColshapeCylinder(ClothesColShape.x, ClothesColShape.y, ClothesColShape.z, 1, 1);

Coleshape.playersOnly = true;
Coleshape['identifier'] = identifier;

function addClothes(colshape: alt.Colshape, player: alt.Player) {
    if (colshape['identifier'] !== identifier) {
        return;
    }
    player.setClothes(8, 172, 15, 0)
    player.setClothes(4, 24, 0)
    player.setClothes(2, 65, 0, 0)
    player.setClothes(6, 42, 0)
    player.setClothes(11, 190, 0)
    player.setHairColor(53)

    alt.emitClient(player, 'drawNotification', 'CHAR_BROKEN_DOWN_GIRL', 'Clothes', 'Dressed successfully!', '');
}
alt.on('entityEnterColshape', addClothes);