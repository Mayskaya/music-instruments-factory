import Buyer from "./Buyer";
import Staff from "./Staff";
import Delivery from "./Delivery";


export default class Offer {
    private _id: number;
    private _code: string;
    private _buyer: Buyer;
    private _seller: Staff;
    private _delivery: Delivery;
    private _sum: number;

    constructor(id: number, code: string, buyer: Buyer, seller: Staff, delivery: Delivery, sum: number) {
        this._id = id;
        this._code = code;
        this._buyer = buyer;
        this._seller = seller;
        this._delivery = delivery;
        this._sum = sum;
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
     * Getter code
     * @return {string}
     */
    public get code(): string {
        return this._code;
    }

    /**
     * Setter code
     * @param {string} value
     */
    public set code(value: string) {
        this._code = value;
    }

    /**
     * Getter buyer
     * @return {Buyer}
     */
    public get buyer(): Buyer {
        return this._buyer;
    }

    /**
     * Setter buyer
     * @param {Buyer} value
     */
    public set buyer(value: Buyer) {
        this._buyer = value;
    }

    /**
     * Getter seller
     * @return {Staff}
     */
    public get seller(): Staff {
        return this._seller;
    }

    /**
     * Setter seller
     * @param {Staff} value
     */
    public set seller(value: Staff) {
        this._seller = value;
    }

    /**
     * Getter delivery
     * @return {Delivery}
     */
    public get delivery(): Delivery {
        return this._delivery;
    }

    /**
     * Setter delivery
     * @param {Delivery} value
     */
    public set delivery(value: Delivery) {
        this._delivery = value;
    }

    /**
     * Getter sum
     * @return {number}
     */
    public get sum(): number {
        return this._sum;
    }

    /**
     * Setter sum
     * @param {number} value
     */
    public set sum(value: number) {
        this._sum = value;
    }

}