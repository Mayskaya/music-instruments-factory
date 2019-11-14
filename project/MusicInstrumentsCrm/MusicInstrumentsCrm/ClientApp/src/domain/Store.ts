import Address from "./Address";
import DefaultValues from "../util/DefaultValues";


export default class Store {
    private _id: number;
    private _name: string;
    private _address: Address;
    private _foundationDate: Date;

    constructor(id: number, name: string, address: Address, foundationDate: Date) {
        this._id = id;
        this._name = name;
        this._address = address;
        this._foundationDate = foundationDate;
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
     * Getter foundationDate
     * @return {Date}
     */
    public get foundationDate(): Date {
        return this._foundationDate;
    }

    /**
     * Setter foundationDate
     * @param {Date} value
     */
    public set foundationDate(value: Date) {
        this._foundationDate = value;
    }

}