import { useState } from "react";
import Header from "./components/common/header/Header";
import AddSv from "./components/form/AddSv";
import Table from "./components/table/Table";

function App() {
  const [formData, setFormData] = useState();
  const [arr, setArr] = useState([]);
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleOnClick = () => {
    const newArr = [...arr];
    newArr.push(formData);
    setArr(newArr);
    setFormData(''})
  };
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-4">
            <AddSv formData={formData} handleOnChange={handleOnChange} handleOnClick={handleOnClick}></AddSv>
          </div>
          <div className="col-md-8 w-full">
            <Table></Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
