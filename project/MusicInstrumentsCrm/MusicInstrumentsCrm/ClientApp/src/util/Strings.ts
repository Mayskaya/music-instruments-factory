export class Strings {
    private static readonly EMPTY_STRING: string = "";

    private constructor() {

    }

	public static empty() : string {
		return Strings.EMPTY_STRING;
	}

	public static nullToEmpty(str: string) :string {
		return str == null ? Strings.EMPTY_STRING : str;
	}

	public static emptyToNull(str: string) : string | null{
		return Strings.isNullOrEmpty(str) ? null : str;
	}

	public static isNullOrEmpty(str: string) : boolean{
		return str == null || Strings.isEmpty(str);
    }
    
    public static isEmpty(str: string): boolean{
        return (!str || str == undefined || str == "" || str.length == 0);
    }
}