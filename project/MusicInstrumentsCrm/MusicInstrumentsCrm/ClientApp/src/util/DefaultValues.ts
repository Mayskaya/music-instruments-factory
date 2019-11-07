import { Strings } from "./Strings";

export default class DefaultValues {
    public static readonly DEFAULT_NUMBER: number = -1;
    public static readonly DEFAULT_STRING: string = Strings.empty();
    public static readonly DEFAULT_DATE: Date = new Date(0); // Date.parse("January 1, 1970 01:00 PM");
    public static readonly DEFAULT_BOOLEAN: boolean = false;
}