import { useState } from "react";
import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";
import "./App.css";

function App() {
  const [isShowingLoginForm, setIsShowingLoginForm] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      {loggedIn ? (
        <HomePage />
      ) : (
        <div className="h-screen p-10 flex flex-col items-end bg-[#0F0F14]">
          <button
            className="px-6 py-2 font-bold text-2xl bg-[#0853DB] rounded-md text-white"
            onClick={() => setIsShowingLoginForm(true)}
          >
            Login
          </button>
          {isShowingLoginForm && (
            <LoginForm
              closeForm={() => setIsShowingLoginForm(false)}
              login={() => setLoggedIn(true)}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
