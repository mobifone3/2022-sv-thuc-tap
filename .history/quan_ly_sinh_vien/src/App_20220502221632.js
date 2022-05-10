import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "./components/table/Table";
import { actions } from "./redux/actions";
function App() {
  const dispatch = useDispatch();
  const sinhvien = useSelector((state) => state.sinhvien.data);
  const [data, setdata] = useState([]);
  useEffect(() => {
    if (sinhvien?.[0]) {
      dispatch(actions.getAllData());
      setdata(sinhvien);
    }
  }, [dispatch, sinhvien]);
  console.log(data);
  return (
    <div className="App">
      <Table datas={data}></Table>
    </div>
  );
}

export default App;
