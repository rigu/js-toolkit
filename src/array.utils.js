"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDuplicates = exports.notEmpty = exports.isNotEmpty = exports.asArray = exports.arrayOf = void 0;
/**
 * If the object is array, then return the object
 * If the object is defined, return array including this object
 * If the object is not defined, return empty array
 * @param obj the Object to check
 */
var arrayOf = function (obj) {
    if (obj === void 0) { obj = []; }
    return obj ? (Array.isArray(obj) ? obj : [obj]) : [];
};
exports.arrayOf = arrayOf;
exports.asArray = exports.arrayOf;
/**
 * Check if array is not empty
 * @param obj
 */
var isNotEmpty = function (obj) { return !!obj && obj.length > 0; };
exports.isNotEmpty = isNotEmpty;
exports.notEmpty = exports.isNotEmpty;
/**
 * remove item duplicates from array
 * @param item
 * @param idx
 * @param selfArr
 */
var removeDuplicates = function (item, idx, selfArr) { return !idx || item !== selfArr[idx - 1]; };
exports.removeDuplicates = removeDuplicates;
