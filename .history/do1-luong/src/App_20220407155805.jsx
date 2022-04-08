import { useState } from "react";
import Header from "./components/common/header/Header";
import AddSv from "./components/form/AddSv";
import Table from "./components/table/Table";

function App() {
  const [formData, setformData] = useState();
  const handleOnChange = (e) => {
    setformData(...formData, [e.target.name].e.target.value);
  };
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-4">
            <AddSv handleOnChange={handleOnChange}></AddSv>
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
