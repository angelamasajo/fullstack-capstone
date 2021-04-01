import React from "react";
import ReactDOM from "react-dom";
import AllEntriesPage from "./AllEntriesPage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AllEntriesPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
