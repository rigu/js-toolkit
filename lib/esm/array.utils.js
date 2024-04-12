/**
 * If the object is array, then return the object
 * If the object is defined, return array including this object
 * If the object is not defined, return empty array
 * @param obj the Object to check
 */
export var arrayOf = function (obj) {
    if (obj === void 0) { obj = []; }
    return obj ? (Array.isArray(obj) ? obj : [obj]) : [];
};
export var asArray = arrayOf;
/**
 * Check if array is not empty
 * @param obj
 */
export var isNotEmpty = function (obj) { return !!obj && obj.length > 0; };
export var notEmpty = isNotEmpty;
/**
 * remove item duplicates from array
 * @param item
 * @param idx
 * @param selfArr
 */
export var removeDuplicates = function (item, idx, selfArr) { return !idx || item !== selfArr[idx - 1]; };
