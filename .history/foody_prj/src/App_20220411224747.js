import Header from "./view/common/Header";
import InputField from "./view/components/InputField";

function App() {
  return (
    <div className="App">
      <>
        <Header></Header>
        <main className="foody_main">
          <div className="foody_search">
            <InputField></InputField>
          </div>
        </main>
      </>
    </div>
  );
}

export default App;
