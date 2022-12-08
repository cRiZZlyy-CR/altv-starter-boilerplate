import * as alt from 'alt-server';
import { PlayerModel, PlayerSpawn } from '../services/spawnService';

alt.on('playerConnect', handlePlayerConnect);
function handlePlayerConnect(player: alt.Player) {
    alt.log(`Name: ${player.name} IP: ${player.ip} Ping: ${player.ping} SocialID: ${player.socialID} HwID: ${player.hwidHash} logged in.`);

    player.model = PlayerModel;
    player.spawn(PlayerSpawn);

    player.health = 200;
    player.armour = 200;
    player.setWeather(13)
    alt.emitClient(player, 'drawNotification', 'CHAR_MP_FM_CONTACT', `Connection`, `${player.name} logged in.`, 'Made By .cRiZZly#1337');
}