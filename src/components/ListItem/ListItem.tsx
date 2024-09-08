import { memo } from "react";
import {
  ClickableItem,
  ItemText,
  ListItemContainer,
  NonClickableItem,
  RemoveButton,
} from "../../styles";

interface ListItemProps {
  item: {
    id: number;
    isGreen: boolean;
  };
  onRemove: (id: number) => void;
  onToggleGreen: (id: number) => void;
}

export const ListItem = ({ item, onRemove, onToggleGreen }: ListItemProps) => {
  return (
    <ListItemContainer isGreen={item.isGreen}>
      {item.id % 3 === 0 ? (
        <ClickableItem onClick={() => onToggleGreen(item.id)}>
          <ItemText>Item {item.id}</ItemText>
          <RemoveButton
            onClick={(e) => {
              e.stopPropagation();
              onRemove(item.id);
            }}
          >
            Remove
          </RemoveButton>
        </ClickableItem>
      ) : (
        <NonClickableItem>
          <ItemText>Item {item.id}</ItemText>
          <RemoveButton onClick={() => onRemove(item.id)}>Remove</RemoveButton>
        </NonClickableItem>
      )}
    </ListItemContainer>
  );
};

export const MemoizedListItem = memo(ListItem);
