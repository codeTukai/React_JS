import React, { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./customHooks/useCurrencyinfo";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(null);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
  <div
    className="w-full min-h-screen flex items-center justify-center bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.pexels.com/photos/6765372/pexels-photo-6765372.jpeg')",
    }}
  >
    <div className="w-full max-w-md px-4">
      <div className="rounded-2xl p-6 bg-white/20 backdrop-blur-md shadow-2xl border border-white/30">

        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          className="space-y-4"
        >
          {/* FROM */}
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
          />

          {/* SWAP BUTTON */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={swap}
              className="bg-black text-white px-5 py-2 rounded-lg shadow-md hover:scale-105 transition"
            >
              Swap
            </button>
          </div>

          {/* TO */}
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable
          />

          {/* CONVERT BUTTON */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl text-lg font-semibold hover:scale-105 transition shadow-lg"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>

      </div>
    </div>
  </div>
);

}

export default App;
