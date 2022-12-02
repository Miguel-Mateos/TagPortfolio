import { useEffect } from 'react'

export const useFetch = (url: string, callback: (data: any) => void) => {
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => callback(data))
  }, [])
  return {
    loading: true
  }
}

export const usePromiseAll = ({
  promise,
  setStates
}: {
  promise: Promise<any>[]
  setStates: ((data: any) => void)[]
}) => {
  useEffect(() => {
    Promise.all(promise).then((data) => {
      setStates.forEach((setState, index) => {
        setState(data[index])
      })
    })
  }, [])
}
