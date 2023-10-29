/**
 * Check if the object is defined
 * @param obj
 */
export const isDefined = <T>(obj: T) => !!obj;

/**
 * return the same object if the object is defined, if not, the empty object
 * @param obj
 */
export const asDefined = <T>(obj: T) => obj ?? {};
