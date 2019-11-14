import Country from "./Country";
import DefaultValues from "../util/DefaultValues";

export default class Mark {
    private _id: number;
    private _name: string;
    private _country: Country;

    constructor(id: number, name: string, country: Country) {
        this._id = id;
        this._name = name;
        this._country = country;
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
     * Getter name
     * @return {string}
     */
    public get name(): string {
        return this._name;
    }

    /**
     * Setter name
     * @param {string} value
     */
    public set name(value: string) {
        this._name = value;
    }

    /**
     * Getter country
     * @return {Country}
     */
    public get country(): Country {
        return this._country;
    }

    /**
     * Setter country
     * @param {Country} value
     */
    public set country(value: Country) {
        this._country = value;
    }

}