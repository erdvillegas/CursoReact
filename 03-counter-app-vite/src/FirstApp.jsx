import PropTypes from 'prop-types';


const getResult = () => 4 + 4;

const newMesagge = {
  message: 'hola Mundo',
  nombre: 'Erik'
};


export const FirstApp = ( {title, subtitle} ) => {

  return (
    <>
      <h1>{title}</h1>
      <p>{ subtitle}</p>
    </>
  )
}

FirstApp.prototype = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}
