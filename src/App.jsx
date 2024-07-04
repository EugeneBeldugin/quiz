import { ProgressBar } from './components/index.js'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <ProgressBar currentPage={1} totalPages={5} />
      <Outlet />
    </>
  )
}

export default App
