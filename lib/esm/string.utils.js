import { isNotEmpty } from './array.utils';
/**
 * compares two strings ignoring case and special chars in a null-safe manner
 * @param str1
 * @param str2
 */
export var compareIgnoreCase = function (str1, str2) {
    return str1 === str2 || normalize(str1).toLowerCase() === normalize(str2).toLowerCase();
};
/**
 * check if object is a string type
 * @param obj Object to check
 */
export var isString = function (obj) { return typeof obj === 'string'; };
/**
 * checks if object is a string and contains text
 */
export var isStringNotEmpty = function (str) { return isString(str) && isNotEmpty(str); };
/**
 * return empty string if is null or undefined
 * @param str
 */
export var defaultEmpty = function (str) { return str !== null && str !== void 0 ? str : ''; };
/**
 * return empty string if provided null or undefined
 * @param str
 */
export var emptyDefault = defaultEmpty;
/**
 * Normalize the string for special chars
 * @param str
 */
export var normalize = function (str) { return str.normalize('NFD').replace(/[\u0300-\u036f]/g, ""); };
/**
 * Return upper case if the argument object type is string, otherwise return the provided value
 * @param obj
 */
export var upperCaseIfString = function (obj) {
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
export var upperCase = upperCaseIfString;
/**
 * Return lower case if the argument object type is string, otherwise return the provided value
 * @param obj
 */
export var lowerCaseIfString = function (obj) {
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
export var lowerCase = lowerCaseIfString;
/**
 * Check if strToCheck include the value, ignoring case
 * @param strToCheck String to check
 * @param value String to find in strToCheck
 */
export var includeIgnoreCase = function (strToCheck, value) {
    return isStringNotEmpty(value) && normalize(emptyDefault(strToCheck)).toLowerCase().includes(normalize(value.toLowerCase()));
};
/**
 * Capitalize string value in a null-safe manner
 * If string us null or undefined, empty string is returned, or the same value if @returnEmptyString is set to false
 * @param obj the Object to capitalize if is string
 * @param returnEmptyString
 */
export var capitalize = function (obj, returnEmptyString) {
    if (returnEmptyString === void 0) { returnEmptyString = true; }
    if (isStringNotEmpty(obj)) {
        var str = obj;
        return (str.length > 1 ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : str.toUpperCase());
    }
    else if (Array.isArray(obj)) {
        return obj.map(function (arrayItem) { return capitalize(arrayItem, returnEmptyString); });
    }
    return (returnEmptyString ? '' : obj);
};
