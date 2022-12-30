import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";



describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe retornar un héroe por ID', () => {

        const id = 1;
        const heroe = getHeroeById(id);
        console.log({ heroe });

        expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    });

    test('getHeroeById debe de retornar undefined si no existe', () => {

        const id = 100;
        const heroe = getHeroeById(id);

        expect(heroe).toBeFalsy();
    });

    test('getHereoByOwner debe retornar un arreglo con los héroes de DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' },
        ]);
    });

    test('getHereoByOwner debe retornar un arreglo con los héroes de Marvel', () => {

        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);
        expect(heroe.length).toBe(2);
    });

});
