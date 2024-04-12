/**
 * Check if the object is defined
 * @param obj
 */
export var isDefined = function (obj) { return !!obj; };
/**
 * return the same object if the object is defined, if not, the empty object
 * @param obj
 */
export var asDefined = function (obj) { return obj !== null && obj !== void 0 ? obj : {}; };
