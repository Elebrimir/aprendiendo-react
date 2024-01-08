const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRamdomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}

export const getUrlFromFact = async (fact) => {
  const firstThreeWords = fact.split(' ', 3).join(' ')

  const res = await fetch(`https://cataas.com/cat/says/${firstThreeWords}?fontSize=50&fontColor=red`)
  const url = res.url
  console.log(url)
  return url
}
