/**
 * @author WMXPY
 * @namespace Random
 * @description String
 */

import { BINARY_ORDER, DEFAULT_STRING_LENGTH, MAX_RANDOM_STRING_LENGTH, SINGLE_BATCH_TIME_STRING_LENGTH, THIRTY_SIX_ORDER } from "./declare";

export const randomString = (length: number = DEFAULT_STRING_LENGTH): string => {

    const value: string = Math.random()
        .toString(THIRTY_SIX_ORDER)
        .substring(BINARY_ORDER);

    const acutalLength: number = Math.max(Math.min(length, MAX_RANDOM_STRING_LENGTH), 0);
    const assertValue: string = value.substring(0, acutalLength);

    if (assertValue.length < acutalLength) {
        return assertValue + randomString(acutalLength - assertValue.length);
    }
    return assertValue;
};

export const randomPresent = (time: Date = new Date()): string => {

    const value: string = time.getTime().toString(THIRTY_SIX_ORDER);
    return value.substring(0, SINGLE_BATCH_TIME_STRING_LENGTH);
};

export const randomUnique = (time: Date = new Date()): string => {

    return randomPresent(time) + randomString();
};
