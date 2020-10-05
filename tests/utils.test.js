import { validateFormat } from '../modules/utils';

describe('tests validateFormat function:', ()=> {
    test('calling validateFormat with no argument should return false', ()=>{
        let res = validateFormat();
        expect(res).toBeFalsy();
    });
});