export const getUrlEnv = () => {
  if (process.env.NODE_ENV === 'development') return 'http://192.168.0.16:3001'
  if (process.env.NODE_ENV === 'production') return 'Undeterminated'
}
