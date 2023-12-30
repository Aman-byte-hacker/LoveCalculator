import { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [gfName, setGfName] = useState("");
  const [lovePercentage, setLovePercentage] = useState("");

  const calculatePercentage = () => {
    if (name && gfName) {
      setLovePercentage(Math.floor(Math.random() * 100) + 1);
    }
  };

  return (
    <div className="mt-[100px]">
      {lovePercentage !== "" ? (
        <>
        <h1 className="flex text-center justify-center px-5 items-center text-3xl mt-[100px] text-red-500">{`${name} and ${gfName} match is ${lovePercentage} % ${
          lovePercentage <= 50 ? "🤕🥺😭🫣" : "😗😘😏🥰"
        }`}</h1>
        </>
      ) : (
        <div className="">
          <h1 className="text-center text-3xl text-red-500 mb-10">
            Love Percentage Calculator
          </h1>
          <div className="flex flex-col md:flex-row justify-center px-5 gap-5 items-center">
            <input
              onChange={(e) => setName(e.target.value)}
              className="border rounded-3xl px-6 w-full md:w-auto py-3 border-red-300"
              placeholder="Enter your Name"
            />
            <input
              onChange={(e) => setGfName(e.target.value)}
              className="border rounded-3xl px-6 w-full md:w-auto py-3 border-red-300"
              placeholder="Enter Your Gf Name"
            />
          </div>
          <div className="flex justify-center px-5 items-center mt-8">
            <button
              disabled={name === '' || gfName === ''}
              onClick={() => calculatePercentage()}
              className={`${(name === '' || gfName === '') ? 'bg-gray-500' : 'bg-red-500'} cursor-pointer w-full md:w-auto border rounded-xl p-2 text-white`}
              type="submit"
            >
              Check Now
            </button>
          </div>
        </div>
      )}
      <h1 className="w-full text-center relative top-[200px]">Developed by <span className="font-bold">Aman vyas</span> 👨‍💻</h1>
    </div>
  );
};

export default App;
