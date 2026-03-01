import ColorChoice from './ColorChoice';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import styled from 'styled-components';

const StyledRewards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  list-style: none;
  margin: 0;
`;
const StyledRewardsItem = styled.li`
  border-radius : 12px;
  border: 1px solid #999;
  padding: 0 12px 4px 0;
  position: relative;

  svg {
    position: absolute;
    left: 4px;
    top: 1px;
  }

  div {
    margin-left: 26px;
    padding-top: 1px;
  }
`;

const Label = styled.div``;

interface Reward {
  0: string;
  1: number;
}
interface RewardsProps {
  items: Reward[];
}

const Rewards = ({ items }: RewardsProps) => {
  const rewards = items.map((reward, index) => {
    const value = reward[1];
    const label = `${reward[0]} ${value}`;
    return (
      <StyledRewardsItem 
        key={index}
        style={{ backgroundColor: ColorChoice(value) }}
      >
        <AccessibilityNewIcon />
        <Label>{label}</Label>
      </StyledRewardsItem>
    );
  });

  return ( 
    <StyledRewards>
      {rewards}
    </StyledRewards> 
  );
};

export default Rewards;
