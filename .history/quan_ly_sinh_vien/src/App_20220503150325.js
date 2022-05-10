import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "./components/table/TableSinhVien";
import { actions } from "./redux/actions";

import "./assets/css.css";
import "antd/dist/antd.css";
function App() {
  const sinhvien = useSelector((state) => state.sinhvien.data);
  const dispatch = useDispatch();
  const [data, setdata] = useState();
  useEffect(() => {
    if (!sinhvien?.[0] || !data?.[0]) {
      dispatch(actions.getAllData());
      setdata(sinhvien);
    }
  }, [data, dispatch, sinhvien]);
  return (
    <div className="App">
      <div className="container">
        <Table resource={data}></Table>
      </div>
    </div>
  );
}

export default App;
