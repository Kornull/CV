import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  BsLinkedin,
  BsTelegram,
  BsFillFileEarmarkMedicalFill,
  BsGithub,
  BsFillTelephoneFill,
} from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';

import { LanguageQuery } from 'src/types';

import styles from './footer.module.scss';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.footer} id="contacts">
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
                target="_blank"
              >
                {'/uladzimir-karnialiuk'}
              </Link>
            </li>

            <li className={styles.footerListItem}>
              <BsGithub className={styles.footerListIcon} />
              <Link className={styles.footerLink} to="https://github.com/Kornull" target="_blank">
                Kornull
              </Link>
            </li>

            <li className={styles.footerListItem}>
              <BsFillFileEarmarkMedicalFill className={styles.footerListIcon} />
              <Link
                className={styles.footerLink}
                to="https://drive.google.com/file/d/1SaDKoMw1JwEAuc3MKbuXBOBiutMv_qW4/view?usp=drive_link"
                target="_blank"
              >
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
