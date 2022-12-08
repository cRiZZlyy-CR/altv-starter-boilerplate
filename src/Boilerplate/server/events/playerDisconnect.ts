import * as alt from 'alt-server';

alt.on('playerDisconnect', handleDisconnect)
function handleDisconnect(player) {
    alt.log(`${player.name} disconnected!`)
}