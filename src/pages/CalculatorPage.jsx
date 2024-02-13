import { useState } from "react";
import { ButtonCalculator } from "../components/CalculatorComponents/ButtonCalculator";
import { ClockIcon, BackspaceIcon } from "@heroicons/react/24/outline";
import { evaluate } from "mathjs";
import { ButtonsCalculator } from "../components/CalculatorComponents/ButtonsCalculator";
import { HistoryCalculator } from "../components/CalculatorComponents/HistoryCalculator";
import { DisplayCalculator } from "../components/CalculatorComponents/DisplayCalculator";

export const CalculatorPage = () => {
  const [input, setInput] = useState("");
  const [lastClick, setLastClick] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const operators = ["+", "-", "*", "/", "%", "( )"];
  const addValue = (value) => {
    if (input === "" && operators.includes(value)) return;
    if (operators.includes(value)) setLastClick(value);

    setInput(input + value);
  };
  const convertNumber = () => {
    if (lastClick) {
      let match = input.match(/(\([-+/*]\d+\))|\w+/gm);
      let lastNumber = match[match.length - 1];
      let number = lastNumber.replace(/[()]/g, "");
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
    const total = evaluate(input);
    setHistory([...history, { operation: input, total }]);
    setInput(total);
  };
  const deleteChar = () => {
    setInput((prevData) => {
      const data = prevData;
      return data.slice(0, data.length - 1);
    });
  };
  return (
    <div className="bg-gray-900 w-full h-[90vh] flex items-center justify-center">
      <div className="container w-[25rem] bg-gray-950 text-gray-200 rounded-md py-4 px-10 relative">
        {showHistory && <HistoryCalculator history={history} />}
        <DisplayCalculator input={input} />
        <div className="flex justify-between mb-2 py-2 border-b border-gray-700">
          <ButtonCalculator
            text={
              <ClockIcon
                class={`size-6 ${
                  showHistory ? "text-green-500" : "text-gray-200"
                }`}
              />
            }
            handleClick={() => setShowHistory(!showHistory)}
          />
          <ButtonCalculator
            text={<BackspaceIcon class="size-6 text-gray-200" />}
            handleClick={deleteChar}
          />
        </div>
        <ButtonsCalculator
          reset={reset}
          addValue={addValue}
          convertNumber={convertNumber}
          calculateTotal={calculateTotal}
        />
      </div>
    </div>
  );
};
