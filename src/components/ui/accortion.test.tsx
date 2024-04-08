import { describe, expect, test, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Accordion } from "./accordion";

describe("Accordion", () => {
  beforeEach(() => {
    render(
      <Accordion title="random title">
        <p>children</p>
        <p>children 2</p>
      </Accordion>
    );
  });

  test("should show title", () => {
    expect(screen.getByText(/random title/i)).toBeDefined();
  });

  test("should have childrens", () => {
    expect(screen.getAllByText(/children/i)).toBeDefined();
    expect(screen.getAllByText(/children 2/i)).toBeDefined();
  });
});
