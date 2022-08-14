import { useEffect, useState } from 'react'
import { TResponse } from '../types'
import { responseHandler } from '../utils/index'

// what options to set in useFetch
interface UseFetchOptions {
  url: string
  cache?: boolean
  cacheKey?: string
  cacheDuration?: number
  onError?: (error: Error) => void
  onSuccess?: (data: any) => void
  onLoading?: (loading: boolean) => void
  onComplete?: (complete: boolean) => void
  responseType?: TResponse
}

interface UseFetchResult<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

export function useFetch<T>(args: UseFetchOptions): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  let cache: string | T = ''
  useEffect(() => {
    setLoading(true)
    if (args.cache && args.cacheKey) {
      cache = localStorage.getItem(args.cacheKey) as string
      if (cache) {
        setData(JSON.parse(cache)) // why is this not working?
        setLoading(false)
      }
    }
    // handle when is not cache and have to fetch

    if (!cache) {
      fetch(args.url)
        .then((response) =>
          responseHandler(response, args.responseType || 'json')
        )
        .then((data) => {
          if (args.onSuccess) args.onSuccess(data)
          setData(data)
          if (args.cache && args.cacheKey) {
            localStorage.setItem(args.cacheKey, JSON.stringify(data))
          }
          setLoading(false)
        })
        .catch((error) => {
          if (args.onError) args.onError(error)
          setError(error)
          setLoading(false)
        })
    }
  }, [])

  return {
    data,
    error,
    loading
  }
}
