import PropTypes from "prop-types";
import { CursorArrowRippleIcon } from "@heroicons/react/24/solid";

import { ButtonComponent } from "../pure/ButtonComponent";
import { IconsCardComponent } from "./IconsCardComponent";
import { getColorBtn, sizeCard } from "../../data/homeCards";
export const HomeCardComponent = ({
  customCSS,
  cardSize,
  data,
  icons,
  changeCard,
  orderCardCSS,
}) => {
  const { image, title, description } = data;
  const { textSize } = sizeCard(cardSize);
  const { zIndex, cardBg, cardUp } = orderCardCSS;
  const pDesc = <p className="mt-3 text-justify">{description}</p>;
  return (
    <div
      className={`text-black p-3 rounded-custom sm:absolute shadow-gray-400/100 ${customCSS} ${zIndex} ${cardBg} transition-colors duration-500 ease-out`}
    >
      <div className="m-5">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <h2 className={`${textSize} font-bold`}>{title}</h2>
          {cardSize !== "sm" && (
            <ButtonComponent
              text="Visite the Page"
              color="bg-gray-700 hover:bg-gray-950 text-white"
              size="px-3 h-8 sm:w-max"
            />
          )}
        </div>
        {cardSize !== "sm" && pDesc}
        <IconsCardComponent icons={icons} image={image} cardSize={cardSize} />
        {cardSize === "sm" && (
          <div className="flex sm:hidden xl:flex flex-wrap items-center justify-between">
            {pDesc}
          </div>
        )}
      </div>
      <div className="hidden md:block absolute sm:bottom-4 sm:left-0">
        <ButtonComponent
          text={<CursorArrowRippleIcon className="h-6 w-6" />}
          color={getColorBtn(cardUp)}
          size="size-10"
          handleClick={changeCard}
        />
      </div>
    </div>
  );
};
HomeCardComponent.propTypes = {
  customCSS: PropTypes.string.isRequired,
  cardSize: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  icons: PropTypes.array.isRequired,
  changeCard: PropTypes.func.isRequired,
  orderCardCSS: PropTypes.object.isRequired,
};
