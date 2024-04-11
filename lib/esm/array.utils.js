/**
 * If the object is array, then return the object
 * If the object is defined, return array including this object
 * If the object is not defined, return empty array
 * @param obj the Object to check
 */
export const arrayOf = (obj = []) => obj ? (Array.isArray(obj) ? obj : [obj]) : [];
export const asArray = arrayOf;
/**
 * Check if array is not empty
 * @param obj
 */
export const isNotEmpty = (obj) => !!obj && obj.length > 0;
export const notEmpty = isNotEmpty;
/**
 * remove item duplicates from array
 * @param item
 * @param idx
 * @param selfArr
 */
export const removeDuplicates = (item, idx, selfArr) => !idx || item !== selfArr[idx - 1];
