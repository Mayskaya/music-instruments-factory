export class GoodType {
    private _id: number;
    private _typeName: string;


	constructor(id: number, typeName: string) {
		this._id = id;
		this._typeName = typeName;
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
     * Getter typeName
     * @return {string}
     */
	public get typeName(): string {
		return this._typeName;
	}

    /**
     * Setter typeName
     * @param {string} value
     */
	public set typeName(value: string) {
		this._typeName = value;
	}

}