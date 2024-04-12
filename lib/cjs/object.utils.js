"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asDefined = exports.isDefined = void 0;
/**
 * Check if the object is defined
 * @param obj
 */
var isDefined = function (obj) { return !!obj; };
exports.isDefined = isDefined;
/**
 * return the same object if the object is defined, if not, the empty object
 * @param obj
 */
var asDefined = function (obj) { return obj !== null && obj !== void 0 ? obj : {}; };
exports.asDefined = asDefined;
