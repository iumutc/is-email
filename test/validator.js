import assert from 'assert';
import validator from '../src/scripts/validator';
describe('validator', () => {

    describe('#isEmail()', () => {

        it('should return false for invail email adresses', ()=> {

            assert.equal(validator.isEmail('random'), false)
            assert.equal(validator.isEmail('falan'), false)
            assert.equal(validator.isEmail('1234@asdasd1321'), false)
        });

        it('should return true for vail email adresses', ()=> {

            assert.equal(validator.isEmail('olga@gmail.com'), true)
            assert.equal(validator.isEmail('helga@gmail.com'), true)
            assert.equal(validator.isEmail('1234@example.com'), true)
            assert.equal(validator.isEmail('onur@superonline.net'), true)

        });


    });
});