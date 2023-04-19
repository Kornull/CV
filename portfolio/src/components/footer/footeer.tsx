import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  BsLinkedin,
  BsTelegram,
  BsSkype,
  BsFillFileEarmarkMedicalFill,
  BsGithub,
  BsFillTelephoneFill,
} from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';

import styles from './footer.module.scss';
import { LanguageQuery } from 'src/types';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerDescription}>
          <h2 className={styles.footerTitle}>{t(LanguageQuery.CONTACTS)}</h2>
          <ul className={styles.footerList}>
            <li className={styles.footerListItem}>
              <GrMail className={styles.footerListIcon} />{' '}
              <Link className={styles.footerLink} to="mailto:u.karnialiuk@gmail.com">
                u.karnialiuk@gmail.com
              </Link>
            </li>
            <li className={styles.footerListItem}>
              <BsFillTelephoneFill className={styles.footerListIcon} />
              <Link className={styles.footerLink} to="tel:+375297752412">
                +375-29-775-24-12
              </Link>
            </li>
            <li className={styles.footerListItem}>
              <BsSkype className={styles.footerListIcon} />
              <Link className={styles.footerLink} to="skype:live:vladimirkorneluk?chat">
                kornull
              </Link>
            </li>
            <li className={styles.footerListItem}>
              <BsTelegram className={styles.footerListIcon} />
              <Link className={styles.footerLink} to="https://t.me/kornul665" target="_blank">
                kornul665
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerDescription}>
          <h2 className={styles.footerTitle}>{t(LanguageQuery.PAGES)}</h2>
          <ul className={styles.footerList}>
            <li className={styles.footerListItem}>
              <BsLinkedin className={styles.footerListIcon} />
              <Link
                className={styles.footerLink}
                to="https://www.linkedin.com/in/uladzimir-karnialiuk/"
              >
                {'/uladzimir-karnialiuk'}
              </Link>
            </li>

            <li className={styles.footerListItem}>
              <BsGithub className={styles.footerListIcon} />
              <Link className={styles.footerLink} to="https://github.com/Kornull">
                Kornull
              </Link>
            </li>

            <li className={styles.footerListItem}>
              <BsFillFileEarmarkMedicalFill className={styles.footerListIcon} />
              <Link className={styles.footerLink} to="#">
                resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
