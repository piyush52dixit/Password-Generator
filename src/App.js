import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import passGif from "./pass.gif";
import Output from "./components/Output";
import Button from "./components/Button";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copyToggle, setCopyToggle] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = " ";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*-`";
    }

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
    setCopyToggle(true);
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  const copyPassword = () => {
    setCopyToggle((prev) => !prev);

    passref.current?.select();
    passref.current?.setSelectionRange(0, 25);
    window.navigator.clipboard.writeText(password);
  };

  const passref = useRef(null);

  return (
    <>
      <div className="container">
        <div className="header">
          <h1> Random Password Generator</h1>
          <img src={passGif} alt="key-lock-gif" className="img" />
        </div>
        <Output
          password={password}
          passref={passref}
          copyPassword={copyPassword}
          copyToggle={copyToggle}
        />
        <Button
          {...{
            setLength,
            numAllowed,
            setNumAllowed,
            charAllowed,
            setCharAllowed,
            length,
          }}
        />
      </div>
    </>
  );
}

export default App;
