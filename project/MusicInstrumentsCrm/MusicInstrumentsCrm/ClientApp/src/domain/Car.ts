import { Model } from "./Model";

export class Car{
    private _id: number;
    private _serial: string;
    private _region: string;
    private _markModel: Model;
    

	constructor(id: number, serial: string, region: string, markModel: Model) {
		this._id = id;
		this._serial = serial;
		this._region = region;
		this._markModel = markModel;
	}

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Getter serial
     * @return {string}
     */
	public get serial(): string {
		return this._serial;
	}

    /**
     * Setter serial
     * @param {string} value
     */
	public set serial(value: string) {
		this._serial = value;
	}

    /**
     * Getter region
     * @return {string}
     */
	public get region(): string {
		return this._region;
	}

    /**
     * Setter region
     * @param {string} value
     */
	public set region(value: string) {
		this._region = value;
	}

    /**
     * Getter markModel
     * @return {Model}
     */
	public get markModel(): Model {
		return this._markModel;
	}

    /**
     * Setter markModel
     * @param {Model} value
     */
	public set markModel(value: Model) {
		this._markModel = value;
	}

}