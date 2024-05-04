import css from './index.module.css';
import React from 'react';

export const Notification = props => {
  return {
    info: <div className={css.info}>{props.message}</div>,
    warning: <div className={css.warning}>{props.message}</div>,
    error: <div className={css.error}>{props.message}</div>,
  }[props.level];
};

Notification.defaultProps = {
  level: 'warning',
};
