import axios from "axios";
import { baseURL } from "./apis/api";
// import { useState } from "react";

function App() {
  // const [data, setdata] = useState([]);
  axios.get("https://626fe326c508beec488b9686.mockapi.io/sinhvien").then((res) => console.log(res.data));
  return (
    <div className="App">
      <table></table>
    </div>
  );
}

export default App;
