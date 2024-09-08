import { useCallback, useState } from "react";
import { ListContainer, ListWrapper } from "../../styles";
import { MemoizedListItem } from "../ListItem";

interface ListItem {
  id: number;
  isGreen: boolean;
}

export const ElementList = () => {
  const [items, setItems] = useState<ListItem[]>(
    Array.from({ length: 100 }, (_, index) => ({
      id: index + 1,
      isGreen: false,
    })),
  );

  const handleRemove = useCallback((id: number) => {
    setItems((items) => items.filter((item) => item.id !== id));
  }, []);

  const handleToggleGreen = useCallback((id: number) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isGreen: !item.isGreen } : item,
      ),
    );
  }, []);

  return (
    <ListWrapper>
      <ListContainer>
        {items.map((item) => (
          <MemoizedListItem
            key={item.id}
            item={item}
            onRemove={handleRemove}
            onToggleGreen={handleToggleGreen}
          />
        ))}
      </ListContainer>
    </ListWrapper>
  );
};
