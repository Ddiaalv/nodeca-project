import Head from 'next/head'
import { FC } from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { NavMenu } from '../NavMenu/NavMenu'
import { Notebook, Paper } from './Layout.styles'
import { LayoutProps } from './Layout.types'

const Layout: FC<LayoutProps> = ({
  children,
  title = 'David Díaz Alvarez',
}) => (
  <Notebook>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Next boilerplate." />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="description"
        content="Template creado a partir del proyecto de Next.js generado por medio de create-next-app donde se utiliza Typescript y se añaden nuevas "
      />
      <meta
        name="keywords"
        content="template, react, javascript, typescript, next.js, webpack, babel, emotion, styled-components, storybook, jest, react-testing-library, cypress, eslint, prettier, husky, lint-staged, git, github, vercel, PWA"
      />
      <meta name="robots" content="all" />
      <link rel="manifest" href="/manifest.json" />
      <link
        href="/icons/favicon-16x16.png"
        rel="icon"
        type="image/png"
        sizes="16x16"
      />
      <link
        href="/icons/favicon-32x32.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <link rel="apple-touch-icon" href="/icons/apple-icon.png" />
      <meta name="theme-color" content="#282c34" />
    </Head>
    <NavMenu />
    <Paper>
      <Header />
      <main>{children}</main>
      <Footer />
    </Paper>
  </Notebook>
)

export default Layout
