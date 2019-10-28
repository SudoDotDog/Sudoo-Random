/**
 * @author WMXPY
 * @namespace Random
 * @description String
 */

export const random = (): string => {

    return Math.random().toString(36).substring(2);
};

export const present = (time: Date = new Date()): string => {

    return time.getTime().toString(36);
};

export const unique = (time: Date = new Date()): string => {

    return present(time) + random();
};
