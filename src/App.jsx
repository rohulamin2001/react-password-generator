// function Button({ onClick }) {
//   return (
//     <button
//       onClick={(e) => {
//         e.stopPropagation();
//         onClick();
//       }}
//     >
//       I am Button
//     </button>
//   );
// }
import { customAlphabet } from "nanoid";
import { useEffect, useState } from "react";
function Card() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789012345678901234567890123456789";
    const specialCharacter = "!@#$%^&*$%#!@#$%!@#$%^&*$%#!@#$%!@#$%^&*$%#!@#$%";
    if (number) {
      alphabet += numbers;
    }
    if (specialChar) {
      alphabet += specialCharacter;
    }
    const randomPass = customAlphabet(alphabet, length);
    setPassword(randomPass());
  }, [length, number, specialChar]);

  return (
    <div className="border-red-500 border mx-auto my-5 w-1/2 p-5">
      <h1 className="text-2xl text-center font-semibold tracking-wider">
        Password Generator
      </h1>
      <div className="flex pt-5">
        <input
          type="text"
          readOnly
          name="pass"
          id=""
          value={password}
          className="border border-gray-500 p-2 w-full focus:outline-none"
        />
        <button
          onClick={() => {
            window.navigator.clipboard.writeText(password);
          }}
          className="bg-blue-500 text-white py-2 px-5"
        >
          Copy
        </button>
      </div>
      <div className="pt-5">
        <div className="flex justify-between">
          {" "}
          <div className="flex justify-center gap-1">
            <input
              type="range"
              name=""
              value={length}
              max={100}
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length ({length})</label>
          </div>
          <div className="flex justify-center gap-1">
            {" "}
            <input
              onChange={() => setNumber(!number)}
              type="checkbox"
              id="number1"
            />{" "}
            <label htmlFor="number1" className="select-none">
              Number
            </label>
          </div>
          <div className="flex justify-center gap-1">
            {" "}
            <input
              type="checkbox"
              onChange={() => setSpecialChar(!specialChar)}
              id="char"
            />{" "}
            <label htmlFor="char" className="select-none">
              Character
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Card };
