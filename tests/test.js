const Dates = require('../src/index')
const d = new Dates('04/20/1989')

test('Sanity check', () => {
  expect(2+3).toBe(5)
})

test('year', () => {
  expect(d.year).toBe(1989)
})

test('shortYear', () => {
  expect(d.shortYear).toBe(89)
})

test('longMonth', () => {
  expect(d.longMonth).toBe('April')
})

test('short', () => {
  expect(d.shortMonth).toBe('Apr')
})

test('hr', () => {
  expect(d.hours).toBe(0)
})

test('min', () => {
  expect(d.mins).toBe(0)
})

test('sec', () => {
  expect(d.secs).toBe(0)
})


// Formatting Tests 


// Date Formatting Tests
test('date', () => {
  expect(new Dates('04/11/1993 13:15:30').format('y/m/d')).toBe('93/Apr/11')
  expect(new Dates('06/12/1998 13:15:30').format('Y-m/d')).toBe('1998-Jun/12')
})