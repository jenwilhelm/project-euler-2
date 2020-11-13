import { evenSum } from "./fibonacci";

test("#evenSum", () => {
  test("returns correct sum with default max", () => {
    expect(evenSum()).toBe(4613732);
  });

  test("returns correct sum given a specific max", () => {
    expect(evenSum(20)).toBe(10);
  });

  test("returns correct sum given a max value in fibonacci sequence", () => {
    expect(evenSum(21)).toBe(10);
  });

  test("returns correct sum given an odd max value", () => {
    expect(evenSum(17)).toBe(10);
  });
});
