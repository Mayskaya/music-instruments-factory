import { Good } from "./Good";
import { Offer } from "./Offer";
import DefaultValues from "../util/DefaultValues";


export class GoodInOffer {
    private _id: number;
    private _good: Good;
    private _offer: Offer;
    private _count: number;

    public constructor(id: number, good: Good, offer: Offer, count: number) {
        this._id = id;
        this._good = good;
        this._offer = offer;
        this._count = count;
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
     * Getter good
     * @return {Good }
     */
    public get good(): Good {
        return this._good;
    }

    /**
     * Setter good
     * @param {Good } value
     */
    public set good(value: Good) {
        this._good = value;
    }

    /**
     * Getter offer
     * @return {Offer }
     */
    public get offer(): Offer {
        return this._offer;
    }

    /**
     * Setter offer
     * @param {Offer } value
     */
    public set offer(value: Offer) {
        this._offer = value;
    }

    /**
     * Getter count
     * @return {number}
     */
    public get count(): number {
        return this._count;
    }

    /**
     * Setter count
     * @param {number} value
     */
    public set count(value: number) {
        this._count = value;
    }

}