const functions = require('./functions')

//Do something each test
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

//Do something before and after all test
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialized..')
// const closeDatabase = () => console.log('Database Closed..')

//Do something before and after certain test
const checkingName = () => console.log("Checking name...")
describe('Checking Names', () => {
    beforeEach(() => checkingName());

    test('should equals Jeff', () => {
        expect("Jeff").toBe("Jeff");
    });

    test('should equals Karen', () => {
        expect("Karen").toBe("Karen");
    });
});

test('Adds 2 + 2 to Equal 4', () => {
    expect(functions.add(2, 2)).toBe(4)
})

test('Adds 2 + 2 to NOT Equal 5', () => {
    expect(functions.add(2,2)).not.toBe(5)
})

test('Should be null', () => {
    expect(functions.isNull()).toBeNull()
})

test('should be falsy', () => {
    expect(functions.checkValue(false)).toBeFalsy()
})

test('should be truthy', () => {
    expect(functions.checkValue(true)).toBeTruthy();
});

test('should be user object', () => {
    expect(functions.createUser()).toEqual({
        firstName: "Daffa",
        lastName: "Akbar"
    })
});

test('should be under 1600', () => {
    const load1 = 500
    const load2 = 800
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

test('should not contain I', () => {
    expect('team').not.toMatch(/I/i);
});

test('should contain user admin in users', () => {
    users = ["daffa", "admin", "akbar"]
    expect(users).toContain("admin");
});

// Promise
test('should be Leanne Graham user data', () => {
    expect.assertions(1)
    return functions.getUsers()
        .then(data => {
            expect(data.name).toEqual("Leanne Graham");
        })
});

// Async Await
test('should be Leanne Graham user data', async () => {
    expect.assertions(1)
    const data = await functions.getUsers()
    expect(data.name).toEqual("Leanne Graham")
});