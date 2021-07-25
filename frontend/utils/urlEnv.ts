export const getUrlEnv = () => {
  if (process.env.NODE_ENV === 'development') return 'http://localhost:3001'
  if (process.env.NODE_ENV === 'production')
    return 'https://be-ndc.herokuapp.com'
}
