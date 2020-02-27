/**
 * @author WMXPY
 * @namespace Random
 * @description Number
 */

export const randomNaturalBelow = (max: number): number => {

    const maxInteger: number = Math.floor(max);
    return Math.floor(Math.random() * maxInteger);
};

export const randomIntegerBelow = (max: number): number => {

    return randomNaturalBelow(max);
};

export const randomIntegerBetween = (min: number, max: number): number => {

    const minInteger = Math.ceil(min);
    const maxInteger = Math.floor(max);
    return Math.floor(Math.random() * (maxInteger - minInteger + 1) + minInteger);
};
