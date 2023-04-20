import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageQuery } from 'src/types';

import styles from '../profile.module.scss';

export const ProfileSummary = () => {
  const { t } = useTranslation();
  const [isOpenText, setOpenText] = useState<boolean>(false);

  return (
    <div className={styles.profileSummary}>
      <article className={styles.profileSummaryText}>
        {!isOpenText ? t(LanguageQuery.ABOUT) : t(LanguageQuery.ABOUT_FULL)}
        <button
          className={styles.profileSummaryTextButton}
          onClick={() => setOpenText(!isOpenText)}
        >
          {!isOpenText ? t(LanguageQuery.BTN_MORE) : t(LanguageQuery.BTN_CLOSE)}
        </button>
      </article>
    </div>
  );
};
