import css from './index.module.css';

export const FeedbackOptions = props => {
  function getOptions() {
    let content = [];
    for (const vote in props.options) {
      content.push(
        <button
          className={css.button}
          key={vote}
          onClick={() => props.addVote(vote)}
        >
          {props.options[vote]}
        </button>
      );
    }
    return content;
  }

  return <div className={css.feedbackOptions}>{getOptions()}</div>;
};
