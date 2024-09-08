import { fireEvent, render, screen } from "@testing-library/react";
import { MemoizedListItem } from "./ListItem";
import "@testing-library/jest-dom";

describe("MemoizedListItem Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockRemove = jest.fn();
  const mockToggleGreen = jest.fn();

  const setup = (id: number, isGreen: boolean) => {
    render(
      <MemoizedListItem
        item={{ id, isGreen }}
        onRemove={mockRemove}
        onToggleGreen={mockToggleGreen}
      />,
    );
  };

  test("renders item with correct text and remove button", () => {
    setup(1, false);

    const itemText = screen.getByText("Item 1");
    expect(itemText).toBeInTheDocument();

    const removeButton = screen.getByText("Remove");
    expect(removeButton).toBeInTheDocument();
  });

  test("calls onRemove when the Remove button is clicked", () => {
    setup(1, false);

    const removeButton = screen.getByText("Remove");
    fireEvent.click(removeButton);

    expect(mockRemove).toHaveBeenCalledWith(1);
  });

  test("calls onToggleGreen when the 3rd item is clicked", () => {
    setup(3, false);

    const clickableItem = screen.getByText("Item 3");
    fireEvent.click(clickableItem);

    expect(mockToggleGreen).toHaveBeenCalledWith(3);
  });

  test("does not call onToggleGreen for non-clickable items", () => {
    setup(1, false);

    const nonClickableItem = screen.getByText("Item 1");
    fireEvent.click(nonClickableItem);

    expect(mockToggleGreen).not.toHaveBeenCalled();
  });

  test("renders with green background if isGreen is true", () => {
    setup(3, true);

    const clickableItem = screen.getByText("Item 3");
    expect(clickableItem.closest("li")).toHaveStyle(
      "background-color: #d4f4dd",
    );
  });

  test("renders with default background if isGreen is false", () => {
    setup(3, false);

    const clickableItem = screen.getByText("Item 3");
    expect(clickableItem.closest("li")).toHaveStyle(
      "background-color: #f4f4f4",
    );
  });
});
