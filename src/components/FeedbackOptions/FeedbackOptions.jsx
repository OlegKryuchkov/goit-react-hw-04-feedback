import style from './FeedbackOptions.module.css';

export const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            name={option}
            onClick={() => onLeaveFeedback(option)}
            className={style.feed_back_btn}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
