import PropTypes from "prop-types";
export const FeatureIconComponent = ({ item }) => {
  const { icon, text, color, size } = item;
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-10 h-10 shadow-lg flex justify-center items-center ${color} ${size} `}
      >
        {icon}
      </div>
      {text !== "" && <p className="hidden xl:block">{text}</p>}
    </div>
  );
};
FeatureIconComponent.propTypes = {
  item: PropTypes.object.isRequired,
};
