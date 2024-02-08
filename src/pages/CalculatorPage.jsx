import { useState } from "react";
import { ButtonCalculator } from "../components/CalculatorComponents/ButtonCalculator";
import { ClockIcon, BackspaceIcon } from "@heroicons/react/24/outline";
import { evaluate } from "mathjs";

export const CalculatorPage = () => {
  const [input, setInput] = useState("");
  // const [total, setTotal] = useState(0);
  const addValue = (value) => {
    let es = value;
    if (es == "*") es = "X";
    setInput(input + value);
  };
  const reset = () => {
    if (!input) return;
    setInput("");
    // setTotal("");
    // setTotal(0);
  };
  const calculateTotal = () => {
    if (!input) return;
    setInput(evaluate(input));
  };
  return (
    <div className="bg-gray-900 w-full h-[90vh] flex items-center justify-center">
      <div className="container w-[25rem] bg-gray-950 text-gray-200 rounded-md py-4 px-10">
        <div className="w-full">
          {/* <div className="h-6">
            <p className="text-gray-400 text-sm text-right">{input}</p>
          </div> */}
          <form className="w-full">
            <input
              type="text"
              className="outline-none bg-transparent w-full h-14 text-2xl text-right"
              value={input}
              autoFocus
            />
          </form>
        </div>
        <div className="flex justify-between px-4 mb-2 py-2 border-b border-gray-700">
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
            handleClick={addValue}
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
