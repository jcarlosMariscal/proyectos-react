import PropTypes from "prop-types";
import { FeatureIconComponent } from "../pure/FeatureIconComponent";
import { ButtonComponent } from "../pure/ButtonComponent";

const sizeCard = (cardSize) => {
  if (cardSize === "sm") {
    return {
      textSize: "text-lg md:text-2xl",
      flex: "flew-row",
      imgSize: "w-[10rem] xl:w-[10rem]",
    };
  } else {
    return {
      textSize: "text-lg sm:text-xl xl:text-4xl",
      flex: "flex-row xl:flex-col",
      imgSize: "w-[15rem] xl:w-[20rem]",
    };
  }
};
// class="bg-gray-800 text-white p-2 rounded-custom hover:bg-gray-900 w-max"
// bg-gray-800 text-white p-2 rounded-custom hover:bg-gray-900 w-max
export const HomeCardComponent = ({
  customCSS,
  cardSize,
  image,
  title,
  description,
  icons,
}) => {
  const { textSize, flex, imgSize } = sizeCard(cardSize);
  console.log(icons);
  return (
    <div
      className={`text-black p-3 rounded-custom shadow-md absolute select-none shadow-slate-400/60 ${customCSS}`}
    >
      <div className="m-5">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <h2 className={`${textSize} font-bold`}>{title}</h2>
          {cardSize !== "sm" && <ButtonComponent text="Visite the Page" />}
        </div>
        {cardSize !== "sm" && (
          <p className="mt-5 text-justify">{description}</p>
        )}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-3">
          <div
            className={`flex flex-wrap mt-5 gap-3 ${flex} justify-center sm:justify-evenly`}
          >
            {icons.map((item, index) => (
              <FeatureIconComponent
                key={index}
                icon={item.icon}
                text={item.text}
                color={item.color}
                size={item.size}
              />
            ))}
          </div>
          <div className="hidden sm:flex items-center">
            <img
              src={`src/assets/img/${image}`}
              alt="Image 1"
              className={`${imgSize}`}
            />
          </div>
        </div>
        {cardSize === "sm" && (
          <div className="flex sm:hidden xl:flex flex-wrap items-center justify-between m-0">
            <p className="mt-5 text-justify">{description}</p>
            {/* <div className="w-1/4">
              <ButtonComponent text="Visite the Page" />
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};
HomeCardComponent.propTypes = {
  customCSS: PropTypes.string.isRequired,
  cardSize: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icons: PropTypes.array.isRequired,
};
