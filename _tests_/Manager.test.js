const Manager = require('../lib/Manager.js');

test('creates manager object', () => {
    const manager = new Manager('Caleb', '9943', 'caleb@email.com', '03');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
});