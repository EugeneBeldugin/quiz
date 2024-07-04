import styles from './styles.module.css'
import { useContext } from 'react'
import { LangContext } from '../../Provider.jsx'
import { translate } from '../../utils/translate.js'
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import { CSVLink } from 'react-csv'
import { storage } from '../../api/storage.js'

const Basic = ({ item }) => {
  const { lang } = useContext(LangContext)
  const { image, final, template } = item
  const csvData = storage.getAllData()


  return (
    <div className={styles['basic-container']}>
      <img className={styles.image} src={image} />

      {
        final &&
        <CSVLink data={csvData} className={styles['download-button']}>
          <ArrowDownTrayIcon className={styles['download-icon']} />
          {translate(lang, template.download)}
        </CSVLink>
      }

    </div>
  )
}

export default Basic