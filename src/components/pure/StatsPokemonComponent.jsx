import { resetString } from "../../helpers/resetString";
import PropTypes from "prop-types";

export const StatsPokemonComponent = ({ name, color, base_stat }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-5">
      <div className="w-auto md:w-40">
        <p className="font-bold">{resetString(name)}</p>
      </div>
      <div
        className="w-full bg-gray-200 rounded-full h-7 my-3 relative flex items-center"
        style={{
          background: `${color.primary}`,
        }}
        title={`${base_stat} / 255`}
      >
        <span className="absolute right-0 text-white px-3 text-sm font-bold">
          {((base_stat / 255) * 100).toFixed(1)}%
        </span>
        <div
          className="h-7 rounded-full"
          style={{
            width: `${(base_stat / 255) * 100}%`,
            background: `${color.secondary}`,
          }}
        ></div>
      </div>
    </div>
  );
};

StatsPokemonComponent.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.object.isRequired,
  base_stat: PropTypes.number.isRequired,
};
