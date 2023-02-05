import { Assets, BLEND_MODES, Container, Sprite, utils } from "pixi.js";
import { FloorFurniture } from "./FloorFurniture";
import { FurnitureFrameId, FurnitureLayerConfiguration, FurnitureLayerId } from "../../interfaces/Furniture.interface";

export class FurnitureLayer extends Container {

    /**
     * The furniture instance
     * @private
     */
    private readonly _furniture: FloorFurniture;

    /**
     * The layer id
     * @private
     */
    private _layer: FurnitureLayerId;

    /**
     * The layer alpha
     * @private
     */
    private _alpha: number;


    /**
     * The layer tint
     * @private
     */
    private _tint: number;

    /**
     * The layer z
     * @private
     */
    private _z: number;

    /**
     * The layer blend mode
     * @private
     */
    private _blendMode: BLEND_MODES;

    /**
     * Is the layer flipped
     * @private
     */
    private _flip: boolean;

    /**
     * The layer frame id
     * @private
     */
    private _frame: FurnitureFrameId;

    /**
     * FurnitureLayer class
     * @param furniture - The furniture instance
     * @param configuration - The layer configuration
     */
    constructor(
        furniture: FloorFurniture,
        configuration: FurnitureLayerConfiguration
    ) {
        super();

        this._furniture = furniture;
        this._layer = configuration.layer;
        this._alpha = configuration.alpha;
        this._tint = configuration.tint;
        this._z = configuration.z;
        this._blendMode = configuration.blendMode;
        this._flip = configuration.flip;
        this._frame = configuration.frame;

        this._draw();
    }

    /**
     * Draw the layer
     * @private
     */
    private _draw(): void {
        const sprite: Sprite = new Sprite(Assets.get("furnitures/" + this._furniture.data.baseName).textures[this._furniture.data.baseName + '_' + this._furniture.data.baseName + '_64_' + String.fromCharCode(97 + Number(this._layer)) + '_' + this._furniture.direction + '_' + this._frame]);
        if(this._tint !== undefined) sprite.tint = utils.premultiplyTint(this._tint, 0.999);
        if(this._blendMode !== undefined) sprite.blendMode = this._blendMode;
        if(this._alpha !== undefined) sprite.alpha = this._alpha;
        if(this._flip) sprite.scale.x = -1;
        this.addChild(sprite);
    }

}