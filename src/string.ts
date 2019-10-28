/**
 * @author WMXPY
 * @namespace Random
 * @description String
 */

export const random = (): string => {

    const value: string = Math.random().toString(36).substring(2);
    return value.substring(0, 10);
};

export const present = (time: Date = new Date()): string => {

    const value: string = time.getTime().toString(36);
    return value.substring(0, 8);
};

export const unique = (time: Date = new Date()): string => {

    return present(time) + random();
};
