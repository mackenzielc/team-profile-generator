const Engineer = require('../lib/Engineer');


describe('Engineer', () => {
    describe('Initization', () => {
        it('returns an object that is an instance of the object Engineer class when called with the new keyword', () => {
            //call the constructor
            const engineer = new Engineer();
            //cheeck that the resulting object is an instance of the Employee class
            expect(engineer instanceof Engineer).toBeTruthy()
        })

        it('sets the github property based on constructor argument', () => {
            const github = 'mackenzielc';
            const engineer = new Engineer("", 0, "", github);

            expect(engineer.github).toBe(github);
        })

    })

    describe('getGithub', () => {
        it('returns github property when the getGithub() method is called', () => {
            const github = 'mackenzielc';
            const engineer = new Engineer("", 0, "", github);

            expect(engineer.getGithub()).toBe(github);
        });
    });

    describe('getRole', () => {
        it('returns Engineer when the getRole() method is called', () => {
            const engineer = new Engineer();

            expect(engineer.getRole()).toBe('Engineer');
        });
    });

});