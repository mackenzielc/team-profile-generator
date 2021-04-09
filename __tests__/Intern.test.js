const Intern = require('../lib/Intern');


describe('Intern', () => {
    describe('Initization', () => {
        it('returns an object that is an instance of the object Intern class when called with the new keyword', () => {
            //call the constructor
            const intern = new Intern();
            //cheeck that the resulting object is an instance of the Employee class
            expect(intern instanceof Intern).toBeTruthy()
        })

        it('sets the school property based on constructor argument', () => {
            const school = 'McGill';
            const intern = new Intern("", 0, "", school);

            expect(intern.school).toBe(school);
        })

    })

    describe('getSchool', () => {
        it('returns school property when the getSchool() method is called', () => {
            const school = 'McGill';
            const intern = new Intern("", 0, "", school);

            expect(intern.getSchool()).toBe(school);
        });
    });

    describe('getRole', () => {
        it('returns intern when the getRole() method is called', () => {
            const intern = new Intern();

            expect(intern.getRole()).toBe('Intern');
        });
    });

});