import style from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={style.info_wrapper}>
      <p className={style.info}>Good: {good}</p>
      <p className={style.info}>Neutral: {neutral}</p>
      <p className={style.info}>Bad: {bad}</p>
      <p className={style.info}>Total: {total}</p>
      <p className={style.info}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};
