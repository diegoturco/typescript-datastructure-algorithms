import binarySearchBasic from ".";

describe("binary search basic", () => {
  it("case 1", () => {
    const array = [0, 11, 21, 33, 45, 45, 61, 71, 72, 73];
    const target = 45;
    expect(binarySearchBasic(array, target) === 3);
  });

  it("case 2", () => {
    const array = [1, 2, 3, 4, 5];
    const target = 3;
    expect(binarySearchBasic(array, target) === 2);
  });    

  it("case 3", () => {
    const array = [1, 2, 3, 4, 5];
    const target = 20;
    expect(binarySearchBasic(array, target) === -1);
  });    

  it("case 4", () => {
    const array = [1, 2, 3, 4, 6];
    const target = 5;
    expect(binarySearchBasic(array, target) === -1);
  });    
});