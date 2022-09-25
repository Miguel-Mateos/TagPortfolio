import { useAppContextV2 } from '@Context/ContextV2'
import React from 'react'

interface IUseCrudExtra {
  extra: {
    name: string
    value: any
  }
}

export const useCrud = () => {
  const { addWork } = useAppContextV2()
  const onSubmit = (e: React.FormEvent, others?: IUseCrudExtra) => {
    e.preventDefault()
    const { target } = e
    const form = new FormData(target as HTMLFormElement)
    const data = Object.fromEntries(form.entries())
    if (others) {
      const { extra } = others
      data[extra.name] = extra.value
    }
    addWork(data)
  }
  return {
    onSubmit
  }
}
