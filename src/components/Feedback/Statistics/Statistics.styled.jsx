import styled from 'styled-components';

export const StatisticsWrap = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  letter-spacing: 2px;
  text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const StatisticsTitle = styled.h2`
  font-size: 36px;
  font-weight: 500;
  letter-spacing: 3px;
  text-align: center;
`;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 36px;
  padding: 0;
  letter-spacing: 1.2px;
  list-style: none;
`;
