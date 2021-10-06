/**
 *
 * Method takes two numeric arguments and returns their sum
 * @param a can be any numeric format number
 * @param b can be any numeric format number
 *
 *  *Example*
 * ```typescript
 * import { sum } from 'test-release-stuff'
 *
 * const result = sum(1, 2);
 * ```
 */
const sum = (a: number, b: number): number => {
  if (a && b) return a + b;

  return 0;
}

/**
 *
 *
 * ```typescript
 * import { multiply } from 'test-release-stuff'
 *
 * const result = multiply(1, 2);
 * ```
 *
 */

const multiply = (a: number, b: number): number => {
  if (a && b) return a * b;

  return 0;
}

const operations = { sum, multiply };
export default operations;
