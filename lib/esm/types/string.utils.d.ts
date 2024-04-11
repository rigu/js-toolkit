/**
 * compares two strings ignoring case and special chars in a null-safe manner
 * @param str1
 * @param str2
 */
export declare const compareIgnoreCase: (str1: string | null | undefined, str2: string | null | undefined) => boolean;
/**
 * check if object is a string type
 * @param obj Object to check
 */
export declare const isString: <T>(obj: T) => boolean;
/**
 * checks if object is a string and contains text
 */
export declare const isStringNotEmpty: <T>(str: T) => boolean;
/**
 * return empty string if is null or undefined
 * @param str
 */
export declare const defaultEmpty: (str: string | null | undefined) => string;
/**
 * return empty string if provided null or undefined
 * @param str
 */
export declare const emptyDefault: (str: string | null | undefined) => string;
/**
 * Normalize the string for special chars
 * @param str
 */
export declare const normalize: (str: string) => string;
/**
 * Return upper case if the argument object type is string, otherwise return the provided value
 * @param obj
 */
export declare const upperCaseIfString: <T>(obj: T) => T;
/**
 * Return upper case if the argument object type is string, otherwise return the provided value
 * @param obj
 */
export declare const upperCase: <T>(obj: T) => T;
/**
 * Return lower case if the argument object type is string, otherwise return the provided value
 * @param obj
 */
export declare const lowerCaseIfString: <T>(obj: T) => T;
/**
 * Return lower case if the argument object type is string, otherwise return the provided value
 * @param obj
 */
export declare const lowerCase: <T>(obj: T) => T;
/**
 * Check if strToCheck include the value, ignoring case
 * @param strToCheck String to check
 * @param value String to find in strToCheck
 */
export declare const includeIgnoreCase: (strToCheck: string, value: string) => boolean;
/**
 * Capitalize string value in a null-safe manner
 * If string us null or undefined, empty string is returned, or the same value if @returnEmptyString is set to false
 * @param obj the Object to capitalize if is string
 * @param returnEmptyString
 */
export declare const capitalize: <T>(obj: T, returnEmptyString?: boolean) => T;
//# sourceMappingURL=string.utils.d.ts.map