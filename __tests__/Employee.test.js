const Employee = require('../lib/Employee');


describe('Employee', () => {
    describe('Initization', () => {
        it('returns an object that is an instance of the object Employee class when called with the new keyword', () => {
            //call the constructor
            const employee = new Employee();
            //cheeck that the resulting object is an instance of the Employee class
            expect(employee instanceof Employee).toBeTruthy()
        })

        it('sets the name property based on constructor argument', () => {
            const name = 'Mackenzie';
            const employee = new Employee(name);

            expect(employee.name).toBe(name);
        })

        it('sets the id property based on constructor argument', () => {
            const id = 1;
            const employee = new Employee("", id);

            expect(employee.id).toBe(id);
        })

        it('sets the id property based on constructor argument', () => {
            const email = 'test@gmail.com';
            const employee = new Employee("", 0, email);

            expect(employee.email).toBe(email);
        })

    })

    describe('getName', () => {
        it('returns name property when the getName() method is called', () => {
            const name = 'John';
            const employee = new Employee(name);

            expect(employee.getName()).toBe(name);
        })
    })

    describe('getId', () => {
        it('returns Id property when the getID() method is called', () => {
            const id = 1;
            const employee = new Employee("", id);

            expect(employee.getId()).toBe(id);
        });
    });

    describe('getEmail', () => {
        it('returns email property when the getEmail() method is called', () => {
            const email = 1;
            const employee = new Employee("", 0, email);

            expect(employee.getEmail()).toBe(email);
        });
    });

    describe('getRole', () => {
        it('returns Employee when the getEmployee() method is called', () => {
            const employee = new Employee();

            expect(employee.getRole()).toBe('Employee');
        });
    });

});