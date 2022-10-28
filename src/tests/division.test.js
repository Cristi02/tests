import { division } from "../operations";

describe("Tests for division function:", () => {
    it("Divide two positive numbers", () => {
        expect(division(2, 2)).toBe(1);
        expect(division(7, 3)).toBeCloseTo(2.333, 3);
        expect(division(12, 6)).toBe(2);
    });

    it("Divide two negative numbers", () => {
        expect(division(-2, -2)).toBe(1);
        expect(division(-9, -1)).toBe(9);
        expect(division(-1, -12)).toBeCloseTo(0.083, 3);
    });

    it("Divide a negative and a positive number", () => {
        expect(division(2, -2)).toBe(-1);
        expect(division(9, -1)).toBe(-9);
        expect(division(1, -12)).toBeCloseTo(-0.083, 3);
    });

    it("Divide two positive float numbers", () => {
        expect(division(2.5, 2.5)).toBe(1);
        expect(division(0.1, 0.4)).toBe(0.25);
        expect(division(8.3, 2.9)).toBeCloseTo(2.862, 3);
    });

    it("Divide two negative float numbers", () => {
        expect(division(-2.5, -2.5)).toBe(1);
        expect(division(-0.1, -0.4)).toBe(0.25);
        expect(division(-8.3, -2.9)).toBeCloseTo(2.862, 3);
    });

    it("Divide a negative and a positive float", () => {
        expect(division(2.5, -2.5)).toBe(-1);
        expect(division(0.1, -0.4)).toBe(-0.25);
        expect(division(8.3, -2.9)).toBeCloseTo(-2.862, 3);
    });

    test("Dividing zero should return zero", () => {
        expect(division(0, 1)).toBe(0);
        expect(division(0, 2.2)).toBe(0);
        expect(division(0, -1.9)).toBe(-0);
    });

    test("Divideing with zero should return Infinty", () => {
        expect(division(5, 0)).toBe(Infinity);
        expect(division(2.2, 0)).toBe(Infinity);
        expect(division(-1.9, 0)).toBe(-Infinity);
    });
});
