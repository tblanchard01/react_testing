import React from "react";
import { mount } from "enzyme";
import App from "./App";

describe("Note", () => {
  let app = mount(<App />);
  it("renders the app title", () => {
     expect(app.find("h2").text()).toEqual("Note to self");
  });
});
