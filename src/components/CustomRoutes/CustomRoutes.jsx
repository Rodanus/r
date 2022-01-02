import React from "react";
import { Routes, Route } from "react-router-dom";
import Forcast from "../Forcast/Forcast";
import Homepage from "../Homepage/Homepage";

function CustomRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/weather/:cityName" element={<Forcast />} />
      </Routes>
    </>
  );
}

export default CustomRoutes;
