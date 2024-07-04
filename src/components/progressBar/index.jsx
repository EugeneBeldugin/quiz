import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import styles from './styles.module.css'
import { Link, useLocation } from 'react-router-dom'

const Index = ({ totalPages }) => {
  const location = useLocation()
  const currentPage = parseInt(location.pathname.replace('/quiz/', ''), 10) || 1;
  const width = currentPage / totalPages * 100
  return (
    <div className={styles.container}>
      {
        currentPage > 1 &&
        <Link to={`/quiz/${currentPage - 1}`} className={styles['link-button']}>
          <ChevronLeftIcon className={styles.icon} />
        </Link>
      }
      <div className={styles['pages-container']}>
        <span className={styles['current-page']}>{currentPage}</span><span>/{totalPages}</span>
      </div>
      <div className={styles['progress-container']}>
        <div className={styles.progress} style={{ width: `${width}%` }}></div>
      </div>
      {/* також ми можемо використовувати елемент <progress />, але в умові кастомний */}
      {/*<progress value={currentPage} max={totalPages} />*/}
    </div>
  )
}

export default Index