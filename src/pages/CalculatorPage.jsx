import { useState } from "react";
import { ButtonCalculator } from "../components/CalculatorComponents/ButtonCalculator";
import { ClockIcon, BackspaceIcon } from "@heroicons/react/24/outline";
import { evaluate } from "mathjs";

export const CalculatorPage = () => {
  const [input, setInput] = useState("");
  const [lastClick, setLastClick] = useState("");
  // const [total, setTotal] = useState(0);
  const addValue = (value) => {
    if (input == "") {
      if (
        value == "/" ||
        value == "*" ||
        value == "-" ||
        value == "+" ||
        value == "%" ||
        value == "( )"
      ) {
        return;
      }
    }
    if (
      value == "/" ||
      value == "*" ||
      value == "-" ||
      value == "+" ||
      value == "%" ||
      value == "( )"
    ) {
      setLastClick(value);
    }
    setInput(input + value);
  };
  const convertNumber = () => {
    if (lastClick) {
      let match = input.match(/(\([-+/*]\d+\))|\w+/gm);
      // let match = input.match(/([-+/*]\d+(\.\d+)?|\d+(\.\d+)?)/g);
      let lastNumber = match[match.length - 1];
      let number = lastNumber.replace(/[()]/g, "");
      // number = number.startsWith("+")
      //   ? parseFloat(number.slice(1))
      //   : parseFloat(number);
      setInput((prevData) => {
        let data = prevData;
        const cutNumber = data.slice(0, -lastNumber.length);
        data = cutNumber;
        let concatNumber = number < 0 ? `${Math.abs(number)}` : `(-${number})`;
        return data + concatNumber;
      });
    }
  };
  const reset = () => {
    if (!input) return;
    setInput("");
  };
  const calculateTotal = () => {
    if (!input) return;
    setInput(evaluate(input));
  };
  return (
    <div className="bg-gray-900 w-full h-[90vh] flex items-center justify-center">
      <div className="container w-[25rem] bg-gray-950 text-gray-200 rounded-md py-4 px-10">
        <div className="w-full">
          <form className="w-full">
            <input
              type="text"
              className="outline-none bg-transparent w-full h-14 text-2xl text-right"
              value={input}
              autoFocus
            />
          </form>
        </div>
        {lastClick}
        <div className="flex justify-between mb-2 py-2 border-b border-gray-700">
          <ButtonCalculator text={<ClockIcon class="size-6 text-gray-200" />} />
          <ButtonCalculator
            text={<BackspaceIcon class="size-6 text-gray-200" />}
          />
        </div>
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
          <ButtonCalculator
            text="7"
            color="bg-gray-900"
            handleClick={addValue}
          />
          <ButtonCalculator
            text="8"
            color="bg-gray-900 "
            handleClick={addValue}
          />
          <ButtonCalculator
            text="9"
            color="bg-gray-900"
            handleClick={addValue}
          />
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
          <ButtonCalculator
            text="5"
            color="bg-gray-900"
            handleClick={addValue}
          />
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
      </div>
    </div>
  );
};
