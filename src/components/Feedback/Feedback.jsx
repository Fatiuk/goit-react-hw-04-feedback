import { useState } from 'react';
// ============ Options ============
import Options from './Options/Options';
// ============ Statistics ============
import Statistics from './Statistics/Statistics';
// ============ Statistics ============
import Notification from './Notification/Notification';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = state => {
    switch (state) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        return;
    }
  };

  // A function that counts the total number of votes (feedbacks)
  const counterTotalFeedbacks = () => {
    return good + neutral + bad;
  };
  // A function that counts the total percentage of positive votes (feedbacks)
  const counterPositivePercentage = () => {
    const totalFeedbacks = counterTotalFeedbacks();
    return Math.round((good / totalFeedbacks) * 100) || 0;
  };

  const totalFeedbacks = counterTotalFeedbacks();
  const positivePercentage = counterPositivePercentage();

  return (
    <>
      <Options
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleLeaveFeedback}
      ></Options>
      {totalFeedbacks !== 0 ? (
        <Statistics
          title="Statistics 📊"
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedbacks={totalFeedbacks}
          positivePercentage={positivePercentage}
        ></Statistics>
      ) : (
        <Notification message="Unfortunately, we don't have any feedback at the moment. 😔"></Notification>
      )}
    </>
  );
};

export default Feedback;
