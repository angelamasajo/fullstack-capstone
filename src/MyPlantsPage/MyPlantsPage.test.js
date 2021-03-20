import React from "react";
import ReactDOM from "react-dom";
import MyPlantsPage from "./MyPlantsPage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MyPlantsPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
