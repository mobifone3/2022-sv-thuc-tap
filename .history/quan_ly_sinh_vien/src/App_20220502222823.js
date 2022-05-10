import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "./components/table/Table";
import { actions } from "./redux/actions";
function App() {
  const sinhvien = useSelector((state) => state.sinhvien.data);
  const dispatch = useDispatch();
  const [data, setdata] = useState();
  useEffect(() => {
    if (!sinhvien?.[0] || !data?.[0]) {
      dispatch(actions.getAllData());
      setdata(sinhvien);
    }
  }, [sinhvien]);
  console.log("đây là ", data);
  return (
    <div className="App">
      <Table resource={data}></Table>
    </div>
  );
}

export default App;
