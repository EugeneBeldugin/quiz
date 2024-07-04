import { locales } from '../data/locales.js'

export const translate = (lang, path) => {

  const parts = path.split('.');
  let value = locales[lang];

  for (let part of parts) {
    value = value[part];
    if (value === undefined) {
      return path;
    }
  }

  return value;
}