import { useContext, useEffect, useState } from 'react'
import { LangContext } from '../../Provider.jsx'
import { translate } from '../../utils/translate.js'
import { storage } from '../../api/storage.js'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

const BubbleSelect = ({ variants, id, button, linkPath }) => {
  const [selectedOptions, setSelectedOptions] = useState([])
  const [activated, setActivated] = useState(false)
  const { lang } = useContext(LangContext)

  useEffect(() => {
    const options = storage.get(id) ? storage.get(id).split(', ') : []
    setSelectedOptions(options)
    setActivated(true)
  }, [id])

  useEffect(() => {
    if (activated) {
      storage.add(id, selectedOptions.join(', '))
    }
  }, [id, selectedOptions, activated])

  const handleCheckboxChange = event => {
    const value = event.target.value;
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(value)
        ? prevSelectedOptions.filter((option) => option !== value)
        : [...prevSelectedOptions, value]
    );
  };

  const isChecked = item => selectedOptions.includes(item)

  return (
    <>
      {
        variants.map(item => {
          return (
            <label key={item.value} className={`
              ${styles['item-wrapper']} 
              ${styles['rounded-item']}
              ${styles['flex-col-wrapper']}
              ${isChecked(translate(lang, item.value)) ? styles.active : ''}
            `}>
              <img src={item.icon} />
              <span>{translate(lang, item.value)}</span>
              <input
                className={styles.hidden}
                value={translate(lang, item.value)}
                type="checkbox"
                checked={isChecked(translate(lang, item.value))}
                onChange={handleCheckboxChange}
              />
            </label>
          )
        })
      }

      {
        button &&
        <Link
          to={linkPath}
          className={`submit-link-button ${selectedOptions.length > 2 ? '' : 'disabled'}`}
        >
          {translate(lang, button)}
        </Link>
      }
    </>
  )
}

export default BubbleSelect