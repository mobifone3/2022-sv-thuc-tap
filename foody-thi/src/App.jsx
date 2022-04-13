import React, { useState } from "react";

import Header from "./Common/Header";
import Search from "./Common/Search";
import FilterHolder from "./views/FilterHolder";
import CardHolder from "./views/CardHolder";

import "./assets/style.css";

import "./assets/style.css";

function App() {
  return (
    <>
      <Header></Header>

      <Search></Search>

      <div className="row mt-5" style={{ margin: 5 }}>
        <FilterHolder></FilterHolder>
        <CardHolder></CardHolder>
      </div>
    </>
  );
}
export default App;
