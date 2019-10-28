/**
 * @author WMXPY
 * @namespace Random
 * @description String
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { present, random, unique } from '../../src';

describe('Given [String] Functions', (): void => {

    const chance: Chance.Chance = new Chance('random-string');

    it('should be able to create random string', (): void => {

        const value: string = random();

        expect(value).to.be.lengthOf(11);
    });

    it('should be able to create present date string', (): void => {

        const date: Date = chance.date();
        const value: string = present(date);
        const value2: string = present(date);

        expect(value).to.be.lengthOf(8);
        expect(value).to.be.equal(value2);
    });

    it('should be able to create unique string', (): void => {

        const date: Date = chance.date();
        const value: string = unique(date);
        const value2: string = unique(date);

        console.log(value);
        console.log(value2);

        expect(value).to.be.lengthOf(20);
        expect(value.substring(0, 9)).to.be.equal(value2.substring(0, 9));
    });
});
