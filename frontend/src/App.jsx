import React, { useState } from "react";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Experience from "./pages/Experience";
import NavigateContext from "./ApiContext/NavigationContext";

export default function App() {
  const [currentPage, changeCurrentPage] = useState("Home");

  return (
    <>
      <NavigateContext.Provider value={{  changeCurrentPage }}>
        {currentPage == "Home" ? (
          <About />
        ) : currentPage == "Project" ? (
          <Project />
        ) : (
          <Experience />
        )}
      </NavigateContext.Provider>
    </>
  );
}
