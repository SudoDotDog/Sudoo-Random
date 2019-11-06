/**
 * @author WMXPY
 * @namespace Random
 * @description Scenario
 */

import { randomPresent, randomString } from "./string";

export const randomApiKey = (): string => {

    return `${randomPresent()}-${randomString(5)}-${randomString()}`;
};
