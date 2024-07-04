import { useEffect, useState } from 'react'
import { Loader } from '../../components/index.js'
import { useNavigate } from 'react-router-dom'

const LoaderPage = () => {
  const [progress, setProgress] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(interval)
          return 100
        }
        return prevProgress + 1
      });
    }, 50)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        navigate('/email')
      }, 1000)

      return () => clearTimeout(timeout)
    }
  }, [progress, navigate])

  return (
    <div>
      <Loader progress={progress} />
    </div>
  )
}

export default LoaderPage