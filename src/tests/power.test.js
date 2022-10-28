import { power } from "../operations";

describe("Tests for power function:", () => {
    it("A positive number to the power of a positive number", () => {
        expect(power(2, 2)).toBe(4);
        expect(power(7, 3)).toBe(343);
        expect(power(12, 6)).toBe(2985984);
    });

    it("A negative number to the power of a negative number", () => {
        expect(power(-2, -2)).toBe(0.25);
        expect(power(-9, -1)).toBeCloseTo(-0.111, 3);
        expect(power(-1, -12)).toBe(1);
    });

    it("A positive number to the power of a negative number", () => {
        expect(power(2, -2)).toBe(0.25);
        expect(power(9, -1)).toBeCloseTo(0.111, 3);
        expect(power(1, -12)).toBeCloseTo(1);
    });

    it("A positive float number to the power of a positive float number", () => {
        expect(power(2.5, 2.5)).toBeCloseTo(9.882, 3);
        expect(power(0.1, 0.4)).toBeCloseTo(0.398, 3);
        expect(power(8.3, 2.9)).toBeCloseTo(462.728, 2);
    });

    it("A negative float number to the power of a negative float number", () => {
        expect(power(-2.5, -2.1)).toBe(NaN);
        expect(power(-0.1, -0.4)).toBe(NaN);
        expect(power(-8.3, -2.9)).toBe(NaN);
    });

    it("A positive float number to the power of a negative float number", () => {
        expect(power(2.5, -2.5)).toBeCloseTo(0.1, 2);
        expect(power(0.1, -0.4)).toBeCloseTo(2.51, 2);
        expect(power(8.3, -2.9)).toBeCloseTo(0.002, 3);
    });

    it("A number to the power zero results one", () => {
        expect(power(2.5, 0)).toBe(1);
        expect(power(0.1, 0)).toBe(1);
        expect(power(8.3, 0)).toBe(1);
    });
});
