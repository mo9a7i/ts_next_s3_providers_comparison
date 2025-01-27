import 'server-only'
 
const dictionaries = {
  'en-US': () => import('./dictionaries/en-US.json').then((module) => module.default),
  'ar-SA': () => import('./dictionaries/ar-SA.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: 'en-US' | 'ar-SA') =>
  dictionaries[locale]()
