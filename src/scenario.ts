/**
 * @author WMXPY
 * @namespace Random
 * @description Scenario
 */

import { randomPresent, randomString } from "./string";

export const randomApiKey = (tails: number = 1): string => {

    if (tails <= 0) {
        return `${randomPresent()}-${randomString()}`;
    }

    const actualTails: number = tails >= 10 ? 10 : tails;
    const tailKeys: string[] = new Array(actualTails).fill(0).map(() => randomString());
    return `${randomPresent()}-${randomString(5)}-${tailKeys.join('-')}`;
};
