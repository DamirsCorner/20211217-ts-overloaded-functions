import {
  getPropertyTyped,
  getPropertyUntyped,
  VariantA,
  VariantB,
  Wrapper,
} from "./overload";

const variantA: VariantA = {
  propertyA: "value",
};

const variantB: VariantB = {
  propertyB: "value",
};

const wrapper: Wrapper = {
  variant: {
    propertyA: "value",
  },
};

const invalid = {};

describe("getPropertyUntyped", () => {
  it("should get value from VariantA", () => {
    expect(getPropertyUntyped(variantA)).toBe("value");
  });

  it("should get value from VariantB", () => {
    expect(getPropertyUntyped(variantB)).toBe("value");
  });

  it("should get value from Wrapper", () => {
    expect(getPropertyUntyped(wrapper)).toBe("value");
  });

  it("should return undefined for other types", () => {
    expect(getPropertyUntyped(invalid)).toBeUndefined();
  });
});

describe("getPropertyTyped", () => {
  it("should get value from VariantA", () => {
    expect(getPropertyTyped(variantA)).toBe("value");
  });

  it("should get value from VariantB", () => {
    expect(getPropertyTyped(variantB)).toBe("value");
  });

  it("should get value from Wrapper", () => {
    expect(getPropertyTyped(wrapper)).toBe("value");
  });
});
