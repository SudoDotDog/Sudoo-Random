/**
 * @author WMXPY
 * @namespace Random
 * @description Scenario
 */

import { MAX_API_KEY_TAIL_LENGTH, SINGLE_BATCH_API_KEY_BATCH_LENGTH } from "./declare";
import { randomPresent, randomString } from "./string";

export const randomApiKey = (tails: number = 1): string => {

    if (tails <= 0) {
        return `${randomPresent()}-${randomString()}`;
    }

    const actualTails: number = tails >= MAX_API_KEY_TAIL_LENGTH ? MAX_API_KEY_TAIL_LENGTH : tails;
    const tailKeys: string[] = new Array(actualTails).fill(0).map(() => randomString());
    return `${randomPresent()}-${randomString(SINGLE_BATCH_API_KEY_BATCH_LENGTH)}-${tailKeys.join('-')}`;
};
