import PropTypes from "prop-types";
export const ButtonComponent = ({ text, color, size, handleClick }) => {
  return (
    <button
      className={`${color} p-1 rounded-full ${size} flex justify-center items-center btn-transition`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
ButtonComponent.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
