"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = exports.includeIgnoreCase = exports.lowerCase = exports.lowerCaseIfString = exports.upperCase = exports.upperCaseIfString = exports.normalize = exports.emptyDefault = exports.defaultEmpty = exports.isStringNotEmpty = exports.isString = exports.compareIgnoreCase = void 0;
var array_utils_1 = require("./array.utils");
/**
 * compares two strings ignoring case and special chars in a null-safe manner
 * @param str1
 * @param str2
 */
var compareIgnoreCase = function (str1, str2) {
    return str1 === str2 || (0, exports.normalize)(str1).toLowerCase() === (0, exports.normalize)(str2).toLowerCase();
};
exports.compareIgnoreCase = compareIgnoreCase;
/**
 * check if object is a string type
 * @param obj Object to check
 */
var isString = function (obj) { return typeof obj === 'string'; };
exports.isString = isString;
/**
 * checks if object is a string and contains text
 */
var isStringNotEmpty = function (str) { return (0, exports.isString)(str) && (0, array_utils_1.isNotEmpty)(str); };
exports.isStringNotEmpty = isStringNotEmpty;
/**
 * return empty string if is null or undefined
 * @param str
 */
var defaultEmpty = function (str) { return str !== null && str !== void 0 ? str : ''; };
exports.defaultEmpty = defaultEmpty;
/**
 * return empty string if provided null or undefined
 * @param str
 */
exports.emptyDefault = exports.defaultEmpty;
/**
 * Normalize the string for special chars
 * @param str
 */
var normalize = function (str) { return str.normalize('NFD').replace(/[\u0300-\u036f]/g, ""); };
exports.normalize = normalize;
/**
 * Return upper case if the argument object type is string, otherwise return the provided value
 * @param obj
 */
var upperCaseIfString = function (obj) {
    if (typeof obj === 'string') {
        return obj.toUpperCase();
    }
    else if (Array.isArray(obj)) {
        return obj.map(exports.upperCaseIfString);
    }
    return obj;
};
exports.upperCaseIfString = upperCaseIfString;
/**
 * Return upper case if the argument object type is string, otherwise return the provided value
 * @param obj
 */
exports.upperCase = exports.upperCaseIfString;
/**
 * Return lower case if the argument object type is string, otherwise return the provided value
 * @param obj
 */
var lowerCaseIfString = function (obj) {
    if (typeof obj === 'string') {
        return obj.toLowerCase();
    }
    else if (Array.isArray(obj)) {
        return obj.map(exports.lowerCaseIfString);
    }
    return obj;
};
exports.lowerCaseIfString = lowerCaseIfString;
/**
 * Return lower case if the argument object type is string, otherwise return the provided value
 * @param obj
 */
exports.lowerCase = exports.lowerCaseIfString;
/**
 * Check if strToCheck include the value, ignoring case
 * @param strToCheck String to check
 * @param value String to find in strToCheck
 */
var includeIgnoreCase = function (strToCheck, value) {
    return (0, exports.isStringNotEmpty)(value) && (0, exports.normalize)((0, exports.emptyDefault)(strToCheck)).toLowerCase().includes((0, exports.normalize)(value.toLowerCase()));
};
exports.includeIgnoreCase = includeIgnoreCase;
/**
 * Capitalize string value in a null-safe manner
 * If string us null or undefined, empty string is returned, or the same value if @returnEmptyString is set to false
 * @param obj the Object to capitalize if is string
 * @param returnEmptyString
 */
var capitalize = function (obj, returnEmptyString) {
    if (returnEmptyString === void 0) { returnEmptyString = true; }
    if ((0, exports.isStringNotEmpty)(obj)) {
        var str = obj;
        return (str.length > 1 ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : str.toUpperCase());
    }
    else if (Array.isArray(obj)) {
        return obj.map(function (arrayItem) { return (0, exports.capitalize)(arrayItem, returnEmptyString); });
    }
    return (returnEmptyString ? '' : obj);
};
exports.capitalize = capitalize;
