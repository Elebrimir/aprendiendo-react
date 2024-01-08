import { useState, useEffect } from 'react'
import { getRamdomFact } from '../services/facts.js'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRamdomFact().then(newFact => setFact(newFact))
  }
  // para recuperar la cita
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
