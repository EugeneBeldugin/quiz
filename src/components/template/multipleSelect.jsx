import { useContext, useEffect, useState } from 'react'
import { CheckIcon } from '@heroicons/react/16/solid/index.js'
import { LangContext } from '../../Provider.jsx'
import { translate } from '../../utils/translate.js'
import { storage } from '../../api/storage.js'
import { getVariantsBranch } from '../../utils/variants.js'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

const MultipleSelect = ({ variants, id, linkPath, button }) => {
  const [selectedOptions, setSelectedOptions] = useState([])
  const [initialized, setInitialized] = useState(false)
  const { lang } = useContext(LangContext)

  const branch = getVariantsBranch()

  const items = variants[branch]

  useEffect(() => {
    const options = storage.get(id) ? storage.get(id).split(', ') : []
    setSelectedOptions(options)
    setInitialized(true)
  }, [id])

  useEffect(() => {
    if (initialized) {
      storage.add(id, selectedOptions.join(', '))
    }
  }, [id, selectedOptions, initialized])

  const handleCheckboxChange = event => {
    const value = event.target.value;
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(value)
        ? prevSelectedOptions.filter((option) => option !== value)
        : [...prevSelectedOptions, value]
    );
  };

  const isChecked = item => selectedOptions.includes(item);

  return (
    <>
      {
        items.map(element => {
          const item = translate(lang, element)
          return (
            <label key={item} className={`
              ${styles['item-wrapper']} 
              ${styles['flex-row-wrapper']}
              ${isChecked(item) ? styles.active : ''}
            `}>
              <span>{item}</span>
              <div className={`${styles.checkbox} ${isChecked(item) ? styles.checked : ''}`}>
                {
                  isChecked(item) && <CheckIcon />
                }
              </div>
              <input
                className={styles.hidden}
                value={item}
                type="checkbox"
                checked={isChecked(item)}
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
          className={`submit-link-button ${selectedOptions.length > 0 ? '' : 'disabled'}`}
        >
          {translate(lang, button)}
        </Link>
      }
    </>
  )
}

export default MultipleSelect