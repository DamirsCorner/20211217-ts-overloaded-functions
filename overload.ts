export interface VariantA {
  propertyA: string;
}

export interface VariantB {
  propertyB: string;
}

export interface Wrapper {
  variant: VariantA;
}

export function getPropertyUntyped(input: any): string | undefined {
  if (input.variant) {
    input = input.variant;
  }

  if (input.propertyA) {
    return input.propertyA;
  } else if (input.propertyB) {
    return input.propertyB;
  } else {
    return undefined;
  }
}

export function getPropertyTyped(input: VariantA): string;
export function getPropertyTyped(input: VariantB): string;
export function getPropertyTyped(input: Wrapper): string;
export function getPropertyTyped(
  input: VariantA | VariantB | Wrapper
): string | undefined {
  function isVariantA(value: any): value is VariantA {
    return value.propertyA !== undefined;
  }

  function isVariantB(value: any): value is VariantB {
    return value.propertyB !== undefined;
  }

  function isWrapper(value: any): value is Wrapper {
    return value.variant !== undefined;
  }

  if (isWrapper(input)) {
    input = input.variant;
  }

  if (isVariantA(input)) {
    return input.propertyA;
  } else if (isVariantB(input)) {
    return input.propertyB;
  } else {
    return undefined;
  }
}
