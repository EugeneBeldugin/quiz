import { translate } from '../../utils/translate.js'
import { useCallback, useContext, useEffect, useState } from 'react'
import { LangContext } from '../../Provider.jsx'
import styles from './styles.module.css'
import { storage } from '../../api/storage.js'
import { Link } from 'react-router-dom'

const Email = ({ item }) => {
  const [value, setValue] = useState('')
  const [activated, setActivated] = useState(false)
  const [error, setError] = useState(false)

  const { lang } = useContext(LangContext)

  const { placeholder, terms, id, template, path } = item

  useEffect(() => {
    const email = storage.get(id) || ''
    setValue(email)
    setActivated(true)
  }, [id])

  useEffect(() => {
    if (activated) {
      storage.add(id, value)
    }
  }, [id, value, activated])

  const validateEmail = email => {
    const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return reg.test(String(email).toLowerCase());
  };

  const debounce = (func, delay) => {
    let debounceTimer;
    return function(...args) {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const handleChange = event => {
    const data = event.target.value;
    setValue(data);
    validateDebounced(data);
  };

  const validateDebounced = useCallback(
    debounce((data) => {
      if (!validateEmail(data)) {
        setError(true);
      } else {
        setError(false);
      }
    }, 2000),
    []
  );

  return (
    <>
      <div className={styles['email-container']}>
        <input
          value={value}
          className={`${styles.input} ${error ? styles['error-input'] : ''}`}
          placeholder={translate(lang, placeholder)}
          onChange={handleChange}
        />
        <div className={styles['error-container']}>
          { error && translate(lang, 'errors.email') }
        </div>
        <p className={styles.terms}>{translate(lang, terms)}</p>
      </div>

      {
        template.button &&
        <Link
          to={path}
          className={`submit-link-button ${!error && validateEmail(value) ? '' : 'disabled'}`}
        >
          {translate(lang, template.button)}
        </Link>
      }
    </>
  )
}

export default Email