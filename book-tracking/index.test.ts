import { describe, test, expect } from 'vitest'

const add = (a: number, b: number) => a + b

describe('test for add function', () => {
   test('add(1, 2) should be 3', () => {
      expect(add(1, 2)).toBe(3)
   })
})