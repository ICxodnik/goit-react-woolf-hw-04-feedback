import css from './index.module.css';
import React from 'react';
import { Notification } from 'components/Notification';

export const Statistic = props => {
  if (props.data.totalCount === 0) {
    return (
      <div className="statistic">
        <Notification level="info" message="There is no feedback" />
      </div>
    );
  }
  return (
    <ul className={css.statisticData}>
      <li className={css.dataEl}>
        <span className={css.title}>Good:</span>
        <span className={css.value}>{props.data.good}</span>
      </li>
      <li className={css.dataEl}>
        <span className={css.title}>Neutral:</span>
        <span className={css.value}>{props.data.neutral}</span>
      </li>
      <li className={css.dataEl}>
        <span className={css.title}>Bad:</span>
        <span className={css.value}>{props.data.bad}</span>
      </li>
      <li className={css.dataEl}>
        <span className={css.title}>Total:</span>
        <span className={css.value}>{props.data.totalCount}</span>
      </li>
      <li className={css.dataEl}>
        <span className={css.title}>Positive feedback:</span>
        <span className={css.value}>{props.data.totalPercent}%</span>
      </li>
    </ul>
  );
};
