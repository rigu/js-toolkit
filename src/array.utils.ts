/**
 * If the object is array, then return the object
 * If the object is defined, return array including this object
 * If the object is not defined, return empty array
 * @param obj the Object to check
 */
export const asArray = <T>(obj: T | T[] = []): T[] => obj ? (Array.isArray(obj) ? obj : [obj]) : [];

/**
 * Check if array is not empty
 * @param obj
 */
export const isNotEmpty = <T>(obj: T[] | string | undefined) => obj?.length > 0;

/**
 * remove item duplicates from array
 * @param item
 * @param idx
 * @param selfArr
 */
export const removeDuplicates = <T>(item: T, idx: number, selfArr: T[]) => !idx || item !== selfArr[idx - 1];
