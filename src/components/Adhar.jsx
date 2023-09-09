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
        "apy-token": import.meta.env.VITE_REACT_APP_API_KEY, 
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

  const submitHandler = () => {
    fetchData(input);
    setInput("");
  };

  return (
    <div>
      <div className="mt-20 flex flex-col justify-center items-center">
        <p className="text-3xl font-extrabold text-yellow-500">
          Verify your Adhaar
        </p>
        <div className="flex flex-col md:flex-row space-x-3 w-6/12">
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
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Adhar;
