import { fireEvent, render, screen } from "@testing-library/react";
import { ElementList } from "./ElementList";
import "@testing-library/jest-dom";

describe("ElementList Component", () => {
  test("renders 100 list items initially", () => {
    render(<ElementList />);
    const listItems = screen.getAllByText(/Item \d+/);
    expect(listItems).toHaveLength(100);
  });

  test("removes an item when clicking the Remove button", () => {
    render(<ElementList />);
    const removeButton = screen.getAllByText("Remove")[0];
    fireEvent.click(removeButton);

    const removedItem = screen.queryByText("Item 1");
    expect(removedItem).toBeNull();
  });

  test("toggles the background color to green on every 3rd item click", () => {
    render(<ElementList />);

    const thirdItem = screen.getByText("Item 3");
    fireEvent.click(thirdItem);

    expect(thirdItem.closest("li")).toHaveStyle("background-color: #d4f4dd");

    fireEvent.click(thirdItem);
    expect(thirdItem.closest("li")).toHaveStyle("background-color: #f4f4f4");
  });

  test("only every 3rd item should be clickable to toggle background", () => {
    render(<ElementList />);

    const firstItem = screen.getByText("Item 1");
    const thirdItem = screen.getByText("Item 3");

    fireEvent.click(firstItem);
    expect(firstItem.closest("li")).toHaveStyle("background-color: #f4f4f4");

    fireEvent.click(thirdItem);
    expect(thirdItem.closest("li")).toHaveStyle("background-color: #d4f4dd");
  });
});
