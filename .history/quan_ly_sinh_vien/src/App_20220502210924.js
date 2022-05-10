import axios from "axios";
import { useState } from "react";
import baseURL from "./apis/api";
function App() {
  // const [data, setdata] = useState([]);
  axios.get(baseURL).then((res) => console.log(res.data));
  return (
    <div className="App">
      <table></table>
    </div>
  );
}

export default App;
