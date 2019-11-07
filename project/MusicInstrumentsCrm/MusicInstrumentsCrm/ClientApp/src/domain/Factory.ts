import { Address } from "./Address";
import DefaultValues from "../util/DefaultValues";

export class Factory {
    private _id: number;
    private _address: Address;
    private _foudationDate: Date;


    constructor(id: number, address: Address, foudationDate: Date) {
        this._id = id;
        this._address = address;
        this._foudationDate = foudationDate;
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
     * Getter address
     * @return {Address}
     */
    public get address(): Address {
        return this._address;
    }

    /**
     * Setter address
     * @param {Address} value
     */
    public set address(value: Address) {
        this._address = value;
    }

    /**
     * Getter foudationDate
     * @return {Date}
     */
    public get foudationDate(): Date {
        return this._foudationDate;
    }

    /**
     * Setter foudationDate
     * @param {Date} value
     */
    public set foudationDate(value: Date) {
        this._foudationDate = value;
    }

}