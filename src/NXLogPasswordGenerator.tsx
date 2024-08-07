import React, { useState } from "react";
import { FiCopy } from "react-icons/fi";

interface OptionsState {
  lowercase: boolean;
  uppercase: boolean;
  numbers: boolean;
  symbols: boolean;
}

export const NXLogPasswordGenerator: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [passwordLength, setPasswordLength] = useState<number>(12);
  const [options, setOptions] = useState<OptionsState>({
    lowercase: true,
    uppercase: false,
    numbers: false,
    symbols: false,
  });

  const disableLastOption = (value: boolean) => {
    if (value) {
      const amountOfEnabledOptions = Object.values(options).reduce(
        (acc, key) => (acc += +key),
        0
      );
      return amountOfEnabledOptions === 1;
    }
    return false;
  };

  // Handle change in checkbox options
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setOptions((prevOptions) => ({
      ...prevOptions,
      [name]: checked,
    }));
  };

  // Generate a password based on selected options
  const generatePassword = (length = 10) => {
    const charset = {
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numbers: "0123456789",
      symbols: "!@#$%^&*()_+{}:\"<>?|[];',./`~",
    };

    const selectedOptionsKeys = Object.entries(options)
      .filter(([key, value]) => value)
      .map(([key]) => key);

    let newPassword = "";
    let t = 0;

    for (let i = 0; i < length; i++) {
      const validChars = charset[selectedOptionsKeys[t] as keyof typeof charset];
      newPassword += validChars[Math.floor(Math.random() * validChars.length)];
      t++;
      if (t % selectedOptionsKeys.length === 0) t = 0;
    }
    setPassword(newPassword);
  };

  // Copy password to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(
      () => {
        alert("Password copied to clipboard!");
      },
      (err) => {
        console.error("Could not copy password: ", err);
      }
    );
  };

  return (
    <div className="p-4 space-y-4 bg-gray-800 text-white rounded shadow-md">
      <div className="relative">
        <input
          type="text"
          className="w-full p-2 pr-10 border border-gray-300 rounded text-blue-500 min-w-[22rem]"
          value={password}
          readOnly
        />
        <FiCopy
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500 cursor-pointer"
          onClick={copyToClipboard}
        />
      </div>
      <small className="text-sm text-gray-300">
        Password Length: {passwordLength}
      </small>
      <input
        type="range"
        min="8"
        max="18"
        value={passwordLength}
        onChange={(e) => setPasswordLength(Number(e.target.value))}
        className="w-full"
      />
      <div>
        {Object.keys(options).map((option) => (
          <label
            key={option}
            className="flex items-center mb-2 text-md font-medium"
          >
            <input
              type="checkbox"
              name={option}
              disabled={disableLastOption(
                options[option as keyof OptionsState]
              )}
              checked={options[option as keyof OptionsState]}
              onChange={handleChange}
              className="mr-2"
            />
            Include {option.charAt(0).toUpperCase() + option.slice(1)}
          </label>
        ))}
      </div>
      <button
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        onClick={() => generatePassword(passwordLength)}
      >
        Generate
      </button>
    </div>
  );
};
