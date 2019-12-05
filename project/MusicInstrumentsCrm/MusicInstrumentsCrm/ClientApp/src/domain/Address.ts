export default class Address{
    private _id: number;
    private _fullName: string;

	constructor(id: number, fullName: string) {
		this._id = id;
		this._fullName = fullName;
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
     * Getter fullName
     * @return {string}
     */
	public get fullName(): string {
		return this._fullName;
	}

    /**
     * Setter fullName
     * @param {string} value
     */
	public set fullName(value: string) {
		this._fullName = value;
	}

}