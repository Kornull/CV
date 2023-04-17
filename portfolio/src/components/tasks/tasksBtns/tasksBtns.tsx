import styles from '../tasks.module.scss';

type BtnsProps = {
  category: string[];
  task: string;
  handleChageCategory: (el: string) => void;
};

export const TasksBtns = ({
  category,
  task,
  handleChageCategory,
}: BtnsProps) => {
  return (
    <div className={styles.category}>
      {category.map((ctg) => (
        <button
          key={ctg}
          className={styles.categoryBtns}
          onClick={() => handleChageCategory(ctg)}
          style={
            task === ctg
              ? { color: '#fff59b', textDecoration: 'underline' }
              : undefined
          }
        >
          {ctg}
        </button>
      ))}
    </div>
  );
};
