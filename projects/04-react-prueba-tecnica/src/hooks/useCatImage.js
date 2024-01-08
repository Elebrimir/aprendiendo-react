import { useState, useEffect } from 'react'
import { getUrlFromFact } from '../services/facts.js'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // para recuperar la imagen cuando tenemos una cita nueva
  useEffect(() => {
    if (!fact) return
    getUrlFromFact(fact).then(newUrl => setImageUrl(newUrl))
  }, [fact])

  return { imageUrl }
}
