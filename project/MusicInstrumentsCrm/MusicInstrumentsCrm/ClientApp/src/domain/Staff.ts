import User from "./User";
import DefaultValues from "../util/DefaultValues";

export default class Staff {
    private _id: number;
    private _firstName: string;
    private _lastName: string;
    private _patronymic: string;
    private _passportSerial: string;
    private _passportNumber: string;
    private _inn: string;
    private _snils: string;
    private _user: User;

    constructor(id: number, firstName: string, lastName: string, patronymic: string, passportSerial: string, passportNumber: string, inn: string, snils: string, user: User) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._patronymic = patronymic;
        this._passportSerial = passportSerial;
        this._passportNumber = passportNumber;
        this._inn = inn;
        this._snils = snils;
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
     * Getter passportSerial
     * @return {string}
     */
    public get passportSerial(): string {
        return this._passportSerial;
    }

    /**
     * Setter passportSerial
     * @param {string} value
     */
    public set passportSerial(value: string) {
        this._passportSerial = value;
    }

    /**
     * Getter passportNumber
     * @return {string}
     */
    public get passportNumber(): string {
        return this._passportNumber;
    }

    /**
     * Setter passportNumber
     * @param {string} value
     */
    public set passportNumber(value: string) {
        this._passportNumber = value;
    }

    /**
     * Getter inn
     * @return {string}
     */
    public get inn(): string {
        return this._inn;
    }

    /**
     * Setter inn
     * @param {string} value
     */
    public set inn(value: string) {
        this._inn = value;
    }

    /**
     * Getter snils
     * @return {string}
     */
    public get snils(): string {
        return this._snils;
    }

    /**
     * Setter snils
     * @param {string} value
     */
    public set snils(value: string) {
        this._snils = value;
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