import React from 'react';
import css from 'components/Section/index.module.css';

export const Section = props => {
  return (
    <div className={css.section}>
      <h2>{props.title}</h2>
      <div>{props.children}</div>
    </div>
  );
};
