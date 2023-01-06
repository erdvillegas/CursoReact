/** * @jest-environment jsdom */
import { render } from '@testing-library/react';
import { FirstApp } from '../FirstApp';


describe('Pruebas en <FirstApp/>', () => {
  
    // test('debe de hacer match con el snapshot', () => {
      
    //     const titulo = 'Hola Mundo';
    //     const { container } = render(<FirstApp title={ titulo }/>);
        
    //     expect(container).toMatchSnapshot();
    // });
    
    test('debe de mostrar el titulo en un h1', () => {
        
        const title = 'Hola Mundo';
        const { container, getByText, getByTestId } = render(<FirstApp title={ title }/>);
        
        expect( getByText(title) ).toBeTruthy();
        
        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain( title );
        
        expect( getByTestId('test-title').innerHTML).toContain(title);
    });
    
    test('debe de mostrar el subtitlo enviado por props', () => {
        
        const title = 'Hola Mundo';
        const subTitle = 'Soy un Subtitle';
        const {  getAllByText } = render(
        <FirstApp 
            title={ title }
            subtitle={ subTitle }
        />);
        

        expect(getAllByText(subTitle).length).toBe(1);
    });
});