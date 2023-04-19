import { Link } from 'react-router-dom';

import styles from './linksBlock.module.scss';

type LinksProps = {
  deploy: string;
  github: string;
};

const LinksBlock = ({ deploy, github }: LinksProps) => {
  return (
    <div className={styles.links}>
      <Link className={styles.linksHref} target="_blank" to={deploy}>
        Deploy
      </Link>
      <Link className={styles.linksHref} target="_blank" to={github}>
        GitHub
      </Link>
    </div>
  );
};

export default LinksBlock;
