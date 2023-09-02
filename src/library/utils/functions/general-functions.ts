const { v4: uuidv4 } = require('uuid');

export const newGuid = () => uuidv4();

export const isEmpty = (value: any): boolean => {
    if (value === null || value === undefined) return true;
    if (typeof value === 'string' && value.trim() === '') return true;
    if (Array.isArray(value) && value.length === 0) return true;
    if (value.constructor === Object && Object.keys(value).length === 0) return true;
    if (typeof value === 'boolean') return false; // Booleans are not empty
    return false;
};

export const isNil = (value: any) => {
    if (isEmpty(value)) return true;
    if (value === false) return true;
    return false;
};

export const isNotNil = (value: any) => !isNil(value);

export const isNotEmpty = (value: any) => !isEmpty(value);
