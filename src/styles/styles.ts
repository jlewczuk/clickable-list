import styled from "styled-components";

export const ListWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const ListContainer = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

interface ListItemProps {
  isGreen: boolean;
}

export const ListItemContainer = styled.li<ListItemProps>`
  padding: 15px;
  border-radius: 8px;
  background-color: ${(props) => (props.isGreen ? "#d4f4dd" : "#f4f4f4")};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
  }
`;

export const ClickableItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  background-color: transparent;
  border-radius: 8px;
  transition: background-color 0.3s ease;
`;

export const NonClickableItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const ItemText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #333;
`;

export const RemoveButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #ff4d4f;
  color: white;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d9363e;
  }
`;
