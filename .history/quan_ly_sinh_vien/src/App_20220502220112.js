import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const sinhvien = useSelector((state) => state.sinhvien.data);
  console.log(sinhvien);
  const [data, setdata] = useState([]);

  return (
    <div className="App">
      <table></table>
    </div>
  );
}

export default App;
