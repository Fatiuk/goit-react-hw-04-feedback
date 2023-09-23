import React from 'react';
import { OptionsWrap, FeedbackBtn } from './Options.styled';

const Options = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsWrap>
      {options.map(option => (
        <FeedbackBtn
          type="button"
          key={option}
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </FeedbackBtn>
      ))}
    </OptionsWrap>
  );
};

export default Options;
