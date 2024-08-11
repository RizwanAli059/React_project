import { useCallback, useState } from "react";
import "./App.css";

function App() {
  
const [length, setLength] = useState(8)
const [numberAllow, setNumberAllow] = useState(false)
const [charAllow, setCharAllow] = useState(false)
const [password, setPassword] =useState("")

const passGenerator = useCallback(()=>{

let pass = ""
let str = "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz"

if (numberAllow) str += "0123456789"
if (charAllow) str += "{[(/\?|@#$)]}"

for (let i = 1; i < array.length; i++) {
  let char = math.floor(math.random() * str.length + 1)
  
  pass = str.charAt(char)
}

setPassword(pass)
console.log(setPassword);


}

,[length, numberAllow, charAllow])

  return (
    <div>
      <h1 className="text-white text-center text-4xl font-serif mt-4">Password Generator</h1>
      <h2>Copy</h2>
    </div>
  );
}

export default App;
