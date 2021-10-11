/**
 * @author WMXPY
 * @namespace Random
 * @description String
 */

import { BINARY_ORDER, DEFAULT_STRING_LENGTH, SINGLE_BATCH_TIME_STRING_LENGTH, THIRTY_SIX_ORDER } from "./declare";

export const randomString = (length: number = DEFAULT_STRING_LENGTH): string => {

    const value: string = Math.random()
        .toString(THIRTY_SIX_ORDER)
        .substring(BINARY_ORDER);

    const acutalLength: number = Math.max(length, 0);
    const assertValue: string = value.substring(0, acutalLength);

    let currentResult: string = assertValue;
    while (currentResult.length < acutalLength) {
        currentResult += randomString(length - currentResult.length);
    }

    return currentResult;
};

export const randomPresent = (time: Date = new Date()): string => {

    const value: string = time.getTime().toString(THIRTY_SIX_ORDER);
    return value.substring(0, SINGLE_BATCH_TIME_STRING_LENGTH);
};

export const randomUnique = (time: Date = new Date()): string => {

    return randomPresent(time) + randomString();
};
