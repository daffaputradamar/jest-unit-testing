const reverseString = require('./reverseString')

test('should exist', () => {
    // expect(reverseString).toBeDefined();
    expect(typeof reverseString).toEqual('function');
});

test('should string reverses', () => {
    expect(reverseString("Hello")).toEqual("olleh");
});