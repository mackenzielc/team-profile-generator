const Manager = require('../lib/Manager');


describe('Manager', () => {
    describe('Initization', () => {
        it('returns an object that is an instance of the object Manager class when called with the new keyword', () => {
            //call the constructor
            const manager = new Manager();
            //cheeck that the resulting object is an instance of the Employee class
            expect(manager instanceof Manager).toBeTruthy()
        })

        it('sets the office number property based on constructor argument', () => {
            const officeNumber = '917-123-4567';
            const manager = new Manager("", 0, "", officeNumber);

            expect(manager.officeNumber).toBe(officeNumber);
        })

    })

    describe('getOfficeNumber', () => {
        it('returns office number property when the getOfficeNumber() method is called', () => {
            const officeNumber = '917-123-4567';
            const manager = new Manager("", 0, "", officeNumber);

            expect(manager.getOfficeNumber()).toBe(officeNumber);
        });
    });

    describe('getRole', () => {
        it('returns Manager when the getRole() method is called', () => {
            const manager = new Manager();

            expect(manager.getRole()).toBe('Manager');
        });
    });

});