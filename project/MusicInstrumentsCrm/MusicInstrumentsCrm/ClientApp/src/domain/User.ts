import DefaultValues from "../util/DefaultValues";

export default class User {
    private _id: number;
    private _login: string;
    private _password: string;
    private _creationDate: Date;
    private _lastLogin: Date;
    private _active: boolean;

    constructor(id: number, login: string, password: string, creationDate: Date, lastLogin: Date, active: boolean) {
        this._id = id;
        this._login = login;
        this._password = password;
        this._creationDate = creationDate;
        this._lastLogin = lastLogin;
        this._active = active;
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
     * Getter login
     * @return {string}
     */
    public get login(): string {
        return this._login;
    }

    /**
     * Setter login
     * @param {string} value
     */
    public set login(value: string) {
        this._login = value;
    }

    /**
     * Getter password
     * @return {string}
     */
    public get password(): string {
        return this._password;
    }

    /**
     * Setter password
     * @param {string} value
     */
    public set password(value: string) {
        this._password = value;
    }

    /**
     * Getter creationDate
     * @return {Date}
     */
    public get creationDate(): Date {
        return this._creationDate;
    }

    /**
     * Setter creationDate
     * @param {Date} value
     */
    public set creationDate(value: Date) {
        this._creationDate = value;
    }

    /**
     * Getter lastLogin
     * @return {Date}
     */
    public get lastLogin(): Date {
        return this._lastLogin;
    }

    /**
     * Setter lastLogin
     * @param {Date} value
     */
    public set lastLogin(value: Date) {
        this._lastLogin = value;
    }

    /**
     * Getter active
     * @return {boolean}
     */
    public get active(): boolean {
        return this._active;
    }

    /**
     * Setter active
     * @param {boolean} value
     */
    public set active(value: boolean) {
        this._active = value;
    }

}