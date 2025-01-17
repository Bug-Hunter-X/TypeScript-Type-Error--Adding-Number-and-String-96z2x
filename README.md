# TypeScript Type Error: Adding Number and String

This repository demonstrates a common type error in TypeScript where an attempt is made to add a number and a string. The error is caught by TypeScript's type system during compilation, preventing runtime errors. The solution demonstrates how to avoid this by ensuring that both inputs are of the correct type.

## Bug

The `add` function is defined to expect two numbers as input. However, it's called with a number and a string, which leads to a compilation error.

## Solution

The solution enforces that inputs to the function are numbers, either using type assertion or by adding input validation, ensuring the function works correctly.