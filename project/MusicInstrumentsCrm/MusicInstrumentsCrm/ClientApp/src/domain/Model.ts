import Mark from "./Mark";


export default class Model {
    private _id: number;
    private _modelName: string;
    private _mark: Mark;
    private _year: Date;

    constructor(id: number, modelName: string, mark: Mark, year: Date) {
        this._id = id;
        this._modelName = modelName;
        this._mark = mark;
        this._year = year;
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
     * Getter modelName
     * @return {string}
     */
    public get modelName(): string {
        return this._modelName;
    }

    /**
     * Setter modelName
     * @param {string} value
     */
    public set modelName(value: string) {
        this._modelName = value;
    }

    /**
     * Getter mark
     * @return {Mark}
     */
    public get mark(): Mark {
        return this._mark;
    }

    /**
     * Setter mark
     * @param {Mark} value
     */
    public set mark(value: Mark) {
        this._mark = value;
    }

    /**
     * Getter year
     * @return {Date}
     */
    public get year(): Date {
        return this._year;
    }

    /**
     * Setter year
     * @param {Date} value
     */
    public set year(value: Date) {
        this._year = value;
    }

}