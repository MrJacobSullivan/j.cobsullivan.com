import Head from 'next/head'
import { MDXProvider } from '@mdx-js/react'

const components = {}

export default function Portfolio(props) {
  const { meta, route, ...rest } = props

  const sharedHead = <Head>{/* meta tags go here */}</Head>

  if (route.startsWith('/blog')) {
    return function Layout({ children }) {
      return (
        <>
          {sharedHead}
          <div>
            <MDXProvider components={components}>{children}</MDXProvider>
          </div>
        </>
      )
    }
  }

  return function Layout({ children }) {
    return (
      <>
        {sharedHead}
        {children}
      </>
    )
  }
}
