import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Adhar = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const fetchData = async (input) => {
    if (input.trim() === "" || input.length < 12) {
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

    const options = {
      method: "POST",
      url: "https://api.apyhub.com/validate/aadhaar",
      headers: {
        "apy-token":
          "APY0ZKwhdYXKCAZabBup4HDG1hqHrYohrGRdG5AEiB4CrBI4h5NknHXg333lbXATa6hWIV",
        "Content-Type": "application/json",
      },
      data: { aadhaar: input },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.data);
      setResult(response.data.data);
      if (response.data.data === true) {
        toast.success("Aadhaar is verified 😊", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else if (response.daata.data === false) {
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
    fetchData(input);
    setInput("");
  };

  return (
    <div>
      <div className="mt-20 flex flex-col justify-center items-center">
        <img className="mb-3" src="https://imgs.search.brave.com/yZ6dcrM3ZwgoMtXnljj-rfpCFf3V01-5h8zO4xykrno/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91aWRh/aS5nb3YuaW4vaW1h/Z2VzL2xhbmdQYWdl/L1BhZ2UtMS5zdmc.svg" alt="" />
        <p className="text-3xl font-extrabold text-yellow-500">
          Verify your Adhaar
        </p>
        <form onSubmit={submitHandler} className="flex flex-col md:flex-row space-x-3 w-8/12 md:w-6/12">
          <input
            onChange={changeHandler}
            value={input}
            className="bg-[#202123] rounded-3xl text-white px-4 py-4 w-12/12 md:w-11/12 my-8"
            type="text"
            placeholder="Enter Your Adhaar number"

          />
          <button onClick={submitHandler} className="self-center w-20">
            <span className="material-symbols-rounded bg-yellow-500 px-5 py-4 rounded-xl text-whitefont-xl font-bold">
              search
            </span>
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Adhar;
