import styled from 'styled-components';

export const OptionsWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

export const FeedbackBtn = styled.button`
  cursor: pointer;
  padding: 8px 20px;
  text-transform: capitalize;
  letter-spacing: 2px;
  color: #464748;
  background-color: #fcfcfc;
  border: 0.1px solid #3131313c;
  border-radius: 4px;
  transition: all 300ms;
  &:hover {
    color: #222222;
    background-color: #e7e7e7;
    border-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  &:nth-child(1):hover {
    background-color: #289f4e7f;
  }
  &:nth-child(2):hover {
    background-color: #dbc83ca2;
  }
  &:nth-child(3):hover {
    background-color: #db3c3ca1;
  }
`;
