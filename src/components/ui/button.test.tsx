import { describe, expect, test, beforeEach, afterEach, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  beforeEach(() => {
    render(<Button>Test Button</Button>);
  });

  afterEach(cleanup);

  test("Should show a children text", () => {
    expect(screen.getByText(/Test Button/i)).toBeDefined();
  });

  test("should have been called on click", () => {
    const button = screen.getByText(/Test Button/i);
    const buttonSpy = vi.spyOn(button, "click");
    button.click();
    expect(buttonSpy).toHaveBeenCalledTimes(1);
  });
});
