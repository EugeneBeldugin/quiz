import {emailPage, pages} from '../data/pages.js'

export const storage = {
  add: (id, value) => {
    localStorage.setItem(id, value)
  },
  get: id => {
    return localStorage.getItem(id)
  },
  clear: () => {
    localStorage.clear()
  },
  getAllData: () => {
    return [ ...pages, emailPage].map(({ id, title, template }) => {
      return {
        order: id,
        title: title,
        type: template.type,
        answer: localStorage.getItem(id)
      }
    })
  }
}