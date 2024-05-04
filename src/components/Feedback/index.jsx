import css from './index.module.css';
import React, { useState } from 'react';
import { Statistic } from 'components/Statistic';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Section } from 'components/Section';
import { Options, getDefaultValue } from 'shared/optionsEnum';

export const Feedback = props => {
  const [feedbackResults, setFeedbackResults] = useState(getDefaultValue());

  function getStatisticData() {
    return {
      ...feedbackResults,
      totalCount: getTotalCount(),
      totalPercent: getTotalPercent(),
    };
  }

  const getTotalCount = () => {
    return Object.values(feedbackResults).reduce(
      (total, stat) => (total += stat),
      0
    );
  };

  const getTotalPercent = () => {
    return Math.round((feedbackResults.good / getTotalCount()) * 100);
  };

  const addVote = vote => {
    console.log(vote);
    setFeedbackResults(prev => {
      return { ...prev, [vote]: prev[vote] + 1 };
    });
  };

  return (
    <div className={css.feedback}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Options} addVote={addVote} />
      </Section>
      <Section title="Statistics">
        <Statistic data={getStatisticData()} />
      </Section>
    </div>
  );
};
