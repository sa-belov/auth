import { useState } from 'react'

const useHttpLoader = () => {
  const [loading, setLoading] = useState(false)

  const wait = <T>(p: Promise<T>, onLoad?: (v: T) => void, onError?: (err) => void) => {
    setLoading(true)

    return p
      .then((r) => {
        onLoad && onLoad(r)
        setLoading(false)
      })
      .catch((err) => {
        onError && onError(err)
        setLoading(false)
      })
  }

  return { loading, wait }
}

export default useHttpLoader
