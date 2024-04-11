import { isNotEmpty } from './array.utils';
/**
 * compares two strings ignoring case and special chars in a null-safe manner
 * @param str1
 * @param str2
 */
export const compareIgnoreCase = (str1, str2) => str1 === str2 || normalize(str1).toLowerCase() === normalize(str2).toLowerCase();
/**
 * check if object is a string type
 * @param obj Object to check
 */
export const isString = (obj) => typeof obj === 'string';
/**
 * checks if object is a string and contains text
 */
export const isStringNotEmpty = (str) => isString(str) && isNotEmpty(str);
/**
 * return empty string if is null or undefined
 * @param str
 */
export const defaultEmpty = (str) => str ?? '';
/**
 * return empty string if provided null or undefined
 * @param str
 */
export const emptyDefault = defaultEmpty;
/**
 * Normalize the string for special chars
 * @param str
 */
export const normalize = (str) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
/**
 * Return upper case if the argument object type is string, otherwise return the provided value
 * @param obj
 */
export const upperCaseIfString = (obj) => {
    if (typeof obj === 'string') {
        return obj.toUpperCase();
    }
    else if (Array.isArray(obj)) {
        return obj.map(upperCaseIfString);
    }
    return obj;
};
/**
 * Return upper case if the argument object type is string, otherwise return the provided value
 * @param obj
 */
export const upperCase = upperCaseIfString;
/**
 * Return lower case if the argument object type is string, otherwise return the provided value
 * @param obj
 */
export const lowerCaseIfString = (obj) => {
    if (typeof obj === 'string') {
        return obj.toLowerCase();
    }
    else if (Array.isArray(obj)) {
        return obj.map(lowerCaseIfString);
    }
    return obj;
};
/**
 * Return lower case if the argument object type is string, otherwise return the provided value
 * @param obj
 */
export const lowerCase = lowerCaseIfString;
/**
 * Check if strToCheck include the value, ignoring case
 * @param strToCheck String to check
 * @param value String to find in strToCheck
 */
export const includeIgnoreCase = (strToCheck, value) => isStringNotEmpty(value) && normalize(emptyDefault(strToCheck)).toLowerCase().includes(normalize(value.toLowerCase()));
/**
 * Capitalize string value in a null-safe manner
 * If string us null or undefined, empty string is returned, or the same value if @returnEmptyString is set to false
 * @param obj the Object to capitalize if is string
 * @param returnEmptyString
 */
export const capitalize = (obj, returnEmptyString = true) => {
    if (isStringNotEmpty(obj)) {
        const str = obj;
        return (str.length > 1 ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : str.toUpperCase());
    }
    else if (Array.isArray(obj)) {
        return obj.map(arrayItem => capitalize(arrayItem, returnEmptyString));
    }
    return (returnEmptyString ? '' : obj);
};
