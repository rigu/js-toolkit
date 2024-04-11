/**
 * If the object is array, then return the object
 * If the object is defined, return array including this object
 * If the object is not defined, return empty array
 * @param obj the Object to check
 */
export declare const arrayOf: <T>(obj?: T | T[]) => T[];
export declare const asArray: <T>(obj?: T | T[]) => T[];
/**
 * Check if array is not empty
 * @param obj
 */
export declare const isNotEmpty: <T>(obj: T[] | string) => boolean;
export declare const notEmpty: <T>(obj: T[] | string) => boolean;
/**
 * remove item duplicates from array
 * @param item
 * @param idx
 * @param selfArr
 */
export declare const removeDuplicates: <T>(item: T, idx: number, selfArr: T[]) => boolean;
