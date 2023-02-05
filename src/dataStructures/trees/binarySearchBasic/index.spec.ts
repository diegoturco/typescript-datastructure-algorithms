import binarySearchBasic from ".";

describe("binary search basic", () => {
  it("case 1", () => {
    const array = [0, 11, 21, 33, 45, 45, 61, 71, 72, 73];
    const target = 45;
    expect(binarySearchBasic(array, target) === 3);
  });
});
