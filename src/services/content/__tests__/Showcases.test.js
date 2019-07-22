import axios from 'axios';
import showcases from '../Showcases';

describe('Showcases', () => {
    beforeEach(() => {
        jest.spyOn(axios, 'get').mockImplementation(jest.fn);
    });

    it('should call axios', () => {
        showcases.getAll();
        expect(axios.get).toHavebeenCalled
    });
});