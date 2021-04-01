import React from "react";
import ReactDOM from "react-dom";
import PlantListItem from "./PlantListItem";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PlantListItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
