import { useState } from "react";
import InputHolder from "./views/InputHolder";
import TableHolder from "./views/TableHolder";
import Header from "./views/Common/Header";

function App() {
  const [formData, setFormData] = useState();
  const [svArr, setSvArr] = useState([]);

  const handleOnChange = (e) => {
    console.log(`DEBUG ------>`, formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSaveSV = () => {
    console.log("CALLED", formData, svArr);
    let newSvArr = [...svArr];
    newSvArr.push(formData);
    setSvArr(newSvArr);
    setFormData({});
  };

  return (
    <>
      <Header></Header>
      <div className="container mt-5">
        <div className="row">
          <div className="col-3">
            <InputHolder
              formData={formData}
              handleOnChange={handleOnChange}
              handleOnSaveSV={handleOnSaveSV}
            ></InputHolder>
          </div>
          <div className="col-9">
            <TableHolder svArr={svArr}></TableHolder>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;

//function table row
