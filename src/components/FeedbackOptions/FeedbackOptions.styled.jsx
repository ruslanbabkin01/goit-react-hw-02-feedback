import styled from '@emotion/styled';

export const BtnList = styled.ul`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.mainBackground};
  margin: 0 auto;
  justify-content: space-between;
  max-width: 220px;
`;

export const BtnItem = styled.li``;

export const BtnFeedback = styled.button`
  margin: 10px;
  color: ${props => props.theme.colors.dark};
`;
