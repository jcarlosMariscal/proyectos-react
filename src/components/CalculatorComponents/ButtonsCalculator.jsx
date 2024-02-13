import { ButtonCalculator } from "./ButtonCalculator";
import PropTypes from "prop-types";

export const ButtonsCalculator = ({
  reset,
  addValue,
  convertNumber,
  calculateTotal,
}) => {
  return (
    <>
      <div className="flex justify-between my-2 mt-4">
        <ButtonCalculator
          text="C"
          color="bg-gray-900 text-red-500"
          handleClick={reset}
        />
        <ButtonCalculator
          text="( )"
          color="bg-gray-900 text-green-500"
          handleClick={addValue}
        />
        <ButtonCalculator
          text="%"
          color="bg-gray-900 text-green-500"
          handleClick={addValue}
        />
        <ButtonCalculator
          text="/"
          color="bg-gray-900 text-green-500"
          handleClick={addValue}
        />
      </div>
      <div className="flex justify-between my-2">
        <ButtonCalculator text="7" color="bg-gray-900" handleClick={addValue} />
        <ButtonCalculator
          text="8"
          color="bg-gray-900 "
          handleClick={addValue}
        />
        <ButtonCalculator text="9" color="bg-gray-900" handleClick={addValue} />
        <ButtonCalculator
          text="*"
          color="bg-gray-900 text-green-500"
          handleClick={addValue}
        />
      </div>
      <div className="flex justify-between my-2">
        <ButtonCalculator
          text="4"
          color="bg-gray-900 "
          handleClick={addValue}
        />
        <ButtonCalculator text="5" color="bg-gray-900" handleClick={addValue} />
        <ButtonCalculator
          text="6"
          color="bg-gray-900 "
          handleClick={addValue}
        />
        <ButtonCalculator
          text="-"
          color="bg-gray-900 text-green-500"
          handleClick={addValue}
        />
      </div>
      <div className="flex justify-between my-2">
        <ButtonCalculator
          text="1"
          color="bg-gray-900 "
          handleClick={addValue}
        />
        <ButtonCalculator
          text="2"
          color="bg-gray-900 "
          handleClick={addValue}
        />
        <ButtonCalculator
          text="3"
          color="bg-gray-900 "
          handleClick={addValue}
        />
        <ButtonCalculator
          text="+"
          color="bg-gray-900 text-green-500"
          handleClick={addValue}
        />
      </div>
      <div className="flex justify-between my-2">
        <ButtonCalculator
          text="+/-"
          color="bg-gray-900 "
          handleClick={convertNumber}
        />
        <ButtonCalculator
          text="0"
          color="bg-gray-900 "
          handleClick={addValue}
        />
        <ButtonCalculator
          text="."
          color="bg-gray-900 "
          handleClick={addValue}
        />
        <ButtonCalculator
          text="="
          color="bg-gray-900 bg-green-500"
          handleClick={calculateTotal}
        />
      </div>
    </>
  );
};

ButtonsCalculator.propTypes = {
  reset: PropTypes.func.isRequired,
  addValue: PropTypes.func.isRequired,
  convertNumber: PropTypes.func.isRequired,
  calculateTotal: PropTypes.func.isRequired,
};
