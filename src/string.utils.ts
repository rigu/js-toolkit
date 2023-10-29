import { isNotEmpty } from './array.utils';

/**
 * compares two strings in a null-safe manner
 * @param str1
 * @param str2
 */
export const compareIgnoreCase = (str1: string | null | undefined, str2: string | null | undefined) =>
    str1 && str2 && normalize(str1).toLowerCase() === normalize(str2).toLowerCase();

/**
 * check if object is a string type
 * @param obj Object to check
 */
export const isString = <T>(obj: T): boolean => typeof obj === 'string';

/**
 * checks if object is a string and contains text
 */
export const isStringNotEmpty = <T>(str: T): boolean => typeof str === 'string' && isNotEmpty(str);

/**
 * return empty string if is null or undefined
 * @param str
 */
export const defaultEmpty = (str: string | null | undefined): string => str ?? '';

/**
 * return empty string if is null or undefined
 * @param str
 */
export const emptyDefault = defaultEmpty;

/**
 * Normalize the string for special chars
 * @param str
 */
export const normalize = (str: string) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

/**
 * return upper case of the string if is the string
 * @param obj
 */
export const upperCaseIfString = <T>(obj: T) => (typeof obj === 'string' ? obj.toUpperCase() : obj);

/**
 * return lower case of the string if is the string
 * @param obj
 */
export const lowerCaseIfString = <T>(obj: T) => (typeof obj === 'string' ? obj.toLowerCase() : obj);


/**
 * check if strToCheck include the value, ignoring case
 * @param strToCheck String to check
 * @param value String to find in strToCheck
 */
export const includeIgnoreCase = (strToCheck: string, value: string) =>
    isStringNotEmpty(value) && normalize(emptyDefault(strToCheck)).toLowerCase().includes(normalize(value.toLowerCase()));

/**
 * Capitalize string value in a null-safe manner
 * If string us null or undefined, empty string is returned, or the same value if @returnEmptyIfNull is set to false
 * @param str the String to capitalize
 * @param returnEmptyIfNull
 */
export const capitalize = (str: string, returnEmptyIfNull = true) => {
    if (isStringNotEmpty(str)) {
        return str.length > 1 ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : str.toUpperCase();
    }
    return returnEmptyIfNull ? defaultEmpty(str) : str;
};
