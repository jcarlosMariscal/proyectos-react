import PropTypes from "prop-types";
export const FeatureIconComponent = ({ icon, text, cardSize }) => (
  <div className="flex items-center gap-2">
    <div
      className={`w-10 h-10 shadow-lg flex justify-center items-center ${
        cardSize === "sm"
          ? "rounded-lg bg-blue-300 shadow-blue-300/50 h-[3rem]"
          : "rounded-full bg-green-300 shadow-green-300/50"
      }`}
    >
      {icon}
    </div>
    <p>{text}</p>
  </div>
);
FeatureIconComponent.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  cardSize: PropTypes.string.isRequired,
};
