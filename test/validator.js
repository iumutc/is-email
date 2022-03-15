import assert from 'assert';
import validator from '../src/scripts/validator';
describe('validator', () => {

    describe('isPdf()', () =>{

        it('should return false for nonPdf file names', function () {
            assert.equal(validator.isPdf('deneme.txt'), false)
            assert.equal(validator.isPdf('deneme.jpg'), false)
            assert.equal(validator.isPdf('deneme.mobi'), false)
            assert.equal(validator.isPdf('deneme.json'), false)
            assert.equal(validator.isPdf('deneme.docx'), false)
            assert.equal(validator.isPdf('deneme'), false)
            assert.equal(validator.isPdf('onur.*pdf'), false)
            assert.equal(validator.isPdf('o nur . pdf'), false)
            assert.equal(validator.isPdf('o nur . pdf'), false)
            assert.equal(validator.isPdf('onur.pdfx'), false)
            assert.equal(validator.isPdf('abc.p d f'), false)
        });

        it('should return true for pdf file names', function () {
            assert.equal(validator.isPdf('dergi.pdf'), true)
            assert.equal(validator.isPdf('dergi(1).pdf'), true)
            assert.equal(validator.isPdf('on ur.pdf'), true)
            assert.equal(validator.isPdf('team_work.pdf'), true)
            assert.equal(validator.isPdf('team 1234 @5.pdf'), true)
            assert.equal(validator.isPdf('Monzo_bank_statement_2019_09_04-2021_08_22_6822.pdf'), true)
            assert.equal(validator.isPdf('onur.PDF'), true)

        });
    })

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