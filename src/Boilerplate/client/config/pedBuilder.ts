import * as native from 'natives'
import * as alt from 'alt-client';

export class PedBuilder {
    private readonly _model: string;
    private _position: alt.Vector3 = new alt.Vector3(0, 0, 0);
    private _heading: number = 0;
    private _isDumb: boolean = false;

    private constructor(model: string) {
        this._model = model;
    }

    public static forModel(model: string): PedBuilder {
        return new PedBuilder(model);
    }

    public withPosition(position: alt.Vector3): PedBuilder {
        this._position = position;
        return this;
    }

    public withHeading(heading: number): PedBuilder {
        this._heading = heading;
        return this;
    }

    public isDumb(): PedBuilder {
        this._isDumb = true;
        return this;
    }
    public async build(): Promise<number> {
        const hash = alt.hash(this._model);
        const { x, y, z } = this._position;

        await alt.Utils.requestModel(hash);
        const ped = native.createPed(2, hash, x, y, z, this._heading, false, false);

        if (this._isDumb) {
            native.setEntityAsMissionEntity(ped, true, false);
            native.freezeEntityPosition(ped, true);
            native.setPedCanRagdoll(ped, false);
            native.taskSetBlockingOfNonTemporaryEvents(ped, true);
            native.setBlockingOfNonTemporaryEvents(ped, true);
            native.setPedFleeAttributes(ped, 0, false);
            native.setPedCombatAttributes(ped, 17, true);
            native.setEntityInvincible(ped, true);
            native.setPedSeeingRange(ped, 0);
        }
        return ped;
    }
}