import { useState, useEffect } from 'react'

type Data = {
  hello: string
}

const defaultData = { hello: '.....' }

export default function useDemo() {
  const [data, setData] = useState<Data>(defaultData)

  useEffect(() => {
    setData({ hello: 'Hola' })
  }, [])

  return data
}
