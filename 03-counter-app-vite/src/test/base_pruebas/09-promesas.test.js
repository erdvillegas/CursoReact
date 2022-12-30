import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas.js";


describe('Pruebas en 09-promesas', () => {

    test('geteHeroeByIdAsync debe de retornar un héroe', (done) => {

        const id = 1;
        getHeroeByIdAsync(id).then(hero => {

            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
            done();

        });

    });

    test('geteHeroeByIdAsync debe de obtener un error si heroe no existe', (done) => {

        const id = 100;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect( hero ).toBeFalsy();
                done();
            })
            .catch(error => {
                expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
                done();

            });

    });

});
