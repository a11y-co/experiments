import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders the pricing comparison", () => {
  const { getByText } = render(<App />);

  expect(getByText("Pay annually")).toBeInTheDocument();
  expect(getByText("Indie")).toBeInTheDocument();
  expect(getByText("Startup")).toBeInTheDocument();
  expect(getByText("Growth")).toBeInTheDocument();
  expect(getByText("Enterprise")).toBeInTheDocument();
});
