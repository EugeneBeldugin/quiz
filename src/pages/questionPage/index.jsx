import { useContext } from 'react'
import styles from './styles.module.css'
import { Template } from '../../components/index.js'
import { translate } from '../../utils/translate.js'
import { LangContext } from '../../Provider.jsx'

const Page = ({ item }) => {
  const { title, subtitle } = item;

  const { lang } = useContext(LangContext)


  return (
    <div className={styles['page-container']}>
      <div>
        <h2 className={styles.title}>{translate(lang, title)}</h2>
        { subtitle && <p className={styles.subtitle}>{translate(lang, subtitle)}</p> }
        <Template item={item} lang={lang} />
      </div>
    </div>
  )
}

export default Page