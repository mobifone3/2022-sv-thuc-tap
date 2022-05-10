import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./redux/actions";
function App() {
  const dispatch = useDispatch();
  const sinhvien = useSelector((state) => state.sinhvien.data);
  const [data, setdata] = useState([]);
  useEffect(() => {
    if (sinhvien?.[0] || !data?.[0]) {
      let data = dispatch(actions.getAllData());
      setdata(data);
    }
  }, [data, dispatch, sinhvien]);

  return (
    <div className="App">
      <table></table>
    </div>
  );
}

export default App;
