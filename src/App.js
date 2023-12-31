import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [gfName, setGfName] = useState("");
  const [lovePercentage, setLovePercentage] = useState("");
  const [buttonText, setButtonText] = useState("Check Now");

  const calculatePercentage = () => {
    if (name && gfName) {
      setTimeout(() => {
        setButtonText("Checking .....");
      }, 100);
      setTimeout(() => {
        setButtonText("Checking Your Bondings .....");
      }, 1000);
      setTimeout(() => {
        setLovePercentage(Math.floor(Math.random() * 100) + 1);
      }, 1500);
    }
  };

  const [audioFile] = useState(new Audio("/assets/loveMashup.mp3"));
  
  useEffect(() => {
    if (lovePercentage > 50) {
      audioFile.play();
    } else if (lovePercentage === '') {
      audioFile.pause();
    }
  }, [lovePercentage, audioFile]);

  const resetAll = () => {
    setName("");
    setGfName("");
    setLovePercentage("");
    setButtonText("Check Now");
  };


  console.log('wdqw', audioFile)

  return (
    <div
      className={`pt-[70px] relative h-screen ${
        lovePercentage > 50
          ? `bg-cover bg-left bg-[url('https://plus.unsplash.com/premium_photo-1687131786508-740304b74a56?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJveSUyMHJvc2V8ZW58MHx8MHx8fDA%3D')]`
          : ""
      } ${(lovePercentage >= 50 || lovePercentage === '') ? 'bg-rose-200' : 'bg-black'}`}
    >
      {lovePercentage !== "" ? (
        <div className="flex flex-col px-5 justify-center items-center">
          <h1 className="flex text-center justify-center items-center text-xl mt-[50px] text-white">{`${name} and ${gfName} match is ${lovePercentage} % ${
            lovePercentage <= 50
              ? "🤕🥺😭🫣"
              : "Looks like Made for each other😗😘😏🥰"
          }`}</h1>
          <button
            onClick={() => resetAll()}
            className={`cursor-pointer ${(lovePercentage >= 50) ? 'bg-red-500 text-white' : 'bg-black text-gray-300'} absolute bottom-20 w-[300px] md:w-auto border rounded-xl p-2`}
            type="submit"
          >
            Back
          </button>
        </div>
      ) : (
        <div className="">
          <h1 className="text-center text-red-600 animate-pulse font-bolder text-3xl mb-3">
            ♥♥
          </h1>
          <h1 className="text-center px-5 text-3xl text-red-500 mb-10">
            Love Percentage Calculator
          </h1>
          <div className="flex flex-col md:flex-row justify-center px-5 gap-5 items-center">
            <input
              onChange={(e) => setName(e.target.value)}
              className="border rounded-3xl px-6 w-full md:w-auto py-3 border-red-300 focus:outline-none border border-red-300"
              placeholder="Enter your Name"
            />
            <input
              onChange={(e) => setGfName(e.target.value)}
              className="border rounded-3xl px-6 w-full md:w-auto py-3 border-red-300 focus:outline-none border border-red-300"
              placeholder="Enter Your Crush Name"
            />
          </div>
          <div className="flex justify-center px-5 items-center mt-8">
            <button
              disabled={name === "" || gfName === ""}
              onClick={() => calculatePercentage()}
              className={`${
                name === "" || gfName === "" ? "bg-gray-500" : "bg-red-500"
              } cursor-pointer w-full md:w-auto border rounded-xl p-2 text-white`}
              type="submit"
            >
              {buttonText}
            </button>
          </div>
        </div>
      )}
      {lovePercentage === '' ? <h1
        className={`w-full text-center animate-bounce relative top-[150px]`}
      >
        Developed by <span className="font-bold">Aman vyas</span> 👨‍💻
      </h1> : ''}
    </div>
  );
};

export default App;
