import { describe, expect, test, beforeEach, afterEach, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { AccordionItem } from "./accordionItem";

describe("AccordionItem", () => {
  beforeEach(() => {
    render(
      <AccordionItem
        id={1}
        title="Accordion Item"
        onClick={() => {}}
        openId={null}
      >
        <p>Accordion content</p>
      </AccordionItem>
    );
  });

  afterEach(cleanup);

  test("Should show title text", () => {
    expect(screen.getByText("Accordion Item")).toBeDefined();
  });

  test("should call onClick handler when clicked", () => {
    const accordionItem = screen.getByText(/Accordion Item/i);
    const accordionItemSpy = vi.spyOn(accordionItem, "click");
    accordionItem.click();
    expect(accordionItemSpy).toHaveBeenCalled();
  });
});
