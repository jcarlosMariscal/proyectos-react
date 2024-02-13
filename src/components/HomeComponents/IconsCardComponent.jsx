import { sizeCard } from "../../data/homeCards";
import { FeatureIconComponent } from "../pure/FeatureIconComponent";
import { PropTypes } from "prop-types";

export const IconsCardComponent = ({ icons, image, cardSize }) => {
  const { flex, imgSize } = sizeCard(cardSize);
  return (
    <div className="flex flex-col xl:flex-row items-center justify-between gap-3">
      <div
        className={`flex flex-wrap mt-5 gap-3 ${flex} justify-center sm:justify-evenly`}
      >
        {icons.map((item, index) => (
          <FeatureIconComponent key={index} item={item} />
        ))}
      </div>
      <div className="hidden sm:flex items-center">
        <img src={`image/${image}`} alt="Image 1" className={`${imgSize}`} />
      </div>
    </div>
  );
};

IconsCardComponent.propTypes = {
  icons: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  cardSize: PropTypes.string.isRequired,
};
