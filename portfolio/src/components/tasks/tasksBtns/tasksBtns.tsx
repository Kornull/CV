import styles from '../tasks.module.scss';

type BtnsProps = {
  category: string[];
  task: string;
  handleChangeCategory: (el: string) => void;
};

export const TasksBtns = ({ category, task, handleChangeCategory }: BtnsProps) => {
  return (
    <div className={styles.category}>
      {category.map((ctg) => (
        <button
          key={ctg}
          type="button"
          className={styles.categoryBtns}
          onClick={() => handleChangeCategory(ctg)}
          style={task === ctg ? { color: '#fff59b', textDecoration: 'underline' } : undefined}
        >
          {ctg}
        </button>
      ))}
    </div>
  );
};
