import axios from "axios";
import { baseURL } from "./apis/api";
// import { useState } from "react";

function App() {
  // const [data, setdata] = useState([]);
  axios.get("baseURL + "sinhvien"").then((res) => console.log(res.data));
  return (
    <div className="App">
      <table></table>
    </div>
  );
}

export default App;
