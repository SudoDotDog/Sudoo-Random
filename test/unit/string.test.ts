/**
 * @author WMXPY
 * @namespace Random
 * @description String
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { randomPresent, randomString, randomUnique } from '../../src';

describe('Given [String] Functions', (): void => {

    const chance: Chance.Chance = new Chance('random-string');

    it('should be able to create random string', (): void => {

        const value: string = randomString();

        expect(value).to.be.lengthOf(10);
    });

    it('should be able to create present date string', (): void => {

        const date: Date = chance.date();
        const value: string = randomPresent(date);
        const value2: string = randomPresent(date);

        expect(value).to.be.lengthOf(8);
        expect(value).to.be.equal(value2);
    });

    it('should be able to create unique string', (): void => {

        const date: Date = chance.date();
        const value: string = randomUnique(date);
        const value2: string = randomUnique(date);

        expect(value).to.be.lengthOf(18);
        expect(value.substring(0, 8)).to.be.equal(value2.substring(0, 8));
    });
});
