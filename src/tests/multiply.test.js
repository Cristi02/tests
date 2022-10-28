import { multiply } from "../operations";

describe("Tests for multiply function:", () => {
    it("Multiply two positive numbers", () => {
        expect(multiply(2, 2)).toBe(4);
        expect(multiply(7, 3)).toBe(21);
        expect(multiply(12, 6)).toBe(72);
    });

    it("Multiply two negative numbers", () => {
        expect(multiply(-2, -2)).toBe(4);
        expect(multiply(-9, -1)).toBe(9);
        expect(multiply(-1, -12)).toBe(12);
    });

    it("Multiply a negative and a positive number", () => {
        expect(multiply(2, -2)).toBe(-4);
        expect(multiply(9, -1)).toBe(-9);
        expect(multiply(1, -12)).toBe(-12);
    });

    it("Multiply two positive float numbers", () => {
        expect(multiply(2.5, 2.5) - 6.25).toBeLessThan(0.001);
        expect(multiply(0.1, 0.4) - 0.04).toBeLessThan(0.001);
        expect(multiply(8.3, 2.9) - 24.07).toBeLessThan(0.001);
    });

    it("Multiply two negative float numbers", () => {
        expect(multiply(-2.5, -2.5) - 6.25).toBeLessThan(0.001);
        expect(multiply(-0.1, -0.4) - 0.04).toBeLessThan(0.001);
        expect(multiply(-8.3, -2.9) - 24.07).toBeLessThan(0.001);
    });

    it("Multiply a negative and a positive float", () => {
        expect(multiply(2.5, -2.5) - -6.25).toBeLessThan(0.001);
        expect(multiply(0.1, -0.4) - -0.04).toBeLessThan(0.001);
        expect(multiply(8.3, -2.9) - -24.07).toBeLessThan(0.001);
    });

    test("Multiplying with zero should return zero", () => {
        expect(multiply(0, 1)).toBe(0);
        expect(multiply(2.2, 0)).toBe(0);
        expect(multiply(-1.9, 0)).toBe(-0);
    });

    test("Multiplying with one should return the other number", () => {
        expect(multiply(5, 1)).toBe(5);
        expect(multiply(2.2, 1)).toBe(2.2);
        expect(multiply(-1.9, 1)).toBe(-1.9);
    });
});
