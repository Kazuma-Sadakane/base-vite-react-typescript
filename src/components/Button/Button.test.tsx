import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

test("render button", () => {
  const onClick = jest.fn();
  render(<Button label="clickMe" onClick={onClick} />);
  const buttonElement = screen.getByText("clickMe");
  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});
