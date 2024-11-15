// Empty object
const EMPTY_OBJ_KEYS = Object.getOwnPropertyNames(Object.getPrototypeOf({}));

const FORBIDDEN_OBJ_KEYS = ['length', 'name', 'arguments', 'constructor', 'apply', 'bind', 'call', 'toString', 'caller', 'callee', 'prototype'];