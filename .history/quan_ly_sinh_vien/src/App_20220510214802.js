import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "./components/TableSinhVien";
import { actions } from "./redux/actions";

import "./assets/css.css";
import "antd/dist/antd.css";
function App() {
  const sinhvien = useSelector((state) => state.sinhvien.data);
  const dispatch = useDispatch();
  const [data, setdata] = useState();
  // kiểm tra xem dữ liệu ban đầu có chưa, nếu chưa có thì mới gán
  useEffect(() => {
    if (!sinhvien || !data) {
      dispatch(actions.getAllData());
      setdata(sinhvien);
    }
  }, [data, dispatch, sinhvien]);
  // kiểm tra xem state của redux có thay đổi hay k, nếu có thay đổi thì cập nhật lại "data"
  useLayoutEffect(() => {
    setdata(sinhvien);
  }, [sinhvien]);
  return (
    <div className="App">
      <div className="container">
        <div className="main">
          <h1 className="main-title">Quản lý sinh viên</h1>

          <Table resource={data}></Table>
        </div>
      </div>
    </div>
  );
}

export default App;
