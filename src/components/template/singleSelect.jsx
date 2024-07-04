import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LANG_ID, SINGLE_SELECT_IMAGE } from '../../data/constants.js'
import { LangContext } from '../../Provider.jsx'
import { translate } from '../../utils/translate.js'
import { storage } from '../../api/storage.js'
import styles from './styles.module.css'

const singleSelect = ({ items, id, type }) => {
  const [chosen, setChosen] = useState('')

  const { lang, setLang } = useContext(LangContext)

  const navigate = useNavigate();

  useEffect(() => {
      setChosen(storage.get(id) || '')
  }, [id])

  const handleClick = event => {
    const value = event.currentTarget.getAttribute('data-value')

    if (id === LANG_ID) {
      const language = event.currentTarget.getAttribute('data-key')
      setLang(language)
    }

    setChosen(value)
    storage.add(id, value)

    setTimeout(() => {
      navigate(`/quiz/${id + 1}`)
    }, 2000)
  }

  return (
    <>
      {
        items.map(item => (
          <li
            key={translate(lang, item.value)}
            data-value={translate(lang, item.value)}
            data-key={id === LANG_ID ? item.key : ''}
            onClick={handleClick}
            className={`
              ${styles['item-wrapper']} 
              ${chosen === translate(lang, item.value) ? styles.active : ''} 
              ${type === SINGLE_SELECT_IMAGE ? styles['flex-col-wrapper'] : ''}
            `}
          >
            { type === SINGLE_SELECT_IMAGE &&
              <span className={styles['link-icon']}>
                {item.icon}
              </span>
            }
            {translate(lang, item.value)}
            { item.desc && `${translate(lang, item.desc)}` }
          </li>
        ))
      }
    </>
  )
}

export default singleSelect