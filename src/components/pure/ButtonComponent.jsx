import PropTypes from "prop-types";
export const ButtonComponent = ({ text }) => {
  return (
    <button className="bg-gray-800 text-white p-2 rounded-custom hover:bg-gray-900">
      {text}
    </button>
  );
};
ButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
};
