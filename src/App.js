import { useState } from "react";
function App() {
  const [email, setEmail]=useState(" ");
  return (
    <>
    <form>
     <input type="email" onChange={(e)=>{setEmail(e.target.value)}} />
      <h1>Email:{email}</h1>
      <button type="button" onClick={()=>{setEmail(" ")}}>clear now</button>
      </form>
    </>
    );
}

export default App;
