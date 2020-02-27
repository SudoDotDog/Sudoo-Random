/**
 * @author WMXPY
 * @namespace Random
 * @description Array
 */

import { randomNaturalBelow } from "./number";

export const randomElement = <T extends any = any>(array: T[]): T => {

    if (array.length === 0) {
        return undefined as any as T;
    }
    const index: number = randomNaturalBelow(array.length);
    return array[index] as T;
};
