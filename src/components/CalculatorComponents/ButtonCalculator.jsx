import {} from "mathjs";
import PropTypes from "prop-types";

export const ButtonCalculator = ({ text, color, handleClick }) => {
  //   return isNaN(valor) && valor != "." && valor != "=";
  // };
  return (
    <button
      className={`rounded-full text-2xl ${color} size-14 hover:opacity-60 flex justify-center items-center`}
      onClick={() => handleClick(text)}
    >
      {/* {props.children} -| Podemos evitar mandar el prop de text y colocar el texto entre la definición del componente: <Compo>TEXTO</Compo>. De esta forma se obtiene mediante prop.children */}
      {text}
    </button>
  );
};

ButtonCalculator.propTypes = {
  props: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  // children: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  //
};
