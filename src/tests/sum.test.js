import { sum } from "../operations";

describe("Tests for sum function:", () => {
    it("Add two positive numbers", () => {
        expect(sum(2, 2)).toBe(4);
        expect(sum(7, 3)).toBe(10);
        expect(sum(12, 6)).toBe(18);
    });

    it("Add two negative numbers", () => {
        expect(sum(-2, -2)).toBe(-4);
        expect(sum(-9, -1)).toBe(-10);
        expect(sum(-1, -12)).toBe(-13);
    });

    it("Add a negative and a positive number", () => {
        expect(sum(2, -2)).toBe(0);
        expect(sum(9, -1)).toBe(8);
        expect(sum(1, -12)).toBe(-11);
    });

    it("Add two positive float numbers", () => {
        expect(sum(2.5, 2.5) - 5.0).toBeLessThan(0.001);
        expect(sum(0.1, 0.4) - 0.5).toBeLessThan(0.001);
        expect(sum(8.3, 2.9) - 11.2).toBeLessThan(0.001);
    });

    it("Add two negative float numbers", () => {
        expect(sum(-2.5, -2.5) - 5.0).toBeLessThan(0.001);
        expect(sum(-0.1, -0.4) - -0.5).toBeLessThan(0.001);
        expect(sum(-8.3, -2.9) - -11.2).toBeLessThan(0.001);
    });

    it("Add a negative and a positive float", () => {
        expect(sum(2.5, -2.5) - 0.0).toBeLessThan(0.001);
        expect(sum(0.1, -0.4) - -0.3).toBeLessThan(0.001);
        expect(sum(8.3, -2.9) - 5.4).toBeLessThan(0.001);
    });

    test("Adding zero should return the other number", () => {
        expect(sum(0, 1)).toBe(1);
        expect(sum(2.2, 0)).toBe(2.2);
        expect(sum(-1.9, 0)).toBe(-1.9);
    });
});
