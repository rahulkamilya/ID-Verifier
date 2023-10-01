import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import apyHubAxios from "../api/apyHubAxios";

const Adhar = () => {
  const [formattedInput, setFormattedInput] = useState("");
  const [input, setinput] = useState("");

  const handleDisplayInputChange = (event) => {
    const inputValue = event.target.value;
    // Remove any non-numeric characters
    const cleanValue = inputValue.replace(/\D/g, "");

    let formattedValue = "";
    for (let i = 0; i < cleanValue.length; i++) {
      formattedValue += cleanValue[i];
      if ((i + 1) % 4 === 0 && i + 1 !== cleanValue.length) {
        formattedValue += " ";
      }
    }

    setFormattedInput(formattedValue);
    setinput(cleanValue);
  };

  const [result, setResult] = useState("");

  const fetchData = async (input) => {
    if (input.trim() === "" || input.length < 12 || input.length > 12) {
      toast.error("Please recheck your Aadhaar number 😢", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setResult("Invalid Aadhaar Number");
      return;
    }

    try {
      // Call the api using custom apyHubAxios instance
      const response = await apyHubAxios.post("/validate/aadhaar", {
        aadhaar: input,
      });
      // console.log(response);
      setResult(response.data.data);
      if (response.data.data === true) {
        toast.success("Aadhaar number exist 😊", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else if (response.data.data === false) {
        toast.error("Aadhaar doesn't exist 😢", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while verifying Aadhaar 😢", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setResult("Invalid Aadhaar Number");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) return;
    fetchData(input);
    setinput("");
  };

  return (
    <div>
      <div className="mt-20 flex flex-col justify-center items-center">
        <img
          className="mb-3"
          src="https://imgs.search.brave.com/yZ6dcrM3ZwgoMtXnljj-rfpCFf3V01-5h8zO4xykrno/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91aWRh/aS5nb3YuaW4vaW1h/Z2VzL2xhbmdQYWdl/L1BhZ2UtMS5zdmc.svg"
          alt=""
        />
        <p className="text-3xl font-extrabold text-yellow-500">
          Verify Your Aadhaar ID
        </p>
        <form
          onSubmit={submitHandler}
          className="flex flex-col md:flex-row space-x-3 w-8/12 md:w-6/12"
        >
          <input
            onChange={(e) => setinput(e.target.value)}
            value={input}
            className="hidden"
            type="number"
            placeholder="XXXX-XXXX-XXXX"
            maxLength={14}
          />
          <input
            onChange={handleDisplayInputChange}
            value={formattedInput}
            className="bg-[#202123] rounded-3xl text-white px-4 py-4 w-12/12 md:w-11/12 my-8"
            type="text"
            placeholder="XXXX-XXXX-XXXX"
            maxLength={14}
          />
          <button onClick={submitHandler} className="self-center w-20">
            <span
              className={`material-symbols-rounded bg-yellow-500 px-5 py-4 rounded-3xl text-whitefont-xl font-bold ${
                !input && "opacity-50 cursor-auto"
              }`}
            >
              Search
            </span>
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Adhar;
