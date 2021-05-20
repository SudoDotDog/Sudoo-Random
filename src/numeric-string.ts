/**
 * @author WMXPY
 * @namespace Random
 * @description Numeric String
 */

import { BINARY_ORDER, DEFAULT_STRING_LENGTH, TENTH_ORDER } from "./declare";

export const randomNumericString = (length: number = DEFAULT_STRING_LENGTH): string => {

    const value: string = Math.random()
        .toString(TENTH_ORDER)
        .substring(BINARY_ORDER);

    const acutalLength: number = length <= DEFAULT_STRING_LENGTH ? length : DEFAULT_STRING_LENGTH;
    const assertValue: string = value.substring(0, acutalLength);

    if (assertValue.length < acutalLength) {
        return assertValue.repeat(3).substring(0, acutalLength);
    }

    return assertValue;
};
