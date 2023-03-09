import { getGifs } from '../../helpers/getGifts'


describe('Pruebas en getGifts()', () => {
  
    test('debe de retornar un arreglo de gits', async () => {
      
        const gifts = await getGifs(' THE Simpsons ');
        // console.log({gifts});

        expect( gifts.length ).toBeGreaterThan(0);
        expect(gifts[0]).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        });

    });
    
});
