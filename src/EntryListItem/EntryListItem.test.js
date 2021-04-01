import React from "react";
import ReactDOM from "react-dom";
import EntryListItem from "./EntryListItem";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<EntryListItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
