import { squaredRoot } from "../operations";

describe("Tests for squaredRoot function:", () => {
    it("Square root of a number", () => {
        expect(squaredRoot(4)).toBe(2);
        expect(squaredRoot(16)).toBe(4);
        expect(squaredRoot(64)).toBe(8);
    });

    it("Square root of a float", () => {
        expect(squaredRoot(36.5)).toBeCloseTo(6.04, 1);
        expect(squaredRoot(10.2)).toBeCloseTo(3.19, 1);
        expect(squaredRoot(69.5)).toBeCloseTo(8.33, 1);
    });

    it("Square root of a zero", () => {
        expect(squaredRoot(0)).toBe(0);
    });

    it("Square root of a one", () => {
        expect(squaredRoot(1)).toBe(1);
    });
});
