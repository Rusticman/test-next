import React from 'react';
import { mediaUrl} from "../../../../../helpers";
import styles from './styles.less';

function Reason({ title, description }) {
  return (
    <div
      className={styles.reason}
    >
      <div className={styles.image}>
        <img src={mediaUrl('un2jh40vmy')} />
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        <h3>{description}</h3>
        <br />
      </div>
    </div>
  );
}

export default Reason;
