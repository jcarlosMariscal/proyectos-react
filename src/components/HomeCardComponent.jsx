import PropTypes from "prop-types";
import {
  RocketLaunchIcon,
  GlobeAltIcon,
  BuildingStorefrontIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/solid";
import { FeatureIconComponent } from "./pure/FeatureIconComponent";
import { ButtonComponent } from "./pure/ButtonComponent";

export const HomeCardComponent = ({ customCSS, cardSize, image }) => {
  return (
    <div
      className={`text-black p-3 rounded-custom shadow-md absolute select-none shadow-slate-400/60 ${customCSS}`}
    >
      <div className="m-5">
        <div className="flex justify-between items-center">
          <h2
            className={`${
              cardSize === "sm" ? "text-xl" : "text-4xl"
            } font-bold`}
          >
            Lorem ipsum dolor sit.
          </h2>
          {cardSize !== "sm" && <ButtonComponent text="Visite the Page" />}
        </div>
        {cardSize !== "sm" && (
          <p className={`mt-5`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            officiis praesentium maiores eos cupiditate sed.
          </p>
        )}
        <div className="flex justify-between">
          <div
            className={`flex  flex-wrap mt-5 gap-3 ${
              cardSize === "sm" ? "flew-row" : "flex-col"
            }`}
          >
            <FeatureIconComponent
              icon={
                <RocketLaunchIcon
                  className={`h-6 w-6 ${
                    cardSize === "sm" ? " text-blue-600" : " text-green-600"
                  }`}
                />
              }
              text={`${cardSize === "sm" ? "" : "Lorem ipsum dolor sit amet."}`}
              cardSize={cardSize}
            />
            <FeatureIconComponent
              icon={
                <GlobeAltIcon
                  className={`h-6 w-6 ${
                    cardSize === "sm" ? " text-blue-600" : " text-green-600"
                  }`}
                />
              }
              text={`${cardSize === "sm" ? "" : "Lorem ipsum dolor sit amet."}`}
              cardSize={cardSize}
            />
            <FeatureIconComponent
              icon={
                <BuildingStorefrontIcon
                  className={`h-6 w-6 ${
                    cardSize === "sm" ? " text-blue-600" : " text-green-600"
                  }`}
                />
              }
              text={`${cardSize === "sm" ? "" : "Lorem ipsum dolor sit amet."}`}
              cardSize={cardSize}
            />
            <FeatureIconComponent
              icon={
                <DevicePhoneMobileIcon
                  className={`h-6 w-6 ${
                    cardSize === "sm" ? " text-blue-600" : " text-green-600"
                  }`}
                />
              }
              text={`${cardSize === "sm" ? "" : "Lorem ipsum dolor sit amet."}`}
              cardSize={cardSize}
            />
          </div>
          <div className="flex items-center">
            <img
              src={`src/assets/img/${image}`}
              alt="Image 1"
              className={`${
                cardSize === "sm" ? "xl:w-[10rem]" : "xl:w-[20rem]"
              }`}
            />
          </div>
        </div>
        {cardSize === "sm" && (
          <div className="flex flex-wrap items-center justify-between m-0">
            <p className={`mt-5 w-3/4`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
              officiis praesentium maiores eos cupiditate sed.
            </p>
            <div className="w-1/4">
              <ButtonComponent text="Visite the Page" />
            </div>
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
  // color: PropTypes.isRequired,
  // shadow: PropTypes.isRequired,
};
