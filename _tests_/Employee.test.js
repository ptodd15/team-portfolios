const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
    const employee = new Employee('Dave', '1', 'dave@email.com');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('dave@email.com');
});
