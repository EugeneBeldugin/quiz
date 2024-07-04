import SingleSelect from './singleSelect.jsx'
import MultipleSelect from './multipleSelect.jsx'
import BubbleSelect from './bubbleSelect.jsx'
import {
  BUBBLE_SELECT,
  EMAIL_TYPE,
  MULTIPLE_SELECT, REDIRECT_TYPE,
  SINGLE_SELECT,
  SINGLE_SELECT_IMAGE
} from '../../data/constants.js'
import { Link, useNavigate } from 'react-router-dom'
import { translate } from '../../utils/translate.js'
import Email from './email.jsx'
import Basic from './basic.jsx'
import styles from './styles.module.css'
import { storage } from '../../api/storage.js'

const Template = ({ item, lang }) => {
  const { variants, id, template, path, final } = item
  const { type, direction, button } = template

  const navigate = useNavigate()

  const linkPath = path ? path : `/quiz/${id + 1}`

  const handleClick = () => {
    storage.clear()
    navigate(linkPath)
  }

  return (
    <>
      <ul
        className={`${styles['items-container']} ${styles[direction]}`}
        style={ type === BUBBLE_SELECT ? { flexWrap: 'wrap' } : {} }
      >

        {
          (type === SINGLE_SELECT || type === SINGLE_SELECT_IMAGE) &&
          <SingleSelect items={variants} id={id} type={type} />
        }

        {
          type === MULTIPLE_SELECT &&
          <MultipleSelect
            variants={variants}
            id={id}
            linkPath={linkPath}
            button={button}
          />
        }

        {
          type === BUBBLE_SELECT &&
          <BubbleSelect
            variants={variants}
            id={id}
            linkPath={linkPath}
            button={button}
          />
        }

        { type === EMAIL_TYPE && <Email item={item} /> }

        { type === REDIRECT_TYPE && <Basic item={item} /> }

      </ul>

      {
        (button && final) &&
        <button onClick={handleClick} className="submit-link-button">{translate(lang, button)}</button>
      }

      {
        (button && id === 0) &&
        <Link
          to={linkPath}
          className={'submit-link-button'}
        >
          {translate(lang, button)}
        </Link>
      }
    </>
  )
}

export default Template