import { Good } from "./Good";
import { Store } from "./Store";

export class SupplyInStore {
    private  _id: number;
    private _good: Good;
    private _store: Store;
    private _date: Date;


	constructor(id: number, good: Good, store: Store, date: Date) {
		this._id = id;
		this._good = good;
		this._store = store;
		this._date = date;
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
     * @return {Good}
     */
	public get good(): Good {
		return this._good;
	}

    /**
     * Setter good
     * @param {Good} value
     */
	public set good(value: Good) {
		this._good = value;
	}

    /**
     * Getter store
     * @return {Store}
     */
	public get store(): Store {
		return this._store;
	}

    /**
     * Setter store
     * @param {Store} value
     */
	public set store(value: Store) {
		this._store = value;
	}

    /**
     * Getter date
     * @return {Date}
     */
	public get date(): Date {
		return this._date;
	}

    /**
     * Setter date
     * @param {Date} value
     */
	public set date(value: Date) {
		this._date = value;
	}

}