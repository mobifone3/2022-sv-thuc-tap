import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./redux/actions";
function App() {
  const dispatch = useDispatch();
  const sinhvien = useSelector((state) => state.sinhvien.data);
  useEffect(() => {
    if (sinhvien?.[0]) {
      let data = dispatch(actions.getAllData());
      console.log(data);
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
