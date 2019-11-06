/**
 * @author WMXPY
 * @namespace Random
 * @description String
 */

export const randomString = (length: number = 10): string => {

    const value: string = Math.random().toString(36).substring(2);

    const acutalLength: number = length <= 10 ? length : 10;
    const assertValue: string = value.substring(0, acutalLength);

    if (assertValue.length < acutalLength) {
        return assertValue.repeat(3).substring(0, acutalLength);
    }

    return assertValue;
};

export const randomPresent = (time: Date = new Date()): string => {

    const value: string = time.getTime().toString(36);
    return value.substring(0, 8);
};

export const randomUnique = (time: Date = new Date()): string => {

    return randomPresent(time) + randomString();
};
