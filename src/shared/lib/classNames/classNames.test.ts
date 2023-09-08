import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames', () => {
  test('with one param', () => {
    expect(classNames('someSlass')).toBe('someSlass')
  })
  test('with aditional params', () => {
    expect(classNames('someSlass', {}, ['someSlass1', 'someSlass2'])).toBe('someSlass someSlass1 someSlass2')
  })
  test('with modes', () => {
    expect(classNames('someSlass', { modeParam1: true, modeParam2: false }, ['someSlass1'])).toBe('someSlass someSlass1 modeParam1')
  })
  test('with modes underfined', () => {
    expect(classNames('someSlass', { modeParam1: undefined, modeParam2: true }, ['someSlass1'])).toBe('someSlass someSlass1 modeParam2')
  })
})
