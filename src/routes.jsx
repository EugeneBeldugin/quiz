import { createBrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import { emailPage, helloPage, pages, thanksPage } from './data/pages.js'
import { QuestionPage, LoaderPage } from './pages/index.js'

const childrenRoutes = pages.map(item => {
  const route = {
    element: <QuestionPage item={item} />
  }
  if (item.id === 1) {
    route.index = true
  }
  route.path = `${item.id}`

  return route;
})

export const router = createBrowserRouter([
  {
    path: '/',
    element: <QuestionPage item={helloPage} />
  },
  {
    path: 'quiz/',
    element: <App />,
    children: childrenRoutes
  },
  {
    path: 'loader',
    element: <LoaderPage />
  },
  {
    path: 'email',
    element: <QuestionPage item={emailPage} />
  },
  {
    path: 'thanks',
    element: <QuestionPage item={thanksPage} />
  }
])