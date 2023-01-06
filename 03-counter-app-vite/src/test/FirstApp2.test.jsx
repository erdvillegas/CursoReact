/** * @jest-environment jsdom */
import { render, screen } from '@testing-library/react';
import { FirstApp } from '../FirstApp';


describe('Pruebas en <FirstApp/>', () => {


    const title = 'Hola, soy el titulo!';
    const subTitle = 'Hola, soy el subTitle!';

    test('debe de hacer match con el snappshot', () => {

        const { container } = render(<FirstApp title={title} />);
        expect(container).toMatchSnapshot();

    });

    test('debe de mostrar el mensaje \'Hola, soy el titulo!\'', () => {

        render(<FirstApp title={title} />);
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('debe de mostrar el titulo en un h1', () => {
        render(<FirstApp title={title} />);
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain(title);
    });
    
    test('debe de mostrar el subtitulo envido por las props', () => {
        
        render(
            <FirstApp 
                title={ subTitle } 
                subtitle={ subTitle }
            />
        );
        
        expect(screen.getAllByText(subTitle).length).toBe(2);
        
    });
    

});