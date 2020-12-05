import axios from 'axios'

export const yelp = () => {
  const token =
    'Bearer KJz6FYJatjH3ix-PDaCD1FAtfivCKyrZirwZMhE07DFN4QO3HxcVzUThXG3TkAoay7wPjywi7vRmUm2y_qki5hQ-BPYKlWiS4xFPYuesF2Mo5d8j3SnWesBXgzPKX3Yx'
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    baseURL: 'https://api.yelp.com/v3/businesses',
  })
}
