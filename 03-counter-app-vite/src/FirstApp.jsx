import PropTypes from 'prop-types';


const getResult = () => 4 + 4;

const newMesagge = {
  message: 'hola Mundo',
  nombre: 'Erik'
};


export const FirstApp = ( { title, subtitle, name } ) => {

  return (
    <>
      <h1 data-testid = "test-title"> { title }</h1>
      <p>{ subtitle }</p>
      <p>{ name }</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

FirstApp.defaultProps = {
  name: 'Erik Villegas',
  subtitle: 'no hay subtitulo u'
}