/* eslint-disable @typescript-eslint/no-magic-numbers */
/**
 * @author WMXPY
 * @namespace Random
 * @description Scenario
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { randomApiKey } from '../../src';

describe('Given [Scenario] Functions', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('random-scenario');

    it('should be able to create random api key', (): void => {

        const value: string = randomApiKey();

        expect(value).to.be.lengthOf(8 + 5 + 10 + 2);
    });

    it('should be able to create no-tail key', (): void => {

        const value1: string = randomApiKey(0);
        const value2: string = randomApiKey(-15);

        expect(value1).to.be.lengthOf(8 + 10 + 1);
        expect(value2).to.be.lengthOf(8 + 10 + 1);
    });

    it('should be able to create long-tail key', (): void => {

        const value1: string = randomApiKey(5);
        const value2: string = randomApiKey(10);
        const value3: string = randomApiKey(20);

        expect(value1).to.be.lengthOf(8 + 5 + (10 * 5) + (2 + 5 - 1));
        expect(value2).to.be.lengthOf(8 + 5 + (10 * 10) + (2 + 10 - 1));
        expect(value3).to.be.lengthOf(8 + 5 + (10 * 10) + (2 + 10 - 1));
    });
});
