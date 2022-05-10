import axios from "axios";
import { useState } from "react";
import baseURL from "./apis/api";
function App() {
  const [data, setdata] = useState();
  if (!data?.[0]) {
    axios.get(baseURL).then((res) => {
      console.log(res);
    });
  }
  return (
    <div className="App">
      <table></table>
    </div>
  );
}

export default App;
