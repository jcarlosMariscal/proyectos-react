import PropTypes from "prop-types";
export const FeatureIconComponent = ({ icon, text, color, size }) => (
  <div className="flex items-center gap-2">
    <div
      className={`w-10 h-10 shadow-lg flex justify-center items-center ${color} ${size} `}
    >
      {icon}
    </div>
    {text !== "" && <p className="hidden xl:block">{text}</p>}
  </div>
);
FeatureIconComponent.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
