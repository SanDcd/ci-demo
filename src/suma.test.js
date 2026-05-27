import { describe, it, expect } from 'vitest';
import { sumar } from './suma.js';

describe('Función sumar', () => {
  it('debería sumar dos números correctamente', () => {
    expect(sumar(2, 3)).toBe(5);
  });
});