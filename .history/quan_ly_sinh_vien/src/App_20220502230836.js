import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "./components/table/Table";
import { actions } from "./redux/actions";

import "./assets/css.css";
import "antd/dist/antd.css";
import TableSinhVien from "./components/table/TableSinhVien";
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
  console.log("đây là ", data);
  return (
    <div className="App">
      <div className="container">
        <TableSinhVien resource={data}></TableSinhVien>
      </div>
    </div>
  );
}

export default App;
