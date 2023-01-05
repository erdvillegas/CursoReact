/** * @jest-environment jsdom */
import { render } from '@testing-library/react';
import { FirstApp } from '../FirstApp';


describe('Pruebas en <FirstApp/>', () => {
  
    test('debe de hacer match con el snapshot', () => {
      
        const titulo = 'Hola Mundo';
        const { container } = render(<FirstApp title={ titulo }/>);
        
        expect(container).toMatchSnapshot();
    });
    
    test('debe de mostrar el titulo en un h1', () => {
        
        const titulo = 'Hola Mundo';
        const { container, getByText } = render(<FirstApp title={ titulo }/>);

        expect( getByText(titulo) ).toBeTruthy();

        const h1 = container.querySelector('h1').

    });
    
    
});
