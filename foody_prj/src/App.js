import Header from "./view/common/Header";
import FoodyContent from "./view/components/FoodyContent";
import InputField from "./view/components/InputField";

function App() {
  return (
    <div className="App">
      <>
        <Header></Header>
        <main className=" container">
          <div className="foody_search">
            <InputField></InputField>
            <FoodyContent></FoodyContent>
          </div>
        </main>
      </>
    </div>
  );
}

export default App;
