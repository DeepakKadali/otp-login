import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ChevronRight } from "lucide-react";

const OtpForm = ({ mobileNumber, length = 4, backToLogin, login }) => {
  const [showSubmit, setShowSubmit] = useState(false);
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRef = useRef(Array(length).fill(null));
  useEffect(() => {
    if (inputRef && inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);
  const handleKeyDown = (e, index) => {
    if (
      e.key === "Backspace" &&
      !e.target.value &&
      index > 0 &&
      inputRef.current[index - 1]
    ) {
      inputRef.current[index - 1].focus();
    }
  };
  const handleChange = (e, index) => {
    let value = e.target.value;
    if (isNaN(value)) return;

    setOtp((prevOtp) => {
      let newOtp = [...prevOtp];
      newOtp[index] = value.substring(value.length - 1);
      if (value && index < length - 1 && inputRef.current[index + 1]) {
        inputRef.current[index + 1].focus();
      }
      return newOtp;
    });
  };
  useEffect(() => {
    console.log(otp, "useeff");
  }, [otp]);
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <button onClick={backToLogin} className="absolute top-4 right-4 text-2xl">
        <ArrowLeft />
      </button>
      <h1 className="text-2xl font-semibold">{`Enter OTP sent to +91${mobileNumber}`}</h1>
      <div className="flex justify-center gap-6">
        {otp &&
          otp.map((item, index) => {
            return (
              <input
                key={index}
                ref={(input) => (inputRef.current[index] = input)}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="px-4 py-6 h-8 w-[50px] mt-10 rounded-md border-2 border-zinc-800 bg-[#16181F]"
                value={item}
              />
            );
          })}
      </div>
      <div className="min-h-[100px]">
        {otp.join("").length === length && (
          <button
            onClick={() => {
              login();
            }}
            className="mt-6 w-[300px] px-6 py-2 font-medium text-2xl bg-[#0853DB] rounded-md text-white flex flex-row justify-center items-center text-center gap-6"
          >
            {`Continue   `}
            <ChevronRight />
          </button>
        )}
      </div>
      <div>{`(This project was not configiured with any otp handling services , just for the sole purpose of frontend component development)`}</div>
    </div>
  );
};

export default OtpForm;
