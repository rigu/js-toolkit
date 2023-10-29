/**
 * If the object is array, then return the object
 * If the object is defined, return array including this object
 * If the object is not defined, return empty array
 * @param obj the Object to check
 */
export const arrayOf = <T>(obj: T | T[] = []): T[] => obj ? (Array.isArray(obj) ? obj : [obj]) : [];
export const asArray = arrayOf;

/**
 * Check if array is not empty
 * @param obj
 */
export const isNotEmpty = <T>(obj: T[] | string | undefined) => obj?.length > 0;
export const notEmpty = isNotEmpty;

/**
 * remove item duplicates from array
 * @param item
 * @param idx
 * @param selfArr
 */
export const removeDuplicates = <T>(item: T, idx: number, selfArr: T[]) => !idx || item !== selfArr[idx - 1];
