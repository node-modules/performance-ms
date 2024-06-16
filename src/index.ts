import { performance } from 'node:perf_hooks';

export function now() {
  return performance.now();
}

/**
 * Diff timestamp in ms format
 */
export function diff(startTime: number) {
  return Math.floor((performance.now() - startTime) * 1000) / 1000;
}
