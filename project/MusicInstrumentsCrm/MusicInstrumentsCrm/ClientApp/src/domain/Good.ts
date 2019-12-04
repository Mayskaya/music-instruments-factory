import Factory from "./Factory";
import GoodType from "./GoodType";

export default class Good {
    private _id: number;
    private _name: string;
    private _description: string;
    private _goodType: GoodType;
    private _factory: Factory;
    private _price: number;

    public constructor(id: number, name: string, description: string, goodType: GoodType, factory: Factory, price: number) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._goodType = goodType;
        this._factory = factory;
        this._price = price;
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
     * Getter description
     * @return {string}
     */
    public get description(): string {
        return this._description;
    }

    /**
     * Setter description
     * @param {string} value
     */
    public set description(value: string) {
        this._description = value;
    }

    /**
     * Getter goodType
     * @return {GoodType}
     */
    public get goodType(): GoodType {
        return this._goodType;
    }

    /**
     * Setter goodType
     * @param {GoodType} value
     */
    public set goodType(value: GoodType) {
        this._goodType = value;
    }

    /**
     * Getter factory
     * @return {Factory}
     */
    public get factory(): Factory {
        return this._factory;
    }

    /**
     * Setter factory
     * @param {Factory} value
     */
    public set factory(value: Factory) {
        this._factory = value;
    }

    /**
     * Getter price
     * @return {number}
     */
    public get price(): number {
        return this._price;
    }

    /**
     * Setter price
     * @param {number} value
     */
    public set price(value: number) {
        this._price = value;
    }
}