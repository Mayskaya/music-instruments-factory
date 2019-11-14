import User from "./User";
import DefaultValues from "../util/DefaultValues";

export default class Buyer {
    private _id: number;
    private _firstName: string;
    private _lastName: string;
    private _patronymic: string;
    private _email: string;
    private _phone: string;
    private _user: User;

    constructor(id: number, firstName: string, lastName: string, patronymic: string, email: string, phone: string, user: User) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._patronymic = patronymic;
        this._email = email;
        this._phone = phone;
        this._user = user;
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
     * Getter firstName
     * @return {string}
     */
    public get firstName(): string {
        return this._firstName;
    }

    /**
     * Setter firstName
     * @param {string} value
     */
    public set firstName(value: string) {
        this._firstName = value;
    }

    /**
     * Getter lastName
     * @return {string}
     */
    public get lastName(): string {
        return this._lastName;
    }

    /**
     * Setter lastName
     * @param {string} value
     */
    public set lastName(value: string) {
        this._lastName = value;
    }

    /**
     * Getter patronymic
     * @return {string}
     */
    public get patronymic(): string {
        return this._patronymic;
    }

    /**
     * Setter patronymic
     * @param {string} value
     */
    public set patronymic(value: string) {
        this._patronymic = value;
    }

    /**
     * Getter email
     * @return {string}
     */
    public get email(): string {
        return this._email;
    }

    /**
     * Setter email
     * @param {string} value
     */
    public set email(value: string) {
        this._email = value;
    }

    /**
     * Getter phone
     * @return {string}
     */
    public get phone(): string {
        return this._phone;
    }

    /**
     * Setter phone
     * @param {string} value
     */
    public set phone(value: string) {
        this._phone = value;
    }

    /**
     * Getter user
     * @return {User}
     */
    public get user(): User {
        return this._user;
    }

    /**
     * Setter user
     * @param {User} value
     */
    public set user(value: User) {
        this._user = value;
	}

}