import styles from './styles.module.css'
import { useContext } from 'react'
import { LangContext } from '../../Provider.jsx'
import { translate } from '../../utils/translate.js'

const Loader = ({ progress }) => {
  const { lang } = useContext(LangContext)
  return (
    <div className={styles['loader-container']}>
      <div className={styles['progress-circle']}>
        <svg className={styles.svg} viewBox="0 0 36 36">
          <path
            className={styles['circle-bg']}
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className={styles.circle}
            strokeDasharray={`${progress}, 100`}
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div className={styles.percentage}>
          {progress}%
        </div>
      </div>
      <p>{translate(lang, 'loading.subtitle')}</p>
    </div>
  );
};

export default Loader