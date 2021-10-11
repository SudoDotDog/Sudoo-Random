/**
 * @author WMXPY
 * @namespace Random
 * @description Numeric String
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { randomString } from '../../src';

describe('Given [Numeric-String] Functions', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('random-numeric-string');

    it('should be able to create random numeric string', (): void => {

        const value: string = randomString();

        expect(value).to.be.lengthOf(10);
    });

    it('should be able to create random numeric string with length setting - min', (): void => {

        const value: string = randomString(-10);

        expect(value).to.be.lengthOf(0);
    });

    it('should be able to create random numeric string with length setting - 0', (): void => {

        const value: string = randomString(0);

        expect(value).to.be.lengthOf(0);
    });

    it('should be able to create random numeric string with length setting - small', (): void => {

        const value: string = randomString(1);

        expect(value).to.be.lengthOf(1);
    });

    it('should be able to create random numeric string with length setting - large', (): void => {

        const value: string = randomString(100);

        expect(value).to.be.lengthOf(100);
    });

    it('should be able to create random numeric string with length setting - max', (): void => {

        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        const value: string = randomString(1000000);

        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        expect(value).to.be.lengthOf(65535);
    });
});
