import { difference } from "../operations";

describe("Tests for difference function:", () => {
    it("Decrease two positive numbers", () => {
        expect(difference(2, 2)).toBe(0);
        expect(difference(7, 3)).toBe(4);
        expect(difference(12, 6)).toBe(6);
    });

    it("Decrease two negative numbers", () => {
        expect(difference(-2, -2)).toBe(0);
        expect(difference(-9, -1)).toBe(-8);
        expect(difference(-1, -12)).toBe(11);
    });

    it("Decrease a negative and a positive number", () => {
        expect(difference(2, -2)).toBe(4);
        expect(difference(9, -1)).toBe(10);
        expect(difference(1, -12)).toBe(13);
    });

    it("Decrease two positive float numbers", () => {
        expect(difference(2.5, 2.5) - 0.0).toBeLessThan(0.001);
        expect(difference(0.1, 0.4) - -0.3).toBeLessThan(0.001);
        expect(difference(8.3, 2.9) - 11.2).toBeLessThan(0.001);
    });

    it("Decrease two negative float numbers", () => {
        expect(difference(-2.5, -2.5) - 5.0).toBeLessThan(0.001);
        expect(difference(-0.1, -0.4) - 0.3).toBeLessThan(0.001);
        expect(difference(-8.3, -2.9) - -5.4).toBeLessThan(0.001);
    });

    it("Decrease a negative and a positive float", () => {
        expect(difference(2.5, -2.5) - 5.0).toBeLessThan(0.001);
        expect(difference(0.1, -0.4) - 0.5).toBeLessThan(0.001);
        expect(difference(8.3, -2.9) - 11.2).toBeLessThan(0.001);
    });

    test("Decreasing with zero should return the other number", () => {
        expect(difference(0, 1)).toBe(-1);
        expect(difference(2.2, 0)).toBe(2.2);
        expect(difference(-1.9, 0)).toBe(-1.9);
    });
});
