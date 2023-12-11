import style from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={style.section}>
      <h2 className={style.section_title}>{title}</h2>
      {children}
    </section>
  );
};
