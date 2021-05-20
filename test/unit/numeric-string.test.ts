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
});
