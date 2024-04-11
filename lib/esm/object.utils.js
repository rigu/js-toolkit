/**
 * Check if the object is defined
 * @param obj
 */
export const isDefined = (obj) => !!obj;
/**
 * return the same object if the object is defined, if not, the empty object
 * @param obj
 */
export const asDefined = (obj) => obj ?? {};
