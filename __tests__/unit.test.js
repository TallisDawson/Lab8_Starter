// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//phone number tests
test('PH 123-456-7890', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('PH 888-888-8888', () => {
    expect(functions.isPhoneNumber('888-888-8888')).toBe(true);
});

test('PH 123-456-789', () => {
    expect(functions.isPhoneNumber('123-456-789')).toBe(false);
});

test('PH 777-777', () => {
    expect(functions.isPhoneNumber('777-777')).toBe(false);
});
  

  //email tests

test('email t@g.au', () => {
    expect(functions.isEmail('t@g.au')).toBe(true);
});

test('email cse10@ucsd.edu', () => {
    expect(functions.isEmail('cse10@ucsd.edu')).toBe(true);
});

test('email t@g.au', () => {
    expect(functions.isEmail('tg.au')).toBe(false);
});

test('email cse10@ucsd.edu', () => {
    expect(functions.isEmail('cse10@ucsdedu')).toBe(false);
});

//Password tests

test('password AppleOrange', () => {
    expect(functions.isStrongPassword('AppleOrange')).toBe(true);
});

test('password Apple_ucsd', () => {
    expect(functions.isStrongPassword('Apple_ucsd')).toBe(true);
});

test('password App', () => {
    expect(functions.isStrongPassword('App')).toBe(false);
});

test('password blegh6^$#@', () => {
    expect(functions.isStrongPassword('blegh6^$#@')).toBe(false);
});


//date tests

test('date 77/77/7777', () => {
    expect(functions.isDate('77/77/7777')).toBe(true);
});

test('date 5/55/5555', () => {
    expect(functions.isDate('5/55/5555')).toBe(true);
});

test('date App', () => {
    expect(functions.isDate('App')).toBe(false);
});

test('date 88/88/88', () => {
    expect(functions.isDate('88/88/88')).toBe(false);
});


//hex tests

test('hex #AAA', () => {
    expect(functions.isHexColor('#AAA')).toBe(true);
});

test('hex #000000', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});

test('hex App', () => {
    expect(functions.isHexColor('App')).toBe(false);
});

test('hex #ffff', () => {
    expect(functions.isHexColor('#ffff')).toBe(false);
});