import React from "react";
import styled from "styled-components";

const KitContainer = styled.div`
  margin-top: 12px;
  padding: 8px 0;
  border-top: 1px solid #eee;
`;

const KitList = styled.ul`
  list-style: none;
  padding: 0;
  margin:  0;
  display: flex;
  flex-wrap:wrap;
  gap:8px;
`;

const KitItem = styled.li`
  background: #f0f0f0;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.9em;
`;

interface KitItemProps {
  aparatus: string;
}

interface KitProps {
  items: string | KitItemProps[]; // Accept both string & array
}

const Kit: React.FC<KitProps> = ({ items }) => {

  const kitArray = typeof items === 'string'
    ? items.split(',').map(item => ({ aparatus: item.trim() })) 
    : items;

  const validItems = kitArray.filter(item => item.aparatus && item.aparatus.trim() != '');

  if (!validItems.length) return null;

  return (
    <KitContainer>
      <KitList>
        {validItems.map((item, index) => (
          <KitItem key={index}>{item.aparatus}</KitItem>
        ))}
      </KitList> <small>*Purchase at the Store.</small>
    </KitContainer>
  );
};

export default Kit;
