import Car from "./Car";
import Address from "./Address";
import Staff from "./Staff";
import DefaultValues from "../util/DefaultValues";

export default class Delivery {
    private _id: number;
    private _car: Car;
    private _address: Address;
    private _courier: Staff;

    constructor(id: number, car: Car, address: Address, courier: Staff) {
        this._id = id;
        this._car = car;
        this._address = address;
        this._courier = courier;
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
     * Getter car
     * @return {Car}
     */
    public get car(): Car {
        return this._car;
    }

    /**
     * Setter car
     * @param {Car} value
     */
    public set car(value: Car) {
        this._car = value;
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
     * Getter courier
     * @return {Staff}
     */
    public get courier(): Staff {
        return this._courier;
    }

    /**
     * Setter courier
     * @param {Staff} value
     */
    public set courier(value: Staff) {
        this._courier = value;
    }

}