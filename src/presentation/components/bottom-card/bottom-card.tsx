import styled from 'styled-components/native';

const BottomCard = styled.View<{ color?: string }>`
  background-color: ${props => props.color || '#fff'};
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  padding: 16px 32px;
`;

export default BottomCard;
