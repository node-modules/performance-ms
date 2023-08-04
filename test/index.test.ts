import { strict as assert } from 'node:assert';
import { now, diff } from '../index';

describe('test/index.test.ts', () => {
  it('should work', () => {
    let startTime = now();
    for (let i = 0; i < 1000000; i++) {
      // loop
    }
    const rt = diff(startTime);
    console.log('rt %d', rt);
    assert.equal(typeof rt, 'number');
    assert(rt > 0);
    assert.match(`${rt}`, /^\d+\.\d+$/);

    startTime = now();
    const rt2 = diff(startTime);
    console.log('rt2 %d', rt2);
    assert.equal(typeof rt2, 'number');
    assert(rt2 > 0);
    assert.match(`${rt2}`, /^\d+\.\d+$/);
  });
});
