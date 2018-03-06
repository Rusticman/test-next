import React from 'react';
import LazyLoad from 'react-lazyload';

'';
import HomeIcon from '../../../../components/Icon/home';
import EmailIcon from '../../../../components/Icon/envelope';
import PhoneIcon from '../../../../components/Icon/phone';
import styles from './styles.less';

function Footer() {
  return (
    <div className={styles.container}>
      <LazyLoad height={200} once offset={100}>
        <div className={styles.content}>
          <img
            className={styles.logo}
            src="https://cdn.checkd.media/favicons/cm.png"
            alt="Checkd Media logo"
          />
          <h2 className={styles.header}>Checkd Media </h2>
          <div className={styles.ethos}>
            Established. Brands. Community Driven.
          </div>
        </div>
        <div className={styles.content}>
          <h2 className={styles.header}>get in touch</h2>
          <div>
            <HomeIcon />
            <span>60 Fountain Street, Manchester, M2 2FE</span>
          </div>
          <div>
            <PhoneIcon />
            <span>0161 555 5555</span>
          </div>
          <div>
            <EmailIcon />
            <span>hello@checkd.media</span>
          </div>
          <div>
            <a
              className={styles['social-wrapper']}
              href="https://twitter.com/CheckdMedia"
            >
              <img
                className={styles['social-logo']}
                src="https://cdn.checkd.media/images/twitter.png"
                alt="twitter logo"
              />
            </a>
            <a
              className={styles['social-wrapper']}
              href="https://www.facebook.com/checkdMedia/"
            >
              <img
                className={styles['social-logo']}
                src="https://cdn.checkd.media/images/facebook.png"
                alt="facebook logo"
              />
            </a>
            <a
              className={styles['social-wrapper']}
              href="https://www.instagram.com/checkdmedia"
            >
              <img
                className={styles['social-logo']}
                src="https://cdn.checkd.media/images/instagram-2.png"
                alt="instagram logo"
              />
            </a>
            <a
              className={styles['social-wrapper']}
              href="https://www.linkedin.com/company/checkd-media"
            >
              <img
                className={styles['social-logo']}
                src="https://cdn.checkd.media/images/linkedin.png"
                alt="linkedin logo"
              />
            </a>
          </div>
        </div>
      </LazyLoad>
    </div>
  );
}

export default Footer;
