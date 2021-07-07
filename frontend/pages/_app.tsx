import { AppInitialProps } from 'next/app'
import { ComponentType } from 'react'
import { Provider } from 'react-redux'
import { store } from '../src/store/store'
import './_app.css'

const MyApp = ({
  Component,
  pageProps,
}: {
  Component: ComponentType<AppInitialProps>
  pageProps: AppInitialProps
}) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
