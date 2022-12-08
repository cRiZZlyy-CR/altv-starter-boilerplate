import * as alt from 'alt-server';
import { PlayerSpawn } from '../services/spawnService';
import { DeadPlayers, DeadCooldown } from '../services/deathService';

alt.on('playerDeath', handlePlayerDeath);
function handlePlayerDeath(player) {
    if (DeadPlayers[player.id]) {
        return;
    }
    DeadPlayers[player.id] = alt.setTimeout(() => {
        if (DeadPlayers[player.id]) {
            delete DeadPlayers[player.id];
        }
        if (!player || !player.valid) {
            return;
        }
        alt.emitClient(player, 'drawNotification', 'CHAR_STILL_SLIPPING', 'Respawn', 'You got respawned!', '');
        player.spawn(PlayerSpawn);
    }, DeadCooldown);
}