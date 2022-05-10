import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const sinhvien = useSelector((state) => state.sinhvien.data);
  useEffect(() => {
    if (sinhvien?.[0]) {
    }
  }, [sinhvien]);

  const [data, setdata] = useState([]);

  return (
    <div className="App">
      <table></table>
    </div>
  );
}

export default App;
