import PropTypes from 'prop-types';
import { BtnFeedback, BtnList, BtnItem } from './FeedbackOptions.styled';

export const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <BtnList>
      {options.map(feedback => (
        <BtnItem key={feedback}>
          <BtnFeedback type="button" onClick={() => onLeaveFeedback(feedback)}>
            {feedback}
          </BtnFeedback>
        </BtnItem>
      ))}
    </BtnList>
  );
};

Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
