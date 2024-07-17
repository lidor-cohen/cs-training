const scripts = require("./script");

// Testing Capitalize
test("Regular word capitalizing", () => {
  expect(scripts.capitalize("hello")).toBe("Hello");
});

test("1 letter word capitalizing", () => {
  expect(scripts.capitalize("h")).toBe("H");
});

test("Blank work capitalizing", () => {
  expect(scripts.capitalize("")).toBe("");
});

// Testing Reverse String
test("Regular word reversing", () => {
  expect(scripts.reverseString("hello")).toBe("olleh");
});

test("1 letter word reversing", () => {
  expect(scripts.reverseString("h")).toBe("h");
});

test("Blank work reversing", () => {
  expect(scripts.reverseString("")).toBe("");
});

// Testing Calculator
test("testing adding", () => {
  expect(scripts.calculator.add(1, 3)).toEqual(4);
  expect(scripts.calculator.add(0, 0)).toEqual(0);
  expect(scripts.calculator.add(-5, -5)).toEqual(-10);
  expect(scripts.calculator.add(-5, 15)).toEqual(10);
});

test("testing substracting", () => {
  expect(scripts.calculator.substract(3, 1)).toEqual(2);
  expect(scripts.calculator.substract(0, 0)).toEqual(0);
  expect(scripts.calculator.substract(-5, -5)).toEqual(0);
  expect(scripts.calculator.substract(-5, 5)).toEqual(-10);
});

test("testing multiplying", () => {
  expect(scripts.calculator.multiply(1, 3)).toEqual(3);
  expect(scripts.calculator.multiply(12, 5)).toEqual(60);
  expect(scripts.calculator.multiply(-5, -5)).toEqual(25);
  expect(scripts.calculator.multiply(-5, 10)).toEqual(-50);
  expect(Object.is(scripts.calculator.multiply(-5, 0), -0)).toBe(true);
});

test("testing dividing", () => {
  expect(scripts.calculator.divide(0, 0)).toBe(null);
  expect(scripts.calculator.divide(1, 3)).toBeCloseTo(0.3333);
  expect(scripts.calculator.divide(-5, -5)).toEqual(1);
  expect(scripts.calculator.divide(10, 5)).toEqual(2);
});

// Test Ceaser Cipher
describe("Caesar Cipher Tests", () => {
  it("Shift by 1 (Simplest Case)", () => {
    expect(scripts.caesarCipher("hello", 1)).toBe("ifmmp");
  });

  it("Shift by 3 (Positive Shift)", () => {
    expect(scripts.caesarCipher("abcxyz", 3)).toBe("defabc");
  });

  it("Shift by 5 (End of Alphabet Wrap)", () => {
    expect(scripts.caesarCipher("xyz", 5)).toBe("cde");
  });

  it("Shift by 0 (No Change)", () => {
    expect(scripts.caesarCipher("hello", 0)).toBe("hello");
  });

  it("Shift by 26 (Full Wrap Around)", () => {
    expect(scripts.caesarCipher("abc", 26)).toBe("abc");
  });

  it("Shift by -1 (Backwards Shift)", () => {
    expect(scripts.caesarCipher("def", -1)).toBe("cde");
  });

  it("Non-Alphabetic Characters (No Change)", () => {
    expect(scripts.caesarCipher("hello, world!", 5)).toBe("mjqqt, btwqi!");
  });

  it("Mixed Case (Preserve Case)", () => {
    expect(scripts.caesarCipher("Hello, World!", 1)).toBe("Ifmmp, Xpsme!");
  });

  it("Large Positive Shift (Wrap Around Several Times)", () => {
    expect(scripts.caesarCipher("abc", 30)).toBe("efg");
  });
});

describe("analyzeArray function", () => {
  it("calculates average, min, max, and length correctly for positive numbers", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = scripts.analyzeArray(arr);
    expect(result.average).toBeCloseTo(3); // Average should be 3
    expect(result.min).toBe(1); // Min should be 1
    expect(result.max).toBe(5); // Max should be 5
    expect(result.length).toBe(5); // Length should be 5
  });

  it("calculates average, min, max, and length correctly for negative numbers", () => {
    const arr = [-5, -2, -8, -1];
    const result = scripts.analyzeArray(arr);
    expect(result.average).toBeCloseTo(-4); // Average should be -4
    expect(result.min).toBe(-8); // Min should be -8
    expect(result.max).toBe(-1); // Max should be -1
    expect(result.length).toBe(4); // Length should be 4
  });

  it("handles arrays with one element", () => {
    const arr = [42];
    const result = scripts.analyzeArray(arr);
    expect(result.average).toBe(42); // Average should be 42
    expect(result.min).toBe(42); // Min should be 42
    expect(result.max).toBe(42); // Max should be 42
    expect(result.length).toBe(1); // Length should be 1
  });

  it("handles empty arrays", () => {
    const arr = [];
    const result = scripts.analyzeArray(arr);
    expect(result.average).toBeNaN(); // Average of empty array is NaN
    expect(result.min).toBeUndefined(); // Min of empty array is undefined
    expect(result.max).toBeUndefined(); // Max of empty array is undefined
    expect(result.length).toBe(0); // Length should be 0
  });

  it("handles arrays with mixed numbers", () => {
    const arr = [10, -5, 20, 0, -3];
    const result = scripts.analyzeArray(arr);
    expect(result.average).toBeCloseTo(4.4); // Average should be approximately 4.4
    expect(result.min).toBe(-5); // Min should be -5
    expect(result.max).toBe(20); // Max should be 20
    expect(result.length).toBe(5); // Length should be 5
  });
});
