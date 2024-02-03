import React from "react";
import { useState, useRef } from "react";
import OtpForm from "./OtpForm";
import { X, ChevronRight } from "lucide-react";

const LoginForm = ({ closeForm, login }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otpFormShow, setOtpFormShow] = useState(false);
  const modalRef = useRef(null);
  const handleNumberChange = (e) => {
    let regex = /[0-9]*$/g;
    let value = e.target.value;
    if (isNaN(value)) return;
    console.log(value, regex.test(value));
    if (value == "" || regex.test(value)) {
      setMobileNumber(value);
    }
  };
  const handleClick = (e) => {
    if (e.target === modalRef.current) {
      closeForm();
    }
  };
  return (
    <div
      className="h-screen fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col items-center justify-center"
      ref={modalRef}
      onClick={(e) => handleClick(e)}
    >
      <div className="bg-[#16181F] relative py-10 px-20 rounded-xl text-white  min-h-[400px] max-h-[400px] min-w-[700px] max-w-[700px]">
        {!otpFormShow ? (
          <div className="flex flex-col items-center gap-6">
            <button
              onClick={closeForm}
              className="absolute top-4 right-4 text-2xl"
            >
              <X />
            </button>
            <h1 className="text-4xl font-semibold">
              Login or Sign up to continue
            </h1>
            <div className="flex justify-center gap-6">
              <input
                className="w-[75px] px-4 py-6 h-8 mt-10 rounded-md border-2 border-zinc-800 bg-[#16181F]"
                placeholder="+91"
                disabled
              />
              <input
                className="px-4 py-6 h-8 mt-10 rounded-md border-2 border-zinc-800 bg-[#16181F] text-md"
                placeholder="Enter Mobile Number"
                value={mobileNumber}
                onChange={(e) => handleNumberChange(e)}
                maxLength={10}
              />
            </div>
            {mobileNumber.length === 10 && (
              <button
                onClick={() => setOtpFormShow(true)}
                className="mt-6 w-[300px] px-6 py-2 font-medium text-2xl bg-[#0853DB] rounded-md text-white flex flex-row justify-center items-center text-center gap-6"
              >
                {`Get OTP   `}
                <ChevronRight />
              </button>
            )}
          </div>
        ) : (
          <OtpForm
            mobileNumber={mobileNumber}
            length={4}
            backToLogin={() => setOtpFormShow(false)}
            login={login}
          />
        )}
      </div>
    </div>
  );
};

export default LoginForm;
